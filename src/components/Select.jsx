import React, { forwardRef, useId } from 'react';

const Select = forwardRef(({ 
    label,
    options,
    disabled,
    className,
    ...props
}, ref) => {

    const id = useId();

  return (
    <div className="w-full flex flex-row items-center">
        {label && <label htmlFor={id} className='w-1/3 text-start'>{label}</label>}
        
        <select id={id} ref={ref} disabled={disabled}
        className={`px-3 py-2 rounded-lg outline-none duration border border-gray-200 w-full ${className}`} {...props} >
            
            {options?.map((option) => (
                <option className={className} key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  );
})

export default Select;
