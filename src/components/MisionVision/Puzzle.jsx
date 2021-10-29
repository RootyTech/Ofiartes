import * as React from "react"

export const SvgComponent = (props) => {
  return (
    <svg
      width={22}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.767 10.433l-3.275-3.275c-.312-.311-.214-.644.215-.741 0 0 .356-.08.793-.518a2.404 2.404 0 00-3.4-3.4c-.438.438-.517.793-.517.793-.097.43-.431.527-.742.215L11.567.234a.803.803 0 00-1.134 0L7.16 3.507c-.311.313-.215.647.215.743 0 0 .356.08.793.517a2.405 2.405 0 01-3.4 3.4c-.437-.437-.517-.792-.517-.792-.096-.43-.43-.527-.742-.216L.234 10.434a.803.803 0 000 1.132l3.274 3.275c.311.311.214.645-.216.742 0 0-.355.08-.792.518a2.404 2.404 0 103.4 3.4c.438-.438.517-.793.517-.793.097-.43.43-.527.742-.214l3.274 3.273a.803.803 0 001.133 0l3.275-3.274c.312-.311.215-.646-.215-.742 0 0-.356-.08-.793-.517a2.404 2.404 0 013.4-3.4c.438.437.517.793.517.793.097.43.43.527.742.216l3.275-3.276a.805.805 0 000-1.134z"
        fill= {props.color}
      />
    </svg>
  )
}