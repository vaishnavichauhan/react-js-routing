import { Home_AccountData } from "../constans"

const initialState = {
    product : [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case Home_AccountData:
    return { ...state, product:payload }

  default:
    return state
  }
}
