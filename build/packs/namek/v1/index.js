'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hyperfy = require('hyperfy');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const rand = hyperfy.seed(1337);
const trees = [];
const numTrees = 200;
const dist = 100;

for (let i = 0; i < numTrees; i++) {
  trees.push({
    id: i,
    pos: [rand(-dist, dist), rand(-200, 0) / 200, rand(-dist, dist)],
    sca: rand(200, 1000) / 1000
  });
}

function Namek() {
  return /*#__PURE__*/React__default["default"].createElement("space", {
    hdr: "sky.hdr"
  }, /*#__PURE__*/React__default["default"].createElement("skysphere", {
    src: "sky.jpg"
  }), /*#__PURE__*/React__default["default"].createElement("rigidbody", null, /*#__PURE__*/React__default["default"].createElement("model", {
    src: "grass.glb"
  })), trees.map(tree => /*#__PURE__*/React__default["default"].createElement("rigidbody", {
    key: tree.id,
    position: tree.pos
  }, /*#__PURE__*/React__default["default"].createElement("model", {
    src: "tree.glb",
    scale: tree.sca
  }))), /*#__PURE__*/React__default["default"].createElement("spawn", null));
}

exports["default"] = Namek;
