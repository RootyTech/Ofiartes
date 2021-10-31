import React from 'react';
import ContentLoader from 'react-content-loader';

export const MemberLoader = (props) => (
<ContentLoader 
    speed={2}
    viewBox={`0 0 ${props.widthviewbox} ${props.heightviewbox}`}
    backgroundColor="#d4d4d4"
    foregroundColor="#bbbbbb"
    {...props}
  >
    <rect x={props.xpositions[0]} y="110" rx="3" ry="3" width="100" height="6" /> 
    <rect x={props.xpositions[1]} y="125" rx="3" ry="3" width="50" height="6" /> 
    <circle cx={props.xpositions[2]} cy="55" r="45" /> 
  </ContentLoader>
)

export const DotLoader = (props) => (
    <ContentLoader 
        speed={2}
        viewBox={`0 0 ${props.widthviewbox} ${props.heightviewbox}`}
        backgroundColor="#d4d4d4"
        foregroundColor="#bbbbbb"
        {...props}
    >
        <circle cx={props.xpositions[0]} cy="4" r={props.radius} /> 
        <circle cx={props.xpositions[1]} cy="4" r={props.radius} /> 
        <circle cx={props.xpositions[2]} cy="4" r={props.radius} />
    </ContentLoader>
    )