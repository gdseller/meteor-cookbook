(function(){
Template.__checkName("navbarFooter");
Template["navbarFooter"] = new Template("Template.navbarFooter", (function() {
  var view = this;
  return HTML.Raw('<footer id="navbarFooter" class="helveticas">\n    <a href="/">Meteor-Only</a>\n    <a href="/singleTile">Single Tile</a>\n    <a href="/spinners">Spinners</a>\n    <a href="/transforms">Transforms</a>\n    <a href="/physics">Physics</a>\n    <!-- <a href="">Table</a> -->\n    <a id="zoomIn" class="float-right">ZoomIn</a>\n    <a id="zoomOut" class="float-right">ZoomOut</a>\n  </footer>');
}));

})();
