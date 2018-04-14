module.exports = __NEXT_REGISTER_PAGE('/', function() {
  var comp = webpackJsonp(
    [4],
    {
      /***/ './helpers/index.js': /***/ function(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict'
        /* WEBPACK VAR INJECTION */
        ;(function(module, process) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'a',
            function() {
              return getPackageInfo
            }
          )
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(
            './node_modules/babel-runtime/regenerator/index.js'
          )
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(
            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__
          )
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_algoliasearch__ = __webpack_require__(
            './node_modules/algoliasearch/src/browser/builds/algoliasearch.js'
          )
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_algoliasearch___default = __webpack_require__.n(
            __WEBPACK_IMPORTED_MODULE_1_algoliasearch__
          )

          var _this = this
          ;(function() {
            var enterModule = __webpack_require__(
              './node_modules/react-hot-loader/index.js'
            ).enterModule

            enterModule && enterModule(module)
          })()

          function _asyncToGenerator(fn) {
            return function() {
              var gen = fn.apply(this, arguments)
              return new Promise(function(resolve, reject) {
                function step(key, arg) {
                  try {
                    var info = gen[key](arg)
                    var value = info.value
                  } catch (error) {
                    reject(error)
                    return
                  }
                  if (info.done) {
                    resolve(value)
                  } else {
                    return Promise.resolve(value).then(
                      function(value) {
                        step('next', value)
                      },
                      function(err) {
                        step('throw', err)
                      }
                    )
                  }
                }
                return step('next')
              })
            }
          }

          var client = __WEBPACK_IMPORTED_MODULE_1_algoliasearch___default()(
            (process && process.env && process.env.ALGOLIA_APP_ID) ||
              'OFCNCOG2CU',
            (process && process.env && process.env.ALGOLIA_API_KEY) ||
              'f54e21fa3a2a0160595bb058179bfb1e'
          )

          var index = client.initIndex(
            (process && process.env && process.env.ALGOLIA_INDEX_NAME) ||
              'npm-search'
          )

          var getPackageInfo = (function() {
            var _ref = _asyncToGenerator(
              /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
                function _callee(pkgName) {
                  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
                    function _callee$(_context) {
                      while (1) {
                        switch ((_context.prev = _context.next)) {
                          case 0:
                            _context.prev = 0
                            _context.next = 3
                            return index.getObject(pkgName)

                          case 3:
                            return _context.abrupt('return', _context.sent)

                          case 6:
                            _context.prev = 6
                            _context.t0 = _context['catch'](0)
                            return _context.abrupt('return', {})

                          case 9:
                          case 'end':
                            return _context.stop()
                        }
                      }
                    },
                    _callee,
                    _this,
                    [[0, 6]]
                  )
                }
              )
            )

            return function getPackageInfo(_x) {
              return _ref.apply(this, arguments)
            }
          })()
          ;(function() {
            var reactHotLoader = __webpack_require__(
              './node_modules/react-hot-loader/index.js'
            ).default

            var leaveModule = __webpack_require__(
              './node_modules/react-hot-loader/index.js'
            ).leaveModule

            if (!reactHotLoader) {
              return
            }

            reactHotLoader.register(
              client,
              'client',
              '/Users/josefranciscoverdugambin/Downloads/changelog-website/helpers/index.js'
            )
            reactHotLoader.register(
              index,
              'index',
              '/Users/josefranciscoverdugambin/Downloads/changelog-website/helpers/index.js'
            )
            reactHotLoader.register(
              getPackageInfo,
              'getPackageInfo',
              '/Users/josefranciscoverdugambin/Downloads/changelog-website/helpers/index.js'
            )
            leaveModule(module)
          })()
          /* WEBPACK VAR INJECTION */
        }.call(
          __webpack_exports__,
          __webpack_require__(
            './node_modules/webpack/buildin/harmony-module.js'
          )(module),
          __webpack_require__(
            './node_modules/node-libs-browser/node_modules/process/browser.js'
          )
        ))

        /***/
      },

      /***/ './node_modules/algoliasearch/node_modules/debug/src/browser.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        /* WEBPACK VAR INJECTION */ ;(function(process) {
          /**
           * This is the web browser implementation of `debug()`.
           *
           * Expose `debug()` as the module.
           */

          exports = module.exports = __webpack_require__(
            './node_modules/algoliasearch/node_modules/debug/src/debug.js'
          )
          exports.log = log
          exports.formatArgs = formatArgs
          exports.save = save
          exports.load = load
          exports.useColors = useColors
          exports.storage =
            'undefined' != typeof chrome && 'undefined' != typeof chrome.storage
              ? chrome.storage.local
              : localstorage()

          /**
           * Colors.
           */

          exports.colors = [
            'lightseagreen',
            'forestgreen',
            'goldenrod',
            'dodgerblue',
            'darkorchid',
            'crimson'
          ]

          /**
           * Currently only WebKit-based Web Inspectors, Firefox >= v31,
           * and the Firebug extension (any Firefox version) are known
           * to support "%c" CSS customizations.
           *
           * TODO: add a `localStorage` variable to explicitly enable/disable colors
           */

          function useColors() {
            // NB: In an Electron preload script, document will be defined but not fully
            // initialized. Since we know we're in Chrome, we'll just detect this case
            // explicitly
            if (
              typeof window !== 'undefined' &&
              window.process &&
              window.process.type === 'renderer'
            ) {
              return true
            }

            // is webkit? http://stackoverflow.com/a/16459606/376773
            // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
            return (
              (typeof document !== 'undefined' &&
                document.documentElement &&
                document.documentElement.style &&
                document.documentElement.style.WebkitAppearance) ||
              // is firebug? http://stackoverflow.com/a/398120/376773
              (typeof window !== 'undefined' &&
                window.console &&
                (window.console.firebug ||
                  (window.console.exception && window.console.table))) ||
              // is firefox >= v31?
              // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
              (typeof navigator !== 'undefined' &&
                navigator.userAgent &&
                navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                parseInt(RegExp.$1, 10) >= 31) ||
              // double check webkit in userAgent just in case we are in a worker
              (typeof navigator !== 'undefined' &&
                navigator.userAgent &&
                navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
            )
          }

          /**
           * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
           */

          exports.formatters.j = function(v) {
            try {
              return JSON.stringify(v)
            } catch (err) {
              return '[UnexpectedJSONParseError]: ' + err.message
            }
          }

          /**
           * Colorize log arguments if enabled.
           *
           * @api public
           */

          function formatArgs(args) {
            var useColors = this.useColors

            args[0] =
              (useColors ? '%c' : '') +
              this.namespace +
              (useColors ? ' %c' : ' ') +
              args[0] +
              (useColors ? '%c ' : ' ') +
              '+' +
              exports.humanize(this.diff)

            if (!useColors) return

            var c = 'color: ' + this.color
            args.splice(1, 0, c, 'color: inherit')

            // the final "%c" is somewhat tricky, because there could be other
            // arguments passed either before or after the %c, so we need to
            // figure out the correct index to insert the CSS into
            var index = 0
            var lastC = 0
            args[0].replace(/%[a-zA-Z%]/g, function(match) {
              if ('%%' === match) return
              index++
              if ('%c' === match) {
                // we only are interested in the *last* %c
                // (the user may have provided their own)
                lastC = index
              }
            })

            args.splice(lastC, 0, c)
          }

          /**
           * Invokes `console.log()` when available.
           * No-op when `console.log` is not a "function".
           *
           * @api public
           */

          function log() {
            // this hackery is required for IE8/9, where
            // the `console.log` function doesn't have 'apply'
            return (
              'object' === typeof console &&
              console.log &&
              Function.prototype.apply.call(console.log, console, arguments)
            )
          }

          /**
           * Save `namespaces`.
           *
           * @param {String} namespaces
           * @api private
           */

          function save(namespaces) {
            try {
              if (null == namespaces) {
                exports.storage.removeItem('debug')
              } else {
                exports.storage.debug = namespaces
              }
            } catch (e) {}
          }

          /**
           * Load `namespaces`.
           *
           * @return {String} returns the previously persisted debug modes
           * @api private
           */

          function load() {
            var r
            try {
              r = exports.storage.debug
            } catch (e) {}

            // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
            if (!r && typeof process !== 'undefined' && 'env' in process) {
              r = process.env.DEBUG
            }

            return r
          }

          /**
           * Enable namespaces listed in `localStorage.debug` initially.
           */

          exports.enable(load())

          /**
           * Localstorage attempts to return the localstorage.
           *
           * This is necessary because safari throws
           * when a user disables cookies/localstorage
           * and you attempt to access it.
           *
           * @return {LocalStorage}
           * @api private
           */

          function localstorage() {
            try {
              return window.localStorage
            } catch (e) {}
          }

          /* WEBPACK VAR INJECTION */
        }.call(
          exports,
          __webpack_require__(
            './node_modules/node-libs-browser/node_modules/process/browser.js'
          )
        ))

        /***/
      },

      /***/ './node_modules/algoliasearch/node_modules/debug/src/debug.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        /**
         * This is the common logic for both the Node.js and web browser
         * implementations of `debug()`.
         *
         * Expose `debug()` as the module.
         */

        exports = module.exports = createDebug.debug = createDebug[
          'default'
        ] = createDebug
        exports.coerce = coerce
        exports.disable = disable
        exports.enable = enable
        exports.enabled = enabled
        exports.humanize = __webpack_require__('./node_modules/ms/index.js')

        /**
         * The currently active debug mode names, and names to skip.
         */

        exports.names = []
        exports.skips = []

        /**
         * Map of special "%n" handling functions, for the debug "format" argument.
         *
         * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
         */

        exports.formatters = {}

        /**
         * Previous log timestamp.
         */

        var prevTime

        /**
         * Select a color.
         * @param {String} namespace
         * @return {Number}
         * @api private
         */

        function selectColor(namespace) {
          var hash = 0,
            i

          for (i in namespace) {
            hash = (hash << 5) - hash + namespace.charCodeAt(i)
            hash |= 0 // Convert to 32bit integer
          }

          return exports.colors[Math.abs(hash) % exports.colors.length]
        }

        /**
         * Create a debugger with the given `namespace`.
         *
         * @param {String} namespace
         * @return {Function}
         * @api public
         */

        function createDebug(namespace) {
          function debug() {
            // disabled?
            if (!debug.enabled) return

            var self = debug

            // set `diff` timestamp
            var curr = +new Date()
            var ms = curr - (prevTime || curr)
            self.diff = ms
            self.prev = prevTime
            self.curr = curr
            prevTime = curr

            // turn the `arguments` into a proper Array
            var args = new Array(arguments.length)
            for (var i = 0; i < args.length; i++) {
              args[i] = arguments[i]
            }

            args[0] = exports.coerce(args[0])

            if ('string' !== typeof args[0]) {
              // anything else let's inspect with %O
              args.unshift('%O')
            }

            // apply any `formatters` transformations
            var index = 0
            args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
              // if we encounter an escaped % then don't increase the array index
              if (match === '%%') return match
              index++
              var formatter = exports.formatters[format]
              if ('function' === typeof formatter) {
                var val = args[index]
                match = formatter.call(self, val)

                // now we need to remove `args[index]` since it's inlined in the `format`
                args.splice(index, 1)
                index--
              }
              return match
            })

            // apply env-specific formatting (colors, etc.)
            exports.formatArgs.call(self, args)

            var logFn = debug.log || exports.log || console.log.bind(console)
            logFn.apply(self, args)
          }

          debug.namespace = namespace
          debug.enabled = exports.enabled(namespace)
          debug.useColors = exports.useColors()
          debug.color = selectColor(namespace)

          // env-specific initialization logic for debug instances
          if ('function' === typeof exports.init) {
            exports.init(debug)
          }

          return debug
        }

        /**
         * Enables a debug mode by namespaces. This can include modes
         * separated by a colon and wildcards.
         *
         * @param {String} namespaces
         * @api public
         */

        function enable(namespaces) {
          exports.save(namespaces)

          exports.names = []
          exports.skips = []

          var split = (typeof namespaces === 'string' ? namespaces : '').split(
            /[\s,]+/
          )
          var len = split.length

          for (var i = 0; i < len; i++) {
            if (!split[i]) continue // ignore empty strings
            namespaces = split[i].replace(/\*/g, '.*?')
            if (namespaces[0] === '-') {
              exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'))
            } else {
              exports.names.push(new RegExp('^' + namespaces + '$'))
            }
          }
        }

        /**
         * Disable debug output.
         *
         * @api public
         */

        function disable() {
          exports.enable('')
        }

        /**
         * Returns true if the given mode name is enabled, false otherwise.
         *
         * @param {String} name
         * @return {Boolean}
         * @api public
         */

        function enabled(name) {
          var i, len
          for (i = 0, len = exports.skips.length; i < len; i++) {
            if (exports.skips[i].test(name)) {
              return false
            }
          }
          for (i = 0, len = exports.names.length; i < len; i++) {
            if (exports.names[i].test(name)) {
              return true
            }
          }
          return false
        }

        /**
         * Coerce `val`.
         *
         * @param {Mixed} val
         * @return {Mixed}
         * @api private
         */

        function coerce(val) {
          if (val instanceof Error) return val.stack || val.message
          return val
        }

        /***/
      },

      /***/ './node_modules/algoliasearch/node_modules/isarray/index.js': /***/ function(
        module,
        exports
      ) {
        var toString = {}.toString

        module.exports =
          Array.isArray ||
          function(arr) {
            return toString.call(arr) == '[object Array]'
          }

        /***/
      },

      /***/ './node_modules/algoliasearch/src/AlgoliaSearch.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        module.exports = AlgoliaSearch

        var Index = __webpack_require__(
          './node_modules/algoliasearch/src/Index.js'
        )
        var deprecate = __webpack_require__(
          './node_modules/algoliasearch/src/deprecate.js'
        )
        var deprecatedMessage = __webpack_require__(
          './node_modules/algoliasearch/src/deprecatedMessage.js'
        )
        var AlgoliaSearchCore = __webpack_require__(
          './node_modules/algoliasearch/src/AlgoliaSearchCore.js'
        )
        var inherits = __webpack_require__(
          './node_modules/inherits/inherits_browser.js'
        )
        var errors = __webpack_require__(
          './node_modules/algoliasearch/src/errors.js'
        )

        function AlgoliaSearch() {
          AlgoliaSearchCore.apply(this, arguments)
        }

        inherits(AlgoliaSearch, AlgoliaSearchCore)

        /*
 * Delete an index
 *
 * @param indexName the name of index to delete
 * @param callback the result callback called with two arguments
 *  error: null or Error('message')
 *  content: the server answer that contains the task ID
 */
        AlgoliaSearch.prototype.deleteIndex = function(indexName, callback) {
          return this._jsonRequest({
            method: 'DELETE',
            url: '/1/indexes/' + encodeURIComponent(indexName),
            hostType: 'write',
            callback: callback
          })
        }

        /**
         * Move an existing index.
         * @param srcIndexName the name of index to copy.
         * @param dstIndexName the new index name that will contains a copy of
         * srcIndexName (destination will be overriten if it already exist).
         * @param callback the result callback called with two arguments
         *  error: null or Error('message')
         *  content: the server answer that contains the task ID
         */
        AlgoliaSearch.prototype.moveIndex = function(
          srcIndexName,
          dstIndexName,
          callback
        ) {
          var postObj = {
            operation: 'move',
            destination: dstIndexName
          }
          return this._jsonRequest({
            method: 'POST',
            url:
              '/1/indexes/' + encodeURIComponent(srcIndexName) + '/operation',
            body: postObj,
            hostType: 'write',
            callback: callback
          })
        }

        /**
         * Copy an existing index.
         * @param srcIndexName the name of index to copy.
         * @param dstIndexName the new index name that will contains a copy
         * of srcIndexName (destination will be overriten if it already exist).
         * @param scope an array of scopes to copy: ['settings', 'synonyms', 'rules']
         * @param callback the result callback called with two arguments
         *  error: null or Error('message')
         *  content: the server answer that contains the task ID
         */
        AlgoliaSearch.prototype.copyIndex = function(
          srcIndexName,
          dstIndexName,
          scopeOrCallback,
          _callback
        ) {
          var postObj = {
            operation: 'copy',
            destination: dstIndexName
          }
          var callback = _callback
          if (typeof scopeOrCallback === 'function') {
            // oops, old behaviour of third argument being a function
            callback = scopeOrCallback
          } else if (
            Array.isArray(scopeOrCallback) &&
            scopeOrCallback.length > 0
          ) {
            postObj.scope = scopeOrCallback
          } else if (typeof scopeOrCallback !== 'undefined') {
            throw new Error(
              'the scope given to `copyIndex` was not an array with settings, synonyms or rules'
            )
          }
          return this._jsonRequest({
            method: 'POST',
            url:
              '/1/indexes/' + encodeURIComponent(srcIndexName) + '/operation',
            body: postObj,
            hostType: 'write',
            callback: callback
          })
        }

        /**
         * Return last log entries.
         * @param offset Specify the first entry to retrieve (0-based, 0 is the most recent log entry).
         * @param length Specify the maximum number of entries to retrieve starting
         * at offset. Maximum allowed value: 1000.
         * @param type Specify the maximum number of entries to retrieve starting
         * at offset. Maximum allowed value: 1000.
         * @param callback the result callback called with two arguments
         *  error: null or Error('message')
         *  content: the server answer that contains the task ID
         */
        AlgoliaSearch.prototype.getLogs = function(offset, length, callback) {
          var clone = __webpack_require__(
            './node_modules/algoliasearch/src/clone.js'
          )
          var params = {}
          if (typeof offset === 'object') {
            // getLogs(params)
            params = clone(offset)
            callback = length
          } else if (arguments.length === 0 || typeof offset === 'function') {
            // getLogs([cb])
            callback = offset
          } else if (arguments.length === 1 || typeof length === 'function') {
            // getLogs(1, [cb)]
            callback = length
            params.offset = offset
          } else {
            // getLogs(1, 2, [cb])
            params.offset = offset
            params.length = length
          }

          if (params.offset === undefined) params.offset = 0
          if (params.length === undefined) params.length = 10

          return this._jsonRequest({
            method: 'GET',
            url: '/1/logs?' + this._getSearchParams(params, ''),
            hostType: 'read',
            callback: callback
          })
        }

        /*
 * List all existing indexes (paginated)
 *
 * @param page The page to retrieve, starting at 0.
 * @param callback the result callback called with two arguments
 *  error: null or Error('message')
 *  content: the server answer with index list
 */
        AlgoliaSearch.prototype.listIndexes = function(page, callback) {
          var params = ''

          if (page === undefined || typeof page === 'function') {
            callback = page
          } else {
            params = '?page=' + page
          }

          return this._jsonRequest({
            method: 'GET',
            url: '/1/indexes' + params,
            hostType: 'read',
            callback: callback
          })
        }

        /*
 * Get the index object initialized
 *
 * @param indexName the name of index
 * @param callback the result callback with one argument (the Index instance)
 */
        AlgoliaSearch.prototype.initIndex = function(indexName) {
          return new Index(this, indexName)
        }

        /*
 * @deprecated use client.listApiKeys
 */
        AlgoliaSearch.prototype.listUserKeys = deprecate(function(callback) {
          return this.listApiKeys(callback)
        }, deprecatedMessage('client.listUserKeys()', 'client.listApiKeys()'))

        /*
 * List all existing api keys with their associated ACLs
 *
 * @param callback the result callback called with two arguments
 *  error: null or Error('message')
 *  content: the server answer with api keys list
 */
        AlgoliaSearch.prototype.listApiKeys = function(callback) {
          return this._jsonRequest({
            method: 'GET',
            url: '/1/keys',
            hostType: 'read',
            callback: callback
          })
        }

        /*
 * @deprecated see client.getApiKey
 */
        AlgoliaSearch.prototype.getUserKeyACL = deprecate(function(
          key,
          callback
        ) {
          return this.getApiKey(key, callback)
        },
        deprecatedMessage('client.getUserKeyACL()', 'client.getApiKey()'))

        /*
 * Get an API key
 *
 * @param key
 * @param callback the result callback called with two arguments
 *  error: null or Error('message')
 *  content: the server answer with the right API key
 */
        AlgoliaSearch.prototype.getApiKey = function(key, callback) {
          return this._jsonRequest({
            method: 'GET',
            url: '/1/keys/' + key,
            hostType: 'read',
            callback: callback
          })
        }

        /*
 * @deprecated see client.deleteApiKey
 */
        AlgoliaSearch.prototype.deleteUserKey = deprecate(function(
          key,
          callback
        ) {
          return this.deleteApiKey(key, callback)
        },
        deprecatedMessage('client.deleteUserKey()', 'client.deleteApiKey()'))

        /*
 * Delete an existing API key
 * @param key
 * @param callback the result callback called with two arguments
 *  error: null or Error('message')
 *  content: the server answer with the date of deletion
 */
        AlgoliaSearch.prototype.deleteApiKey = function(key, callback) {
          return this._jsonRequest({
            method: 'DELETE',
            url: '/1/keys/' + key,
            hostType: 'write',
            callback: callback
          })
        }

        /*
 @deprecated see client.addApiKey
 */
        AlgoliaSearch.prototype.addUserKey = deprecate(function(
          acls,
          params,
          callback
        ) {
          return this.addApiKey(acls, params, callback)
        },
        deprecatedMessage('client.addUserKey()', 'client.addApiKey()'))

        /*
 * Add a new global API key
 *
 * @param {string[]} acls - The list of ACL for this key. Defined by an array of strings that
 *   can contains the following values:
 *     - search: allow to search (https and http)
 *     - addObject: allows to add/update an object in the index (https only)
 *     - deleteObject : allows to delete an existing object (https only)
 *     - deleteIndex : allows to delete index content (https only)
 *     - settings : allows to get index settings (https only)
 *     - editSettings : allows to change index settings (https only)
 * @param {Object} [params] - Optionnal parameters to set for the key
 * @param {number} params.validity - Number of seconds after which the key will be automatically removed (0 means no time limit for this key)
 * @param {number} params.maxQueriesPerIPPerHour - Number of API calls allowed from an IP address per hour
 * @param {number} params.maxHitsPerQuery - Number of hits this API key can retrieve in one call
 * @param {string[]} params.indexes - Allowed targeted indexes for this key
 * @param {string} params.description - A description for your key
 * @param {string[]} params.referers - A list of authorized referers
 * @param {Object} params.queryParameters - Force the key to use specific query parameters
 * @param {Function} callback - The result callback called with two arguments
 *   error: null or Error('message')
 *   content: the server answer with the added API key
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.addUserKey(['search'], {
 *   validity: 300,
 *   maxQueriesPerIPPerHour: 2000,
 *   maxHitsPerQuery: 3,
 *   indexes: ['fruits'],
 *   description: 'Eat three fruits',
 *   referers: ['*.algolia.com'],
 *   queryParameters: {
 *     tagFilters: ['public'],
 *   }
 * })
 * @see {@link https://www.algolia.com/doc/rest_api#AddKey|Algolia REST API Documentation}
 */
        AlgoliaSearch.prototype.addApiKey = function(acls, params, callback) {
          var isArray = __webpack_require__(
            './node_modules/algoliasearch/node_modules/isarray/index.js'
          )
          var usage = 'Usage: client.addApiKey(arrayOfAcls[, params, callback])'

          if (!isArray(acls)) {
            throw new Error(usage)
          }

          if (arguments.length === 1 || typeof params === 'function') {
            callback = params
            params = null
          }

          var postObj = {
            acl: acls
          }

          if (params) {
            postObj.validity = params.validity
            postObj.maxQueriesPerIPPerHour = params.maxQueriesPerIPPerHour
            postObj.maxHitsPerQuery = params.maxHitsPerQuery
            postObj.indexes = params.indexes
            postObj.description = params.description

            if (params.queryParameters) {
              postObj.queryParameters = this._getSearchParams(
                params.queryParameters,
                ''
              )
            }

            postObj.referers = params.referers
          }

          return this._jsonRequest({
            method: 'POST',
            url: '/1/keys',
            body: postObj,
            hostType: 'write',
            callback: callback
          })
        }

        /**
         * @deprecated Please use client.addApiKey()
         */
        AlgoliaSearch.prototype.addUserKeyWithValidity = deprecate(function(
          acls,
          params,
          callback
        ) {
          return this.addApiKey(acls, params, callback)
        },
        deprecatedMessage('client.addUserKeyWithValidity()', 'client.addApiKey()'))

        /**
         * @deprecated Please use client.updateApiKey()
         */
        AlgoliaSearch.prototype.updateUserKey = deprecate(function(
          key,
          acls,
          params,
          callback
        ) {
          return this.updateApiKey(key, acls, params, callback)
        },
        deprecatedMessage('client.updateUserKey()', 'client.updateApiKey()'))

        /**
         * Update an existing API key
         * @param {string} key - The key to update
         * @param {string[]} acls - The list of ACL for this key. Defined by an array of strings that
         *   can contains the following values:
         *     - search: allow to search (https and http)
         *     - addObject: allows to add/update an object in the index (https only)
         *     - deleteObject : allows to delete an existing object (https only)
         *     - deleteIndex : allows to delete index content (https only)
         *     - settings : allows to get index settings (https only)
         *     - editSettings : allows to change index settings (https only)
         * @param {Object} [params] - Optionnal parameters to set for the key
         * @param {number} params.validity - Number of seconds after which the key will be automatically removed (0 means no time limit for this key)
         * @param {number} params.maxQueriesPerIPPerHour - Number of API calls allowed from an IP address per hour
         * @param {number} params.maxHitsPerQuery - Number of hits this API key can retrieve in one call
         * @param {string[]} params.indexes - Allowed targeted indexes for this key
         * @param {string} params.description - A description for your key
         * @param {string[]} params.referers - A list of authorized referers
         * @param {Object} params.queryParameters - Force the key to use specific query parameters
         * @param {Function} callback - The result callback called with two arguments
         *   error: null or Error('message')
         *   content: the server answer with the modified API key
         * @return {Promise|undefined} Returns a promise if no callback given
         * @example
         * client.updateApiKey('APIKEY', ['search'], {
         *   validity: 300,
         *   maxQueriesPerIPPerHour: 2000,
         *   maxHitsPerQuery: 3,
         *   indexes: ['fruits'],
         *   description: 'Eat three fruits',
         *   referers: ['*.algolia.com'],
         *   queryParameters: {
         *     tagFilters: ['public'],
         *   }
         * })
         * @see {@link https://www.algolia.com/doc/rest_api#UpdateIndexKey|Algolia REST API Documentation}
         */
        AlgoliaSearch.prototype.updateApiKey = function(
          key,
          acls,
          params,
          callback
        ) {
          var isArray = __webpack_require__(
            './node_modules/algoliasearch/node_modules/isarray/index.js'
          )
          var usage =
            'Usage: client.updateApiKey(key, arrayOfAcls[, params, callback])'

          if (!isArray(acls)) {
            throw new Error(usage)
          }

          if (arguments.length === 2 || typeof params === 'function') {
            callback = params
            params = null
          }

          var putObj = {
            acl: acls
          }

          if (params) {
            putObj.validity = params.validity
            putObj.maxQueriesPerIPPerHour = params.maxQueriesPerIPPerHour
            putObj.maxHitsPerQuery = params.maxHitsPerQuery
            putObj.indexes = params.indexes
            putObj.description = params.description

            if (params.queryParameters) {
              putObj.queryParameters = this._getSearchParams(
                params.queryParameters,
                ''
              )
            }

            putObj.referers = params.referers
          }

          return this._jsonRequest({
            method: 'PUT',
            url: '/1/keys/' + key,
            body: putObj,
            hostType: 'write',
            callback: callback
          })
        }

        /**
         * Initialize a new batch of search queries
         * @deprecated use client.search()
         */
        AlgoliaSearch.prototype.startQueriesBatch = deprecate(
          function startQueriesBatchDeprecated() {
            this._batch = []
          },
          deprecatedMessage('client.startQueriesBatch()', 'client.search()')
        )

        /**
         * Add a search query in the batch
         * @deprecated use client.search()
         */
        AlgoliaSearch.prototype.addQueryInBatch = deprecate(
          function addQueryInBatchDeprecated(indexName, query, args) {
            this._batch.push({
              indexName: indexName,
              query: query,
              params: args
            })
          },
          deprecatedMessage('client.addQueryInBatch()', 'client.search()')
        )

        /**
         * Launch the batch of queries using XMLHttpRequest.
         * @deprecated use client.search()
         */
        AlgoliaSearch.prototype.sendQueriesBatch = deprecate(
          function sendQueriesBatchDeprecated(callback) {
            return this.search(this._batch, callback)
          },
          deprecatedMessage('client.sendQueriesBatch()', 'client.search()')
        )

        /**
         * Perform write operations accross multiple indexes.
         *
         * To reduce the amount of time spent on network round trips,
         * you can create, update, or delete several objects in one call,
         * using the batch endpoint (all operations are done in the given order).
         *
         * Available actions:
         *   - addObject
         *   - updateObject
         *   - partialUpdateObject
         *   - partialUpdateObjectNoCreate
         *   - deleteObject
         *
         * https://www.algolia.com/doc/rest_api#Indexes
         * @param  {Object[]} operations An array of operations to perform
         * @return {Promise|undefined} Returns a promise if no callback given
         * @example
         * client.batch([{
         *   action: 'addObject',
         *   indexName: 'clients',
         *   body: {
         *     name: 'Bill'
         *   }
         * }, {
         *   action: 'udpateObject',
         *   indexName: 'fruits',
         *   body: {
         *     objectID: '29138',
         *     name: 'banana'
         *   }
         * }], cb)
         */
        AlgoliaSearch.prototype.batch = function(operations, callback) {
          var isArray = __webpack_require__(
            './node_modules/algoliasearch/node_modules/isarray/index.js'
          )
          var usage = 'Usage: client.batch(operations[, callback])'

          if (!isArray(operations)) {
            throw new Error(usage)
          }

          return this._jsonRequest({
            method: 'POST',
            url: '/1/indexes/*/batch',
            body: {
              requests: operations
            },
            hostType: 'write',
            callback: callback
          })
        }

        /**
         * Assign or Move a userID to a cluster
         *
         * @param {string} data.userID The userID to assign to a new cluster
         * @param {string} data.cluster The cluster to assign the user to
         * @return {Promise|undefined} Returns a promise if no callback given
         * @example
         * client.assignUserID({ cluster: 'c1-test', userID: 'some-user' });
         */
        AlgoliaSearch.prototype.assignUserID = function(data, callback) {
          if (!data.userID || !data.cluster) {
            throw new errors.AlgoliaSearchError(
              'You have to provide both a userID and cluster',
              data
            )
          }
          return this._jsonRequest({
            method: 'POST',
            url: '/1/clusters/mapping',
            hostType: 'write',
            body: { cluster: data.cluster },
            callback: callback,
            headers: {
              'X-Algolia-User-ID': data.userID
            }
          })
        }

        /**
         * Get the top userIDs
         *
         * (the callback is the second argument)
         *
         * @return {Promise|undefined} Returns a promise if no callback given
         * @example
         * client.getTopUserID();
         */
        AlgoliaSearch.prototype.getTopUserID = function(callback) {
          return this._jsonRequest({
            method: 'GET',
            url: '/1/clusters/mapping/top',
            hostType: 'read',
            callback: callback
          })
        }

        /**
         * Get userID
         *
         * @param {string} data.userID The userID to get info about
         * @return {Promise|undefined} Returns a promise if no callback given
         * @example
         * client.getUserID({ userID: 'some-user' });
         */
        AlgoliaSearch.prototype.getUserID = function(data, callback) {
          if (!data.userID) {
            throw new errors.AlgoliaSearchError(
              'You have to provide a userID',
              { debugData: data }
            )
          }
          return this._jsonRequest({
            method: 'GET',
            url: '/1/clusters/mapping/' + data.userID,
            hostType: 'read',
            callback: callback
          })
        }

        /**
         * List all the clusters
         *
         * (the callback is the second argument)
         *
         * @return {Promise|undefined} Returns a promise if no callback given
         * @example
         * client.listClusters();
         */
        AlgoliaSearch.prototype.listClusters = function(callback) {
          return this._jsonRequest({
            method: 'GET',
            url: '/1/clusters',
            hostType: 'read',
            callback: callback
          })
        }

        /**
         * List the userIDs
         *
         * (the callback is the second argument)
         *
         * @param {string} data.hitsPerPage How many hits on every page
         * @param {string} data.page The page to retrieve
         * @return {Promise|undefined} Returns a promise if no callback given
         * @example
         * client.listClusters();
         * client.listClusters({ page: 3, hitsPerPage: 30});
         */
        AlgoliaSearch.prototype.listUserIDs = function(data, callback) {
          return this._jsonRequest({
            method: 'GET',
            url: '/1/clusters/mapping',
            body: data,
            hostType: 'read',
            callback: callback
          })
        }

        /**
         * Remove an userID
         *
         * @param {string} data.userID The userID to assign to a new cluster
         * @return {Promise|undefined} Returns a promise if no callback given
         * @example
         * client.removeUserID({ userID: 'some-user' });
         */
        AlgoliaSearch.prototype.removeUserID = function(data, callback) {
          if (!data.userID) {
            throw new errors.AlgoliaSearchError(
              'You have to provide a userID',
              { debugData: data }
            )
          }
          return this._jsonRequest({
            method: 'DELETE',
            url: '/1/clusters/mapping',
            hostType: 'write',
            callback: callback,
            headers: {
              'X-Algolia-User-ID': data.userID
            }
          })
        }

        /**
         * Search for userIDs
         *
         * @param {string} data.cluster The cluster to target
         * @param {string} data.query The query to execute
         * @param {string} data.hitsPerPage How many hits on every page
         * @param {string} data.page The page to retrieve
         * @return {Promise|undefined} Returns a promise if no callback given
         * @example
         * client.searchUserIDs({ cluster: 'c1-test', query: 'some-user' });
         * client.searchUserIDs({
         *   cluster: "c1-test",
         *   query: "some-user",
         *   page: 3,
         *   hitsPerPage: 2
         * });
         */
        AlgoliaSearch.prototype.searchUserIDs = function(data, callback) {
          return this._jsonRequest({
            method: 'POST',
            url: '/1/clusters/mapping/search',
            body: data,
            hostType: 'read',
            callback: callback
          })
        }

        // environment specific methods
        AlgoliaSearch.prototype.destroy = notImplemented
        AlgoliaSearch.prototype.enableRateLimitForward = notImplemented
        AlgoliaSearch.prototype.disableRateLimitForward = notImplemented
        AlgoliaSearch.prototype.useSecuredAPIKey = notImplemented
        AlgoliaSearch.prototype.disableSecuredAPIKey = notImplemented
        AlgoliaSearch.prototype.generateSecuredApiKey = notImplemented

        function notImplemented() {
          var message =
            'Not implemented in this environment.\n' +
            'If you feel this is a mistake, write to support@algolia.com'

          throw new errors.AlgoliaSearchError(message)
        }

        /***/
      },

      /***/ './node_modules/algoliasearch/src/AlgoliaSearchCore.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        /* WEBPACK VAR INJECTION */ ;(function(process) {
          module.exports = AlgoliaSearchCore

          var errors = __webpack_require__(
            './node_modules/algoliasearch/src/errors.js'
          )
          var exitPromise = __webpack_require__(
            './node_modules/algoliasearch/src/exitPromise.js'
          )
          var IndexCore = __webpack_require__(
            './node_modules/algoliasearch/src/IndexCore.js'
          )
          var store = __webpack_require__(
            './node_modules/algoliasearch/src/store.js'
          )

          // We will always put the API KEY in the JSON body in case of too long API KEY,
          // to avoid query string being too long and failing in various conditions (our server limit, browser limit,
          // proxies limit)
          var MAX_API_KEY_LENGTH = 500
          var RESET_APP_DATA_TIMER =
            (process.env.RESET_APP_DATA_TIMER &&
              parseInt(process.env.RESET_APP_DATA_TIMER, 10)) ||
            60 * 2 * 1000 // after 2 minutes reset to first host

          /*
 * Algolia Search library initialization
 * https://www.algolia.com/
 *
 * @param {string} applicationID - Your applicationID, found in your dashboard
 * @param {string} apiKey - Your API key, found in your dashboard
 * @param {Object} [opts]
 * @param {number} [opts.timeout=2000] - The request timeout set in milliseconds,
 * another request will be issued after this timeout
 * @param {string} [opts.protocol='https:'] - The protocol used to query Algolia Search API.
 *                                        Set to 'http:' to force using http.
 * @param {Object|Array} [opts.hosts={
 *           read: [this.applicationID + '-dsn.algolia.net'].concat([
 *             this.applicationID + '-1.algolianet.com',
 *             this.applicationID + '-2.algolianet.com',
 *             this.applicationID + '-3.algolianet.com']
 *           ]),
 *           write: [this.applicationID + '.algolia.net'].concat([
 *             this.applicationID + '-1.algolianet.com',
 *             this.applicationID + '-2.algolianet.com',
 *             this.applicationID + '-3.algolianet.com']
 *           ]) - The hosts to use for Algolia Search API.
 *           If you provide them, you will less benefit from our HA implementation
 */
          function AlgoliaSearchCore(applicationID, apiKey, opts) {
            var debug = __webpack_require__(
              './node_modules/algoliasearch/node_modules/debug/src/browser.js'
            )('algoliasearch')

            var clone = __webpack_require__(
              './node_modules/algoliasearch/src/clone.js'
            )
            var isArray = __webpack_require__(
              './node_modules/algoliasearch/node_modules/isarray/index.js'
            )
            var map = __webpack_require__(
              './node_modules/algoliasearch/src/map.js'
            )

            var usage = 'Usage: algoliasearch(applicationID, apiKey, opts)'

            if (opts._allowEmptyCredentials !== true && !applicationID) {
              throw new errors.AlgoliaSearchError(
                'Please provide an application ID. ' + usage
              )
            }

            if (opts._allowEmptyCredentials !== true && !apiKey) {
              throw new errors.AlgoliaSearchError(
                'Please provide an API key. ' + usage
              )
            }

            this.applicationID = applicationID
            this.apiKey = apiKey

            this.hosts = {
              read: [],
              write: []
            }

            opts = opts || {}

            this._timeouts = opts.timeouts || {
              connect: 1 * 1000, // 500ms connect is GPRS latency
              read: 2 * 1000,
              write: 30 * 1000
            }

            // backward compat, if opts.timeout is passed, we use it to configure all timeouts like before
            if (opts.timeout) {
              this._timeouts.connect = this._timeouts.read = this._timeouts.write =
                opts.timeout
            }

            var protocol = opts.protocol || 'https:'
            // while we advocate for colon-at-the-end values: 'http:' for `opts.protocol`
            // we also accept `http` and `https`. It's a common error.
            if (!/:$/.test(protocol)) {
              protocol = protocol + ':'
            }

            if (protocol !== 'http:' && protocol !== 'https:') {
              throw new errors.AlgoliaSearchError(
                'protocol must be `http:` or `https:` (was `' +
                  opts.protocol +
                  '`)'
              )
            }

            this._checkAppIdData()

            if (!opts.hosts) {
              var defaultHosts = map(this._shuffleResult, function(hostNumber) {
                return applicationID + '-' + hostNumber + '.algolianet.com'
              })

              // no hosts given, compute defaults
              var mainSuffix =
                (opts.dsn === false ? '' : '-dsn') + '.algolia.net'
              this.hosts.read = [this.applicationID + mainSuffix].concat(
                defaultHosts
              )
              this.hosts.write = [this.applicationID + '.algolia.net'].concat(
                defaultHosts
              )
            } else if (isArray(opts.hosts)) {
              // when passing custom hosts, we need to have a different host index if the number
              // of write/read hosts are different.
              this.hosts.read = clone(opts.hosts)
              this.hosts.write = clone(opts.hosts)
            } else {
              this.hosts.read = clone(opts.hosts.read)
              this.hosts.write = clone(opts.hosts.write)
            }

            // add protocol and lowercase hosts
            this.hosts.read = map(this.hosts.read, prepareHost(protocol))
            this.hosts.write = map(this.hosts.write, prepareHost(protocol))

            this.extraHeaders = {}

            // In some situations you might want to warm the cache
            this.cache = opts._cache || {}

            this._ua = opts._ua
            this._useCache =
              opts._useCache === undefined || opts._cache
                ? true
                : opts._useCache
            this._useFallback =
              opts.useFallback === undefined ? true : opts.useFallback

            this._setTimeout = opts._setTimeout

            debug('init done, %j', this)
          }

          /*
 * Get the index object initialized
 *
 * @param indexName the name of index
 * @param callback the result callback with one argument (the Index instance)
 */
          AlgoliaSearchCore.prototype.initIndex = function(indexName) {
            return new IndexCore(this, indexName)
          }

          /**
           * Add an extra field to the HTTP request
           *
           * @param name the header field name
           * @param value the header field value
           */
          AlgoliaSearchCore.prototype.setExtraHeader = function(name, value) {
            this.extraHeaders[name.toLowerCase()] = value
          }

          /**
           * Get the value of an extra HTTP header
           *
           * @param name the header field name
           */
          AlgoliaSearchCore.prototype.getExtraHeader = function(name) {
            return this.extraHeaders[name.toLowerCase()]
          }

          /**
           * Remove an extra field from the HTTP request
           *
           * @param name the header field name
           */
          AlgoliaSearchCore.prototype.unsetExtraHeader = function(name) {
            delete this.extraHeaders[name.toLowerCase()]
          }

          /**
           * Augment sent x-algolia-agent with more data, each agent part
           * is automatically separated from the others by a semicolon;
           *
           * @param algoliaAgent the agent to add
           */
          AlgoliaSearchCore.prototype.addAlgoliaAgent = function(algoliaAgent) {
            if (this._ua.indexOf(';' + algoliaAgent) === -1) {
              this._ua += ';' + algoliaAgent
            }
          }

          /*
 * Wrapper that try all hosts to maximize the quality of service
 */
          AlgoliaSearchCore.prototype._jsonRequest = function(initialOpts) {
            this._checkAppIdData()

            var requestDebug = __webpack_require__(
              './node_modules/algoliasearch/node_modules/debug/src/browser.js'
            )('algoliasearch:' + initialOpts.url)

            var body
            var additionalUA = initialOpts.additionalUA || ''
            var cache = initialOpts.cache
            var client = this
            var tries = 0
            var usingFallback = false
            var hasFallback =
              client._useFallback &&
              client._request.fallback &&
              initialOpts.fallback
            var headers

            if (
              this.apiKey.length > MAX_API_KEY_LENGTH &&
              initialOpts.body !== undefined &&
              (initialOpts.body.params !== undefined || // index.search()
                initialOpts.body.requests !== undefined) // client.search()
            ) {
              initialOpts.body.apiKey = this.apiKey
              headers = this._computeRequestHeaders({
                additionalUA: additionalUA,
                withApiKey: false,
                headers: initialOpts.headers
              })
            } else {
              headers = this._computeRequestHeaders({
                additionalUA: additionalUA,
                headers: initialOpts.headers
              })
            }

            if (initialOpts.body !== undefined) {
              body = safeJSONStringify(initialOpts.body)
            }

            requestDebug('request start')
            var debugData = []

            function doRequest(requester, reqOpts) {
              client._checkAppIdData()

              var startTime = new Date()
              var cacheID

              if (client._useCache) {
                cacheID = initialOpts.url
              }

              // as we sometime use POST requests to pass parameters (like query='aa'),
              // the cacheID must also include the body to be different between calls
              if (client._useCache && body) {
                cacheID += '_body_' + reqOpts.body
              }

              // handle cache existence
              if (client._useCache && cache && cache[cacheID] !== undefined) {
                requestDebug('serving response from cache')
                return client._promise.resolve(JSON.parse(cache[cacheID]))
              }

              // if we reached max tries
              if (tries >= client.hosts[initialOpts.hostType].length) {
                if (!hasFallback || usingFallback) {
                  requestDebug('could not get any response')
                  // then stop
                  return client._promise.reject(
                    new errors.AlgoliaSearchError(
                      'Cannot connect to the AlgoliaSearch API.' +
                        ' Send an email to support@algolia.com to report and resolve the issue.' +
                        ' Application id was: ' +
                        client.applicationID,
                      { debugData: debugData }
                    )
                  )
                }

                requestDebug('switching to fallback')

                // let's try the fallback starting from here
                tries = 0

                // method, url and body are fallback dependent
                reqOpts.method = initialOpts.fallback.method
                reqOpts.url = initialOpts.fallback.url
                reqOpts.jsonBody = initialOpts.fallback.body
                if (reqOpts.jsonBody) {
                  reqOpts.body = safeJSONStringify(reqOpts.jsonBody)
                }
                // re-compute headers, they could be omitting the API KEY
                headers = client._computeRequestHeaders({
                  additionalUA: additionalUA,
                  headers: initialOpts.headers
                })

                reqOpts.timeouts = client._getTimeoutsForRequest(
                  initialOpts.hostType
                )
                client._setHostIndexByType(0, initialOpts.hostType)
                usingFallback = true // the current request is now using fallback
                return doRequest(client._request.fallback, reqOpts)
              }

              var currentHost = client._getHostByType(initialOpts.hostType)

              var url = currentHost + reqOpts.url
              var options = {
                body: reqOpts.body,
                jsonBody: reqOpts.jsonBody,
                method: reqOpts.method,
                headers: headers,
                timeouts: reqOpts.timeouts,
                debug: requestDebug
              }

              requestDebug(
                'method: %s, url: %s, headers: %j, timeouts: %d',
                options.method,
                url,
                options.headers,
                options.timeouts
              )

              if (requester === client._request.fallback) {
                requestDebug('using fallback')
              }

              // `requester` is any of this._request or this._request.fallback
              // thus it needs to be called using the client as context
              return requester
                .call(client, url, options)
                .then(success, tryFallback)

              function success(httpResponse) {
                // compute the status of the response,
                //
                // When in browser mode, using XDR or JSONP, we have no statusCode available
                // So we rely on our API response `status` property.
                // But `waitTask` can set a `status` property which is not the statusCode (it's the task status)
                // So we check if there's a `message` along `status` and it means it's an error
                //
                // That's the only case where we have a response.status that's not the http statusCode
                var status =
                  (httpResponse &&
                    httpResponse.body &&
                    httpResponse.body.message &&
                    httpResponse.body.status) ||
                  // this is important to check the request statusCode AFTER the body eventual
                  // statusCode because some implementations (jQuery XDomainRequest transport) may
                  // send statusCode 200 while we had an error
                  httpResponse.statusCode ||
                  // When in browser mode, using XDR or JSONP
                  // we default to success when no error (no response.status && response.message)
                  // If there was a JSON.parse() error then body is null and it fails
                  (httpResponse && httpResponse.body && 200)

                requestDebug(
                  'received response: statusCode: %s, computed statusCode: %d, headers: %j',
                  httpResponse.statusCode,
                  status,
                  httpResponse.headers
                )

                var httpResponseOk = Math.floor(status / 100) === 2

                var endTime = new Date()
                debugData.push({
                  currentHost: currentHost,
                  headers: removeCredentials(headers),
                  content: body || null,
                  contentLength: body !== undefined ? body.length : null,
                  method: reqOpts.method,
                  timeouts: reqOpts.timeouts,
                  url: reqOpts.url,
                  startTime: startTime,
                  endTime: endTime,
                  duration: endTime - startTime,
                  statusCode: status
                })

                if (httpResponseOk) {
                  if (client._useCache && cache) {
                    cache[cacheID] = httpResponse.responseText
                  }

                  return httpResponse.body
                }

                var shouldRetry = Math.floor(status / 100) !== 4

                if (shouldRetry) {
                  tries += 1
                  return retryRequest()
                }

                requestDebug('unrecoverable error')

                // no success and no retry => fail
                var unrecoverableError = new errors.AlgoliaSearchError(
                  httpResponse.body && httpResponse.body.message,
                  { debugData: debugData, statusCode: status }
                )

                return client._promise.reject(unrecoverableError)
              }

              function tryFallback(err) {
                // error cases:
                //  While not in fallback mode:
                //    - CORS not supported
                //    - network error
                //  While in fallback mode:
                //    - timeout
                //    - network error
                //    - badly formatted JSONP (script loaded, did not call our callback)
                //  In both cases:
                //    - uncaught exception occurs (TypeError)
                requestDebug('error: %s, stack: %s', err.message, err.stack)

                var endTime = new Date()
                debugData.push({
                  currentHost: currentHost,
                  headers: removeCredentials(headers),
                  content: body || null,
                  contentLength: body !== undefined ? body.length : null,
                  method: reqOpts.method,
                  timeouts: reqOpts.timeouts,
                  url: reqOpts.url,
                  startTime: startTime,
                  endTime: endTime,
                  duration: endTime - startTime
                })

                if (!(err instanceof errors.AlgoliaSearchError)) {
                  err = new errors.Unknown(err && err.message, err)
                }

                tries += 1

                // stop the request implementation when:
                if (
                  // we did not generate this error,
                  // it comes from a throw in some other piece of code
                  err instanceof errors.Unknown ||
                  // server sent unparsable JSON
                  err instanceof errors.UnparsableJSON ||
                  // max tries and already using fallback or no fallback
                  (tries >= client.hosts[initialOpts.hostType].length &&
                    (usingFallback || !hasFallback))
                ) {
                  // stop request implementation for this command
                  err.debugData = debugData
                  return client._promise.reject(err)
                }

                // When a timeout occured, retry by raising timeout
                if (err instanceof errors.RequestTimeout) {
                  return retryRequestWithHigherTimeout()
                }

                return retryRequest()
              }

              function retryRequest() {
                requestDebug('retrying request')
                client._incrementHostIndex(initialOpts.hostType)
                return doRequest(requester, reqOpts)
              }

              function retryRequestWithHigherTimeout() {
                requestDebug('retrying request with higher timeout')
                client._incrementHostIndex(initialOpts.hostType)
                client._incrementTimeoutMultipler()
                reqOpts.timeouts = client._getTimeoutsForRequest(
                  initialOpts.hostType
                )
                return doRequest(requester, reqOpts)
              }
            }

            var promise = doRequest(client._request, {
              url: initialOpts.url,
              method: initialOpts.method,
              body: body,
              jsonBody: initialOpts.body,
              timeouts: client._getTimeoutsForRequest(initialOpts.hostType)
            })

            // either we have a callback
            // either we are using promises
            if (typeof initialOpts.callback === 'function') {
              promise.then(
                function okCb(content) {
                  exitPromise(function() {
                    initialOpts.callback(null, content)
                  }, client._setTimeout || setTimeout)
                },
                function nookCb(err) {
                  exitPromise(function() {
                    initialOpts.callback(err)
                  }, client._setTimeout || setTimeout)
                }
              )
            } else {
              return promise
            }
          }

          /*
* Transform search param object in query string
* @param {object} args arguments to add to the current query string
* @param {string} params current query string
* @return {string} the final query string
*/
          AlgoliaSearchCore.prototype._getSearchParams = function(
            args,
            params
          ) {
            if (args === undefined || args === null) {
              return params
            }
            for (var key in args) {
              if (
                key !== null &&
                args[key] !== undefined &&
                args.hasOwnProperty(key)
              ) {
                params += params === '' ? '' : '&'
                params +=
                  key +
                  '=' +
                  encodeURIComponent(
                    Object.prototype.toString.call(args[key]) ===
                    '[object Array]'
                      ? safeJSONStringify(args[key])
                      : args[key]
                  )
              }
            }
            return params
          }

          /**
           * Compute the headers for a request
           *
           * @param [string] options.additionalUA semi-colon separated string with other user agents to add
           * @param [boolean=true] options.withApiKey Send the api key as a header
           * @param [Object] options.headers Extra headers to send
           */
          AlgoliaSearchCore.prototype._computeRequestHeaders = function(
            options
          ) {
            var forEach = __webpack_require__('./node_modules/foreach/index.js')

            var ua = options.additionalUA
              ? this._ua + ';' + options.additionalUA
              : this._ua

            var requestHeaders = {
              'x-algolia-agent': ua,
              'x-algolia-application-id': this.applicationID
            }

            // browser will inline headers in the url, node.js will use http headers
            // but in some situations, the API KEY will be too long (big secured API keys)
            // so if the request is a POST and the KEY is very long, we will be asked to not put
            // it into headers but in the JSON body
            if (options.withApiKey !== false) {
              requestHeaders['x-algolia-api-key'] = this.apiKey
            }

            if (this.userToken) {
              requestHeaders['x-algolia-usertoken'] = this.userToken
            }

            if (this.securityTags) {
              requestHeaders['x-algolia-tagfilters'] = this.securityTags
            }

            forEach(this.extraHeaders, function addToRequestHeaders(
              value,
              key
            ) {
              requestHeaders[key] = value
            })

            if (options.headers) {
              forEach(options.headers, function addToRequestHeaders(
                value,
                key
              ) {
                requestHeaders[key] = value
              })
            }

            return requestHeaders
          }

          /**
           * Search through multiple indices at the same time
           * @param  {Object[]}   queries  An array of queries you want to run.
           * @param {string} queries[].indexName The index name you want to target
           * @param {string} [queries[].query] The query to issue on this index. Can also be passed into `params`
           * @param {Object} queries[].params Any search param like hitsPerPage, ..
           * @param  {Function} callback Callback to be called
           * @return {Promise|undefined} Returns a promise if no callback given
           */
          AlgoliaSearchCore.prototype.search = function(
            queries,
            opts,
            callback
          ) {
            var isArray = __webpack_require__(
              './node_modules/algoliasearch/node_modules/isarray/index.js'
            )
            var map = __webpack_require__(
              './node_modules/algoliasearch/src/map.js'
            )

            var usage = 'Usage: client.search(arrayOfQueries[, callback])'

            if (!isArray(queries)) {
              throw new Error(usage)
            }

            if (typeof opts === 'function') {
              callback = opts
              opts = {}
            } else if (opts === undefined) {
              opts = {}
            }

            var client = this

            var postObj = {
              requests: map(queries, function prepareRequest(query) {
                var params = ''

                // allow query.query
                // so we are mimicing the index.search(query, params) method
                // {indexName:, query:, params:}
                if (query.query !== undefined) {
                  params += 'query=' + encodeURIComponent(query.query)
                }

                return {
                  indexName: query.indexName,
                  params: client._getSearchParams(query.params, params)
                }
              })
            }

            var JSONPParams = map(postObj.requests, function prepareJSONPParams(
              request,
              requestId
            ) {
              return (
                requestId +
                '=' +
                encodeURIComponent(
                  '/1/indexes/' +
                    encodeURIComponent(request.indexName) +
                    '?' +
                    request.params
                )
              )
            }).join('&')

            var url = '/1/indexes/*/queries'

            if (opts.strategy !== undefined) {
              url += '?strategy=' + opts.strategy
            }

            return this._jsonRequest({
              cache: this.cache,
              method: 'POST',
              url: url,
              body: postObj,
              hostType: 'read',
              fallback: {
                method: 'GET',
                url: '/1/indexes/*',
                body: {
                  params: JSONPParams
                }
              },
              callback: callback
            })
          }

          /**
           * Set the extra security tagFilters header
           * @param {string|array} tags The list of tags defining the current security filters
           */
          AlgoliaSearchCore.prototype.setSecurityTags = function(tags) {
            if (Object.prototype.toString.call(tags) === '[object Array]') {
              var strTags = []
              for (var i = 0; i < tags.length; ++i) {
                if (
                  Object.prototype.toString.call(tags[i]) === '[object Array]'
                ) {
                  var oredTags = []
                  for (var j = 0; j < tags[i].length; ++j) {
                    oredTags.push(tags[i][j])
                  }
                  strTags.push('(' + oredTags.join(',') + ')')
                } else {
                  strTags.push(tags[i])
                }
              }
              tags = strTags.join(',')
            }

            this.securityTags = tags
          }

          /**
           * Set the extra user token header
           * @param {string} userToken The token identifying a uniq user (used to apply rate limits)
           */
          AlgoliaSearchCore.prototype.setUserToken = function(userToken) {
            this.userToken = userToken
          }

          /**
           * Clear all queries in client's cache
           * @return undefined
           */
          AlgoliaSearchCore.prototype.clearCache = function() {
            this.cache = {}
          }

          /**
           * Set the number of milliseconds a request can take before automatically being terminated.
           * @deprecated
           * @param {Number} milliseconds
           */
          AlgoliaSearchCore.prototype.setRequestTimeout = function(
            milliseconds
          ) {
            if (milliseconds) {
              this._timeouts.connect = this._timeouts.read = this._timeouts.write = milliseconds
            }
          }

          /**
           * Set the three different (connect, read, write) timeouts to be used when requesting
           * @param {Object} timeouts
           */
          AlgoliaSearchCore.prototype.setTimeouts = function(timeouts) {
            this._timeouts = timeouts
          }

          /**
           * Get the three different (connect, read, write) timeouts to be used when requesting
           * @param {Object} timeouts
           */
          AlgoliaSearchCore.prototype.getTimeouts = function() {
            return this._timeouts
          }

          AlgoliaSearchCore.prototype._getAppIdData = function() {
            var data = store.get(this.applicationID)
            if (data !== null) this._cacheAppIdData(data)
            return data
          }

          AlgoliaSearchCore.prototype._setAppIdData = function(data) {
            data.lastChange = new Date().getTime()
            this._cacheAppIdData(data)
            return store.set(this.applicationID, data)
          }

          AlgoliaSearchCore.prototype._checkAppIdData = function() {
            var data = this._getAppIdData()
            var now = new Date().getTime()
            if (data === null || now - data.lastChange > RESET_APP_DATA_TIMER) {
              return this._resetInitialAppIdData(data)
            }

            return data
          }

          AlgoliaSearchCore.prototype._resetInitialAppIdData = function(data) {
            var newData = data || {}
            newData.hostIndexes = { read: 0, write: 0 }
            newData.timeoutMultiplier = 1
            newData.shuffleResult = newData.shuffleResult || shuffle([1, 2, 3])
            return this._setAppIdData(newData)
          }

          AlgoliaSearchCore.prototype._cacheAppIdData = function(data) {
            this._hostIndexes = data.hostIndexes
            this._timeoutMultiplier = data.timeoutMultiplier
            this._shuffleResult = data.shuffleResult
          }

          AlgoliaSearchCore.prototype._partialAppIdDataUpdate = function(
            newData
          ) {
            var foreach = __webpack_require__('./node_modules/foreach/index.js')
            var currentData = this._getAppIdData()
            foreach(newData, function(value, key) {
              currentData[key] = value
            })

            return this._setAppIdData(currentData)
          }

          AlgoliaSearchCore.prototype._getHostByType = function(hostType) {
            return this.hosts[hostType][this._getHostIndexByType(hostType)]
          }

          AlgoliaSearchCore.prototype._getTimeoutMultiplier = function() {
            return this._timeoutMultiplier
          }

          AlgoliaSearchCore.prototype._getHostIndexByType = function(hostType) {
            return this._hostIndexes[hostType]
          }

          AlgoliaSearchCore.prototype._setHostIndexByType = function(
            hostIndex,
            hostType
          ) {
            var clone = __webpack_require__(
              './node_modules/algoliasearch/src/clone.js'
            )
            var newHostIndexes = clone(this._hostIndexes)
            newHostIndexes[hostType] = hostIndex
            this._partialAppIdDataUpdate({ hostIndexes: newHostIndexes })
            return hostIndex
          }

          AlgoliaSearchCore.prototype._incrementHostIndex = function(hostType) {
            return this._setHostIndexByType(
              (this._getHostIndexByType(hostType) + 1) %
                this.hosts[hostType].length,
              hostType
            )
          }

          AlgoliaSearchCore.prototype._incrementTimeoutMultipler = function() {
            var timeoutMultiplier = Math.max(this._timeoutMultiplier + 1, 4)
            return this._partialAppIdDataUpdate({
              timeoutMultiplier: timeoutMultiplier
            })
          }

          AlgoliaSearchCore.prototype._getTimeoutsForRequest = function(
            hostType
          ) {
            return {
              connect: this._timeouts.connect * this._timeoutMultiplier,
              complete: this._timeouts[hostType] * this._timeoutMultiplier
            }
          }

          function prepareHost(protocol) {
            return function prepare(host) {
              return protocol + '//' + host.toLowerCase()
            }
          }

          // Prototype.js < 1.7, a widely used library, defines a weird
          // Array.prototype.toJSON function that will fail to stringify our content
          // appropriately
          // refs:
          //   - https://groups.google.com/forum/#!topic/prototype-core/E-SAVvV_V9Q
          //   - https://github.com/sstephenson/prototype/commit/038a2985a70593c1a86c230fadbdfe2e4898a48c
          //   - http://stackoverflow.com/a/3148441/147079
          function safeJSONStringify(obj) {
            /* eslint no-extend-native:0 */

            if (Array.prototype.toJSON === undefined) {
              return JSON.stringify(obj)
            }

            var toJSON = Array.prototype.toJSON
            delete Array.prototype.toJSON
            var out = JSON.stringify(obj)
            Array.prototype.toJSON = toJSON

            return out
          }

          function shuffle(array) {
            var currentIndex = array.length
            var temporaryValue
            var randomIndex

            // While there remain elements to shuffle...
            while (currentIndex !== 0) {
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex)
              currentIndex -= 1

              // And swap it with the current element.
              temporaryValue = array[currentIndex]
              array[currentIndex] = array[randomIndex]
              array[randomIndex] = temporaryValue
            }

            return array
          }

          function removeCredentials(headers) {
            var newHeaders = {}

            for (var headerName in headers) {
              if (Object.prototype.hasOwnProperty.call(headers, headerName)) {
                var value

                if (
                  headerName === 'x-algolia-api-key' ||
                  headerName === 'x-algolia-application-id'
                ) {
                  value = '**hidden for security purposes**'
                } else {
                  value = headers[headerName]
                }

                newHeaders[headerName] = value
              }
            }

            return newHeaders
          }

          /* WEBPACK VAR INJECTION */
        }.call(
          exports,
          __webpack_require__(
            './node_modules/node-libs-browser/node_modules/process/browser.js'
          )
        ))

        /***/
      },

      /***/ './node_modules/algoliasearch/src/Index.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        var inherits = __webpack_require__(
          './node_modules/inherits/inherits_browser.js'
        )
        var IndexCore = __webpack_require__(
          './node_modules/algoliasearch/src/IndexCore.js'
        )
        var deprecate = __webpack_require__(
          './node_modules/algoliasearch/src/deprecate.js'
        )
        var deprecatedMessage = __webpack_require__(
          './node_modules/algoliasearch/src/deprecatedMessage.js'
        )
        var exitPromise = __webpack_require__(
          './node_modules/algoliasearch/src/exitPromise.js'
        )
        var errors = __webpack_require__(
          './node_modules/algoliasearch/src/errors.js'
        )

        var deprecateForwardToSlaves = deprecate(function() {},
        deprecatedMessage('forwardToSlaves', 'forwardToReplicas'))

        module.exports = Index

        function Index() {
          IndexCore.apply(this, arguments)
        }

        inherits(Index, IndexCore)

        /*
* Add an object in this index
*
* @param content contains the javascript object to add inside the index
* @param objectID (optional) an objectID you want to attribute to this object
* (if the attribute already exist the old object will be overwrite)
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that contains 3 elements: createAt, taskId and objectID
*/
        Index.prototype.addObject = function(content, objectID, callback) {
          var indexObj = this

          if (arguments.length === 1 || typeof objectID === 'function') {
            callback = objectID
            objectID = undefined
          }

          return this.as._jsonRequest({
            method:
              objectID !== undefined
                ? 'PUT' // update or create
                : 'POST', // create (API generates an objectID)
            url:
              '/1/indexes/' +
              encodeURIComponent(indexObj.indexName) + // create
              (objectID !== undefined
                ? '/' + encodeURIComponent(objectID)
                : ''), // update or create
            body: content,
            hostType: 'write',
            callback: callback
          })
        }

        /*
* Add several objects
*
* @param objects contains an array of objects to add
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that updateAt and taskID
*/
        Index.prototype.addObjects = function(objects, callback) {
          var isArray = __webpack_require__(
            './node_modules/algoliasearch/node_modules/isarray/index.js'
          )
          var usage = 'Usage: index.addObjects(arrayOfObjects[, callback])'

          if (!isArray(objects)) {
            throw new Error(usage)
          }

          var indexObj = this
          var postObj = {
            requests: []
          }
          for (var i = 0; i < objects.length; ++i) {
            var request = {
              action: 'addObject',
              body: objects[i]
            }
            postObj.requests.push(request)
          }
          return this.as._jsonRequest({
            method: 'POST',
            url:
              '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/batch',
            body: postObj,
            hostType: 'write',
            callback: callback
          })
        }

        /*
* Update partially an object (only update attributes passed in argument)
*
* @param partialObject contains the javascript attributes to override, the
*  object must contains an objectID attribute
* @param createIfNotExists (optional) if false, avoid an automatic creation of the object
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that contains 3 elements: createAt, taskId and objectID
*/
        Index.prototype.partialUpdateObject = function(
          partialObject,
          createIfNotExists,
          callback
        ) {
          if (
            arguments.length === 1 ||
            typeof createIfNotExists === 'function'
          ) {
            callback = createIfNotExists
            createIfNotExists = undefined
          }

          var indexObj = this
          var url =
            '/1/indexes/' +
            encodeURIComponent(indexObj.indexName) +
            '/' +
            encodeURIComponent(partialObject.objectID) +
            '/partial'
          if (createIfNotExists === false) {
            url += '?createIfNotExists=false'
          }

          return this.as._jsonRequest({
            method: 'POST',
            url: url,
            body: partialObject,
            hostType: 'write',
            callback: callback
          })
        }

        /*
* Partially Override the content of several objects
*
* @param objects contains an array of objects to update (each object must contains a objectID attribute)
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that updateAt and taskID
*/
        Index.prototype.partialUpdateObjects = function(
          objects,
          createIfNotExists,
          callback
        ) {
          if (
            arguments.length === 1 ||
            typeof createIfNotExists === 'function'
          ) {
            callback = createIfNotExists
            createIfNotExists = true
          }

          var isArray = __webpack_require__(
            './node_modules/algoliasearch/node_modules/isarray/index.js'
          )
          var usage =
            'Usage: index.partialUpdateObjects(arrayOfObjects[, callback])'

          if (!isArray(objects)) {
            throw new Error(usage)
          }

          var indexObj = this
          var postObj = {
            requests: []
          }
          for (var i = 0; i < objects.length; ++i) {
            var request = {
              action:
                createIfNotExists === true
                  ? 'partialUpdateObject'
                  : 'partialUpdateObjectNoCreate',
              objectID: objects[i].objectID,
              body: objects[i]
            }
            postObj.requests.push(request)
          }
          return this.as._jsonRequest({
            method: 'POST',
            url:
              '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/batch',
            body: postObj,
            hostType: 'write',
            callback: callback
          })
        }

        /*
* Override the content of object
*
* @param object contains the javascript object to save, the object must contains an objectID attribute
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that updateAt and taskID
*/
        Index.prototype.saveObject = function(object, callback) {
          var indexObj = this
          return this.as._jsonRequest({
            method: 'PUT',
            url:
              '/1/indexes/' +
              encodeURIComponent(indexObj.indexName) +
              '/' +
              encodeURIComponent(object.objectID),
            body: object,
            hostType: 'write',
            callback: callback
          })
        }

        /*
* Override the content of several objects
*
* @param objects contains an array of objects to update (each object must contains a objectID attribute)
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that updateAt and taskID
*/
        Index.prototype.saveObjects = function(objects, callback) {
          var isArray = __webpack_require__(
            './node_modules/algoliasearch/node_modules/isarray/index.js'
          )
          var usage = 'Usage: index.saveObjects(arrayOfObjects[, callback])'

          if (!isArray(objects)) {
            throw new Error(usage)
          }

          var indexObj = this
          var postObj = {
            requests: []
          }
          for (var i = 0; i < objects.length; ++i) {
            var request = {
              action: 'updateObject',
              objectID: objects[i].objectID,
              body: objects[i]
            }
            postObj.requests.push(request)
          }
          return this.as._jsonRequest({
            method: 'POST',
            url:
              '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/batch',
            body: postObj,
            hostType: 'write',
            callback: callback
          })
        }

        /*
* Delete an object from the index
*
* @param objectID the unique identifier of object to delete
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that contains 3 elements: createAt, taskId and objectID
*/
        Index.prototype.deleteObject = function(objectID, callback) {
          if (
            typeof objectID === 'function' ||
            (typeof objectID !== 'string' && typeof objectID !== 'number')
          ) {
            var err = new errors.AlgoliaSearchError(
              'Cannot delete an object without an objectID'
            )
            callback = objectID
            if (typeof callback === 'function') {
              return callback(err)
            }

            return this.as._promise.reject(err)
          }

          var indexObj = this
          return this.as._jsonRequest({
            method: 'DELETE',
            url:
              '/1/indexes/' +
              encodeURIComponent(indexObj.indexName) +
              '/' +
              encodeURIComponent(objectID),
            hostType: 'write',
            callback: callback
          })
        }

        /*
* Delete several objects from an index
*
* @param objectIDs contains an array of objectID to delete
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that contains 3 elements: createAt, taskId and objectID
*/
        Index.prototype.deleteObjects = function(objectIDs, callback) {
          var isArray = __webpack_require__(
            './node_modules/algoliasearch/node_modules/isarray/index.js'
          )
          var map = __webpack_require__(
            './node_modules/algoliasearch/src/map.js'
          )

          var usage = 'Usage: index.deleteObjects(arrayOfObjectIDs[, callback])'

          if (!isArray(objectIDs)) {
            throw new Error(usage)
          }

          var indexObj = this
          var postObj = {
            requests: map(objectIDs, function prepareRequest(objectID) {
              return {
                action: 'deleteObject',
                objectID: objectID,
                body: {
                  objectID: objectID
                }
              }
            })
          }

          return this.as._jsonRequest({
            method: 'POST',
            url:
              '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/batch',
            body: postObj,
            hostType: 'write',
            callback: callback
          })
        }

        /*
* Delete all objects matching a query
*
* @param query the query string
* @param params the optional query parameters
* @param callback (optional) the result callback called with one argument
*  error: null or Error('message')
* @deprecated see index.deleteBy
*/
        Index.prototype.deleteByQuery = deprecate(function(
          query,
          params,
          callback
        ) {
          var clone = __webpack_require__(
            './node_modules/algoliasearch/src/clone.js'
          )
          var map = __webpack_require__(
            './node_modules/algoliasearch/src/map.js'
          )

          var indexObj = this
          var client = indexObj.as

          if (arguments.length === 1 || typeof params === 'function') {
            callback = params
            params = {}
          } else {
            params = clone(params)
          }

          params.attributesToRetrieve = 'objectID'
          params.hitsPerPage = 1000
          params.distinct = false

          // when deleting, we should never use cache to get the
          // search results
          this.clearCache()

          // there's a problem in how we use the promise chain,
          // see how waitTask is done
          var promise = this.search(query, params).then(stopOrDelete)

          function stopOrDelete(searchContent) {
            // stop here
            if (searchContent.nbHits === 0) {
              // return indexObj.as._request.resolve();
              return searchContent
            }

            // continue and do a recursive call
            var objectIDs = map(searchContent.hits, function getObjectID(
              object
            ) {
              return object.objectID
            })

            return indexObj
              .deleteObjects(objectIDs)
              .then(waitTask)
              .then(doDeleteByQuery)
          }

          function waitTask(deleteObjectsContent) {
            return indexObj.waitTask(deleteObjectsContent.taskID)
          }

          function doDeleteByQuery() {
            return indexObj.deleteByQuery(query, params)
          }

          if (!callback) {
            return promise
          }

          promise.then(success, failure)

          function success() {
            exitPromise(function exit() {
              callback(null)
            }, client._setTimeout || setTimeout)
          }

          function failure(err) {
            exitPromise(function exit() {
              callback(err)
            }, client._setTimeout || setTimeout)
          }
        },
        deprecatedMessage('index.deleteByQuery()', 'index.deleteBy()'))

        /**
         * Delete all objects matching a query
         *
         * the query parameters that can be used are:
         * - filters (numeric, facet, tag)
         * - geo
         *
         * you can not send an empty query or filters
         *
         * @param params the optional query parameters
         * @param callback (optional) the result callback called with one argument
         *  error: null or Error('message')
         */
        Index.prototype.deleteBy = function(params, callback) {
          var indexObj = this
          return this.as._jsonRequest({
            method: 'POST',
            url:
              '/1/indexes/' +
              encodeURIComponent(indexObj.indexName) +
              '/deleteByQuery',
            body: { params: indexObj.as._getSearchParams(params, '') },
            hostType: 'write',
            callback: callback
          })
        }

        /*
* Browse all content from an index using events. Basically this will do
* .browse() -> .browseFrom -> .browseFrom -> .. until all the results are returned
*
* @param {string} query - The full text query
* @param {Object} [queryParameters] - Any search query parameter
* @return {EventEmitter}
* @example
* var browser = index.browseAll('cool songs', {
*   tagFilters: 'public,comments',
*   hitsPerPage: 500
* });
*
* browser.on('result', function resultCallback(content) {
*   console.log(content.hits);
* });
*
* // if any error occurs, you get it
* browser.on('error', function(err) {
*   throw err;
* });
*
* // when you have browsed the whole index, you get this event
* browser.on('end', function() {
*   console.log('finished');
* });
*
* // at any point if you want to stop the browsing process, you can stop it manually
* // otherwise it will go on and on
* browser.stop();
*
* @see {@link https://www.algolia.com/doc/rest_api#Browse|Algolia REST API Documentation}
*/
        Index.prototype.browseAll = function(query, queryParameters) {
          if (typeof query === 'object') {
            queryParameters = query
            query = undefined
          }

          var merge = __webpack_require__(
            './node_modules/algoliasearch/src/merge.js'
          )

          var IndexBrowser = __webpack_require__(
            './node_modules/algoliasearch/src/IndexBrowser.js'
          )

          var browser = new IndexBrowser()
          var client = this.as
          var index = this
          var params = client._getSearchParams(
            merge({}, queryParameters || {}, {
              query: query
            }),
            ''
          )

          // start browsing
          browseLoop()

          function browseLoop(cursor) {
            if (browser._stopped) {
              return
            }

            var body

            if (cursor !== undefined) {
              body = {
                cursor: cursor
              }
            } else {
              body = {
                params: params
              }
            }

            client._jsonRequest({
              method: 'POST',
              url:
                '/1/indexes/' + encodeURIComponent(index.indexName) + '/browse',
              hostType: 'read',
              body: body,
              callback: browseCallback
            })
          }

          function browseCallback(err, content) {
            if (browser._stopped) {
              return
            }

            if (err) {
              browser._error(err)
              return
            }

            browser._result(content)

            // no cursor means we are finished browsing
            if (content.cursor === undefined) {
              browser._end()
              return
            }

            browseLoop(content.cursor)
          }

          return browser
        }

        /*
* Get a Typeahead.js adapter
* @param searchParams contains an object with query parameters (see search for details)
*/
        Index.prototype.ttAdapter = deprecate(function(params) {
          var self = this
          return function ttAdapter(query, syncCb, asyncCb) {
            var cb

            if (typeof asyncCb === 'function') {
              // typeahead 0.11
              cb = asyncCb
            } else {
              // pre typeahead 0.11
              cb = syncCb
            }

            self.search(query, params, function searchDone(err, content) {
              if (err) {
                cb(err)
                return
              }

              cb(content.hits)
            })
          }
        }, 'ttAdapter is not necessary anymore and will be removed in the next version,\n' +
          'have a look at autocomplete.js (https://github.com/algolia/autocomplete.js)')

        /*
* Wait the publication of a task on the server.
* All server task are asynchronous and you can check with this method that the task is published.
*
* @param taskID the id of the task returned by server
* @param callback the result callback with with two arguments:
*  error: null or Error('message')
*  content: the server answer that contains the list of results
*/
        Index.prototype.waitTask = function(taskID, callback) {
          // wait minimum 100ms before retrying
          var baseDelay = 100
          // wait maximum 5s before retrying
          var maxDelay = 5000
          var loop = 0

          // waitTask() must be handled differently from other methods,
          // it's a recursive method using a timeout
          var indexObj = this
          var client = indexObj.as

          var promise = retryLoop()

          function retryLoop() {
            return client
              ._jsonRequest({
                method: 'GET',
                hostType: 'read',
                url:
                  '/1/indexes/' +
                  encodeURIComponent(indexObj.indexName) +
                  '/task/' +
                  taskID
              })
              .then(function success(content) {
                loop++
                var delay = baseDelay * loop * loop
                if (delay > maxDelay) {
                  delay = maxDelay
                }

                if (content.status !== 'published') {
                  return client._promise.delay(delay).then(retryLoop)
                }

                return content
              })
          }

          if (!callback) {
            return promise
          }

          promise.then(successCb, failureCb)

          function successCb(content) {
            exitPromise(function exit() {
              callback(null, content)
            }, client._setTimeout || setTimeout)
          }

          function failureCb(err) {
            exitPromise(function exit() {
              callback(err)
            }, client._setTimeout || setTimeout)
          }
        }

        /*
* This function deletes the index content. Settings and index specific API keys are kept untouched.
*
* @param callback (optional) the result callback called with two arguments
*  error: null or Error('message')
*  content: the settings object or the error message if a failure occured
*/
        Index.prototype.clearIndex = function(callback) {
          var indexObj = this
          return this.as._jsonRequest({
            method: 'POST',
            url:
              '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/clear',
            hostType: 'write',
            callback: callback
          })
        }

        /*
* Get settings of this index
*
* @param opts an object of options to add
* @param opts.advanced get more settings like nbShards (useful for Enterprise)
* @param callback (optional) the result callback called with two arguments
*  error: null or Error('message')
*  content: the settings object or the error message if a failure occurred
*/
        Index.prototype.getSettings = function(opts, callback) {
          if (arguments.length === 1 && typeof opts === 'function') {
            callback = opts
            opts = {}
          }
          opts = opts || {}

          var indexName = encodeURIComponent(this.indexName)
          return this.as._jsonRequest({
            method: 'GET',
            url:
              '/1/indexes/' +
              indexName +
              '/settings?getVersion=2' +
              (opts.advanced ? '&advanced=' + opts.advanced : ''),
            hostType: 'read',
            callback: callback
          })
        }

        Index.prototype.searchSynonyms = function(params, callback) {
          if (typeof params === 'function') {
            callback = params
            params = {}
          } else if (params === undefined) {
            params = {}
          }

          return this.as._jsonRequest({
            method: 'POST',
            url:
              '/1/indexes/' +
              encodeURIComponent(this.indexName) +
              '/synonyms/search',
            body: params,
            hostType: 'read',
            callback: callback
          })
        }

        function exportData(method, _hitsPerPage, callback) {
          function search(page, _previous) {
            var options = {
              page: page || 0,
              hitsPerPage: _hitsPerPage || 100
            }
            var previous = _previous || []

            return method(options).then(function(result) {
              var hits = result.hits
              var nbHits = result.nbHits
              var current = hits.map(function(s) {
                delete s._highlightResult
                return s
              })
              var synonyms = previous.concat(current)
              if (synonyms.length < nbHits) {
                return search(options.page + 1, synonyms)
              }
              return synonyms
            })
          }
          return search().then(function(data) {
            if (typeof callback === 'function') {
              callback(data)
              return undefined
            }
            return data
          })
        }

        /**
         * Retrieve all the synonyms in an index
         * @param [number=100] hitsPerPage The amount of synonyms to retrieve per batch
         * @param [function] callback will be called after all synonyms are retrieved
         */
        Index.prototype.exportSynonyms = function(hitsPerPage, callback) {
          return exportData(
            this.searchSynonyms.bind(this),
            hitsPerPage,
            callback
          )
        }

        Index.prototype.saveSynonym = function(synonym, opts, callback) {
          if (typeof opts === 'function') {
            callback = opts
            opts = {}
          } else if (opts === undefined) {
            opts = {}
          }

          if (opts.forwardToSlaves !== undefined) deprecateForwardToSlaves()
          var forwardToReplicas =
            opts.forwardToSlaves || opts.forwardToReplicas ? 'true' : 'false'

          return this.as._jsonRequest({
            method: 'PUT',
            url:
              '/1/indexes/' +
              encodeURIComponent(this.indexName) +
              '/synonyms/' +
              encodeURIComponent(synonym.objectID) +
              '?forwardToReplicas=' +
              forwardToReplicas,
            body: synonym,
            hostType: 'write',
            callback: callback
          })
        }

        Index.prototype.getSynonym = function(objectID, callback) {
          return this.as._jsonRequest({
            method: 'GET',
            url:
              '/1/indexes/' +
              encodeURIComponent(this.indexName) +
              '/synonyms/' +
              encodeURIComponent(objectID),
            hostType: 'read',
            callback: callback
          })
        }

        Index.prototype.deleteSynonym = function(objectID, opts, callback) {
          if (typeof opts === 'function') {
            callback = opts
            opts = {}
          } else if (opts === undefined) {
            opts = {}
          }

          if (opts.forwardToSlaves !== undefined) deprecateForwardToSlaves()
          var forwardToReplicas =
            opts.forwardToSlaves || opts.forwardToReplicas ? 'true' : 'false'

          return this.as._jsonRequest({
            method: 'DELETE',
            url:
              '/1/indexes/' +
              encodeURIComponent(this.indexName) +
              '/synonyms/' +
              encodeURIComponent(objectID) +
              '?forwardToReplicas=' +
              forwardToReplicas,
            hostType: 'write',
            callback: callback
          })
        }

        Index.prototype.clearSynonyms = function(opts, callback) {
          if (typeof opts === 'function') {
            callback = opts
            opts = {}
          } else if (opts === undefined) {
            opts = {}
          }

          if (opts.forwardToSlaves !== undefined) deprecateForwardToSlaves()
          var forwardToReplicas =
            opts.forwardToSlaves || opts.forwardToReplicas ? 'true' : 'false'

          return this.as._jsonRequest({
            method: 'POST',
            url:
              '/1/indexes/' +
              encodeURIComponent(this.indexName) +
              '/synonyms/clear' +
              '?forwardToReplicas=' +
              forwardToReplicas,
            hostType: 'write',
            callback: callback
          })
        }

        Index.prototype.batchSynonyms = function(synonyms, opts, callback) {
          if (typeof opts === 'function') {
            callback = opts
            opts = {}
          } else if (opts === undefined) {
            opts = {}
          }

          if (opts.forwardToSlaves !== undefined) deprecateForwardToSlaves()
          var forwardToReplicas =
            opts.forwardToSlaves || opts.forwardToReplicas ? 'true' : 'false'

          return this.as._jsonRequest({
            method: 'POST',
            url:
              '/1/indexes/' +
              encodeURIComponent(this.indexName) +
              '/synonyms/batch' +
              '?forwardToReplicas=' +
              forwardToReplicas +
              '&replaceExistingSynonyms=' +
              (opts.replaceExistingSynonyms ? 'true' : 'false'),
            hostType: 'write',
            body: synonyms,
            callback: callback
          })
        }

        Index.prototype.searchRules = function(params, callback) {
          if (typeof params === 'function') {
            callback = params
            params = {}
          } else if (params === undefined) {
            params = {}
          }

          return this.as._jsonRequest({
            method: 'POST',
            url:
              '/1/indexes/' +
              encodeURIComponent(this.indexName) +
              '/rules/search',
            body: params,
            hostType: 'read',
            callback: callback
          })
        }
        /**
         * Retrieve all the query rules in an index
         * @param [number=100] hitsPerPage The amount of query rules to retrieve per batch
         * @param [function] callback will be called after all query rules are retrieved
         */
        Index.prototype.exportRules = function(hitsPerPage, callback) {
          return exportData(this.searchRules.bind(this), hitsPerPage, callback)
        }

        Index.prototype.saveRule = function(rule, opts, callback) {
          if (typeof opts === 'function') {
            callback = opts
            opts = {}
          } else if (opts === undefined) {
            opts = {}
          }

          var forwardToReplicas =
            opts.forwardToReplicas === true ? 'true' : 'false'

          return this.as._jsonRequest({
            method: 'PUT',
            url:
              '/1/indexes/' +
              encodeURIComponent(this.indexName) +
              '/rules/' +
              encodeURIComponent(rule.objectID) +
              '?forwardToReplicas=' +
              forwardToReplicas,
            body: rule,
            hostType: 'write',
            callback: callback
          })
        }

        Index.prototype.getRule = function(objectID, callback) {
          return this.as._jsonRequest({
            method: 'GET',
            url:
              '/1/indexes/' +
              encodeURIComponent(this.indexName) +
              '/rules/' +
              encodeURIComponent(objectID),
            hostType: 'read',
            callback: callback
          })
        }

        Index.prototype.deleteRule = function(objectID, opts, callback) {
          if (typeof opts === 'function') {
            callback = opts
            opts = {}
          } else if (opts === undefined) {
            opts = {}
          }

          var forwardToReplicas =
            opts.forwardToReplicas === true ? 'true' : 'false'

          return this.as._jsonRequest({
            method: 'DELETE',
            url:
              '/1/indexes/' +
              encodeURIComponent(this.indexName) +
              '/rules/' +
              encodeURIComponent(objectID) +
              '?forwardToReplicas=' +
              forwardToReplicas,
            hostType: 'write',
            callback: callback
          })
        }

        Index.prototype.clearRules = function(opts, callback) {
          if (typeof opts === 'function') {
            callback = opts
            opts = {}
          } else if (opts === undefined) {
            opts = {}
          }

          var forwardToReplicas =
            opts.forwardToReplicas === true ? 'true' : 'false'

          return this.as._jsonRequest({
            method: 'POST',
            url:
              '/1/indexes/' +
              encodeURIComponent(this.indexName) +
              '/rules/clear' +
              '?forwardToReplicas=' +
              forwardToReplicas,
            hostType: 'write',
            callback: callback
          })
        }

        Index.prototype.batchRules = function(rules, opts, callback) {
          if (typeof opts === 'function') {
            callback = opts
            opts = {}
          } else if (opts === undefined) {
            opts = {}
          }

          var forwardToReplicas =
            opts.forwardToReplicas === true ? 'true' : 'false'

          return this.as._jsonRequest({
            method: 'POST',
            url:
              '/1/indexes/' +
              encodeURIComponent(this.indexName) +
              '/rules/batch' +
              '?forwardToReplicas=' +
              forwardToReplicas +
              '&clearExistingRules=' +
              (opts.clearExistingRules === true ? 'true' : 'false'),
            hostType: 'write',
            body: rules,
            callback: callback
          })
        }

        /*
* Set settings for this index
*
* @param settigns the settings object that can contains :
* - minWordSizefor1Typo: (integer) the minimum number of characters to accept one typo (default = 3).
* - minWordSizefor2Typos: (integer) the minimum number of characters to accept two typos (default = 7).
* - hitsPerPage: (integer) the number of hits per page (default = 10).
* - attributesToRetrieve: (array of strings) default list of attributes to retrieve in objects.
*   If set to null, all attributes are retrieved.
* - attributesToHighlight: (array of strings) default list of attributes to highlight.
*   If set to null, all indexed attributes are highlighted.
* - attributesToSnippet**: (array of strings) default list of attributes to snippet alongside the number
* of words to return (syntax is attributeName:nbWords).
*   By default no snippet is computed. If set to null, no snippet is computed.
* - attributesToIndex: (array of strings) the list of fields you want to index.
*   If set to null, all textual and numerical attributes of your objects are indexed,
*   but you should update it to get optimal results.
*   This parameter has two important uses:
*     - Limit the attributes to index: For example if you store a binary image in base64,
*     you want to store it and be able to
*       retrieve it but you don't want to search in the base64 string.
*     - Control part of the ranking*: (see the ranking parameter for full explanation)
*     Matches in attributes at the beginning of
*       the list will be considered more important than matches in attributes further down the list.
*       In one attribute, matching text at the beginning of the attribute will be
*       considered more important than text after, you can disable
*       this behavior if you add your attribute inside `unordered(AttributeName)`,
*       for example attributesToIndex: ["title", "unordered(text)"].
* - attributesForFaceting: (array of strings) The list of fields you want to use for faceting.
*   All strings in the attribute selected for faceting are extracted and added as a facet.
*   If set to null, no attribute is used for faceting.
* - attributeForDistinct: (string) The attribute name used for the Distinct feature.
* This feature is similar to the SQL "distinct" keyword: when enabled
*   in query with the distinct=1 parameter, all hits containing a duplicate
*   value for this attribute are removed from results.
*   For example, if the chosen attribute is show_name and several hits have
*   the same value for show_name, then only the best one is kept and others are removed.
* - ranking: (array of strings) controls the way results are sorted.
*   We have six available criteria:
*    - typo: sort according to number of typos,
*    - geo: sort according to decreassing distance when performing a geo-location based search,
*    - proximity: sort according to the proximity of query words in hits,
*    - attribute: sort according to the order of attributes defined by attributesToIndex,
*    - exact:
*        - if the user query contains one word: sort objects having an attribute
*        that is exactly the query word before others.
*          For example if you search for the "V" TV show, you want to find it
*          with the "V" query and avoid to have all popular TV
*          show starting by the v letter before it.
*        - if the user query contains multiple words: sort according to the
*        number of words that matched exactly (and not as a prefix).
*    - custom: sort according to a user defined formula set in **customRanking** attribute.
*   The standard order is ["typo", "geo", "proximity", "attribute", "exact", "custom"]
* - customRanking: (array of strings) lets you specify part of the ranking.
*   The syntax of this condition is an array of strings containing attributes
*   prefixed by asc (ascending order) or desc (descending order) operator.
*   For example `"customRanking" => ["desc(population)", "asc(name)"]`
* - queryType: Select how the query words are interpreted, it can be one of the following value:
*   - prefixAll: all query words are interpreted as prefixes,
*   - prefixLast: only the last word is interpreted as a prefix (default behavior),
*   - prefixNone: no query word is interpreted as a prefix. This option is not recommended.
* - highlightPreTag: (string) Specify the string that is inserted before
* the highlighted parts in the query result (default to "<em>").
* - highlightPostTag: (string) Specify the string that is inserted after
* the highlighted parts in the query result (default to "</em>").
* - optionalWords: (array of strings) Specify a list of words that should
* be considered as optional when found in the query.
* @param callback (optional) the result callback called with two arguments
*  error: null or Error('message')
*  content: the server answer or the error message if a failure occured
*/
        Index.prototype.setSettings = function(settings, opts, callback) {
          if (arguments.length === 1 || typeof opts === 'function') {
            callback = opts
            opts = {}
          }

          if (opts.forwardToSlaves !== undefined) deprecateForwardToSlaves()
          var forwardToReplicas =
            opts.forwardToSlaves || opts.forwardToReplicas ? 'true' : 'false'

          var indexObj = this
          return this.as._jsonRequest({
            method: 'PUT',
            url:
              '/1/indexes/' +
              encodeURIComponent(indexObj.indexName) +
              '/settings?forwardToReplicas=' +
              forwardToReplicas,
            hostType: 'write',
            body: settings,
            callback: callback
          })
        }

        /*
 @deprecated see index.listApiKeys
 */
        Index.prototype.listUserKeys = deprecate(function(callback) {
          return this.listApiKeys(callback)
        }, deprecatedMessage('index.listUserKeys()', 'index.listApiKeys()'))

        /*
* List all existing API keys to this index
*
* @param callback the result callback called with two arguments
*  error: null or Error('message')
*  content: the server answer with API keys belonging to the index
*/
        Index.prototype.listApiKeys = function(callback) {
          var indexObj = this
          return this.as._jsonRequest({
            method: 'GET',
            url:
              '/1/indexes/' + encodeURIComponent(indexObj.indexName) + '/keys',
            hostType: 'read',
            callback: callback
          })
        }

        /*
 @deprecated see index.getApiKey
 */
        Index.prototype.getUserKeyACL = deprecate(function(key, callback) {
          return this.getApiKey(key, callback)
        }, deprecatedMessage('index.getUserKeyACL()', 'index.getApiKey()'))

        /*
* Get an API key from this index
*
* @param key
* @param callback the result callback called with two arguments
*  error: null or Error('message')
*  content: the server answer with the right API key
*/
        Index.prototype.getApiKey = function(key, callback) {
          var indexObj = this
          return this.as._jsonRequest({
            method: 'GET',
            url:
              '/1/indexes/' +
              encodeURIComponent(indexObj.indexName) +
              '/keys/' +
              key,
            hostType: 'read',
            callback: callback
          })
        }

        /*
 @deprecated see index.deleteApiKey
 */
        Index.prototype.deleteUserKey = deprecate(function(key, callback) {
          return this.deleteApiKey(key, callback)
        }, deprecatedMessage('index.deleteUserKey()', 'index.deleteApiKey()'))

        /*
* Delete an existing API key associated to this index
*
* @param key
* @param callback the result callback called with two arguments
*  error: null or Error('message')
*  content: the server answer with the deletion date
*/
        Index.prototype.deleteApiKey = function(key, callback) {
          var indexObj = this
          return this.as._jsonRequest({
            method: 'DELETE',
            url:
              '/1/indexes/' +
              encodeURIComponent(indexObj.indexName) +
              '/keys/' +
              key,
            hostType: 'write',
            callback: callback
          })
        }

        /*
 @deprecated see index.addApiKey
 */
        Index.prototype.addUserKey = deprecate(function(
          acls,
          params,
          callback
        ) {
          return this.addApiKey(acls, params, callback)
        },
        deprecatedMessage('index.addUserKey()', 'index.addApiKey()'))

        /*
* Add a new API key to this index
*
* @param {string[]} acls - The list of ACL for this key. Defined by an array of strings that
*   can contains the following values:
*     - search: allow to search (https and http)
*     - addObject: allows to add/update an object in the index (https only)
*     - deleteObject : allows to delete an existing object (https only)
*     - deleteIndex : allows to delete index content (https only)
*     - settings : allows to get index settings (https only)
*     - editSettings : allows to change index settings (https only)
* @param {Object} [params] - Optionnal parameters to set for the key
* @param {number} params.validity - Number of seconds after which the key will
* be automatically removed (0 means no time limit for this key)
* @param {number} params.maxQueriesPerIPPerHour - Number of API calls allowed from an IP address per hour
* @param {number} params.maxHitsPerQuery - Number of hits this API key can retrieve in one call
* @param {string} params.description - A description for your key
* @param {string[]} params.referers - A list of authorized referers
* @param {Object} params.queryParameters - Force the key to use specific query parameters
* @param {Function} callback - The result callback called with two arguments
*   error: null or Error('message')
*   content: the server answer with the added API key
* @return {Promise|undefined} Returns a promise if no callback given
* @example
* index.addUserKey(['search'], {
*   validity: 300,
*   maxQueriesPerIPPerHour: 2000,
*   maxHitsPerQuery: 3,
*   description: 'Eat three fruits',
*   referers: ['*.algolia.com'],
*   queryParameters: {
*     tagFilters: ['public'],
*   }
* })
* @see {@link https://www.algolia.com/doc/rest_api#AddIndexKey|Algolia REST API Documentation}
*/
        Index.prototype.addApiKey = function(acls, params, callback) {
          var isArray = __webpack_require__(
            './node_modules/algoliasearch/node_modules/isarray/index.js'
          )
          var usage = 'Usage: index.addApiKey(arrayOfAcls[, params, callback])'

          if (!isArray(acls)) {
            throw new Error(usage)
          }

          if (arguments.length === 1 || typeof params === 'function') {
            callback = params
            params = null
          }

          var postObj = {
            acl: acls
          }

          if (params) {
            postObj.validity = params.validity
            postObj.maxQueriesPerIPPerHour = params.maxQueriesPerIPPerHour
            postObj.maxHitsPerQuery = params.maxHitsPerQuery
            postObj.description = params.description

            if (params.queryParameters) {
              postObj.queryParameters = this.as._getSearchParams(
                params.queryParameters,
                ''
              )
            }

            postObj.referers = params.referers
          }

          return this.as._jsonRequest({
            method: 'POST',
            url: '/1/indexes/' + encodeURIComponent(this.indexName) + '/keys',
            body: postObj,
            hostType: 'write',
            callback: callback
          })
        }

        /**
         * @deprecated use index.addApiKey()
         */
        Index.prototype.addUserKeyWithValidity = deprecate(
          function deprecatedAddUserKeyWithValidity(acls, params, callback) {
            return this.addApiKey(acls, params, callback)
          },
          deprecatedMessage(
            'index.addUserKeyWithValidity()',
            'index.addApiKey()'
          )
        )

        /*
 @deprecated see index.updateApiKey
 */
        Index.prototype.updateUserKey = deprecate(function(
          key,
          acls,
          params,
          callback
        ) {
          return this.updateApiKey(key, acls, params, callback)
        },
        deprecatedMessage('index.updateUserKey()', 'index.updateApiKey()'))

        /**
         * Update an existing API key of this index
         * @param {string} key - The key to update
         * @param {string[]} acls - The list of ACL for this key. Defined by an array of strings that
         *   can contains the following values:
         *     - search: allow to search (https and http)
         *     - addObject: allows to add/update an object in the index (https only)
         *     - deleteObject : allows to delete an existing object (https only)
         *     - deleteIndex : allows to delete index content (https only)
         *     - settings : allows to get index settings (https only)
         *     - editSettings : allows to change index settings (https only)
         * @param {Object} [params] - Optionnal parameters to set for the key
         * @param {number} params.validity - Number of seconds after which the key will
         * be automatically removed (0 means no time limit for this key)
         * @param {number} params.maxQueriesPerIPPerHour - Number of API calls allowed from an IP address per hour
         * @param {number} params.maxHitsPerQuery - Number of hits this API key can retrieve in one call
         * @param {string} params.description - A description for your key
         * @param {string[]} params.referers - A list of authorized referers
         * @param {Object} params.queryParameters - Force the key to use specific query parameters
         * @param {Function} callback - The result callback called with two arguments
         *   error: null or Error('message')
         *   content: the server answer with user keys list
         * @return {Promise|undefined} Returns a promise if no callback given
         * @example
         * index.updateApiKey('APIKEY', ['search'], {
         *   validity: 300,
         *   maxQueriesPerIPPerHour: 2000,
         *   maxHitsPerQuery: 3,
         *   description: 'Eat three fruits',
         *   referers: ['*.algolia.com'],
         *   queryParameters: {
         *     tagFilters: ['public'],
         *   }
         * })
         * @see {@link https://www.algolia.com/doc/rest_api#UpdateIndexKey|Algolia REST API Documentation}
         */
        Index.prototype.updateApiKey = function(key, acls, params, callback) {
          var isArray = __webpack_require__(
            './node_modules/algoliasearch/node_modules/isarray/index.js'
          )
          var usage =
            'Usage: index.updateApiKey(key, arrayOfAcls[, params, callback])'

          if (!isArray(acls)) {
            throw new Error(usage)
          }

          if (arguments.length === 2 || typeof params === 'function') {
            callback = params
            params = null
          }

          var putObj = {
            acl: acls
          }

          if (params) {
            putObj.validity = params.validity
            putObj.maxQueriesPerIPPerHour = params.maxQueriesPerIPPerHour
            putObj.maxHitsPerQuery = params.maxHitsPerQuery
            putObj.description = params.description

            if (params.queryParameters) {
              putObj.queryParameters = this.as._getSearchParams(
                params.queryParameters,
                ''
              )
            }

            putObj.referers = params.referers
          }

          return this.as._jsonRequest({
            method: 'PUT',
            url:
              '/1/indexes/' +
              encodeURIComponent(this.indexName) +
              '/keys/' +
              key,
            body: putObj,
            hostType: 'write',
            callback: callback
          })
        }

        /***/
      },

      /***/ './node_modules/algoliasearch/src/IndexBrowser.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        'use strict'

        // This is the object returned by the `index.browseAll()` method

        module.exports = IndexBrowser

        var inherits = __webpack_require__(
          './node_modules/inherits/inherits_browser.js'
        )
        var EventEmitter = __webpack_require__(
          './node_modules/events/events.js'
        ).EventEmitter

        function IndexBrowser() {}

        inherits(IndexBrowser, EventEmitter)

        IndexBrowser.prototype.stop = function() {
          this._stopped = true
          this._clean()
        }

        IndexBrowser.prototype._end = function() {
          this.emit('end')
          this._clean()
        }

        IndexBrowser.prototype._error = function(err) {
          this.emit('error', err)
          this._clean()
        }

        IndexBrowser.prototype._result = function(content) {
          this.emit('result', content)
        }

        IndexBrowser.prototype._clean = function() {
          this.removeAllListeners('stop')
          this.removeAllListeners('end')
          this.removeAllListeners('error')
          this.removeAllListeners('result')
        }

        /***/
      },

      /***/ './node_modules/algoliasearch/src/IndexCore.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        var buildSearchMethod = __webpack_require__(
          './node_modules/algoliasearch/src/buildSearchMethod.js'
        )
        var deprecate = __webpack_require__(
          './node_modules/algoliasearch/src/deprecate.js'
        )
        var deprecatedMessage = __webpack_require__(
          './node_modules/algoliasearch/src/deprecatedMessage.js'
        )

        module.exports = IndexCore

        /*
* Index class constructor.
* You should not use this method directly but use initIndex() function
*/
        function IndexCore(algoliasearch, indexName) {
          this.indexName = indexName
          this.as = algoliasearch
          this.typeAheadArgs = null
          this.typeAheadValueOption = null

          // make sure every index instance has it's own cache
          this.cache = {}
        }

        /*
* Clear all queries in cache
*/
        IndexCore.prototype.clearCache = function() {
          this.cache = {}
        }

        /*
* Search inside the index using XMLHttpRequest request (Using a POST query to
* minimize number of OPTIONS queries: Cross-Origin Resource Sharing).
*
* @param {string} [query] the full text query
* @param {object} [args] (optional) if set, contains an object with query parameters:
* - page: (integer) Pagination parameter used to select the page to retrieve.
*                   Page is zero-based and defaults to 0. Thus,
*                   to retrieve the 10th page you need to set page=9
* - hitsPerPage: (integer) Pagination parameter used to select the number of hits per page. Defaults to 20.
* - attributesToRetrieve: a string that contains the list of object attributes
* you want to retrieve (let you minimize the answer size).
*   Attributes are separated with a comma (for example "name,address").
*   You can also use an array (for example ["name","address"]).
*   By default, all attributes are retrieved. You can also use '*' to retrieve all
*   values when an attributesToRetrieve setting is specified for your index.
* - attributesToHighlight: a string that contains the list of attributes you
*   want to highlight according to the query.
*   Attributes are separated by a comma. You can also use an array (for example ["name","address"]).
*   If an attribute has no match for the query, the raw value is returned.
*   By default all indexed text attributes are highlighted.
*   You can use `*` if you want to highlight all textual attributes.
*   Numerical attributes are not highlighted.
*   A matchLevel is returned for each highlighted attribute and can contain:
*      - full: if all the query terms were found in the attribute,
*      - partial: if only some of the query terms were found,
*      - none: if none of the query terms were found.
* - attributesToSnippet: a string that contains the list of attributes to snippet alongside
* the number of words to return (syntax is `attributeName:nbWords`).
*    Attributes are separated by a comma (Example: attributesToSnippet=name:10,content:10).
*    You can also use an array (Example: attributesToSnippet: ['name:10','content:10']).
*    By default no snippet is computed.
* - minWordSizefor1Typo: the minimum number of characters in a query word to accept one typo in this word.
* Defaults to 3.
* - minWordSizefor2Typos: the minimum number of characters in a query word
* to accept two typos in this word. Defaults to 7.
* - getRankingInfo: if set to 1, the result hits will contain ranking
* information in _rankingInfo attribute.
* - aroundLatLng: search for entries around a given
* latitude/longitude (specified as two floats separated by a comma).
*   For example aroundLatLng=47.316669,5.016670).
*   You can specify the maximum distance in meters with the aroundRadius parameter (in meters)
*   and the precision for ranking with aroundPrecision
*   (for example if you set aroundPrecision=100, two objects that are distant of
*   less than 100m will be considered as identical for "geo" ranking parameter).
*   At indexing, you should specify geoloc of an object with the _geoloc attribute
*   (in the form {"_geoloc":{"lat":48.853409, "lng":2.348800}})
* - insideBoundingBox: search entries inside a given area defined by the two extreme points
* of a rectangle (defined by 4 floats: p1Lat,p1Lng,p2Lat,p2Lng).
*   For example insideBoundingBox=47.3165,4.9665,47.3424,5.0201).
*   At indexing, you should specify geoloc of an object with the _geoloc attribute
*   (in the form {"_geoloc":{"lat":48.853409, "lng":2.348800}})
* - numericFilters: a string that contains the list of numeric filters you want to
* apply separated by a comma.
*   The syntax of one filter is `attributeName` followed by `operand` followed by `value`.
*   Supported operands are `<`, `<=`, `=`, `>` and `>=`.
*   You can have multiple conditions on one attribute like for example numericFilters=price>100,price<1000.
*   You can also use an array (for example numericFilters: ["price>100","price<1000"]).
* - tagFilters: filter the query by a set of tags. You can AND tags by separating them by commas.
*   To OR tags, you must add parentheses. For example, tags=tag1,(tag2,tag3) means tag1 AND (tag2 OR tag3).
*   You can also use an array, for example tagFilters: ["tag1",["tag2","tag3"]]
*   means tag1 AND (tag2 OR tag3).
*   At indexing, tags should be added in the _tags** attribute
*   of objects (for example {"_tags":["tag1","tag2"]}).
* - facetFilters: filter the query by a list of facets.
*   Facets are separated by commas and each facet is encoded as `attributeName:value`.
*   For example: `facetFilters=category:Book,author:John%20Doe`.
*   You can also use an array (for example `["category:Book","author:John%20Doe"]`).
* - facets: List of object attributes that you want to use for faceting.
*   Comma separated list: `"category,author"` or array `['category','author']`
*   Only attributes that have been added in **attributesForFaceting** index setting
*   can be used in this parameter.
*   You can also use `*` to perform faceting on all attributes specified in **attributesForFaceting**.
* - queryType: select how the query words are interpreted, it can be one of the following value:
*    - prefixAll: all query words are interpreted as prefixes,
*    - prefixLast: only the last word is interpreted as a prefix (default behavior),
*    - prefixNone: no query word is interpreted as a prefix. This option is not recommended.
* - optionalWords: a string that contains the list of words that should
* be considered as optional when found in the query.
*   Comma separated and array are accepted.
* - distinct: If set to 1, enable the distinct feature (disabled by default)
* if the attributeForDistinct index setting is set.
*   This feature is similar to the SQL "distinct" keyword: when enabled
*   in a query with the distinct=1 parameter,
*   all hits containing a duplicate value for the attributeForDistinct attribute are removed from results.
*   For example, if the chosen attribute is show_name and several hits have
*   the same value for show_name, then only the best
*   one is kept and others are removed.
* - restrictSearchableAttributes: List of attributes you want to use for
* textual search (must be a subset of the attributesToIndex index setting)
* either comma separated or as an array
* @param {function} [callback] the result callback called with two arguments:
*  error: null or Error('message'). If false, the content contains the error.
*  content: the server answer that contains the list of results.
*/
        IndexCore.prototype.search = buildSearchMethod('query')

        /*
* -- BETA --
* Search a record similar to the query inside the index using XMLHttpRequest request (Using a POST query to
* minimize number of OPTIONS queries: Cross-Origin Resource Sharing).
*
* @param {string} [query] the similar query
* @param {object} [args] (optional) if set, contains an object with query parameters.
*   All search parameters are supported (see search function), restrictSearchableAttributes and facetFilters
*   are the two most useful to restrict the similar results and get more relevant content
*/
        IndexCore.prototype.similarSearch = buildSearchMethod('similarQuery')

        /*
* Browse index content. The response content will have a `cursor` property that you can use
* to browse subsequent pages for this query. Use `index.browseFrom(cursor)` when you want.
*
* @param {string} query - The full text query
* @param {Object} [queryParameters] - Any search query parameter
* @param {Function} [callback] - The result callback called with two arguments
*   error: null or Error('message')
*   content: the server answer with the browse result
* @return {Promise|undefined} Returns a promise if no callback given
* @example
* index.browse('cool songs', {
*   tagFilters: 'public,comments',
*   hitsPerPage: 500
* }, callback);
* @see {@link https://www.algolia.com/doc/rest_api#Browse|Algolia REST API Documentation}
*/
        IndexCore.prototype.browse = function(
          query,
          queryParameters,
          callback
        ) {
          var merge = __webpack_require__(
            './node_modules/algoliasearch/src/merge.js'
          )

          var indexObj = this

          var page
          var hitsPerPage

          // we check variadic calls that are not the one defined
          // .browse()/.browse(fn)
          // => page = 0
          if (
            arguments.length === 0 ||
            (arguments.length === 1 && typeof arguments[0] === 'function')
          ) {
            page = 0
            callback = arguments[0]
            query = undefined
          } else if (typeof arguments[0] === 'number') {
            // .browse(2)/.browse(2, 10)/.browse(2, fn)/.browse(2, 10, fn)
            page = arguments[0]
            if (typeof arguments[1] === 'number') {
              hitsPerPage = arguments[1]
            } else if (typeof arguments[1] === 'function') {
              callback = arguments[1]
              hitsPerPage = undefined
            }
            query = undefined
            queryParameters = undefined
          } else if (typeof arguments[0] === 'object') {
            // .browse(queryParameters)/.browse(queryParameters, cb)
            if (typeof arguments[1] === 'function') {
              callback = arguments[1]
            }
            queryParameters = arguments[0]
            query = undefined
          } else if (
            typeof arguments[0] === 'string' &&
            typeof arguments[1] === 'function'
          ) {
            // .browse(query, cb)
            callback = arguments[1]
            queryParameters = undefined
          }

          // otherwise it's a .browse(query)/.browse(query, queryParameters)/.browse(query, queryParameters, cb)

          // get search query parameters combining various possible calls
          // to .browse();
          queryParameters = merge({}, queryParameters || {}, {
            page: page,
            hitsPerPage: hitsPerPage,
            query: query
          })

          var params = this.as._getSearchParams(queryParameters, '')

          return this.as._jsonRequest({
            method: 'POST',
            url:
              '/1/indexes/' +
              encodeURIComponent(indexObj.indexName) +
              '/browse',
            body: { params: params },
            hostType: 'read',
            callback: callback
          })
        }

        /*
* Continue browsing from a previous position (cursor), obtained via a call to `.browse()`.
*
* @param {string} query - The full text query
* @param {Object} [queryParameters] - Any search query parameter
* @param {Function} [callback] - The result callback called with two arguments
*   error: null or Error('message')
*   content: the server answer with the browse result
* @return {Promise|undefined} Returns a promise if no callback given
* @example
* index.browseFrom('14lkfsakl32', callback);
* @see {@link https://www.algolia.com/doc/rest_api#Browse|Algolia REST API Documentation}
*/
        IndexCore.prototype.browseFrom = function(cursor, callback) {
          return this.as._jsonRequest({
            method: 'POST',
            url: '/1/indexes/' + encodeURIComponent(this.indexName) + '/browse',
            body: { cursor: cursor },
            hostType: 'read',
            callback: callback
          })
        }

        /*
* Search for facet values
* https://www.algolia.com/doc/rest-api/search#search-for-facet-values
*
* @param {string} params.facetName Facet name, name of the attribute to search for values in.
* Must be declared as a facet
* @param {string} params.facetQuery Query for the facet search
* @param {string} [params.*] Any search parameter of Algolia,
* see https://www.algolia.com/doc/api-client/javascript/search#search-parameters
* Pagination is not supported. The page and hitsPerPage parameters will be ignored.
* @param callback (optional)
*/
        IndexCore.prototype.searchForFacetValues = function(params, callback) {
          var clone = __webpack_require__(
            './node_modules/algoliasearch/src/clone.js'
          )
          var omit = __webpack_require__(
            './node_modules/algoliasearch/src/omit.js'
          )
          var usage =
            'Usage: index.searchForFacetValues({facetName, facetQuery, ...params}[, callback])'

          if (
            params.facetName === undefined ||
            params.facetQuery === undefined
          ) {
            throw new Error(usage)
          }

          var facetName = params.facetName
          var filteredParams = omit(clone(params), function(keyName) {
            return keyName === 'facetName'
          })
          var searchParameters = this.as._getSearchParams(filteredParams, '')

          return this.as._jsonRequest({
            method: 'POST',
            url:
              '/1/indexes/' +
              encodeURIComponent(this.indexName) +
              '/facets/' +
              encodeURIComponent(facetName) +
              '/query',
            hostType: 'read',
            body: { params: searchParameters },
            callback: callback
          })
        }

        IndexCore.prototype.searchFacet = deprecate(function(params, callback) {
          return this.searchForFacetValues(params, callback)
        }, deprecatedMessage(
          'index.searchFacet(params[, callback])',
          'index.searchForFacetValues(params[, callback])'
        ))

        IndexCore.prototype._search = function(
          params,
          url,
          callback,
          additionalUA
        ) {
          return this.as._jsonRequest({
            cache: this.cache,
            method: 'POST',
            url:
              url ||
              '/1/indexes/' + encodeURIComponent(this.indexName) + '/query',
            body: { params: params },
            hostType: 'read',
            fallback: {
              method: 'GET',
              url: '/1/indexes/' + encodeURIComponent(this.indexName),
              body: { params: params }
            },
            callback: callback,
            additionalUA: additionalUA
          })
        }

        /*
* Get an object from this index
*
* @param objectID the unique identifier of the object to retrieve
* @param attrs (optional) if set, contains the array of attribute names to retrieve
* @param callback (optional) the result callback called with two arguments
*  error: null or Error('message')
*  content: the object to retrieve or the error message if a failure occured
*/
        IndexCore.prototype.getObject = function(objectID, attrs, callback) {
          var indexObj = this

          if (arguments.length === 1 || typeof attrs === 'function') {
            callback = attrs
            attrs = undefined
          }

          var params = ''
          if (attrs !== undefined) {
            params = '?attributes='
            for (var i = 0; i < attrs.length; ++i) {
              if (i !== 0) {
                params += ','
              }
              params += attrs[i]
            }
          }

          return this.as._jsonRequest({
            method: 'GET',
            url:
              '/1/indexes/' +
              encodeURIComponent(indexObj.indexName) +
              '/' +
              encodeURIComponent(objectID) +
              params,
            hostType: 'read',
            callback: callback
          })
        }

        /*
* Get several objects from this index
*
* @param objectIDs the array of unique identifier of objects to retrieve
*/
        IndexCore.prototype.getObjects = function(
          objectIDs,
          attributesToRetrieve,
          callback
        ) {
          var isArray = __webpack_require__(
            './node_modules/algoliasearch/node_modules/isarray/index.js'
          )
          var map = __webpack_require__(
            './node_modules/algoliasearch/src/map.js'
          )

          var usage = 'Usage: index.getObjects(arrayOfObjectIDs[, callback])'

          if (!isArray(objectIDs)) {
            throw new Error(usage)
          }

          var indexObj = this

          if (
            arguments.length === 1 ||
            typeof attributesToRetrieve === 'function'
          ) {
            callback = attributesToRetrieve
            attributesToRetrieve = undefined
          }

          var body = {
            requests: map(objectIDs, function prepareRequest(objectID) {
              var request = {
                indexName: indexObj.indexName,
                objectID: objectID
              }

              if (attributesToRetrieve) {
                request.attributesToRetrieve = attributesToRetrieve.join(',')
              }

              return request
            })
          }

          return this.as._jsonRequest({
            method: 'POST',
            url: '/1/indexes/*/objects',
            hostType: 'read',
            body: body,
            callback: callback
          })
        }

        IndexCore.prototype.as = null
        IndexCore.prototype.indexName = null
        IndexCore.prototype.typeAheadArgs = null
        IndexCore.prototype.typeAheadValueOption = null

        /***/
      },

      /***/ './node_modules/algoliasearch/src/browser/builds/algoliasearch.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        'use strict'

        var AlgoliaSearch = __webpack_require__(
          './node_modules/algoliasearch/src/AlgoliaSearch.js'
        )
        var createAlgoliasearch = __webpack_require__(
          './node_modules/algoliasearch/src/browser/createAlgoliasearch.js'
        )

        module.exports = createAlgoliasearch(AlgoliaSearch)

        /***/
      },

      /***/ './node_modules/algoliasearch/src/browser/createAlgoliasearch.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        'use strict'

        var global = __webpack_require__('./node_modules/global/window.js')
        var Promise =
          global.Promise ||
          __webpack_require__('./node_modules/es6-promise/dist/es6-promise.js')
            .Promise

        // This is the standalone browser build entry point
        // Browser implementation of the Algolia Search JavaScript client,
        // using XMLHttpRequest, XDomainRequest and JSONP as fallback
        module.exports = function createAlgoliasearch(AlgoliaSearch, uaSuffix) {
          var inherits = __webpack_require__(
            './node_modules/inherits/inherits_browser.js'
          )
          var errors = __webpack_require__(
            './node_modules/algoliasearch/src/errors.js'
          )
          var inlineHeaders = __webpack_require__(
            './node_modules/algoliasearch/src/browser/inline-headers.js'
          )
          var jsonpRequest = __webpack_require__(
            './node_modules/algoliasearch/src/browser/jsonp-request.js'
          )
          var places = __webpack_require__(
            './node_modules/algoliasearch/src/places.js'
          )
          uaSuffix = uaSuffix || ''

          if (false) {
            require('debug').enable('algoliasearch*')
          }

          function algoliasearch(applicationID, apiKey, opts) {
            var cloneDeep = __webpack_require__(
              './node_modules/algoliasearch/src/clone.js'
            )

            opts = cloneDeep(opts || {})

            opts._ua = opts._ua || algoliasearch.ua

            return new AlgoliaSearchBrowser(applicationID, apiKey, opts)
          }

          algoliasearch.version = __webpack_require__(
            './node_modules/algoliasearch/src/version.js'
          )
          algoliasearch.ua =
            'Algolia for vanilla JavaScript ' + uaSuffix + algoliasearch.version
          algoliasearch.initPlaces = places(algoliasearch)

          // we expose into window no matter how we are used, this will allow
          // us to easily debug any website running algolia
          global.__algolia = {
            debug: __webpack_require__(
              './node_modules/algoliasearch/node_modules/debug/src/browser.js'
            ),
            algoliasearch: algoliasearch
          }

          var support = {
            hasXMLHttpRequest: 'XMLHttpRequest' in global,
            hasXDomainRequest: 'XDomainRequest' in global
          }

          if (support.hasXMLHttpRequest) {
            support.cors = 'withCredentials' in new XMLHttpRequest()
          }

          function AlgoliaSearchBrowser() {
            // call AlgoliaSearch constructor
            AlgoliaSearch.apply(this, arguments)
          }

          inherits(AlgoliaSearchBrowser, AlgoliaSearch)

          AlgoliaSearchBrowser.prototype._request = function request(
            url,
            opts
          ) {
            return new Promise(function wrapRequest(resolve, reject) {
              // no cors or XDomainRequest, no request
              if (!support.cors && !support.hasXDomainRequest) {
                // very old browser, not supported
                reject(new errors.Network('CORS not supported'))
                return
              }

              url = inlineHeaders(url, opts.headers)

              var body = opts.body
              var req = support.cors
                ? new XMLHttpRequest()
                : new XDomainRequest()
              var reqTimeout
              var timedOut
              var connected = false

              reqTimeout = setTimeout(onTimeout, opts.timeouts.connect)
              // we set an empty onprogress listener
              // so that XDomainRequest on IE9 is not aborted
              // refs:
              //  - https://github.com/algolia/algoliasearch-client-js/issues/76
              //  - https://social.msdn.microsoft.com/Forums/ie/en-US/30ef3add-767c-4436-b8a9-f1ca19b4812e/ie9-rtm-xdomainrequest-issued-requests-may-abort-if-all-event-handlers-not-specified?forum=iewebdevelopment
              req.onprogress = onProgress
              if ('onreadystatechange' in req)
                req.onreadystatechange = onReadyStateChange
              req.onload = onLoad
              req.onerror = onError

              // do not rely on default XHR async flag, as some analytics code like hotjar
              // breaks it and set it to false by default
              if (req instanceof XMLHttpRequest) {
                req.open(opts.method, url, true)
              } else {
                req.open(opts.method, url)
              }

              // headers are meant to be sent after open
              if (support.cors) {
                if (body) {
                  if (opts.method === 'POST') {
                    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS#Simple_requests
                    req.setRequestHeader(
                      'content-type',
                      'application/x-www-form-urlencoded'
                    )
                  } else {
                    req.setRequestHeader('content-type', 'application/json')
                  }
                }
                req.setRequestHeader('accept', 'application/json')
              }

              req.send(body)

              // event object not received in IE8, at least
              // but we do not use it, still important to note
              function onLoad(/* event */) {
                // When browser does not supports req.timeout, we can
                // have both a load and timeout event, since handled by a dumb setTimeout
                if (timedOut) {
                  return
                }

                clearTimeout(reqTimeout)

                var out

                try {
                  out = {
                    body: JSON.parse(req.responseText),
                    responseText: req.responseText,
                    statusCode: req.status,
                    // XDomainRequest does not have any response headers
                    headers:
                      (req.getAllResponseHeaders &&
                        req.getAllResponseHeaders()) ||
                      {}
                  }
                } catch (e) {
                  out = new errors.UnparsableJSON({
                    more: req.responseText
                  })
                }

                if (out instanceof errors.UnparsableJSON) {
                  reject(out)
                } else {
                  resolve(out)
                }
              }

              function onError(event) {
                if (timedOut) {
                  return
                }

                clearTimeout(reqTimeout)

                // error event is trigerred both with XDR/XHR on:
                //   - DNS error
                //   - unallowed cross domain request
                reject(
                  new errors.Network({
                    more: event
                  })
                )
              }

              function onTimeout() {
                timedOut = true
                req.abort()

                reject(new errors.RequestTimeout())
              }

              function onConnect() {
                connected = true
                clearTimeout(reqTimeout)
                reqTimeout = setTimeout(onTimeout, opts.timeouts.complete)
              }

              function onProgress() {
                if (!connected) onConnect()
              }

              function onReadyStateChange() {
                if (!connected && req.readyState > 1) onConnect()
              }
            })
          }

          AlgoliaSearchBrowser.prototype._request.fallback = function requestFallback(
            url,
            opts
          ) {
            url = inlineHeaders(url, opts.headers)

            return new Promise(function wrapJsonpRequest(resolve, reject) {
              jsonpRequest(url, opts, function jsonpRequestDone(err, content) {
                if (err) {
                  reject(err)
                  return
                }

                resolve(content)
              })
            })
          }

          AlgoliaSearchBrowser.prototype._promise = {
            reject: function rejectPromise(val) {
              return Promise.reject(val)
            },
            resolve: function resolvePromise(val) {
              return Promise.resolve(val)
            },
            delay: function delayPromise(ms) {
              return new Promise(function resolveOnTimeout(
                resolve /* , reject*/
              ) {
                setTimeout(resolve, ms)
              })
            }
          }

          return algoliasearch
        }

        /***/
      },

      /***/ './node_modules/algoliasearch/src/browser/inline-headers.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        'use strict'

        module.exports = inlineHeaders

        var encode = __webpack_require__(
          './node_modules/querystring-es3/encode.js'
        )

        function inlineHeaders(url, headers) {
          if (/\?/.test(url)) {
            url += '&'
          } else {
            url += '?'
          }

          return url + encode(headers)
        }

        /***/
      },

      /***/ './node_modules/algoliasearch/src/browser/jsonp-request.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        'use strict'

        module.exports = jsonpRequest

        var errors = __webpack_require__(
          './node_modules/algoliasearch/src/errors.js'
        )

        var JSONPCounter = 0

        function jsonpRequest(url, opts, cb) {
          if (opts.method !== 'GET') {
            cb(
              new Error(
                'Method ' +
                  opts.method +
                  ' ' +
                  url +
                  ' is not supported by JSONP.'
              )
            )
            return
          }

          opts.debug('JSONP: start')

          var cbCalled = false
          var timedOut = false

          JSONPCounter += 1
          var head = document.getElementsByTagName('head')[0]
          var script = document.createElement('script')
          var cbName = 'algoliaJSONP_' + JSONPCounter
          var done = false

          window[cbName] = function(data) {
            removeGlobals()

            if (timedOut) {
              opts.debug('JSONP: Late answer, ignoring')
              return
            }

            cbCalled = true

            clean()

            cb(null, {
              body: data /* ,
      // We do not send the statusCode, there's no statusCode in JSONP, it will be
      // computed using data.status && data.message like with XDR
      statusCode*/
            })
          }

          // add callback by hand
          url += '&callback=' + cbName

          // add body params manually
          if (opts.jsonBody && opts.jsonBody.params) {
            url += '&' + opts.jsonBody.params
          }

          var ontimeout = setTimeout(timeout, opts.timeouts.complete)

          // script onreadystatechange needed only for
          // <= IE8
          // https://github.com/angular/angular.js/issues/4523
          script.onreadystatechange = readystatechange
          script.onload = success
          script.onerror = error

          script.async = true
          script.defer = true
          script.src = url
          head.appendChild(script)

          function success() {
            opts.debug('JSONP: success')

            if (done || timedOut) {
              return
            }

            done = true

            // script loaded but did not call the fn => script loading error
            if (!cbCalled) {
              opts.debug(
                'JSONP: Fail. Script loaded but did not call the callback'
              )
              clean()
              cb(new errors.JSONPScriptFail())
            }
          }

          function readystatechange() {
            if (
              this.readyState === 'loaded' ||
              this.readyState === 'complete'
            ) {
              success()
            }
          }

          function clean() {
            clearTimeout(ontimeout)
            script.onload = null
            script.onreadystatechange = null
            script.onerror = null
            head.removeChild(script)
          }

          function removeGlobals() {
            try {
              delete window[cbName]
              delete window[cbName + '_loaded']
            } catch (e) {
              window[cbName] = window[cbName + '_loaded'] = undefined
            }
          }

          function timeout() {
            opts.debug('JSONP: Script timeout')
            timedOut = true
            clean()
            cb(new errors.RequestTimeout())
          }

          function error() {
            opts.debug('JSONP: Script error')

            if (done || timedOut) {
              return
            }

            clean()
            cb(new errors.JSONPScriptError())
          }
        }

        /***/
      },

      /***/ './node_modules/algoliasearch/src/buildSearchMethod.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        module.exports = buildSearchMethod

        var errors = __webpack_require__(
          './node_modules/algoliasearch/src/errors.js'
        )

        /**
         * Creates a search method to be used in clients
         * @param {string} queryParam the name of the attribute used for the query
         * @param {string} url the url
         * @return {function} the search method
         */
        function buildSearchMethod(queryParam, url) {
          /**
           * The search method. Prepares the data and send the query to Algolia.
           * @param {string} query the string used for query search
           * @param {object} args additional parameters to send with the search
           * @param {function} [callback] the callback to be called with the client gets the answer
           * @return {undefined|Promise} If the callback is not provided then this methods returns a Promise
           */
          return function search(query, args, callback) {
            // warn V2 users on how to search
            if (
              (typeof query === 'function' && typeof args === 'object') ||
              typeof callback === 'object'
            ) {
              // .search(query, params, cb)
              // .search(cb, params)
              throw new errors.AlgoliaSearchError(
                'index.search usage is index.search(query, params, cb)'
              )
            }

            // Normalizing the function signature
            if (arguments.length === 0 || typeof query === 'function') {
              // Usage : .search(), .search(cb)
              callback = query
              query = ''
            } else if (arguments.length === 1 || typeof args === 'function') {
              // Usage : .search(query/args), .search(query, cb)
              callback = args
              args = undefined
            }
            // At this point we have 3 arguments with values

            // Usage : .search(args) // careful: typeof null === 'object'
            if (typeof query === 'object' && query !== null) {
              args = query
              query = undefined
            } else if (query === undefined || query === null) {
              // .search(undefined/null)
              query = ''
            }

            var params = ''

            if (query !== undefined) {
              params += queryParam + '=' + encodeURIComponent(query)
            }

            var additionalUA
            if (args !== undefined) {
              if (args.additionalUA) {
                additionalUA = args.additionalUA
                delete args.additionalUA
              }
              // `_getSearchParams` will augment params, do not be fooled by the = versus += from previous if
              params = this.as._getSearchParams(args, params)
            }

            return this._search(params, url, callback, additionalUA)
          }
        }

        /***/
      },

      /***/ './node_modules/algoliasearch/src/clone.js': /***/ function(
        module,
        exports
      ) {
        module.exports = function clone(obj) {
          return JSON.parse(JSON.stringify(obj))
        }

        /***/
      },

      /***/ './node_modules/algoliasearch/src/deprecate.js': /***/ function(
        module,
        exports
      ) {
        module.exports = function deprecate(fn, message) {
          var warned = false

          function deprecated() {
            if (!warned) {
              /* eslint no-console:0 */
              console.warn(message)
              warned = true
            }

            return fn.apply(this, arguments)
          }

          return deprecated
        }

        /***/
      },

      /***/ './node_modules/algoliasearch/src/deprecatedMessage.js': /***/ function(
        module,
        exports
      ) {
        module.exports = function deprecatedMessage(previousUsage, newUsage) {
          var githubAnchorLink = previousUsage
            .toLowerCase()
            .replace(/[\.\(\)]/g, '')

          return (
            'algoliasearch: `' +
            previousUsage +
            '` was replaced by `' +
            newUsage +
            '`. Please see https://github.com/algolia/algoliasearch-client-javascript/wiki/Deprecated#' +
            githubAnchorLink
          )
        }

        /***/
      },

      /***/ './node_modules/algoliasearch/src/errors.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        'use strict'

        // This file hosts our error definitions
        // We use custom error "types" so that we can act on them when we need it
        // e.g.: if error instanceof errors.UnparsableJSON then..

        var inherits = __webpack_require__(
          './node_modules/inherits/inherits_browser.js'
        )

        function AlgoliaSearchError(message, extraProperties) {
          var forEach = __webpack_require__('./node_modules/foreach/index.js')

          var error = this

          // try to get a stacktrace
          if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor)
          } else {
            error.stack =
              new Error().stack || 'Cannot get a stacktrace, browser is too old'
          }

          this.name = 'AlgoliaSearchError'
          this.message = message || 'Unknown error'

          if (extraProperties) {
            forEach(extraProperties, function addToErrorObject(value, key) {
              error[key] = value
            })
          }
        }

        inherits(AlgoliaSearchError, Error)

        function createCustomError(name, message) {
          function AlgoliaSearchCustomError() {
            var args = Array.prototype.slice.call(arguments, 0)

            // custom message not set, use default
            if (typeof args[0] !== 'string') {
              args.unshift(message)
            }

            AlgoliaSearchError.apply(this, args)
            this.name = 'AlgoliaSearch' + name + 'Error'
          }

          inherits(AlgoliaSearchCustomError, AlgoliaSearchError)

          return AlgoliaSearchCustomError
        }

        // late exports to let various fn defs and inherits take place
        module.exports = {
          AlgoliaSearchError: AlgoliaSearchError,
          UnparsableJSON: createCustomError(
            'UnparsableJSON',
            'Could not parse the incoming response as JSON, see err.more for details'
          ),
          RequestTimeout: createCustomError(
            'RequestTimeout',
            'Request timedout before getting a response'
          ),
          Network: createCustomError(
            'Network',
            'Network issue, see err.more for details'
          ),
          JSONPScriptFail: createCustomError(
            'JSONPScriptFail',
            '<script> was loaded but did not call our provided callback'
          ),
          JSONPScriptError: createCustomError(
            'JSONPScriptError',
            '<script> unable to load due to an `error` event on it'
          ),
          Unknown: createCustomError('Unknown', 'Unknown error occured')
        }

        /***/
      },

      /***/ './node_modules/algoliasearch/src/exitPromise.js': /***/ function(
        module,
        exports
      ) {
        // Parse cloud does not supports setTimeout
        // We do not store a setTimeout reference in the client everytime
        // We only fallback to a fake setTimeout when not available
        // setTimeout cannot be override globally sadly
        module.exports = function exitPromise(fn, _setTimeout) {
          _setTimeout(fn, 0)
        }

        /***/
      },

      /***/ './node_modules/algoliasearch/src/map.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        var foreach = __webpack_require__('./node_modules/foreach/index.js')

        module.exports = function map(arr, fn) {
          var newArr = []
          foreach(arr, function(item, itemIndex) {
            newArr.push(fn(item, itemIndex, arr))
          })
          return newArr
        }

        /***/
      },

      /***/ './node_modules/algoliasearch/src/merge.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        var foreach = __webpack_require__('./node_modules/foreach/index.js')

        module.exports = function merge(destination /* , sources */) {
          var sources = Array.prototype.slice.call(arguments)

          foreach(sources, function(source) {
            for (var keyName in source) {
              if (source.hasOwnProperty(keyName)) {
                if (
                  typeof destination[keyName] === 'object' &&
                  typeof source[keyName] === 'object'
                ) {
                  destination[keyName] = merge(
                    {},
                    destination[keyName],
                    source[keyName]
                  )
                } else if (source[keyName] !== undefined) {
                  destination[keyName] = source[keyName]
                }
              }
            }
          })

          return destination
        }

        /***/
      },

      /***/ './node_modules/algoliasearch/src/omit.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        module.exports = function omit(obj, test) {
          var keys = __webpack_require__('./node_modules/object-keys/index.js')
          var foreach = __webpack_require__('./node_modules/foreach/index.js')

          var filtered = {}

          foreach(keys(obj), function doFilter(keyName) {
            if (test(keyName) !== true) {
              filtered[keyName] = obj[keyName]
            }
          })

          return filtered
        }

        /***/
      },

      /***/ './node_modules/algoliasearch/src/places.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        module.exports = createPlacesClient

        var buildSearchMethod = __webpack_require__(
          './node_modules/algoliasearch/src/buildSearchMethod.js'
        )

        function createPlacesClient(algoliasearch) {
          return function places(appID, apiKey, opts) {
            var cloneDeep = __webpack_require__(
              './node_modules/algoliasearch/src/clone.js'
            )

            opts = (opts && cloneDeep(opts)) || {}
            opts.hosts = opts.hosts || [
              'places-dsn.algolia.net',
              'places-1.algolianet.com',
              'places-2.algolianet.com',
              'places-3.algolianet.com'
            ]

            // allow initPlaces() no arguments => community rate limited
            if (
              arguments.length === 0 ||
              typeof appID === 'object' ||
              appID === undefined
            ) {
              appID = ''
              apiKey = ''
              opts._allowEmptyCredentials = true
            }

            var client = algoliasearch(appID, apiKey, opts)
            var index = client.initIndex('places')
            index.search = buildSearchMethod('query', '/1/places/query')
            index.getObject = function(objectID, callback) {
              return this.as._jsonRequest({
                method: 'GET',
                url: '/1/places/' + encodeURIComponent(objectID),
                hostType: 'read',
                callback: callback
              })
            }
            return index
          }
        }

        /***/
      },

      /***/ './node_modules/algoliasearch/src/store.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        /* WEBPACK VAR INJECTION */ ;(function(global) {
          var debug = __webpack_require__(
            './node_modules/algoliasearch/node_modules/debug/src/browser.js'
          )('algoliasearch:src/hostIndexState.js')
          var localStorageNamespace = 'algoliasearch-client-js'

          var store
          var moduleStore = {
            state: {},
            set: function(key, data) {
              this.state[key] = data
              return this.state[key]
            },
            get: function(key) {
              return this.state[key] || null
            }
          }

          var localStorageStore = {
            set: function(key, data) {
              moduleStore.set(key, data) // always replicate localStorageStore to moduleStore in case of failure

              try {
                var namespace = JSON.parse(
                  global.localStorage[localStorageNamespace]
                )
                namespace[key] = data
                global.localStorage[localStorageNamespace] = JSON.stringify(
                  namespace
                )
                return namespace[key]
              } catch (e) {
                return localStorageFailure(key, e)
              }
            },
            get: function(key) {
              try {
                return (
                  JSON.parse(global.localStorage[localStorageNamespace])[key] ||
                  null
                )
              } catch (e) {
                return localStorageFailure(key, e)
              }
            }
          }

          function localStorageFailure(key, e) {
            debug('localStorage failed with', e)
            cleanup()
            store = moduleStore
            return store.get(key)
          }

          store = supportsLocalStorage() ? localStorageStore : moduleStore

          module.exports = {
            get: getOrSet,
            set: getOrSet,
            supportsLocalStorage: supportsLocalStorage
          }

          function getOrSet(key, data) {
            if (arguments.length === 1) {
              return store.get(key)
            }

            return store.set(key, data)
          }

          function supportsLocalStorage() {
            try {
              if ('localStorage' in global && global.localStorage !== null) {
                if (!global.localStorage[localStorageNamespace]) {
                  // actual creation of the namespace
                  global.localStorage.setItem(
                    localStorageNamespace,
                    JSON.stringify({})
                  )
                }
                return true
              }

              return false
            } catch (_) {
              return false
            }
          }

          // In case of any error on localStorage, we clean our own namespace, this should handle
          // quota errors when a lot of keys + data are used
          function cleanup() {
            try {
              global.localStorage.removeItem(localStorageNamespace)
            } catch (_) {
              // nothing to do
            }
          }

          /* WEBPACK VAR INJECTION */
        }.call(
          exports,
          __webpack_require__('./node_modules/webpack/buildin/global.js')
        ))

        /***/
      },

      /***/ './node_modules/algoliasearch/src/version.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        'use strict'

        module.exports = '3.26.0'

        /***/
      },

      /***/ './node_modules/babel-runtime/helpers/defineProperty.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        'use strict'

        exports.__esModule = true

        var _defineProperty = __webpack_require__(
          './node_modules/babel-runtime/core-js/object/define-property.js'
        )

        var _defineProperty2 = _interopRequireDefault(_defineProperty)

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        exports.default = function(obj, key, value) {
          if (key in obj) {
            ;(0, _defineProperty2.default)(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            })
          } else {
            obj[key] = value
          }

          return obj
        }

        /***/
      },

      /***/ './node_modules/clean-tag/dist.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.Tag = exports.omit = undefined

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i]
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key]
                }
              }
            }
            return target
          }

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i]
              descriptor.enumerable = descriptor.enumerable || false
              descriptor.configurable = true
              if ('value' in descriptor) descriptor.writable = true
              Object.defineProperty(target, descriptor.key, descriptor)
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps)
            if (staticProps) defineProperties(Constructor, staticProps)
            return Constructor
          }
        })()

        var _react = __webpack_require__(
          './node_modules/react/cjs/react.development.js'
        )

        var _react2 = _interopRequireDefault(_react)

        var _styledSystem = __webpack_require__(
          './node_modules/styled-system/dist/index.js'
        )

        var _htmlTags = __webpack_require__('./node_modules/html-tags/index.js')

        var _htmlTags2 = _interopRequireDefault(_htmlTags)

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        function _objectWithoutProperties(obj, keys) {
          var target = {}
          for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue
            target[i] = obj[i]
          }
          return target
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          }
          return call &&
            (typeof call === 'object' || typeof call === 'function')
            ? call
            : self
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof superClass
            )
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          )
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass)
        }

        var allPropTypes = Object.keys(_styledSystem.propTypes).reduce(function(
          a,
          key
        ) {
          return Object.assign(a, _styledSystem.propTypes[key])
        },
        {})

        var blacklist = Object.keys(allPropTypes)

        var omit = (exports.omit = function omit(obj, keys) {
          var next = {}
          for (var key in obj) {
            if (keys.indexOf(key) > -1) continue
            next[key] = obj[key]
          }
          return next
        })

        var Tag = (exports.Tag = (function(_React$Component) {
          _inherits(Tag, _React$Component)

          function Tag() {
            _classCallCheck(this, Tag)

            return _possibleConstructorReturn(
              this,
              (Tag.__proto__ || Object.getPrototypeOf(Tag)).apply(
                this,
                arguments
              )
            )
          }

          _createClass(Tag, [
            {
              key: 'render',
              value: function render() {
                var _props = this.props,
                  innerRef = _props.innerRef,
                  is = _props.is,
                  blacklist = _props.blacklist,
                  theme = _props.theme,
                  props = _objectWithoutProperties(_props, [
                    'innerRef',
                    'is',
                    'blacklist',
                    'theme'
                  ])

                var attr = omit(props, blacklist)

                return _react2.default.createElement(
                  is,
                  _extends(
                    {
                      ref: innerRef
                    },
                    attr
                  )
                )
              }
            }
          ])

          return Tag
        })(_react2.default.Component))

        Tag.displayName = 'Clean.div'

        Tag.defaultProps = {
          is: 'div',
          blacklist: blacklist

          // Trick styled-components into passing innerRef
        }
        Tag.styledComponentId = 'lol'

        _htmlTags2.default.forEach(function(tag) {
          Tag[tag] = function(props) {
            return _react2.default.createElement(
              Tag,
              _extends({ is: tag }, props)
            )
          }
          Tag[tag].displayName = 'Clean.' + tag
        })

        exports.default = Tag

        /***/
      },

      /***/ './node_modules/es6-promise/dist/es6-promise.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        /* WEBPACK VAR INJECTION */ ;(function(process, global) {
          /*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.4+314e4831
 */

          ;(function(global, factory) {
            true
              ? (module.exports = factory())
              : typeof define === 'function' && define.amd
                ? define(factory)
                : (global.ES6Promise = factory())
          })(this, function() {
            'use strict'

            function objectOrFunction(x) {
              var type = typeof x
              return x !== null && (type === 'object' || type === 'function')
            }

            function isFunction(x) {
              return typeof x === 'function'
            }

            var _isArray = void 0
            if (Array.isArray) {
              _isArray = Array.isArray
            } else {
              _isArray = function(x) {
                return Object.prototype.toString.call(x) === '[object Array]'
              }
            }

            var isArray = _isArray

            var len = 0
            var vertxNext = void 0
            var customSchedulerFn = void 0

            var asap = function asap(callback, arg) {
              queue[len] = callback
              queue[len + 1] = arg
              len += 2
              if (len === 2) {
                // If len is 2, that means that we need to schedule an async flush.
                // If additional callbacks are queued before the queue is flushed, they
                // will be processed by this flush that we are scheduling.
                if (customSchedulerFn) {
                  customSchedulerFn(flush)
                } else {
                  scheduleFlush()
                }
              }
            }

            function setScheduler(scheduleFn) {
              customSchedulerFn = scheduleFn
            }

            function setAsap(asapFn) {
              asap = asapFn
            }

            var browserWindow =
              typeof window !== 'undefined' ? window : undefined
            var browserGlobal = browserWindow || {}
            var BrowserMutationObserver =
              browserGlobal.MutationObserver ||
              browserGlobal.WebKitMutationObserver
            var isNode =
              typeof self === 'undefined' &&
              typeof process !== 'undefined' &&
              {}.toString.call(process) === '[object process]'

            // test for web worker but not in IE10
            var isWorker =
              typeof Uint8ClampedArray !== 'undefined' &&
              typeof importScripts !== 'undefined' &&
              typeof MessageChannel !== 'undefined'

            // node
            function useNextTick() {
              // node version 0.10.x displays a deprecation warning when nextTick is used recursively
              // see https://github.com/cujojs/when/issues/410 for details
              return function() {
                return process.nextTick(flush)
              }
            }

            // vertx
            function useVertxTimer() {
              if (typeof vertxNext !== 'undefined') {
                return function() {
                  vertxNext(flush)
                }
              }

              return useSetTimeout()
            }

            function useMutationObserver() {
              var iterations = 0
              var observer = new BrowserMutationObserver(flush)
              var node = document.createTextNode('')
              observer.observe(node, { characterData: true })

              return function() {
                node.data = iterations = ++iterations % 2
              }
            }

            // web worker
            function useMessageChannel() {
              var channel = new MessageChannel()
              channel.port1.onmessage = flush
              return function() {
                return channel.port2.postMessage(0)
              }
            }

            function useSetTimeout() {
              // Store setTimeout reference so es6-promise will be unaffected by
              // other code modifying setTimeout (like sinon.useFakeTimers())
              var globalSetTimeout = setTimeout
              return function() {
                return globalSetTimeout(flush, 1)
              }
            }

            var queue = new Array(1000)
            function flush() {
              for (var i = 0; i < len; i += 2) {
                var callback = queue[i]
                var arg = queue[i + 1]

                callback(arg)

                queue[i] = undefined
                queue[i + 1] = undefined
              }

              len = 0
            }

            function attemptVertx() {
              try {
                var vertx = Function('return this')().require('vertx')
                vertxNext = vertx.runOnLoop || vertx.runOnContext
                return useVertxTimer()
              } catch (e) {
                return useSetTimeout()
              }
            }

            var scheduleFlush = void 0
            // Decide what async method to use to triggering processing of queued callbacks:
            if (isNode) {
              scheduleFlush = useNextTick()
            } else if (BrowserMutationObserver) {
              scheduleFlush = useMutationObserver()
            } else if (isWorker) {
              scheduleFlush = useMessageChannel()
            } else if (
              browserWindow === undefined &&
              'function' === 'function'
            ) {
              scheduleFlush = attemptVertx()
            } else {
              scheduleFlush = useSetTimeout()
            }

            function then(onFulfillment, onRejection) {
              var parent = this

              var child = new this.constructor(noop)

              if (child[PROMISE_ID] === undefined) {
                makePromise(child)
              }

              var _state = parent._state

              if (_state) {
                var callback = arguments[_state - 1]
                asap(function() {
                  return invokeCallback(_state, child, callback, parent._result)
                })
              } else {
                subscribe(parent, child, onFulfillment, onRejection)
              }

              return child
            }

            /**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
            function resolve$1(object) {
              /*jshint validthis:true */
              var Constructor = this

              if (
                object &&
                typeof object === 'object' &&
                object.constructor === Constructor
              ) {
                return object
              }

              var promise = new Constructor(noop)
              resolve(promise, object)
              return promise
            }

            var PROMISE_ID = Math.random()
              .toString(36)
              .substring(2)

            function noop() {}

            var PENDING = void 0
            var FULFILLED = 1
            var REJECTED = 2

            var TRY_CATCH_ERROR = { error: null }

            function selfFulfillment() {
              return new TypeError('You cannot resolve a promise with itself')
            }

            function cannotReturnOwn() {
              return new TypeError(
                'A promises callback cannot return that same promise.'
              )
            }

            function getThen(promise) {
              try {
                return promise.then
              } catch (error) {
                TRY_CATCH_ERROR.error = error
                return TRY_CATCH_ERROR
              }
            }

            function tryThen(
              then$$1,
              value,
              fulfillmentHandler,
              rejectionHandler
            ) {
              try {
                then$$1.call(value, fulfillmentHandler, rejectionHandler)
              } catch (e) {
                return e
              }
            }

            function handleForeignThenable(promise, thenable, then$$1) {
              asap(function(promise) {
                var sealed = false
                var error = tryThen(
                  then$$1,
                  thenable,
                  function(value) {
                    if (sealed) {
                      return
                    }
                    sealed = true
                    if (thenable !== value) {
                      resolve(promise, value)
                    } else {
                      fulfill(promise, value)
                    }
                  },
                  function(reason) {
                    if (sealed) {
                      return
                    }
                    sealed = true

                    reject(promise, reason)
                  },
                  'Settle: ' + (promise._label || ' unknown promise')
                )

                if (!sealed && error) {
                  sealed = true
                  reject(promise, error)
                }
              }, promise)
            }

            function handleOwnThenable(promise, thenable) {
              if (thenable._state === FULFILLED) {
                fulfill(promise, thenable._result)
              } else if (thenable._state === REJECTED) {
                reject(promise, thenable._result)
              } else {
                subscribe(
                  thenable,
                  undefined,
                  function(value) {
                    return resolve(promise, value)
                  },
                  function(reason) {
                    return reject(promise, reason)
                  }
                )
              }
            }

            function handleMaybeThenable(promise, maybeThenable, then$$1) {
              if (
                maybeThenable.constructor === promise.constructor &&
                then$$1 === then &&
                maybeThenable.constructor.resolve === resolve$1
              ) {
                handleOwnThenable(promise, maybeThenable)
              } else {
                if (then$$1 === TRY_CATCH_ERROR) {
                  reject(promise, TRY_CATCH_ERROR.error)
                  TRY_CATCH_ERROR.error = null
                } else if (then$$1 === undefined) {
                  fulfill(promise, maybeThenable)
                } else if (isFunction(then$$1)) {
                  handleForeignThenable(promise, maybeThenable, then$$1)
                } else {
                  fulfill(promise, maybeThenable)
                }
              }
            }

            function resolve(promise, value) {
              if (promise === value) {
                reject(promise, selfFulfillment())
              } else if (objectOrFunction(value)) {
                handleMaybeThenable(promise, value, getThen(value))
              } else {
                fulfill(promise, value)
              }
            }

            function publishRejection(promise) {
              if (promise._onerror) {
                promise._onerror(promise._result)
              }

              publish(promise)
            }

            function fulfill(promise, value) {
              if (promise._state !== PENDING) {
                return
              }

              promise._result = value
              promise._state = FULFILLED

              if (promise._subscribers.length !== 0) {
                asap(publish, promise)
              }
            }

            function reject(promise, reason) {
              if (promise._state !== PENDING) {
                return
              }
              promise._state = REJECTED
              promise._result = reason

              asap(publishRejection, promise)
            }

            function subscribe(parent, child, onFulfillment, onRejection) {
              var _subscribers = parent._subscribers
              var length = _subscribers.length

              parent._onerror = null

              _subscribers[length] = child
              _subscribers[length + FULFILLED] = onFulfillment
              _subscribers[length + REJECTED] = onRejection

              if (length === 0 && parent._state) {
                asap(publish, parent)
              }
            }

            function publish(promise) {
              var subscribers = promise._subscribers
              var settled = promise._state

              if (subscribers.length === 0) {
                return
              }

              var child = void 0,
                callback = void 0,
                detail = promise._result

              for (var i = 0; i < subscribers.length; i += 3) {
                child = subscribers[i]
                callback = subscribers[i + settled]

                if (child) {
                  invokeCallback(settled, child, callback, detail)
                } else {
                  callback(detail)
                }
              }

              promise._subscribers.length = 0
            }

            function tryCatch(callback, detail) {
              try {
                return callback(detail)
              } catch (e) {
                TRY_CATCH_ERROR.error = e
                return TRY_CATCH_ERROR
              }
            }

            function invokeCallback(settled, promise, callback, detail) {
              var hasCallback = isFunction(callback),
                value = void 0,
                error = void 0,
                succeeded = void 0,
                failed = void 0

              if (hasCallback) {
                value = tryCatch(callback, detail)

                if (value === TRY_CATCH_ERROR) {
                  failed = true
                  error = value.error
                  value.error = null
                } else {
                  succeeded = true
                }

                if (promise === value) {
                  reject(promise, cannotReturnOwn())
                  return
                }
              } else {
                value = detail
                succeeded = true
              }

              if (promise._state !== PENDING) {
                // noop
              } else if (hasCallback && succeeded) {
                resolve(promise, value)
              } else if (failed) {
                reject(promise, error)
              } else if (settled === FULFILLED) {
                fulfill(promise, value)
              } else if (settled === REJECTED) {
                reject(promise, value)
              }
            }

            function initializePromise(promise, resolver) {
              try {
                resolver(
                  function resolvePromise(value) {
                    resolve(promise, value)
                  },
                  function rejectPromise(reason) {
                    reject(promise, reason)
                  }
                )
              } catch (e) {
                reject(promise, e)
              }
            }

            var id = 0
            function nextId() {
              return id++
            }

            function makePromise(promise) {
              promise[PROMISE_ID] = id++
              promise._state = undefined
              promise._result = undefined
              promise._subscribers = []
            }

            function validationError() {
              return new Error('Array Methods must be provided an Array')
            }

            var Enumerator = (function() {
              function Enumerator(Constructor, input) {
                this._instanceConstructor = Constructor
                this.promise = new Constructor(noop)

                if (!this.promise[PROMISE_ID]) {
                  makePromise(this.promise)
                }

                if (isArray(input)) {
                  this.length = input.length
                  this._remaining = input.length

                  this._result = new Array(this.length)

                  if (this.length === 0) {
                    fulfill(this.promise, this._result)
                  } else {
                    this.length = this.length || 0
                    this._enumerate(input)
                    if (this._remaining === 0) {
                      fulfill(this.promise, this._result)
                    }
                  }
                } else {
                  reject(this.promise, validationError())
                }
              }

              Enumerator.prototype._enumerate = function _enumerate(input) {
                for (
                  var i = 0;
                  this._state === PENDING && i < input.length;
                  i++
                ) {
                  this._eachEntry(input[i], i)
                }
              }

              Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
                var c = this._instanceConstructor
                var resolve$$1 = c.resolve

                if (resolve$$1 === resolve$1) {
                  var _then = getThen(entry)

                  if (_then === then && entry._state !== PENDING) {
                    this._settledAt(entry._state, i, entry._result)
                  } else if (typeof _then !== 'function') {
                    this._remaining--
                    this._result[i] = entry
                  } else if (c === Promise$1) {
                    var promise = new c(noop)
                    handleMaybeThenable(promise, entry, _then)
                    this._willSettleAt(promise, i)
                  } else {
                    this._willSettleAt(
                      new c(function(resolve$$1) {
                        return resolve$$1(entry)
                      }),
                      i
                    )
                  }
                } else {
                  this._willSettleAt(resolve$$1(entry), i)
                }
              }

              Enumerator.prototype._settledAt = function _settledAt(
                state,
                i,
                value
              ) {
                var promise = this.promise

                if (promise._state === PENDING) {
                  this._remaining--

                  if (state === REJECTED) {
                    reject(promise, value)
                  } else {
                    this._result[i] = value
                  }
                }

                if (this._remaining === 0) {
                  fulfill(promise, this._result)
                }
              }

              Enumerator.prototype._willSettleAt = function _willSettleAt(
                promise,
                i
              ) {
                var enumerator = this

                subscribe(
                  promise,
                  undefined,
                  function(value) {
                    return enumerator._settledAt(FULFILLED, i, value)
                  },
                  function(reason) {
                    return enumerator._settledAt(REJECTED, i, reason)
                  }
                )
              }

              return Enumerator
            })()

            /**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
            function all(entries) {
              return new Enumerator(this, entries).promise
            }

            /**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
            function race(entries) {
              /*jshint validthis:true */
              var Constructor = this

              if (!isArray(entries)) {
                return new Constructor(function(_, reject) {
                  return reject(
                    new TypeError('You must pass an array to race.')
                  )
                })
              } else {
                return new Constructor(function(resolve, reject) {
                  var length = entries.length
                  for (var i = 0; i < length; i++) {
                    Constructor.resolve(entries[i]).then(resolve, reject)
                  }
                })
              }
            }

            /**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
            function reject$1(reason) {
              /*jshint validthis:true */
              var Constructor = this
              var promise = new Constructor(noop)
              reject(promise, reason)
              return promise
            }

            function needsResolver() {
              throw new TypeError(
                'You must pass a resolver function as the first argument to the promise constructor'
              )
            }

            function needsNew() {
              throw new TypeError(
                "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
              )
            }

            /**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

            var Promise$1 = (function() {
              function Promise(resolver) {
                this[PROMISE_ID] = nextId()
                this._result = this._state = undefined
                this._subscribers = []

                if (noop !== resolver) {
                  typeof resolver !== 'function' && needsResolver()
                  this instanceof Promise
                    ? initializePromise(this, resolver)
                    : needsNew()
                }
              }

              /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

              /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */

              Promise.prototype.catch = function _catch(onRejection) {
                return this.then(null, onRejection)
              }

              /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */

              Promise.prototype.finally = function _finally(callback) {
                var promise = this
                var constructor = promise.constructor

                return promise.then(
                  function(value) {
                    return constructor.resolve(callback()).then(function() {
                      return value
                    })
                  },
                  function(reason) {
                    return constructor.resolve(callback()).then(function() {
                      throw reason
                    })
                  }
                )
              }

              return Promise
            })()

            Promise$1.prototype.then = then
            Promise$1.all = all
            Promise$1.race = race
            Promise$1.resolve = resolve$1
            Promise$1.reject = reject$1
            Promise$1._setScheduler = setScheduler
            Promise$1._setAsap = setAsap
            Promise$1._asap = asap

            /*global self*/
            function polyfill() {
              var local = void 0

              if (typeof global !== 'undefined') {
                local = global
              } else if (typeof self !== 'undefined') {
                local = self
              } else {
                try {
                  local = Function('return this')()
                } catch (e) {
                  throw new Error(
                    'polyfill failed because global object is unavailable in this environment'
                  )
                }
              }

              var P = local.Promise

              if (P) {
                var promiseToString = null
                try {
                  promiseToString = Object.prototype.toString.call(P.resolve())
                } catch (e) {
                  // silently ignored
                }

                if (promiseToString === '[object Promise]' && !P.cast) {
                  return
                }
              }

              local.Promise = Promise$1
            }

            // Strange compat..
            Promise$1.polyfill = polyfill
            Promise$1.Promise = Promise$1

            return Promise$1
          })

          //# sourceMappingURL=es6-promise.map

          /* WEBPACK VAR INJECTION */
        }.call(
          exports,
          __webpack_require__(
            './node_modules/node-libs-browser/node_modules/process/browser.js'
          ),
          __webpack_require__('./node_modules/webpack/buildin/global.js')
        ))

        /***/
      },

      /***/ './node_modules/events/events.js': /***/ function(module, exports) {
        // Copyright Joyent, Inc. and other Node contributors.
        //
        // Permission is hereby granted, free of charge, to any person obtaining a
        // copy of this software and associated documentation files (the
        // "Software"), to deal in the Software without restriction, including
        // without limitation the rights to use, copy, modify, merge, publish,
        // distribute, sublicense, and/or sell copies of the Software, and to permit
        // persons to whom the Software is furnished to do so, subject to the
        // following conditions:
        //
        // The above copyright notice and this permission notice shall be included
        // in all copies or substantial portions of the Software.
        //
        // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
        // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
        // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
        // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
        // USE OR OTHER DEALINGS IN THE SOFTWARE.

        function EventEmitter() {
          this._events = this._events || {}
          this._maxListeners = this._maxListeners || undefined
        }
        module.exports = EventEmitter

        // Backwards-compat with node 0.10.x
        EventEmitter.EventEmitter = EventEmitter

        EventEmitter.prototype._events = undefined
        EventEmitter.prototype._maxListeners = undefined

        // By default EventEmitters will print a warning if more than 10 listeners are
        // added to it. This is a useful default which helps finding memory leaks.
        EventEmitter.defaultMaxListeners = 10

        // Obviously not all Emitters should be limited to 10. This function allows
        // that to be increased. Set to zero for unlimited.
        EventEmitter.prototype.setMaxListeners = function(n) {
          if (!isNumber(n) || n < 0 || isNaN(n))
            throw TypeError('n must be a positive number')
          this._maxListeners = n
          return this
        }

        EventEmitter.prototype.emit = function(type) {
          var er, handler, len, args, i, listeners

          if (!this._events) this._events = {}

          // If there is no 'error' event listener then throw.
          if (type === 'error') {
            if (
              !this._events.error ||
              (isObject(this._events.error) && !this._events.error.length)
            ) {
              er = arguments[1]
              if (er instanceof Error) {
                throw er // Unhandled 'error' event
              } else {
                // At least give some kind of context to the user
                var err = new Error(
                  'Uncaught, unspecified "error" event. (' + er + ')'
                )
                err.context = er
                throw err
              }
            }
          }

          handler = this._events[type]

          if (isUndefined(handler)) return false

          if (isFunction(handler)) {
            switch (arguments.length) {
              // fast cases
              case 1:
                handler.call(this)
                break
              case 2:
                handler.call(this, arguments[1])
                break
              case 3:
                handler.call(this, arguments[1], arguments[2])
                break
              // slower
              default:
                args = Array.prototype.slice.call(arguments, 1)
                handler.apply(this, args)
            }
          } else if (isObject(handler)) {
            args = Array.prototype.slice.call(arguments, 1)
            listeners = handler.slice()
            len = listeners.length
            for (i = 0; i < len; i++) listeners[i].apply(this, args)
          }

          return true
        }

        EventEmitter.prototype.addListener = function(type, listener) {
          var m

          if (!isFunction(listener))
            throw TypeError('listener must be a function')

          if (!this._events) this._events = {}

          // To avoid recursion in the case that type === "newListener"! Before
          // adding it to the listeners, first emit "newListener".
          if (this._events.newListener)
            this.emit(
              'newListener',
              type,
              isFunction(listener.listener) ? listener.listener : listener
            )

          if (!this._events[type])
            // Optimize the case of one listener. Don't need the extra array object.
            this._events[type] = listener
          else if (isObject(this._events[type]))
            // If we've already got an array, just append.
            this._events[type].push(listener)
          else
            // Adding the second element, need to change to array.
            this._events[type] = [this._events[type], listener]

          // Check for listener leak
          if (isObject(this._events[type]) && !this._events[type].warned) {
            if (!isUndefined(this._maxListeners)) {
              m = this._maxListeners
            } else {
              m = EventEmitter.defaultMaxListeners
            }

            if (m && m > 0 && this._events[type].length > m) {
              this._events[type].warned = true
              console.error(
                '(node) warning: possible EventEmitter memory ' +
                  'leak detected. %d listeners added. ' +
                  'Use emitter.setMaxListeners() to increase limit.',
                this._events[type].length
              )
              if (typeof console.trace === 'function') {
                // not supported in IE 10
                console.trace()
              }
            }
          }

          return this
        }

        EventEmitter.prototype.on = EventEmitter.prototype.addListener

        EventEmitter.prototype.once = function(type, listener) {
          if (!isFunction(listener))
            throw TypeError('listener must be a function')

          var fired = false

          function g() {
            this.removeListener(type, g)

            if (!fired) {
              fired = true
              listener.apply(this, arguments)
            }
          }

          g.listener = listener
          this.on(type, g)

          return this
        }

        // emits a 'removeListener' event iff the listener was removed
        EventEmitter.prototype.removeListener = function(type, listener) {
          var list, position, length, i

          if (!isFunction(listener))
            throw TypeError('listener must be a function')

          if (!this._events || !this._events[type]) return this

          list = this._events[type]
          length = list.length
          position = -1

          if (
            list === listener ||
            (isFunction(list.listener) && list.listener === listener)
          ) {
            delete this._events[type]
            if (this._events.removeListener)
              this.emit('removeListener', type, listener)
          } else if (isObject(list)) {
            for (i = length; i-- > 0; ) {
              if (
                list[i] === listener ||
                (list[i].listener && list[i].listener === listener)
              ) {
                position = i
                break
              }
            }

            if (position < 0) return this

            if (list.length === 1) {
              list.length = 0
              delete this._events[type]
            } else {
              list.splice(position, 1)
            }

            if (this._events.removeListener)
              this.emit('removeListener', type, listener)
          }

          return this
        }

        EventEmitter.prototype.removeAllListeners = function(type) {
          var key, listeners

          if (!this._events) return this

          // not listening for removeListener, no need to emit
          if (!this._events.removeListener) {
            if (arguments.length === 0) this._events = {}
            else if (this._events[type]) delete this._events[type]
            return this
          }

          // emit removeListener for all listeners on all events
          if (arguments.length === 0) {
            for (key in this._events) {
              if (key === 'removeListener') continue
              this.removeAllListeners(key)
            }
            this.removeAllListeners('removeListener')
            this._events = {}
            return this
          }

          listeners = this._events[type]

          if (isFunction(listeners)) {
            this.removeListener(type, listeners)
          } else if (listeners) {
            // LIFO order
            while (listeners.length)
              this.removeListener(type, listeners[listeners.length - 1])
          }
          delete this._events[type]

          return this
        }

        EventEmitter.prototype.listeners = function(type) {
          var ret
          if (!this._events || !this._events[type]) ret = []
          else if (isFunction(this._events[type])) ret = [this._events[type]]
          else ret = this._events[type].slice()
          return ret
        }

        EventEmitter.prototype.listenerCount = function(type) {
          if (this._events) {
            var evlistener = this._events[type]

            if (isFunction(evlistener)) return 1
            else if (evlistener) return evlistener.length
          }
          return 0
        }

        EventEmitter.listenerCount = function(emitter, type) {
          return emitter.listenerCount(type)
        }

        function isFunction(arg) {
          return typeof arg === 'function'
        }

        function isNumber(arg) {
          return typeof arg === 'number'
        }

        function isObject(arg) {
          return typeof arg === 'object' && arg !== null
        }

        function isUndefined(arg) {
          return arg === void 0
        }

        /***/
      },

      /***/ './node_modules/foreach/index.js': /***/ function(module, exports) {
        var hasOwn = Object.prototype.hasOwnProperty
        var toString = Object.prototype.toString

        module.exports = function forEach(obj, fn, ctx) {
          if (toString.call(fn) !== '[object Function]') {
            throw new TypeError('iterator must be a function')
          }
          var l = obj.length
          if (l === +l) {
            for (var i = 0; i < l; i++) {
              fn.call(ctx, obj[i], i, obj)
            }
          } else {
            for (var k in obj) {
              if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj)
              }
            }
          }
        }

        /***/
      },

      /***/ './node_modules/global/window.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        /* WEBPACK VAR INJECTION */ ;(function(global) {
          var win

          if (typeof window !== 'undefined') {
            win = window
          } else if (typeof global !== 'undefined') {
            win = global
          } else if (typeof self !== 'undefined') {
            win = self
          } else {
            win = {}
          }

          module.exports = win

          /* WEBPACK VAR INJECTION */
        }.call(
          exports,
          __webpack_require__('./node_modules/webpack/buildin/global.js')
        ))

        /***/
      },

      /***/ './node_modules/grid-styled/dist/Box.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i]
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key]
                }
              }
            }
            return target
          }

        var _styledComponents = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.es.js'
        )

        var _styledComponents2 = _interopRequireDefault(_styledComponents)

        var _styledSystem = __webpack_require__(
          './node_modules/styled-system/dist/index.js'
        )

        var _cleanTag = __webpack_require__('./node_modules/clean-tag/dist.js')

        var _cleanTag2 = _interopRequireDefault(_cleanTag)

        var _theme = __webpack_require__(
          './node_modules/grid-styled/dist/theme.js'
        )

        var _theme2 = _interopRequireDefault(_theme)

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        var Box = (0, _styledComponents2.default)(_cleanTag2.default)(
          [],
          { boxSizing: 'border-box' },
          _styledSystem.width,
          _styledSystem.space,
          _styledSystem.fontSize,
          _styledSystem.color,
          _styledSystem.flex,
          _styledSystem.order
        )

        Box.displayName = 'Box'

        Box.defaultProps = {
          theme: _theme2.default
        }

        Box.propTypes = _extends(
          {},
          _styledSystem.width.propTypes,
          _styledSystem.space.propTypes,
          _styledSystem.fontSize.propTypes,
          _styledSystem.color.propTypes,
          _styledSystem.flex.propTypes,
          _styledSystem.order.propTypes
        )

        exports.default = Box

        /***/
      },

      /***/ './node_modules/grid-styled/dist/Flex.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i]
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key]
                }
              }
            }
            return target
          }

        var _styledSystem = __webpack_require__(
          './node_modules/styled-system/dist/index.js'
        )

        var _Box = __webpack_require__('./node_modules/grid-styled/dist/Box.js')

        var _Box2 = _interopRequireDefault(_Box)

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        var Flex = _Box2.default.extend(
          [],
          { display: 'flex' },
          _styledSystem.flexWrap,
          _styledSystem.flexDirection,
          _styledSystem.alignItems,
          _styledSystem.justifyContent
        )

        Flex.displayName = 'Flex'

        Flex.propTypes = _extends(
          {},
          _styledSystem.flexWrap.propTypes,
          _styledSystem.flexDirection.propTypes,
          _styledSystem.alignItems.propTypes,
          _styledSystem.justifyContent.propTypes
        )

        exports.default = Flex

        /***/
      },

      /***/ './node_modules/grid-styled/dist/index.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })

        var _Box = __webpack_require__('./node_modules/grid-styled/dist/Box.js')

        Object.defineProperty(exports, 'Box', {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_Box).default
          }
        })

        var _Flex = __webpack_require__(
          './node_modules/grid-styled/dist/Flex.js'
        )

        Object.defineProperty(exports, 'Flex', {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_Flex).default
          }
        })

        var _theme = __webpack_require__(
          './node_modules/grid-styled/dist/theme.js'
        )

        Object.defineProperty(exports, 'theme', {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_theme).default
          }
        })

        var _cleanTag = __webpack_require__('./node_modules/clean-tag/dist.js')

        Object.defineProperty(exports, 'div', {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_cleanTag).default
          }
        })

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        /***/
      },

      /***/ './node_modules/grid-styled/dist/theme.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        var breakpoints = ['40em', '52em', '64em']

        var space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

        var fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96, 128]

        var theme = {
          breakpoints: breakpoints,
          space: space,
          fontSizes: fontSizes
        }

        exports.default = theme

        /***/
      },

      /***/ './node_modules/html-tags/html-tags.json': /***/ function(
        module,
        exports
      ) {
        module.exports = [
          'a',
          'abbr',
          'address',
          'area',
          'article',
          'aside',
          'audio',
          'b',
          'base',
          'bdi',
          'bdo',
          'blockquote',
          'body',
          'br',
          'button',
          'canvas',
          'caption',
          'cite',
          'code',
          'col',
          'colgroup',
          'data',
          'datalist',
          'dd',
          'del',
          'details',
          'dfn',
          'dialog',
          'div',
          'dl',
          'dt',
          'em',
          'embed',
          'fieldset',
          'figcaption',
          'figure',
          'footer',
          'form',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'head',
          'header',
          'hgroup',
          'hr',
          'html',
          'i',
          'iframe',
          'img',
          'input',
          'ins',
          'kbd',
          'keygen',
          'label',
          'legend',
          'li',
          'link',
          'main',
          'map',
          'mark',
          'math',
          'menu',
          'menuitem',
          'meta',
          'meter',
          'nav',
          'noscript',
          'object',
          'ol',
          'optgroup',
          'option',
          'output',
          'p',
          'param',
          'picture',
          'pre',
          'progress',
          'q',
          'rb',
          'rp',
          'rt',
          'rtc',
          'ruby',
          's',
          'samp',
          'script',
          'section',
          'select',
          'slot',
          'small',
          'source',
          'span',
          'strong',
          'style',
          'sub',
          'summary',
          'sup',
          'svg',
          'table',
          'tbody',
          'td',
          'template',
          'textarea',
          'tfoot',
          'th',
          'thead',
          'time',
          'title',
          'tr',
          'track',
          'u',
          'ul',
          'var',
          'video',
          'wbr'
        ]

        /***/
      },

      /***/ './node_modules/html-tags/index.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        'use strict'

        module.exports = __webpack_require__(
          './node_modules/html-tags/html-tags.json'
        )

        /***/
      },

      /***/ './node_modules/inherits/inherits_browser.js': /***/ function(
        module,
        exports
      ) {
        if (typeof Object.create === 'function') {
          // implementation from standard node.js 'util' module
          module.exports = function inherits(ctor, superCtor) {
            ctor.super_ = superCtor
            ctor.prototype = Object.create(superCtor.prototype, {
              constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
              }
            })
          }
        } else {
          // old school shim for old browsers
          module.exports = function inherits(ctor, superCtor) {
            ctor.super_ = superCtor
            var TempCtor = function() {}
            TempCtor.prototype = superCtor.prototype
            ctor.prototype = new TempCtor()
            ctor.prototype.constructor = ctor
          }
        }

        /***/
      },

      /***/ './node_modules/is-plain-object/index.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        'use strict'
        /*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

        var isObject = __webpack_require__(
          './node_modules/is-plain-object/node_modules/isobject/index.js'
        )

        function isObjectObject(o) {
          return (
            isObject(o) === true &&
            Object.prototype.toString.call(o) === '[object Object]'
          )
        }

        module.exports = function isPlainObject(o) {
          var ctor, prot

          if (isObjectObject(o) === false) return false

          // If has modified constructor
          ctor = o.constructor
          if (typeof ctor !== 'function') return false

          // If has modified prototype
          prot = ctor.prototype
          if (isObjectObject(prot) === false) return false

          // If constructor does not have an Object-specific method
          if (prot.hasOwnProperty('isPrototypeOf') === false) {
            return false
          }

          // Most likely a plain Object
          return true
        }

        /***/
      },

      /***/ './node_modules/is-plain-object/node_modules/isobject/index.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        'use strict'
        /*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

        module.exports = function isObject(val) {
          return (
            val != null &&
            typeof val === 'object' &&
            Array.isArray(val) === false
          )
        }

        /***/
      },

      /***/ './node_modules/ms/index.js': /***/ function(module, exports) {
        /**
         * Helpers.
         */

        var s = 1000
        var m = s * 60
        var h = m * 60
        var d = h * 24
        var y = d * 365.25

        /**
         * Parse or format the given `val`.
         *
         * Options:
         *
         *  - `long` verbose formatting [false]
         *
         * @param {String|Number} val
         * @param {Object} [options]
         * @throws {Error} throw an error if val is not a non-empty string or a number
         * @return {String|Number}
         * @api public
         */

        module.exports = function(val, options) {
          options = options || {}
          var type = typeof val
          if (type === 'string' && val.length > 0) {
            return parse(val)
          } else if (type === 'number' && isNaN(val) === false) {
            return options.long ? fmtLong(val) : fmtShort(val)
          }
          throw new Error(
            'val is not a non-empty string or a valid number. val=' +
              JSON.stringify(val)
          )
        }

        /**
         * Parse the given `str` and return milliseconds.
         *
         * @param {String} str
         * @return {Number}
         * @api private
         */

        function parse(str) {
          str = String(str)
          if (str.length > 100) {
            return
          }
          var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
            str
          )
          if (!match) {
            return
          }
          var n = parseFloat(match[1])
          var type = (match[2] || 'ms').toLowerCase()
          switch (type) {
            case 'years':
            case 'year':
            case 'yrs':
            case 'yr':
            case 'y':
              return n * y
            case 'days':
            case 'day':
            case 'd':
              return n * d
            case 'hours':
            case 'hour':
            case 'hrs':
            case 'hr':
            case 'h':
              return n * h
            case 'minutes':
            case 'minute':
            case 'mins':
            case 'min':
            case 'm':
              return n * m
            case 'seconds':
            case 'second':
            case 'secs':
            case 'sec':
            case 's':
              return n * s
            case 'milliseconds':
            case 'millisecond':
            case 'msecs':
            case 'msec':
            case 'ms':
              return n
            default:
              return undefined
          }
        }

        /**
         * Short format for `ms`.
         *
         * @param {Number} ms
         * @return {String}
         * @api private
         */

        function fmtShort(ms) {
          if (ms >= d) {
            return Math.round(ms / d) + 'd'
          }
          if (ms >= h) {
            return Math.round(ms / h) + 'h'
          }
          if (ms >= m) {
            return Math.round(ms / m) + 'm'
          }
          if (ms >= s) {
            return Math.round(ms / s) + 's'
          }
          return ms + 'ms'
        }

        /**
         * Long format for `ms`.
         *
         * @param {Number} ms
         * @return {String}
         * @api private
         */

        function fmtLong(ms) {
          return (
            plural(ms, d, 'day') ||
            plural(ms, h, 'hour') ||
            plural(ms, m, 'minute') ||
            plural(ms, s, 'second') ||
            ms + ' ms'
          )
        }

        /**
         * Pluralization helper.
         */

        function plural(ms, n, name) {
          if (ms < n) {
            return
          }
          if (ms < n * 1.5) {
            return Math.floor(ms / n) + ' ' + name
          }
          return Math.ceil(ms / n) + ' ' + name + 's'
        }

        /***/
      },

      /***/ './node_modules/next/router.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        module.exports = __webpack_require__(
          './node_modules/next/dist/lib/router/index.js'
        )

        /***/
      },

      /***/ './node_modules/object-keys/index.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        'use strict'

        // modified from https://github.com/es-shims/es5-shim
        var has = Object.prototype.hasOwnProperty
        var toStr = Object.prototype.toString
        var slice = Array.prototype.slice
        var isArgs = __webpack_require__(
          './node_modules/object-keys/isArguments.js'
        )
        var isEnumerable = Object.prototype.propertyIsEnumerable
        var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString')
        var hasProtoEnumBug = isEnumerable.call(function() {}, 'prototype')
        var dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ]
        var equalsConstructorPrototype = function(o) {
          var ctor = o.constructor
          return ctor && ctor.prototype === o
        }
        var excludedKeys = {
          $console: true,
          $external: true,
          $frame: true,
          $frameElement: true,
          $frames: true,
          $innerHeight: true,
          $innerWidth: true,
          $outerHeight: true,
          $outerWidth: true,
          $pageXOffset: true,
          $pageYOffset: true,
          $parent: true,
          $scrollLeft: true,
          $scrollTop: true,
          $scrollX: true,
          $scrollY: true,
          $self: true,
          $webkitIndexedDB: true,
          $webkitStorageInfo: true,
          $window: true
        }
        var hasAutomationEqualityBug = (function() {
          /* global window */
          if (typeof window === 'undefined') {
            return false
          }
          for (var k in window) {
            try {
              if (
                !excludedKeys['$' + k] &&
                has.call(window, k) &&
                window[k] !== null &&
                typeof window[k] === 'object'
              ) {
                try {
                  equalsConstructorPrototype(window[k])
                } catch (e) {
                  return true
                }
              }
            } catch (e) {
              return true
            }
          }
          return false
        })()
        var equalsConstructorPrototypeIfNotBuggy = function(o) {
          /* global window */
          if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
            return equalsConstructorPrototype(o)
          }
          try {
            return equalsConstructorPrototype(o)
          } catch (e) {
            return false
          }
        }

        var keysShim = function keys(object) {
          var isObject = object !== null && typeof object === 'object'
          var isFunction = toStr.call(object) === '[object Function]'
          var isArguments = isArgs(object)
          var isString = isObject && toStr.call(object) === '[object String]'
          var theKeys = []

          if (!isObject && !isFunction && !isArguments) {
            throw new TypeError('Object.keys called on a non-object')
          }

          var skipProto = hasProtoEnumBug && isFunction
          if (isString && object.length > 0 && !has.call(object, 0)) {
            for (var i = 0; i < object.length; ++i) {
              theKeys.push(String(i))
            }
          }

          if (isArguments && object.length > 0) {
            for (var j = 0; j < object.length; ++j) {
              theKeys.push(String(j))
            }
          } else {
            for (var name in object) {
              if (
                !(skipProto && name === 'prototype') &&
                has.call(object, name)
              ) {
                theKeys.push(String(name))
              }
            }
          }

          if (hasDontEnumBug) {
            var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object)

            for (var k = 0; k < dontEnums.length; ++k) {
              if (
                !(skipConstructor && dontEnums[k] === 'constructor') &&
                has.call(object, dontEnums[k])
              ) {
                theKeys.push(dontEnums[k])
              }
            }
          }
          return theKeys
        }

        keysShim.shim = function shimObjectKeys() {
          if (Object.keys) {
            var keysWorksWithArguments = (function() {
              // Safari 5.0 bug
              return (Object.keys(arguments) || '').length === 2
            })(1, 2)
            if (!keysWorksWithArguments) {
              var originalKeys = Object.keys
              Object.keys = function keys(object) {
                if (isArgs(object)) {
                  return originalKeys(slice.call(object))
                } else {
                  return originalKeys(object)
                }
              }
            }
          } else {
            Object.keys = keysShim
          }
          return Object.keys || keysShim
        }

        module.exports = keysShim

        /***/
      },

      /***/ './node_modules/object-keys/isArguments.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        'use strict'

        var toStr = Object.prototype.toString

        module.exports = function isArguments(value) {
          var str = toStr.call(value)
          var isArgs = str === '[object Arguments]'
          if (!isArgs) {
            isArgs =
              str !== '[object Array]' &&
              value !== null &&
              typeof value === 'object' &&
              typeof value.length === 'number' &&
              value.length >= 0 &&
              toStr.call(value.callee) === '[object Function]'
          }
          return isArgs
        }

        /***/
      },

      /***/ './node_modules/react-load-script/lib/index.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i]
              descriptor.enumerable = descriptor.enumerable || false
              descriptor.configurable = true
              if ('value' in descriptor) descriptor.writable = true
              Object.defineProperty(target, descriptor.key, descriptor)
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps)
            if (staticProps) defineProperties(Constructor, staticProps)
            return Constructor
          }
        })()

        var _react = __webpack_require__(
          './node_modules/react/cjs/react.development.js'
        )

        var _react2 = _interopRequireDefault(_react)

        var _propTypes = __webpack_require__(
          './node_modules/next/node_modules/prop-types/index.js'
        )

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            })
          } else {
            obj[key] = value
          }
          return obj
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          }
          return call &&
            (typeof call === 'object' || typeof call === 'function')
            ? call
            : self
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof superClass
            )
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          )
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass)
        }

        var Script = (function(_React$Component) {
          _inherits(Script, _React$Component)

          // A dictionary mapping script URL to a boolean value indicating if the script
          // has failed to load.

          // A dictionary mapping script URLs to a dictionary mapping
          // component key to component for all components that are waiting
          // for the script to load.
          function Script(props) {
            _classCallCheck(this, Script)

            var _this = _possibleConstructorReturn(
              this,
              (Script.__proto__ || Object.getPrototypeOf(Script)).call(
                this,
                props
              )
            )

            _this.scriptLoaderId = 'id' + _this.constructor.idCount++ // eslint-disable-line space-unary-ops, no-plusplus
            return _this
          }

          // A counter used to generate a unique id for each component that uses
          // ScriptLoaderMixin.

          // A dictionary mapping script URL to a boolean value indicating if the script
          // has already been loaded.

          _createClass(Script, [
            {
              key: 'componentDidMount',
              value: function componentDidMount() {
                var _props = this.props,
                  onError = _props.onError,
                  onLoad = _props.onLoad,
                  url = _props.url

                if (this.constructor.loadedScripts[url]) {
                  onLoad()
                  return
                }

                if (this.constructor.erroredScripts[url]) {
                  onError()
                  return
                }

                // If the script is loading, add the component to the script's observers
                // and return. Otherwise, initialize the script's observers with the component
                // and start loading the script.
                if (this.constructor.scriptObservers[url]) {
                  this.constructor.scriptObservers[url][
                    this.scriptLoaderId
                  ] = this.props
                  return
                }

                this.constructor.scriptObservers[url] = _defineProperty(
                  {},
                  this.scriptLoaderId,
                  this.props
                )

                this.createScript()
              }
            },
            {
              key: 'componentWillUnmount',
              value: function componentWillUnmount() {
                var url = this.props.url

                var observers = this.constructor.scriptObservers[url]

                // If the component is waiting for the script to load, remove the
                // component from the script's observers before unmounting the component.
                if (observers) {
                  delete observers[this.scriptLoaderId]
                }
              }
            },
            {
              key: 'createScript',
              value: function createScript() {
                var _this2 = this

                var _props2 = this.props,
                  onCreate = _props2.onCreate,
                  url = _props2.url,
                  attributes = _props2.attributes

                var script = document.createElement('script')

                onCreate()

                // add 'data-' or non standard attributes to the script tag
                if (attributes) {
                  Object.keys(attributes).forEach(function(prop) {
                    return script.setAttribute(prop, attributes[prop])
                  })
                }

                script.src = url

                // default async to true if not set with custom attributes
                if (!script.hasAttribute('async')) {
                  script.async = 1
                }

                var callObserverFuncAndRemoveObserver = function callObserverFuncAndRemoveObserver(
                  shouldRemoveObserver
                ) {
                  var observers = _this2.constructor.scriptObservers[url]
                  Object.keys(observers).forEach(function(key) {
                    if (shouldRemoveObserver(observers[key])) {
                      delete _this2.constructor.scriptObservers[url][
                        _this2.scriptLoaderId
                      ]
                    }
                  })
                }
                script.onload = function() {
                  _this2.constructor.loadedScripts[url] = true
                  callObserverFuncAndRemoveObserver(function(observer) {
                    observer.onLoad()
                    return true
                  })
                }

                script.onerror = function() {
                  _this2.constructor.erroredScripts[url] = true
                  callObserverFuncAndRemoveObserver(function(observer) {
                    observer.onError()
                    return true
                  })
                }

                document.body.appendChild(script)
              }
            },
            {
              key: 'render',
              value: function render() {
                return null
              }
            }
          ])

          return Script
        })(_react2.default.Component)

        Script.propTypes = {
          attributes: _propTypes.PropTypes.object, // eslint-disable-line react/forbid-prop-types
          onCreate: _propTypes.PropTypes.func,
          onError: _propTypes.PropTypes.func.isRequired,
          onLoad: _propTypes.PropTypes.func.isRequired,
          url: _propTypes.PropTypes.string.isRequired
        }
        Script.defaultProps = {
          attributes: {},
          onCreate: function onCreate() {},
          onError: function onError() {},
          onLoad: function onLoad() {}
        }
        Script.scriptObservers = {}
        Script.loadedScripts = {}
        Script.erroredScripts = {}
        Script.idCount = 0
        exports.default = Script
        module.exports = exports['default']

        /***/
      },

      /***/ './node_modules/styled-components/dist/styled-components.browser.es.js': /***/ function(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict'
        Object.defineProperty(__webpack_exports__, '__esModule', {
          value: true
        })
        /* WEBPACK VAR INJECTION */
        ;(function(process) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'css',
            function() {
              return css
            }
          )
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'keyframes',
            function() {
              return keyframes
            }
          )
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'injectGlobal',
            function() {
              return injectGlobal
            }
          )
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'isStyledComponent',
            function() {
              return isStyledComponent
            }
          )
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'consolidateStreamedStyles',
            function() {
              return consolidateStreamedStyles
            }
          )
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'ThemeProvider',
            function() {
              return ThemeProvider
            }
          )
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'withTheme',
            function() {
              return wrapWithTheme
            }
          )
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'ServerStyleSheet',
            function() {
              return ServerStyleSheet
            }
          )
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'StyleSheetManager',
            function() {
              return StyleSheetManager
            }
          )
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            '__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS',
            function() {
              return __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS
            }
          )
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_is_plain_object__ = __webpack_require__(
            './node_modules/is-plain-object/index.js'
          )
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_is_plain_object___default = __webpack_require__.n(
            __WEBPACK_IMPORTED_MODULE_0_is_plain_object__
          )
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stylis__ = __webpack_require__(
            './node_modules/styled-components/node_modules/stylis/stylis.js'
          )
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stylis___default = __webpack_require__.n(
            __WEBPACK_IMPORTED_MODULE_1_stylis__
          )
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_stylis_rule_sheet__ = __webpack_require__(
            './node_modules/styled-components/node_modules/stylis-rule-sheet/index.js'
          )
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_stylis_rule_sheet___default = __webpack_require__.n(
            __WEBPACK_IMPORTED_MODULE_2_stylis_rule_sheet__
          )
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(
            './node_modules/react/cjs/react.development.js'
          )
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(
            __WEBPACK_IMPORTED_MODULE_3_react__
          )
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(
            './node_modules/next/node_modules/prop-types/index.js'
          )
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(
            __WEBPACK_IMPORTED_MODULE_4_prop_types__
          )
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics__ = __webpack_require__(
            './node_modules/styled-components/node_modules/hoist-non-react-statics/index.js'
          )
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics___default = __webpack_require__.n(
            __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics__
          )

          /**
           * Copyright (c) 2013-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           *
           * @typechecks
           */

          var _uppercasePattern = /([A-Z])/g

          /**
           * Hyphenates a camelcased string, for example:
           *
           *   > hyphenate('backgroundColor')
           *   < "background-color"
           *
           * For CSS style names, use `hyphenateStyleName` instead which works properly
           * with all vendor prefixes, including `ms`.
           *
           * @param {string} string
           * @return {string}
           */
          function hyphenate$2(string) {
            return string.replace(_uppercasePattern, '-$1').toLowerCase()
          }

          var hyphenate_1 = hyphenate$2

          var hyphenate = hyphenate_1

          var msPattern = /^ms-/

          /**
           * Hyphenates a camelcased CSS property name, for example:
           *
           *   > hyphenateStyleName('backgroundColor')
           *   < "background-color"
           *   > hyphenateStyleName('MozTransition')
           *   < "-moz-transition"
           *   > hyphenateStyleName('msTransition')
           *   < "-ms-transition"
           *
           * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
           * is converted to `-ms-`.
           *
           * @param {string} string
           * @return {string}
           */
          function hyphenateStyleName(string) {
            return hyphenate(string).replace(msPattern, '-ms-')
          }

          var hyphenateStyleName_1 = hyphenateStyleName

          //
          var objToCss = function objToCss(obj, prevKey) {
            var css = Object.keys(obj)
              .filter(function(key) {
                var chunk = obj[key]
                return (
                  chunk !== undefined &&
                  chunk !== null &&
                  chunk !== false &&
                  chunk !== ''
                )
              })
              .map(function(key) {
                if (
                  __WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(
                    obj[key]
                  )
                )
                  return objToCss(obj[key], key)
                return hyphenateStyleName_1(key) + ': ' + obj[key] + ';'
              })
              .join(' ')
            return prevKey ? prevKey + ' {\n  ' + css + '\n}' : css
          }

          var flatten = function flatten(chunks, executionContext) {
            return chunks.reduce(function(ruleSet, chunk) {
              /* Remove falsey values */
              if (
                chunk === undefined ||
                chunk === null ||
                chunk === false ||
                chunk === ''
              ) {
                return ruleSet
              }
              /* Flatten ruleSet */
              if (Array.isArray(chunk)) {
                return [].concat(ruleSet, flatten(chunk, executionContext))
              }

              /* Handle other components */
              if (chunk.hasOwnProperty('styledComponentId')) {
                // $FlowFixMe not sure how to make this pass
                return [].concat(ruleSet, ['.' + chunk.styledComponentId])
              }

              /* Either execute or defer the function */
              if (typeof chunk === 'function') {
                return executionContext
                  ? ruleSet.concat.apply(
                      ruleSet,
                      flatten([chunk(executionContext)], executionContext)
                    )
                  : ruleSet.concat(chunk)
              }

              /* Handle objects */
              return ruleSet.concat(
                // $FlowFixMe have to add %checks somehow to isPlainObject
                __WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(chunk)
                  ? objToCss(chunk)
                  : chunk.toString()
              )
            }, [])
          }

          //
          // NOTE: This stylis instance is only used to split rules from SSR'd style tags
          var stylisSplitter = new __WEBPACK_IMPORTED_MODULE_1_stylis___default.a(
            {
              global: false,
              cascade: false,
              keyframe: false,
              prefix: false,
              compress: false,
              semicolon: true
            }
          )

          var stylis = new __WEBPACK_IMPORTED_MODULE_1_stylis___default.a({
            global: false,
            cascade: true,
            keyframe: false,
            prefix: true,
            compress: false,
            semicolon: false // NOTE: This means "autocomplete missing semicolons"
          })

          // Wrap `insertRulePlugin to build a list of rules,
          // and then make our own plugin to return the rules. This
          // makes it easier to hook into the existing SSR architecture

          var parsingRules = []
          // eslint-disable-next-line consistent-return
          var returnRulesPlugin = function returnRulesPlugin(context) {
            if (context === -2) {
              var parsedRules = parsingRules
              parsingRules = []
              return parsedRules
            }
          }

          var parseRulesPlugin = __WEBPACK_IMPORTED_MODULE_2_stylis_rule_sheet___default()(
            function(rule) {
              parsingRules.push(rule)
            }
          )

          stylis.use([parseRulesPlugin, returnRulesPlugin])
          stylisSplitter.use([parseRulesPlugin, returnRulesPlugin])

          var stringifyRules = function stringifyRules(
            rules,
            selector,
            prefix
          ) {
            var flatCSS = rules.join('').replace(/^\s*\/\/.*$/gm, '') // replace JS comments

            var cssStr =
              selector && prefix
                ? prefix + ' ' + selector + ' { ' + flatCSS + ' }'
                : flatCSS

            return stylis(prefix || !selector ? '' : selector, cssStr)
          }

          var splitByRules = function splitByRules(css) {
            return stylisSplitter('', css)
          }

          //

          function isStyledComponent(target) /* : %checks */ {
            return (
              typeof target === 'function' &&
              typeof target.styledComponentId === 'string'
            )
          }

          //

          /* This function is DEPRECATED and will be removed on the next major version release.
 * It was needed to rehydrate all style blocks prepended to chunks before React
 * tries to rehydrate its HTML stream. Since the master StyleSheet will now detect
 * the use of streamed style tags and will perform the rehydration earlier when needed
 * this function will not be needed anymore */
          function consolidateStreamedStyles() {
            if (true) {
              // eslint-disable-next-line no-console
              console.warn(
                'styled-components automatically does streaming SSR rehydration now.\n' +
                  'Calling consolidateStreamedStyles manually is no longer necessary and a noop now.\n' +
                  '- Please remove the consolidateStreamedStyles call from your client.'
              )
            }
          }

          //
          /* eslint-disable no-bitwise */

          /* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */
          var charsLength = 52

          /* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
          var getAlphabeticChar = function getAlphabeticChar(code) {
            return String.fromCharCode(code + (code > 25 ? 39 : 97))
          }

          /* input a number, usually a hash and convert it to base-52 */
          var generateAlphabeticName = function generateAlphabeticName(code) {
            var name = ''
            var x = void 0

            /* get a char and divide by alphabet-length */
            for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
              name = getAlphabeticChar(x % charsLength) + name
            }

            return getAlphabeticChar(x % charsLength) + name
          }

          //

          var interleave = function(strings, interpolations) {
            return interpolations.reduce(
              function(array, interp, i) {
                return array.concat(interp, strings[i + 1])
              },
              [strings[0]]
            )
          }

          //
          var css = function(strings) {
            for (
              var _len = arguments.length,
                interpolations = Array(_len > 1 ? _len - 1 : 0),
                _key = 1;
              _key < _len;
              _key++
            ) {
              interpolations[_key - 1] = arguments[_key]
            }

            return flatten(interleave(strings, interpolations))
          }

          var stream = {}

          //

          var SC_ATTR =
            (typeof process !== 'undefined' && process.env.SC_ATTR) ||
            'data-styled-components'
          var SC_STREAM_ATTR = 'data-styled-streamed'
          var CONTEXT_KEY = '__styled-components-stylesheet__'

          var IS_BROWSER =
            typeof window !== 'undefined' && 'HTMLElement' in window

          var DISABLE_SPEEDY =
            (typeof false === 'boolean' && false) ||
            'development' !== 'production'

          //
          var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm

          var extractComps = function(maybeCSS) {
            var css = '' + (maybeCSS || '') // Definitely a string, and a clone
            var existingComponents = []
            css.replace(SC_COMPONENT_ID, function(
              match,
              componentId,
              matchIndex
            ) {
              existingComponents.push({
                componentId: componentId,
                matchIndex: matchIndex
              })
              return match
            })
            return existingComponents.map(function(_ref, i) {
              var componentId = _ref.componentId,
                matchIndex = _ref.matchIndex

              var nextComp = existingComponents[i + 1]
              var cssFromDOM = nextComp
                ? css.slice(matchIndex, nextComp.matchIndex)
                : css.slice(matchIndex)
              return { componentId: componentId, cssFromDOM: cssFromDOM }
            })
          }

          //
          /* eslint-disable camelcase, no-undef */

          var getNonce = function() {
            return true ? __webpack_require__.nc : null
          }

          //
          // Helper to call a given function, only once
          var once = function(cb) {
            var called = false

            return function() {
              if (!called) {
                called = true
                cb()
              }
            }
          }

          var classCallCheck = function(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function')
            }
          }

          var createClass = (function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i]
                descriptor.enumerable = descriptor.enumerable || false
                descriptor.configurable = true
                if ('value' in descriptor) descriptor.writable = true
                Object.defineProperty(target, descriptor.key, descriptor)
              }
            }

            return function(Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps)
              if (staticProps) defineProperties(Constructor, staticProps)
              return Constructor
            }
          })()

          var _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]

                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key]
                  }
                }
              }

              return target
            }

          var inherits = function(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof superClass
              )
            }

            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true
                }
              }
            )
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass)
          }

          var objectWithoutProperties = function(obj, keys) {
            var target = {}

            for (var i in obj) {
              if (keys.indexOf(i) >= 0) continue
              if (!Object.prototype.hasOwnProperty.call(obj, i)) continue
              target[i] = obj[i]
            }

            return target
          }

          var possibleConstructorReturn = function(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            }

            return call &&
              (typeof call === 'object' || typeof call === 'function')
              ? call
              : self
          }

          //
          /* These are helpers for the StyleTags to keep track of the injected
 * rule names for each (component) ID that they're keeping track of.
 * They're crucial for detecting whether a name has already been
 * injected.
 * (This excludes rehydrated names) */

          /* adds a new ID:name pairing to a names dictionary */
          var addNameForId = function addNameForId(names, id, name) {
            if (name) {
              // eslint-disable-next-line no-param-reassign
              var namesForId = names[id] || (names[id] = Object.create(null))
              namesForId[name] = true
            }
          }

          /* resets an ID entirely by overwriting it in the dictionary */
          var resetIdNames = function resetIdNames(names, id) {
            // eslint-disable-next-line no-param-reassign
            names[id] = Object.create(null)
          }

          /* factory for a names dictionary checking the existance of an ID:name pairing */
          var hasNameForId = function hasNameForId(names) {
            return function(id, name) {
              return names[id] !== undefined && names[id][name]
            }
          }

          /* stringifies names for the html/element output */
          var stringifyNames = function stringifyNames(names) {
            var str = ''
            // eslint-disable-next-line guard-for-in
            for (var id in names) {
              str += Object.keys(names[id]).join(' ') + ' '
            }
            return str.trim()
          }

          /* clones the nested names dictionary */
          var cloneNames = function cloneNames(names) {
            var clone = Object.create(null)
            // eslint-disable-next-line guard-for-in
            for (var id in names) {
              clone[id] = _extends({}, names[id])
            }
            return clone
          }

          //
          /* These are helpers that deal with the insertRule (aka speedy) API
 * They are used in the StyleTags and specifically the speedy tag
 */

          /* retrieve a sheet for a given style tag */
          var sheetForTag = function sheetForTag(tag) {
            // $FlowFixMe
            if (tag.sheet) return tag.sheet

            /* Firefox quirk requires us to step through all stylesheets to find one owned by the given tag */
            var size = document.styleSheets.length
            for (var i = 0; i < size; i += 1) {
              var sheet = document.styleSheets[i]
              // $FlowFixMe
              if (sheet.ownerNode === tag) return sheet
            }

            /* we should always be able to find a tag */
            throw new Error()
          }

          /* insert a rule safely and return whether it was actually injected */
          var safeInsertRule = function safeInsertRule(sheet, cssRule, index) {
            /* abort early if cssRule string is falsy */
            if (!cssRule) return false

            var maxIndex = sheet.cssRules.length

            try {
              /* use insertRule and cap passed index with maxIndex (no of cssRules) */
              sheet.insertRule(cssRule, index <= maxIndex ? index : maxIndex)
            } catch (err) {
              /* any error indicates an invalid rule */
              return false
            }

            return true
          }

          /* deletes `size` rules starting from `removalIndex` */
          var deleteRules = function deleteRules(sheet, removalIndex, size) {
            var lowerBound = removalIndex - size
            for (var i = removalIndex; i >= lowerBound; i -= 1) {
              sheet.deleteRule(i)
            }
          }

          //
          /* eslint-disable flowtype/object-type-delimiter */
          /* eslint-disable react/prop-types */

          /* this error is used for makeStyleTag */
          var parentNodeUnmountedErr = true
            ? "\nTrying to insert a new style tag, but the given Node is unmounted!\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n".trim()
            : ''

          /* this error is used for tags */
          var throwCloneTagErr = function throwCloneTagErr() {
            throw new Error(
              true
                ? '\nThe clone method cannot be used on the client!\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n'.trim()
                : ''
            )
          }

          /* this marker separates component styles and is important for rehydration */
          var makeTextMarker = function makeTextMarker(id) {
            return '\n/* sc-component-id: ' + id + ' */\n'
          }

          /* add up all numbers in array up until and including the index */
          var addUpUntilIndex = function addUpUntilIndex(sizes, index) {
            var totalUpToIndex = 0
            for (var i = 0; i <= index; i += 1) {
              totalUpToIndex += sizes[i]
            }

            return totalUpToIndex
          }

          /* create a new style tag after lastEl */
          var makeStyleTag = function makeStyleTag(
            target,
            tagEl,
            insertBefore
          ) {
            var el = document.createElement('style')
            el.setAttribute(SC_ATTR, '')

            var nonce = getNonce()
            if (nonce) {
              el.setAttribute('nonce', nonce)
            }

            /* Work around insertRule quirk in EdgeHTML */
            el.appendChild(document.createTextNode(''))

            if (target && !tagEl) {
              /* Append to target when no previous element was passed */
              target.appendChild(el)
            } else {
              if (!tagEl || !target || !tagEl.parentNode) {
                throw new Error(parentNodeUnmountedErr)
              }

              /* Insert new style tag after the previous one */
              tagEl.parentNode.insertBefore(
                el,
                insertBefore ? tagEl : tagEl.nextSibling
              )
            }

            return el
          }

          /* takes a css factory function and outputs an html styled tag factory */
          var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
            return function(additionalAttrs) {
              var nonce = getNonce()
              var attrs = [
                nonce && 'nonce="' + nonce + '"',
                SC_ATTR + '="' + stringifyNames(names) + '"',
                additionalAttrs
              ]

              var htmlAttr = attrs.filter(Boolean).join(' ')
              return '<style ' + htmlAttr + '>' + css() + '</style>'
            }
          }

          /* takes a css factory function and outputs an element factory */
          var wrapAsElement = function wrapAsElement(css, names) {
            return function() {
              var _props

              var props = ((_props = {}),
              (_props[SC_ATTR] = stringifyNames(names)),
              _props)

              var nonce = getNonce()
              if (nonce) {
                // $FlowFixMe
                props.nonce = nonce
              }

              // eslint-disable-next-line react/no-danger
              return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                'style',
                _extends({}, props, {
                  dangerouslySetInnerHTML: { __html: css() }
                })
              )
            }
          }

          var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(
            markers
          ) {
            return function() {
              return Object.keys(markers)
            }
          }

          /* speedy tags utilise insertRule */
          var makeSpeedyTag = function makeSpeedyTag(el, getImportRuleTag) {
            var names = Object.create(null)
            var markers = Object.create(null)
            var sizes = []

            var extractImport = getImportRuleTag !== undefined
            /* indicates whther getImportRuleTag was called */
            var usedImportRuleTag = false

            var insertMarker = function insertMarker(id) {
              var prev = markers[id]
              if (prev !== undefined) {
                return prev
              }

              var marker = (markers[id] = sizes.length)
              sizes.push(0)
              resetIdNames(names, id)
              return marker
            }

            var insertRules = function insertRules(id, cssRules, name) {
              var marker = insertMarker(id)
              var sheet = sheetForTag(el)
              var insertIndex = addUpUntilIndex(sizes, marker)

              var injectedRules = 0
              var importRules = []
              var cssRulesSize = cssRules.length

              for (var i = 0; i < cssRulesSize; i += 1) {
                var cssRule = cssRules[i]
                var mayHaveImport = extractImport /* @import rules are reordered to appear first */
                if (mayHaveImport && cssRule.indexOf('@import') !== -1) {
                  importRules.push(cssRule)
                } else if (
                  safeInsertRule(sheet, cssRule, insertIndex + injectedRules)
                ) {
                  mayHaveImport = false
                  injectedRules += 1
                }
              }

              if (extractImport && importRules.length > 0) {
                usedImportRuleTag = true
                // $FlowFixMe
                getImportRuleTag().insertRules(id + '-import', importRules)
              }

              sizes[marker] += injectedRules /* add up no of injected rules */
              addNameForId(names, id, name)
            }

            var removeRules = function removeRules(id) {
              var marker = markers[id]
              if (marker === undefined) return

              var size = sizes[marker]
              var sheet = sheetForTag(el)
              var removalIndex = addUpUntilIndex(sizes, marker)
              deleteRules(sheet, removalIndex, size)
              sizes[marker] = 0
              resetIdNames(names, id)

              if (extractImport && usedImportRuleTag) {
                // $FlowFixMe
                getImportRuleTag().removeRules(id + '-import')
              }
            }

            var css = function css() {
              var _sheetForTag = sheetForTag(el),
                cssRules = _sheetForTag.cssRules

              var str = ''
              var i = 0

              // eslint-disable-next-line guard-for-in
              for (var id in markers) {
                str += makeTextMarker(id)
                var end = markers[id] + i
                for (; i < end; i += 1) {
                  str += cssRules[i].cssText
                }
              }

              return str
            }

            return {
              styleTag: el,
              getIds: getIdsFromMarkersFactory(markers),
              hasNameForId: hasNameForId(names),
              insertMarker: insertMarker,
              insertRules: insertRules,
              removeRules: removeRules,
              css: css,
              toHTML: wrapAsHtmlTag(css, names),
              toElement: wrapAsElement(css, names),
              clone: throwCloneTagErr
            }
          }

          var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
            var names = Object.create(null)
            var markers = Object.create(null)

            var extractImport = getImportRuleTag !== undefined
            var makeTextNode = function makeTextNode(id) {
              return document.createTextNode(makeTextMarker(id))
            }

            /* indicates whther getImportRuleTag was called */
            var usedImportRuleTag = false

            var insertMarker = function insertMarker(id) {
              var prev = markers[id]
              if (prev !== undefined) {
                return prev
              }

              var marker = (markers[id] = makeTextNode(id))
              el.appendChild(marker)
              names[id] = Object.create(null)
              return marker
            }

            var insertRules = function insertRules(id, cssRules, name) {
              var marker = insertMarker(id)
              var importRules = []
              var cssRulesSize = cssRules.length

              for (var i = 0; i < cssRulesSize; i += 1) {
                var rule = cssRules[i]
                var mayHaveImport = extractImport
                if (mayHaveImport && rule.indexOf('@import') !== -1) {
                  importRules.push(rule)
                } else {
                  mayHaveImport = false
                  var separator = i === cssRulesSize - 1 ? '' : ' '
                  marker.appendData('' + rule + separator)
                }
              }

              addNameForId(names, id, name)

              if (extractImport && importRules.length > 0) {
                usedImportRuleTag = true
                // $FlowFixMe
                getImportRuleTag().insertRules(id + '-import', importRules)
              }
            }

            var removeRules = function removeRules(id) {
              var marker = markers[id]
              if (marker === undefined) return

              /* create new empty text node and replace the current one */
              var newMarker = makeTextNode(id)
              el.replaceChild(newMarker, marker)
              markers[id] = newMarker
              resetIdNames(names, id)

              if (extractImport && usedImportRuleTag) {
                // $FlowFixMe
                getImportRuleTag().removeRules(id + '-import')
              }
            }

            var css = function css() {
              var str = ''
              // eslint-disable-next-line guard-for-in
              for (var id in markers) {
                str += markers[id].data
              }
              return str
            }

            return {
              styleTag: el,
              getIds: getIdsFromMarkersFactory(markers),
              hasNameForId: hasNameForId(names),
              insertMarker: insertMarker,
              insertRules: insertRules,
              removeRules: removeRules,
              css: css,
              toHTML: wrapAsHtmlTag(css, names),
              toElement: wrapAsElement(css, names),
              clone: throwCloneTagErr
            }
          }

          var makeServerTagInternal = function makeServerTagInternal(
            namesArg,
            markersArg
          ) {
            var names = namesArg === undefined ? Object.create(null) : namesArg
            var markers =
              markersArg === undefined ? Object.create(null) : markersArg

            var insertMarker = function insertMarker(id) {
              var prev = markers[id]
              if (prev !== undefined) {
                return prev
              }

              return (markers[id] = [''])
            }

            var insertRules = function insertRules(id, cssRules, name) {
              var marker = insertMarker(id)
              marker[0] += cssRules.join(' ')
              addNameForId(names, id, name)
            }

            var removeRules = function removeRules(id) {
              var marker = markers[id]
              if (marker === undefined) return
              marker[0] = ''
              resetIdNames(names, id)
            }

            var css = function css() {
              var str = ''
              // eslint-disable-next-line guard-for-in
              for (var id in markers) {
                var cssForId = markers[id][0]
                if (cssForId) {
                  str += makeTextMarker(id) + cssForId
                }
              }
              return str
            }

            var clone = function clone() {
              var namesClone = cloneNames(names)
              var markersClone = Object.create(null)

              // eslint-disable-next-line guard-for-in
              for (var id in markers) {
                markersClone[id] = [markers[id][0]]
              }

              return makeServerTagInternal(namesClone, markersClone)
            }

            var tag = {
              styleTag: null,
              getIds: getIdsFromMarkersFactory(markers),
              hasNameForId: hasNameForId(names),
              insertMarker: insertMarker,
              insertRules: insertRules,
              removeRules: removeRules,
              css: css,
              toHTML: wrapAsHtmlTag(css, names),
              toElement: wrapAsElement(css, names),
              clone: clone
            }

            return tag
          }

          var makeServerTag = function makeServerTag() {
            return makeServerTagInternal()
          }

          var makeTag = function makeTag(
            target,
            tagEl,
            forceServer,
            insertBefore,
            getImportRuleTag
          ) {
            if (IS_BROWSER && !forceServer) {
              var el = makeStyleTag(target, tagEl, insertBefore)
              if (DISABLE_SPEEDY) {
                return makeBrowserTag(el, getImportRuleTag)
              } else {
                return makeSpeedyTag(el, getImportRuleTag)
              }
            }

            return makeServerTag()
          }

          /* wraps a given tag so that rehydration is performed once when necessary */
          var makeRehydrationTag = function makeRehydrationTag(
            tag,
            els,
            extracted,
            names,
            immediateRehydration
          ) {
            /* rehydration function that adds all rules to the new tag */
            var rehydrate = once(function() {
              /* add all extracted components to the new tag */
              for (var i = 0; i < extracted.length; i += 1) {
                var _extracted$i = extracted[i],
                  componentId = _extracted$i.componentId,
                  cssFromDOM = _extracted$i.cssFromDOM

                var cssRules = splitByRules(cssFromDOM)
                tag.insertRules(componentId, cssRules)
              }

              /* remove old HTMLStyleElements, since they have been rehydrated */
              for (var _i = 0; _i < els.length; _i += 1) {
                var el = els[_i]
                if (el.parentNode) {
                  el.parentNode.removeChild(el)
                }
              }
            })

            if (immediateRehydration) rehydrate()

            return _extends({}, tag, {
              /* add rehydration hook to insertion methods */
              insertMarker: function insertMarker(id) {
                rehydrate()
                return tag.insertMarker(id)
              },
              insertRules: function insertRules(id, cssRules, name) {
                rehydrate()
                return tag.insertRules(id, cssRules, name)
              }
            })
          }

          //

          /* determine the maximum number of components before tags are sharded */
          var MAX_SIZE = void 0
          if (IS_BROWSER) {
            /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
            MAX_SIZE = DISABLE_SPEEDY ? 40 : 1000
          } else {
            /* for servers we do not need to shard at all */
            MAX_SIZE = -1
          }

          var sheetRunningId = 0
          var master = void 0

          var StyleSheet = (function() {
            /* a map from ids to tags */
            /* deferred rules for a given id */
            /* this is used for not reinjecting rules via hasNameForId() */
            /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */
            /* a list of tags belonging to this StyleSheet */
            /* a tag for import rules */
            /* current capacity until a new tag must be created */
            /* children (aka clones) of this StyleSheet inheriting all and future injections */

            function StyleSheet() {
              var _this = this

              var target =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : IS_BROWSER ? document.head : null
              var forceServer =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : false
              classCallCheck(this, StyleSheet)

              this.getImportRuleTag = function() {
                var importRuleTag = _this.importRuleTag

                if (importRuleTag !== undefined) {
                  return importRuleTag
                }

                var firstTag = _this.tags[0]
                var insertBefore = true

                return (_this.importRuleTag = makeTag(
                  _this.target,
                  firstTag ? firstTag.styleTag : null,
                  _this.forceServer,
                  insertBefore
                ))
              }

              this.id = sheetRunningId += 1
              this.sealed = false
              this.forceServer = forceServer
              this.target = forceServer ? null : target
              this.tagMap = {}
              this.deferred = {}
              this.rehydratedNames = {}
              this.ignoreRehydratedNames = {}
              this.tags = []
              this.capacity = 1
              this.clones = []
            }

            /* rehydrate all SSR'd style tags */

            StyleSheet.prototype.rehydrate = function rehydrate() {
              if (!IS_BROWSER || this.forceServer) {
                return this
              }

              var els = []
              var names = []
              var extracted = []
              var isStreamed = false

              /* retrieve all of our SSR style elements from the DOM */
              var nodes = document.querySelectorAll('style[' + SC_ATTR + ']')
              var nodesSize = nodes.length

              /* abort rehydration if no previous style tags were found */
              if (nodesSize === 0) {
                return this
              }

              for (var i = 0; i < nodesSize; i += 1) {
                // $FlowFixMe: We can trust that all elements in this query are style elements
                var el = nodes[i]

                /* check if style tag is a streamed tag */
                isStreamed = !!el.getAttribute(SC_STREAM_ATTR) || isStreamed

                /* retrieve all component names */
                var elNames = (el.getAttribute(SC_ATTR) || '')
                  .trim()
                  .split(/\s+/)
                var elNamesSize = elNames.length
                for (var j = 0; j < elNamesSize; j += 1) {
                  var name = elNames[j]
                  /* add rehydrated name to sheet to avoid readding styles */
                  this.rehydratedNames[name] = true
                  names.push(name)
                }

                /* extract all components and their CSS */
                extracted = extracted.concat(extractComps(el.textContent))
                /* store original HTMLStyleElement */
                els.push(el)
              }

              /* abort rehydration if nothing was extracted */
              var extractedSize = extracted.length
              if (extractedSize === 0) {
                return this
              }

              /* create a tag to be used for rehydration */
              var tag = this.makeTag(null)
              var rehydrationTag = makeRehydrationTag(
                tag,
                els,
                extracted,
                names,
                isStreamed
              )

              /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */
              this.capacity = Math.max(1, MAX_SIZE - extractedSize)
              this.tags.push(rehydrationTag)

              /* retrieve all component ids */
              for (var _j = 0; _j < extractedSize; _j += 1) {
                this.tagMap[extracted[_j].componentId] = rehydrationTag
              }

              return this
            }

            /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
   * The master StyleSheet is targeted by injectGlobal, keyframes, and components outside of any
    * StyleSheetManager's context */

            /* reset the internal "master" instance */
            StyleSheet.reset = function reset() {
              var forceServer =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : false

              master = new StyleSheet(undefined, forceServer).rehydrate()
            }

            /* adds "children" to the StyleSheet that inherit all of the parents' rules
   * while their own rules do not affect the parent */

            StyleSheet.prototype.clone = function clone() {
              var sheet = new StyleSheet(this.target, this.forceServer)
              /* add to clone array */
              this.clones.push(sheet)

              /* clone all tags */
              sheet.tags = this.tags.map(function(tag) {
                var ids = tag.getIds()
                var newTag = tag.clone()

                /* reconstruct tagMap */
                for (var i = 0; i < ids.length; i += 1) {
                  sheet.tagMap[ids[i]] = newTag
                }

                return newTag
              })

              /* clone other maps */
              sheet.rehydratedNames = _extends({}, this.rehydratedNames)
              sheet.deferred = _extends({}, this.deferred)

              return sheet
            }

            /* force StyleSheet to create a new tag on the next injection */

            StyleSheet.prototype.sealAllTags = function sealAllTags() {
              this.capacity = 1
              this.sealed = true
            }

            StyleSheet.prototype.makeTag = function makeTag$$1(tag) {
              var lastEl = tag ? tag.styleTag : null
              var insertBefore = false

              return makeTag(
                this.target,
                lastEl,
                this.forceServer,
                insertBefore,
                this.getImportRuleTag
              )
            }

            /* get a tag for a given componentId, assign the componentId to one, or shard */
            StyleSheet.prototype.getTagForId = function getTagForId(id) {
              /* simply return a tag, when the componentId was already assigned one */
              var prev = this.tagMap[id]
              if (prev !== undefined && !this.sealed) {
                return prev
              }

              var tag = this.tags[this.tags.length - 1]

              /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */
              this.capacity -= 1
              if (this.capacity === 0) {
                this.capacity = MAX_SIZE
                this.sealed = false
                tag = this.makeTag(tag)
                this.tags.push(tag)
              }

              return (this.tagMap[id] = tag)
            }

            /* mainly for injectGlobal to check for its id */

            StyleSheet.prototype.hasId = function hasId(id) {
              return this.tagMap[id] !== undefined
            }

            /* caching layer checking id+name to already have a corresponding tag and injected rules */

            StyleSheet.prototype.hasNameForId = function hasNameForId(
              id,
              name
            ) {
              /* exception for rehydrated names which are checked separately */
              if (
                this.ignoreRehydratedNames[id] === undefined &&
                this.rehydratedNames[name]
              ) {
                return true
              }

              var tag = this.tagMap[id]
              return tag !== undefined && tag.hasNameForId(id, name)
            }

            /* registers a componentId and registers it on its tag */

            StyleSheet.prototype.deferredInject = function deferredInject(
              id,
              cssRules
            ) {
              /* don't inject when the id is already registered */
              if (this.tagMap[id] !== undefined) return

              var clones = this.clones

              for (var i = 0; i < clones.length; i += 1) {
                clones[i].deferredInject(id, cssRules)
              }

              this.getTagForId(id).insertMarker(id)
              this.deferred[id] = cssRules
            }

            /* injects rules for a given id with a name that will need to be cached */

            StyleSheet.prototype.inject = function inject(id, cssRules, name) {
              var clones = this.clones

              for (var i = 0; i < clones.length; i += 1) {
                clones[i].inject(id, cssRules, name)
              }

              /* add deferred rules for component */
              var injectRules = cssRules
              var deferredRules = this.deferred[id]
              if (deferredRules !== undefined) {
                injectRules = deferredRules.concat(injectRules)
                delete this.deferred[id]
              }

              var tag = this.getTagForId(id)
              tag.insertRules(id, injectRules, name)
            }

            /* removes all rules for a given id, which doesn't remove its marker but resets it */

            StyleSheet.prototype.remove = function remove(id) {
              var tag = this.tagMap[id]
              if (tag === undefined) return

              var clones = this.clones

              for (var i = 0; i < clones.length; i += 1) {
                clones[i].remove(id)
              }

              /* remove all rules from the tag */
              tag.removeRules(id)
              /* ignore possible rehydrated names */
              this.ignoreRehydratedNames[id] = true
              /* delete possible deferred rules */
              delete this.deferred[id]
            }

            StyleSheet.prototype.toHTML = function toHTML() {
              return this.tags
                .map(function(tag) {
                  return tag.toHTML()
                })
                .join('')
            }

            StyleSheet.prototype.toReactElements = function toReactElements() {
              var id = this.id

              return this.tags.map(function(tag, i) {
                var key = 'sc-' + id + '-' + i
                return Object(
                  __WEBPACK_IMPORTED_MODULE_3_react__['cloneElement']
                )(tag.toElement(), { key: key })
              })
            }

            createClass(StyleSheet, null, [
              {
                key: 'master',
                get: function get$$1() {
                  return master || (master = new StyleSheet().rehydrate())
                }

                /* NOTE: This is just for backwards-compatibility with jest-styled-components */
              },
              {
                key: 'instance',
                get: function get$$1() {
                  return StyleSheet.master
                }
              }
            ])
            return StyleSheet
          })()

          var _StyleSheetManager$ch

          //
          /* this error is used for makeStyleTag */
          var targetPropErr = true
            ? '\nThe StyleSheetManager expects a valid target or sheet prop!\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n'.trim()
            : ''

          var StyleSheetManager = (function(_Component) {
            inherits(StyleSheetManager, _Component)

            function StyleSheetManager() {
              classCallCheck(this, StyleSheetManager)
              return possibleConstructorReturn(
                this,
                _Component.apply(this, arguments)
              )
            }

            StyleSheetManager.prototype.getChildContext = function getChildContext() {
              var _ref

              return (_ref = {}), (_ref[CONTEXT_KEY] = this.sheetInstance), _ref
            }

            StyleSheetManager.prototype.componentWillMount = function componentWillMount() {
              if (this.props.sheet) {
                this.sheetInstance = this.props.sheet
              } else if (this.props.target) {
                this.sheetInstance = new StyleSheet(this.props.target)
              } else {
                throw new Error(targetPropErr)
              }
            }

            StyleSheetManager.prototype.render = function render() {
              /* eslint-disable react/prop-types */
              // Flow v0.43.1 will report an error accessing the `children` property,
              // but v0.47.0 will not. It is necessary to use a type cast instead of
              // a "fixme" comment to satisfy both Flow versions.
              return __WEBPACK_IMPORTED_MODULE_3_react___default.a.Children.only(
                this.props.children
              )
            }

            return StyleSheetManager
          })(__WEBPACK_IMPORTED_MODULE_3_react__['Component'])

          StyleSheetManager.childContextTypes = ((_StyleSheetManager$ch = {}),
          (_StyleSheetManager$ch[
            CONTEXT_KEY
          ] = __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([
            __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.instanceOf(
              StyleSheet
            ),
            __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.instanceOf(
              ServerStyleSheet
            )
          ]).isRequired),
          _StyleSheetManager$ch)

          true
            ? (StyleSheetManager.propTypes = {
                sheet: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType(
                  [
                    __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.instanceOf(
                      StyleSheet
                    ),
                    __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.instanceOf(
                      ServerStyleSheet
                    )
                  ]
                ),
                target: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.shape(
                  {
                    appendChild:
                      __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func
                        .isRequired
                  }
                )
              })
            : void 0

          //
          /* eslint-disable no-underscore-dangle */
          /* this error is used for makeStyleTag */
          var sheetClosedErr = true
            ? "\nCan't collect styles once you've consumed a ServerStyleSheet's styles!\nServerStyleSheet is a one off instance for each server-side render cycle.\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n".trim()
            : ''

          var streamBrowserErr = true
            ? 'Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.'
            : ''

          var ServerStyleSheet = (function() {
            function ServerStyleSheet() {
              classCallCheck(this, ServerStyleSheet)

              /* The master sheet might be reset, so keep a reference here */
              this.masterSheet = StyleSheet.master
              this.instance = this.masterSheet.clone()
              this.closed = false
            }

            ServerStyleSheet.prototype.complete = function complete() {
              if (!this.closed) {
                /* Remove closed StyleSheets from the master sheet */
                var index = this.masterSheet.clones.indexOf(this.instance)
                this.masterSheet.clones.splice(index, 1)
                this.closed = true
              }
            }

            ServerStyleSheet.prototype.collectStyles = function collectStyles(
              children
            ) {
              if (this.closed) {
                throw new Error(sheetClosedErr)
              }

              return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                StyleSheetManager,
                { sheet: this.instance },
                children
              )
            }

            ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
              this.complete()
              return this.instance.toHTML()
            }

            ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
              this.complete()
              return this.instance.toReactElements()
            }

            ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(
              readableStream
            ) {
              var _this = this

              {
                throw new Error(streamBrowserErr)
              }

              /* the tag index keeps track of which tags have already been emitted */
              var instance = this.instance

              var instanceTagIndex = 0

              var streamAttr = SC_STREAM_ATTR + '="true"'
              var ourStream = new stream.Readable()
              // $FlowFixMe
              ourStream._read = function() {}

              readableStream.on('data', function(chunk) {
                var tags = instance.tags

                var html = ''

                /* retrieve html for each new style tag */
                for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
                  var tag = tags[instanceTagIndex]
                  html += tag.toHTML(streamAttr)
                }

                /* force our StyleSheets to emit entirely new tags */
                instance.sealAllTags()
                /* prepend style html to chunk */
                ourStream.push(html + chunk)
              })

              readableStream.on('end', function() {
                _this.complete()
                ourStream.push(null)
              })

              readableStream.on('error', function(err) {
                _this.complete()
                ourStream.emit('error', err)
              })

              return ourStream
            }

            return ServerStyleSheet
          })()

          //

          var LIMIT = 200

          var createWarnTooManyClasses = function(displayName) {
            var generatedClasses = {}
            var warningSeen = false

            return function(className) {
              if (!warningSeen) {
                generatedClasses[className] = true
                if (Object.keys(generatedClasses).length >= LIMIT) {
                  // Unable to find latestRule in test environment.
                  /* eslint-disable no-console, prefer-template */
                  console.warn(
                    'Over ' +
                      LIMIT +
                      ' classes were generated for component ' +
                      displayName +
                      '. \n' +
                      'Consider using the attrs method, together with a style object for frequently changed styles.\n' +
                      'Example:\n' +
                      '  const Component = styled.div.attrs({\n' +
                      '    style: ({ background }) => ({\n' +
                      '      background,\n' +
                      '    }),\n' +
                      '  })`width: 100%;`\n\n' +
                      '  <Component />'
                  )
                  warningSeen = true
                  generatedClasses = {}
                }
              }
            }
          }

          //
          /* eslint-disable max-len */
          /**
           * Trying to avoid the unknown-prop errors on styled components by filtering by
           * React's attribute whitelist.
           *
           * To regenerate this regex:
           *
           * 1. `npm i -g regexgen` (https://github.com/devongovett/regexgen)
           * 2. Run `regexgen` with the list of space-separated words below as input
           * 3. Surround the emitted regex with this: `/^(GENERATED_REGEX)$/` -- this will ensure a full string match
           *    and no false positives from partials
           **/
          /*
children dangerouslySetInnerHTML key ref autoFocus defaultValue valueLink defaultChecked checkedLink innerHTML suppressContentEditableWarning onFocusIn onFocusOut className onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onReset onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onAnimationStart onAnimationEnd onAnimationIteration onTransitionEnd onCopyCapture onCutCapture onPasteCapture onCompositionEndCapture onCompositionStartCapture onCompositionUpdateCapture onKeyDownCapture onKeyPressCapture onKeyUpCapture onFocusCapture onBlurCapture onChangeCapture onInputCapture onSubmitCapture onResetCapture onClickCapture onContextMenuCapture onDoubleClickCapture onDragCapture onDragEndCapture onDragEnterCapture onDragExitCapture onDragLeaveCapture onDragOverCapture onDragStartCapture onDropCapture onMouseDownCapture onMouseEnterCapture onMouseLeaveCapture onMouseMoveCapture onMouseOutCapture onMouseOverCapture onMouseUpCapture onSelectCapture onTouchCancelCapture onTouchEndCapture onTouchMoveCapture onTouchStartCapture onScrollCapture onWheelCapture onAbortCapture onCanPlayCapture onCanPlayThroughCapture onDurationChangeCapture onEmptiedCapture onEncryptedCapture onEndedCapture onErrorCapture onLoadedDataCapture onLoadedMetadataCapture onLoadStartCapture onPauseCapture onPlayCapture onPlayingCapture onProgressCapture onRateChangeCapture onSeekedCapture onSeekingCapture onStalledCapture onSuspendCapture onTimeUpdateCapture onVolumeChangeCapture onWaitingCapture onLoadCapture onAnimationStartCapture onAnimationEndCapture onAnimationIterationCapture onTransitionEndCapture accept acceptCharset accessKey action allowFullScreen allowTransparency alt as async autoComplete autoPlay capture cellPadding cellSpacing charSet challenge checked cite classID className cols colSpan content contentEditable contextMenu controlsList controls coords crossOrigin data dateTime default defer dir disabled download draggable encType form formAction formEncType formMethod formNoValidate formTarget frameBorder headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media mediaGroup method min minLength multiple muted name nonce noValidate open optimum pattern placeholder playsInline poster preload profile radioGroup readOnly referrerPolicy rel required reversed role rows rowSpan sandbox scope scoped scrolling seamless selected shape size sizes span spellCheck src srcDoc srcLang srcSet start step style summary tabIndex target title type useMap value width wmode wrap about datatype inlist prefix property resource typeof vocab autoCapitalize autoCorrect autoSave color itemProp itemScope itemType itemID itemRef results security unselectable accentHeight accumulate additive alignmentBaseline allowReorder alphabetic amplitude arabicForm ascent attributeName attributeType autoReverse azimuth baseFrequency baseProfile baselineShift bbox begin bias by calcMode capHeight clip clipPath clipRule clipPathUnits colorInterpolation colorInterpolationFilters colorProfile colorRendering contentScriptType contentStyleType cursor cx cy d decelerate descent diffuseConstant direction display divisor dominantBaseline dur dx dy edgeMode elevation enableBackground end exponent externalResourcesRequired fill fillOpacity fillRule filter filterRes filterUnits floodColor floodOpacity focusable fontFamily fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontWeight format from fx fy g1 g2 glyphName glyphOrientationHorizontal glyphOrientationVertical glyphRef gradientTransform gradientUnits hanging horizAdvX horizOriginX ideographic imageRendering in in2 intercept k k1 k2 k3 k4 kernelMatrix kernelUnitLength kerning keyPoints keySplines keyTimes lengthAdjust letterSpacing lightingColor limitingConeAngle local markerEnd markerMid markerStart markerHeight markerUnits markerWidth mask maskContentUnits maskUnits mathematical mode numOctaves offset opacity operator order orient orientation origin overflow overlinePosition overlineThickness paintOrder panose1 pathLength patternContentUnits patternTransform patternUnits pointerEvents points pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits r radius refX refY renderingIntent repeatCount repeatDur requiredExtensions requiredFeatures restart result rotate rx ry scale seed shapeRendering slope spacing specularConstant specularExponent speed spreadMethod startOffset stdDeviation stemh stemv stitchTiles stopColor stopOpacity strikethroughPosition strikethroughThickness string stroke strokeDasharray strokeDashoffset strokeLinecap strokeLinejoin strokeMiterlimit strokeOpacity strokeWidth surfaceScale systemLanguage tableValues targetX targetY textAnchor textDecoration textRendering textLength to transform u1 u2 underlinePosition underlineThickness unicode unicodeBidi unicodeRange unitsPerEm vAlphabetic vHanging vIdeographic vMathematical values vectorEffect version vertAdvY vertOriginX vertOriginY viewBox viewTarget visibility widths wordSpacing writingMode x xHeight x1 x2 xChannelSelector xlinkActuate xlinkArcrole xlinkHref xlinkRole xlinkShow xlinkTitle xlinkType xmlBase xmlns xmlnsXlink xmlLang xmlSpace y y1 y2 yChannelSelector z zoomAndPan
*/
          /* eslint-enable max-len */

          var ATTRIBUTE_REGEX = /^((?:s(?:uppressContentEditableWarn|croll|pac)|(?:shape|image|text)Render|(?:letter|word)Spac|vHang|hang)ing|(?:on(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:Animation|Touch|Load|Drag)Start|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|TimeUpdate|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|MouseDown|P(?:rogress|laying)|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|KeyPress|DragEnd|Key(?:Down|Up)|(?:Wait|Seek)ing|(?:MouseU|Dro)p|Scroll|Paste|Focus|Abort|Drag|Play|Load|Blur)Captur|alignmentBaselin|(?:limitingConeAng|xlink(?:(?:Arcr|R)o|Tit)|s(?:urfaceSca|ty|ca)|unselectab|baseProfi|fontSty|(?:focus|dragg)ab|multip|profi|tit)l|d(?:ominantBaselin|efaultValu)|a(?:uto(?:Capitaliz|Revers|Sav)|dditiv)|(?:(?:formNoValid|xlinkActu|noValid|accumul|rot)a|autoComple|decelera)t|(?:(?:attribute|item)T|datat)yp|(?:attribute|glyph)Nam|playsInlin|(?:formE|e)ncTyp|(?:writing|input|edge)Mod|(?:xlinkTy|itemSco|keyTy|slo)p|(?:amplitu|mo)d|(?:xmlSpa|non)c|fillRul|(?:dateTi|na)m|r(?:esourc|ol)|xmlBas|wmod)e|(?:glyphOrientationHorizont|loc)al|(?:externalResourcesRequir|select|revers|mut)ed|c(?:o(?:lorInterpolationFilter|ord)s|o(?:lor(?:Interpolation)?|nt(?:rols|ent))|(?:ontentS(?:cript|tyle)Typ|o(?:ntentEditab|lorProfi)l|l(?:assNam|ipRul)|a(?:lcMod|ptur)|it)e|olorRendering|l(?:ipPathUnits|assID)|(?:ontrolsLis|apHeigh)t|h(?:eckedLink|a(?:llenge|rSet)|ildren|ecked)|ell(?:Spac|Padd)ing|o(?:ntextMenu|ls)|(?:rossOrigi|olSpa)n|lip(?:Path)?|ursor|[xy])|glyphOrientationVertical|d(?:angerouslySetInnerHTML|efaultChecked|ownload|isabled|isplay|[xy])|(?:s(?:trikethroughThickn|eaml)es|(?:und|ov)erlineThicknes|r(?:equiredExtension|adiu)|(?:requiredFeatur|tableValu|stitchTil|numOctav|filterR)e|key(?:(?:Splin|Tim)e|Param)|autoFocu|header|bia)s|(?:(?:st(?:rikethroughPosi|dDevia)|(?:und|ov)erlinePosi|(?:textDecor|elev)a|orienta)tio|(?:strokeLinejo|orig)i|formActio|zoomAndPa|onFocusI|directio|(?:vers|act)io|rowSpa|begi|ico)n|o(?:n(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:Animation|Touch|Load|Drag)Start|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|TimeUpdate|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|MouseDown|P(?:rogress|laying)|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|KeyPress|DragEnd|Key(?:Down|Up)|(?:Wait|Seek)ing|(?:MouseU|Dro)p|Scroll|Paste|Focus|Abort|Drag|Play|Load|Blur)|rient)|p(?:reserveA(?:spectRatio|lpha)|ointsAt[X-Z]|anose1)|(?:patternContent|ma(?:sk(?:Content)?|rker)|primitive|gradient|pattern|filter)Units|(?:gradientT|patternT|t)ransform|(?:(?:allowTranspar|baseFrequ)enc|re(?:ferrerPolic|adOnl)|(?:(?:st(?:roke|op)O|floodO|fillO|o)pac|integr|secur)it|visibilit|fontFamil|accessKe|propert|summar)y|(?:strokeMiterlimi|(?:specularConsta|repeatCou|fontVaria)n|(?:(?:specularE|e)xpon|renderingInt|asc)en|d(?:iffuseConsta|esce)n|(?:fontSizeAdju|lengthAdju|manife)s|baselineShif|vectorEffec|(?:(?:mar(?:ker|gin)|x)H|accentH|fontW)eigh|a(?:utoCorrec|bou)|markerStar|onFocusOu|intercep|restar|forma|inlis|heigh|lis)t|(?:(?:st(?:rokeDasho|artO)|o)ffs|acceptChars|formTarg|viewTarg|srcS)et|(?:(?:enableBackgrou|markerE)n|s(?:p(?:readMetho|ee)|ee)|formMetho|m(?:arkerMi|etho)|preloa|kin)d|k(?:ernel(?:UnitLength|Matrix)|[1-4])|(?:[xy]ChannelSelect|lightingCol|textAnch|floodCol|stopCol|operat|htmlF)or|(?:allowFullScre|hidd)en|strokeDasharray|systemLanguage|(?:strokeLineca|itemPro|useMa|wra|loo)p|v(?:Mathematical|ert(?:Origin[XY]|AdvY)|alues|ocab)|(?:pointerEve|keyPoi)nts|unicodeRange|(?:(?:allowReord|placehold|frameBord|paintOrd|post|ord)e|repeatDu|d(?:efe|u))r|mathematical|(?:vI|i)deographic|h(?:oriz(?:Origin|Adv)X|ttpEquiv)|u(?:nicodeBidi|[12])|(?:fontStretc|hig)h|(?:(?:mar(?:ker|gin)W|strokeW)id|azimu)th|vAlphabetic|mediaGroup|spellCheck|(?:unitsPerE|optimu|fro)m|r(?:adioGroup|e(?:sults|f[XY]|l)|ows|[xy])|(?:xmlnsXl|valueL)ink|a(?:rabicForm|l(?:phabetic|t)|sync)|pathLength|(?:text|m(?:in|ax))Length|innerHTML|xlinkShow|(?:xlinkHr|glyphR)ef|r(?:e(?:quired|sult|f))?|o(?:verflow|pen)|(?:tabInde|(?:sand|b)bo|viewBo)x|(?:(?:href|xml|src)La|kerni)ng|f(?:o(?:ntSize|rm)|il(?:ter|l))|autoPlay|unicode|p(?:attern|oints)|t(?:arget[XY]|o)|i(?:temRef|n2|s)|divisor|d(?:efault|ata|ir)?|srcDoc|s(?:coped|te(?:m[hv]|p)|pan)|(?:width|size)s|(?:stri|la)ng|prefix|itemID|s(?:t(?:roke|art)|hape|cope|rc)|a(?:ccept|s)|t(?:arget|ype)|typeof|width|value|x(?:mlns)?|label|m(?:edia|a(?:sk|x)|in)|size|href|k(?:ey)?|end|low|x[12]|i[dn]|y[12]|g[12]|by|f[xy]|[yz])$/

          /* From DOMProperty */
          var ATTRIBUTE_NAME_START_CHAR =
            ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD'
          var ATTRIBUTE_NAME_CHAR =
            ATTRIBUTE_NAME_START_CHAR +
            '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040'
          var isCustomAttribute = RegExp.prototype.test.bind(
            new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$')
          )

          var validAttr = function(name) {
            return (
              ATTRIBUTE_REGEX.test(name) ||
              isCustomAttribute(name.toLowerCase())
            )
          }

          //

          function isTag(target) /* : %checks */ {
            return typeof target === 'string'
          }

          //

          /* eslint-disable no-undef */
          function getComponentName(target) {
            return target.displayName || target.name || 'Component'
          }

          //

          var determineTheme = function(props, fallbackTheme, defaultProps) {
            // Props should take precedence over ThemeProvider, which should take precedence over
            // defaultProps, but React automatically puts defaultProps on props.

            /* eslint-disable react/prop-types */
            var isDefaultTheme =
              defaultProps && props.theme === defaultProps.theme
            var theme =
              props.theme && !isDefaultTheme ? props.theme : fallbackTheme
            /* eslint-enable */

            return theme
          }

          //
          var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g
          var dashesAtEnds = /(^-|-$)/g

          /**
           * TODO: Explore using CSS.escape when it becomes more available
           * in evergreen browsers.
           */
          function escape(str) {
            return (
              str
                // Replace all possible CSS selectors
                .replace(escapeRegex, '-')

                // Remove extraneous hyphens at the start and end
                .replace(dashesAtEnds, '')
            )
          }

          //
          /**
           * Creates a broadcast that can be listened to, i.e. simple event emitter
           *
           * @see https://github.com/ReactTraining/react-broadcast
           */

          var createBroadcast = function createBroadcast(initialState) {
            var listeners = {}
            var id = 0
            var state = initialState

            function publish(nextState) {
              state = nextState

              // eslint-disable-next-line guard-for-in, no-restricted-syntax
              for (var key in listeners) {
                var listener = listeners[key]
                if (listener === undefined) {
                  // eslint-disable-next-line no-continue
                  continue
                }

                listener(state)
              }
            }

            function subscribe(listener) {
              var currentId = id
              listeners[currentId] = listener
              id += 1
              listener(state)
              return currentId
            }

            function unsubscribe(unsubID) {
              listeners[unsubID] = undefined
            }

            return {
              publish: publish,
              subscribe: subscribe,
              unsubscribe: unsubscribe
            }
          }

          var _ThemeProvider$childC
          var _ThemeProvider$contex

          //
          /* globals React$Element */
          // NOTE: DO NOT CHANGE, changing this is a semver major change!
          var CHANNEL = '__styled-components__'
          var CHANNEL_NEXT = CHANNEL + 'next__'

          var CONTEXT_CHANNEL_SHAPE = __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.shape(
            {
              getTheme: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
              subscribe:
                __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
              unsubscribe:
                __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func
            }
          )

          var warnChannelDeprecated = void 0
          if (true) {
            warnChannelDeprecated = once(function() {
              // eslint-disable-next-line no-console
              console.error(
                'Warning: Usage of `context.' +
                  CHANNEL +
                  '` as a function is deprecated. It will be replaced with the object on `.context.' +
                  CHANNEL_NEXT +
                  '` in a future version.'
              )
            })
          }

          var isFunction = function isFunction(test) {
            return typeof test === 'function'
          }

          /**
           * Provide a theme to an entire react component tree via context and event listeners (have to do
           * both context and event emitter as pure components block context updates)
           */

          var ThemeProvider = (function(_Component) {
            inherits(ThemeProvider, _Component)

            function ThemeProvider() {
              classCallCheck(this, ThemeProvider)

              var _this = possibleConstructorReturn(this, _Component.call(this))

              _this.unsubscribeToOuterId = -1

              _this.getTheme = _this.getTheme.bind(_this)
              return _this
            }

            ThemeProvider.prototype.componentWillMount = function componentWillMount() {
              var _this2 = this

              // If there is a ThemeProvider wrapper anywhere around this theme provider, merge this theme
              // with the outer theme
              var outerContext = this.context[CHANNEL_NEXT]
              if (outerContext !== undefined) {
                this.unsubscribeToOuterId = outerContext.subscribe(function(
                  theme
                ) {
                  _this2.outerTheme = theme

                  if (_this2.broadcast !== undefined) {
                    _this2.publish(_this2.props.theme)
                  }
                })
              }

              this.broadcast = createBroadcast(this.getTheme())
            }

            ThemeProvider.prototype.getChildContext = function getChildContext() {
              var _this3 = this,
                _babelHelpers$extends

              return _extends(
                {},
                this.context,
                ((_babelHelpers$extends = {}),
                (_babelHelpers$extends[CHANNEL_NEXT] = {
                  getTheme: this.getTheme,
                  subscribe: this.broadcast.subscribe,
                  unsubscribe: this.broadcast.unsubscribe
                }),
                (_babelHelpers$extends[CHANNEL] = function(subscriber) {
                  if (true) {
                    warnChannelDeprecated()
                  }

                  // Patch the old `subscribe` provide via `CHANNEL` for older clients.
                  var unsubscribeId = _this3.broadcast.subscribe(subscriber)
                  return function() {
                    return _this3.broadcast.unsubscribe(unsubscribeId)
                  }
                }),
                _babelHelpers$extends)
              )
            }

            ThemeProvider.prototype.componentWillReceiveProps = function componentWillReceiveProps(
              nextProps
            ) {
              if (this.props.theme !== nextProps.theme) {
                this.publish(nextProps.theme)
              }
            }

            ThemeProvider.prototype.componentWillUnmount = function componentWillUnmount() {
              if (this.unsubscribeToOuterId !== -1) {
                this.context[CHANNEL_NEXT].unsubscribe(
                  this.unsubscribeToOuterId
                )
              }
            }

            // Get the theme from the props, supporting both (outerTheme) => {} as well as object notation

            ThemeProvider.prototype.getTheme = function getTheme(passedTheme) {
              var theme = passedTheme || this.props.theme
              if (isFunction(theme)) {
                var mergedTheme = theme(this.outerTheme)
                if (
                  'development' !== 'production' &&
                  !__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(
                    mergedTheme
                  )
                ) {
                  throw new Error(
                    true
                      ? '[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!'
                      : ''
                  )
                }
                return mergedTheme
              }
              if (
                !__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(theme)
              ) {
                throw new Error(
                  true
                    ? '[ThemeProvider] Please make your theme prop a plain object'
                    : ''
                )
              }
              return _extends({}, this.outerTheme, theme)
            }

            ThemeProvider.prototype.publish = function publish(theme) {
              this.broadcast.publish(this.getTheme(theme))
            }

            ThemeProvider.prototype.render = function render() {
              if (!this.props.children) {
                return null
              }
              return __WEBPACK_IMPORTED_MODULE_3_react___default.a.Children.only(
                this.props.children
              )
            }

            return ThemeProvider
          })(__WEBPACK_IMPORTED_MODULE_3_react__['Component'])

          ThemeProvider.childContextTypes = ((_ThemeProvider$childC = {}),
          (_ThemeProvider$childC[CHANNEL] =
            __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func),
          (_ThemeProvider$childC[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE),
          _ThemeProvider$childC)
          ThemeProvider.contextTypes = ((_ThemeProvider$contex = {}),
          (_ThemeProvider$contex[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE),
          _ThemeProvider$contex)

          //

          // HACK for generating all static styles without needing to allocate
          // an empty execution context every single time...
          var STATIC_EXECUTION_CONTEXT = {}

          var _StyledComponent = function(
            ComponentStyle,
            constructWithOptions
          ) {
            var identifiers = {}

            /* We depend on components having unique IDs */
            var generateId = function generateId(
              _displayName,
              parentComponentId
            ) {
              var displayName =
                typeof _displayName !== 'string' ? 'sc' : escape(_displayName)

              var componentId = void 0

              /**
               * only fall back to hashing the component injection order if
               * a proper displayName isn't provided by the babel plugin
               */
              if (!_displayName) {
                var nr = (identifiers[displayName] || 0) + 1
                identifiers[displayName] = nr

                componentId =
                  displayName +
                  '-' +
                  ComponentStyle.generateName(displayName + nr)
              } else {
                componentId =
                  displayName + '-' + ComponentStyle.generateName(displayName)
              }

              return parentComponentId !== undefined
                ? parentComponentId + '-' + componentId
                : componentId
            }

            var BaseStyledComponent = (function(_Component) {
              inherits(BaseStyledComponent, _Component)

              function BaseStyledComponent() {
                var _temp, _this, _ret

                classCallCheck(this, BaseStyledComponent)

                for (
                  var _len = arguments.length, args = Array(_len), _key = 0;
                  _key < _len;
                  _key++
                ) {
                  args[_key] = arguments[_key]
                }

                return (
                  (_ret = ((_temp = ((_this = possibleConstructorReturn(
                    this,
                    _Component.call.apply(_Component, [this].concat(args))
                  )),
                  _this)),
                  (_this.attrs = {}),
                  (_this.state = {
                    theme: null,
                    generatedClassName: ''
                  }),
                  (_this.unsubscribeId = -1),
                  _temp)),
                  possibleConstructorReturn(_this, _ret)
                )
              }

              BaseStyledComponent.prototype.unsubscribeFromContext = function unsubscribeFromContext() {
                if (this.unsubscribeId !== -1) {
                  this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId)
                }
              }

              BaseStyledComponent.prototype.buildExecutionContext = function buildExecutionContext(
                theme,
                props
              ) {
                var attrs = this.constructor.attrs

                var context = _extends({}, props, { theme: theme })
                if (attrs === undefined) {
                  return context
                }

                this.attrs = Object.keys(attrs).reduce(function(acc, key) {
                  var attr = attrs[key]
                  // eslint-disable-next-line no-param-reassign
                  acc[key] = typeof attr === 'function' ? attr(context) : attr
                  return acc
                }, {})

                return _extends({}, context, this.attrs)
              }

              BaseStyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(
                theme,
                props
              ) {
                var _constructor = this.constructor,
                  attrs = _constructor.attrs,
                  componentStyle = _constructor.componentStyle,
                  warnTooManyClasses = _constructor.warnTooManyClasses

                var styleSheet = this.context[CONTEXT_KEY] || StyleSheet.master

                // staticaly styled-components don't need to build an execution context object,
                // and shouldn't be increasing the number of class names
                if (componentStyle.isStatic && attrs === undefined) {
                  return componentStyle.generateAndInjectStyles(
                    STATIC_EXECUTION_CONTEXT,
                    styleSheet
                  )
                } else {
                  var executionContext = this.buildExecutionContext(
                    theme,
                    props
                  )
                  var className = componentStyle.generateAndInjectStyles(
                    executionContext,
                    styleSheet
                  )

                  if (
                    'development' !== 'production' &&
                    warnTooManyClasses !== undefined
                  ) {
                    warnTooManyClasses(className)
                  }

                  return className
                }
              }

              BaseStyledComponent.prototype.componentWillMount = function componentWillMount() {
                var _this2 = this

                var componentStyle = this.constructor.componentStyle

                var styledContext = this.context[CHANNEL_NEXT]

                // If this is a staticaly-styled component, we don't need to the theme
                // to generate or build styles.
                if (componentStyle.isStatic) {
                  var generatedClassName = this.generateAndInjectStyles(
                    STATIC_EXECUTION_CONTEXT,
                    this.props
                  )
                  this.setState({ generatedClassName: generatedClassName })
                  // If there is a theme in the context, subscribe to the event emitter. This
                  // is necessary due to pure components blocking context updates, this circumvents
                  // that by updating when an event is emitted
                } else if (styledContext !== undefined) {
                  var subscribe = styledContext.subscribe

                  this.unsubscribeId = subscribe(function(nextTheme) {
                    // This will be called once immediately
                    var theme = determineTheme(
                      _this2.props,
                      nextTheme,
                      _this2.constructor.defaultProps
                    )
                    var generatedClassName = _this2.generateAndInjectStyles(
                      theme,
                      _this2.props
                    )

                    _this2.setState({
                      theme: theme,
                      generatedClassName: generatedClassName
                    })
                  })
                } else {
                  // eslint-disable-next-line react/prop-types
                  var theme = this.props.theme || {}
                  var _generatedClassName = this.generateAndInjectStyles(
                    theme,
                    this.props
                  )
                  this.setState({
                    theme: theme,
                    generatedClassName: _generatedClassName
                  })
                }
              }

              BaseStyledComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(
                nextProps
              ) {
                var _this3 = this

                // If this is a staticaly-styled component, we don't need to listen to
                // props changes to update styles
                var componentStyle = this.constructor.componentStyle

                if (componentStyle.isStatic) {
                  return
                }

                this.setState(function(oldState) {
                  var theme = determineTheme(
                    nextProps,
                    oldState.theme,
                    _this3.constructor.defaultProps
                  )
                  var generatedClassName = _this3.generateAndInjectStyles(
                    theme,
                    nextProps
                  )

                  return {
                    theme: theme,
                    generatedClassName: generatedClassName
                  }
                })
              }

              BaseStyledComponent.prototype.componentWillUnmount = function componentWillUnmount() {
                this.unsubscribeFromContext()
              }

              BaseStyledComponent.prototype.render = function render() {
                var _this4 = this

                // eslint-disable-next-line react/prop-types
                var innerRef = this.props.innerRef
                var generatedClassName = this.state.generatedClassName
                var _constructor2 = this.constructor,
                  styledComponentId = _constructor2.styledComponentId,
                  target = _constructor2.target

                var isTargetTag = isTag(target)

                var className = [
                  // eslint-disable-next-line react/prop-types
                  this.props.className,
                  styledComponentId,
                  this.attrs.className,
                  generatedClassName
                ]
                  .filter(Boolean)
                  .join(' ')

                var baseProps = _extends({}, this.attrs, {
                  className: className
                })

                if (isStyledComponent(target)) {
                  baseProps.innerRef = innerRef
                } else {
                  baseProps.ref = innerRef
                }

                var propsForElement = Object.keys(this.props).reduce(function(
                  acc,
                  propName
                ) {
                  // Don't pass through non HTML tags through to HTML elements
                  // always omit innerRef
                  if (
                    propName !== 'innerRef' &&
                    propName !== 'className' &&
                    (!isTargetTag || validAttr(propName))
                  ) {
                    // eslint-disable-next-line no-param-reassign
                    acc[propName] = _this4.props[propName]
                  }

                  return acc
                },
                baseProps)

                return Object(
                  __WEBPACK_IMPORTED_MODULE_3_react__['createElement']
                )(target, propsForElement)
              }

              return BaseStyledComponent
            })(__WEBPACK_IMPORTED_MODULE_3_react__['Component'])

            var createStyledComponent = function createStyledComponent(
              target,
              options,
              rules
            ) {
              var _StyledComponent$cont

              var _options$displayName = options.displayName,
                displayName =
                  _options$displayName === undefined
                    ? isTag(target)
                      ? 'styled.' + target
                      : 'Styled(' + getComponentName(target) + ')'
                    : _options$displayName,
                _options$componentId = options.componentId,
                componentId =
                  _options$componentId === undefined
                    ? generateId(options.displayName, options.parentComponentId)
                    : _options$componentId,
                _options$ParentCompon = options.ParentComponent,
                ParentComponent =
                  _options$ParentCompon === undefined
                    ? BaseStyledComponent
                    : _options$ParentCompon,
                extendingRules = options.rules,
                attrs = options.attrs

              var styledComponentId =
                options.displayName && options.componentId
                  ? escape(options.displayName) + '-' + options.componentId
                  : componentId

              var componentStyle = new ComponentStyle(
                extendingRules === undefined
                  ? rules
                  : extendingRules.concat(rules),
                attrs,
                styledComponentId
              )

              var StyledComponent = (function(_ParentComponent) {
                inherits(StyledComponent, _ParentComponent)

                function StyledComponent() {
                  classCallCheck(this, StyledComponent)
                  return possibleConstructorReturn(
                    this,
                    _ParentComponent.apply(this, arguments)
                  )
                }

                StyledComponent.withComponent = function withComponent(tag) {
                  var previousComponentId = options.componentId,
                    optionsToCopy = objectWithoutProperties(options, [
                      'componentId'
                    ])

                  var newComponentId =
                    previousComponentId &&
                    previousComponentId +
                      '-' +
                      (isTag(tag) ? tag : escape(getComponentName(tag)))

                  var newOptions = _extends({}, optionsToCopy, {
                    componentId: newComponentId,
                    ParentComponent: StyledComponent
                  })

                  return createStyledComponent(tag, newOptions, rules)
                }

                createClass(StyledComponent, null, [
                  {
                    key: 'extend',
                    get: function get$$1() {
                      var rulesFromOptions = options.rules,
                        parentComponentId = options.componentId,
                        optionsToCopy = objectWithoutProperties(options, [
                          'rules',
                          'componentId'
                        ])

                      var newRules =
                        rulesFromOptions === undefined
                          ? rules
                          : rulesFromOptions.concat(rules)

                      var newOptions = _extends({}, optionsToCopy, {
                        rules: newRules,
                        parentComponentId: parentComponentId,
                        ParentComponent: StyledComponent
                      })

                      return constructWithOptions(
                        createStyledComponent,
                        target,
                        newOptions
                      )
                    }
                  }
                ])
                return StyledComponent
              })(ParentComponent)

              StyledComponent.contextTypes = ((_StyledComponent$cont = {}),
              (_StyledComponent$cont[CHANNEL] =
                __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func),
              (_StyledComponent$cont[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE),
              (_StyledComponent$cont[
                CONTEXT_KEY
              ] = __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([
                __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.instanceOf(
                  StyleSheet
                ),
                __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.instanceOf(
                  ServerStyleSheet
                )
              ])),
              _StyledComponent$cont)
              StyledComponent.displayName = displayName
              StyledComponent.styledComponentId = styledComponentId
              StyledComponent.attrs = attrs
              StyledComponent.componentStyle = componentStyle
              StyledComponent.target = target

              if (true) {
                StyledComponent.warnTooManyClasses = createWarnTooManyClasses(
                  displayName
                )
              }

              return StyledComponent
            }

            return createStyledComponent
          }

          // Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
          function murmurhash(str) {
            var l = str.length | 0,
              h = l | 0,
              i = 0,
              k

            while (l >= 4) {
              k =
                (str.charCodeAt(i) & 0xff) |
                ((str.charCodeAt(++i) & 0xff) << 8) |
                ((str.charCodeAt(++i) & 0xff) << 16) |
                ((str.charCodeAt(++i) & 0xff) << 24)

              k =
                (k & 0xffff) * 0x5bd1e995 +
                ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16)
              k ^= k >>> 24
              k =
                (k & 0xffff) * 0x5bd1e995 +
                ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16)

              h =
                ((h & 0xffff) * 0x5bd1e995 +
                  ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16)) ^
                k

              l -= 4
              ++i
            }

            switch (l) {
              case 3:
                h ^= (str.charCodeAt(i + 2) & 0xff) << 16
              case 2:
                h ^= (str.charCodeAt(i + 1) & 0xff) << 8
              case 1:
                h ^= str.charCodeAt(i) & 0xff
                h =
                  (h & 0xffff) * 0x5bd1e995 +
                  ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16)
            }

            h ^= h >>> 13
            h =
              (h & 0xffff) * 0x5bd1e995 +
              ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16)
            h ^= h >>> 15

            return h >>> 0
          }

          //
          var areStylesCacheable = IS_BROWSER

          var isStaticRules = function isStaticRules(rules, attrs) {
            for (var i = 0; i < rules.length; i += 1) {
              var rule = rules[i]

              // recursive case
              if (Array.isArray(rule) && !isStaticRules(rule)) {
                return false
              } else if (
                typeof rule === 'function' &&
                !isStyledComponent(rule)
              ) {
                // functions are allowed to be static if they're just being
                // used to get the classname of a nested styled copmonent
                return false
              }
            }

            if (attrs !== undefined) {
              // eslint-disable-next-line guard-for-in, no-restricted-syntax
              for (var key in attrs) {
                var value = attrs[key]
                if (typeof value === 'function') {
                  return false
                }
              }
            }

            return true
          }

          var isHRMEnabled =
            typeof module !== 'undefined' &&
            module.hot &&
            'development' !== 'production'

          /*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */
          var _ComponentStyle = function(
            nameGenerator,
            flatten,
            stringifyRules
          ) {
            /* combines hashStr (murmurhash) and nameGenerator for convenience */
            var generateRuleHash = function generateRuleHash(str) {
              return nameGenerator(murmurhash(str))
            }

            var ComponentStyle = (function() {
              function ComponentStyle(rules, attrs, componentId) {
                classCallCheck(this, ComponentStyle)

                this.rules = rules
                this.isStatic = !isHRMEnabled && isStaticRules(rules, attrs)
                this.componentId = componentId

                if (!StyleSheet.master.hasId(componentId)) {
                  var placeholder = true ? ['.' + componentId + ' {}'] : []

                  StyleSheet.master.deferredInject(componentId, placeholder)
                }
              }

              /*
     * Flattens a rule set into valid CSS
     * Hashes it, wraps the whole chunk in a .hash1234 {}
     * Returns the hash to be injected on render()
     * */

              ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(
                executionContext,
                styleSheet
              ) {
                var isStatic = this.isStatic,
                  componentId = this.componentId,
                  lastClassName = this.lastClassName

                if (
                  areStylesCacheable &&
                  isStatic &&
                  lastClassName !== undefined
                ) {
                  return lastClassName
                }

                var flatCSS = flatten(this.rules, executionContext)
                var name = generateRuleHash(this.componentId + flatCSS.join(''))

                if (!styleSheet.hasNameForId(componentId, name)) {
                  var css = stringifyRules(flatCSS, '.' + name)
                  styleSheet.inject(this.componentId, css, name)
                }

                this.lastClassName = name
                return name
              }

              ComponentStyle.generateName = function generateName(str) {
                return generateRuleHash(str)
              }

              return ComponentStyle
            })()

            return ComponentStyle
          }

          //
          // Thanks to ReactDOMFactories for this handy list!

          var domElements = [
            'a',
            'abbr',
            'address',
            'area',
            'article',
            'aside',
            'audio',
            'b',
            'base',
            'bdi',
            'bdo',
            'big',
            'blockquote',
            'body',
            'br',
            'button',
            'canvas',
            'caption',
            'cite',
            'code',
            'col',
            'colgroup',
            'data',
            'datalist',
            'dd',
            'del',
            'details',
            'dfn',
            'dialog',
            'div',
            'dl',
            'dt',
            'em',
            'embed',
            'fieldset',
            'figcaption',
            'figure',
            'footer',
            'form',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'head',
            'header',
            'hgroup',
            'hr',
            'html',
            'i',
            'iframe',
            'img',
            'input',
            'ins',
            'kbd',
            'keygen',
            'label',
            'legend',
            'li',
            'link',
            'main',
            'map',
            'mark',
            'marquee',
            'menu',
            'menuitem',
            'meta',
            'meter',
            'nav',
            'noscript',
            'object',
            'ol',
            'optgroup',
            'option',
            'output',
            'p',
            'param',
            'picture',
            'pre',
            'progress',
            'q',
            'rp',
            'rt',
            'ruby',
            's',
            'samp',
            'script',
            'section',
            'select',
            'small',
            'source',
            'span',
            'strong',
            'style',
            'sub',
            'summary',
            'sup',
            'table',
            'tbody',
            'td',
            'textarea',
            'tfoot',
            'th',
            'thead',
            'time',
            'title',
            'tr',
            'track',
            'u',
            'ul',
            'var',
            'video',
            'wbr',

            // SVG
            'circle',
            'clipPath',
            'defs',
            'ellipse',
            'foreignObject',
            'g',
            'image',
            'line',
            'linearGradient',
            'mask',
            'path',
            'pattern',
            'polygon',
            'polyline',
            'radialGradient',
            'rect',
            'stop',
            'svg',
            'text',
            'tspan'
          ]

          //
          var _styled = function(styledComponent, constructWithOptions) {
            var styled = function styled(tag) {
              return constructWithOptions(styledComponent, tag)
            }

            // Shorthands for all valid HTML Elements
            domElements.forEach(function(domElement) {
              styled[domElement] = styled(domElement)
            })

            return styled
          }

          //
          var replaceWhitespace = function replaceWhitespace(str) {
            return str.replace(/\s|\\n/g, '')
          }

          var _keyframes = function(nameGenerator, stringifyRules, css) {
            return function() {
              var styleSheet = StyleSheet.master
              var rules = css.apply(undefined, arguments)
              var name = nameGenerator(
                murmurhash(replaceWhitespace(JSON.stringify(rules)))
              )
              var id = 'sc-keyframes-' + name

              if (!styleSheet.hasNameForId(id, name)) {
                styleSheet.inject(
                  id,
                  stringifyRules(rules, name, '@keyframes'),
                  name
                )
              }

              return name
            }
          }

          //
          var _injectGlobal = function(stringifyRules, css) {
            var injectGlobal = function injectGlobal() {
              var styleSheet = StyleSheet.master
              var rules = css.apply(undefined, arguments)
              var hash = murmurhash(JSON.stringify(rules))
              var id = 'sc-global-' + hash

              if (!styleSheet.hasId(id)) {
                styleSheet.inject(id, stringifyRules(rules))
              }
            }

            return injectGlobal
          }

          //

          var _constructWithOptions = function(css) {
            var constructWithOptions = function constructWithOptions(
              componentConstructor,
              tag
            ) {
              var options =
                arguments.length > 2 && arguments[2] !== undefined
                  ? arguments[2]
                  : {}

              if (typeof tag !== 'string' && typeof tag !== 'function') {
                throw new Error(
                  true
                    ? 'Cannot create styled-component for component: ' +
                      String(tag)
                    : ''
                )
              }

              /* This is callable directly as a template function */
              // $FlowFixMe: Not typed to avoid destructuring arguments
              var templateFunction = function templateFunction() {
                return componentConstructor(
                  tag,
                  options,
                  css.apply(undefined, arguments)
                )
              }

              /* If config methods are called, wrap up a new template function and merge options */
              templateFunction.withConfig = function(config) {
                return constructWithOptions(
                  componentConstructor,
                  tag,
                  _extends({}, options, config)
                )
              }
              templateFunction.attrs = function(attrs) {
                return constructWithOptions(
                  componentConstructor,
                  tag,
                  _extends({}, options, {
                    attrs: _extends({}, options.attrs || {}, attrs)
                  })
                )
              }

              return templateFunction
            }

            return constructWithOptions
          }

          //
          /* globals ReactClass */

          var wrapWithTheme = function wrapWithTheme(Component$$1) {
            var _WithTheme$contextTyp

            var componentName =
              Component$$1.displayName || Component$$1.name || 'Component'
            var isStatelessFunctionalComponent =
              typeof Component$$1 === 'function' &&
              !(
                Component$$1.prototype &&
                'isReactComponent' in Component$$1.prototype
              )

            // NOTE: We can't pass a ref to a stateless functional component
            var shouldSetInnerRef =
              isStyledComponent(Component$$1) || isStatelessFunctionalComponent

            var WithTheme = (function(_React$Component) {
              inherits(WithTheme, _React$Component)

              function WithTheme() {
                var _temp, _this, _ret

                classCallCheck(this, WithTheme)

                for (
                  var _len = arguments.length, args = Array(_len), _key = 0;
                  _key < _len;
                  _key++
                ) {
                  args[_key] = arguments[_key]
                }

                return (
                  (_ret = ((_temp = ((_this = possibleConstructorReturn(
                    this,
                    _React$Component.call.apply(
                      _React$Component,
                      [this].concat(args)
                    )
                  )),
                  _this)),
                  (_this.state = {}),
                  (_this.unsubscribeId = -1),
                  _temp)),
                  possibleConstructorReturn(_this, _ret)
                )
              }

              // NOTE: This is so that isStyledComponent passes for the innerRef unwrapping

              WithTheme.prototype.componentWillMount = function componentWillMount() {
                var _this2 = this

                var defaultProps = this.constructor.defaultProps

                var styledContext = this.context[CHANNEL_NEXT]
                var themeProp = determineTheme(
                  this.props,
                  undefined,
                  defaultProps
                )
                if (
                  styledContext === undefined &&
                  themeProp === undefined &&
                  'development' !== 'production'
                ) {
                  // eslint-disable-next-line no-console
                  console.warn(
                    '[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps'
                  )
                } else if (
                  styledContext === undefined &&
                  themeProp !== undefined
                ) {
                  this.setState({ theme: themeProp })
                } else {
                  var subscribe = styledContext.subscribe

                  this.unsubscribeId = subscribe(function(nextTheme) {
                    var theme = determineTheme(
                      _this2.props,
                      nextTheme,
                      defaultProps
                    )
                    _this2.setState({ theme: theme })
                  })
                }
              }

              WithTheme.prototype.componentWillReceiveProps = function componentWillReceiveProps(
                nextProps
              ) {
                var defaultProps = this.constructor.defaultProps

                this.setState(function(oldState) {
                  var theme = determineTheme(
                    nextProps,
                    oldState.theme,
                    defaultProps
                  )

                  return { theme: theme }
                })
              }

              WithTheme.prototype.componentWillUnmount = function componentWillUnmount() {
                if (this.unsubscribeId !== -1) {
                  this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId)
                }
              }

              WithTheme.prototype.render = function render() {
                var props = _extends(
                  {
                    theme: this.state.theme
                  },
                  this.props
                )

                if (!shouldSetInnerRef) {
                  props.ref = props.innerRef
                  delete props.innerRef
                }

                return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                  Component$$1,
                  props
                )
              }

              return WithTheme
            })(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component)

            WithTheme.displayName = 'WithTheme(' + componentName + ')'
            WithTheme.styledComponentId = 'withTheme'
            WithTheme.contextTypes = ((_WithTheme$contextTyp = {}),
            (_WithTheme$contextTyp[CHANNEL] =
              __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func),
            (_WithTheme$contextTyp[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE),
            _WithTheme$contextTyp)

            return __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics___default()(
              WithTheme,
              Component$$1
            )
          }

          //

          /* eslint-disable */
          var __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = {
            StyleSheet: StyleSheet
          }

          //

          /* Import singletons */
          /* Import singleton constructors */
          /* Import components */
          /* Import Higher Order Components */
          /* Warning if you've imported this file on React Native */
          if (
            'development' !== 'production' &&
            typeof navigator !== 'undefined' &&
            navigator.product === 'ReactNative'
          ) {
            // eslint-disable-next-line no-console
            console.warn(
              "It looks like you've imported 'styled-components' on React Native.\n" +
                "Perhaps you're looking to import 'styled-components/native'?\n" +
                'Read more about this at https://www.styled-components.com/docs/basics#react-native'
            )
          }

          /* Warning if there are several instances of styled-components */
          if ('development' !== 'production' && typeof window !== 'undefined') {
            window['__styled-components-init__'] =
              window['__styled-components-init__'] || 0

            if (window['__styled-components-init__'] === 1) {
              // eslint-disable-next-line no-console
              console.warn(
                "It looks like there are several instances of 'styled-components' initialized in this application. " +
                  'This may cause dynamic styles not rendering properly, errors happening during rehydration process ' +
                  'and makes you application bigger without a good reason.\n\n' +
                  'See https://s-c.sh/2BAXzed for more info.'
              )
            }

            window['__styled-components-init__'] += 1
          }

          /* Instantiate singletons */
          var ComponentStyle = _ComponentStyle(
            generateAlphabeticName,
            flatten,
            stringifyRules
          )
          var constructWithOptions = _constructWithOptions(css)
          var StyledComponent = _StyledComponent(
            ComponentStyle,
            constructWithOptions
          )

          /* Instantiate exported singletons */
          var keyframes = _keyframes(
            generateAlphabeticName,
            stringifyRules,
            css
          )
          var injectGlobal = _injectGlobal(stringifyRules, css)
          var styled = _styled(StyledComponent, constructWithOptions)

          /* harmony default export */ __webpack_exports__['default'] = styled
          //# sourceMappingURL=styled-components.browser.es.js.map

          /* WEBPACK VAR INJECTION */
        }.call(
          __webpack_exports__,
          __webpack_require__(
            './node_modules/node-libs-browser/node_modules/process/browser.js'
          )
        ))

        /***/
      },

      /***/ './node_modules/styled-components/node_modules/hoist-non-react-statics/index.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        /**
         * Copyright 2015, Yahoo! Inc.
         * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
         */
        ;(function(global, factory) {
          true
            ? (module.exports = factory())
            : typeof define === 'function' && define.amd
              ? define(factory)
              : (global.hoistNonReactStatics = factory())
        })(this, function() {
          'use strict'

          var REACT_STATICS = {
            childContextTypes: true,
            contextTypes: true,
            defaultProps: true,
            displayName: true,
            getDefaultProps: true,
            getDerivedStateFromProps: true,
            mixins: true,
            propTypes: true,
            type: true
          }

          var KNOWN_STATICS = {
            name: true,
            length: true,
            prototype: true,
            caller: true,
            callee: true,
            arguments: true,
            arity: true
          }

          var defineProperty = Object.defineProperty
          var getOwnPropertyNames = Object.getOwnPropertyNames
          var getOwnPropertySymbols = Object.getOwnPropertySymbols
          var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
          var getPrototypeOf = Object.getPrototypeOf
          var objectPrototype = getPrototypeOf && getPrototypeOf(Object)

          return function hoistNonReactStatics(
            targetComponent,
            sourceComponent,
            blacklist
          ) {
            if (typeof sourceComponent !== 'string') {
              // don't hoist over string (html) components

              if (objectPrototype) {
                var inheritedComponent = getPrototypeOf(sourceComponent)
                if (
                  inheritedComponent &&
                  inheritedComponent !== objectPrototype
                ) {
                  hoistNonReactStatics(
                    targetComponent,
                    inheritedComponent,
                    blacklist
                  )
                }
              }

              var keys = getOwnPropertyNames(sourceComponent)

              if (getOwnPropertySymbols) {
                keys = keys.concat(getOwnPropertySymbols(sourceComponent))
              }

              for (var i = 0; i < keys.length; ++i) {
                var key = keys[i]
                if (
                  !REACT_STATICS[key] &&
                  !KNOWN_STATICS[key] &&
                  (!blacklist || !blacklist[key])
                ) {
                  var descriptor = getOwnPropertyDescriptor(
                    sourceComponent,
                    key
                  )
                  try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor)
                  } catch (e) {}
                }
              }

              return targetComponent
            }

            return targetComponent
          }
        })

        /***/
      },

      /***/ './node_modules/styled-components/node_modules/stylis-rule-sheet/index.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        ;(function(factory) {
          true
            ? (module['exports'] = factory())
            : typeof define === 'function' && define['amd']
              ? define(factory())
              : (window['stylisRuleSheet'] = factory())
        })(function() {
          'use strict'

          return function(insertRule) {
            var delimiter = '/*|*/'
            var needle = delimiter + '}'

            function toSheet(block) {
              if (block)
                try {
                  insertRule(block + '}')
                } catch (e) {}
            }

            return function ruleSheet(
              context,
              content,
              selectors,
              parents,
              line,
              column,
              length,
              ns,
              depth,
              at
            ) {
              switch (context) {
                // property
                case 1:
                  // @import
                  if (depth === 0 && content.charCodeAt(0) === 64)
                    return insertRule(content + ';'), ''
                  break
                // selector
                case 2:
                  if (ns === 0) return content + delimiter
                  break
                // at-rule
                case 3:
                  switch (ns) {
                    // @font-face, @page
                    case 102:
                    case 112:
                      return insertRule(selectors[0] + content), ''
                    default:
                      return content + (at === 0 ? delimiter : '')
                  }
                case -2:
                  content.split(needle).forEach(toSheet)
              }
            }
          }
        })

        /***/
      },

      /***/ './node_modules/styled-components/node_modules/stylis/stylis.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        /*
 *          __        ___
 *    _____/ /___  __/ (_)____
 *   / ___/ __/ / / / / / ___/
 *  (__  ) /_/ /_/ / / (__  )
 * /____/\__/\__, /_/_/____/
 *          /____/
 *
 * light - weight css preprocessor @licence MIT
 */
        ;(function(factory) {
          /* eslint-disable */
          true
            ? (module['exports'] = factory(null))
            : typeof define === 'function' && define['amd']
              ? define(factory(null))
              : (window['stylis'] = factory(null))
        })(
          /** @param {*=} options */ function factory(options) {
            /* eslint-disable */

            'use strict'

            /**
             * Notes
             *
             * The ['<method name>'] pattern is used to support closure compiler
             * the jsdoc signatures are also used to the same effect
             *
             * ----
             *
             * int + int + int === n4 [faster]
             *
             * vs
             *
             * int === n1 && int === n2 && int === n3
             *
             * ----
             *
             * switch (int) { case ints...} [faster]
             *
             * vs
             *
             * if (int == 1 && int === 2 ...)
             *
             * ----
             *
             * The (first*n1 + second*n2 + third*n3) format used in the property parser
             * is a simple way to hash the sequence of characters
             * taking into account the index they occur in
             * since any number of 3 character sequences could produce duplicates.
             *
             * On the other hand sequences that are directly tied to the index of the character
             * resolve a far more accurate measure, it's also faster
             * to evaluate one condition in a switch statement
             * than three in an if statement regardless of the added math.
             *
             * This allows the vendor prefixer to be both small and fast.
             */

            var nullptn = /^\0+/g /* matches leading null characters */
            var formatptn = /[\0\r\f]/g /* matches new line, null and formfeed characters */
            var colonptn = /: */g /* splits animation rules */
            var cursorptn = /zoo|gra/ /* assert cursor varient */
            var transformptn = /([,: ])(transform)/g /* vendor prefix transform, older webkit */
            var animationptn = /,+\s*(?![^(]*[)])/g /* splits multiple shorthand notation animations */
            var propertiesptn = / +\s*(?![^(]*[)])/g /* animation properties */
            var elementptn = / *[\0] */g /* selector elements */
            var selectorptn = /,\r+?/g /* splits selectors */
            var andptn = /([\t\r\n ])*\f?&/g /* match & */
            var escapeptn = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g /* matches :global(.*) */
            var invalidptn = /\W+/g /* removes invalid characters from keyframes */
            var keyframeptn = /@(k\w+)\s*(\S*)\s*/ /* matches @keyframes $1 */
            var plcholdrptn = /::(place)/g /* match ::placeholder varient */
            var readonlyptn = /:(read-only)/g /* match :read-only varient */
            var beforeptn = /\s+(?=[{\];=:>])/g /* matches \s before ] ; = : */
            var afterptn = /([[}=:>])\s+/g /* matches \s after characters [ } = : */
            var tailptn = /(\{[^{]+?);(?=\})/g /* matches tail semi-colons ;} */
            var whiteptn = /\s{2,}/g /* matches repeating whitespace */
            var pseudoptn = /([^\(])(:+) */g /* pseudo element */
            var writingptn = /[svh]\w+-[tblr]{2}/ /* match writing mode property values */
            var gradientptn = /([\w-]+t\()/g /* match *gradient property */
            var supportsptn = /\(\s*(.*)\s*\)/g /* match supports (groups) */
            var propertyptn = /([\s\S]*?);/g /* match properties leading semicolon */
            var selfptn = /-self|flex-/g /* match flex- and -self in align-self: flex-*; */
            var pseudofmt = /[^]*?(:[rp][el]a[\w-]+)[^]*/ /* extrats :readonly or :placholder from selector */
            var trimptn = /[ \t]+$/ /* match tail whitspace */
            var dimensionptn = /stretch|:\s*\w+\-(?:conte|avail)/ /* match max/min/fit-content, fill-available

	/* vendors */
            var webkit = '-webkit-'
            var moz = '-moz-'
            var ms = '-ms-'

            /* character codes */
            var SEMICOLON = 59 /* ; */
            var CLOSEBRACES = 125 /* } */
            var OPENBRACES = 123 /* { */
            var OPENPARENTHESES = 40 /* ( */
            var CLOSEPARENTHESES = 41 /* ) */
            var OPENBRACKET = 91 /* [ */
            var CLOSEBRACKET = 93 /* ] */
            var NEWLINE = 10 /* \n */
            var CARRIAGE = 13 /* \r */
            var TAB = 9 /* \t */
            var AT = 64 /* @ */
            var SPACE = 32 /*   */
            var AND = 38 /* & */
            var DASH = 45 /* - */
            var UNDERSCORE = 95 /* _ */
            var STAR = 42 /* * */
            var COMMA = 44 /* , */
            var COLON = 58 /* : */
            var SINGLEQUOTE = 39 /* ' */
            var DOUBLEQUOTE = 34 /* " */
            var FOWARDSLASH = 47 /* / */
            var GREATERTHAN = 62 /* > */
            var PLUS = 43 /* + */
            var TILDE = 126 /* ~ */
            var NULL = 0 /* \0 */
            var FORMFEED = 12 /* \f */
            var VERTICALTAB = 11 /* \v */

            /* special identifiers */
            var KEYFRAME = 107 /* k */
            var MEDIA = 109 /* m */
            var SUPPORTS = 115 /* s */
            var PLACEHOLDER = 112 /* p */
            var READONLY = 111 /* o */
            var IMPORT = 169 /* <at>i */
            var CHARSET = 163 /* <at>c */
            var DOCUMENT = 100 /* <at>d */
            var PAGE = 112 /* <at>p */

            var column = 1 /* current column */
            var line = 1 /* current line numebr */
            var pattern = 0 /* :pattern */

            var cascade = 1 /* #id h1 h2 vs h1#id h2#id  */
            var prefix = 1 /* vendor prefix */
            var escape = 1 /* escape :global() pattern */
            var compress = 0 /* compress output */
            var semicolon = 0 /* no/semicolon option */
            var preserve = 0 /* preserve empty selectors */

            /* empty reference */
            var array = []

            /* plugins */
            var plugins = []
            var plugged = 0
            var should = null

            /* plugin context */
            var POSTS = -2
            var PREPS = -1
            var UNKWN = 0
            var PROPS = 1
            var BLCKS = 2
            var ATRUL = 3

            /* plugin newline context */
            var unkwn = 0

            /* keyframe animation */
            var keyed = 1
            var key = ''

            /* selector namespace */
            var nscopealt = ''
            var nscope = ''

            /**
             * Compile
             *
             * @param {Array<string>} parent
             * @param {Array<string>} current
             * @param {string} body
             * @param {number} id
             * @param {number} depth
             * @return {string}
             */
            function compile(parent, current, body, id, depth) {
              var bracket = 0 /* brackets [] */
              var comment = 0 /* comments /* // or /* */
              var parentheses = 0 /* functions () */
              var quote = 0 /* quotes '', "" */

              var first = 0 /* first character code */
              var second = 0 /* second character code */
              var code = 0 /* current character code */
              var tail = 0 /* previous character code */
              var trail = 0 /* character before previous code */
              var peak = 0 /* previous non-whitespace code */

              var counter = 0 /* count sequence termination */
              var context = 0 /* track current context */
              var atrule = 0 /* track @at-rule context */
              var pseudo = 0 /* track pseudo token index */
              var caret = 0 /* current character index */
              var format = 0 /* control character formating context */
              var insert = 0 /* auto semicolon insertion */
              var invert = 0 /* inverted selector pattern */
              var length = 0 /* generic length address */
              var eof = body.length /* end of file(length) */
              var eol = eof - 1 /* end of file(characters) */

              var char = '' /* current character */
              var chars = '' /* current buffer of characters */
              var child = '' /* next buffer of characters */
              var out = '' /* compiled body */
              var children = '' /* compiled children */
              var flat = '' /* compiled leafs */
              var selector /* generic selector address */
              var result /* generic address */

              // ...build body
              while (caret < eof) {
                code = body.charCodeAt(caret)

                // eof varient
                if (caret === eol) {
                  // last character + noop context, add synthetic padding for noop context to terminate
                  if (comment + quote + parentheses + bracket !== 0) {
                    if (comment !== 0) {
                      code = comment === FOWARDSLASH ? NEWLINE : FOWARDSLASH
                    }

                    quote = parentheses = bracket = 0
                    eof++
                    eol++
                  }
                }

                if (comment + quote + parentheses + bracket === 0) {
                  // eof varient
                  if (caret === eol) {
                    if (format > 0) {
                      chars = chars.replace(formatptn, '')
                    }

                    if (chars.trim().length > 0) {
                      switch (code) {
                        case SPACE:
                        case TAB:
                        case SEMICOLON:
                        case CARRIAGE:
                        case NEWLINE: {
                          break
                        }
                        default: {
                          chars += body.charAt(caret)
                        }
                      }

                      code = SEMICOLON
                    }
                  }

                  // auto semicolon insertion
                  if (insert === 1) {
                    switch (code) {
                      // false flags
                      case OPENBRACES:
                      case CLOSEBRACES:
                      case SEMICOLON:
                      case DOUBLEQUOTE:
                      case SINGLEQUOTE:
                      case OPENPARENTHESES:
                      case CLOSEPARENTHESES:
                      case COMMA: {
                        insert = 0
                      }
                      // ignore
                      case TAB:
                      case CARRIAGE:
                      case NEWLINE:
                      case SPACE: {
                        break
                      }
                      // valid
                      default: {
                        insert = 0
                        length = caret
                        first = code
                        caret--
                        code = SEMICOLON

                        while (length < eof) {
                          switch (body.charCodeAt(length++)) {
                            case NEWLINE:
                            case CARRIAGE:
                            case SEMICOLON: {
                              ++caret
                              code = first
                              length = eof
                              break
                            }
                            case COLON: {
                              if (format > 0) {
                                ++caret
                                code = first
                              }
                            }
                            case OPENBRACES: {
                              length = eof
                            }
                          }
                        }
                      }
                    }
                  }

                  // token varient
                  switch (code) {
                    case OPENBRACES: {
                      chars = chars.trim()
                      first = chars.charCodeAt(0)
                      counter = 1
                      length = ++caret

                      while (caret < eof) {
                        code = body.charCodeAt(caret)

                        switch (code) {
                          case OPENBRACES: {
                            counter++
                            break
                          }
                          case CLOSEBRACES: {
                            counter--
                            break
                          }
                        }

                        if (counter === 0) {
                          break
                        }

                        caret++
                      }

                      child = body.substring(length, caret)

                      if (first === NULL) {
                        first = (chars = chars
                          .replace(nullptn, '')
                          .trim()).charCodeAt(0)
                      }

                      switch (first) {
                        // @at-rule
                        case AT: {
                          if (format > 0) {
                            chars = chars.replace(formatptn, '')
                          }

                          second = chars.charCodeAt(1)

                          switch (second) {
                            case DOCUMENT:
                            case MEDIA:
                            case SUPPORTS:
                            case DASH: {
                              selector = current
                              break
                            }
                            default: {
                              selector = array
                            }
                          }

                          child = compile(
                            current,
                            selector,
                            child,
                            second,
                            depth + 1
                          )
                          length = child.length

                          // preserve empty @at-rule
                          if (preserve > 0 && length === 0) {
                            length = chars.length
                          }

                          // execute plugins, @at-rule context
                          if (plugged > 0) {
                            selector = select(array, chars, invert)
                            result = proxy(
                              ATRUL,
                              child,
                              selector,
                              current,
                              line,
                              column,
                              length,
                              second,
                              depth,
                              id
                            )
                            chars = selector.join('')

                            if (result !== void 0) {
                              if (
                                (length = (child = result.trim()).length) === 0
                              ) {
                                second = 0
                                child = ''
                              }
                            }
                          }

                          if (length > 0) {
                            switch (second) {
                              case SUPPORTS: {
                                chars = chars.replace(supportsptn, supports)
                              }
                              case DOCUMENT:
                              case MEDIA:
                              case DASH: {
                                child = chars + '{' + child + '}'
                                break
                              }
                              case KEYFRAME: {
                                chars = chars.replace(
                                  keyframeptn,
                                  '$1 $2' + (keyed > 0 ? key : '')
                                )
                                child = chars + '{' + child + '}'

                                if (
                                  prefix === 1 ||
                                  (prefix === 2 && vendor('@' + child, 3))
                                ) {
                                  child = '@' + webkit + child + '@' + child
                                } else {
                                  child = '@' + child
                                }
                                break
                              }
                              default: {
                                child = chars + child

                                if (id === PAGE) {
                                  child = ((out += child), '')
                                }
                              }
                            }
                          } else {
                            child = ''
                          }

                          break
                        }
                        // selector
                        default: {
                          child = compile(
                            current,
                            select(current, chars, invert),
                            child,
                            id,
                            depth + 1
                          )
                        }
                      }

                      children += child

                      // reset
                      context = 0
                      insert = 0
                      pseudo = 0
                      format = 0
                      invert = 0
                      atrule = 0
                      chars = ''
                      child = ''
                      code = body.charCodeAt(++caret)
                      break
                    }
                    case CLOSEBRACES:
                    case SEMICOLON: {
                      chars = (format > 0
                        ? chars.replace(formatptn, '')
                        : chars
                      ).trim()

                      if ((length = chars.length) > 1) {
                        // monkey-patch missing colon
                        if (pseudo === 0) {
                          first = chars.charCodeAt(0)

                          // first character is a letter or dash, buffer has a space character
                          if (first === DASH || (first > 96 && first < 123)) {
                            length = (chars = chars.replace(' ', ':')).length
                          }
                        }

                        // execute plugins, property context
                        if (plugged > 0) {
                          if (
                            (result = proxy(
                              PROPS,
                              chars,
                              current,
                              parent,
                              line,
                              column,
                              out.length,
                              id,
                              depth,
                              id
                            )) !== void 0
                          ) {
                            if (
                              (length = (chars = result.trim()).length) === 0
                            ) {
                              chars = '\0\0'
                            }
                          }
                        }

                        first = chars.charCodeAt(0)
                        second = chars.charCodeAt(1)

                        switch (first + second) {
                          case NULL: {
                            break
                          }
                          case IMPORT:
                          case CHARSET: {
                            flat += chars + body.charAt(caret)
                            break
                          }
                          default: {
                            if (chars.charCodeAt(length - 1) === COLON) break

                            out += property(
                              chars,
                              first,
                              second,
                              chars.charCodeAt(2)
                            )
                          }
                        }
                      }

                      // reset
                      context = 0
                      insert = 0
                      pseudo = 0
                      format = 0
                      invert = 0
                      chars = ''
                      code = body.charCodeAt(++caret)
                      break
                    }
                  }
                }

                // parse characters
                switch (code) {
                  case CARRIAGE:
                  case NEWLINE: {
                    // auto insert semicolon
                    if (
                      comment + quote + parentheses + bracket + semicolon ===
                      0
                    ) {
                      // valid non-whitespace characters that
                      // may precede a newline
                      switch (peak) {
                        case CLOSEPARENTHESES:
                        case SINGLEQUOTE:
                        case DOUBLEQUOTE:
                        case AT:
                        case TILDE:
                        case GREATERTHAN:
                        case STAR:
                        case PLUS:
                        case FOWARDSLASH:
                        case DASH:
                        case COLON:
                        case COMMA:
                        case SEMICOLON:
                        case OPENBRACES:
                        case CLOSEBRACES: {
                          break
                        }
                        default: {
                          // current buffer has a colon
                          if (pseudo > 0) {
                            insert = 1
                          }
                        }
                      }
                    }

                    // terminate line comment
                    if (comment === FOWARDSLASH) {
                      comment = 0
                    } else if (cascade + context === 0) {
                      format = 1
                      chars += '\0'
                    }

                    // execute plugins, newline context
                    if (plugged * unkwn > 0) {
                      proxy(
                        UNKWN,
                        chars,
                        current,
                        parent,
                        line,
                        column,
                        out.length,
                        id,
                        depth,
                        id
                      )
                    }

                    // next line, reset column position
                    column = 1
                    line++
                    break
                  }
                  case SEMICOLON:
                  case CLOSEBRACES: {
                    if (comment + quote + parentheses + bracket === 0) {
                      column++
                      break
                    }
                  }
                  default: {
                    // increment column position
                    column++

                    // current character
                    char = body.charAt(caret)

                    // remove comments, escape functions, strings, attributes and prepare selectors
                    switch (code) {
                      case TAB:
                      case SPACE: {
                        if (quote + bracket + comment === 0) {
                          switch (tail) {
                            case COMMA:
                            case COLON:
                            case TAB:
                            case SPACE: {
                              char = ''
                              break
                            }
                            default: {
                              if (code !== SPACE) {
                                char = ' '
                              }
                            }
                          }
                        }
                        break
                      }
                      // escape breaking control characters
                      case NULL: {
                        char = '\\0'
                        break
                      }
                      case FORMFEED: {
                        char = '\\f'
                        break
                      }
                      case VERTICALTAB: {
                        char = '\\v'
                        break
                      }
                      // &
                      case AND: {
                        // inverted selector pattern i.e html &
                        if (quote + comment + bracket === 0 && cascade > 0) {
                          invert = 1
                          format = 1
                          char = '\f' + char
                        }
                        break
                      }
                      // ::p<l>aceholder, l
                      // :read-on<l>y, l
                      case 108: {
                        if (
                          quote + comment + bracket + pattern === 0 &&
                          pseudo > 0
                        ) {
                          switch (caret - pseudo) {
                            // ::placeholder
                            case 2: {
                              if (
                                tail === PLACEHOLDER &&
                                body.charCodeAt(caret - 3) === COLON
                              ) {
                                pattern = tail
                              }
                            }
                            // :read-only
                            case 8: {
                              if (trail === READONLY) {
                                pattern = trail
                              }
                            }
                          }
                        }
                        break
                      }
                      // :<pattern>
                      case COLON: {
                        if (quote + comment + bracket === 0) {
                          pseudo = caret
                        }
                        break
                      }
                      // selectors
                      case COMMA: {
                        if (comment + parentheses + quote + bracket === 0) {
                          format = 1
                          char += '\r'
                        }
                        break
                      }
                      // quotes
                      case DOUBLEQUOTE: {
                        if (comment === 0) {
                          quote =
                            quote === code ? 0 : quote === 0 ? code : quote
                        }
                        break
                      }
                      case SINGLEQUOTE: {
                        if (comment === 0) {
                          quote =
                            quote === code ? 0 : quote === 0 ? code : quote
                        }
                        break
                      }
                      // attributes
                      case OPENBRACKET: {
                        if (quote + comment + parentheses === 0) {
                          bracket++
                        }
                        break
                      }
                      case CLOSEBRACKET: {
                        if (quote + comment + parentheses === 0) {
                          bracket--
                        }
                        break
                      }
                      // functions
                      case CLOSEPARENTHESES: {
                        if (quote + comment + bracket === 0) {
                          parentheses--
                        }
                        break
                      }
                      case OPENPARENTHESES: {
                        if (quote + comment + bracket === 0) {
                          if (context === 0) {
                            switch (tail * 2 + trail * 3) {
                              // :matches
                              case 533: {
                                break
                              }
                              // :global, :not, :nth-child etc...
                              default: {
                                counter = 0
                                context = 1
                              }
                            }
                          }

                          parentheses++
                        }
                        break
                      }
                      case AT: {
                        if (
                          comment +
                            parentheses +
                            quote +
                            bracket +
                            pseudo +
                            atrule ===
                          0
                        ) {
                          atrule = 1
                        }
                        break
                      }
                      // block/line comments
                      case STAR:
                      case FOWARDSLASH: {
                        if (quote + bracket + parentheses > 0) {
                          break
                        }

                        switch (comment) {
                          // initialize line/block comment context
                          case 0: {
                            switch (code * 2 + body.charCodeAt(caret + 1) * 3) {
                              // //
                              case 235: {
                                comment = FOWARDSLASH
                                break
                              }
                              // /*
                              case 220: {
                                length = caret
                                comment = STAR
                                break
                              }
                            }
                            break
                          }
                          // end block comment context
                          case STAR: {
                            if (code === FOWARDSLASH && tail === STAR) {
                              // /*<!> ... */, !
                              if (body.charCodeAt(length + 2) === 33) {
                                out += body.substring(length, caret + 1)
                              }
                              char = ''
                              comment = 0
                            }
                          }
                        }
                      }
                    }

                    // ignore comment blocks
                    if (comment === 0) {
                      // aggressive isolation mode, divide each individual selector
                      // including selectors in :not function but excluding selectors in :global function
                      if (
                        cascade + quote + bracket + atrule === 0 &&
                        id !== KEYFRAME &&
                        code !== SEMICOLON
                      ) {
                        switch (code) {
                          case COMMA:
                          case TILDE:
                          case GREATERTHAN:
                          case PLUS:
                          case CLOSEPARENTHESES:
                          case OPENPARENTHESES: {
                            if (context === 0) {
                              // outside of an isolated context i.e nth-child(<...>)
                              switch (tail) {
                                case TAB:
                                case SPACE:
                                case NEWLINE:
                                case CARRIAGE: {
                                  char = char + '\0'
                                  break
                                }
                                default: {
                                  char =
                                    '\0' + char + (code === COMMA ? '' : '\0')
                                }
                              }
                              format = 1
                            } else {
                              // within an isolated context, sleep untill it's terminated
                              switch (code) {
                                case OPENPARENTHESES: {
                                  context = ++counter
                                  break
                                }
                                case CLOSEPARENTHESES: {
                                  if ((context = --counter) === 0) {
                                    format = 1
                                    char += '\0'
                                  }
                                  break
                                }
                              }
                            }
                            break
                          }
                          case TAB:
                          case SPACE: {
                            switch (tail) {
                              case NULL:
                              case OPENBRACES:
                              case CLOSEBRACES:
                              case SEMICOLON:
                              case COMMA:
                              case FORMFEED:
                              case TAB:
                              case SPACE:
                              case NEWLINE:
                              case CARRIAGE: {
                                break
                              }
                              default: {
                                // ignore in isolated contexts
                                if (context === 0) {
                                  format = 1
                                  char += '\0'
                                }
                              }
                            }
                          }
                        }
                      }

                      // concat buffer of characters
                      chars += char

                      // previous non-whitespace character code
                      if (code !== SPACE && code !== TAB) {
                        peak = code
                      }
                    }
                  }
                }

                // tail character codes
                trail = tail
                tail = code

                // visit every character
                caret++
              }

              length = out.length

              // preserve empty selector
              if (preserve > 0) {
                if (
                  length === 0 &&
                  children.length === 0 &&
                  (current[0].length === 0) === false
                ) {
                  if (
                    id !== MEDIA ||
                    (current.length === 1 &&
                      (cascade > 0 ? nscopealt : nscope) === current[0])
                  ) {
                    length = current.join(',').length + 2
                  }
                }
              }

              if (length > 0) {
                // cascade isolation mode?
                selector =
                  cascade === 0 && id !== KEYFRAME ? isolate(current) : current

                // execute plugins, block context
                if (plugged > 0) {
                  result = proxy(
                    BLCKS,
                    out,
                    selector,
                    parent,
                    line,
                    column,
                    length,
                    id,
                    depth,
                    id
                  )

                  if (result !== void 0 && (out = result).length === 0) {
                    return flat + out + children
                  }
                }

                out = selector.join(',') + '{' + out + '}'

                if (prefix * pattern !== 0) {
                  if (prefix === 2 && !vendor(out, 2)) pattern = 0

                  switch (pattern) {
                    // ::read-only
                    case READONLY: {
                      out = out.replace(readonlyptn, ':' + moz + '$1') + out
                      break
                    }
                    // ::placeholder
                    case PLACEHOLDER: {
                      out =
                        out.replace(plcholdrptn, '::' + webkit + 'input-$1') +
                        out.replace(plcholdrptn, '::' + moz + '$1') +
                        out.replace(plcholdrptn, ':' + ms + 'input-$1') +
                        out
                      break
                    }
                  }

                  pattern = 0
                }
              }

              return flat + out + children
            }

            /**
             * Select
             *
             * @param {Array<string>} parent
             * @param {string} current
             * @param {number} invert
             * @return {Array<string>}
             */
            function select(parent, current, invert) {
              var selectors = current.trim().split(selectorptn)
              var out = selectors

              var length = selectors.length
              var l = parent.length

              switch (l) {
                // 0-1 parent selectors
                case 0:
                case 1: {
                  for (
                    var i = 0, selector = l === 0 ? '' : parent[0] + ' ';
                    i < length;
                    ++i
                  ) {
                    out[i] = scope(selector, out[i], invert, l).trim()
                  }
                  break
                }
                // >2 parent selectors, nested
                default: {
                  for (var i = 0, j = 0, out = []; i < length; ++i) {
                    for (var k = 0; k < l; ++k) {
                      out[j++] = scope(
                        parent[k] + ' ',
                        selectors[i],
                        invert,
                        l
                      ).trim()
                    }
                  }
                }
              }

              return out
            }

            /**
             * Scope
             *
             * @param {string} parent
             * @param {string} current
             * @param {number} invert
             * @param {number} level
             * @return {string}
             */
            function scope(parent, current, invert, level) {
              var selector = current
              var code = selector.charCodeAt(0)

              // trim leading whitespace
              if (code < 33) {
                code = (selector = selector.trim()).charCodeAt(0)
              }

              switch (code) {
                // &
                case AND: {
                  switch (cascade + level) {
                    case 0:
                    case 1: {
                      if (parent.trim().length === 0) {
                        break
                      }
                    }
                    default: {
                      return selector.replace(andptn, '$1' + parent.trim())
                    }
                  }
                  break
                }
                // :
                case COLON: {
                  switch (selector.charCodeAt(1)) {
                    // g in :global
                    case 103: {
                      if (escape > 0 && cascade > 0) {
                        return selector
                          .replace(escapeptn, '$1')
                          .replace(andptn, '$1' + nscope)
                      }
                      break
                    }
                    default: {
                      // :hover
                      return (
                        parent.trim() +
                        selector.replace(andptn, '$1' + parent.trim())
                      )
                    }
                  }
                }
                default: {
                  // html &
                  if (invert * cascade > 0 && selector.indexOf('\f') > 0) {
                    return selector.replace(
                      andptn,
                      (parent.charCodeAt(0) === COLON ? '' : '$1') +
                        parent.trim()
                    )
                  }
                }
              }

              return parent + selector
            }

            /**
             * Property
             *
             * @param {string} input
             * @param {number} first
             * @param {number} second
             * @param {number} third
             * @return {string}
             */
            function property(input, first, second, third) {
              var index = 0
              var out = input + ';'
              var hash = first * 2 + second * 3 + third * 4
              var cache

              // animation: a, n, i characters
              if (hash === 944) {
                return animation(out)
              } else if (prefix === 0 || (prefix === 2 && !vendor(out, 1))) {
                return out
              }

              // vendor prefix
              switch (hash) {
                // text-decoration/text-size-adjust/text-shadow/text-align/text-transform: t, e, x
                case 1015: {
                  // text-shadow/text-align/text-transform, a
                  return out.charCodeAt(10) === 97 ? webkit + out + out : out
                }
                // filter/fill f, i, l
                case 951: {
                  // filter, t
                  return out.charCodeAt(3) === 116 ? webkit + out + out : out
                }
                // color/column, c, o, l
                case 963: {
                  // column, n
                  return out.charCodeAt(5) === 110 ? webkit + out + out : out
                }
                // box-decoration-break, b, o, x
                case 1009: {
                  if (out.charCodeAt(4) !== 100) {
                    break
                  }
                }
                // mask, m, a, s
                // clip-path, c, l, i
                case 969:
                case 942: {
                  return webkit + out + out
                }
                // appearance: a, p, p
                case 978: {
                  return webkit + out + moz + out + out
                }
                // hyphens: h, y, p
                // user-select: u, s, e
                case 1019:
                case 983: {
                  return webkit + out + moz + out + ms + out + out
                }
                // background/backface-visibility, b, a, c
                case 883: {
                  // backface-visibility, -
                  return out.charCodeAt(8) === DASH ? webkit + out + out : out
                }
                // flex: f, l, e
                case 932: {
                  if (out.charCodeAt(4) === DASH) {
                    switch (out.charCodeAt(5)) {
                      // flex-grow, g
                      case 103: {
                        return (
                          webkit +
                          'box-' +
                          out.replace('-grow', '') +
                          webkit +
                          out +
                          ms +
                          out.replace('grow', 'positive') +
                          out
                        )
                      }
                      // flex-shrink, s
                      case 115: {
                        return (
                          webkit +
                          out +
                          ms +
                          out.replace('shrink', 'negative') +
                          out
                        )
                      }
                      // flex-basis, b
                      case 98: {
                        return (
                          webkit +
                          out +
                          ms +
                          out.replace('basis', 'preferred-size') +
                          out
                        )
                      }
                    }
                  }

                  return webkit + out + ms + out + out
                }
                // order: o, r, d
                case 964: {
                  return webkit + out + ms + 'flex' + '-' + out + out
                }
                // justify-items/justify-content, j, u, s
                case 1023: {
                  // justify-content, c
                  if (out.charCodeAt(8) !== 99) {
                    break
                  }

                  cache = out
                    .substring(out.indexOf(':', 15))
                    .replace('flex-', '')
                    .replace('space-between', 'justify')
                  return (
                    webkit +
                    'box-pack' +
                    cache +
                    webkit +
                    out +
                    ms +
                    'flex-pack' +
                    cache +
                    out
                  )
                }
                // cursor, c, u, r
                case 1005: {
                  return cursorptn.test(out)
                    ? out.replace(colonptn, ':' + webkit) +
                        out.replace(colonptn, ':' + moz) +
                        out
                    : out
                }
                // writing-mode, w, r, i
                case 1000: {
                  cache = out.substring(13).trim()
                  index = cache.indexOf('-') + 1

                  switch (cache.charCodeAt(0) + cache.charCodeAt(index)) {
                    // vertical-lr
                    case 226: {
                      cache = out.replace(writingptn, 'tb')
                      break
                    }
                    // vertical-rl
                    case 232: {
                      cache = out.replace(writingptn, 'tb-rl')
                      break
                    }
                    // horizontal-tb
                    case 220: {
                      cache = out.replace(writingptn, 'lr')
                      break
                    }
                    default: {
                      return out
                    }
                  }

                  return webkit + out + ms + cache + out
                }
                // position: sticky
                case 1017: {
                  if (out.indexOf('sticky', 9) === -1) {
                    return out
                  }
                }
                // display(flex/inline-flex/inline-box): d, i, s
                case 975: {
                  index = (out = input).length - 10
                  cache = (out.charCodeAt(index) === 33
                    ? out.substring(0, index)
                    : out
                  )
                    .substring(input.indexOf(':', 7) + 1)
                    .trim()

                  switch ((hash =
                    cache.charCodeAt(0) + (cache.charCodeAt(7) | 0))) {
                    // inline-
                    case 203: {
                      // inline-box
                      if (cache.charCodeAt(8) < 111) {
                        break
                      }
                    }
                    // inline-box/sticky
                    case 115: {
                      out = out.replace(cache, webkit + cache) + ';' + out
                      break
                    }
                    // inline-flex
                    // flex
                    case 207:
                    case 102: {
                      out =
                        out.replace(
                          cache,
                          webkit + (hash > 102 ? 'inline-' : '') + 'box'
                        ) +
                        ';' +
                        out.replace(cache, webkit + cache) +
                        ';' +
                        out.replace(cache, ms + cache + 'box') +
                        ';' +
                        out
                    }
                  }

                  return out + ';'
                }
                // align-items, align-center, align-self: a, l, i, -
                case 938: {
                  if (out.charCodeAt(5) === DASH) {
                    switch (out.charCodeAt(6)) {
                      // align-items, i
                      case 105: {
                        cache = out.replace('-items', '')
                        return (
                          webkit +
                          out +
                          webkit +
                          'box-' +
                          cache +
                          ms +
                          'flex-' +
                          cache +
                          out
                        )
                      }
                      // align-self, s
                      case 115: {
                        return (
                          webkit +
                          out +
                          ms +
                          'flex-item-' +
                          out.replace(selfptn, '') +
                          out
                        )
                      }
                      // align-content
                      default: {
                        return (
                          webkit +
                          out +
                          ms +
                          'flex-line-pack' +
                          out
                            .replace('align-content', '')
                            .replace(selfptn, '') +
                          out
                        )
                      }
                    }
                  }
                  break
                }
                // min/max
                case 973:
                case 989: {
                  // min-/max- height/width/block-size/inline-size
                  if (out.charCodeAt(3) !== DASH || out.charCodeAt(4) === 122) {
                    break
                  }
                }
                // height/width: min-content / width: max-content
                case 931:
                case 953: {
                  if (dimensionptn.test(input) === true) {
                    // stretch
                    if (
                      (cache = input.substring(
                        input.indexOf(':') + 1
                      )).charCodeAt(0) === 115
                    )
                      return property(
                        input.replace('stretch', 'fill-available'),
                        first,
                        second,
                        third
                      ).replace(':fill-available', ':stretch')
                    else
                      return (
                        out.replace(cache, webkit + cache) +
                        out.replace(cache, moz + cache.replace('fill-', '')) +
                        out
                      )
                  }
                  break
                }
                // transform, transition: t, r, a
                case 962: {
                  out =
                    webkit +
                    out +
                    (out.charCodeAt(5) === 102 ? ms + out : '') +
                    out

                  // transitions
                  if (
                    second + third === 211 &&
                    out.charCodeAt(13) === 105 &&
                    out.indexOf('transform', 10) > 0
                  ) {
                    return (
                      out
                        .substring(0, out.indexOf(';', 27) + 1)
                        .replace(transformptn, '$1' + webkit + '$2') + out
                    )
                  }

                  break
                }
              }

              return out
            }

            /**
             * Vendor
             *
             * @param {string} content
             * @param {number} context
             * @return {boolean}
             */
            function vendor(content, context) {
              var index = content.indexOf(context === 1 ? ':' : '{')
              var key = content.substring(0, context !== 3 ? index : 10)
              var value = content.substring(index + 1, content.length - 1)

              return should(
                context !== 2 ? key : key.replace(pseudofmt, '$1'),
                value,
                context
              )
            }

            /**
             * Supports
             *
             * @param {string} match
             * @param {string} group
             * @return {string}
             */
            function supports(match, group) {
              var out = property(
                group,
                group.charCodeAt(0),
                group.charCodeAt(1),
                group.charCodeAt(2)
              )

              return out !== group + ';'
                ? out.replace(propertyptn, ' or ($1)').substring(4)
                : '(' + group + ')'
            }

            /**
             * Animation
             *
             * @param {string} input
             * @return {string}
             */
            function animation(input) {
              var length = input.length
              var index = input.indexOf(':', 9) + 1
              var declare = input.substring(0, index).trim()
              var out = input.substring(index, length - 1).trim()

              switch (input.charCodeAt(9) * keyed) {
                case 0: {
                  break
                }
                // animation-*, -
                case DASH: {
                  // animation-name, n
                  if (input.charCodeAt(10) !== 110) {
                    break
                  }
                }
                // animation/animation-name
                default: {
                  // split in case of multiple animations
                  var list = out.split(((out = ''), animationptn))

                  for (
                    var i = 0, index = 0, length = list.length;
                    i < length;
                    index = 0, ++i
                  ) {
                    var value = list[i]
                    var items = value.split(propertiesptn)

                    while ((value = items[index])) {
                      var peak = value.charCodeAt(0)

                      if (
                        keyed === 1 &&
                        // letters
                        ((peak > AT && peak < 90) ||
                          (peak > 96 && peak < 123) ||
                          peak === UNDERSCORE ||
                          // dash but not in sequence i.e --
                          (peak === DASH && value.charCodeAt(1) !== DASH))
                      ) {
                        // not a number/function
                        switch (isNaN(parseFloat(value)) +
                          (value.indexOf('(') !== -1)) {
                          case 1: {
                            switch (value) {
                              // not a valid reserved keyword
                              case 'infinite':
                              case 'alternate':
                              case 'backwards':
                              case 'running':
                              case 'normal':
                              case 'forwards':
                              case 'both':
                              case 'none':
                              case 'linear':
                              case 'ease':
                              case 'ease-in':
                              case 'ease-out':
                              case 'ease-in-out':
                              case 'paused':
                              case 'reverse':
                              case 'alternate-reverse':
                              case 'inherit':
                              case 'initial':
                              case 'unset':
                              case 'step-start':
                              case 'step-end': {
                                break
                              }
                              default: {
                                value += key
                              }
                            }
                          }
                        }
                      }

                      items[index++] = value
                    }

                    out += (i === 0 ? '' : ',') + items.join(' ')
                  }
                }
              }

              out = declare + out + ';'

              if (prefix === 1 || (prefix === 2 && vendor(out, 1)))
                return webkit + out + out

              return out
            }

            /**
             * Isolate
             *
             * @param {Array<string>} current
             */
            function isolate(current) {
              for (
                var i = 0,
                  length = current.length,
                  selector = Array(length),
                  padding,
                  element;
                i < length;
                ++i
              ) {
                // split individual elements in a selector i.e h1 h2 === [h1, h2]
                var elements = current[i].split(elementptn)
                var out = ''

                for (
                  var j = 0, size = 0, tail = 0, code = 0, l = elements.length;
                  j < l;
                  ++j
                ) {
                  // empty element
                  if ((size = (element = elements[j]).length) === 0 && l > 1) {
                    continue
                  }

                  tail = out.charCodeAt(out.length - 1)
                  code = element.charCodeAt(0)
                  padding = ''

                  if (j !== 0) {
                    // determine if we need padding
                    switch (tail) {
                      case STAR:
                      case TILDE:
                      case GREATERTHAN:
                      case PLUS:
                      case SPACE:
                      case OPENPARENTHESES: {
                        break
                      }
                      default: {
                        padding = ' '
                      }
                    }
                  }

                  switch (code) {
                    case AND: {
                      element = padding + nscopealt
                    }
                    case TILDE:
                    case GREATERTHAN:
                    case PLUS:
                    case SPACE:
                    case CLOSEPARENTHESES:
                    case OPENPARENTHESES: {
                      break
                    }
                    case OPENBRACKET: {
                      element = padding + element + nscopealt
                      break
                    }
                    case COLON: {
                      switch (element.charCodeAt(1) * 2 +
                        element.charCodeAt(2) * 3) {
                        // :global
                        case 530: {
                          if (escape > 0) {
                            element = padding + element.substring(8, size - 1)
                            break
                          }
                        }
                        // :hover, :nth-child(), ...
                        default: {
                          if (j < 1 || elements[j - 1].length < 1) {
                            element = padding + nscopealt + element
                          }
                        }
                      }
                      break
                    }
                    case COMMA: {
                      padding = ''
                    }
                    default: {
                      if (size > 1 && element.indexOf(':') > 0) {
                        element =
                          padding +
                          element.replace(pseudoptn, '$1' + nscopealt + '$2')
                      } else {
                        element = padding + element + nscopealt
                      }
                    }
                  }

                  out += element
                }

                selector[i] = out.replace(formatptn, '').trim()
              }

              return selector
            }

            /**
             * Proxy
             *
             * @param {number} context
             * @param {string} content
             * @param {Array<string>} selectors
             * @param {Array<string>} parents
             * @param {number} line
             * @param {number} column
             * @param {number} length
             * @param {number} id
             * @param {number} depth
             * @param {number} at
             * @return {(string|void|*)}
             */
            function proxy(
              context,
              content,
              selectors,
              parents,
              line,
              column,
              length,
              id,
              depth,
              at
            ) {
              for (var i = 0, out = content, next; i < plugged; ++i) {
                switch ((next = plugins[i].call(
                  stylis,
                  context,
                  out,
                  selectors,
                  parents,
                  line,
                  column,
                  length,
                  id,
                  depth,
                  at
                ))) {
                  case void 0:
                  case false:
                  case true:
                  case null: {
                    break
                  }
                  default: {
                    out = next
                  }
                }
              }

              switch (out) {
                case void 0:
                case false:
                case true:
                case null:
                case content: {
                  break
                }
                default: {
                  return out
                }
              }
            }

            /**
             * Minify
             *
             * @param {(string|*)} output
             * @return {string}
             */
            function minify(output) {
              return output
                .replace(formatptn, '')
                .replace(beforeptn, '')
                .replace(afterptn, '$1')
                .replace(tailptn, '$1')
                .replace(whiteptn, ' ')
            }

            /**
             * Use
             *
             * @param {(Array<function(...?)>|function(...?)|number|void)?} plugin
             */
            function use(plugin) {
              switch (plugin) {
                case void 0:
                case null: {
                  plugged = plugins.length = 0
                  break
                }
                default: {
                  switch (plugin.constructor) {
                    case Array: {
                      for (var i = 0, length = plugin.length; i < length; ++i) {
                        use(plugin[i])
                      }
                      break
                    }
                    case Function: {
                      plugins[plugged++] = plugin
                      break
                    }
                    case Boolean: {
                      unkwn = !!plugin | 0
                    }
                  }
                }
              }

              return use
            }

            /**
             * Set
             *
             * @param {*} options
             */
            function set(options) {
              for (var name in options) {
                var value = options[name]
                switch (name) {
                  case 'keyframe':
                    keyed = value | 0
                    break
                  case 'global':
                    escape = value | 0
                    break
                  case 'cascade':
                    cascade = value | 0
                    break
                  case 'compress':
                    compress = value | 0
                    break
                  case 'semicolon':
                    semicolon = value | 0
                    break
                  case 'preserve':
                    preserve = value | 0
                    break
                  case 'prefix':
                    should = null

                    if (!value) {
                      prefix = 0
                    } else if (typeof value !== 'function') {
                      prefix = 1
                    } else {
                      prefix = 2
                      should = value
                    }
                }
              }

              return set
            }

            /**
             * Stylis
             *
             * @param {string} selector
             * @param {string} input
             * @return {*}
             */
            function stylis(selector, input) {
              if (this !== void 0 && this.constructor === stylis) {
                return factory(selector)
              }

              // setup
              var ns = selector
              var code = ns.charCodeAt(0)

              // trim leading whitespace
              if (code < 33) {
                code = (ns = ns.trim()).charCodeAt(0)
              }

              // keyframe/animation namespace
              if (keyed > 0) {
                key = ns.replace(invalidptn, code === OPENBRACKET ? '' : '-')
              }

              // reset, used to assert if a plugin is moneky-patching the return value
              code = 1

              // cascade/isolate
              if (cascade === 1) {
                nscope = ns
              } else {
                nscopealt = ns
              }

              var selectors = [nscope]
              var result

              // execute plugins, pre-process context
              if (plugged > 0) {
                result = proxy(
                  PREPS,
                  input,
                  selectors,
                  selectors,
                  line,
                  column,
                  0,
                  0,
                  0,
                  0
                )

                if (result !== void 0 && typeof result === 'string') {
                  input = result
                }
              }

              // build
              var output = compile(array, selectors, input, 0, 0)

              // execute plugins, post-process context
              if (plugged > 0) {
                result = proxy(
                  POSTS,
                  output,
                  selectors,
                  selectors,
                  line,
                  column,
                  output.length,
                  0,
                  0,
                  0
                )

                // bypass minification
                if (
                  result !== void 0 &&
                  typeof (output = result) !== 'string'
                ) {
                  code = 0
                }
              }

              // reset
              key = ''
              nscope = ''
              nscopealt = ''
              pattern = 0
              line = 1
              column = 1

              return compress * code === 0 ? output : minify(output)
            }

            stylis['use'] = use
            stylis['set'] = set

            if (options !== void 0) {
              set(options)
            }

            return stylis
          }
        )

        /***/
      },

      /***/ './node_modules/styled-system/dist/constants.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        var breakpoints = (exports.breakpoints = ['40em', '52em', '64em'])

        var space = (exports.space = [0, 4, 8, 16, 32, 64, 128, 256, 512])

        var fontSizes = (exports.fontSizes = [
          12,
          14,
          16,
          20,
          24,
          32,
          48,
          64,
          72
        ])

        exports.default = {
          breakpoints: breakpoints,
          space: space,
          fontSizes: fontSizes
        }

        /***/
      },

      /***/ './node_modules/styled-system/dist/index.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.propTypes = exports.util = exports.theme = exports.themeGet = exports.complexStyle = exports.responsiveStyle = exports.pseudoStyle = exports.style = exports.borderWidth = exports.buttonStyle = exports.colorStyle = exports.textStyle = exports.disabled = exports.active = exports.focus = exports.hover = exports.left = exports.bottom = exports.right = exports.top = exports.zIndex = exports.position = exports.backgroundRepeat = exports.backgroundPosition = exports.backgroundSize = exports.backgroundImage = exports.background = exports.boxShadow = exports.borderRadius = exports.borderColor = exports.borders = exports.borderLeft = exports.borderBottom = exports.borderRight = exports.borderTop = exports.border = exports.gridTemplateRows = exports.gridTemplateColumns = exports.gridAutoRows = exports.gridAutoColumns = exports.gridAutoFlow = exports.gridRow = exports.gridColumn = exports.gridRowGap = exports.gridColumnGap = exports.gridGap = exports.order = exports.alignSelf = exports.justifySelf = exports.flexBasis = exports.flex = exports.flexDirection = exports.flexWrap = exports.justifyContent = exports.alignContent = exports.alignItems = exports.ratio = exports.size = exports.minHeight = exports.maxHeight = exports.height = exports.minWidth = exports.maxWidth = exports.display = exports.letterSpacing = exports.fontWeight = exports.lineHeight = exports.textAlign = exports.fontFamily = exports.color = exports.bgColor = exports.textColor = exports.fontSize = exports.width = exports.space = exports.styles = undefined

        var _keys = __webpack_require__(
          './node_modules/babel-runtime/core-js/object/keys.js'
        )

        var _keys2 = _interopRequireDefault(_keys)

        var _styles2 = __webpack_require__(
          './node_modules/styled-system/dist/styles.js'
        )

        Object.defineProperty(exports, 'space', {
          enumerable: true,
          get: function get() {
            return _styles2.space
          }
        })
        Object.defineProperty(exports, 'width', {
          enumerable: true,
          get: function get() {
            return _styles2.width
          }
        })
        Object.defineProperty(exports, 'fontSize', {
          enumerable: true,
          get: function get() {
            return _styles2.fontSize
          }
        })
        Object.defineProperty(exports, 'textColor', {
          enumerable: true,
          get: function get() {
            return _styles2.textColor
          }
        })
        Object.defineProperty(exports, 'bgColor', {
          enumerable: true,
          get: function get() {
            return _styles2.bgColor
          }
        })
        Object.defineProperty(exports, 'color', {
          enumerable: true,
          get: function get() {
            return _styles2.color
          }
        })
        Object.defineProperty(exports, 'fontFamily', {
          enumerable: true,
          get: function get() {
            return _styles2.fontFamily
          }
        })
        Object.defineProperty(exports, 'textAlign', {
          enumerable: true,
          get: function get() {
            return _styles2.textAlign
          }
        })
        Object.defineProperty(exports, 'lineHeight', {
          enumerable: true,
          get: function get() {
            return _styles2.lineHeight
          }
        })
        Object.defineProperty(exports, 'fontWeight', {
          enumerable: true,
          get: function get() {
            return _styles2.fontWeight
          }
        })
        Object.defineProperty(exports, 'letterSpacing', {
          enumerable: true,
          get: function get() {
            return _styles2.letterSpacing
          }
        })
        Object.defineProperty(exports, 'display', {
          enumerable: true,
          get: function get() {
            return _styles2.display
          }
        })
        Object.defineProperty(exports, 'maxWidth', {
          enumerable: true,
          get: function get() {
            return _styles2.maxWidth
          }
        })
        Object.defineProperty(exports, 'minWidth', {
          enumerable: true,
          get: function get() {
            return _styles2.minWidth
          }
        })
        Object.defineProperty(exports, 'height', {
          enumerable: true,
          get: function get() {
            return _styles2.height
          }
        })
        Object.defineProperty(exports, 'maxHeight', {
          enumerable: true,
          get: function get() {
            return _styles2.maxHeight
          }
        })
        Object.defineProperty(exports, 'minHeight', {
          enumerable: true,
          get: function get() {
            return _styles2.minHeight
          }
        })
        Object.defineProperty(exports, 'size', {
          enumerable: true,
          get: function get() {
            return _styles2.size
          }
        })
        Object.defineProperty(exports, 'ratio', {
          enumerable: true,
          get: function get() {
            return _styles2.ratio
          }
        })
        Object.defineProperty(exports, 'alignItems', {
          enumerable: true,
          get: function get() {
            return _styles2.alignItems
          }
        })
        Object.defineProperty(exports, 'alignContent', {
          enumerable: true,
          get: function get() {
            return _styles2.alignContent
          }
        })
        Object.defineProperty(exports, 'justifyContent', {
          enumerable: true,
          get: function get() {
            return _styles2.justifyContent
          }
        })
        Object.defineProperty(exports, 'flexWrap', {
          enumerable: true,
          get: function get() {
            return _styles2.flexWrap
          }
        })
        Object.defineProperty(exports, 'flexDirection', {
          enumerable: true,
          get: function get() {
            return _styles2.flexDirection
          }
        })
        Object.defineProperty(exports, 'flex', {
          enumerable: true,
          get: function get() {
            return _styles2.flex
          }
        })
        Object.defineProperty(exports, 'flexBasis', {
          enumerable: true,
          get: function get() {
            return _styles2.flexBasis
          }
        })
        Object.defineProperty(exports, 'justifySelf', {
          enumerable: true,
          get: function get() {
            return _styles2.justifySelf
          }
        })
        Object.defineProperty(exports, 'alignSelf', {
          enumerable: true,
          get: function get() {
            return _styles2.alignSelf
          }
        })
        Object.defineProperty(exports, 'order', {
          enumerable: true,
          get: function get() {
            return _styles2.order
          }
        })
        Object.defineProperty(exports, 'gridGap', {
          enumerable: true,
          get: function get() {
            return _styles2.gridGap
          }
        })
        Object.defineProperty(exports, 'gridColumnGap', {
          enumerable: true,
          get: function get() {
            return _styles2.gridColumnGap
          }
        })
        Object.defineProperty(exports, 'gridRowGap', {
          enumerable: true,
          get: function get() {
            return _styles2.gridRowGap
          }
        })
        Object.defineProperty(exports, 'gridColumn', {
          enumerable: true,
          get: function get() {
            return _styles2.gridColumn
          }
        })
        Object.defineProperty(exports, 'gridRow', {
          enumerable: true,
          get: function get() {
            return _styles2.gridRow
          }
        })
        Object.defineProperty(exports, 'gridAutoFlow', {
          enumerable: true,
          get: function get() {
            return _styles2.gridAutoFlow
          }
        })
        Object.defineProperty(exports, 'gridAutoColumns', {
          enumerable: true,
          get: function get() {
            return _styles2.gridAutoColumns
          }
        })
        Object.defineProperty(exports, 'gridAutoRows', {
          enumerable: true,
          get: function get() {
            return _styles2.gridAutoRows
          }
        })
        Object.defineProperty(exports, 'gridTemplateColumns', {
          enumerable: true,
          get: function get() {
            return _styles2.gridTemplateColumns
          }
        })
        Object.defineProperty(exports, 'gridTemplateRows', {
          enumerable: true,
          get: function get() {
            return _styles2.gridTemplateRows
          }
        })
        Object.defineProperty(exports, 'border', {
          enumerable: true,
          get: function get() {
            return _styles2.border
          }
        })
        Object.defineProperty(exports, 'borderTop', {
          enumerable: true,
          get: function get() {
            return _styles2.borderTop
          }
        })
        Object.defineProperty(exports, 'borderRight', {
          enumerable: true,
          get: function get() {
            return _styles2.borderRight
          }
        })
        Object.defineProperty(exports, 'borderBottom', {
          enumerable: true,
          get: function get() {
            return _styles2.borderBottom
          }
        })
        Object.defineProperty(exports, 'borderLeft', {
          enumerable: true,
          get: function get() {
            return _styles2.borderLeft
          }
        })
        Object.defineProperty(exports, 'borders', {
          enumerable: true,
          get: function get() {
            return _styles2.borders
          }
        })
        Object.defineProperty(exports, 'borderColor', {
          enumerable: true,
          get: function get() {
            return _styles2.borderColor
          }
        })
        Object.defineProperty(exports, 'borderRadius', {
          enumerable: true,
          get: function get() {
            return _styles2.borderRadius
          }
        })
        Object.defineProperty(exports, 'boxShadow', {
          enumerable: true,
          get: function get() {
            return _styles2.boxShadow
          }
        })
        Object.defineProperty(exports, 'background', {
          enumerable: true,
          get: function get() {
            return _styles2.background
          }
        })
        Object.defineProperty(exports, 'backgroundImage', {
          enumerable: true,
          get: function get() {
            return _styles2.backgroundImage
          }
        })
        Object.defineProperty(exports, 'backgroundSize', {
          enumerable: true,
          get: function get() {
            return _styles2.backgroundSize
          }
        })
        Object.defineProperty(exports, 'backgroundPosition', {
          enumerable: true,
          get: function get() {
            return _styles2.backgroundPosition
          }
        })
        Object.defineProperty(exports, 'backgroundRepeat', {
          enumerable: true,
          get: function get() {
            return _styles2.backgroundRepeat
          }
        })
        Object.defineProperty(exports, 'position', {
          enumerable: true,
          get: function get() {
            return _styles2.position
          }
        })
        Object.defineProperty(exports, 'zIndex', {
          enumerable: true,
          get: function get() {
            return _styles2.zIndex
          }
        })
        Object.defineProperty(exports, 'top', {
          enumerable: true,
          get: function get() {
            return _styles2.top
          }
        })
        Object.defineProperty(exports, 'right', {
          enumerable: true,
          get: function get() {
            return _styles2.right
          }
        })
        Object.defineProperty(exports, 'bottom', {
          enumerable: true,
          get: function get() {
            return _styles2.bottom
          }
        })
        Object.defineProperty(exports, 'left', {
          enumerable: true,
          get: function get() {
            return _styles2.left
          }
        })
        Object.defineProperty(exports, 'hover', {
          enumerable: true,
          get: function get() {
            return _styles2.hover
          }
        })
        Object.defineProperty(exports, 'focus', {
          enumerable: true,
          get: function get() {
            return _styles2.focus
          }
        })
        Object.defineProperty(exports, 'active', {
          enumerable: true,
          get: function get() {
            return _styles2.active
          }
        })
        Object.defineProperty(exports, 'disabled', {
          enumerable: true,
          get: function get() {
            return _styles2.disabled
          }
        })
        Object.defineProperty(exports, 'textStyle', {
          enumerable: true,
          get: function get() {
            return _styles2.textStyle
          }
        })
        Object.defineProperty(exports, 'colorStyle', {
          enumerable: true,
          get: function get() {
            return _styles2.colorStyle
          }
        })
        Object.defineProperty(exports, 'buttonStyle', {
          enumerable: true,
          get: function get() {
            return _styles2.buttonStyle
          }
        })
        Object.defineProperty(exports, 'borderWidth', {
          enumerable: true,
          get: function get() {
            return _styles2.borderWidth
          }
        })

        var _util2 = __webpack_require__(
          './node_modules/styled-system/dist/util.js'
        )

        Object.defineProperty(exports, 'style', {
          enumerable: true,
          get: function get() {
            return _util2.style
          }
        })
        Object.defineProperty(exports, 'pseudoStyle', {
          enumerable: true,
          get: function get() {
            return _util2.pseudoStyle
          }
        })
        Object.defineProperty(exports, 'responsiveStyle', {
          enumerable: true,
          get: function get() {
            return _util2.responsiveStyle
          }
        })
        Object.defineProperty(exports, 'complexStyle', {
          enumerable: true,
          get: function get() {
            return _util2.complexStyle
          }
        })
        Object.defineProperty(exports, 'themeGet', {
          enumerable: true,
          get: function get() {
            return _util2.themeGet
          }
        })
        Object.defineProperty(exports, 'theme', {
          enumerable: true,
          get: function get() {
            return _util2.themeGet
          }
        })

        var styles = _interopRequireWildcard(_styles2)

        var _styles = _interopRequireWildcard(_styles2)

        var _util = _interopRequireWildcard(_util2)

        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj
          } else {
            var newObj = {}
            if (obj != null) {
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key))
                  newObj[key] = obj[key]
              }
            }
            newObj.default = obj
            return newObj
          }
        }

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        exports.styles = _styles
        exports.util = _util
        var propTypes = (exports.propTypes = {})
        ;(0, _keys2.default)(styles).forEach(function(key) {
          propTypes[key] = styles[key].propTypes
        })

        styles.propTypes = propTypes

        exports.default = styles

        /***/
      },

      /***/ './node_modules/styled-system/dist/space.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.space = undefined

        var _slicedToArray2 = __webpack_require__(
          './node_modules/babel-runtime/helpers/slicedToArray.js'
        )

        var _slicedToArray3 = _interopRequireDefault(_slicedToArray2)

        var _defineProperty2 = __webpack_require__(
          './node_modules/babel-runtime/helpers/defineProperty.js'
        )

        var _defineProperty3 = _interopRequireDefault(_defineProperty2)

        var _assign = __webpack_require__(
          './node_modules/babel-runtime/core-js/object/assign.js'
        )

        var _assign2 = _interopRequireDefault(_assign)

        var _keys = __webpack_require__(
          './node_modules/babel-runtime/core-js/object/keys.js'
        )

        var _keys2 = _interopRequireDefault(_keys)

        var _propTypes = __webpack_require__(
          './node_modules/next/node_modules/prop-types/index.js'
        )

        var _propTypes2 = _interopRequireDefault(_propTypes)

        var _util = __webpack_require__(
          './node_modules/styled-system/dist/util.js'
        )

        var _constants = __webpack_require__(
          './node_modules/styled-system/dist/constants.js'
        )

        var _constants2 = _interopRequireDefault(_constants)

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        var REG = /^[mp][trblxy]?$/

        var space = (exports.space = function space(props) {
          var keys = (0, _keys2.default)(props)
            .filter(function(key) {
              return REG.test(key)
            })
            .sort()
          var bp = (0, _util.breaks)(props)
          var sc = (0, _util.get)(
            props,
            'theme.space',
            _constants2.default.space
          )

          return keys
            .map(function(key) {
              var val = props[key]
              var p = getProperties(key)

              if (!Array.isArray(val)) {
                return p.reduce(function(a, b) {
                  return (0,
                  _assign2.default)(a, (0, _defineProperty3.default)({}, b, mx(sc)(val)))
                }, {})
              }

              return (0, _util.arr)(val)
                .map(mx(sc))
                .map((0, _util.dec)(p))
                .map((0, _util.media)(bp))
                .reduce(_util.merge, {})
            })
            .reduce(_util.merge, {})
        })

        var mx = function mx(scale) {
          return function(n) {
            if (!(0, _util.num)(n)) {
              return n
            }

            var value = scale[Math.abs(n)] || Math.abs(n)
            if (!(0, _util.num)(value)) {
              return value
            }

            return (0, _util.px)(value * ((0, _util.neg)(n) ? -1 : 1))
          }
        }

        var getProperties = function getProperties(key) {
          var _key$split = key.split(''),
            _key$split2 = (0, _slicedToArray3.default)(_key$split, 2),
            a = _key$split2[0],
            b = _key$split2[1]

          var prop = properties[a]
          var dirs = directions[b] || ['']
          return dirs.map(function(dir) {
            return prop + dir
          })
        }

        var properties = {
          m: 'margin',
          p: 'padding'
        }

        var directions = {
          t: ['Top'],
          r: ['Right'],
          b: ['Bottom'],
          l: ['Left'],
          x: ['Left', 'Right'],
          y: ['Top', 'Bottom']
        }

        var responsive = _propTypes2.default.oneOfType([
          _propTypes2.default.number,
          _propTypes2.default.string,
          _propTypes2.default.array
        ])

        space.propTypes = {
          m: responsive,
          mt: responsive,
          mr: responsive,
          mb: responsive,
          ml: responsive,
          mx: responsive,
          my: responsive,
          p: responsive,
          pt: responsive,
          pr: responsive,
          pb: responsive,
          pl: responsive,
          px: responsive,
          py: responsive
        }

        exports.default = space

        /***/
      },

      /***/ './node_modules/styled-system/dist/styles.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.borderWidth = exports.buttonStyle = exports.colorStyle = exports.textStyle = exports.disabled = exports.active = exports.focus = exports.hover = exports.left = exports.bottom = exports.right = exports.top = exports.zIndex = exports.position = exports.backgroundRepeat = exports.backgroundPosition = exports.backgroundSize = exports.backgroundImage = exports.background = exports.boxShadow = exports.borderRadius = exports.borderColor = exports.borders = exports.borderLeft = exports.borderBottom = exports.borderRight = exports.borderTop = exports.border = exports.gridTemplateRows = exports.gridTemplateColumns = exports.gridAutoRows = exports.gridAutoColumns = exports.gridAutoFlow = exports.gridRow = exports.gridColumn = exports.gridRowGap = exports.gridColumnGap = exports.gridGap = exports.order = exports.alignSelf = exports.justifySelf = exports.flex = exports.flexDirection = exports.flexBasis = exports.flexWrap = exports.justifyContent = exports.alignContent = exports.alignItems = exports.ratio = exports.ratioPadding = exports.size = exports.sizeHeight = exports.sizeWidth = exports.minHeight = exports.maxHeight = exports.height = exports.minWidth = exports.maxWidth = exports.display = exports.letterSpacing = exports.fontWeight = exports.lineHeight = exports.textAlign = exports.fontFamily = exports.color = exports.bgColor = exports.textColor = exports.fontSize = exports.width = exports.space = undefined

        var _extends2 = __webpack_require__(
          './node_modules/babel-runtime/helpers/extends.js'
        )

        var _extends3 = _interopRequireDefault(_extends2)

        var _space = __webpack_require__(
          './node_modules/styled-system/dist/space.js'
        )

        Object.defineProperty(exports, 'space', {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_space).default
          }
        })

        var _util = __webpack_require__(
          './node_modules/styled-system/dist/util.js'
        )

        var util = _interopRequireWildcard(_util)

        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj
          } else {
            var newObj = {}
            if (obj != null) {
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key))
                  newObj[key] = obj[key]
              }
            }
            newObj.default = obj
            return newObj
          }
        }

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        var getWidth = function getWidth(n) {
          return !util.num(n) || n > 1 ? util.px(n) : n * 100 + '%'
        }
        var width = (exports.width = (0, _util.responsiveStyle)({
          prop: 'width',
          alias: 'w',
          getter: getWidth
        }))

        var fontSize = (exports.fontSize = (0, _util.responsiveStyle)({
          prop: 'fontSize',
          alias: 'f',
          key: 'fontSizes',
          numberToPx: true
        }))

        var textColor = (exports.textColor = (0, _util.responsiveStyle)({
          prop: 'color',
          key: 'colors'
        }))

        var bgColor = (exports.bgColor = (0, _util.responsiveStyle)({
          prop: 'bg',
          cssProperty: 'backgroundColor',
          key: 'colors'
        }))

        var color = (exports.color = function color(props) {
          return (0, _extends3.default)({}, textColor(props), bgColor(props))
        })
        color.propTypes = (0, _extends3.default)(
          {},
          textColor.propTypes,
          bgColor.propTypes
        )

        // typography
        var fontFamily = (exports.fontFamily = (0, _util.style)({
          prop: 'fontFamily',
          alias: 'font',
          key: 'fonts'
        }))

        var textAlign = (exports.textAlign = (0, _util.responsiveStyle)({
          prop: 'textAlign',
          // for backwards compatibility - will cause bugs when used with alignItems
          alias: 'align'
        }))

        var lineHeight = (exports.lineHeight = (0, _util.style)({
          prop: 'lineHeight',
          key: 'lineHeights'
        }))

        var fontWeight = (exports.fontWeight = (0, _util.style)({
          prop: 'fontWeight',
          key: 'fontWeights'
        }))

        var letterSpacing = (exports.letterSpacing = (0, _util.style)({
          prop: 'letterSpacing',
          key: 'letterSpacings',
          numberToPx: true
        }))

        // layout
        var display = (exports.display = (0, _util.responsiveStyle)({
          prop: 'display'
        }))

        var maxWidth = (exports.maxWidth = (0, _util.responsiveStyle)({
          prop: 'maxWidth',
          key: 'maxWidths',
          numberToPx: true
        }))

        var minWidth = (exports.minWidth = (0, _util.responsiveStyle)({
          prop: 'minWidth',
          key: 'minWidths',
          numberToPx: true
        }))

        var height = (exports.height = (0, _util.responsiveStyle)({
          prop: 'height',
          key: 'heights',
          numberToPx: true
        }))

        var maxHeight = (exports.maxHeight = (0, _util.responsiveStyle)({
          prop: 'maxHeight',
          key: 'maxHeights',
          numberToPx: true
        }))

        var minHeight = (exports.minHeight = (0, _util.responsiveStyle)({
          prop: 'minHeight',
          key: 'minHeights',
          numberToPx: true
        }))

        var sizeWidth = (exports.sizeWidth = (0, _util.responsiveStyle)({
          prop: 'size',
          cssProperty: 'width',
          numberToPx: true
        }))

        var sizeHeight = (exports.sizeHeight = (0, _util.responsiveStyle)({
          prop: 'size',
          cssProperty: 'height',
          numberToPx: true
        }))

        var size = (exports.size = function size(props) {
          return (0, _extends3.default)({}, sizeWidth(props), sizeHeight(props))
        })
        size.propTypes = (0, _extends3.default)(
          {},
          sizeWidth.propTypes,
          sizeHeight.propTypes
        )

        var ratioPadding = (exports.ratioPadding = (0, _util.style)({
          prop: 'ratio',
          cssProperty: 'paddingBottom',
          getter: function getter(n) {
            return n * 100 + '%'
          }
        }))

        var ratio = (exports.ratio = function ratio(props) {
          return (0, _extends3.default)(
            {
              height: 0
            },
            ratioPadding(props)
          )
        })
        ratio.propTypes = (0, _extends3.default)({}, ratioPadding.propTypes)

        // flexbox
        var alignItems = (exports.alignItems = (0, _util.responsiveStyle)({
          prop: 'alignItems',
          // for backwards compatibility - will cause bugs when used with textAlign
          alias: 'align'
        }))

        var alignContent = (exports.alignContent = (0, _util.responsiveStyle)({
          prop: 'alignContent'
        }))

        var justifyContent = (exports.justifyContent = (0,
        _util.responsiveStyle)({
          prop: 'justifyContent',
          // for backwards compatibility
          alias: 'justify'
        }))

        // for backwards compatibility
        var flexWrapShim = function flexWrapShim(n) {
          return n === true ? 'wrap' : n
        }
        var flexWrap = (exports.flexWrap = (0, _util.responsiveStyle)({
          prop: 'flexWrap',
          alias: 'wrap',
          getter: flexWrapShim
        }))

        var flexBasis = (exports.flexBasis = (0, _util.responsiveStyle)({
          prop: 'flexBasis',
          getter: getWidth
        }))

        var flexDirection = (exports.flexDirection = (0, _util.responsiveStyle)(
          {
            prop: 'flexDirection'
          }
        ))

        var flex = (exports.flex = (0, _util.responsiveStyle)({
          prop: 'flex'
        }))

        var justifySelf = (exports.justifySelf = (0, _util.responsiveStyle)({
          prop: 'justifySelf'
        }))

        var alignSelf = (exports.alignSelf = (0, _util.responsiveStyle)({
          prop: 'alignSelf'
        }))

        var order = (exports.order = (0, _util.responsiveStyle)({
          prop: 'order'
        }))

        // grid
        var gridGap = (exports.gridGap = (0, _util.responsiveStyle)({
          prop: 'gridGap',
          numberToPx: true,
          key: 'space'
        }))

        var gridColumnGap = (exports.gridColumnGap = (0, _util.responsiveStyle)(
          {
            prop: 'gridColumnGap',
            numberToPx: true,
            key: 'space'
          }
        ))

        var gridRowGap = (exports.gridRowGap = (0, _util.responsiveStyle)({
          prop: 'gridRowGap',
          numberToPx: true,
          key: 'space'
        }))

        var gridColumn = (exports.gridColumn = (0, _util.responsiveStyle)({
          prop: 'gridColumn'
        }))

        var gridRow = (exports.gridRow = (0, _util.responsiveStyle)({
          prop: 'gridRow'
        }))

        var gridAutoFlow = (exports.gridAutoFlow = (0, _util.style)({
          prop: 'gridAutoFlow'
        }))

        var gridAutoColumns = (exports.gridAutoColumns = (0, _util.style)({
          prop: 'gridAutoColumns'
        }))

        var gridAutoRows = (exports.gridAutoRows = (0, _util.style)({
          prop: 'gridAutoRows'
        }))

        var gridTemplateColumns = (exports.gridTemplateColumns = (0,
        _util.responsiveStyle)({
          prop: 'gridTemplateColumns'
        }))

        var gridTemplateRows = (exports.gridTemplateRows = (0,
        _util.responsiveStyle)({
          prop: 'gridTemplateRows'
        }))

        // borders
        var getBorder = function getBorder(n) {
          return util.num(n) && n > 0 ? n + 'px solid' : n
        }

        var border = (exports.border = (0, _util.responsiveStyle)({
          prop: 'border',
          key: 'borders',
          getter: getBorder
        }))

        var borderTop = (exports.borderTop = (0, _util.responsiveStyle)({
          prop: 'borderTop',
          key: 'borders',
          getter: getBorder
        }))

        var borderRight = (exports.borderRight = (0, _util.responsiveStyle)({
          prop: 'borderRight',
          key: 'borders',
          getter: getBorder
        }))

        var borderBottom = (exports.borderBottom = (0, _util.responsiveStyle)({
          prop: 'borderBottom',
          key: 'borders',
          getter: getBorder
        }))

        var borderLeft = (exports.borderLeft = (0, _util.responsiveStyle)({
          prop: 'borderLeft',
          key: 'borders',
          getter: getBorder
        }))

        var borders = (exports.borders = function borders(props) {
          return (0, _extends3.default)(
            {},
            border(props),
            borderTop(props),
            borderRight(props),
            borderBottom(props),
            borderLeft(props)
          )
        })
        borders.propTypes = (0, _extends3.default)(
          {},
          border.propTypes,
          borderTop.propTypes,
          borderRight.propTypes,
          borderBottom.propTypes,
          borderLeft.propTypes
        )

        var borderColor = (exports.borderColor = (0, _util.style)({
          prop: 'borderColor',
          key: 'colors'
        }))

        var borderRadius = (exports.borderRadius = (0, _util.style)({
          prop: 'borderRadius',
          key: 'radii',
          numberToPx: true
        }))

        var boxShadow = (exports.boxShadow = (0, _util.style)({
          prop: 'boxShadow',
          key: 'shadows'
        }))

        // backgrounds
        var background = (exports.background = (0, _util.style)({
          prop: 'background'
        }))

        var backgroundImage = (exports.backgroundImage = (0, _util.style)({
          prop: 'backgroundImage',
          alias: 'bgImage',
          getter: function getter(n) {
            return 'url(' + n + ')'
          }
        }))

        var backgroundSize = (exports.backgroundSize = (0, _util.style)({
          prop: 'backgroundSize',
          alias: 'bgSize'
        }))

        var backgroundPosition = (exports.backgroundPosition = (0, _util.style)(
          {
            prop: 'backgroundPosition',
            alias: 'bgPosition'
          }
        ))

        var backgroundRepeat = (exports.backgroundRepeat = (0, _util.style)({
          prop: 'backgroundRepeat',
          alias: 'bgRepeat'
        }))

        // position
        var position = (exports.position = (0, _util.responsiveStyle)({
          prop: 'position'
        }))

        var zIndex = (exports.zIndex = (0, _util.style)({
          prop: 'zIndex'
        }))

        var top = (exports.top = (0, _util.responsiveStyle)({
          prop: 'top',
          numberToPx: true
        }))

        var right = (exports.right = (0, _util.responsiveStyle)({
          prop: 'right',
          numberToPx: true
        }))

        var bottom = (exports.bottom = (0, _util.responsiveStyle)({
          prop: 'bottom',
          numberToPx: true
        }))

        var left = (exports.left = (0, _util.responsiveStyle)({
          prop: 'left',
          numberToPx: true
        }))

        // pseudos
        var hover = (exports.hover = (0, _util.pseudoStyle)({
          prop: 'hover',
          pseudoclass: 'hover',
          keys: {
            color: 'colors',
            backgroundColor: 'colors',
            borderColor: 'colors',
            boxShadow: 'shadows'
          }
        }))

        var focus = (exports.focus = (0, _util.pseudoStyle)({
          prop: 'focus',
          keys: {
            color: 'colors',
            backgroundColor: 'colors',
            borderColor: 'colors',
            boxShadow: 'shadows'
          }
        }))

        var active = (exports.active = (0, _util.pseudoStyle)({
          prop: 'active',
          keys: {
            color: 'colors',
            backgroundColor: 'colors',
            borderColor: 'colors',
            boxShadow: 'shadows'
          }
        }))

        var disabled = (exports.disabled = (0, _util.pseudoStyle)({
          prop: 'disabledStyle',
          pseudoclass: 'disabled',
          keys: {
            color: 'colors',
            backgroundColor: 'colors',
            borderColor: 'colors',
            boxShadow: 'shadows'
          }
        }))

        var textStyle = (exports.textStyle = (0, _util.complexStyle)({
          prop: 'textStyle',
          key: 'textStyles'
        }))

        var colorStyle = (exports.colorStyle = (0, _util.complexStyle)({
          prop: 'colors',
          key: 'colorStyles'
        }))

        var buttonStyle = (exports.buttonStyle = (0, _util.complexStyle)({
          prop: 'buttonStyle',
          key: 'buttons'
        }))

        // for backwards-compatibility
        // these will be removed in v3
        var __DEV__ = 'development' !== 'production'

        var borderWidth = (exports.borderWidth = (0, _util.style)({
          prop: 'borderWidth',
          cssProperty: 'border',
          key: 'borderWidths',
          getter: function getter(v) {
            if (__DEV__) {
              console.warn(
                'borderWidth is deprecated. Please use the `borders` utility instead'
              )
            }
            return getBorder(v)
          }
        }))

        /***/
      },

      /***/ './node_modules/styled-system/dist/util.js': /***/ function(
        module,
        exports,
        __webpack_require__
      ) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.complexStyle = exports.themeGet = exports.pseudoStyle = exports.responsiveStyle = exports.style = exports.getValue = exports.merge = exports.media = exports.dec = exports.breaks = exports.fallbackTheme = exports.mq = exports.get = exports.arr = exports.neg = exports.px = exports.num = exports.is = undefined

        var _typeof2 = __webpack_require__(
          './node_modules/babel-runtime/helpers/typeof.js'
        )

        var _typeof3 = _interopRequireDefault(_typeof2)

        var _keys = __webpack_require__(
          './node_modules/babel-runtime/core-js/object/keys.js'
        )

        var _keys2 = _interopRequireDefault(_keys)

        var _assign = __webpack_require__(
          './node_modules/babel-runtime/core-js/object/assign.js'
        )

        var _assign2 = _interopRequireDefault(_assign)

        var _defineProperty2 = __webpack_require__(
          './node_modules/babel-runtime/helpers/defineProperty.js'
        )

        var _defineProperty3 = _interopRequireDefault(_defineProperty2)

        var _toConsumableArray2 = __webpack_require__(
          './node_modules/babel-runtime/helpers/toConsumableArray.js'
        )

        var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2)

        var _extends2 = __webpack_require__(
          './node_modules/babel-runtime/helpers/extends.js'
        )

        var _extends3 = _interopRequireDefault(_extends2)

        var _propTypes = __webpack_require__(
          './node_modules/next/node_modules/prop-types/index.js'
        )

        var _propTypes2 = _interopRequireDefault(_propTypes)

        var _constants = __webpack_require__(
          './node_modules/styled-system/dist/constants.js'
        )

        var _constants2 = _interopRequireDefault(_constants)

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        var propTypes = {
          responsive: _propTypes2.default.oneOfType([
            _propTypes2.default.number,
            _propTypes2.default.string,
            _propTypes2.default.array
          ]),
          numberOrString: _propTypes2.default.oneOfType([
            _propTypes2.default.number,
            _propTypes2.default.string
          ])
        }

        var is = (exports.is = function is(n) {
          return n !== undefined && n !== null
        })
        var num = (exports.num = function num(n) {
          return typeof n === 'number' && !isNaN(n)
        })
        var px = (exports.px = function px(n) {
          return num(n) ? n + 'px' : n
        })
        var neg = (exports.neg = function neg(n) {
          return n < 0
        })
        var arr = (exports.arr = function arr(n) {
          return Array.isArray(n) ? n : [n]
        })

        var get = (exports.get = function get(obj, path, fallback) {
          return (
            path.split('.').reduce(function(a, b) {
              return a && a[b] ? a[b] : null
            }, obj) || fallback
          )
        })

        var mq = (exports.mq = function mq(n) {
          return '@media screen and (min-width: ' + px(n) + ')'
        })

        var fallbackTheme = (exports.fallbackTheme = function fallbackTheme(
          props
        ) {
          return (0, _extends3.default)(
            {},
            _constants2.default,
            get(props, 'theme')
          )
        })

        var breaks = (exports.breaks = function breaks(props) {
          return [null].concat(
            (0, _toConsumableArray3.default)(
              get(props, 'theme.breakpoints', _constants.breakpoints).map(mq)
            )
          )
        })

        var dec = (exports.dec = function dec(props) {
          return function(val) {
            return arr(props).reduce(function(acc, prop) {
              return (acc[prop] = val), acc
            }, {})
          }
        })

        var media = (exports.media = function media(bp) {
          return function(d, i) {
            return is(d)
              ? bp[i] ? (0, _defineProperty3.default)({}, bp[i], d) : d
              : null
          }
        })

        var merge = (exports.merge = function merge(a, b) {
          return (0, _assign2.default)(
            {},
            a,
            b,
            (0, _keys2.default)(b).reduce(function(obj, key) {
              return (0,
              _assign2.default)(obj, (0, _defineProperty3.default)({}, key, a[key] !== null && (0, _typeof3.default)(a[key]) === 'object' ? merge(a[key], b[key]) : b[key]))
            }, {})
          )
        })

        var getValue = (exports.getValue = function getValue(
          val,
          getter,
          toPx
        ) {
          return typeof getter === 'function'
            ? getter(val)
            : toPx ? px(val) : val
        })

        var style = (exports.style = function style(_ref2) {
          var prop = _ref2.prop,
            cssProperty = _ref2.cssProperty,
            alias = _ref2.alias,
            key = _ref2.key,
            getter = _ref2.getter,
            numberToPx = _ref2.numberToPx

          var fn = function fn(props) {
            cssProperty = cssProperty || prop
            var n = is(props[prop]) ? props[prop] : props[alias]
            var th = fallbackTheme(props)
            if (!is(n)) return null
            var value = getValue(
              get(th, [key, n].join('.'), n),
              getter,
              numberToPx
            )

            return (0, _defineProperty3.default)({}, cssProperty, value)
          }
          fn.propTypes = (0, _defineProperty3.default)(
            {},
            prop,
            propTypes.numberOrString
          )
          if (alias) {
            fn.propTypes[alias] = propTypes.numberOrString
          }
          return fn
        })

        var responsiveStyle = (exports.responsiveStyle = function responsiveStyle(
          _ref4
        ) {
          var prop = _ref4.prop,
            cssProperty = _ref4.cssProperty,
            alias = _ref4.alias,
            key = _ref4.key,
            getter = _ref4.getter,
            numberToPx = _ref4.numberToPx

          var fn = function fn(props) {
            cssProperty = cssProperty || prop
            var n = is(props[prop]) ? props[prop] : props[alias]
            if (!is(n)) return null

            var bp = breaks(props)
            var th = fallbackTheme(props)
            var sx = function sx(n) {
              return getValue(
                get(th, [key || prop, n].join('.'), n),
                getter,
                numberToPx
              )
            }

            if (!Array.isArray(n)) {
              return (0, _defineProperty3.default)({}, cssProperty, sx(n))
            }

            var val = arr(n)
            return val
              .map(sx)
              .map(dec(cssProperty))
              .map(media(bp))
              .reduce(merge, {})
          }

          // add propTypes object to returned function
          fn.propTypes = (0, _defineProperty3.default)(
            {},
            prop,
            propTypes.responsive
          )
          if (alias) {
            fn.propTypes[alias] = propTypes.responsive
          }

          return fn
        })

        var pseudoStyle = (exports.pseudoStyle = function pseudoStyle(_ref6) {
          var prop = _ref6.prop,
            alias = _ref6.alias,
            pseudoclass = _ref6.pseudoclass,
            _ref6$keys = _ref6.keys,
            keys = _ref6$keys === undefined ? {} : _ref6$keys,
            _ref6$getters = _ref6.getters,
            getters = _ref6$getters === undefined ? {} : _ref6$getters,
            _ref6$numberToPx = _ref6.numberToPx,
            numberToPx = _ref6$numberToPx === undefined ? {} : _ref6$numberToPx

          var fn = function fn(props) {
            var style = props[prop] || props[alias]
            pseudoclass = pseudoclass || prop
            var th = fallbackTheme(props)
            for (var key in style) {
              var toPx = numberToPx[key]
              if (!keys[key] && !getters[key] && !toPx) continue
              var themeKey = [keys[key], style[key]].join('.')
              style[key] = getValue(
                get(th, themeKey, style[key]),
                getters[key],
                toPx
              )
            }

            return (0, _defineProperty3.default)({}, '&:' + pseudoclass, style)
          }
          fn.propTypes = (0, _defineProperty3.default)(
            {},
            prop,
            _propTypes2.default.object
          )
          return fn
        })

        // todo: consider alternative names
        var themeGet = (exports.themeGet = function themeGet(keys, fallback) {
          return function(props) {
            return get(props.theme, keys, fallback)
          }
        })

        var getBooleans = function getBooleans(props) {
          var bools = []
          for (var key in props) {
            if (props[key] !== true) continue
            bools.push(key)
          }
          return bools
        }

        var complexStyle = (exports.complexStyle = function complexStyle(
          _ref8
        ) {
          var prop = _ref8.prop,
            key = _ref8.key,
            alias = _ref8.alias

          var fn = function fn(props) {
            var style = get(
              props,
              ['theme', key, get(props, prop, props[alias])].join('.'),
              {}
            )
            var bools = getBooleans(props)
            bools.forEach(function(name) {
              style = (0, _extends3.default)(
                {},
                style,
                get(props, ['theme', key, name].join('.'), {})
              )
            })
            return style
          }

          fn.propTypes = (0, _defineProperty3.default)(
            {},
            prop,
            _propTypes2.default.oneOfType([
              _propTypes2.default.number,
              _propTypes2.default.string
            ])
          )

          if (alias) {
            fn.propTypes[alias] = _propTypes2.default.oneOfType([
              _propTypes2.default.number,
              _propTypes2.default.string
            ])
          }

          return fn
        })

        /***/
      },

      /***/ './node_modules/webpack/buildin/harmony-module.js': /***/ function(
        module,
        exports
      ) {
        module.exports = function(originalModule) {
          if (!originalModule.webpackPolyfill) {
            var module = Object.create(originalModule)
            // module.parent = undefined by default
            if (!module.children) module.children = []
            Object.defineProperty(module, 'loaded', {
              enumerable: true,
              get: function() {
                return module.l
              }
            })
            Object.defineProperty(module, 'id', {
              enumerable: true,
              get: function() {
                return module.i
              }
            })
            Object.defineProperty(module, 'exports', {
              enumerable: true
            })
            module.webpackPolyfill = 1
          }
          return module
        }

        /***/
      },

      /***/ './pages/index.jsx': /***/ function(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict'
        Object.defineProperty(__webpack_exports__, '__esModule', {
          value: true
        })
        /* WEBPACK VAR INJECTION */
        ;(function(module) {
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(
            './node_modules/babel-runtime/regenerator/index.js'
          )
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(
            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__
          )
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(
            './node_modules/react/cjs/react.development.js'
          )
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(
            __WEBPACK_IMPORTED_MODULE_1_react__
          )
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_load_script__ = __webpack_require__(
            './node_modules/react-load-script/lib/index.js'
          )
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_load_script___default = __webpack_require__.n(
            __WEBPACK_IMPORTED_MODULE_2_react_load_script__
          )
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__(
            './node_modules/next/router.js'
          )
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(
            __WEBPACK_IMPORTED_MODULE_3_next_router__
          )
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grid_styled__ = __webpack_require__(
            './node_modules/grid-styled/dist/index.js'
          )
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grid_styled___default = __webpack_require__.n(
            __WEBPACK_IMPORTED_MODULE_4_grid_styled__
          )
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers__ = __webpack_require__(
            './helpers/index.js'
          )

          var _jsxFileName =
            '/Users/josefranciscoverdugambin/Downloads/changelog-website/pages/index.jsx'

          var _createClass = (function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i]
                descriptor.enumerable = descriptor.enumerable || false
                descriptor.configurable = true
                if ('value' in descriptor) descriptor.writable = true
                Object.defineProperty(target, descriptor.key, descriptor)
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps)
              if (staticProps) defineProperties(Constructor, staticProps)
              return Constructor
            }
          })()
          ;(function() {
            var enterModule = __webpack_require__(
              './node_modules/react-hot-loader/index.js'
            ).enterModule

            enterModule && enterModule(module)
          })()

          function _asyncToGenerator(fn) {
            return function() {
              var gen = fn.apply(this, arguments)
              return new Promise(function(resolve, reject) {
                function step(key, arg) {
                  try {
                    var info = gen[key](arg)
                    var value = info.value
                  } catch (error) {
                    reject(error)
                    return
                  }
                  if (info.done) {
                    resolve(value)
                  } else {
                    return Promise.resolve(value).then(
                      function(value) {
                        step('next', value)
                      },
                      function(err) {
                        step('throw', err)
                      }
                    )
                  }
                }
                return step('next')
              })
            }
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function')
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            }
            return call &&
              (typeof call === 'object' || typeof call === 'function')
              ? call
              : self
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof superClass
              )
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true
                }
              }
            )
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass)
          }

          /* global particlesJS */

          var INPUT_COLOR = {
            IDLE: '#555',
            SUCCESS: '#43a047',
            ERROR: '#f44336'
          }

          var Home = (function(_Component) {
            _inherits(Home, _Component)

            function Home(props) {
              _classCallCheck(this, Home)

              var _this = _possibleConstructorReturn(
                this,
                (Home.__proto__ || Object.getPrototypeOf(Home)).call(
                  this,
                  props
                )
              )

              _this.state = { pkgName: '', inputColor: INPUT_COLOR.IDLE }
              _this.handleSubmit = _this.handleSubmit.bind(_this)
              return _this
            }

            _createClass(Home, [
              {
                key: 'handleSubmit',
                value: function handleSubmit(event) {
                  event.preventDefault()
                  var _state = this.state,
                    pkgName = _state.pkgName,
                    inputColor = _state.inputColor

                  if (inputColor === INPUT_COLOR.SUCCESS)
                    __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.push(
                      '/' + pkgName
                    )
                }
              },
              {
                key: 'renderHeader',
                value: function renderHeader() {
                  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'header',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'h1',
                      {
                        style: { margin: 0 },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 32
                        }
                      },
                      'changelog.now.sh'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'p',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 33
                        }
                      },
                      'See the changelog for any NPM package'
                    )
                  )
                }
              },
              {
                key: 'renderForm',
                value: function renderForm() {
                  var _this2 = this

                  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'form',
                    {
                      className: 'form',
                      onSubmit: this.handleSubmit,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'fieldset',
                      {
                        className: 'form-group',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 41
                        }
                      },
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'input',
                        {
                          type: 'text',
                          placeholder: 'react, debug, async...',
                          className: 'form-control',
                          ref: function ref(node) {
                            return (_this2.input = node)
                          },
                          style: { borderColor: this.state.inputColor },
                          onChange: (function() {
                            var _ref = _asyncToGenerator(
                              /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
                                function _callee(event) {
                                  var pkgName, pkgInfo
                                  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
                                    function _callee$(_context) {
                                      while (1) {
                                        switch ((_context.prev =
                                          _context.next)) {
                                          case 0:
                                            event.preventDefault()
                                            pkgName = event.target.value.toLowerCase()

                                            _this2.setState({
                                              pkgName: pkgName
                                            })

                                            if (!(pkgName === '')) {
                                              _context.next = 5
                                              break
                                            }

                                            return _context.abrupt(
                                              'return',
                                              _this2.setState({
                                                inputColor: INPUT_COLOR.IDLE
                                              })
                                            )

                                          case 5:
                                            _context.next = 7
                                            return Object(
                                              __WEBPACK_IMPORTED_MODULE_5__helpers__[
                                                'a' /* getPackageInfo */
                                              ]
                                            )(pkgName)

                                          case 7:
                                            pkgInfo = _context.sent

                                            _this2.setState({
                                              inputColor: pkgInfo.name
                                                ? INPUT_COLOR.SUCCESS
                                                : INPUT_COLOR.ERROR
                                            })

                                          case 9:
                                          case 'end':
                                            return _context.stop()
                                        }
                                      }
                                    },
                                    _callee,
                                    _this2
                                  )
                                }
                              )
                            )

                            return function(_x) {
                              return _ref.apply(this, arguments)
                            }
                          })(),
                          autoFocus: true,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 42
                          }
                        }
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'div',
                      {
                        className: 'form-actions',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 59
                        }
                      },
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'button',
                        {
                          type: 'button',
                          className: 'btn btn-info btn-block',
                          children: 'Submit',
                          onClick: this.handleSubmit,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 60
                          }
                        }
                      )
                    )
                  )
                }
              },
              {
                key: 'renderFooter',
                value: function renderFooter() {
                  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'footer',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 73
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'p',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 74
                        }
                      },
                      'by ',
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'a',
                        {
                          href: 'https://kikobeats.com',
                          target: '_blank',
                          style: {
                            fontWeight: 'bold',
                            border: 0,
                            color: 'white'
                          },
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 74
                          }
                        },
                        'Kiko Beats'
                      ),
                      ' (',
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'a',
                        {
                          href: 'https://kikobeats.com',
                          target: '_blank',
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 82
                          }
                        },
                        'source'
                      ),
                      ')'
                    )
                  )
                }
              },
              {
                key: 'render',
                value: function render() {
                  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react__['Fragment'],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 89
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_4_grid_styled__['Flex'],
                      {
                        is: 'article',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        style: { minHeight: '100vh' },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 90
                        }
                      },
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4_grid_styled__['Flex'],
                        {
                          is: 'section',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          style: { flex: '1', textAlign: 'center' },
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 97
                          }
                        },
                        this.renderHeader(),
                        this.renderForm()
                      ),
                      this.renderFooter()
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_react_load_script___default.a,
                      {
                        url:
                          'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js',
                        onLoad: function onLoad() {
                          particlesJS.load(
                            'particles-js',
                            '/static/particles.json'
                          )
                        },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 108
                        }
                      }
                    )
                  )
                }
              },
              {
                key: '__reactstandin__regenerateByEval',
                value: function __reactstandin__regenerateByEval(key, code) {
                  this[key] = eval(code)
                }
              }
            ])

            return Home
          })(__WEBPACK_IMPORTED_MODULE_1_react__['Component'])

          var _default = Home
          /* harmony default export */ __webpack_exports__['default'] = _default
          ;(function() {
            var reactHotLoader = __webpack_require__(
              './node_modules/react-hot-loader/index.js'
            ).default

            var leaveModule = __webpack_require__(
              './node_modules/react-hot-loader/index.js'
            ).leaveModule

            if (!reactHotLoader) {
              return
            }

            reactHotLoader.register(
              INPUT_COLOR,
              'INPUT_COLOR',
              '/Users/josefranciscoverdugambin/Downloads/changelog-website/pages/index.jsx'
            )
            reactHotLoader.register(
              Home,
              'Home',
              '/Users/josefranciscoverdugambin/Downloads/changelog-website/pages/index.jsx'
            )
            reactHotLoader.register(
              _default,
              'default',
              '/Users/josefranciscoverdugambin/Downloads/changelog-website/pages/index.jsx'
            )
            leaveModule(module)
          })()
          ;(function(Component, route) {
            if (!Component) return
            if (false) return
            module.hot.accept()
            Component.__route = route

            if (module.hot.status() === 'idle') return

            var components = next.router.components
            for (var r in components) {
              if (!components.hasOwnProperty(r)) continue

              if (components[r].Component.__route === route) {
                next.router.update(r, Component)
              }
            }
          })(
            typeof __webpack_exports__ !== 'undefined'
              ? __webpack_exports__.default
              : module.exports.default || module.exports,
            '/index.jsx'
          )

          /* WEBPACK VAR INJECTION */
        }.call(
          __webpack_exports__,
          __webpack_require__(
            './node_modules/webpack/buildin/harmony-module.js'
          )(module)
        ))

        /***/
      },

      /***/ 3: /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__('./pages/index.jsx')

        /***/
      }
    },
    [3]
  )
  return { page: comp.default }
})
//# sourceMappingURL=index.js.map
