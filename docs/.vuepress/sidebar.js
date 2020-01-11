const { getToC } = require('./utils');
const javascript = require('../javascript/ToC');

const sidebar = {
  '/javascript/': [ getToC(javascript, 'Javascript') ],
  '/': [
    {
      title: 'Table of Contents',
      collapsable: false,
      children: [
        '/',
        getToC(javascript, 'Javascript', 'javascript/'),
      ]
    }
  ]
};

module.exports = sidebar;
