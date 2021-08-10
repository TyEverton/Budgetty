import axios from "axios"

const initialState = {
  purchases: [],
  budgetLimit: null,
  loading: false
}

const REQUEST_BUDGET_DATA = "REQUEST_BUDGET_DATA"

const ADD_PURCHASE = "ADD_PURCHASE"

export const addPurchase = () => {
  let data = axios.post('/api/budget-data/purchase',{
    description,
    price,
    cagetory
  }).then(res => res.data)
  return {
    type: ADD_PURCHASE,
    payload: data
  }
}


export const requestBudgetData = () => {
  let data = axios.get('/auth/budget-data').then(res => res.data)
    return {
      type: REQUEST_BUDGET_DATA,
      payload: data
    }
}

export default function reducer(state = initialState, action) {
  switch(action.type){
    case REQUEST_BUDGET_DATA + "_FULFILLED":
      return {...state, ...action.payload, loading: false}
      default:
        return state
  }
}