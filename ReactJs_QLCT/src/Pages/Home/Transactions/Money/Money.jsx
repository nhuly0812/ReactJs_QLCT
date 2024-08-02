import React from 'react';

function Money({ bgColor, title, price }) {
    return (
        <div className={`${bgColor} m-3 flex justify-center items-center shadow-md shadow-gray-400`}>
            <div className="flex flex-col  items-center text-white">
                <b className="text-2xl">${price}</b>
                <span className="text-xs">{title}</span>
            </div>
        </div>
    );
}

export default Money;
