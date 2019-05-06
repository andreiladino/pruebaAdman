import * as React from 'react';
import { Component } from 'react';
import UsuarioInfo from './UsuarioLocacion/UsuarioInfo';

// const apiUrl = "http://localhost:8080/api/detalle-usuario";

// const data = {
//     avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
//     first_name: 'Adolfo',
//     last_name: 'Ladino',
// }


// const names = [
//     "Adolfo",
//     "Andrei",
//     "Mary",
//   ];


class UsuarioDetalle extends Component<any, any> {

    constructor(props: any){
        super(props);
        this.state = { usuarioDetalle: null }
    }

    // Ciclo de carga del componente
    public componentDidMount() {
        // fetch(apiUrl).then(resolve => {
        //     return resolve.json();
        // }).then(data => {
        //     console.log(data);
        // });
    }

    public renderDetalleinfo(usuarioDetalle: any) {
        return usuarioDetalle.map((data: any, index:any) => (<UsuarioInfo key={index} data={data} />))
    }


    public renderProgress = () => {
        return <h3>Cargando detalle de usuario...</h3>;
    }

    public render() {
        const { name } = this.props;
        const { usuarioDetalle } = this.state;
        return (
            <div className='usuarioDetalleCont'>
                <h2> Detalle usuario de: {name} </h2>
                {usuarioDetalle ? this.renderDetalleinfo(usuarioDetalle) : this.renderProgress()}
            </div>
        )
    }
};

export default UsuarioDetalle;
