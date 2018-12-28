import React, { Component } from 'react'

// connect from react-redux
import { connect } from 'react-redux'

// import needed functions from our reducer
import { addNewCar } from './reducer'

class App extends Component {
  state = {
    inputValue: ''
  }

  handleClick = () => {
    this.props.addNewCar(this.state.inputValue)
  }

  render() {
    return (
      <div>
        <input 
          value={ this.state.inputValue } 
          onChange={ event => this.setState({ inputValue: event.target.value }) }>
        </input>

        <button onClick={ this.handleClick }>Add</button>

        { this.props.cars.map((car, index) => <div key={ index }>{ car }</div>) }
      </div>
    )
  }
}

// access the store and define the data we need in this component (App)
const mapStateToProps = state => {
  return {
    cars: state.cars // now we can use props 'cars' in our component App
  }
}

// instead of using just export...
// export default App

// wrap the component App with it's props and pass it to the connect:
export default connect(
  mapStateToProps,
  { addNewCar }
)(App)