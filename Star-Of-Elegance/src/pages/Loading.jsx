import React from 'react'
import './Loading.css'

const Loading = () => {
  return (
    <div className="bod">
        <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
            <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
        </svg>
    </div>

  )
}

export default Loading