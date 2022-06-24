import React from 'react'
import styled from 'styled-components'
import CrystalBox from '../CrystalBox/CrystalBox'

const Grid = styled.div `
margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    width: 60vw;
    background-color: gray;
`

const CrystalGrid = () => {
  return (
    <div>
    <Grid>
        <CrystalBox/>
        <CrystalBox/>
        <CrystalBox/>
        <CrystalBox/>
        <CrystalBox/>
        <CrystalBox/>
        <CrystalBox/>
        <CrystalBox/>
        <CrystalBox/>
        <CrystalBox/>
        <CrystalBox/>
        <CrystalBox/>
        <CrystalBox/>
        <CrystalBox/>
        <CrystalBox/>
        <CrystalBox/>
    
    </Grid>
    
    </div>
  )
}

export default CrystalGrid