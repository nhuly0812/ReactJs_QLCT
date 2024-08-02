
function SearchUser() {
    return (
        <div className="my-5 mx-5 h-20  flex items-center">
            <input type="text" placeholder="Search..." className="px-5 py-3 rounded-l-full w-[400px] shadow-md" />
            <button className='bg-[#308BEB] px-5 py-3 text-white rounded-r-full'>Search</button>
        </div>
    );
}

export default SearchUser;
