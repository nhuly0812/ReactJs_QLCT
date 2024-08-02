function Search() {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search or type command..."
        className="border-2 py-2 px-4 w-80 rounded-3xl ml-5"
      />
      <div className="border-2 px-4 py-1 rounded-full ml-2 bg-[#308BEB]">
        <i className="fa-solid fa-magnifying-glass text-white"></i>
      </div>
    </div>
  );
}

export default Search;
