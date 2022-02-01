import React from "react"
import ContentLoader from "react-content-loader"

export const LoaderGalery = (props) => (
    <ContentLoader 
        speed={2}
        viewBox={`0 0 ${props.width} ${props.height}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x={props.values.xposition} y={0} rx="0" ry="0" width={props.values.width} height={props.values.height} />
        <rect x={ props.values.xposition + props.values.width + 5} y={0} rx="0" ry="0" width={props.values.width} height={props.values.height} />  
        {/* <rect x={ props.values.xposition + props.values.width*2 + 10} y={0} rx="0" ry="0" width={props.values.width} height={props.values.height} />  */}
        <rect x={props.values.xposition} y={props.values.height + 5} rx="0" ry="0" width={props.values.width} height={props.values.height} />
        <rect x={ props.values.xposition + props.values.width + 5} y={props.values.height + 5} rx="0" ry="0" width={props.values.width} height={props.values.height} />  
        {/* <rect x={ props.values.xposition + props.values.width*2 + 10} y={props.values.height + 5} rx="0" ry="0" width={props.values.width} height={props.values.height} />  */}
        <rect x={props.values.xposition} y={props.values.height*2 + 10} rx="0" ry="0" width={props.values.width} height={props.values.height} />
        <rect x={ props.values.xposition + props.values.width + 5} y={props.values.height*2 + 10} rx="0" ry="0" width={props.values.width} height={props.values.height} />  
        {/* <rect x={ props.values.xposition + props.values.width*2 + 10} y={props.values.height*2 + 10} rx="0" ry="0" width={props.values.width} height={props.values.height} />  */}
    </ContentLoader>
)
export const LoaderGaleryDesk = (props) => (
    <ContentLoader 
        speed={2}
        viewBox={`0 0 ${props.width} ${props.height}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x={props.values.xposition} y={0} rx="0" ry="0" width={props.values.width} height={props.values.height} />
        <rect x={ props.values.xposition + props.values.width + 5} y={0} rx="0" ry="0" width={props.values.width} height={props.values.height} />  
        <rect x={ props.values.xposition + props.values.width*2 + 10} y={0} rx="0" ry="0" width={props.values.width} height={props.values.height} /> 
        
        <rect x={props.values.xposition} y={props.values.height + 5} rx="0" ry="0" width={props.values.width} height={props.values.height} />
        <rect x={ props.values.xposition + props.values.width + 5} y={props.values.height + 5} rx="0" ry="0" width={props.values.width} height={props.values.height} />  
        <rect x={ props.values.xposition + props.values.width*2 + 10} y={props.values.height + 5} rx="0" ry="0" width={props.values.width} height={props.values.height} /> 
        
        <rect x={props.values.xposition} y={props.values.height*2 + 10} rx="0" ry="0" width={props.values.width} height={props.values.height} />
        <rect x={ props.values.xposition + props.values.width + 5} y={props.values.height*2 + 10} rx="0" ry="0" width={props.values.width} height={props.values.height} />  
        <rect x={ props.values.xposition + props.values.width*2 + 10} y={props.values.height*2 + 10} rx="0" ry="0" width={props.values.width} height={props.values.height} /> 
    </ContentLoader>
)
