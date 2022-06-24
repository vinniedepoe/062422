import { Component } from 'react'
import './App.css';
import CrystalBox from './Components/CrystalBox/CrystalBox';

import CrystalGrid from './Components/CrystalGrid/CrystalGrid';


class App extends Component {
  constructor() {
    super()
    this.state = {
      crystals: [{
        name: "Amethyst"
      },
      {
        name: "Agate"
      },
      {
        name: "Ametrine"
      },
      {
        name: "Amber"
      },
      ],
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Crystals</h1>
        {this.state.crystals.map((crystal)=>{
          return (
            <p>{crystal.name}</p>
          )
        })}
      <CrystalGrid/>
        

      </div>
    );
  }
}

export default App;
