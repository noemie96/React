import React, {Component, Fragment} from 'react';
import './App.css'
import Membre from './components/Membre'
import Button from './components/Button'

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
    marauder : marauder,
    isShow: false
  }

  handleClick = (nb) => {
    const marauder= {...this.state.marauder}//...permet de copier un state car on ne peut pas le modifier directement
    marauder.membre1.age += nb
    this.setState({marauder:marauder})

  }

  handleShow = () =>{
    const isShow = !this.state.isShow //retourne l'inverse (système de toggle)
    this.setState({isShow})
  }

  handleChange = (event,id) =>{
    const marauder = {...this.state.marauder}
    const nom = event.target.value
    marauder[id].nom = nom 
    this.setState({marauder:marauder})
  }

  hideName = (id) =>{
    //console.log(id)
    const marauder = {...this.state.marauder}
    
    marauder[id].nom = 'X'

    this.setState({marauder})
  }
  render() { 
    
    const liste = Object.keys(this.state.marauder).map(membre => {
      return (
        <Membre
          key={membre} 
          hideName = {() => this.hideName(membre)}
          handleChange = {(event) => this.handleChange(event,membre)}
          age={this.state.marauder[membre].age} 
          nom={this.state.marauder[membre].nom} />
      )
    })

    return(
      <Fragment>
      <div className="App">
        <h1>{this.props.title}</h1>
        
      
          {liste}
          </div>
      </Fragment>
   //   React.createElement('div', {className: 'App'}, React.createElement('h1',null,'React App'))
    )
}
}
 
export default App;
