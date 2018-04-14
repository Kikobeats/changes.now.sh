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
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 0))
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './pages/_document.jsx': /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
      Object.defineProperty(__webpack_exports__, '__esModule', { value: true })
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(
        'react'
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_0_react__
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document__ = __webpack_require__(
        'next/document'
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_1_next_document__
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(
        'styled-components'
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_2_styled_components__
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_index_scss__ = __webpack_require__(
        './styles/index.scss'
      )
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_index_scss___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_3__styles_index_scss__
      )

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

      var _jsxFileName =
        '/Users/josefranciscoverdugambin/Downloads/changelog-website/pages/_document.jsx'

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

      var Particles = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div.withConfig(
        {
          displayName: '_document__Particles',
          componentId: 's10v3tq6-0'
        }
      )(['position:fixed;top:0;bottom:0;left:0;right:0;z-index:-1;'])

      var Wrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.article.withConfig(
        {
          displayName: '_document__Wrapper',
          componentId: 's10v3tq6-1'
        }
      )(['margin:0 auto;max-width:560px;padding:0 1rem;'])

      var MyDocument = (function(_Document) {
        _inherits(MyDocument, _Document)

        function MyDocument() {
          _classCallCheck(this, MyDocument)

          return _possibleConstructorReturn(
            this,
            (MyDocument.__proto__ || Object.getPrototypeOf(MyDocument)).apply(
              this,
              arguments
            )
          )
        }

        _createClass(
          MyDocument,
          [
            {
              key: 'render',
              value: function render() {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'html',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 31
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_next_document__['Head'],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'title',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 33
                        }
                      },
                      'changelog.sh | See the changelog for any NPM package'
                    ),
                    this.props.styleTags,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'style',
                      {
                        dangerouslySetInnerHTML: {
                          __html:
                            __WEBPACK_IMPORTED_MODULE_3__styles_index_scss___default.a
                        },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 35
                        }
                      }
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'body',
                    {
                      className: 'standard',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_0_react__['Fragment'],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 38
                        }
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        Particles,
                        {
                          id: 'particles-js',
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 39
                          }
                        }
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        Wrapper,
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 40
                          }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_next_document__['Main'],
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 41
                            }
                          }
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_next_document__['NextScript'],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 44
                        }
                      }
                    )
                  )
                )
              }
            }
          ],
          [
            {
              key: 'getInitialProps',
              value: function getInitialProps(_ref) {
                var renderPage = _ref.renderPage

                var sheet = new __WEBPACK_IMPORTED_MODULE_2_styled_components__[
                  'ServerStyleSheet'
                ]()
                var page = renderPage(function(App) {
                  return function(props) {
                    return sheet.collectStyles(
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        App,
                        _extends({}, props, {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 24
                          }
                        })
                      )
                    )
                  }
                })
                var styleTags = sheet.getStyleElement()
                return _extends({}, page, { styleTags: styleTags })
              }
            }
          ]
        )

        return MyDocument
      })(__WEBPACK_IMPORTED_MODULE_1_next_document___default.a)

      /* harmony default export */ __webpack_exports__['default'] = MyDocument

      /***/
    },

    /***/ './styles/index.scss': /***/ function(module, exports) {
      ;(function() {
        'use strict'

        module.exports =
          '@import url(./global.css);html{font-size:12px}*{box-sizing:border-box;text-rendering:geometricPrecision}body{font-size:1rem;line-height:1.5rem;margin:0;font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;word-wrap:break-word}h1,h2,h3,h4,h5,h6{line-height:1.3em}fieldset{border:none;padding:0;margin:0}pre{padding:2rem;margin:1.75rem 0;background-color:#fff;border:1px solid #ccc;overflow:auto}code[class*=language-],pre[class*=language-],pre code{font-weight:100;text-shadow:none;margin:1.75rem 0}a{cursor:pointer;color:#ff2e88;text-decoration:none;border-bottom:1px solid #ff2e88}a:focus,a:hover{background-color:#ff2e88;color:#fff}.grid{display:flex;flex-wrap:wrap}.grid.\\-top{align-items:flex-start}.grid.\\-middle{align-items:center}.grid.\\-bottom{align-items:flex-end}.grid.\\-stretch{align-items:stretch}.grid.\\-baseline{align-items:baseline}.grid.\\-left{justify-content:flex-start}.grid.\\-center{justify-content:center}.grid.\\-right{justify-content:flex-end}.grid.\\-between{justify-content:space-between}.grid.\\-around{justify-content:space-around}.cell{flex:1;box-sizing:border-box}@media screen and (min-width:768px){.cell.\\-1of12{flex:0 0 8.33333%}.cell.\\-2of12{flex:0 0 16.66667%}.cell.\\-3of12{flex:0 0 25%}.cell.\\-4of12{flex:0 0 33.33333%}.cell.\\-5of12{flex:0 0 41.66667%}.cell.\\-6of12{flex:0 0 50%}.cell.\\-7of12{flex:0 0 58.33333%}.cell.\\-8of12{flex:0 0 66.66667%}.cell.\\-9of12{flex:0 0 75%}.cell.\\-10of12{flex:0 0 83.33333%}.cell.\\-11of12{flex:0 0 91.66667%}}@media screen and (max-width:768px){.grid{flex-direction:column}.cell{flex:0 0 auto}}.hack,.hack blockquote,.hack code,.hack em,.hack h1,.hack h2,.hack h3,.hack h4,.hack h5,.hack h6,.hack strong{font-size:1rem;font-style:normal;font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif}.hack blockquote,.hack code,.hack em,.hack strong{line-height:20px}.hack blockquote,.hack code,.hack footer,.hack h1,.hack h2,.hack h3,.hack h4,.hack h5,.hack h6,.hack header,.hack li,.hack ol,.hack p,.hack section,.hack ul{float:none;margin:0;padding:0}.hack blockquote,.hack h1,.hack ol,.hack p,.hack ul{margin-top:20px;margin-bottom:20px}.hack h1{position:relative;display:inline-block;display:table-cell;padding:20px 0 30px;margin:0;overflow:hidden}.hack h1:after{content:"====================================================================================================";position:absolute;bottom:10px;left:0}.hack h1+*{margin-top:0}.hack h2,.hack h3,.hack h4,.hack h5,.hack h6{position:relative;margin-bottom:1.75rem}.hack h2:before,.hack h3:before,.hack h4:before,.hack h5:before,.hack h6:before{display:inline}.hack h2:before{content:"## "}.hack h3:before{content:"### "}.hack h4:before{content:"#### "}.hack h5:before{content:"##### "}.hack h6:before{content:"###### "}.hack li{position:relative;display:block;padding-left:20px}.hack li:after{position:absolute;top:0;left:0}.hack ul>li:after{content:"-"}.hack ol{counter-reset:a}.hack ol>li:after{content:counter(a) ".";counter-increment:a}.hack ol li:nth-child(n+10):after{left:-7px}.hack blockquote{position:relative;padding-left:17px;padding-left:2ch;overflow:hidden}.hack blockquote:after{content:">\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>";white-space:pre;position:absolute;top:0;left:0;line-height:20px}.hack em:after,.hack em:before{content:"*";display:inline}.hack pre code:after,.hack pre code:before{content:""}.hack code{font-weight:700}.hack code:after,.hack code:before{content:"`";display:inline}.hack hr{position:relative;height:20px;overflow:hidden;border:0;margin:20px 0}.hack hr:after{content:"----------------------------------------------------------------------------------------------------";position:absolute;top:0;left:0;line-height:20px;width:100%;word-wrap:break-word}@-moz-document url-prefix(){.hack h1{display:block}}.hack-ones ol>li:after{content:"1."}p{margin:0 0 1.75rem}.container{max-width:70rem}.container,.container-fluid{margin:0 auto;padding:0 1rem}.inner{padding:1rem}.inner2x{padding:2rem}.pull-left{float:left}.pull-right{float:right}.progress-bar{height:8px;opacity:.8;background-color:#ccc;margin-top:12px}.progress-bar.progress-bar-show-percent{margin-top:38px}.progress-bar-filled{background-color:gray;height:100%;transition:width .3s ease;position:relative;width:0}.progress-bar-filled:before{content:"";border:6px solid transparent;border-top-color:gray;position:absolute;top:-12px;right:-6px}.progress-bar-filled:after{color:gray;content:attr(data-filled);display:block;font-size:12px;white-space:nowrap;position:absolute;border:6px solid transparent;top:-38px;right:0;-webkit-transform:translateX(50%);transform:translateX(50%)}table{width:100%;border-collapse:collapse;margin:1.75rem 0;color:#778087}table td,table th{vertical-align:top;border:1px solid #ccc;line-height:15px;padding:10px}table thead th{font-size:10px}table tbody td:first-child{font-weight:700;color:#333}.form{width:30rem}.form-group{margin-bottom:1.75rem;overflow:auto}.form-group label{border-bottom:2px solid #ccc;color:#333;width:10rem;display:inline-block;height:38px;line-height:38px;padding:0;float:left;position:relative}.form-group.form-success label{color:#4caf50!important;border-color:#4caf50!important}.form-group.form-warning label{color:#ff9800!important;border-color:#ff9800!important}.form-group.form-error label{color:#f44336!important;border-color:#f44336!important}.form-control{outline:none;border:none;border-bottom:2px solid #ccc;padding:.5rem 0;width:20rem;height:38px;background-color:transparent}.form-control:focus{border-color:#555}.form-group.form-textarea label:after{position:absolute;content:"";width:2px;background-color:#fff;right:-2px;top:0;bottom:0}textarea.form-control{height:auto;resize:none;padding:1rem 0;border-bottom:2px solid #ccc;border-left:2px solid #ccc;padding:.5rem}select.form-control{border-radius:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none}.help-block{color:#999;margin-top:.5rem}.form-actions{margin-bottom:1.75rem}.btn{display:inline-flex;align-items:center;justify-content:center;cursor:pointer;outline:none;padding:.65rem 2rem;font-size:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;z-index:1}.btn:active{box-shadow:inset 0 1px 3px rgba(0,0,0,.12)}.btn.btn-ghost{border-color:#757575;color:#757575;background-color:transparent}.btn.btn-ghost:focus,.btn.btn-ghost:hover{border-color:#424242;color:#424242;z-index:2}.btn.btn-ghost:hover{background-color:transparent}.btn-block{width:100%;display:flex}.btn-default{color:#fff;background-color:#e0e0e0;border:1px solid #e0e0e0;color:#333}.btn-default:focus,.btn-default:focus:not(.btn-ghost),.btn-default:hover{background-color:#dcdcdc;border-color:#dcdcdc}.btn-success{color:#fff;background-color:#4caf50;border:1px solid #4caf50}.btn-success:focus,.btn-success:focus:not(.btn-ghost),.btn-success:hover{background-color:#43a047;border-color:#43a047}.btn-success.btn-ghost{border-color:#4caf50;color:#4caf50}.btn-success.btn-ghost:focus,.btn-success.btn-ghost:hover{border-color:#388e3c;color:#388e3c;z-index:2}.btn-error{color:#fff;background-color:#f44336;border:1px solid #f44336}.btn-error:focus,.btn-error:focus:not(.btn-ghost),.btn-error:hover{background-color:#e53935;border-color:#e53935}.btn-error.btn-ghost{border-color:#f44336;color:#f44336}.btn-error.btn-ghost:focus,.btn-error.btn-ghost:hover{border-color:#d32f2f;color:#d32f2f;z-index:2}.btn-warning{color:#fff;background-color:#ff9800;border:1px solid #ff9800}.btn-warning:focus,.btn-warning:focus:not(.btn-ghost),.btn-warning:hover{background-color:#fb8c00;border-color:#fb8c00}.btn-warning.btn-ghost{border-color:#ff9800;color:#ff9800}.btn-warning.btn-ghost:focus,.btn-warning.btn-ghost:hover{border-color:#f57c00;color:#f57c00;z-index:2}.btn-info{color:#fff;background-color:#00bcd4;border:1px solid #00bcd4}.btn-info:focus,.btn-info:focus:not(.btn-ghost),.btn-info:hover{background-color:#00acc1;border-color:#00acc1}.btn-info.btn-ghost{border-color:#00bcd4;color:#00bcd4}.btn-info.btn-ghost:focus,.btn-info.btn-ghost:hover{border-color:#0097a7;color:#0097a7;z-index:2}.btn-primary{color:#fff;background-color:#2196f3;border:1px solid #2196f3}.btn-primary:focus,.btn-primary:focus:not(.btn-ghost),.btn-primary:hover{background-color:#1e88e5;border-color:#1e88e5}.btn-primary.btn-ghost{border-color:#2196f3;color:#2196f3}.btn-primary.btn-ghost:focus,.btn-primary.btn-ghost:hover{border-color:#1976d2;color:#1976d2;z-index:2}.btn-group{overflow:auto}.btn-group .btn{float:left}.btn-group .btn-ghost:not(:first-child){margin-left:-1px}.card{border:1px solid #ccc}.card .card-header{color:#333;text-align:center;background-color:#ddd;padding:.5rem 0}.alert{color:#ccc;padding:1rem;border:1px solid #ccc;margin-bottom:1.75rem}.alert-success{color:#4caf50;border-color:#4caf50}.alert-error{color:#f44336;border-color:#f44336}.alert-info{color:#00bcd4;border-color:#00bcd4}.alert-warning{color:#ff9800;border-color:#ff9800}.media:not(:last-child){margin-bottom:1.25rem}.media-left{padding-right:1rem}.media-left,.media-right{display:table-cell;vertical-align:top}.media-right{padding-left:1rem}.media-body{display:table-cell;vertical-align:top}.media-heading{font-size:1.16667rem;font-weight:700}.media-content{margin-top:.3rem}.avatarholder,.placeholder{background-color:#f0f0f0;text-align:center;color:#b9b9b9;font-size:1rem;border:1px solid #f0f0f0}.avatarholder{width:48px;height:48px;line-height:46px;font-size:2rem;background-size:cover;background-position:50%;background-repeat:no-repeat}.avatarholder.rounded{border-radius:33px}.loading{display:inline-block;content:"&nbsp;";height:20px;width:20px;margin:0 .5rem;-webkit-animation:a .6s infinite linear;animation:a .6s infinite linear;border:2px solid #e91e63;border-right-color:transparent;border-radius:50%}.btn .loading{margin-bottom:0;width:14px;height:14px}.btn div.loading{float:left}.alert .loading{margin-bottom:-5px}@-webkit-keyframes a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.menu{width:100%}.menu .menu-item{display:block;color:#616161;border-color:#616161}.menu .menu-item.active,.menu .menu-item:focus,.menu .menu-item:hover{color:#000;border-color:#000;background-color:transparent}@media screen and (max-width:768px){.form-group label{display:block;border-bottom:none;width:100%}.form-group.form-textarea label:after{display:none}.form-control{width:100%}textarea.form-control{border-left:none;padding:.5rem 0}pre::-webkit-scrollbar{height:3px}}@media screen and (max-width:480px){.form{width:100%}}html{font-size:14px}.standard{font-family:-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica,helvetica neue,Ubuntu,segoe ui,arial,sans-serif}.standard h1{font-size:2em;font-weight:700;margin:.67em 0}.standard h2{font-size:1.5em;font-weight:700;margin:.83em 0}.standard h3{font-size:1.17em;font-weight:700}.standard h3,.standard p{margin:1.75rem 0}.standard ol,.standard ul{display:block;list-style-type:disc;padding-left:20px;margin:1.75rem 0}.standard ol ul,.standard ul ul{margin:.75rem 0;list-style-type:square}.standard ol{list-style-type:decimal}.standard li{display:list-item;padding-left:0}.standard blockquote{margin:1.75rem 0;padding-left:10px;border-left:5px solid #f0f0f0}.standard pre{margin:1.75rem 0;white-space:pre}.standard hr{border:0;height:1px;display:block;background-color:#e2e2e2;margin:1.75rem 0}.standard{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;background-color:#000;color:#ccc}.standard h1,.standard h2,.standard h3{margin-bottom:2rem;margin-top:4rem}.standard li{margin-bottom:1rem}.anchorjs-link{border:0;color:#757575}.anchorjs-link:focus,.anchorjs-link:hover{background-color:inherit}.form-control{width:100%;text-align:center;color:#fff}'
      })()

      /***/
    },

    /***/ 0: /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__('./pages/_document.jsx')

      /***/
    },

    /***/ 'next/document': /***/ function(module, exports) {
      module.exports = require('next/document')

      /***/
    },

    /***/ react: /***/ function(module, exports) {
      module.exports = require('react')

      /***/
    },

    /***/ 'styled-components': /***/ function(module, exports) {
      module.exports = require('styled-components')

      /***/
    }

    /******/
  }
)
//# sourceMappingURL=_document.js.map
