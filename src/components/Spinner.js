import React from 'react'
import loading from './loading.png'

const Spinner=()=> {
  // render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading"/>
      </div>
    )
  // }
}

export default Spinner