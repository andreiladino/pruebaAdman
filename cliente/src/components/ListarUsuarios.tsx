import * as React from 'react';
import UsuariosLocacion from './UsuarioLocacion';

const ListarUsuarios = ({ names, onUsuarioSeleccionado }: any) => {
    const handleUsuarioLocacionClick = (name: any) => {
        onUsuarioSeleccionado(name);
    }
    // Iteramos el listado de usuarios pasando los datos al componente UsuariosLocacion
    const iterarListado = (fnames: any) => (
        fnames.map((name: any) =>
            <UsuariosLocacion
                name={name}
                key={name}
                onUsuarioLocacionClick={() => handleUsuarioLocacionClick(name)} />)
    );

    return (
        <div>
            {iterarListado(names)}
        </div>
    );
};

export default ListarUsuarios;