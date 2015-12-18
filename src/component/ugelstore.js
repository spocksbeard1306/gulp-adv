var constants = {
    LOAD_UGELES: "LOAD_UGELES",
    LOAD_SUCCESS: "LOAD_SUCCESS",
    LOAD_FAIL: "LOAD_FAIL"
};

var UgelStoreClass = Fluxxor.createStore({
    initialize: function(){
        this.ugeles = [];
        this.loading = false;
        this.code = -1;
        this.bindActions(
            constants.LOAD_UGELES,this.onLoadUgeles,
            constants.LOAD_SUCCESS, this.onLoadSuccess,
            constants.LOAD_FAIL, this.onLoadFail
        );
    },
    onLoadUgeles: function(){
        this.loading = true;
        this.emit("change");
    },
    onLoadSuccess: function(payload){
        this.loading = false;
        this.ugeles = payload.data;
        this.code = payload.code;
        this.emit("change");
    },
    onLoadFail: function(payload){
        this.loading = false;
        this.code = payload.code;
        this.emit("change");
    }
});

var UgelStoreActions = {
    loadUgeles: function(){
        this.dispatch(constants.LOAD_UGELES);
        //A la carga
        var request = new XMLHttpRequest();
        request.open('POST', 'http://192.168.210.10:8080/regprogramas/resources/usuario/listusuarios', true);

        request.onload = function(){
            if(request.status >= 200 && request.status < 400){
                //SUCESS!!
                var resp = JSON.parse(request.responseText);
                this.dispatch(constants.LOAD_SUCCESS, {data: resp, code: request.status});
            }else{
                //Error wrong access
                this.dispatch(constants.LOAD_FAIL, {code: request.status});
            }
        }.bind(this);
        request.onerror = function(){
            //There was a connection error of some sort
            var m = "Error en la conexión.";
            this.dispatch(constants.LOAD_FAIL,{msg: m});
        }.bind(this);
        request.send('tipo=UGEL');
    }
};

var UgelStoreFlux = new Fluxxor.Flux(
    {
        UgelStore: new UgelStoreClass()
    },
    UgelStoreActions
);
module.exports = UgelStoreFlux;
