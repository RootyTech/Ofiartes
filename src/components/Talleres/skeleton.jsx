import React from "react"
import ContentLoader from "react-content-loader"

export const LoaderTalleres = (props) => (
    <ContentLoader 
        speed={2}
        viewBox={`0 0 ${props.width} ${props.height}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
    <rect x={props.values.xposition} y={props.values.yposition} rx="5" ry="5" width={props.values.width} height={props.values.height} /> 
    <rect x={props.values.xposition} y= {props.values.yposition + props.values.height + 20} rx="5" ry="5"  width={props.values.width} height={props.values.height} /> 
    <rect x={props.values.xposition} y={props.values.yposition + props.values.height*3 + 13 }  rx="5" ry="5" width={props.values.width} height={props.values.height} /> 
    <rect x={props.values.xposition} y={props.values.yposition + props.values.height*5 +5} rx="5" ry="5" width={props.values.width} height={props.values.height} />
    </ContentLoader>
)
