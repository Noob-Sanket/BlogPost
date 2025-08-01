import React from "react";

function button({
    children,
    type = 'button',
    bgcolor = 'bg-blue-600',
    tectColor = 'text-white',
    className = '',
    ...props

}) {
  return <button className={`px-4 py-2 rounded-lg ${bgcolor} ${textColor} ${className}`} {...props}>
    {children}
  </button>
}

export default button;
