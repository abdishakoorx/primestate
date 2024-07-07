import React from 'react'
import Header from './_components/Header'

function Provider({children}) {
  return (
    <div className='text-primary'>
        <Header/>
        <div className='mt-20'>
          {children}
        </div>
    </div>
  )
}

export default Provider