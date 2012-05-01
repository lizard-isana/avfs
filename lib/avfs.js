var AVfS = AVfS || {};

(function(global) {
 "use strict";

AVfS.Pref =function(){
  this.release = "20120410";
  this.version = "0.0.5" ;
  this.tle_dir = "./tle/";
  this.article_dir = "./article/";
  this.plot_dir = "./plot/";
  //this.data_dir = "./data/"
  //this.tle_dir = "../tle/data/"; // for lizard-tail.com deployment
  this.texture_dir = "./textures/"
  this.message = 'Welcome to the "A View from Space"! This is current position of International Space Station.';
}

AVfS.Map = {
  "default":{
    "texture":'world_topo_bathy_200404_3x4096x2048.jpg',
    "title":'The Blue Marble: Next Generation',
    "description":"Credit: <a href='http://earthobservatory.nasa.gov/Features/BlueMarble/'>NASA's Earth Observatory</a>",
    "sun":"false",
    "ambient":"high",
  },
  "fire_20120321":{
    "texture":'global_fire_map_201203.jpg',
    "title":'Global Fire Map 03/21/2012 - 03/30/2012',
    "description":"Credit: <a href='http://lance-modis.eosdis.nasa.gov/cgi-bin/imagery/firemaps.cgi'>Rapid Response - LANCE - Global Fire Maps</a>",
    "sun":"false",
    "ambient":"high",
  },
  "chlorophyll_2002":{
    "texture":'global_chlorophyll_concentrations.jpg',
    "title":'Global Chlorophyll Concentrations',
    "description":"Data collected between July 1, 2002, and December 31, 2004 <br/>ref. <a href='http://www.nasa.gov/vision/earth/lookingatearth/plankton.html'>The Mathematical Ocean: Deriving Planetary Health from Tiny Ocean Plants</a>(NASA)",
    "sun":"false",
    "ambient":"high",
  },  
  "asst_2003":{
    "texture":'average_sea_surface_temperature_2003.jpg',
    "title":'2003 Average Sea Surface Temperature AATSR/Envisat',
    "description":"ref. <a href='http://earth.eo.esa.int/cgi-bin/satimgsql.pl?show_url=738&startframe=0'>Satellite Images</a>(ESA)",
    "sun":"false",
    "ambient":"high",
  },
  "land_surface_temperature_day_201202":{
    "texture":'land_surface_temperature_day_201202.jpg',
    "title":'Land Surface Temperature [Day] (Terra/MODIS) 2012.02.01-2012-03.01',
    "description":"ref. <a href='http://neo.sci.gsfc.nasa.gov/Search.html?group=19'>NASA Earth Observations</a>(NASA)",
    "sun":"false",
    "ambient":"high",
  },
  "land_surface_temperature_night_201202":{
    "texture":'land_surface_temperature_night_201202.jpg',
    "title":'Land Surface Temperature [Night] (Terra/MODIS) 2012.02.01-2012-03.01',
    "description":"ref. <a href='http://neo.sci.gsfc.nasa.gov/Search.html?group=51'>NASA Earth Observations</a>(NASA)",
    "sun":"false",
    "ambient":"high",
  },
  "chlorophyll_2006":{
    "texture":'global_chlorophyll_concentrations_2006_spring',
    "title":'Global Chlorophyll Concentrations 2006 Spring',
    "description":"ref. <a href='http://earthobservatory.nasa.gov/IOTD/view.php?id=6735'>A World of Chlorophyll : Image of the Day</a>(NASA)",
    "sun":"false",
    "ambient":"high",
  },
  "global_ecco2":{
    "texture":'global_ecco2.jpg',
    "title":'Global Sea Surface Currents and Temperature',
    "description":"ref. <a href='http://svs.gsfc.nasa.gov/vis/a000000/a003900/a003912/index.html'>Global Sea Surface Currents and Temperature</a>(NASA/GSFC)",
    "sun":"false",
    "ambient":"high",
  },
  "coud_fraction_201203":{
    "texture":'coud_fraction_201203.jpg',
    "title":'Cloud Fraction 03/01/2012 - 04/01/2012 Terra/MODIS',
    "description":"ref. <a href='http://neo.sci.gsfc.nasa.gov/Search.html?datasetId=MODAL2_M_CLD_FR'>NASA Earth Observations</a>(NASA)",
    "sun":"false",
    "ambient":"high",
  },
  "forest_height_2012":{
    "texture":'global_forest_height_2012',
    "title":'Forest Height ICESAT/GLAS, MODIS, TRMM',
    "description":"ref. <a href='http://www.jpl.nasa.gov/news/news.cfm?release=2012-044'>NASA Map Sees Earth's Trees in a New Light</a>(NASA)",
    "sun":"false",
    "ambient":"high",
  },
  "population_density_2000":{
    "texture":'population_density',
    "title":'Population Density 2000',
    "description":"ref. <a href='http://neo.sci.gsfc.nasa.gov/Search.html?group=64'>NASA Earth Observations</a>(NASA)",
    "sun":"false",
    "ambient":"high",
  }
};

AVfS.ContentsMesh = {
  "N90":{ "E0":{"Article":[],"Plot":[]},"E30":{"Article":[],"Plot":[]},"E60":{"Article":[],"Plot":[]},"E90":{"Article":[],"Plot":[]},"E120":{"Article":[],"Plot":[]},"E150":{"Article":[],"Plot":[]},"W180":{"Article":[],"Plot":[]},"W150":{"Article":[],"Plot":[]},"W120":{"Article":[],"Plot":[]},"W90":{"Article":[],"Plot":[]},"W60":{"Article":[],"Plot":[]},"W30":{"Article":[],"Plot":[]} },
  "N60":{ "E0":{"Article":[],"Plot":[]},"E30":{"Article":[],"Plot":[]},"E60":{"Article":[],"Plot":[]},"E90":{"Article":[],"Plot":[]},"E120":{"Article":[],"Plot":[]},"E150":{"Article":[],"Plot":[]},"W180":{"Article":[],"Plot":[]},"W150":{"Article":[],"Plot":[]},"W120":{"Article":[],"Plot":[]},"W90":{"Article":[],"Plot":[]},"W60":{"Article":[],"Plot":[]},"W30":{"Article":[],"Plot":[]} },
  "N30":{ "E0":{"Article":[],"Plot":[]},"E30":{"Article":[],"Plot":[]},"E60":{"Article":[],"Plot":[]},"E90":{"Article":[],"Plot":[]},"E120":{"Article":[],"Plot":[]},"E150":{"Article":[],"Plot":[]},"W180":{"Article":[],"Plot":[]},"W150":{"Article":[],"Plot":[]},"W120":{"Article":[],"Plot":[]},"W90":{"Article":[],"Plot":[]},"W60":{"Article":[],"Plot":[]},"W30":{"Article":[],"Plot":[]} },
  "S0" :{ "E0":{"Article":[],"Plot":[]},"E30":{"Article":[],"Plot":[]},"E60":{"Article":[],"Plot":[]},"E90":{"Article":[],"Plot":[]},"E120":{"Article":[],"Plot":[]},"E150":{"Article":[],"Plot":[]},"W180":{"Article":[],"Plot":[]},"W150":{"Article":[],"Plot":[]},"W120":{"Article":[],"Plot":[]},"W90":{"Article":[],"Plot":[]},"W60":{"Article":[],"Plot":[]},"W30":{"Article":[],"Plot":[]} },
  "S30":{ "E0":{"Article":[],"Plot":[]},"E30":{"Article":[],"Plot":[]},"E60":{"Article":[],"Plot":[]},"E90":{"Article":[],"Plot":[]},"E120":{"Article":[],"Plot":[]},"E150":{"Article":[],"Plot":[]},"W180":{"Article":[],"Plot":[]},"W150":{"Article":[],"Plot":[]},"W120":{"Article":[],"Plot":[]},"W90":{"Article":[],"Plot":[]},"W60":{"Article":[],"Plot":[]},"W30":{"Article":[],"Plot":[]} },
  "S60":{ "E0":{"Article":[],"Plot":[]},"E30":{"Article":[],"Plot":[]},"E60":{"Article":[],"Plot":[]},"E90":{"Article":[],"Plot":[]},"E120":{"Article":[],"Plot":[]},"E150":{"Article":[],"Plot":[]},"W180":{"Article":[],"Plot":[]},"W150":{"Article":[],"Plot":[]},"W120":{"Article":[],"Plot":[]},"W90":{"Article":[],"Plot":[]},"W60":{"Article":[],"Plot":[]},"W30":{"Article":[],"Plot":[]} }
}


AVfS.Article = AVfS.Article || {};
AVfS.Plot = AVfS.Plot || {};


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
    if(param.sunlight == true){
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
        ambientlight = new THREE.AmbientLight(0x555555);
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
      "changeSunLight": function(light){
        scene.remove(sun)
        if(light == "true"){
            var date = new Date();
            var time = new Orb.Time(date);    
            var earth_position = earth.position.ecliptic(time)
            sun = new THREE.DirectionalLight(0xFFFFFF, 1.0, 0);
            sun.position.set( 0-earth_position.x*au, 0-earth_position.z*au, 0-earth_position.y*au);
            scene.add(sun);
        }
      },
      "updateCameraPosition": function(position){updateCameraPosition(position)},
      "render": function(){render()},
      "camera": camera
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
    if(!gl){
      var availability = false;
    }else{
      var availability = true;
      var max_texture_size = gl.getParameter(gl.MAX_TEXTURE_SIZE);
    }
    return {
    "max_texture_size": max_texture_size,
    "availability": availability
    }
    
  }
} // end AVfS.Tool

AVfS.SetLabelLayer = function(id){
  var container = document.getElementById(id);
  container.height = AVfS.screen_height;
  container.width = AVfS.screen_width;
  AVfS.LabelLayer = container;
  AVfS.LabelLayerContext = container.getContext("2d");
}

AVfS.SetOrbitLayer = function(id){
  var container = document.getElementById(id);
  container.height = AVfS.screen_height;
  container.width = AVfS.screen_width;
  AVfS.OrbitLayer = container;
  AVfS.OrbitLayerContext = container.getContext("2d");
}

AVfS.ShowCenterLabel=function(option){
  //container
  //string

  var context = AVfS.OrbitLayerContext;
  var image = AVfS.ISSIcon;

  context.drawImage(image, AVfS.screen_width/2-24, AVfS.screen_height/2-24,48,48)
  context.font = "12px arial black";
  context.fillStyle = "rgba(255,255,255,0.8)"
  context.fillText(option.string, AVfS.screen_width/2+15,AVfS.screen_height/2-13);
  context.strokeStyle = "rgba(255,255,255,0.6)";
  context.beginPath();
  context.moveTo(AVfS.screen_width/2+0,AVfS.screen_height/2+0)
  context.lineTo(AVfS.screen_width/2+10,AVfS.screen_height/2-10)
  context.lineTo(AVfS.screen_width/2+200,AVfS.screen_height/2-10)
  context.stroke()
}

AVfS.ShowLabel = function(option){
  /*
    option = {
      globe:[globe],
      position: {
        latitude:[latitude],
        longitude:[longitude],
        altitude:[altitude]
       }
      string, 
    }
  */
  var container = AVfS.LabelLayer;
  var date = new Date();
  var time = new Orb.Time(date);
  var hour_angle = time.gmst()*15;
  var lng  = option.position.longitude + hour_angle;
  if(lng>360){
  lng = lng%360;
  }
  
  var position = {
    latitude:option.position.latitude,
    longitude:lng,
    altitude:option.position.altitude
  }

  var observer = new Orb.Observer(position);
  
  function toScreenXY(position, camera, container) {
    var pos = position.clone();
    var projScreenMat = new THREE.Matrix4();
    projScreenMat.multiply(camera.projectionMatrix, camera.matrixWorldInverse);
    projScreenMat.multiplyVector3( pos );

    return { x: ( pos.x + 1 ) * container.width / 2 + container.offsetLeft,
        y: ( - pos.y + 1) * container.height / 2 + container.offsetTop };
  }

  var rect = observer.toRectangular();

  var position = new THREE.Vector3(rect.x, rect.z, -1*rect.y);  //y-z must be swapped for webgl coordination
  var camera = option.globe.camera;

  var screen =  toScreenXY(position, camera, container);
  var context = AVfS.LabelLayerContext;
  context.font = "11px Arial";
  context.fillStyle = "rgba(255,255,255,0.8)"
  context.fillText(option.label, screen.x+15,screen.y-13);
  context.strokeStyle = "rgba(255,255,255,0.8)";
  context.beginPath();
  context.moveTo(screen.x+0,screen.y+0)
  context.lineTo(screen.x+10,screen.y-10)
  context.lineTo(screen.x+150,screen.y-10)
  context.stroke()
  
  var contents_element = document.createElement('div'); 
  var color = "#bbb"
  contents_element.id = option.label; 
  contents_element.class = "plot"; 
  contents_element.setAttribute('id', option.label);
  contents_element.setAttribute('class', "plot");
  var contents_style = contents_element.style;
  contents_style.cssText  = 'font-size:x-small; color:'+ color;
  contents_style.position = 'absolute';
  contents_style.top = screen.y -5 + "px"; 
  contents_style.left = screen.x + 15 +"px";
  contents_style.width = "200px";
  
  contents_style.zIndex = '100';
  contents_element.innerHTML = option.contents;
  var perent_obj =  AVfS.ContentsLayer;
  perent_obj.appendChild(contents_element);
}

AVfS.removeLabel = function(id){
    if(document.getElementById(id)){
      var label_dom=document.getElementById(id);
      var perent_obj =  AVfS.ContentsLayer;
      perent_obj.removeChild(label_dom);
      return;
    }else{
      return;
    }
}

AVfS.removeLabels = function(){
        var div_array = document.getElementsByTagName("div");
        var div_array_length = div_array.length;
        var contents_array = new Array();
        for (var i=0; i<div_array_length; i++){
          if(div_array[i].className == "plot"){
            contents_array.push(div_array[i]);
          }
        }
    var contents_array_length = contents_array.length;
    var perent_obj =  AVfS.ContentsLayer;
    for(var i=0;i<contents_array_length;i++){
      perent_obj.removeChild(contents_array[i]);
    }
  return;
}

AVfS.isVisible = function(center,position,limit){

  function latlng2distance(lat1,lng1,lat2,lng2){
    var rad=Math.PI/180;
    var earth_radius = 6378.14;
    var earth_flattening = 1/298.257;
    var e = ((lng1-lng2)/2)*rad;
    var f=((lat1+lat2)/2)*rad;
    var g=((lat1-lat2)/2)*rad;
    var s =Math.sin(g)*Math.sin(g)*Math.cos(e)*Math.cos(e) + Math.cos(f)*Math.cos(f)*Math.sin(e)*Math.sin(e);
    var c =Math.cos(g)*Math.cos(g)*Math.cos(e)*Math.cos(e) + Math.sin(f)*Math.sin(f)*Math.sin(e)*Math.sin(e);
    var w=Math.atan(Math.sqrt(s/c));
    var r=Math.sqrt(s*c)/w;
    var d=2*w*earth_radius;
    var h1 = (3*r-1)/(2*c);
    var h2 = (3*r+1)/(2*s);
    var distance = d*(1+earth_flattening*h1*Math.sin(f)*Math.sin(f)*Math.cos(g)*Math.cos(g)-earth_flattening*h2*Math.cos(f)*Math.cos(f)*Math.sin(g)*Math.sin(g))
    return distance;
  }
  var distance = latlng2distance(center.latitude, center.longitude, position.latitude, position.longitude);
  if(distance<limit){
    return true;
  }else{
    return false;
  }
}

AVfS.GetTargetMeshes = function(position,mesh){
  var get_lat_key = function(){
      var num = Math.floor(Math.abs(position.latitude)/30)*30;
    if(position.latitude>0){
      var prefix = "N";
      num = num +30      
    }else{
      var prefix = "S";
    }
    return prefix + num;
  }
   
  var get_lng_key = function(){
    var num = Math.floor(Math.abs(position.longitude)/30)*30;
    if(position.longitude>0){
      var prefix = "E";
    }else{
      var prefix = "W";
      num = num+30;
    }
    return prefix + num;
  }

  var get_target_meshes = function(lat_key, lng_key){
    var current_lat_key = lat_key;
    var current_lng_key = lng_key;
    var lat_list= ["N90","N60","N30","S0","S30","S60"];
    var lng_list = ["E0","E30","E60","E90","E120","E150","E180","W150","W120","W90","W60","W30"];
    var current_lat_index = lat_list.indexOf(lat_key);
    var current_lng_index = lng_list.indexOf(lng_key);
    
    if(current_lat_index>0){
      var north_flag = true;
      var north_lat_key = lat_list[current_lat_index-1]
    }else{
      var north_flag = false;
    }

    if(current_lat_index<lat_list.length-1){
      var south_flag = true;
      var south_lat_key = lat_list[current_lat_index+1]
    }else{
      var south_flag = false;
    }
    
    var current_lng_index = lng_list.indexOf(lng_key);
    if(current_lng_index >0){
      var east_lng_key = lng_list[current_lng_index-1];
    }else{
      var east_lng_key = lng_list[11];    
    }
    
    if(current_lng_index <11){
      var west_lng_key = lng_list[current_lng_index+1];
    }else{
      var west_lng_key = lng_list[0];    
    }

    var west=[], east=[], north=[], northeast=[], northwest=[], south=[], southeast =[], southwest = [];
    var current = mesh[current_lat_key][current_lng_key]
    var east = mesh[current_lat_key][east_lng_key]
    var west = mesh[current_lat_key][west_lng_key]
    if(north_flag){
      var north = mesh[north_lat_key][current_lng_key]
      var northeast = mesh[north_lat_key][east_lng_key]
      var northwest = mesh[north_lat_key][west_lng_key]
    }
    if(south_flag){
      var south = mesh[south_lat_key][current_lng_key]
      var southeast = mesh[south_lat_key][east_lng_key]
      var southwest = mesh[south_lat_key][west_lng_key]
    }
    var boundary = []
    return {
      "current": current,
      "boundary": boundary.concat(west, east, north, northeast, northwest, south, southeast, southwest)
    }
  }
  var lat_key = get_lat_key()
  var lng_key = get_lng_key()
  //document.getElementById("contents_mesh").innerHTML ="Contents Mesh: " + lat_key +" "+ lng_key;
  var target_meshes = get_target_meshes(lat_key,lng_key);
  return target_meshes; 
}

AVfS.ShowLabels = function(center){
  var orbit_container = AVfS.OrbitLayer;
  var orbit_context = AVfS.OrbitLayerContext;
  orbit_context.clearRect(0,0,orbit_container.width,orbit_container.height);
  var label_container = AVfS.LabelLayer;
  var label_context = AVfS.LabelLayerContext;
  label_context.clearRect(0,0,label_container.width,label_container.height);


  var target_meshes = AVfS.GetTargetMeshes(center,AVfS.ContentsMesh);
  var target = target_meshes.current.Plot.concat(target_meshes.boundary.Plot);
  for(var i=0, l=target.length; i<l;i++){ 
    if(target[i]!=undefined){
      var position = {
        "latitude":target[i]['latitude'], 
        "longitude":target[i]['longitude'],
        "altitude":0
      }
      var visible = AVfS.isVisible(center,position,2500);
      if(visible == true){
        AVfS.ShowLabel({
          "globe":AVfS.globe,
          "position": position,
          "label":target[i]['label'], 
          "contents":target[i]['contents'], 
        })
      }
    }
  }
  
  AVfS.ShowArticleLabel(center);
  
  AVfS.ShowCenterLabel({
    string:"internatonal space station"
  })

}

AVfS.ArticlePlot = [];
AVfS.ShowArticleLabel = function(center){
  var plot = AVfS.ArticlePlot;
  for(var i=0, l=plot.length; i<l;i++){ 
    var position = {
      "latitude":plot[i].latitude,
      "longitude":plot[i].longitude,
      "altitude":0
    }
    var visible = AVfS.isVisible(center,position,4000);
    if(visible == true){
      AVfS.ShowLabel({
        "globe":AVfS.globe,
        "position":position,
        "label":plot[i].label,
        "contents":plot[i].contents
      })
    }
  }
}

AVfS.shortUpdator = function () {
    var hour_angle = AVfS.globe.updateRotation();
    var date = new Date();
    var time = new Orb.Time(date);
    var iss_rect = AVfS.iss.position.rectangular(time);
    var center = AVfS.iss.position.geographic(time);
    AVfS.center = center;
    
    var camera_position = {
      x:iss_rect.x*1.9,
      y:iss_rect.y*1.9,
      z:iss_rect.z*1.9
    }
    
    AVfS.removeLabels()
    AVfS.globe.updateCameraPosition(camera_position);
    AVfS.globe.render();
    AVfS.ShowLabels(center);
    
    document.getElementById("iss").innerHTML = "Position of the ISS:<br/> lat: " + center.latitude + "<br/>" + "lng: " + center.longitude + "<br/>" + "alt: " + center.altitude;
    window.setTimeout("AVfS.shortUpdator()", 1000) 
  }
  

AVfS.midUpdator =  function() {
    AVfS.ShowArticle();
    window.setTimeout("AVfS.midUpdator()", 10000);
  }


AVfS.longUpdator =  function() {
    var sun_rect = AVfS.globe.updateSun();
    window.setTimeout("AVfS.midUpdator()", 60000);
  }
  
AVfS.ShowArticle = function(){
  var center = AVfS.center;
  var target_meshes = AVfS.GetTargetMeshes(center,AVfS.ContentsMesh);
  var target = target_meshes.current.Article.concat(target_meshes.boundary.Article);
  var article = AVfS.GetCurrentArticle(target);
  if(article){
    document.getElementById("article").innerHTML ="<div style='color:#bbb'><strong>" + article.title + "</strong></div><div>" +  article.contents + "</div>";
    if(article.plot){
      AVfS.ArticlePlot = article.plot;
    }else{
      AVfS.ArticlePlot = [];
    }
  }else{
    AVfS.ArticlePlot = [];
    AVfS.ShowDefaultArticle(AVfS.Article.Default);
  }
  return;
}

AVfS.GetCurrentArticle = function(articles){
  if(articles.length == 0) return(null);
  var date = new Date();
  var current = articles[date.getMinutes() % articles.length]
  return current;
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

AVfS.SetContentsLayer = function(id){
  var container = document.getElementById(id);
  container.height = AVfS.screen_height;
  container.width = AVfS.screen_width;
  AVfS.ContentsLayer = container;
}


AVfS.StartUp = function(){
  var gl_check = new AVfS.Tool.GLChecker;  
  if(gl_check.availability == false){
    alert("Your browser does not support WebGL.\n Newer Chrome or Firefox are recommended.");
  }else{
    var pref = new AVfS.Pref()

    document.getElementById("message").innerHTML = pref.message;

    var screen = AVfS.getScreenSize();
    AVfS.screen_height = screen.height;
    AVfS.screen_width = screen.width;
    AVfS.SetLabelLayer('label_layer');
    AVfS.SetOrbitLayer('orbit_layer');
    AVfS.SetContentsLayer('contents_layer');
    

    var q = new AVfS.QueryDecoder();
    if(q["m"]){
      var id = q["m"];
    }else{
      var id = "default";
    }
    var pref = new AVfS.Pref;
    var texture = pref.texture_dir + AVfS.Map[id].texture;
    var ambientlight = AVfS.Map[id].ambient;
    document.getElementById("title").innerHTML = AVfS.Map[id].title;
    document.getElementById("description").innerHTML =AVfS.Map[id].description;
    document.forms["dataset"].elements["dataset"].options[id].selected = true

    if(q["texture"]){
      var texture = pref.texture_dir + q["texture"] + '.jpg';
    }
    if(console){console.log("texture: " + texture)}
    
    if(q["ambient"]){
      var ambientlight = q["ambient"];
    }
    if(q["sunlight"]){
      var sunlight = q["sunlight"];
      if(q["sunlight"] == "false"){
      var sunlight = false;
      }else{
      var sunlight = true;      
      }
    }
    if(console){console.log("ambientlight: " + ambientlight)}
    
    if(q["renderer"]){
      var renderer = q["renderer"];
    }else{
      var renderer = 'webgl';
    }

    if(q["latlng"]){
      var latlng = q["latlng"].split(',');
      AVfS.latitude = latlng[0];
      AVfS.longitude = latlng[1];
    }

    if(console){console.log("renderer: " + renderer)}
    AVfS.SetArticle();
    AVfS.SetPlot();

/*
    if(AVfS.Article.Regional == undefined){
       var article = AVfS.ArticleLoader("regional");
       AVfS.Article.Regional = article.Regional;
    }
*/
    AVfS.globe = new AVfS.Globe({
      container:'globe_layer',
      renderer: renderer, //webgl,canvas 
      texture: texture,
      density: 60,
      sunlight:sunlight,
      ambientlight:ambientlight
    })

    if(AVfS.tle == undefined){
      var tle =  AVfS.TLELoader()
    }else{
      var tle =  AVfS.tle;
    }
    
    AVfS.iss = new Orb.Satellite(tle);

    var date = new Date();
    var time = new Orb.Time(date);
    var iss_rect = AVfS.iss.position.rectangular(time);
    var center = AVfS.iss.position.geographic(time);
    AVfS.center = center;

    var iss_icon = new Image();
    iss_icon.src = "./lib/image/iss.png?" + new Date().getTime();
/*
    var iss_shadow = new Image();
    iss_shadow.src = "./lib/image/iss_shadow.png?" + new Date().getTime();
*/
    iss_icon.onload = function() {
      AVfS.ISSIcon = iss_icon;
      //AVfS.ISSShadow = iss_shadow;
      AVfS.LoadRegionContents();
      AVfS.LoadPlots(AVfS.Plot.Default);
      AVfS.ShowArticle();    
      AVfS.shortUpdator();
      AVfS.midUpdator();
      AVfS.longUpdator();
    }
  }
}

AVfS.SetPlot = function(){
  if(AVfS.Plot.Default == undefined){
     var P = AVfS.JSONLoader("plot","default");
     
     AVfS.Plot.Default = P.Default;
  }
}

AVfS.SetArticle = function(){
  if(AVfS.Article.Default == undefined){
     var A = AVfS.JSONLoader("article","default");
     AVfS.Article.Default = A.Default;
  }
  if(AVfS.Article.Regional == undefined){
     var A = AVfS.JSONLoader("article","regional");
     AVfS.Article.Regional = A.Regional;
  }
}


AVfS.ShowDefaultArticle = function(articles){
  var article = AVfS.GetCurrentArticle(articles);
  document.getElementById("article").innerHTML ="<div style='color:#bbb'><strong>" + article.title + "</strong></div><div>" +  article.contents + "</div>"
}
AVfS.LoadRegionContents = function(){
  var map = AVfS.ContentsMesh;
  var region_contents = AVfS.Article.Regional;
  
  for(var i = 0, l= region_contents.length; i<l; i++){
    for(var i2 = 0, l2= region_contents[i].region.length; i2<l2; i2++){
      var lat_key = region_contents[i].region[i2][0];
      var lng_key = region_contents[i].region[i2][1];
      var contents = region_contents[i];
      map[lat_key][lng_key].Article.push(contents);
    }
  }
}

AVfS.LoadPlots = function(data){
  for(var i=0,d = data.length; i<d; i++){
    AVfS.RegistPlot(data[i]);
  }
}

AVfS.RegistPlot = function(plot){
  var map = AVfS.ContentsMesh;
  var latitude = plot.latitude;
  var longitude = plot.longitude;
  if(latitude>0){
    var lat_key = "N" + (Math.floor(Math.abs(latitude)/30)*30+30);
  }else{
    var lat_key = "S" + (Math.floor(Math.abs(latitude)/30)*30);
  }
  
  if(longitude>0){
    var lng_key = "E" +  (Math.floor(Math.abs(longitude)/30)*30);
  }else{
    var lng_key = "W" + (Math.floor(Math.abs(longitude)/30)*30+30);
  }
  map[lat_key][lng_key].Plot.push(plot);
}

AVfS.ChangeDataSet = function(id){
  var pref = new AVfS.Pref;
  var texture = pref.texture_dir + AVfS.Map[id].texture;
  var ambientlight = AVfS.Map[id].ambient;
  var sunlight = AVfS.Map[id].sunlight;
  document.getElementById("title").innerHTML = AVfS.Map[id].title;
  document.getElementById("description").innerHTML =AVfS.Map[id].description;
  document.forms["dataset"].elements["dataset"].options[id].selected = true

  AVfS.globe.changeTexture(texture);
  AVfS.globe.changeAmbientLight(ambientlight);
  AVfS.globe.changeSunLight(sunlight);
  if(console){console.log("texture: " + texture)}
  if(console){console.log("ambientlight: " + ambientlight)}
}

AVfS.ArticleLoader = function(article_id){
  var pref = new AVfS.Pref;
  var nocache = "?nocache=" +(new Date()).getTime();
  //console.log(pref.article_dir + article_id + ".json" + nocache)
  var data = AVfS.Tool.DataLoader({
    ajax:false,
    format:"json",
    path:pref.article_dir + article_id + ".json" + nocache,
  })
 
  return data;
}


AVfS.JSONLoader = function(type,article_id){
  var pref = new AVfS.Pref;
  var nocache = "?nocache=" +(new Date()).getTime();
  if(type == "plot"){
    var dir = pref.plot_dir;
  }else if(type == "article"){
    var dir = pref.article_dir;
  }
  var data = AVfS.Tool.DataLoader({
    ajax:false,
    format:"json",
    path:dir + article_id + ".json" + nocache,
  })
  return data;
}


AVfS.TLELoader = function(){
  var pref = new AVfS.Pref;
  var nocache = "?nocache=" +(new Date()).getTime();
  var data = AVfS.Tool.DataLoader({
    ajax:false,
    format:"text",
    path:pref.tle_dir + "iss.txt" + nocache,
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
AVfS.Social = false;
AVfS.ShowSocial = function(){
    document.getElementById("timeline").style.visibility = "visible";
    document.getElementById("tweet_box").style.visibility = "visible";
    AVfS.Social = true
}

AVfS.HideSocial = function(){
    document.getElementById("timeline").style.visibility = "hidden";
    document.getElementById("tweet_box").style.visibility = "hidden";
    AVfS.Social = false;
}


AVfS.ToggleSocial = function(){
  if(AVfS.Social == true){
    AVfS.HideSocial();
  }else{
    AVfS.ShowSocial();  
  }

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

