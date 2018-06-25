'use strict';

/** @jsx h */

function h(type, props) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return { type: type, props: props, children: children };
}

function createElement(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  var $el = document.createElement(node.type);
  node.children.map(createElement).forEach($el.appendChild.bind($el));
  return $el;
}

var a = h(
  'ul',
  { 'class': 'list' },
  h(
    'li',
    null,
    'item 1'
  ),
  h(
    'li',
    null,
    'item 2'
  )
);

var $root = document.getElementById('root');
$root.appendChild(createElement(a));
