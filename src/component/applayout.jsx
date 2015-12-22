import React from 'react';
import {Input,Button} from 'react-bootstrap';

export var AppLayout = React.createClass({
    render(){
        return(
            <div>
                <Input type="text"/>
                <Button bsSize="small" bsStyle="primary">Click Aqui</Button>
            </div>
        );
    }
});
