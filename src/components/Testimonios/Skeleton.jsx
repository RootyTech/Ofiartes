import React from 'react';
import ContentLoader from 'react-content-loader';

export const MyLoader = (props) => (
<ContentLoader 
    speed={2}
    viewBox={`0 0 ${props.width} ${props.height}`}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
>
    <rect x={props.xpositions[0]} y="29" rx="3" ry="3" width={props.contentwidth} height="6" /> 
    <rect x={props.xpositions[0]} y="53" rx="3" ry="3" width={props.contentwidth} height="6" /> 
    <rect x={props.xpositions[0]} y="79" rx="3" ry="3" width={props.contentwidth} height="6" /> 
    <circle cx={props.xpositions[1]} cy="150" r="20" /> 
    <rect x={props.xpositions[2]} y="135" rx="3" ry="3" width="147" height="10" /> 
    <rect x={props.xpositions[2]} y="155" rx="3" ry="3" width="52" height="6" /> 
    <circle cx={props.xpositions[3]-30} cy="204" r="5" /> 
    <circle cx={props.xpositions[3]} cy="204" r="5" /> 
    <circle cx={props.xpositions[3]+30} cy="204" r="5" />
</ContentLoader>
)

/** [60, 87, 114, 240] */