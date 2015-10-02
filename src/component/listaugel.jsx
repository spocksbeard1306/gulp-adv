var ListaUgel = React.createClass({
    mixins: [
        FluxMixin,
        StoreWatchMixin("UgelStore")
    ],
    getStateFromFlux: function(){
        var flux = this.getFlux();
        return {
            ugeles: flux.store("UgelStore").ugeles,
            loading: flux.store("UgelStore").loading,
            code: flux.store("UgelStore").code
        };
    },
    componentDidMount: function(){
        this.loadMethod();
    },
    loadMethod: function(){
        var flux = this.getFlux();
        flux.actions.loadUgeles();
    },
    render: function(){
        if (this.state.loading){
            return (
                <div id="listaugeles" className="component">
                    <div>
                        <img src ="img/loading.gif" />
                    </div>
                </div>
            );
        }else{
            if(this.state.code == -1){
                return(
                    <div id="listaugeles" className="component">
                        <span>Seleccione una UGEL</span>
                        <div>
                            <span>Listado de Ugeles</span>
                        </div>
                    </div>
                );
            }else if(this.state.code >= 200 && this.state.code < 400){
                var arr = _.map(this.state.ugeles, function(v, k){
                    return <option>{v.usuario+'-'+v.nombre}</option>;
                });
                return (
                    <div id="listaugeles" className="component">
                        <span>Seleccione una UGEL</span>
                        <div>
                            <select size="20">
                                {arr}
                            </select>
                        </div>
                    </div>
                );
            }else{
                return(
                    <div id="listaugeles" className="component" onClick={this.loadMethod}>
                        <span>Seleccione una UGEL</span>
                        <div>
                            <img className="img-reload" src="img/reload.png" />
                            <span>Recargar</span>
                        </div>
                    </div>
                );
            }
        }
    }
});

module.exports = ListaUgel;
