module.exports = function(args) {
  var name = args[0];

  return {
    templates: [{
      file: 'service.js',
      generatedFile: 'assets/javascripts/services/'+name+'Service.js'
    }],
    replaceWords: {
      className: name.charAt(0).toUpperCase() + name.slice(1),
      name: name
    }
  }
}