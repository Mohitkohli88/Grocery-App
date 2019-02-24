export const types = {
  add:'ADD_PRODUCT',
  list:'GET_ALL',
  upvote:'UPVOTE_PRODUCT',
  downvote:'DOWN_PRODUCT',
}
/* 
  src/reducers/simpleReducer.js
*/
const initial = {
  products:[],
  error:'',
}

export default (state = initial, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload
      }
    case types.add: {
      const lastId= state.products.reduce((pre,cur)=>{
        return (pre.id>cur.id)? pre:cur
        }).id
      const product = {
        name:action.name,
        votes:0,
        id:lastId+1,
      }
      return {
        ...state,
        products:[
          ...state.products,
          product,
        ]
      }
    }
      case types.list:{
        return {
            ...state,
            products:action.products,
        }
    }
    case types.upvote:{
      return {
          ...state,
          products: state.products.map((pr) => {
              if(pr.id === action.id) {
                  pr.votes++
              }
              return pr
          })
      }
    }
    case types.downvote:
      return {
          ...state,
          products: state.products.map((pr) => {
              if(pr.id === action.id && pr.votes >= 1) {
                  pr.votes--
              }
              return pr
          })
    }
    default:
      return state
  }
}
