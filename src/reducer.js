const initialState = {
  cars: ['toyota', 'opel']
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CAR': {
      const carsUpdated = state.cars.concat(action.newcar)
      return { ...state, cars: carsUpdated }
    }
    default:
      return state
  }
}

export const addNewCar = (userinput) => {
  return {
    type: 'ADD_CAR',
    newcar: userinput
  }
}

export default reducer