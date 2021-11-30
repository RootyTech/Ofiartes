import React from "react"
import ContentLoader from "react-content-loader"

export const Loader = (props) => (
    <ContentLoader 
    speed={2}
    viewBox={`0 0 ${props.width} ${props.height}`}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
>
    <rect x= "235" y="31" rx="20" ry="20"  width={props.values.width} height={props.values.height} /> 
    <rect x= "515" y="31" rx="20" ry="20"  width={props.values.width} height={props.values.height} /> 
    <rect x="790" y="31" rx="20" ry="20"  width={props.values.width} height={props.values.height} />
    </ContentLoader>
)