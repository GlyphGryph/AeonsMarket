(function() {
"use strict";

window.App = Ember.Application.create();

App.Router.map(function() {
  this.resource('album', { path: '/album/:album_id' });
});

App.ApplicationRoute = Ember.Route.extend({
});

App.IndexRoute = Ember.Route.extend({
  model: function(){
    return App.ALBUM_FIXTURES;
  }
});

App.AlbumRoute = Ember.Route.extend({
  model: function(params){
    return App.ALBUM_FIXTURES.findProperty('id', params.album_id);
  }
});

Ember.Handlebars.helper('format-duration', function(duration) {
  var minutes = duration%60;
  if(minutes < 10){ minutes = "0"+minutes; }
  return "%@:%@".fmt(Math.floor(duration/60), minutes );
});

})();
