import React from "react"
import ContentLoader from "react-content-loader"

export const LoaderTarjeta = (props) => (
    <ContentLoader 
        speed={2}
        viewBox={`0 0 ${props.width} ${props.height}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
    <rect x={props.values.xposition} y={props.values.yposition} rx="18" ry="18" width={props.values.width} height={props.values.height} /> 
    <rect x={props.values.xposition} y= {props.values.yposition + props.values.height + 30} rx="18" ry="18" width={props.values.width} height={props.values.height} /> 
    </ContentLoader>
)