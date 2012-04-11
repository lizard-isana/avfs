

var AVfS = AVfS || {};

(function(global) {
 "use strict";

AVfS.Pref =function(){
  this.release = "20120410";
  this.version = "0.0.5" ;
  this.tle_dir = "./tle/";
  //this.tle_dir = "../tle/data/"; // for lizard-tail.com deployment
  this.texture_dir = "./textures/"
}


//for local test (update 20120410) * only for avfs_local.js

AVfS.Map = {
  "default":{
    "texture":'world_topo_bathy_200404_3x4096x2048.jpg',
    "title":'The Blue Marble: Next Generation',
    "description":"Credit: <a href='http://earthobservatory.nasa.gov/Features/BlueMarble/'>NASA's Earth Observatory</a>",
    "ambient":"low",
  },
  "fire_20120321":{
    "texture":'global_fire_map_201203.jpg',
    "title":'Global Fire Map 03/21/2012 - 03/30/2012',
    "description":"Credit: <a href='http://earthdata.nasa.gov/data/nrt-data/rapid-response'>NASA/EOSDIS Rapid Response Imagery</a>",
    "ambient":"high",
  
  },
  "chlorophyll_2002":{
    "texture":'global_chlorophyll_concentrations.jpg',
    "title":'Global Chlorophyll Concentrations',
    "description":"Data collected between July 1, 2002, and December 31, 2004 <br/>ref. <a href='http://www.nasa.gov/vision/earth/lookingatearth/plankton.html'>The Mathematical Ocean: Deriving Planetary Health from Tiny Ocean Plants</a>(NASA)",
    "ambient":"high",
  },  
  "asst_2003":{
    "texture":'average_sea_surface_temperature_2003.jpg',
    "title":'2003 Average Sea Surface Temperature AATSR/Envisat',
    "description":"ref. <a href='http://earth.eo.esa.int/cgi-bin/satimgsql.pl?show_url=738&startframe=0'>Satellite Images</a>(ESA)",
    "ambient":"high",
  },
  "chlorophyll_2006":{
    "texture":'global_chlorophyll_concentrations_2006_spring',
    "title":'Global Chlorophyll Concentrations 2006 Spring',
    "description":"ref. <a href='http://earthobservatory.nasa.gov/IOTD/view.php?id=6735'>A World of Chlorophyll : Image of the Day</a>(NASA)",
    "ambient":"high",
  },
  "global_ecco2":{
    "texture":'global_ecco2.jpg',
    "title":'Global Sea Surface Currents and Temperature',
    "description":"ref. <a href='http://svs.gsfc.nasa.gov/vis/a000000/a003900/a003912/index.html'>Global Sea Surface Currents and Temperature</a>(NASA/GSFC)",
    "ambient":"high",
  },
  "coud_fraction_201203":{
    "texture":'coud_fraction_201203.jpg',
    "title":'Cloud Fraction 03/01/2012 - 04/01/2012 Terra/MODIS',
    "description":"ref. <a href='http://neo.sci.gsfc.nasa.gov/Search.html?datasetId=MODAL2_M_CLD_FR'>NASA Earth Observations</a>(NASA)",
    "ambient":"high",
  },
  "forest_height_2012":{
    "texture":'global_forest_height_2012',
    "title":'Forest Height ICESAT/GLAS, MODIS, TRMM',
    "description":"ref. <a href='http://www.jpl.nasa.gov/news/news.cfm?release=2012-044'>NASA Map Sees Earth's Trees in a New Light</a>(NASA)",
    "ambient":"high",
  }
}

AVfS.Globe = function(param){
  var earth_radius = 6378; // km
  var au = 149598000;
  var rad=Math.PI/180;

  var SS = new Orb.SolarSystem();
  var earth = SS.Earth();

  var container = document.getElementById(param.container);
  var scene = new THREE.Scene();
  var mesh;
  var camera;
  var ambientlight;
  var sun;
  var renderer;
  
  function init_camera(){
      camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );
      camera.position.z = earth_radius+400;
      scene.add( camera );
      camera.lookAt( scene.position );
  }

  function init_mesh(){
    var texture = THREE.ImageUtils.loadTexture( param.texture);
    if(param.renderer == "webgl"){
      var material = new THREE.MeshLambertMaterial( { map: texture , overdraw: true} );  
    }else{
      var material = new THREE.MeshBasicMaterial( { map: texture , overdraw: true} );  
    }
    var geometry = new THREE.SphereGeometry(earth_radius, param.density, param.density);
    mesh = new THREE.Mesh( geometry, material);
    scene.add( mesh );
  }

  function init_lights(){
    if(param.sunlight){
      var date = new Date();
      var time = new Orb.Time(date);    
      var earth_position = earth.position.ecliptic(time)
      sun = new THREE.DirectionalLight(0xFFFFFF, 1.0, 0);
      sun.position.set( 0-earth_position.x*au, 0-earth_position.z*au, 0-earth_position.y*au);
      scene.add(sun);
    }
    if(param.ambientlight){
      if(param.ambientlight == "none"){
        ambientlight = new THREE.AmbientLight(0x000000);
      }else if(param.ambientlight == "low"){
        ambientlight = new THREE.AmbientLight(0x333333);
      }else if(param.ambientlight == "mid"){
        ambientlight = new THREE.AmbientLight(0x666666);
      }else if(param.ambientlight == "high"){
        ambientlight = new THREE.AmbientLight(0xFFFFFF);
      }
      scene.add(ambientlight);
    }
  }

  function init_renderer(){
    if(param.renderer == "webgl"){
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        //canvas: document.createElement( 'canvas' ),
        clearColor: 0x000000,
        clearAlpha: 0,
        maxLights: 4,
        stencil: true,
        preserveDrawingBuffer: true
     });
   }else if(param.renderer == "canvas"){
     renderer = new THREE.CanvasRenderer();
   }

    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );
   }
   
   var updateRotation = function(){
      var date = new Date();
      var time = new Orb.Time(date);
      var hour_angle = time.gmst()*15;
      mesh.rotation.y = hour_angle*rad;
      return hour_angle;
   }

   var updateSun = function(){
     if(param.sunlight){
      var date = new Date();
      var time = new Orb.Time(date);    
      var earth_position = earth.position.ecliptic(time)
      var sun_rect = {
        x:0-earth_position.x*au,
        y:0-earth_position.y*au,
        z:0-earth_position.z*au
      }
      sun.position.set(sun_rect.x, sun_rect.z, -1*sun_rect.y); //y-z must be swapped for webgl coordination
      return sun_rect;
    }else{
      return {x:0, y:0, z:0};
    }
   }

   var updateCameraPosition = function(position){
     camera.position.x = position.x;
     camera.position.y = position.z;
     camera.position.z = -1*position.y;
     camera.lookAt( scene.position );
   }

   var render = function(){
     renderer.render( scene, camera );
   }
   
   init_camera();
   init_mesh();
   init_renderer();
   init_lights();
   updateRotation();
   render();
   return {
      "updateSun": function(){
        var sun_rect = updateSun()
        return sun_rect;
       },
      "updateRotation": function(){
        var hour_angle = updateRotation();
        return hour_angle;
      },
      "changeTexture": function(texture){
        var tex = THREE.ImageUtils.loadTexture(texture);
        mesh.material.map = tex;
      },
      "changeAmbientLight": function(light){
        scene.remove( ambientlight )
        if(light == "none"){
          ambientlight = new THREE.AmbientLight(0x000000);
        }else if(light == "low"){
          ambientlight = new THREE.AmbientLight(0x333333);
        }else if(light == "mid"){
          ambientlight = new THREE.AmbientLight(0x666666);
        }else if(light == "high"){
          ambientlight = new THREE.AmbientLight(0xFFFFFF);
        }
        console.log(light)
        scene.add(ambientlight);
      },
      "updateCameraPosition": function(position){updateCameraPosition(position)},
      "render": function(){render()},
   }
}

AVfS.Tool = AVfS.Tool || {

  DataLoader : function(option){
    var XMLhttpObject;
    var createXMLhttpObject = function(){
      XMLhttpObject = false;
      if(window.XMLHttpRequest) {
        XMLhttpObject = new XMLHttpRequest();
      }else if(window.ActiveXObject) {
        try {
          XMLhttpObject = new ActiveXObject("Msxml2.XMLHTTP");
        }catch(e){
          if(console){console.log(e)}
          XMLhttpObject = new ActiveXObject("Microsoft.XMLHTTP");
        }
      }
      return XMLhttpObject;
    }
    
    var Loader = function(option) {
  
      XMLhttpObject=createXMLhttpObject();
      if (!XMLhttpObject){return;}
      XMLhttpObject.open("GET", option.path, option.ajax);
      XMLhttpObject.send(null);
      if(option.ajax==false){
        try{
          if(option.format === "json"){
            var data = JSON.parse(XMLhttpObject.responseText);
          }else{
            var data = XMLhttpObject.responseText;
          }
          if(option.callback !== undefined){
            option.callback(data);
          }else{
            return data;
          }
        }catch(e){
          if(console){console.log(e)}
          return;
        }
      }else{
        try{
          XMLhttpObject.onreadystatechange = function() {
            if(XMLhttpObject.readyState == 4){
              if(XMLhttpObject.status == 200){
                var data = JSON.parse(XMLhttpObject.responseText);
                if(callback){
                  callback(data);
                }else{
                  return data;
                }
              }
            }else{
              return;
            }
          }
        }catch(e){
          if(console){console.log(e)}
          return;
        }
      }
    }
    return Loader(option);
  }, // end AVfS.Tool.DataLoader

  GLChecker : function(){
    // check maximum texture size 
    var canvas = document.getElementById("gltest");
    var gl = canvas.getContext("experimental-webgl");
    var max_texture_size = gl.getParameter(gl.MAX_TEXTURE_SIZE);
    return {
    "max_texture_size": max_texture_size,
    }
    
  }
} // end AVfS.Tool


AVfS.ShowCenterLabel=function(option){
  //container
  //string
  var container = document.getElementById(option.container);
  container.width = AVfS.screen_width;
  container.height = AVfS.screen_height;
  var context = container.getContext("2d");
  context.font = "11px Arial";
  context.fillStyle = "rgba(200,200,200,1)"
  context.fillText(option.string, AVfS.screen_width/2+15,AVfS.screen_height/2-13);
  context.strokeStyle = "rgba(255,255,255,0.6)";
  context.beginPath();
  context.moveTo(AVfS.screen_width/2+0,AVfS.screen_height/2+0)
  context.lineTo(AVfS.screen_width/2+10,AVfS.screen_height/2-10)
  context.lineTo(AVfS.screen_width/2+150,AVfS.screen_height/2-10)
  context.stroke()

}

AVfS.shortUpdator = function () {
    var hour_angle = AVfS.globe.updateRotation();
    document.getElementById("hour_angle").innerHTML = "hour angle: " + hour_angle;
    var date = new Date();
    var time = new Orb.Time(date);
    var iss_rect = AVfS.iss.position.rectangular(time);
    var camera_position = {
      x:iss_rect.x*1.5,
      y:iss_rect.y*1.5,
      z:iss_rect.z*1.5
    }
    AVfS.globe.updateCameraPosition(camera_position);
    AVfS.globe.render();
    document.getElementById("iss").innerHTML = "position of the iss:<br/> x: " + iss_rect.x + "<br/>" + "y: " + iss_rect.y + "<br/>" + "z: " + iss_rect.z;
    window.setTimeout("AVfS.shortUpdator()", 1000) 
  }
  
AVfS.midUpdator =  function() {
    var sun_rect = AVfS.globe.updateSun();
    document.getElementById("sun").innerHTML = "position of the sun:<br/> x: " + sun_rect.x + "<br/>" + "y: " + sun_rect.y + "<br/>" + "z: " + sun_rect.z;
    window.setTimeout("AVfS.midUpdator()", 60000) 
  }
  


AVfS.getScreenSize = function() {
  if ( window.innerWidth ) {
    var width = window.innerWidth;
  }
  else if ( document.documentElement && document.documentElement.clientWidth != 0 ) {
    var width =  document.documentElement.clientWidth;
  }
  else if ( document.body ) {
    var width = document.body.clientWidth;
  }
  if ( window.innerHeight ) {
    var height = window.innerHeight;
  }
  else if ( document.documentElement && document.documentElement.clientHeight != 0 ) {
    var height =  document.documentElement.clientHeight;
  }
  else if ( document.body ) {
    var height =  document.body.clientHeight;
  }
  this.width = width;
  this.height = height;
  return this;
}

AVfS.StartUp = function(){
  var screen = AVfS.getScreenSize();
  AVfS.screen_height = screen.height;
  AVfS.screen_width = screen.width;


  var q = new AVfS.QueryDecoder();
  if(q["data"]){
    var id = q["data"];
  }else{
    var id = "default";
  }
  var pref = new AVfS.Pref;
  var texture = pref.texture_dir + AVfS.Map[id].texture;
  var ambientlight = AVfS.Map[id].ambient;
  document.getElementById("title").innerHTML = AVfS.Map[id].title;
  document.getElementById("description").innerHTML =AVfS.Map[id].description;
  if(q["texture"]){
    var texture = pref.texture_dir + q["texture"] + '.jpg';
  }
  console.log("texture: " + texture)
  
  if(q["ambient"]){
    var ambientlight = q["ambient"];
  }
  console.log("ambientlight: " + ambientlight)
  
  if(q["renderer"]){
    var renderer = q["renderer"];
  }else{
    var renderer = 'webgl';
  }
  console.log("renderer: " + renderer)

  AVfS.globe = new AVfS.Globe({
    container:'container',
    renderer: renderer, //webgl,canvas 
    texture: texture,
    density: 60,
    sunlight:true,
    ambientlight:ambientlight
  })



  if(AVfS.tle == undefined){
    var tle =  AVfS.TLELoader()
  }else{
    var tle =  AVfS.tle;
  }
  
  AVfS.iss = new Orb.Satellite(tle);
  
  AVfS.ShowCenterLabel({
    container:'interface',
    string:"internatonal space station"
  })
  var gl_check = new AVfS.Tool.GLChecker
  document.getElementById("gl").innerHTML = "webgl max texture size : " + gl_check.max_texture_size
  AVfS.shortUpdator();
  AVfS.midUpdator();
}


AVfS.ChangeDataSet = function(id){
  var pref = new AVfS.Pref;
  var texture = pref.texture_dir + AVfS.Map[id].texture;
  var ambientlight = AVfS.Map[id].ambient;
  document.getElementById("title").innerHTML = AVfS.Map[id].title;
  document.getElementById("description").innerHTML =AVfS.Map[id].description;
  AVfS.globe.changeTexture(texture);
  AVfS.globe.changeAmbientLight(ambientlight);
}

AVfS.TLELoader = function(){
  var nocache = "?nocache=" +(new Date()).getTime();
  var pref = new AVfS.Pref;
  var data = AVfS.Tool.DataLoader({
    ajax:false,
    format:"text",
    path:pref.tle_dir + "iss.txt",
  })
  var tle = AVfS.TLEbyEpoch(data);
  return tle;
}

AVfS.TLEbyEpoch = function(data){
  var decoder = function(data){
    var source_array = data.split("\n");
    var source_array_length = source_array.length;
    var tle_array=[];
    for(var i=0; i<source_array_length; i=i+3){
      if(source_array[i]){
        var tmp_array=[];
        var sat_name =  source_array[i];
        var line1 =  source_array[i+1];
        var line2 =  source_array[i+2];
        tmp_array["sat_name"] = sat_name;
        tmp_array["catalog_number"] = Number(line1.slice(2,7));
        tmp_array["epoch"] = Number(line1.substring(20,32));
        tmp_array["first_line"] =line1
        tmp_array["second_line"] =line2
        tle_array.push(tmp_array);
      }
    }
  return tle_array;
  }
  var tle_array = decoder(data);
  var tle_array_length = tle_array.length;
  var now = new Date()
  var d0 = new Date(Date.UTC(now.getFullYear(),0,0,0,0));
  var now_in_days = (now - d0)/86400000;
  for (var i = 0; i < tle_array_length; i ++) {
    var epoch = tle_array[i]["epoch"];
    if(now_in_days>epoch){
       var tmp_array = tle_array[i];
    }
  }
  return tmp_array;
}

AVfS.TLEbyID = function(data,id){
  var source_array = data.split("\n");
  for(var i=0, l = source_array.length; i<l; i=i+3){
    if(source_array[i]){
      var tmp_array=[];
      var sat_name =  source_array[i];
      var line1 =  source_array[i+1];
      var line2 =  source_array[i+2];
      var catalog_number = String(line1.slice(2,7));
      if(id == catalog_number){
        var first_line = line1;
        var second_line =line2;
        break;
      }
    }
  }
  return {
    first_line: first_line,
    second_line: second_line
  }
}

AVfS.QueryDecoder = function(){
  var query=[];
  var search = decodeURIComponent(location.search);
  var q = search.replace(/^\?/, '&').split("&");
  for(var i=0, l = q.length; i<l;i++){
   var tmp_array = q[i].split("=");
    var name = tmp_array[0];
    var value = tmp_array[1];
    query[name] = value;
  }
  return query;
}

global.onload = function(){
  AVfS.StartUp()
}

}(this));


//JSON2.js http://www.JSON.org/js.html
var JSON;if(!JSON){JSON={};}
(function(){'use strict';function f(n){return n<10?'0'+n:n;}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}
if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+
('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');};}}());

