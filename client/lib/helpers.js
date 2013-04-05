Handlebars.registerHelper("navClassFor", function (nav, options) {
  return (Meteor.router.navEquals(nav)) ? 'active' : '';
});
  
$.fn.serializeObject = function (){
  var o = {};
  var a = this.serializeArray();
  $.each(a, function (){
    if(o[this.name] !== undefined){
      if(!o[this.name].push){
        o[this.name] = [o[this.name]];
      }        
      o[this.name].push(this.value || '');
    } else{
      o[this.name] = this.value || '';
    }      
  });
  return o;
};