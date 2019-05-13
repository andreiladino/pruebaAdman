import * as  React from 'react';
import './styles.css';

const Usuario = (props: any) => {
    const { name, avatar, onUsuarioLocacionClick} = props;
    return (
        <div className="usuarioCont" onClick={onUsuarioLocacionClick}>
            <span className="pName">{name}</span>
            <img className="avatarImg" src={avatar} alt="" />
        </div>
    )
};

export default Usuario;