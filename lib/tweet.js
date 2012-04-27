var avfs_hash_tag = 'avfs';
var tweet_last_id = null;
var tweet_rpp = 50;
var cached_tweets = [];
var limit_tweet_cache = 50;

function addScript(url, id){
    try{
        var script = document.createElement('script');
        script.id=id;
        script.type='text/javascript';
        script.charset='utf-8';
        script.src=url;
        var objHead = document.getElementsByTagName("head")[0];
        objHead.appendChild(script);
    }catch(e){
        if(console){
            console.log(e)
        }
    }
}

function getResult(json){
    var data = json["results"];
    var res = [];
    for(var i = 0; i < data.length; ++i){
        var tmp_array = [];
        tmp_array['id'] = data[i].id_str;
        tmp_array['user_id'] = data[i].from_user_id;
        tmp_array['user'] = data[i].from_user;
        tmp_array['text'] = data[i].text
        tmp_array['created_at'] = data[i].created_at;
        if(data[i].geo == null){
            tmp_array['latitude'] = tmp_array['longitude'] = null;
        }
        else if(data[i].geo.type == "Point"){
            tmp_array['latitude'] = data[i].geo.coordinates[0];
            tmp_array['longitude'] = data[i].geo.coordinates[1];
            //console.log(data[i].geo.coordinates[0]+" "+data[i].geo.coordinates[1])
        }
        else{
            console.log('unsupported geo type');
        }

        if(data[i].entities){
            tmp_array['entities'] = data[i].entities;
        }

        res.push(tmp_array);
    }
    delete data;

    return res;
}

function tweet2string(tweet){
    var text = tweet.text;
    text = text.replace(/(https?:\/\/[0-9a-zA-Z\.\/\-_\?\&\=]*)/g, '<a href=$1 target="_blank">$1</a>');
    var cls = '';
    if(tweet.longitude != null && tweet.latitude != null){
        var style = "border-bottom: 1px solid black; background-color: #CCFFCC;";
    }
    else{
        var style = "border-bottom: 1px solid black;";
    }
    return('<div style="' + style + '" id="tweet_' + tweet.id + '" class="tweet">@<a href="http://twitter.com/'+ tweet.user + '" target="_blank">' + tweet.user + "</a> : " + text + "</div>");
}

function registerGeoLocatedTwitterers(data){
    var user_contents = [];
    for(var i = 0; i < data.length; ++i){
        if(data[i].longitude != null && data[i].latitude != null){
            var tweet = [];
            tweet['latitude'] = data[i].latitude;
            tweet['longitude'] = data[i].longitude;
            tweet['label'] = data[i].user;
            tweet['contents'] = '<div style="background-color: black; opacity: 0.9;"><div style="float:left"><img src="https://api.twitter.com/1/users/profile_image?screen_name=' + data[i].user + '&size=normal" width="48" height="48" /></div><div style="color: red;">'+ data[i].text + "</div>" ;
            user_contents.push(tweet);
        }
    }
    AVfS.LoadPlots(user_contents);
}

function twitterSearchCallback(json){
    var res = getResult(json);
    if(res.length == 0) return;

    tweet_last_id = res[0].id;

    res.reverse();
    cached_tweets = cached_tweets.concat(res);

    registerGeoLocatedTwitterers(res);

    while(cached_tweets.length > limit_tweet_cache)
        cached_tweets.shift();

    var div = document.getElementById('timeline');

    var str = [];
    for(var i = 0; i < cached_tweets.length; ++i){
        str[i] = tweet2string(cached_tweets[i]);
    }
    div.innerHTML = str.join("\n");
    div.scrollTop = div.scrollHeight;

    console.log('updated: new ' + res.length + ' tweets');
    console.log(tweet_last_id);
}

function updateTweets(){
    console.log('update');
    var query = "%23" + avfs_hash_tag;
    url = 'http://search.twitter.com/search.json?q=' + query + '&callback=twitterSearchCallback&rpp=' + tweet_rpp + '&include_entities=true&result_type=recent';
    if(tweet_last_id != null)
        url += '&since_id=' + tweet_last_id;
    addScript(url, null);
}

updateTweets();
setTimeout("message()", 15000);
function message() {
    updateTweets();
    setTimeout("message()", 15000);
}

//
// Anywhere
//

var anywhere_consumer_key = 'ICWt9PHCuWM9fs5TV6P4lQ';

function loadAnywhere(){
    addScript('http://platform.twitter.com/anywhere.js?id=' + anywhere_consumer_key + '&v=1', null);
}

function putTweetBox(id){
    //if(twttr == undefined || geo_retrieving) return false;
    if(twttr == undefined) return false;

    if(typeof AVfS.latitude === "undefined" || typeof AVfS.longitude === "undefined"){
        var option = {};
    }
    else{
        var option = {
            lat: AVfS.latitude,
            long: AVfS.longitude,
        };
    }
    twttr.anywhere(function(T){
        T(id).tweetBox({
            defaultContent: "#" + avfs_hash_tag,
            width: 300, //px
            height: 64, //px
            data: option,
        });
    });
    return true;
}

loadAnywhere();
setTimeout("tweetBoxPutter()", 1000);
function tweetBoxPutter(){
    if(!putTweetBox('#tweet_box'))
        setTimeout("tweetBoxPutter()", 1000);
}