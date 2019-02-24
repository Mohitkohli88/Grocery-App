import {types} from '../reducers/simpleReducer'
/* 
  src/actions/simpleAction.js
*/
export const simpleAction = () => dispatch => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: 'result_of_simple_action'
  })
}

export const addProduct = (name) => {
  return{
      type:types.add,
      name,
  }
}

export const getProducts =() => (dispatch) =>{
  const products =[{
    id:1,
    name:'a',
    votes:1,
  },{
    id:2,
    name:'s',
    votes:3,
  },{
    id:3,
    name:'ff',
    votes:10,
  }]
  
  dispatch(getProductSuccess(products))
  
}

export const getProductSuccess =(products) =>{
  return{
      type:types.list,
      products,
  }
}

export const upvote =(id) => {
  return{
      type:types.upvote,
      id,
  }
}

export const downvote = (id) => {
  return{
      type:types.downvote,
      id,
  }
}