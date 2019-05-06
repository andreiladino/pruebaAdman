import * as React from 'react';
import { Component } from 'react';
import './styles.css';
import Usuario from './Usuario';
import UsuarioInfo from './UsuarioInfo';

// const apiUrl = 'http://localhost:8080/api/listar-usuarios';

const data = {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
    first_name: 'Andreiii',
    last_name: 'Ladino',
}


// Clase que contiene el listado de usuarios
class UsuariosLocacion extends Component<any, any> {

    // Constructor para inicializar el estado del componente
    constructor(props: any){
        super(props);
        const { name } = props;
        this.state ={
            data,
            name,            
        }
    }

    // Ciclo de carga del componente
    public componentDidMount() {
        // fetch(apiUrl).then(resolve => {
        //     return resolve.json();
        // }).then(data => {
        //     console.log(data);
        // });
    }

    public render() {
        const { onUsuarioLocacionClick } = this.props;
        return (
            <div className="usuariosLocacionCont" onClick={onUsuarioLocacionClick}>
                <Usuario name={this.state.name} />
                {/* Si data viene en true carga los datos si no muestra cargando... */}
                {data ? <UsuarioInfo data={this.state.data} /> : "Cargando..."}
            </div>
        )
    }
};

export default UsuariosLocacion;

