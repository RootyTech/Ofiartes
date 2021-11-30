import React from "react"
import ContentLoader from "react-content-loader"

export const MyLoader = (props) => (
    <ContentLoader 
        speed={2}
        viewBox={`0 0 ${props.width} ${props.height}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
    <rect x="120" y="8" rx="18" ry="18" width={props.values.width} height={props.values.height} /> 
    <rect x="450" y="8" rx="18" ry="18" width={props.values.width} height={props.values.height} /> 
    <rect x="280" y="350" rx="18" ry="18" width={props.values.width} height={props.values.height} />
    </ContentLoader>
)