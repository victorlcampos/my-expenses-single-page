module.exports = function(args) {
  var controllerName = args[0];
  var name = args[1];

  return {
    templates: [{
      file: 'view.html',
      generatedFile: 'src/'+controllerName+'/'+name+'.html'
    },
    {
      file: 'viewUnitTest.js',
      generatedFile: 'test/unit/views/'+controllerName+'/'+name+'.test.js'
    },
    {
      file: 'viewE2ETest.js',
      generatedFile: 'test/e2e/'+controllerName+'/'+name+'.js'
    }],
    replaceWords: {
      name: name,
      controllerName: controllerName
    }
  }
}