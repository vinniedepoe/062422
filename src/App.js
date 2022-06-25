import { Component } from 'react'
import './App.css';
import CrystalBox from './Components/CrystalBox/CrystalBox';
import crystalData from './res/crystalsdata';
import CrystalGrid from './Components/CrystalGrid/CrystalGrid';


class App extends Component {
  constructor() {
    super()
    this.state = {
      crystals : []
    }
    
  }
  componentDidMount(){
    fetch('./res/crystalsdata.js')
    .then ((response)=>response.json())
    .then ((gems)=>this.setState(()=>{
      return {gems}
    },
    ()=>{
      console.log(this.state)
    }
    ))
  }
  

  render() {
    
    return (
      
      <div className="App">
        {/*this.crystals.map (crystal => {
        return (
        <p key={crystal.id}>{crystal.name}</p>
        )
      })*/}
        <CrystalGrid name="shis"/>
        
        

      </div>
    );
  }
}

export default App;
