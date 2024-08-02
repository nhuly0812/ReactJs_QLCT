import React from 'react';

function Categogy() {
    const dataCategory = [
        {
            icon: 'fa-solid fa-utensils',
            money: '100$',
        },
        {
            icon: 'fa-brands fa-shopify',
            money: '300$',
        },
        {
            icon: 'fa-solid fa-shirt',
            money: '250$',
        },
        {
            icon: 'fa-solid fa-taxi',
            money: '100$',
        },
        {
            icon: 'fa-solid fa-suitcase-medical',
            money: '500$',
        },
        {
            icon: 'fa-solid fa-square-rss',
            money: '95$',
        },
        {
            icon: 'fa-solid fa-school-flag',
            money: '350$',
        },
    ];
    return (
        <div className="w-[400px] h-auto bg-white flex justify-center items-center py-5 mx-10 shadow-md shadow-gray-400 rounded-2xl">
            <table className="w-[400px] text-center ">
                <tr className="border-b-2 text-[#308BEB] h-14">
                    <th>Categogy</th>
                    <th>Money</th>
                </tr>
                {dataCategory.map((item, index) => (
                    <tr key={index} className="h-16">
                        <td>
                            <i className={`${item.icon} text-2xl`}></i>
                        </td>
                        <td>{item.money}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default Categogy;
