import * as  React from 'react';
import './styles.css';

const Usuario = (props: any) => {
    const { name } = props; 
    return (
        <div className="usuarioCont">
            <h1>{name}</h1>
        </div>
    )
};

export default Usuario;