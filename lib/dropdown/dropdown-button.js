'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _dropdown = require('./dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ButtonGroup = _button2.default.Group;
exports.default = _react2.default.createClass({
  displayName: 'dropdown-button',
  getDefaultProps: function getDefaultProps() {
    return {
      align: {
        points: ['tr', 'br'],
        overlay: {
          adjustX: 1,
          adjustY: 1
        },
        offset: [0, 4],
        targetOffset: [0, 0]
      },
      type: 'default'
    };
  },
  render: function render() {
    var _props = this.props;
    var type = _props.type;
    var overlay = _props.overlay;
    var trigger = _props.trigger;
    var align = _props.align;
    var children = _props.children;
    var className = _props.className;

    var restProps = _objectWithoutProperties(_props, ['type', 'overlay', 'trigger', 'align', 'children', 'className']);

    var cls = (0, _classnames2.default)({
      'ant-dropdown-button': true,
      className: !!className
    });
    return _react2.default.createElement(
      ButtonGroup,
      _extends({}, restProps, { className: cls }),
      _react2.default.createElement(
        _button2.default,
        { type: type },
        children
      ),
      _react2.default.createElement(
        _dropdown2.default,
        { align: align, overlay: overlay, trigger: trigger },
        _react2.default.createElement(
          _button2.default,
          { type: type },
          _react2.default.createElement(_icon2.default, { type: 'down' })
        )
      )
    );
  }
});
module.exports = exports['default'];