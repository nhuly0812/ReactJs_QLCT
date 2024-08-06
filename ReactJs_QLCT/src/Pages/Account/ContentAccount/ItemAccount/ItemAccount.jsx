import React from 'react';

function ItemAccount() {
    const dataItemAccount = [
        {
            title: 'Name',
            content: 'Nguyen Nhu Ly',
        },
        {
            title: 'Email',
            content: 'nninni@gmail.com',
        },
        {
            title: 'Phone',
            content: '09883928377',
        },

        {
            title: 'Address',
            content: '457 Ton Duc Thang - Hoa Khanh Nam - Lien Chieu - Da Nang',
        },
    ];
    return (
        <>
            {dataItemAccount.map((item, index) => (
                <div key={index} className="w-[300px] my-3">
                    <span className="font-bold">{item.title}:</span>
                    <p>{item.content}</p> 
                    {/* <i className="fa-regular fa-pen-to-square"></i> */}
                </div>  
            ))}
            
        </>
    );
}

export default ItemAccount;
