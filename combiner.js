//Modules
var fs = require('fs');

//Variables
var jsPath = __dirname + '/public/js/';
var appFilePath = jsPath + 'app.js';
var appDirPath = jsPath + 'app/';
var modelPath = appDirPath + 'models/';
var collectionPath = appDirPath + 'collections/';
var modelViewPath = appDirPath + 'modelViews/';
var collectionViewPath = appDirPath + 'collectionViews/';
var data = '';

//Functions
var appendFiles = function(filePath, dirPath) {
  var files, i, path, fileStr;
  fileStr = '';
  files = fs.readdirSync(dirPath);
  for(i = 0; i < files.length; i++) {
    path = dirPath + files[i];
    fileStr += fs.readFileSync(path, {encoding: 'utf8'});
  }
  fileStr += '\n';
  return fileStr;
};

/***Script***/

//Gather Single File String
data += appendFiles(appFilePath, modelPath);
data += appendFiles(appFilePath, collectionPath);
data += appendFiles(appFilePath, modelViewPath);
data += appendFiles(appFilePath, collectionViewPath);

//Write File Data
fs.writeFileSync(appFilePath, data, {flag: 'w'});
