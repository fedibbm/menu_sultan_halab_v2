import React from 'react'

const Header = ({children}) => {
  return (
    <div className='bg-darkRed min-h-72'>
      {children}
    </div>
  )
}

export default Header