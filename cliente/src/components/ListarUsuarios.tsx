import * as React from 'react';
import Usuario from './UsuarioLocacion/Usuario';

const ListarUsuarios = ({ data, onUsuarioSeleccionado }: any) => {
    const handleUsuarioLocacionClick = (id: any) => {
        onUsuarioSeleccionado(id);
    }
    // Iteramos el listado de usuarios pasando los datos al componente UsuariosLocacion
    const iterarListado = (fnames: any) => (
        fnames.map((fdata: any) =>
            <Usuario
                name={fdata.name}
                avatar={fdata.avatar}
                key={fdata.id}
                onUsuarioLocacionClick={() => handleUsuarioLocacionClick(fdata.id)} />)
    );

    return (
        <div>
            {iterarListado(data)}
        </div>
    );
};

export default ListarUsuarios;