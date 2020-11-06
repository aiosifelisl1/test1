(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types'), require('@loyaltyone-am/typographyv2')) :
	typeof define === 'function' && define.amd ? define(['react', 'prop-types', '@loyaltyone-am/typographyv2'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.umd = factory(global.React, global.PropTypes, global.TypographyV2));
}(this, (function (React, PropTypes, TypographyV2) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
	var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
	var TypographyV2__default = /*#__PURE__*/_interopDefaultLegacy(TypographyV2);

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var _extends_1 = createCommonjsModule(function (module) {
	function _extends() {
	  module.exports = _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	module.exports = _extends;
	});

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

	function _objectWithoutProperties(source, excluded) {
	  if (source == null) return {};
	  var target = objectWithoutPropertiesLoose(source, excluded);
	  var key, i;

	  if (Object.getOwnPropertySymbols) {
	    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }

	  return target;
	}

	var objectWithoutProperties = _objectWithoutProperties;

	var ButtonV2 = function ButtonV2(props) {
	  var disabled = props.disabled,
	      onClick = props.onClick,
	      children = props.children,
	      containerClasses = props.containerClasses,
	      fullWidth = props.fullWidth,
	      light = props.light,
	      _props$dataTrackClick = props.dataTrackClick,
	      dataTrackClick = _props$dataTrackClick === void 0 ? '' : _props$dataTrackClick,
	      _props$dataTrackId = props.dataTrackId,
	      dataTrackId = _props$dataTrackId === void 0 ? '' : _props$dataTrackId,
	      rest = objectWithoutProperties(props, ["disabled", "onClick", "children", "containerClasses", "fullWidth", "light", "dataTrackClick", "dataTrackId"]);

	  return /*#__PURE__*/React__default['default'].createElement("button", _extends_1({
	    className: "buttonv2 ".concat(fullWidth ? 'buttonv2__fullWidth' : '', " ").concat(light ? 'buttonv2__light' : '', " ").concat(containerClasses || ''),
	    type: "button",
	    disabled: disabled,
	    onClick: onClick,
	    "data-track-click": dataTrackClick,
	    "data-track-id": dataTrackId
	  }, rest), light ? /*#__PURE__*/React__default['default'].createElement(TypographyV2__default['default'].ButtonLinkText.ButtonTextAlt, null, children) : /*#__PURE__*/React__default['default'].createElement(TypographyV2__default['default'].ButtonLinkText.ButtonText, null, children));
	};

	ButtonV2.propTypes = {
	  disabled: PropTypes__default['default'].bool,
	  onClick: PropTypes__default['default'].func,
	  children: PropTypes__default['default'].oneOfType([PropTypes__default['default'].element, PropTypes__default['default'].string]),
	  containerClasses: PropTypes__default['default'].string,
	  fullWidth: PropTypes__default['default'].bool,
	  light: PropTypes__default['default'].bool
	};
	ButtonV2.defaultProps = {
	  disabled: false,
	  onClick: function onClick(e) {
	    return console.log(e.target.innerText);
	  },
	  containerClasses: '',
	  fullWidth: false,
	  light: false
	};

	return ButtonV2;

})));
