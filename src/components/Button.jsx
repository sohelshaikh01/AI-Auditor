import React from 'react';

const Button = ({
    type = "button",
    children,
    textColor = "text-white",
    bgColor = "bg-blue-700",
    className,
    ...props
}) => {

  return (
      <button type={type} className={`px-4 py-2 rounded ${textColor} ${bgColor} ${className}`} {...props}>
        {children}
      </button>
  )
}

export default Button;
