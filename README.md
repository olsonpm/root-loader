# root-loader

a two-line loader that expands root paths to the configured root directory

For example the following directory structure inside `/path/to/project`
```
webpack.config.js

lib/
  utils.js

client/
  js/
    index.js
```

and the following loader configuration

```js
{
  test: /\.js$/
  , exclude: /(node_modules)/
  , loader: 'root'
  , query: {
    rootPath: __dirname
  }
}
```

would expand this require statement

```js
// client/js/index.js
require('/lib/utils');
```

into
```js
// client/js/index.js
require('/path/to/project/lib/utils');
```
