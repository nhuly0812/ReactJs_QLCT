import React from 'react'

function ItemInput({ type, placeholder, value, onChange }) {
    return (
        <div className='mb-4'>
            <input 
                className='border-2 rounded-lg w-80 px-4 py-3' 
                type={type} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
            />
        </div>
    )
}

export default ItemInput;
