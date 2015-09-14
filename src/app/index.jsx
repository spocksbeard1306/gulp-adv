window.React = require('react');

var Comp = require('../component/hola.jsx');

React.render(<Comp name="Elvis" />, document.getElementById('hola'));
