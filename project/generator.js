var fs     = require('fs'),
         _ = require('lodash');

var generatorName = process.argv[2];

function generate(generator) {
  var data = generator(process.argv.slice(3));

  data.templates.forEach(function(item) {
    var generatedFile = './'+item.generatedFile,
        template      = fs.readFileSync('./generators/templates/'+item.file),
        compiled      = _.template(template);

    fs.writeFileSync(generatedFile, compiled(data.replaceWords));

    console.log('Create: '+generatedFile);
  });
}
generate(require('./generators/'+generatorName+'.js'));