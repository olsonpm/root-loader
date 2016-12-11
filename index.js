'use strict';


//---------//
// Imports //
//---------//

const loaderUtils = require('loader-utils');


//------//
// Main //
//------//

function rootLoader(src, srcMap) {
  const { rootPath } = loaderUtils.parseQuery(this.query);

  src = src.replace(/\brequire\(('|")\//g, 'require($1' + rootPath + '/');

  this.callback(null, src, srcMap);
}


//---------//
// Exports //
//---------//

module.exports = rootLoader;
