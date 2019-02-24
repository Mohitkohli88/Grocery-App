import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      name:'',
    }
    this.handleOnChange=this.handleOnChange.bind(this)
    this.handleAddProduct=this.handleAddProduct.bind(this)
  }
  componentWillMount(){
    this.props.getProducts()
  }
  handleOnChange(event){
    this.setState({
      name:event.target.value,
    })
  }
  handleAddProduct(){
    this.state.name && this.props.addProduct(this.state.name)
    this.setState({
      name:'',
    })
  }
  render() {
    const {products, upvote, downvote} =this.props
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Grocery App</h1>
        </header>
        <div className="card">
          <label>Product Name:</label><input id='name' type='text' value={this.state.name} onChange={this.handleOnChange}/>
          <p><button className="card-button" onClick={this.handleAddProduct}>Add </button></p>
        </div>
          <ul className="main-ul">
              {products.map(product =>
                <li key={product.id} className="main-ul-li">
                  <div>
                      <div>Name: {product.name}</div> 
                      <div>Vote: {product.votes}</div> 
                      <div>
                          <input 
                              type='button'
                              value='Like'
                              onClick={()=>upvote(product.id)}
                          />
                          <input 
                              type='button'
                              value='UnLike'
                              onClick={()=>downvote(product.id)}
                          />
                      </div>
                  </div>
              </li>
              )}
          </ul>     
      </div>
    );
  }
}

export default App;
