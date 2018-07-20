/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************!*\
  !*** ./index.jsx ***!
  \*******************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _app = __webpack_require__(/*! ./components/app.jsx */ 1);\n\nvar _app2 = _interopRequireDefault(_app);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nReactDOM.render(React.createElement(_app2.default, null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvaW5kZXguanN4PzgyYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwLmpzeCc7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9pbmRleC5qc3giXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7Ozs7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./components/app.jsx ***!
  \****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _ReviewList = __webpack_require__(/*! ./ReviewList.jsx */ 2);\n\nvar _ReviewList2 = _interopRequireDefault(_ReviewList);\n\nvar _ReviewSummary = __webpack_require__(/*! ./ReviewSummary.jsx */ 4);\n\nvar _ReviewSummary2 = _interopRequireDefault(_ReviewSummary);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n    _inherits(App, _React$Component);\n\n    function App(props) {\n        _classCallCheck(this, App);\n\n        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n        _this.state = {\n            reviews: []\n        };\n        return _this;\n    }\n\n    _createClass(App, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.pullDataById();\n        }\n    }, {\n        key: 'pullDataById',\n        value: function pullDataById() {\n            var _this2 = this;\n\n            console.log('pulled data called');\n            axios.get('/reviews/' + 3).then(function (res) {\n                _this2.setState({ reviews: res.data });\n                console.log(res.data);\n            }).catch(function (err) {\n                return console.log(err);\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return React.createElement(\n                'div',\n                null,\n                React.createElement(_ReviewSummary2.default, { reviews: this.state.reviews }),\n                React.createElement(_ReviewList2.default, { reviews: this.state.reviews })\n            );\n        }\n    }]);\n\n    return App;\n}(React.Component);\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvY29tcG9uZW50cy9hcHAuanN4P2ZjMWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJldmlld0xpc3QgZnJvbSAnLi9SZXZpZXdMaXN0LmpzeCc7XG5pbXBvcnQgUmV2aWV3U3VtbWFyeSBmcm9tICcuL1Jldmlld1N1bW1hcnkuanN4JztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHJldmlld3M6IFtdXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHVsbERhdGFCeUlkKClcbiAgICB9XG4gICAgcHVsbERhdGFCeUlkKCkge1xuICAgICAgICBjb25zb2xlLmxvZygncHVsbGVkIGRhdGEgY2FsbGVkJyk7XG4gICAgICAgIGF4aW9zLmdldChgL3Jldmlld3MvJHszfWApXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyZXZpZXdzOiByZXMuZGF0YX0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFJldmlld1N1bW1hcnkgcmV2aWV3cz17dGhpcy5zdGF0ZS5yZXZpZXdzfS8+XG4gICAgICAgICAgICAgICAgPFJldmlld0xpc3QgcmV2aWV3cz17dGhpcy5zdGF0ZS5yZXZpZXdzfS8+ICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L2NvbXBvbmVudHMvYXBwLmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFLQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7Ozs7QUExQkE7QUFDQTtBQTJCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***********************************!*\
  !*** ./components/ReviewList.jsx ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Review = __webpack_require__(/*! ./Review.jsx */ 3);\n\nvar _Review2 = _interopRequireDefault(_Review);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ReviewList = function (_React$Component) {\n    _inherits(ReviewList, _React$Component);\n\n    function ReviewList(props) {\n        _classCallCheck(this, ReviewList);\n\n        var _this = _possibleConstructorReturn(this, (ReviewList.__proto__ || Object.getPrototypeOf(ReviewList)).call(this, props));\n\n        _this.state = {};\n        return _this;\n    }\n\n    _createClass(ReviewList, [{\n        key: \"render\",\n        value: function render() {\n            return React.createElement(\n                \"div\",\n                { id: \"reviewsContainer\" },\n                React.createElement(\n                    \"h1\",\n                    null,\n                    \"Reviews\"\n                ),\n                this.props.reviews.map(function (review) {\n                    return React.createElement(_Review2.default, { review: review, key: review.id });\n                })\n            );\n        }\n    }]);\n\n    return ReviewList;\n}(React.Component);\n\nexports.default = ReviewList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvY29tcG9uZW50cy9SZXZpZXdMaXN0LmpzeD8xOGMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXZpZXcgZnJvbSAnLi9SZXZpZXcuanN4JztcblxuY2xhc3MgUmV2aWV3TGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwicmV2aWV3c0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxoMT5SZXZpZXdzPC9oMT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5yZXZpZXdzLm1hcChyZXZpZXcgPT4gPFJldmlldyByZXZpZXc9e3Jldmlld30ga2V5PXtyZXZpZXcuaWR9Lz4pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJldmlld0xpc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L2NvbXBvbmVudHMvUmV2aWV3TGlzdC5qc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUtBOzs7O0FBZEE7QUFDQTtBQWdCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./components/Review.jsx ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Review = function (_React$Component) {\n    _inherits(Review, _React$Component);\n\n    function Review(props) {\n        _classCallCheck(this, Review);\n\n        var _this = _possibleConstructorReturn(this, (Review.__proto__ || Object.getPrototypeOf(Review)).call(this, props));\n\n        _this.state = {\n            hoveronHelp: false,\n            helpful: false,\n            readMoreClicked: false,\n            reviewText: _this.props.review.reviewText.slice(0, 300) + '...',\n            rating: _this.props.review.overallRating,\n            stars: [],\n            date: _this.props.review.dinedDate.split('-')\n        };\n        return _this;\n    }\n\n    _createClass(Review, [{\n        key: 'componentWillMount',\n        value: function componentWillMount() {\n            for (var i = 0; i < 5; i++) {\n                this.state.rating > 0 ? this.state.stars.push(\"./images/star-16.png\") : this.state.stars.push(\"./images/unfilled_star.png\");\n                this.state.rating--;\n            }\n            if (this.props.review.is_helpful) this.setState({ helpful: true });\n        }\n    }, {\n        key: 'helpfulClick',\n        value: function helpfulClick(e) {\n            this.state.helpful = !this.state.helpful;\n            this.setState({ helpful: this.state.helpful });\n            this.props.review.is_helpful ? this.props.review.is_helpful = 0 : this.props.review.is_helpful = 1;\n            axios.post('/helpfulEvent/' + this.props.review.is_helpful + '/id/' + this.props.review.id).then(function (res) {\n                return console.log(res);\n            }).catch(function (err) {\n                return console.log(err);\n            });\n        }\n    }, {\n        key: 'readMoreToggle',\n        value: function readMoreToggle(e) {\n            e.preventDefault();\n            this.setState({ readMoreClicked: !this.state.readMoreClicked });\n            this.state.reviewText.length < 301 ? this.setState({ reviewText: this.props.review.reviewText }) : this.setState({ reviewText: this.props.review.reviewText.slice(0, 300) });\n        }\n    }, {\n        key: 'reportPopUp',\n        value: function reportPopUp() {}\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            var helpHover = void 0,\n                readMorePhrase = void 0;\n            this.state.hoveronHelp ? helpHover = 'helpHovered' : helpHover = '';\n            this.state.readMoreClicked ? readMorePhrase = '- Read less' : readMorePhrase = '+ Read more';\n            if (!this.state.readMoreClicked && this.props.review.reviewText.length < 300) readMorePhrase = '';\n            return React.createElement(\n                'div',\n                { id: 'reviewContainer' },\n                React.createElement(\n                    'div',\n                    null,\n                    React.createElement(\n                        'div',\n                        null,\n                        React.createElement(\n                            'span',\n                            null,\n                            React.createElement(\n                                'span',\n                                null,\n                                React.createElement(\n                                    'span',\n                                    null,\n                                    React.createElement(\n                                        'span',\n                                        { id: 'authorArea' },\n                                        React.createElement(\n                                            'span',\n                                            null,\n                                            React.createElement('img', { className: 'img-Circle', src: this.props.review.userPhoto })\n                                        ),\n                                        React.createElement(\n                                            'span',\n                                            null,\n                                            this.props.review.userName\n                                        ),\n                                        React.createElement(\n                                            'span',\n                                            null,\n                                            ' (',\n                                            this.props.review.userArea,\n                                            ')'\n                                        )\n                                    )\n                                ),\n                                React.createElement(\n                                    'div',\n                                    { className: 'rating' },\n                                    React.createElement(\n                                        'span',\n                                        { id: 'starsAndDate' },\n                                        React.createElement(\n                                            'span',\n                                            null,\n                                            React.createElement('img', { className: 'star', src: this.state.stars[0] })\n                                        ),\n                                        React.createElement(\n                                            'span',\n                                            null,\n                                            React.createElement('img', { className: 'star', src: this.state.stars[1] })\n                                        ),\n                                        React.createElement(\n                                            'span',\n                                            null,\n                                            React.createElement('img', { className: 'star', src: this.state.stars[2] })\n                                        ),\n                                        React.createElement(\n                                            'span',\n                                            null,\n                                            React.createElement('img', { className: 'star', src: this.state.stars[3] })\n                                        ),\n                                        React.createElement(\n                                            'span',\n                                            null,\n                                            React.createElement('img', { className: 'star', src: this.state.stars[4] })\n                                        ),\n                                        React.createElement(\n                                            'span',\n                                            null,\n                                            this.props.review.overallRating,\n                                            '.0 '\n                                        ),\n                                        React.createElement(\n                                            'span',\n                                            null,\n                                            ' Dined on ',\n                                            new Date(this.state.date[0], this.state.date[1] - 1, this.state.date[2].substr(0, 2)).toDateString()\n                                        )\n                                    ),\n                                    React.createElement('span', null)\n                                )\n                            )\n                        )\n                    )\n                ),\n                React.createElement(\n                    'div',\n                    null,\n                    React.createElement(\n                        'p',\n                        { id: 'reviewText' },\n                        this.state.reviewText\n                    )\n                ),\n                React.createElement(\n                    'div',\n                    { id: 'reportHelpful' },\n                    React.createElement(\n                        'div',\n                        null,\n                        React.createElement(\n                            'a',\n                            { id: 'readMore', href: '#', onClick: function onClick(e) {\n                                    return _this2.readMoreToggle(e);\n                                } },\n                            readMorePhrase\n                        )\n                    ),\n                    React.createElement(\n                        'div',\n                        { id: 'subReportHelpful' },\n                        React.createElement('div', { id: 'flagIcon' }),\n                        React.createElement(\n                            'span',\n                            { id: 'reportText' },\n                            'Report'\n                        ),\n                        React.createElement(\n                            'span',\n                            { id: 'upvoteIcon', className: helpHover },\n                            '[ ] '\n                        ),\n                        React.createElement(\n                            'span',\n                            { id: 'helpfulText' },\n                            'Helpful ',\n                            this.state.helpful ? '(1)' : ''\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return Review;\n}(React.Component);\n\nexports.default = Review;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvY29tcG9uZW50cy9SZXZpZXcuanN4P2Y4ODEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBSZXZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGhvdmVyb25IZWxwOiBmYWxzZSxcbiAgICAgICAgICAgIGhlbHBmdWw6IGZhbHNlLFxuICAgICAgICAgICAgcmVhZE1vcmVDbGlja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIHJldmlld1RleHQ6IHRoaXMucHJvcHMucmV2aWV3LnJldmlld1RleHQuc2xpY2UoMCwgMzAwKSArICcuLi4nLFxuICAgICAgICAgICAgcmF0aW5nOiB0aGlzLnByb3BzLnJldmlldy5vdmVyYWxsUmF0aW5nLFxuICAgICAgICAgICAgc3RhcnM6IFtdLFxuICAgICAgICAgICAgZGF0ZTogdGhpcy5wcm9wcy5yZXZpZXcuZGluZWREYXRlLnNwbGl0KCctJylcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJhdGluZyA+IDAgPyB0aGlzLnN0YXRlLnN0YXJzLnB1c2goXCIuL2ltYWdlcy9zdGFyLTE2LnBuZ1wiKSA6IHRoaXMuc3RhdGUuc3RhcnMucHVzaChcIi4vaW1hZ2VzL3VuZmlsbGVkX3N0YXIucG5nXCIpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5yYXRpbmctLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5yZXZpZXcuaXNfaGVscGZ1bCkgdGhpcy5zZXRTdGF0ZSh7aGVscGZ1bDogdHJ1ZX0pO1xuICAgIH1cbiAgICBoZWxwZnVsQ2xpY2soZSkge1xuICAgICAgICB0aGlzLnN0YXRlLmhlbHBmdWwgPSAhdGhpcy5zdGF0ZS5oZWxwZnVsO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtoZWxwZnVsOiB0aGlzLnN0YXRlLmhlbHBmdWx9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5yZXZpZXcuaXNfaGVscGZ1bCA/IHRoaXMucHJvcHMucmV2aWV3LmlzX2hlbHBmdWwgPSAwIDogdGhpcy5wcm9wcy5yZXZpZXcuaXNfaGVscGZ1bCA9IDE7XG4gICAgICAgIGF4aW9zLnBvc3QoYC9oZWxwZnVsRXZlbnQvJHt0aGlzLnByb3BzLnJldmlldy5pc19oZWxwZnVsfS9pZC8ke3RoaXMucHJvcHMucmV2aWV3LmlkfWApXG4gICAgICAgIC50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cbiAgICByZWFkTW9yZVRvZ2dsZShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVhZE1vcmVDbGlja2VkOiAhdGhpcy5zdGF0ZS5yZWFkTW9yZUNsaWNrZWR9KVxuICAgICAgICB0aGlzLnN0YXRlLnJldmlld1RleHQubGVuZ3RoIDwgMzAxIFxuICAgICAgICA/IHRoaXMuc2V0U3RhdGUoe3Jldmlld1RleHQ6IHRoaXMucHJvcHMucmV2aWV3LnJldmlld1RleHR9KSBcbiAgICAgICAgOiB0aGlzLnNldFN0YXRlKHtyZXZpZXdUZXh0OiB0aGlzLnByb3BzLnJldmlldy5yZXZpZXdUZXh0LnNsaWNlKDAsIDMwMCl9KTtcbiAgICB9XG4gICAgcmVwb3J0UG9wVXAoKSB7XG5cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgaGVscEhvdmVyLCByZWFkTW9yZVBocmFzZTtcbiAgICAgICAgdGhpcy5zdGF0ZS5ob3Zlcm9uSGVscCA/IGhlbHBIb3ZlciA9ICdoZWxwSG92ZXJlZCcgOiBoZWxwSG92ZXIgPSAnJztcbiAgICAgICAgdGhpcy5zdGF0ZS5yZWFkTW9yZUNsaWNrZWQgPyByZWFkTW9yZVBocmFzZSA9ICctIFJlYWQgbGVzcycgOiByZWFkTW9yZVBocmFzZSA9ICcrIFJlYWQgbW9yZSc7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5yZWFkTW9yZUNsaWNrZWQgJiYgdGhpcy5wcm9wcy5yZXZpZXcucmV2aWV3VGV4dC5sZW5ndGggPCAzMDApIHJlYWRNb3JlUGhyYXNlID0gJyc7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwicmV2aWV3Q29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiYXV0aG9yQXJlYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpbWcgY2xhc3NOYW1lPVwiaW1nLUNpcmNsZVwiIHNyYz17dGhpcy5wcm9wcy5yZXZpZXcudXNlclBob3RvfSAvPjwvc3Bhbj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMucmV2aWV3LnVzZXJOYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gKHt0aGlzLnByb3BzLnJldmlldy51c2VyQXJlYX0pPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cInN0YXJzQW5kRGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpbWcgY2xhc3NOYW1lPVwic3RhclwiIHNyYz17dGhpcy5zdGF0ZS5zdGFyc1swXX0gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGltZyBjbGFzc05hbWU9XCJzdGFyXCIgc3JjPXt0aGlzLnN0YXRlLnN0YXJzWzFdfSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48aW1nIGNsYXNzTmFtZT1cInN0YXJcIiBzcmM9e3RoaXMuc3RhdGUuc3RhcnNbMl19IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpbWcgY2xhc3NOYW1lPVwic3RhclwiIHNyYz17dGhpcy5zdGF0ZS5zdGFyc1szXX0gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGltZyBjbGFzc05hbWU9XCJzdGFyXCIgc3JjPXt0aGlzLnN0YXRlLnN0YXJzWzRdfSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5yZXZpZXcub3ZlcmFsbFJhdGluZ30uMCA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IERpbmVkIG9uIHtuZXcgRGF0ZSh0aGlzLnN0YXRlLmRhdGVbMF0sIHRoaXMuc3RhdGUuZGF0ZVsxXSAtIDEsIHRoaXMuc3RhdGUuZGF0ZVsyXS5zdWJzdHIoMCwyKSkudG9EYXRlU3RyaW5nKCl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuPk92ZXJhbGwge3RoaXMucHJvcHMucmV2aWV3Lm92ZXJhbGxSYXRpbmd9ICogRm9vZCB7dGhpcy5wcm9wcy5yZXZpZXcuZm9vZFJhdGluZ30gKiBTZXJ2aWNlIHt0aGlzLnByb3BzLnJldmlldy5zZXJ2aWNlUmF0aW5nfSAqIEFtYmlhbmNlIHt0aGlzLnByb3BzLnJldmlldy5hbWJpYW5jZVJhdGluZ30gPC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBpZD1cInJldmlld1RleHRcIj57dGhpcy5zdGF0ZS5yZXZpZXdUZXh0fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2ICBpZD1cInJlcG9ydEhlbHBmdWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGlkPVwicmVhZE1vcmVcIiBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnJlYWRNb3JlVG9nZ2xlKGUpfT57cmVhZE1vcmVQaHJhc2V9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInN1YlJlcG9ydEhlbHBmdWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnJlcG9ydFBvcFVwKCl9PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZmxhZ0ljb25cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cInJlcG9ydFRleHRcIj5SZXBvcnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBpZD17aGVscEhvdmVyfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmhlbHBmdWxDbGljayh0aGlzLnByb3BzLnJldmlldy5pc19oZWxwZnVsKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7aG92ZXJvbkhlbHA6IHRydWV9KX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHRoaXMuc2V0U3RhdGUoe2hvdmVyb25IZWxwOiBmYWxzZX0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMucmV2aWV3LmlzX2hlbHBmdWx9PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cInVwdm90ZUljb25cIiBjbGFzc05hbWU9e2hlbHBIb3Zlcn0+WyBdIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImhlbHBmdWxUZXh0XCI+SGVscGZ1bCB7dGhpcy5zdGF0ZS5oZWxwZnVsID8gJygxKScgOiAnJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFJldmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L2NvbXBvbmVudHMvUmV2aWV3LmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUZBO0FBV0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7QUFDQTs7O0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQVNBO0FBVkE7QUFSQTtBQURBO0FBREE7QUFEQTtBQTZCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhBO0FBSkE7QUFqQ0E7QUFzREE7Ozs7QUFsR0E7QUFDQTtBQW1HQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!**************************************!*\
  !*** ./components/ReviewSummary.jsx ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ReviewSummary = function (_React$Component) {\n    _inherits(ReviewSummary, _React$Component);\n\n    function ReviewSummary(props) {\n        _classCallCheck(this, ReviewSummary);\n\n        var _this = _possibleConstructorReturn(this, (ReviewSummary.__proto__ || Object.getPrototypeOf(ReviewSummary)).call(this, props));\n\n        _this.state = {};\n        return _this;\n    }\n\n    _createClass(ReviewSummary, [{\n        key: \"render\",\n        value: function render() {\n            return React.createElement(\n                \"div\",\n                null,\n                React.createElement(\n                    \"h1\",\n                    null,\n                    \"What \",\n                    this.props.reviews.length,\n                    \" People Are Saying\"\n                )\n            );\n        }\n    }]);\n\n    return ReviewSummary;\n}(React.Component);\n\nexports.default = ReviewSummary;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvY29tcG9uZW50cy9SZXZpZXdTdW1tYXJ5LmpzeD9mMjFmIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFJldmlld1N1bW1hcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPldoYXQge3RoaXMucHJvcHMucmV2aWV3cy5sZW5ndGh9IFBlb3BsZSBBcmUgU2F5aW5nPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdTdW1tYXJ5O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjbGllbnQvY29tcG9uZW50cy9SZXZpZXdTdW1tYXJ5LmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTs7OztBQWJBO0FBQ0E7QUFlQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);