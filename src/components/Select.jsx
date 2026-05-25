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
        {label && <label htmlFor={id} className='w-1/3'>{label}</label>}
        
        <select id={id} ref={ref} disabled={disabled}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration border border-gray-200 w-full ${className}`} {...props} >
            
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  );
})

export default Select;
