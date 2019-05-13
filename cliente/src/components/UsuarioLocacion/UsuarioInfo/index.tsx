import * as React from 'react';
import './styles.css';

const UsuarioInfo = ({data}: any) => {
    // destructurando data
    const { first_name, last_name, avatar, email } = data;
    return (
        <div className="usuarioInfoCont">
            <p className="pNameUser"> 
                {`${first_name} ${last_name}` }
                <br/>
                {email}
                <br/>
                <img className="avatarImgUser" src={avatar} alt=""/>            
            </p>                 
        </div>
    )
};

export default UsuarioInfo;