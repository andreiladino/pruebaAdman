import * as React from 'react';
import './styles.css';

const UsuarioInfo = ({data}: any) => {
    // destructurando data
    const { first_name, last_name, avatar } = data;
    return (
        <div className="usuarioInfoCont">
            <p className="pName"> {`${first_name} ${last_name}` } <img className="avatarImg" src={avatar} alt=""/></p>        
        </div>
    )
};

export default UsuarioInfo;