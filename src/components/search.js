import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const SearchComponent = ({ search, onChange }) => {
  return (
    <div className="">
      <div className="">
        <SearchRoundedIcon className="n" />
        <input type="text" placeholder="Search..." className="w-52 h-7 pl-1 bg-gray-50 outline-none" value={search} onChange={onChange} />
      </div>
    </div>
  );
};

export default SearchComponent;
