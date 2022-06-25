import React from 'react'
import styled from 'styled-components'
import crystalData from '../../res/crystalsdata'

const Box = styled.div `
    background-color: white;
    width: 420px;
    height: 500px;
    margin: 10px;
    border: 1px solid grey;
`  
const Div = styled.div `
    border: 1px solid purple;
    display: float;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px;
`
const CrystalBox = () => {
  return (
    <Div>
    {crystalData.map (crystal => {
      return (
        <Box key={crystal.id}>
          <h1>{crystal.name}</h1>
        </Box>
      )
    })}
    
    </Div>
  )
}

export default CrystalBox