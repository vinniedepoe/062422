import { Component } from 'react'
import styled from 'styled-components'
import CrystalBox from '../CrystalBox/CrystalBox'
import crystalData from '../../res/crystalsdata'

const Grid = styled.div `
margin: 0 auto;
    display: float;
    clean:both;
    justify-items: center;
    width: 80vw;
    background-color: rgba(10,10,10,0.7)
`

class CrystalGrid extends Component {
  
   
  render(){
    
    return (
      
      <Grid><p>{this.props.name}</p>
      <CrystalBox/>
          
      
      </Grid>
      
      
    )
  }
}

export default CrystalGrid