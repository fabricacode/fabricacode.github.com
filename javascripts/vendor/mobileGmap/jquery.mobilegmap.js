!function(e){"use strict";var t={init:function(t){var a=e.extend({deviceWidth:480,showMarker:!0},t),s={},o=[];e(this),a.imgURI="http://maps.googleapis.com/maps/api/staticmap?",s.center="Brussels Belgium",s.zoom="5",s.size=screen.width+"x"+480,s.scale=window.devicePixelRatio?window.devicePixelRatio:1,s.maptype="roadmap",s.sensor=!1,a.settings=s,e(this).attr("data-center")&&(a.settings.center=e(this).attr("data-center").replace(/ /gi,"+")),e(this).attr("data-zoom")&&(a.settings.zoom=parseInt(e(this).attr("data-zoom"))),e(this).attr("data-maptype")&&(a.settings.zoom=e(this).attr("data-maptype")),a.showMarker&&o.push({label:"A",position:s.center}),a.markers=o,e(this).data("options",a),screen.width<a.deviceWidth?e(this).mobileGmap("showImage"):e(this).mobileGmap("showMap")},showMap:function(){var t=e(this).data("options"),a=new google.maps.Geocoder,s=(new google.maps.LatLng(-34.397,150.644),{}),o=e(this).get(0);a.geocode({address:t.settings.center.replace(/\+/gi," ")},function(e,a){if(a==google.maps.GeocoderStatus.OK){s={zoom:parseInt(t.settings.zoom,10),center:e[0].geometry.location,mapTypeId:t.settings.maptype};var i=new google.maps.Map(o,s);new google.maps.Marker({map:i,position:e[0].geometry.location})}})},showImage:function(){var t=[],a=new Image,s=document.createElement("a"),o=e(this).data("options"),i=0,r=[];for(var n in o.settings)t.push(n+"="+o.settings[n]);if(o.markers.length)for(var p=[];i<o.markers.length;i++){p=[];for(var m in o.markers[i])"position"==m?p.push(o.markers[i][m]):p.push(m+":"+o.markers[i][m]);r.push("&markers="+p.join("%7C"))}a.src=o.imgURI+t.join("&")+r.join(""),s.href="http://maps.google.com/maps?q="+o.settings.center,s.appendChild(a),e(this).empty().append(s)}};e.fn.mobileGmap=function(a){return t[a]?t[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof a&&a?(e.error("Method "+a+" does not exist on jQuery.mobileGmap"),void 0):t.init.apply(this,arguments)}}(this.jQuery);