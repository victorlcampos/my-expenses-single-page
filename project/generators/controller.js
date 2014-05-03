module.exports = function(args) {
  var name = args[0];

  return {
    templates: [{
      file: 'controller.js',
      generatedFile: 'assets/javascripts/controllers/'+name+'Controller.js'
    }],
    replaceWords: {
      className: name.charAt(0).toUpperCase() + name.slice(1)
    }
  }
}