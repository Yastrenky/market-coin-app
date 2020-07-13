import React from 'react';
import Loader from './Loader';
import ListGenerator from './ListGenerator';
import Board from './Board';
import Search from './Search';
const Home = ({
  data,
  favorites,
  limit,
  addToFavorites,
  removeFromFavorites,
  handleElementListCoinClick,
  handleSelectet,
  handleSearch,
  searchValue,
  selectedCoin
}) => {
  return (

    <div className="main-coins-container">
      <div className="left-nav">
        <div className="left-search">
          <Search {...{ limit, searchValue, handleSearch, handleSelectet }} />
        </div>
        {data.length === 0 ? <Loader /> : <ListGenerator {...{ data, handleElementListCoinClick }} />}
      </div>
      <Board {...{ data, favorites, addToFavorites, removeFromFavorites, selectedCoin }} />
    </div>

  )
}

export default Home;