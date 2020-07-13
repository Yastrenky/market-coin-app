import React from 'react';

const Search = ({ limit, searchValue, handleSearch, handleSelectet }) => {
        let selectStatus = false;
        if (searchValue.length !== 0) {
                selectStatus = true;
        }
        return (

                <div className="left-search-container">
                        <span><input value={searchValue} onChange={handleSearch} type="text" placeholder="Search..." /></span>
                        <span><select value={limit} onChange={handleSelectet}
                                className="custom-select" id="country" disabled={selectStatus}>
                                {selectStatus ? <option value={limit}>{limit}</option> : null}
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                                <option value="40">40</option>
                                <option value="50">50</option>
                                <option value="60">60</option>
                                <option value="70">70</option>
                                <option value="80">80</option>
                                <option value="90">90</option>
                                <option value="100">100</option>
                                <option value="200">200</option>
                                <option value="400">400</option>
                                <option value="600">600</option>
                                <option value="800">800</option>
                                <option value="1000">1000</option>
                        </select></span>
                </div>

        )

}

export default Search;