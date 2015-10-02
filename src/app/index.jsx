window.React = require('react');
window._ = require('underscore');
window.Fluxxor = require('fluxxor');
window.FluxMixin = Fluxxor.FluxMixin(React);
window.StoreWatchMixin = Fluxxor.StoreWatchMixin;
var UgelStoreFlux = require('../component/ugelstore.js');
var ListaUgel = require('../component/listaugel.jsx');


React.render(<ListaUgel flux = {UgelStoreFlux} />, document.getElementById('page-body'));
