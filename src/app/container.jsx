import { connect } from 'react-redux';
import { simpleAction,addProduct, upvote, downvote, getProducts } from '../actions/simpleAction'
import App from './component'

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  getProducts:()=>dispatch(getProducts()),
  addProduct:(product)=>dispatch(addProduct(product)),
  upvote:(id)=>dispatch(upvote(id)),
  downvote:(id)=>dispatch(downvote(id)),
})

const mapStateToProps = state => ({
  products: state.simpleReducer.products,
})

const container= connect(mapStateToProps, mapDispatchToProps)(App);
export default container