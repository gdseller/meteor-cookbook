(function(){
Template.body.addContent((function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("navbarHeader")), HTML.Raw('\n  <div id="famousScene"></div>\n  <div id="backgroundImage"></div>\n\n  '), Spacebars.include(view.lookupTemplate("navbarFooter")) ];
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("appLayout");
Template["appLayout"] = new Template("Template.appLayout", (function() {
  var view = this;
  return Spacebars.include(view.lookupTemplate("yield"));
}));

})();
