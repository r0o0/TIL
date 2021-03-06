const { getToC } = require('./utils');
const javascript = require('../javascript/ToC');
const react = require('../react/ToC');

const sidebar = {
  '/javascript/': [
    '../home',
    getToC(javascript, 'Javascript'),
  ],
  '/react/': [
    '../home',
    getToC(react, 'React'),
  ],
  '/': [
    '/',
    {
      title: 'Table Of Contents',
      collapsable: false,
      children: [
        getToC(javascript, 'Javascript', 'javascript/'),
        getToC(react, 'React', 'react/'),
      ]
    }
  ]
};

module.exports = sidebar;
