module.exports = function(args) {
  var name = args[0];

  return {
    templates: [{
      file: 'controller.js',
      generatedFile: 'src/assets/javascripts/controllers/'+name+'Controller.js'
    },
    {
      file: 'controllerTest.js',
      generatedFile: 'test/unit/controllers/'+name+'Controller.test.js'
    }],
    replaceWords: {
      className: name.charAt(0).toUpperCase() + name.slice(1)
    }
  }
}