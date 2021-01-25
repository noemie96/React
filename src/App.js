import React, {Component, Fragment} from 'react';
import './App.css'
import Membre from './components/Membre'

const marauder = {
  membre1:{
    nom: 'Moony',
    age: 34
  },
  membre2:{
    nom: 'Wormtail',
    age: 33
  },
  membre3:{
    nom: 'Padfoot',
    age: 34
  },
  membre4:{
    nom: 'Prongs',
    age: 24
  },
}

class App extends Component {
  state = {
    marauder : marauder 
  }

  handleClick = () => {
    const marauder= {...this.state.marauder}//...permet de copier un state car on ne peut pas le modifier directement
    marauder.membre1.age += 1
    this.setState({marauder:marauder})

  }

  render() { 
    const {title} = this.props
    return(
      <Fragment>
      <div className="App">
        <h1>{this.props.title}</h1>
        <h2>{title}</h2>
        <p>I solemnly swear that i am up to no good! </p>
      </div>
      <Membre
        age={this.state.marauder.membre1.age}
        nom={this.state.marauder.membre1.nom}/>
      <Membre 
        age={this.state.marauder.membre2.age}
        nom={this.state.marauder.membre2.nom}/>
      <Membre
        age={this.state.marauder.membre3.age}
        nom={this.state.marauder.membre3.nom}/>
      <Membre 
        age={this.state.marauder.membre4.age}
        nom={this.state.marauder.membre4.nom}/>
        <Membre
          age="13"
          nom="Harry">
          Je suis une merde
        </Membre>
        <button onClick={this.handleClick}>+1</button>
        
      </Fragment>
   //   React.createElement('div', {className: 'App'}, React.createElement('h1',null,'React App'))
    )
}
}
 
export default App;
