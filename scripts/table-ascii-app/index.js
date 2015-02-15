'use strict';

var React = require('react'),
    MainContainer = require('./components/main-container');

// data
var dateNow = (new Date()).toString();
var listData = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '.', '_', '_', ' ', ' ', '_', '_', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [' ', ' ', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', ' ', ' ', '|', '_', '_', '|', '/', ' ', ' ', '|', '_', ' ', ' ', '_', '_', '_', '_', ' ', ' ' ],
    [' ', '/', ' ', ' ', '_', '_', '_', '/', '\\', '_', '_', ' ', ' ', '\\', ' ', '|', ' ', ' ', '\\', ' ', ' ', ' ', '_', '_', '\\', '/', ' ', ' ', '_', ' ', '\\', ' ' ],
    [' ', '\\', '_', '_', '_', ' ', '\\', ' ', ' ', '/', ' ', '_', '_', ' ', '\\', '|', ' ', ' ', '|', '|', ' ', ' ', '|', ' ', '(', ' ', ' ', '<', '_', '>', ' ', ')' ],
    ['/', '_', '_', '_', '_', ' ', ' ', '>', '(', '_', '_', '_', '_', ' ', ' ', '/', '_', '_', '|', '|', '_', '_', '|', ' ', ' ', '\\', '_', '_', '_', '_', '/', ' ' ],
    [' ', ' ', ' ', ' ', ' ', '\\', '/', ' ', ' ', ' ', ' ', ' ', ' ', '\\', '/', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ]
];


module.exports = function () {
	React.render(<MainContainer date={dateNow} data={listData}/>, document.body);
};
