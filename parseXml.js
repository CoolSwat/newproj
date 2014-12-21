var xml2object = require('xml2object');
var q=require('q')

exports.parser=function(fileName){
var deffered=q.defer()
var parser = new xml2object([ 'loc' ]);
    parser.source=fileName;
var linkArr=[]
// Bind to the object event to work with the objects found in the XML file
parser.on('object', function(name, obj) {
   // console.log('Found an object: %s', name);
    linkArr.push(obj['$t']);
});

// Bind to the file end event to tell when the file is done being streamed
parser.on('end', function() {
    console.log('Finished parsing xml!');
    console.log(linkArr.length)
    deffered.resolve(linkArr)
});

// Start parsing the input stream
parser.start();
    return deffered.promise;
}