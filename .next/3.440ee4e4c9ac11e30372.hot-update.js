webpackHotUpdate(3, {
  /***/ './pages/changelog.jsx': /***/ function(
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
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_markdown__ = __webpack_require__(
        './node_modules/react-markdown/lib/react-markdown.js'
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_markdown___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_3_react_markdown__
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grid_styled__ = __webpack_require__(
        './node_modules/grid-styled/dist/index.js'
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grid_styled___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_4_grid_styled__
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head__ = __webpack_require__(
        './node_modules/next/head.js'
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_5_next_head__
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch__ = __webpack_require__(
        './node_modules/isomorphic-unfetch/browser.js'
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch__
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers__ = __webpack_require__(
        './helpers/index.js'
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_feather__ = __webpack_require__(
        './node_modules/react-feather/dist/index.js'
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_feather___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_8_react_feather__
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_styled_components__ = __webpack_require__(
        './node_modules/styled-components/dist/styled-components.browser.es.js'
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

      /* global particlesJS, anchors, fetch */

      var IconLink = __WEBPACK_IMPORTED_MODULE_9_styled_components__[
        'default'
      ].a.withConfig({
        displayName: 'changelog__IconLink',
        componentId: 's18qktr0-0'
      })([
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
                      lineNumber: 67
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_5_next_head___default.a,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 68
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'title',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 69
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
                        lineNumber: 71
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'h1',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 72
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
                          lineNumber: 73
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
                          lineNumber: 76
                        }
                      },
                      license &&
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                          'span',
                          {
                            style: { marginRight: '8px', fontSize: '14px' },
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 77
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
                              lineNumber: 80
                            }
                          },
                          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_8_react_feather__['Home'],
                            {
                              size: 14,
                              style: { marginRight: '8px' },
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 81
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
                              lineNumber: 87
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
                                lineNumber: 88
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
                        lineNumber: 93
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
                        lineNumber: 94
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
                        lineNumber: 100
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

                                console.log(pkgInfo)
                                ;(version = pkgInfo.version),
                                  (description = pkgInfo.description),
                                  (repository = pkgInfo.repository),
                                  (homepage = pkgInfo.homepage),
                                  (license = pkgInfo.license),
                                  (modified = pkgInfo.modified),
                                  (changelogFilename =
                                    pkgInfo.changelogFilename)
                                html = 'No changelog found!'

                                if (!changelogFilename) {
                                  _context.next = 13
                                  break
                                }

                                _context.next = 9
                                return fetch(changelogFilename)

                              case 9:
                                res = _context.sent
                                _context.next = 12
                                return res.text()

                              case 12:
                                html = _context.sent

                              case 13:
                                return _context.abrupt('return', {
                                  version: version,
                                  description: description,
                                  repository: repository,
                                  homepage: homepage,
                                  license: license,
                                  modified: modified,
                                  html: html
                                })

                              case 14:
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

      var _default = Changelog
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
          IconLink,
          'IconLink',
          '/Users/josefranciscoverdugambin/Downloads/changelog-website/pages/changelog.jsx'
        )
        reactHotLoader.register(
          Changelog,
          'Changelog',
          '/Users/josefranciscoverdugambin/Downloads/changelog-website/pages/changelog.jsx'
        )
        reactHotLoader.register(
          _default,
          'default',
          '/Users/josefranciscoverdugambin/Downloads/changelog-website/pages/changelog.jsx'
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
        '/changelog.jsx'
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
//# sourceMappingURL=3.440ee4e4c9ac11e30372.hot-update.js.map
