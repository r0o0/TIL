const { getToC } = require('./utils');
const javascript = require('../javascript/ToC');
const react = require('../react/ToC');

const sidebar = {
  '/javascript/': [
    '../home',
    getToC(javascript, 'Javascript'),
  ],
  '/': [
    '/',
    {
      title: '',
      collapsable: false,
      children: [
        getToC(javascript, 'Javascript', 'javascript/'),
        getToC(react, 'React', 'react/'),
      ]
    }
  ]
};

module.exports = sidebar;
