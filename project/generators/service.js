module.exports = function(args) {
  var name = args[0];

  return {
    templates: [{
      file: 'service.js',
      generatedFile: 'src/assets/javascripts/services/'+name+'Service.js'
    },
    {
      file: 'serviceTest.js',
      generatedFile: 'test/unit/services/'+name+'Service.test.js'
    }],
    replaceWords: {
      className: name.charAt(0).toUpperCase() + name.slice(1),
      name: name
    }
  }
}