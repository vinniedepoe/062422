import React from 'react'
import styled from 'styled-components'

const Box = styled.div `
    background-color: rgb(160, 90, 170);
    width: 220px;
    height: 300px;
    margin: 10px;
`

const CrystalBox = () => {
  return (
    <div>
    <Box/>
    </div>
  )
}

export default CrystalBox