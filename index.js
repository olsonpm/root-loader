'use strict';


//---------//
// Imports //
//---------//

const loaderUtils = require('loader-utils');


//------//
// Main //
//------//

function rootLoader(src) {
  const { rootPath } = loaderUtils.parseQuery(this.query);

  return src.replace(/\brequire\(('|")\//g, 'require($1' + rootPath + '/');
}


//---------//
// Exports //
//---------//

module.exports = rootLoader;
