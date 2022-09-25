import './Sidebar.css'

import { ReactComponent as HomeIcon } from '../assets/HomeIcon.svg';
import { ReactComponent as LibraryIcon } from '../assets/LibraryIcon.svg'
import React from 'react'
import { ReactComponent as SearchIcon } from '../assets/SearchIcon.svg'

const myPlaylist = [
  {
    id: 1,
    name:'Asish',
  },
  {
    id: 2,
    name: 'Prakhar Garg',
  }, {
    id: 3,
    name: 'Jubin Nautiyal',
  }, {
    id: 4,
    name: 'Kishore Kumar',
  }, {
    id: 5,
    name: 'The Weekend',
  }, {
    id: 6,
    name: 'Anuv Jain',
  }, {
    id: 7,
    name: 'Arijit Singh',
  }, {
    id: 8,
    name: 'Ariana Grande',
  },
  {
    id: 9,
    name: 'Sasha Sloan',
  },
  {
    id: 10,
    name: 'Jass Manak',
  },
]
const Sidebar = () => {
  return (
    <div className='side-bar-container'>

      <div className='side-bar-items'>
        <HomeIcon width={'18px'} strokeWidth={'2px'}></HomeIcon>
        Home 
      </div>
      <div className='side-bar-items'>
        <SearchIcon width={'18px'} strokeWidth={'2px'} >Search</SearchIcon>
        Search
      </div>
      <div className='side-bar-items'>
        <LibraryIcon width={'18px'} strokeWidth={'2px'} >Library</LibraryIcon>
        Library
      </div>
      <div className='side-options'>
        {
          myPlaylist.map((item) => {
            return (
              <div className='side-bar-items' key={item.id}>
                 {item.name}
              </div>
            )
          })
        }
      </div>
    
    </div>
  )
}

export default Sidebar