module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {} // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }) // Execute the module function
    /******/
    /******/ /******/ var threw = true
    /******/ try {
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      )
      /******/ threw = false
      /******/
    } finally {
      /******/ if (threw) delete installedModules[moduleId]
      /******/
    } // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true // Return the exports of the module
    /******/
    /******/ /******/ return module.exports
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        /******/ configurable: false,
        /******/ enumerable: true,
        /******/ get: getter
        /******/
      })
      /******/
    }
    /******/
  } // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default']
          }
        : /******/ function getModuleExports() {
            return module
          }
    /******/ __webpack_require__.d(getter, 'a', getter)
    /******/ return getter
    /******/
  } // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property)
  } // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = '' // Load entry module and return exports
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 2))
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './helpers/index.js': /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'a',
        function() {
          return getPackageInfo
        }
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(
        'babel-runtime/regenerator'
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_algoliasearch__ = __webpack_require__(
        'algoliasearch'
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_algoliasearch___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_1_algoliasearch__
      )

      var _this = this

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
        (process && process.env && process.env.ALGOLIA_APP_ID) || 'OFCNCOG2CU',
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

      /***/
    },

    /***/ './pages/changelog.jsx': /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
      Object.defineProperty(__webpack_exports__, '__esModule', { value: true })
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(
        'babel-runtime/regenerator'
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(
        'react'
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_1_react__
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_load_script__ = __webpack_require__(
        'react-load-script'
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_load_script___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_2_react_load_script__
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_markdown__ = __webpack_require__(
        'react-markdown'
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_markdown___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_3_react_markdown__
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grid_styled__ = __webpack_require__(
        'grid-styled'
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grid_styled___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_4_grid_styled__
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head__ = __webpack_require__(
        'next/head'
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_5_next_head__
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch__ = __webpack_require__(
        'isomorphic-unfetch'
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch__
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers__ = __webpack_require__(
        './helpers/index.js'
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_feather__ = __webpack_require__(
        'react-feather'
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_feather___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_8_react_feather__
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_styled_components__ = __webpack_require__(
        'styled-components'
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_styled_components___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_9_styled_components__
      )

      var _jsxFileName =
        '/Users/josefranciscoverdugambin/Downloads/changelog-website/pages/changelog.jsx'

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
        return call && (typeof call === 'object' || typeof call === 'function')
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
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        })
        if (superClass)
          Object.setPrototypeOf
            ? Object.setPrototypeOf(subClass, superClass)
            : (subClass.__proto__ = superClass)
      }

      /* global particlesJS, anchors, fetch */

      var IconLink = __WEBPACK_IMPORTED_MODULE_9_styled_components___default.a.a.withConfig(
        {
          displayName: 'changelog__IconLink',
          componentId: 's18qktr0-0'
        }
      )([
        'position:relative;top:1px;color:inherit;border:0;&:hover,&:active,&:focus{background-color:inherit;color:#ff2e88;}'
      ])

      var Changelog = (function(_Component) {
        _inherits(Changelog, _Component)

        function Changelog() {
          _classCallCheck(this, Changelog)

          return _possibleConstructorReturn(
            this,
            (Changelog.__proto__ || Object.getPrototypeOf(Changelog)).apply(
              this,
              arguments
            )
          )
        }

        _createClass(
          Changelog,
          [
            {
              key: 'render',
              value: function render() {
                var _props = this.props,
                  html = _props.html,
                  license = _props.license,
                  description = _props.description,
                  homepage = _props.homepage,
                  repository = _props.repository
                var pkgName = this.props.url.query.package

                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react__['Fragment'],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 66
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_5_next_head___default.a,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 67
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'title',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 68
                        }
                      },
                      pkgName
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'header',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 70
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'h1',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 71
                        }
                      },
                      pkgName
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'h3',
                      {
                        style: {
                          marginTop: '2rem',
                          marginBottom: '1rem',
                          lineHeight: '1.65'
                        },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 72
                        }
                      },
                      description
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_4_grid_styled__['Flex'],
                      {
                        alignItems: 'baseline',
                        style: { color: '#757575' },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 75
                        }
                      },
                      license &&
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                          'span',
                          {
                            style: { marginRight: '8px', fontSize: '14px' },
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 76
                            }
                          },
                          license
                        ),
                      homepage &&
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                          IconLink,
                          {
                            target: '_blank',
                            href: homepage,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 79
                            }
                          },
                          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_8_react_feather__['Home'],
                            {
                              size: 14,
                              style: { marginRight: '8px' },
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 80
                              }
                            }
                          )
                        ),
                      repository &&
                        repository.url &&
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                          IconLink,
                          {
                            target: '_blank',
                            href: repository.url,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 86
                            }
                          },
                          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_8_react_feather__[
                              'Github'
                            ],
                            {
                              size: 14,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 87
                              }
                            }
                          )
                        )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_react_markdown___default.a,
                    {
                      className: 'changelog',
                      escapeHtml: false,
                      source: html,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 92
                      }
                    }
                  ),
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_react_load_script___default.a,
                    {
                      url:
                        'https://cdn.jsdelivr.net/npm/anchor-js@4.1.0/anchor.min.js',
                      onLoad: function onLoad() {
                        anchors.add(
                          '.changelog h1, .changelog h2, .changelog h3'
                        )
                      },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 93
                      }
                    }
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
                        lineNumber: 99
                      }
                    }
                  )
                )
              }
            }
          ],
          [
            {
              key: 'getInitialProps',
              value: (function() {
                var _ref2 = _asyncToGenerator(
                  /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
                    function _callee(_ref) {
                      var query = _ref.query
                      var pkgInfo,
                        version,
                        description,
                        repository,
                        homepage,
                        license,
                        modified,
                        changelogFilename,
                        readme,
                        html,
                        res
                      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
                        function _callee$(_context) {
                          while (1) {
                            switch ((_context.prev = _context.next)) {
                              case 0:
                                _context.next = 2
                                return Object(
                                  __WEBPACK_IMPORTED_MODULE_7__helpers__[
                                    'a' /* getPackageInfo */
                                  ]
                                )(query.package)

                              case 2:
                                pkgInfo = _context.sent
                                ;(version = pkgInfo.version),
                                  (description = pkgInfo.description),
                                  (repository = pkgInfo.repository),
                                  (homepage = pkgInfo.homepage),
                                  (license = pkgInfo.license),
                                  (modified = pkgInfo.modified),
                                  (changelogFilename =
                                    pkgInfo.changelogFilename),
                                  (readme = pkgInfo.readme)
                                html = 'No changelog found!'

                                if (!changelogFilename) {
                                  _context.next = 12
                                  break
                                }

                                _context.next = 8
                                return fetch(changelogFilename)

                              case 8:
                                res = _context.sent
                                _context.next = 11
                                return res.text()

                              case 11:
                                html = _context.sent

                              case 12:
                                return _context.abrupt('return', {
                                  version: version,
                                  description: description,
                                  repository: repository,
                                  homepage: homepage,
                                  license: license,
                                  modified: modified,
                                  html: html
                                })

                              case 13:
                              case 'end':
                                return _context.stop()
                            }
                          }
                        },
                        _callee,
                        this
                      )
                    }
                  )
                )

                function getInitialProps(_x) {
                  return _ref2.apply(this, arguments)
                }

                return getInitialProps
              })()
            }
          ]
        )

        return Changelog
      })(__WEBPACK_IMPORTED_MODULE_1_react__['Component'])

      /* harmony default export */ __webpack_exports__['default'] = Changelog

      /***/
    },

    /***/ 2: /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__('./pages/changelog.jsx')

      /***/
    },

    /***/ algoliasearch: /***/ function(module, exports) {
      module.exports = require('algoliasearch')

      /***/
    },

    /***/ 'babel-runtime/regenerator': /***/ function(module, exports) {
      module.exports = require('babel-runtime/regenerator')

      /***/
    },

    /***/ 'grid-styled': /***/ function(module, exports) {
      module.exports = require('grid-styled')

      /***/
    },

    /***/ 'isomorphic-unfetch': /***/ function(module, exports) {
      module.exports = require('isomorphic-unfetch')

      /***/
    },

    /***/ 'next/head': /***/ function(module, exports) {
      module.exports = require('next/head')

      /***/
    },

    /***/ react: /***/ function(module, exports) {
      module.exports = require('react')

      /***/
    },

    /***/ 'react-feather': /***/ function(module, exports) {
      module.exports = require('react-feather')

      /***/
    },

    /***/ 'react-load-script': /***/ function(module, exports) {
      module.exports = require('react-load-script')

      /***/
    },

    /***/ 'react-markdown': /***/ function(module, exports) {
      module.exports = require('react-markdown')

      /***/
    },

    /***/ 'styled-components': /***/ function(module, exports) {
      module.exports = require('styled-components')

      /***/
    }

    /******/
  }
)
//# sourceMappingURL=changelog.js.map
