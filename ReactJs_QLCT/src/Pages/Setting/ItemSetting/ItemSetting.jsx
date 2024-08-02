
function ItemSetting({data}) {
    

    
    return (
        <div className=" w-[300px] flex justify-center  my-5">
            <ul className=''>
                {data.map((item, index) => (
                    <li key={index} className='h-12 flex items-center text-[#308BEB]'>
                        <i className={item.icon}></i>
                        <span className='mx-4 text-black'>{item.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ItemSetting;
