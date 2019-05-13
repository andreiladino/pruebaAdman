import * as React from 'react';
import { Component } from 'react';
import UsuarioInfo from './UsuarioLocacion/UsuarioInfo';

const apiUrl = "http://localhost:8080/api/detalle-usuario/";

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

    public updateUser = (id:any) =>{
        const userId = apiUrl + id;
        fetch(userId).then(resolve => {
            return resolve.clone().json();
        }).then(data => {
            this.setState({ usuarioDetalle: data.data });
        });
    }

    public componentWillReceiveProps(nextProps){
        if(nextProps.id !== this.props.id){
            /*  seteamos el estado de usuarioDetalle a null 
                para que cada vez que hagamos click en otro usuario 
                salga la letra de usuarioDetalle 
            */
            this.setState({usuarioDetalle: null})
            this.updateUser(nextProps.id);
        }

    }

    // Ciclo de carga del componente
    public componentDidMount() {
        this.updateUser(this.props.id);
    }

    public renderDetalleinfo(usuarioDetalle: any) {
        return <UsuarioInfo data={usuarioDetalle} />
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
