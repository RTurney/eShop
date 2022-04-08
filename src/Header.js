import React from 'react'

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

import './Header.css';

const Header = () => {
  return (
    <div className="header_container">
         <div className='header_logo'></div>
      <StorefrontIcon className='header_logoImage' fontSize='large'/>
      <h2 className='header_title'>eShop</h2>
      <div className="header_search">
        <input type={'text'} className='header_searchInput' />
        <SearchIcon className='header_searchIcon' />
      </div>
      <div className="header_nav">
        <div className="nav_item">
          <span className="nav_item1">Hello Guest</span>
          <span className="nav_item2">Sign in</span>
        </div>
        <div className="nav_item">
          <span className="nav_item1">Your</span>
          <span className="nav_item2">Shop</span>         
        </div>
        <div className="nav_item">
          <ShoppingBasketIcon fontSize='large' className='header_basketIcon' />
          <span className="nav_basketCount">0</span>          
        </div>
      </div>
    </div>
  )
}

export default Header;