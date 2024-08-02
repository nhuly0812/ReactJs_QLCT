import React from 'react';
import Account from './Account/Account';
import ItemSetting from './ItemSetting/ItemSetting';

function Setting() {
    const dataSetting = [
        { icon: 'fa-solid fa-language', title: 'Language' },
        { icon: 'fa-solid fa-circle-question', title: 'Help' },
        { icon: 'fa-solid fa-user-plus', title: 'Create Account' },
        { icon: 'fa-solid fa-circle-question', title: 'Help' },
        { icon: 'fa-solid fa-circle-question', title: 'Help' },
         
    ];
    const dataSetting2 = [
        { icon: 'fa-solid fa-plus', title: 'More budget' },
        { icon: 'fa-solid fa-question', title: 'Q&A' },
        { icon: 'fa-solid fa-user-plus', title: 'Create Account' },
        { icon: 'fa-solid fa-circle-question', title: 'Help' },
        { icon: 'fa-solid fa-circle-question', title: 'Help' },
         
    ];
    return (
        <div className="flex justify-center">
            <div className="w-4/5 h-auto ">
                <Account />
                <div className="flex justify-center border-2 py-5 rounded-2xl bg-white shadow-xl mb-5">
                    <ItemSetting data={dataSetting}/>
                    <ItemSetting  data={dataSetting2}/>
                </div>
            </div>
        </div>
    );
}

export default Setting;
