/*
    Copyright (C) 2016 David Población Criado
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, version 3 of the License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
    GNU General Public License for more details.
*/

function onDeviceReady() {
    document.removeEventListener('deviceready', onDeviceReady, false);
      // Set AdMobAds options:
    admob.setOptions({
        publisherId:          "NONE",
        interstitialAdId:     "NONE",
        tappxIdiOS:           "NONE",      
        tappxIdAndroid:       "/120940746/Pub-13771-Android-1070",         
        autoShowBanner:       true,
        autoShowInterstitial: true, 
        isTesting:            false,
        tappxShare:           1                                       
      });
      // Start showing banners (atomatic when autoShowBanner is set to true)
    admob.createBannerView();
      // Request interstitial (will present automatically when autoShowInterstitial is set to true)
    admob.requestInterstitialAd();
}

document.addEventListener("deviceready", onDeviceReady, false);

function avila(){
  analytics.event('Municipio', 'Avila');
  var jqxhr = $.get( "http://opendata.jcyl.es/ficheros/inpo/polen_actual.xml", function(data) {
  })
  .done(function(data) {        
    var datos = xml2json(data);  
    datos = datos.replace('undefined', '');
    var json = JSON.parse(datos);    
    console.log(json.document.date);

    document.getElementById("tarjetas").innerHTML= "";
    console.log("Cargado sin errores");
    document.getElementById("titulopagina").innerHTML = "Ávila";
    document.getElementById("fecha").innerHTML = "Datos actualizados a: "+ data.getElementsByTagName("document")[0].getAttribute("date");

    var n_provincias = json.document.list.element.estacion.length;
    var n_avila =json.document.list.element.estacion[0].tipo_polinico.length;
    for ( var i=0 ; i < n_avila ; i++){
      var tarjetas = document.getElementById("tarjetas");
        var tarjeta = document.createElement("DIV");
        tarjeta.setAttribute("class", "tarjeta mdl-card mdl-shadow--2dp");
        tarjeta.setAttribute("id", "tarjeta");
        tarjetas.appendChild(tarjeta);

        var titulotarjeta = document.createElement("H2");
        titulotarjeta.setAttribute("class", "mdl-card__title-text");
        titulotarjeta.setAttribute("id", "titulo");
        titulotarjeta.innerHTML = json.document.list.element.estacion[0].tipo_polinico[i].nombre;
        tarjeta.appendChild(titulotarjeta);

        var cuerpotarjeta = document.createElement("DIV");
        cuerpotarjeta.setAttribute("class", "mdl-card__supporting-text");
        cuerpotarjeta.innerHTML = "Valor actual: " + json.document.list.element.estacion[0].tipo_polinico[i].valor_real +
        "<br>Valor previsto: " + json.document.list.element.estacion[0].tipo_polinico[i].valor_previsto;
        tarjeta.appendChild(cuerpotarjeta);

        var enlacetarjeta = document.createElement("DIV");
        enlacetarjeta.setAttribute("class", "mdl-card__actions mdl-card--border");
        tarjeta.appendChild(enlacetarjeta);

        var enlacetarjeta2 = document.createElement("A");
        enlacetarjeta2.setAttribute("class", "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect");
        var enlace = json.document.list.element.estacion[0].tipo_polinico[i].nombre;
        var n = enlace.indexOf("(");
        var enlace2 = enlace.substr(0, n);
        enlacetarjeta2.setAttribute("href", "https://es.wikipedia.org/wiki/" + enlace2);
        enlacetarjeta2.innerHTML = "Más información";
        tarjeta.appendChild(enlacetarjeta2);

        var espacio =  document.createElement("BR");
        tarjetas.appendChild(espacio);
      }
  })
  .fail(function() {
    alert( "No se han podido obtener los datos. Compruebe su conexión a Internet" );
    console.log("Error");
  })

  .always(function(){
    console.log("Terminado");
  })
}

function arenas(){
  analytics.event('Municipio', 'Arenas de San Pedro');
  var jqxhr = $.get( "http://opendata.jcyl.es/ficheros/inpo/polen_actual.xml", function(data) {
  })
  .done(function(data) {
    var datos = xml2json(data);  
    datos = datos.replace('undefined', '');
    var json = JSON.parse(datos);    
    console.log(json.document.date);

    document.getElementById("tarjetas").innerHTML= "";
    console.log("Cargado sin errores");
    document.getElementById("titulopagina").innerHTML = "Arenas de San Pedro";
    document.getElementById("fecha").innerHTML = "Datos actualizados a: "+ data.getElementsByTagName("document")[0].getAttribute("date");

    var n_provincias = json.document.list.element.estacion.length;
    var n_arenas =json.document.list.element.estacion[1].tipo_polinico.length;
    for ( var i=0 ; i < n_arenas ; i++){
      var tarjetas = document.getElementById("tarjetas");
        var tarjeta = document.createElement("DIV");
        tarjeta.setAttribute("class", "tarjeta mdl-card mdl-shadow--2dp");
        tarjeta.setAttribute("id", "tarjeta");
        tarjetas.appendChild(tarjeta);

        var titulotarjeta = document.createElement("H2");
        titulotarjeta.setAttribute("class", "mdl-card__title-text");
        titulotarjeta.setAttribute("id", "titulo");
        titulotarjeta.innerHTML = json.document.list.element.estacion[1].tipo_polinico[i].nombre;
        tarjeta.appendChild(titulotarjeta);

        var cuerpotarjeta = document.createElement("DIV");
        cuerpotarjeta.setAttribute("class", "mdl-card__supporting-text");
        cuerpotarjeta.innerHTML = "Valor actual: " + json.document.list.element.estacion[1].tipo_polinico[i].valor_real +
        "<br>Valor previsto: " + json.document.list.element.estacion[1].tipo_polinico[i].valor_previsto;
        tarjeta.appendChild(cuerpotarjeta);

        var enlacetarjeta = document.createElement("DIV");
        enlacetarjeta.setAttribute("class", "mdl-card__actions mdl-card--border");
        tarjeta.appendChild(enlacetarjeta);

        var enlacetarjeta2 = document.createElement("A");
        enlacetarjeta2.setAttribute("class", "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect");
        var enlace = json.document.list.element.estacion[1].tipo_polinico[i].nombre;
        var n = enlace.indexOf("(");
        var enlace2 = enlace.substr(0, n);
        enlacetarjeta2.setAttribute("href", "https://es.wikipedia.org/wiki/" + enlace2);
        enlacetarjeta2.innerHTML = "Más información";
        tarjeta.appendChild(enlacetarjeta2);

        var espacio =  document.createElement("BR");
        tarjetas.appendChild(espacio);
      }
  })
  .fail(function() {
    alert( "No se han podido obtener los datos. Compruebe su conexión a Internet" );
    console.log("Error");
  })

  .always(function(){
    console.log("Terminado");
  })
}

function burgos(){
  analytics.event('Municipio', 'Burgos');
  var jqxhr = $.get( "http://opendata.jcyl.es/ficheros/inpo/polen_actual.xml", function(data) {
  })
  .done(function(data) {
    var datos = xml2json(data);  
    datos = datos.replace('undefined', '');
    var json = JSON.parse(datos);    
    console.log(json.document.date);

    document.getElementById("tarjetas").innerHTML= "";
    console.log("Cargado sin errores");
    document.getElementById("titulopagina").innerHTML = "Burgos";
    document.getElementById("fecha").innerHTML = "Datos actualizados a: "+ data.getElementsByTagName("document")[0].getAttribute("date");

    var n_provincias = json.document.list.element.estacion.length;
    var n_burgos =json.document.list.element.estacion[2].tipo_polinico.length;
    for ( var i=0 ; i < n_burgos ; i++){
      var tarjetas = document.getElementById("tarjetas");
        var tarjeta = document.createElement("DIV");
        tarjeta.setAttribute("class", "tarjeta mdl-card mdl-shadow--2dp");
        tarjeta.setAttribute("id", "tarjeta");
        tarjetas.appendChild(tarjeta);

        var titulotarjeta = document.createElement("H2");
        titulotarjeta.setAttribute("class", "mdl-card__title-text");
        titulotarjeta.setAttribute("id", "titulo");
        titulotarjeta.innerHTML = json.document.list.element.estacion[2].tipo_polinico[i].nombre;
        tarjeta.appendChild(titulotarjeta);

        var cuerpotarjeta = document.createElement("DIV");
        cuerpotarjeta.setAttribute("class", "mdl-card__supporting-text");
        cuerpotarjeta.innerHTML = "Valor actual: " + json.document.list.element.estacion[2].tipo_polinico[i].valor_real +
        "<br>Valor previsto: " + json.document.list.element.estacion[2].tipo_polinico[i].valor_previsto;
        tarjeta.appendChild(cuerpotarjeta);

        var enlacetarjeta = document.createElement("DIV");
        enlacetarjeta.setAttribute("class", "mdl-card__actions mdl-card--border");
        tarjeta.appendChild(enlacetarjeta);

        var enlacetarjeta2 = document.createElement("A");
        enlacetarjeta2.setAttribute("class", "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect");
        var enlace = json.document.list.element.estacion[2].tipo_polinico[i].nombre;
        var n = enlace.indexOf("(");
        var enlace2 = enlace.substr(0, n);
        enlacetarjeta2.setAttribute("href", "https://es.wikipedia.org/wiki/" + enlace2);
        enlacetarjeta2.innerHTML = "Más información";
        tarjeta.appendChild(enlacetarjeta2);

        var espacio =  document.createElement("BR");
        tarjetas.appendChild(espacio);
      }
  })
  .fail(function() {
    alert( "No se han podido obtener los datos. Compruebe su conexión a Internet" );
    console.log("Error");
  })

  .always(function(){
    console.log("Terminado");
  })
}

function miranda(){
  analytics.event('Municipio', 'Miranda de Ebro');
  var jqxhr = $.get( "http://opendata.jcyl.es/ficheros/inpo/polen_actual.xml", function(data) {
  })
  .done(function(data) {
    var datos = xml2json(data);  
    datos = datos.replace('undefined', '');
    var json = JSON.parse(datos);    
    console.log(json.document.date);

    document.getElementById("tarjetas").innerHTML= "";
    console.log("Cargado sin errores");
    document.getElementById("titulopagina").innerHTML = "Miranda de Ebro";
    document.getElementById("fecha").innerHTML = "Datos actualizados a: "+ data.getElementsByTagName("document")[0].getAttribute("date");

    var n_provincias = json.document.list.element.estacion.length;
    var n_miranda =json.document.list.element.estacion[3].tipo_polinico.length;
    for ( var i=0 ; i < n_miranda ; i++){
      var tarjetas = document.getElementById("tarjetas");
        var tarjeta = document.createElement("DIV");
        tarjeta.setAttribute("class", "tarjeta mdl-card mdl-shadow--2dp");
        tarjeta.setAttribute("id", "tarjeta");
        tarjetas.appendChild(tarjeta);

        var titulotarjeta = document.createElement("H2");
        titulotarjeta.setAttribute("class", "mdl-card__title-text");
        titulotarjeta.setAttribute("id", "titulo");
        titulotarjeta.innerHTML = json.document.list.element.estacion[3].tipo_polinico[i].nombre;
        tarjeta.appendChild(titulotarjeta);

        var cuerpotarjeta = document.createElement("DIV");
        cuerpotarjeta.setAttribute("class", "mdl-card__supporting-text");
        cuerpotarjeta.innerHTML = "Valor actual: " + json.document.list.element.estacion[3].tipo_polinico[i].valor_real +
        "<br>Valor previsto: " + json.document.list.element.estacion[3].tipo_polinico[i].valor_previsto;
        tarjeta.appendChild(cuerpotarjeta);

        var enlacetarjeta = document.createElement("DIV");
        enlacetarjeta.setAttribute("class", "mdl-card__actions mdl-card--border");
        tarjeta.appendChild(enlacetarjeta);

        var enlacetarjeta2 = document.createElement("A");
        enlacetarjeta2.setAttribute("class", "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect");
        var enlace = json.document.list.element.estacion[3].tipo_polinico[i].nombre;
        var n = enlace.indexOf("(");
        var enlace2 = enlace.substr(0, n);
        enlacetarjeta2.setAttribute("href", "https://es.wikipedia.org/wiki/" + enlace2);
        enlacetarjeta2.innerHTML = "Más información";
        tarjeta.appendChild(enlacetarjeta2);

        var espacio =  document.createElement("BR");
        tarjetas.appendChild(espacio);
      }
  })
  .fail(function() {
    alert( "No se han podido obtener los datos. Compruebe su conexión a Internet" );
    console.log("Error");
  })

  .always(function(){
    console.log("Terminado");
  })
}

function leon(){
  analytics.event('Municipio', 'Leon');
  var jqxhr = $.get( "http://opendata.jcyl.es/ficheros/inpo/polen_actual.xml", function(data) {
  })
  .done(function(data) {
    var datos = xml2json(data);  
    datos = datos.replace('undefined', '');
    var json = JSON.parse(datos);    
    console.log(json.document.date);

    document.getElementById("tarjetas").innerHTML= "";
    console.log("Cargado sin errores");
    document.getElementById("titulopagina").innerHTML = "León";
    document.getElementById("fecha").innerHTML = "Datos actualizados a: "+ data.getElementsByTagName("document")[0].getAttribute("date");

    var n_provincias = json.document.list.element.estacion.length;
    var n_leon =json.document.list.element.estacion[4].tipo_polinico.length;
    for ( var i=0 ; i < n_leon ; i++){
      var tarjetas = document.getElementById("tarjetas");
        var tarjeta = document.createElement("DIV");
        tarjeta.setAttribute("class", "tarjeta mdl-card mdl-shadow--2dp");
        tarjeta.setAttribute("id", "tarjeta");
        tarjetas.appendChild(tarjeta);

        var titulotarjeta = document.createElement("H2");
        titulotarjeta.setAttribute("class", "mdl-card__title-text");
        titulotarjeta.setAttribute("id", "titulo");
        titulotarjeta.innerHTML = json.document.list.element.estacion[4].tipo_polinico[i].nombre;
        tarjeta.appendChild(titulotarjeta);

        var cuerpotarjeta = document.createElement("DIV");
        cuerpotarjeta.setAttribute("class", "mdl-card__supporting-text");
        cuerpotarjeta.innerHTML = "Valor actual: " + json.document.list.element.estacion[4].tipo_polinico[i].valor_real +
        "<br>Valor previsto: " + json.document.list.element.estacion[4].tipo_polinico[i].valor_previsto;
        tarjeta.appendChild(cuerpotarjeta);

        var enlacetarjeta = document.createElement("DIV");
        enlacetarjeta.setAttribute("class", "mdl-card__actions mdl-card--border");
        tarjeta.appendChild(enlacetarjeta);

        var enlacetarjeta2 = document.createElement("A");
        enlacetarjeta2.setAttribute("class", "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect");
        var enlace = json.document.list.element.estacion[4].tipo_polinico[i].nombre;
        var n = enlace.indexOf("(");
        var enlace2 = enlace.substr(0, n);
        enlacetarjeta2.setAttribute("href", "https://es.wikipedia.org/wiki/" + enlace2);
        enlacetarjeta2.innerHTML = "Más información";
        tarjeta.appendChild(enlacetarjeta2);

        var espacio =  document.createElement("BR");
        tarjetas.appendChild(espacio);
      }
  })
  .fail(function() {
    alert( "No se han podido obtener los datos. Compruebe su conexión a Internet" );
    console.log("Error");
  })

  .always(function(){
    console.log("Terminado");
  })
}

function ponferrada(){
  analytics.event('Municipio', 'Ponferrada');
  var jqxhr = $.get( "http://opendata.jcyl.es/ficheros/inpo/polen_actual.xml", function(data) {
  })
  .done(function(data) {
    var datos = xml2json(data);  
    datos = datos.replace('undefined', '');
    var json = JSON.parse(datos);    
    console.log(json.document.date);

    document.getElementById("tarjetas").innerHTML= "";
    console.log("Cargado sin errores");
    document.getElementById("titulopagina").innerHTML = "Ponferrada";
    document.getElementById("fecha").innerHTML = "Datos actualizados a: "+ data.getElementsByTagName("document")[0].getAttribute("date");

    var n_provincias = json.document.list.element.estacion.length;
    var n_ponferrada =json.document.list.element.estacion[5].tipo_polinico.length;
    for ( var i=0 ; i < n_ponferrada ; i++){
      var tarjetas = document.getElementById("tarjetas");
        var tarjeta = document.createElement("DIV");
        tarjeta.setAttribute("class", "tarjeta mdl-card mdl-shadow--2dp");
        tarjeta.setAttribute("id", "tarjeta");
        tarjetas.appendChild(tarjeta);

        var titulotarjeta = document.createElement("H2");
        titulotarjeta.setAttribute("class", "mdl-card__title-text");
        titulotarjeta.setAttribute("id", "titulo");
        titulotarjeta.innerHTML = json.document.list.element.estacion[5].tipo_polinico[i].nombre;
        tarjeta.appendChild(titulotarjeta);

        var cuerpotarjeta = document.createElement("DIV");
        cuerpotarjeta.setAttribute("class", "mdl-card__supporting-text");
        cuerpotarjeta.innerHTML = "Valor actual: " + json.document.list.element.estacion[5].tipo_polinico[i].valor_real +
        "<br>Valor previsto: " + json.document.list.element.estacion[5].tipo_polinico[i].valor_previsto;
        tarjeta.appendChild(cuerpotarjeta);

        var enlacetarjeta = document.createElement("DIV");
        enlacetarjeta.setAttribute("class", "mdl-card__actions mdl-card--border");
        tarjeta.appendChild(enlacetarjeta);

        var enlacetarjeta2 = document.createElement("A");
        enlacetarjeta2.setAttribute("class", "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect");
        var enlace = json.document.list.element.estacion[5].tipo_polinico[i].nombre;
        var n = enlace.indexOf("(");
        var enlace2 = enlace.substr(0, n);
        enlacetarjeta2.setAttribute("href", "https://es.wikipedia.org/wiki/" + enlace2);
        enlacetarjeta2.innerHTML = "Más información";
        tarjeta.appendChild(enlacetarjeta2);

        var espacio =  document.createElement("BR");
        tarjetas.appendChild(espacio);
      }
  })
  .fail(function() {
    alert( "No se han podido obtener los datos. Compruebe su conexión a Internet" );
    console.log("Error");
  })

  .always(function(){
    console.log("Terminado");
  })
}

function palencia(){
  analytics.event('Municipio', 'Palencia');
  var jqxhr = $.get( "http://opendata.jcyl.es/ficheros/inpo/polen_actual.xml", function(data) {
  })
  .done(function(data) {
    var datos = xml2json(data);  
    datos = datos.replace('undefined', '');
    var json = JSON.parse(datos);    
    console.log(json.document.date);

    document.getElementById("tarjetas").innerHTML= "";
    console.log("Cargado sin errores");
    document.getElementById("titulopagina").innerHTML = "Palencia";
    document.getElementById("fecha").innerHTML = "Datos actualizados a: "+ data.getElementsByTagName("document")[0].getAttribute("date");

    var n_provincias = json.document.list.element.estacion.length;
    var n_palencia =json.document.list.element.estacion[6].tipo_polinico.length;
    for ( var i=0 ; i < n_palencia ; i++){
      var tarjetas = document.getElementById("tarjetas");
        var tarjeta = document.createElement("DIV");
        tarjeta.setAttribute("class", "tarjeta mdl-card mdl-shadow--2dp");
        tarjeta.setAttribute("id", "tarjeta");
        tarjetas.appendChild(tarjeta);

        var titulotarjeta = document.createElement("H2");
        titulotarjeta.setAttribute("class", "mdl-card__title-text");
        titulotarjeta.setAttribute("id", "titulo");
        titulotarjeta.innerHTML = json.document.list.element.estacion[6].tipo_polinico[i].nombre;
        tarjeta.appendChild(titulotarjeta);

        var cuerpotarjeta = document.createElement("DIV");
        cuerpotarjeta.setAttribute("class", "mdl-card__supporting-text");
        cuerpotarjeta.innerHTML = "Valor actual: " + json.document.list.element.estacion[6].tipo_polinico[i].valor_real +
        "<br>Valor previsto: " + json.document.list.element.estacion[6].tipo_polinico[i].valor_previsto;
        tarjeta.appendChild(cuerpotarjeta);

        var enlacetarjeta = document.createElement("DIV");
        enlacetarjeta.setAttribute("class", "mdl-card__actions mdl-card--border");
        tarjeta.appendChild(enlacetarjeta);

        var enlacetarjeta2 = document.createElement("A");
        enlacetarjeta2.setAttribute("class", "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect");
        var enlace = json.document.list.element.estacion[6].tipo_polinico[i].nombre;
        var n = enlace.indexOf("(");
        var enlace2 = enlace.substr(0, n);
        enlacetarjeta2.setAttribute("href", "https://es.wikipedia.org/wiki/" + enlace2);
        enlacetarjeta2.innerHTML = "Más información";
        tarjeta.appendChild(enlacetarjeta2);

        var espacio =  document.createElement("BR");
        tarjetas.appendChild(espacio);
      }
  })
  .fail(function() {
    alert( "No se han podido obtener los datos. Compruebe su conexión a Internet" );
    console.log("Error");
  })

  .always(function(){
    console.log("Terminado");
  })
}

function salamanca(){
  analytics.event('Municipio', 'Salamanca');
  var jqxhr = $.get( "http://opendata.jcyl.es/ficheros/inpo/polen_actual.xml", function(data) {
  })
  .done(function(data) {
    var datos = xml2json(data);  
    datos = datos.replace('undefined', '');
    var json = JSON.parse(datos);    
    console.log(json.document.date);

    document.getElementById("tarjetas").innerHTML= "";
    console.log("Cargado sin errores");
    document.getElementById("titulopagina").innerHTML = "Salamanca";
    document.getElementById("fecha").innerHTML = "Datos actualizados a: "+ data.getElementsByTagName("document")[0].getAttribute("date");

    var n_provincias = json.document.list.element.estacion.length;
    var n_salamanca =json.document.list.element.estacion[7].tipo_polinico.length;
    for ( var i=0 ; i < n_salamanca ; i++){
      var tarjetas = document.getElementById("tarjetas");
        var tarjeta = document.createElement("DIV");
        tarjeta.setAttribute("class", "tarjeta mdl-card mdl-shadow--2dp");
        tarjeta.setAttribute("id", "tarjeta");
        tarjetas.appendChild(tarjeta);

        var titulotarjeta = document.createElement("H2");
        titulotarjeta.setAttribute("class", "mdl-card__title-text");
        titulotarjeta.setAttribute("id", "titulo");
        titulotarjeta.innerHTML = json.document.list.element.estacion[7].tipo_polinico[i].nombre;
        tarjeta.appendChild(titulotarjeta);

        var cuerpotarjeta = document.createElement("DIV");
        cuerpotarjeta.setAttribute("class", "mdl-card__supporting-text");
        cuerpotarjeta.innerHTML = "Valor actual: " + json.document.list.element.estacion[7].tipo_polinico[i].valor_real +
        "<br>Valor previsto: " + json.document.list.element.estacion[7].tipo_polinico[i].valor_previsto;
        tarjeta.appendChild(cuerpotarjeta);

        var enlacetarjeta = document.createElement("DIV");
        enlacetarjeta.setAttribute("class", "mdl-card__actions mdl-card--border");
        tarjeta.appendChild(enlacetarjeta);

        var enlacetarjeta2 = document.createElement("A");
        enlacetarjeta2.setAttribute("class", "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect");
        var enlace = json.document.list.element.estacion[7].tipo_polinico[i].nombre;
        var n = enlace.indexOf("(");
        var enlace2 = enlace.substr(0, n);
        enlacetarjeta2.setAttribute("href", "https://es.wikipedia.org/wiki/" + enlace2);
        enlacetarjeta2.innerHTML = "Más información";
        tarjeta.appendChild(enlacetarjeta2);

        var espacio =  document.createElement("BR");
        tarjetas.appendChild(espacio);
      }
  })
  .fail(function() {
    alert( "No se han podido obtener los datos. Compruebe su conexión a Internet" );
    console.log("Error");
  })

  .always(function(){
    console.log("Terminado");
  })
}

function bejar(){
  analytics.event('Municipio', 'Bejar');
  var jqxhr = $.get( "http://opendata.jcyl.es/ficheros/inpo/polen_actual.xml", function(data) {
  })
  .done(function(data) {
    var datos = xml2json(data);  
    datos = datos.replace('undefined', '');
    var json = JSON.parse(datos);    
    console.log(json.document.date);

    document.getElementById("tarjetas").innerHTML= "";
    console.log("Cargado sin errores");
    document.getElementById("titulopagina").innerHTML = "Béjar";
    document.getElementById("fecha").innerHTML = "Datos actualizados a: "+ data.getElementsByTagName("document")[0].getAttribute("date");

    var n_provincias = json.document.list.element.estacion.length;
    var n_bejar =json.document.list.element.estacion[12].tipo_polinico.length;
    for ( var i=0 ; i < n_bejar ; i++){
      var tarjetas = document.getElementById("tarjetas");
        var tarjeta = document.createElement("DIV");
        tarjeta.setAttribute("class", "tarjeta mdl-card mdl-shadow--2dp");
        tarjeta.setAttribute("id", "tarjeta");
        tarjetas.appendChild(tarjeta);

        var titulotarjeta = document.createElement("H2");
        titulotarjeta.setAttribute("class", "mdl-card__title-text");
        titulotarjeta.setAttribute("id", "titulo");
        titulotarjeta.innerHTML = json.document.list.element.estacion[12].tipo_polinico[i].nombre;
        tarjeta.appendChild(titulotarjeta);

        var cuerpotarjeta = document.createElement("DIV");
        cuerpotarjeta.setAttribute("class", "mdl-card__supporting-text");
        cuerpotarjeta.innerHTML = "Valor actual: " + json.document.list.element.estacion[12].tipo_polinico[i].valor_real +
        "<br>Valor previsto: " + json.document.list.element.estacion[12].tipo_polinico[i].valor_previsto;
        tarjeta.appendChild(cuerpotarjeta);

        var enlacetarjeta = document.createElement("DIV");
        enlacetarjeta.setAttribute("class", "mdl-card__actions mdl-card--border");
        tarjeta.appendChild(enlacetarjeta);

        var enlacetarjeta2 = document.createElement("A");
        enlacetarjeta2.setAttribute("class", "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect");
        var enlace = json.document.list.element.estacion[12].tipo_polinico[i].nombre;
        var n = enlace.indexOf("(");
        var enlace2 = enlace.substr(0, n);
        enlacetarjeta2.setAttribute("href", "https://es.wikipedia.org/wiki/" + enlace2);
        enlacetarjeta2.innerHTML = "Más información";
        tarjeta.appendChild(enlacetarjeta2);

        var espacio =  document.createElement("BR");
        tarjetas.appendChild(espacio);
      }
  })
  .fail(function() {
    alert( "No se han podido obtener los datos. Compruebe su conexión a Internet" );
    console.log("Error");
  })

  .always(function(){
    console.log("Terminado");
  })
}

function segovia(){
  analytics.event('Municipio', 'Segovia');
  var jqxhr = $.get( "http://opendata.jcyl.es/ficheros/inpo/polen_actual.xml", function(data) {
  })
  .done(function(data) {
    var datos = xml2json(data);  
    datos = datos.replace('undefined', '');
    var json = JSON.parse(datos);    
    console.log(json.document.date);

    document.getElementById("tarjetas").innerHTML= "";
    console.log("Cargado sin errores");
    document.getElementById("titulopagina").innerHTML = "Segovia";
    document.getElementById("fecha").innerHTML = "Datos actualizados a: "+ data.getElementsByTagName("document")[0].getAttribute("date");

    var n_provincias = json.document.list.element.estacion.length;
    var n_segovia =json.document.list.element.estacion[8].tipo_polinico.length;
    for ( var i=0 ; i < n_segovia ; i++){
      var tarjetas = document.getElementById("tarjetas");
        var tarjeta = document.createElement("DIV");
        tarjeta.setAttribute("class", "tarjeta mdl-card mdl-shadow--2dp");
        tarjeta.setAttribute("id", "tarjeta");
        tarjetas.appendChild(tarjeta);

        var titulotarjeta = document.createElement("H2");
        titulotarjeta.setAttribute("class", "mdl-card__title-text");
        titulotarjeta.setAttribute("id", "titulo");
        titulotarjeta.innerHTML = json.document.list.element.estacion[8].tipo_polinico[i].nombre;
        tarjeta.appendChild(titulotarjeta);

        var cuerpotarjeta = document.createElement("DIV");
        cuerpotarjeta.setAttribute("class", "mdl-card__supporting-text");
        cuerpotarjeta.innerHTML = "Valor actual: " + json.document.list.element.estacion[8].tipo_polinico[i].valor_real +
        "<br>Valor previsto: " + json.document.list.element.estacion[8].tipo_polinico[i].valor_previsto;
        tarjeta.appendChild(cuerpotarjeta);

        var enlacetarjeta = document.createElement("DIV");
        enlacetarjeta.setAttribute("class", "mdl-card__actions mdl-card--border");
        tarjeta.appendChild(enlacetarjeta);

        var enlacetarjeta2 = document.createElement("A");
        enlacetarjeta2.setAttribute("class", "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect");
        var enlace = json.document.list.element.estacion[8].tipo_polinico[i].nombre;
        var n = enlace.indexOf("(");
        var enlace2 = enlace.substr(0, n);
        enlacetarjeta2.setAttribute("href", "https://es.wikipedia.org/wiki/" + enlace2);
        enlacetarjeta2.innerHTML = "Más información";
        tarjeta.appendChild(enlacetarjeta2);

        var espacio =  document.createElement("BR");
        tarjetas.appendChild(espacio);
      }
  })
  .fail(function() {
    alert( "No se han podido obtener los datos. Compruebe su conexión a Internet" );
    console.log("Error");
  })

  .always(function(){
    console.log("Terminado");
  })
}

function soria(){
  analytics.event('Municipio', 'Soria');
  var jqxhr = $.get( "http://opendata.jcyl.es/ficheros/inpo/polen_actual.xml", function(data) {
  })
  .done(function(data) {
    var datos = xml2json(data);  
    datos = datos.replace('undefined', '');
    var json = JSON.parse(datos);    
    console.log(json.document.date);

    document.getElementById("tarjetas").innerHTML= "";
    console.log("Cargado sin errores");
    document.getElementById("titulopagina").innerHTML = "Soria";
    document.getElementById("fecha").innerHTML = "Datos actualizados a: "+ data.getElementsByTagName("document")[0].getAttribute("date");

    var n_provincias = json.document.list.element.estacion.length;
    var n_soria =json.document.list.element.estacion[9].tipo_polinico.length;
    for ( var i=0 ; i < n_soria ; i++){
      var tarjetas = document.getElementById("tarjetas");
        var tarjeta = document.createElement("DIV");
        tarjeta.setAttribute("class", "tarjeta mdl-card mdl-shadow--2dp");
        tarjeta.setAttribute("id", "tarjeta");
        tarjetas.appendChild(tarjeta);

        var titulotarjeta = document.createElement("H2");
        titulotarjeta.setAttribute("class", "mdl-card__title-text");
        titulotarjeta.setAttribute("id", "titulo");
        titulotarjeta.innerHTML = json.document.list.element.estacion[9].tipo_polinico[i].nombre;
        tarjeta.appendChild(titulotarjeta);

        var cuerpotarjeta = document.createElement("DIV");
        cuerpotarjeta.setAttribute("class", "mdl-card__supporting-text");
        cuerpotarjeta.innerHTML = "Valor actual: " + json.document.list.element.estacion[9].tipo_polinico[i].valor_real +
        "<br>Valor previsto: " + json.document.list.element.estacion[9].tipo_polinico[i].valor_previsto;
        tarjeta.appendChild(cuerpotarjeta);

        var enlacetarjeta = document.createElement("DIV");
        enlacetarjeta.setAttribute("class", "mdl-card__actions mdl-card--border");
        tarjeta.appendChild(enlacetarjeta);

        var enlacetarjeta2 = document.createElement("A");
        enlacetarjeta2.setAttribute("class", "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect");
        var enlace = json.document.list.element.estacion[9].tipo_polinico[i].nombre;
        var n = enlace.indexOf("(");
        var enlace2 = enlace.substr(0, n);
        enlacetarjeta2.setAttribute("href", "https://es.wikipedia.org/wiki/" + enlace2);
        enlacetarjeta2.innerHTML = "Más información";
        tarjeta.appendChild(enlacetarjeta2);

        var espacio =  document.createElement("BR");
        tarjetas.appendChild(espacio);
      }
  })
  .fail(function() {
    alert( "No se han podido obtener los datos. Compruebe su conexión a Internet" );
    console.log("Error");
  })

  .always(function(){
    console.log("Terminado");
  })
}

function valladolid(){
  analytics.event('Municipio', 'Valladolid');
  var jqxhr = $.get( "http://opendata.jcyl.es/ficheros/inpo/polen_actual.xml", function(data) {
  })
  .done(function(data) {
    var datos = xml2json(data);  
    datos = datos.replace('undefined', '');
    var json = JSON.parse(datos);    
    console.log(json.document.date);

    document.getElementById("tarjetas").innerHTML= "";
    console.log("Cargado sin errores");
    document.getElementById("titulopagina").innerHTML = "Valladolid";
    document.getElementById("fecha").innerHTML = "Datos actualizados a: "+ data.getElementsByTagName("document")[0].getAttribute("date");

    var n_provincias = json.document.list.element.estacion.length;
    var n_valladolid =json.document.list.element.estacion[10].tipo_polinico.length;
    for ( var i=0 ; i < n_valladolid ; i++){
      var tarjetas = document.getElementById("tarjetas");
        var tarjeta = document.createElement("DIV");
        tarjeta.setAttribute("class", "tarjeta mdl-card mdl-shadow--2dp");
        tarjeta.setAttribute("id", "tarjeta");
        tarjetas.appendChild(tarjeta);

        var titulotarjeta = document.createElement("H2");
        titulotarjeta.setAttribute("class", "mdl-card__title-text");
        titulotarjeta.setAttribute("id", "titulo");
        titulotarjeta.innerHTML = json.document.list.element.estacion[10].tipo_polinico[i].nombre;
        tarjeta.appendChild(titulotarjeta);

        var cuerpotarjeta = document.createElement("DIV");
        cuerpotarjeta.setAttribute("class", "mdl-card__supporting-text");
        cuerpotarjeta.innerHTML = "Valor actual: " + json.document.list.element.estacion[10].tipo_polinico[i].valor_real +
        "<br>Valor previsto: " + json.document.list.element.estacion[10].tipo_polinico[i].valor_previsto;
        tarjeta.appendChild(cuerpotarjeta);

        var enlacetarjeta = document.createElement("DIV");
        enlacetarjeta.setAttribute("class", "mdl-card__actions mdl-card--border");
        tarjeta.appendChild(enlacetarjeta);

        var enlacetarjeta2 = document.createElement("A");
        enlacetarjeta2.setAttribute("class", "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect");
        var enlace = json.document.list.element.estacion[10].tipo_polinico[i].nombre;
        var n = enlace.indexOf("(");
        var enlace2 = enlace.substr(0, n);
        enlacetarjeta2.setAttribute("href", "https://es.wikipedia.org/wiki/" + enlace2);
        enlacetarjeta2.innerHTML = "Más información";
        tarjeta.appendChild(enlacetarjeta2);

        var espacio =  document.createElement("BR");
        tarjetas.appendChild(espacio);
      }
  })
  .fail(function() {
    alert( "No se han podido obtener los datos. Compruebe su conexión a Internet" );
    console.log("Error");
  })

  .always(function(){
    console.log("Terminado");
  })
}

function zamora(){
  analytics.event('Municipio', 'Zamora');
  var jqxhr = $.get( "http://opendata.jcyl.es/ficheros/inpo/polen_actual.xml", function(data) {
  })
  .done(function(data) {
    var datos = xml2json(data);  
    datos = datos.replace('undefined', '');
    var json = JSON.parse(datos);    
    console.log(json.document.date);

    document.getElementById("tarjetas").innerHTML= "";
    console.log("Cargado sin errores");
    document.getElementById("titulopagina").innerHTML = "Zamora";
    document.getElementById("fecha").innerHTML = "Datos actualizados a: "+ data.getElementsByTagName("document")[0].getAttribute("date");

    var n_provincias = json.document.list.element.estacion.length;
    var n_zamora =json.document.list.element.estacion[11].tipo_polinico.length;
    for ( var i=0 ; i < n_zamora ; i++){
      var tarjetas = document.getElementById("tarjetas");
        var tarjeta = document.createElement("DIV");
        tarjeta.setAttribute("class", "tarjeta mdl-card mdl-shadow--2dp");
        tarjeta.setAttribute("id", "tarjeta");
        tarjetas.appendChild(tarjeta);

        var titulotarjeta = document.createElement("H2");
        titulotarjeta.setAttribute("class", "mdl-card__title-text");
        titulotarjeta.setAttribute("id", "titulo");
        titulotarjeta.innerHTML = json.document.list.element.estacion[11].tipo_polinico[i].nombre;
        tarjeta.appendChild(titulotarjeta);

        var cuerpotarjeta = document.createElement("DIV");
        cuerpotarjeta.setAttribute("class", "mdl-card__supporting-text");
        cuerpotarjeta.innerHTML = "Valor actual: " + json.document.list.element.estacion[11].tipo_polinico[i].valor_real +
        "<br>Valor previsto: " + json.document.list.element.estacion[11].tipo_polinico[i].valor_previsto;
        tarjeta.appendChild(cuerpotarjeta);

        var enlacetarjeta = document.createElement("DIV");
        enlacetarjeta.setAttribute("class", "mdl-card__actions mdl-card--border");
        tarjeta.appendChild(enlacetarjeta);

        var enlacetarjeta2 = document.createElement("A");
        enlacetarjeta2.setAttribute("class", "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect");
        var enlace = json.document.list.element.estacion[11].tipo_polinico[i].nombre;
        var n = enlace.indexOf("(");
        var enlace2 = enlace.substr(0, n);
        enlacetarjeta2.setAttribute("href", "https://es.wikipedia.org/wiki/" + enlace2);
        enlacetarjeta2.innerHTML = "Más información";
        tarjeta.appendChild(enlacetarjeta2);

        var espacio =  document.createElement("BR");
        tarjetas.appendChild(espacio);
      }
  })
  .fail(function() {
    alert( "No se han podido obtener los datos. Compruebe su conexión a Internet" );
    console.log("Error");
  })

  .always(function(){
    console.log("Terminado");
  })
}

function acercade(){
    analytics.screenView('Acercade');
}
