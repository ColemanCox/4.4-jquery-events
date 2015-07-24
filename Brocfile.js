var merge = require('broccoli-merge-trees');
var sassCompile = require('broccoli-sass');

var includePaths = [
  'assets',
 'bower_components/reset-css',
  'bower_components/fontawesome/scss',
  'bower_components/bourbon/app/assets/stylesheets',
  'bower_components/neat/app/assets/stylesheets'

];

var compiledCss1 = sassCompile(includePaths,'app.scss', 'accordian.css');
var compiledCss2 = sassCompile(includePaths,'keyboard.scss', 'keyboard.css');
module.exports = merge(['public', compiledCss1, compiledCss2]);

