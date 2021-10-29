import React from 'react';
import { Link } from 'react-router-dom';

export const Button = (props) => (
    <Link to="/quienes_somos" className={props.clase}>{props.message}</Link>
)