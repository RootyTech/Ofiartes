import React from 'react';

export const Dot = ({active}) => (
    <span className={["dot", active && "active"].join(" ")}></span>
)