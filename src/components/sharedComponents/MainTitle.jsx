import {Helmet} from 'react-helmet-async'
import React from 'react'

const MainTitle = ({title}) => {
  return (
    <Helmet>
        {<title>Star Of Elegance | {title}</title>}
    </Helmet>
  )
}

export default MainTitle