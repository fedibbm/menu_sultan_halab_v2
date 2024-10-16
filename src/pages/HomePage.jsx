import React from 'react'
import MenuContainer from '../components/MenuContainer'
import Header from '../components/Header'
import CategoryItem from '../components/CategoryItem'
import CategoriesPage from './CategoriesPage'
const HomePage = () => {
  return (
    <div className='flex flex-col gap-0 w-screen overflow-x-hidden'>
      <CategoriesPage />
    </div>
  )
}

export default HomePage