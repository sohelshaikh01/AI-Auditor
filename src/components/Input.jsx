import React, { useId } from 'react';
import { forwardRef } from 'react';

const Input = forwardRef(({
    label,
    type = "text",
    className,
    ...props
}, ref) => {
    const id = useId();

    return(
        <div className='w-full flex flex-row items-center gap-2'>
            {label && <label className='inline-block mb-1 pl-1' htmlFor={id}>{label}</label>}
            <input type={type} ref={ref} id={id} className={`px-2 sm:px-3 py-1 sm:py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} {...props} />
        </div>
    );
});

export default Input;
