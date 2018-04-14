webpackHotUpdate(4, {
  /***/ './pages/index.jsx': /***/ function(
    module,
    __webpack_exports__,
    __webpack_require__
  ) {
    'use strict'
    Object.defineProperty(__webpack_exports__, '__esModule', { value: true })
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
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components__ = __webpack_require__(
        './node_modules/styled-components/dist/styled-components.browser.es.js'
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__(
        './node_modules/next/router.js'
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_4_next_router__
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

      var Layout = __WEBPACK_IMPORTED_MODULE_3_styled_components__[
        'default'
      ].article.withConfig({
        displayName: 'pages__Layout',
        componentId: 's1ar9jha-0'
      })([
        'display:flex;flex-direction:column;justify-content:center;align-items:center;'
      ])

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
                __WEBPACK_IMPORTED_MODULE_4_next_router___default.a.push(
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
                    lineNumber: 38
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'h1',
                  {
                    style: { marginBottom: 0 },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 39
                    }
                  },
                  'changelog.now.sh'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40
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
                'section',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'form',
                  {
                    className: 'form',
                    onSubmit: this.handleSubmit,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 48
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'fieldset',
                    {
                      className: 'form-group',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
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
                          lineNumber: 50
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
                        lineNumber: 67
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
                          lineNumber: 68
                        }
                      }
                    )
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
                    lineNumber: 82
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 83
                    }
                  },
                  'by Kiko Beats'
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
                    lineNumber: 90
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  Layout,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 91
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 92
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
                      lineNumber: 98
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
          Layout,
          'Layout',
          '/Users/josefranciscoverdugambin/Downloads/changelog-website/pages/index.jsx'
        )
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
      __webpack_require__('./node_modules/webpack/buildin/harmony-module.js')(
        module
      )
    ))

    /***/
  }
})
//# sourceMappingURL=4.84b2c8e7cad68ee60a00.hot-update.js.map
