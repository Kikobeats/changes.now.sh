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
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 3))
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

    /***/ './pages/index.jsx': /***/ function(
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
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__(
        'next/router'
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_3_next_router__
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grid_styled__ = __webpack_require__(
        'grid-styled'
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
            (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props)
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
                                    switch ((_context.prev = _context.next)) {
                                      case 0:
                                        event.preventDefault()
                                        pkgName = event.target.value.toLowerCase()

                                        _this2.setState({ pkgName: pkgName })

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
                      particlesJS.load('particles-js', '/static/particles.json')
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 108
                    }
                  }
                )
              )
            }
          }
        ])

        return Home
      })(__WEBPACK_IMPORTED_MODULE_1_react__['Component'])

      /* harmony default export */ __webpack_exports__['default'] = Home

      /***/
    },

    /***/ 3: /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__('./pages/index.jsx')

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

    /***/ 'next/router': /***/ function(module, exports) {
      module.exports = require('next/router')

      /***/
    },

    /***/ react: /***/ function(module, exports) {
      module.exports = require('react')

      /***/
    },

    /***/ 'react-load-script': /***/ function(module, exports) {
      module.exports = require('react-load-script')

      /***/
    }

    /******/
  }
)
//# sourceMappingURL=index.js.map
