import React from 'react';

export const Member = ({photoUrl, name, role}) => {
    return (
        <div className="member">
            <img src={`https:${photoUrl}`} alt={`Miembro de la corporación ${name}`} />
            <h4>{name}</h4>
            <h5>{role}</h5>
        </div>
    )
}