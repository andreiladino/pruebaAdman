import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedId } from '../actions';
import ListarUsuarios from '../components/ListarUsuarios';



class ListarUsuariosContainers extends Component<any, any> {
    public handleUsuarioSeleccionado = (id: any) => {
        this.props.setId(id);
    }
    public render() {
        return (
            <div>
                <ListarUsuarios data={this.props.data}
                    onUsuarioSeleccionado={this.handleUsuarioSeleccionado} />
            </div>
        );
    }
}

const mapDispatchToPropsActions = dispatch => ({
    setId: (value: any) => dispatch(setSelectedId(value))
});

export default connect(null, mapDispatchToPropsActions)(ListarUsuariosContainers);