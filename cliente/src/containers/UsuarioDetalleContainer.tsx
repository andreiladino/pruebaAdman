import * as React from 'react';
import { Component } from 'react';
import UsuarioDetalle from 'src/components/UsuarioDetalle';
import { connect } from 'react-redux';

class UsuarioDetalleContainer extends Component<any, any> {
    public render() {
        return (
            <div>
                {this.props.id ?
                    <UsuarioDetalle id={this.props.id} /> : 
                    <h3 className="detalle-title">No ha seleccionado usuario</h3>
                }
            </div>
        )
    }
}

const mapStateToProps = ({ id }) => ({ id });
export default connect(mapStateToProps, null)(UsuarioDetalleContainer);