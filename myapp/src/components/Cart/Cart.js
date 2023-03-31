import React, {useState } from 'react'
import "./Cart.css"

 function Cart(props) {

  const clickHandler =(id)=> {
 props.onRemove(id)

  }

 
    return (
   <div class="cart-row">
    <div class="cart-item cart-column">
      <img class="cart-item-image" src={props.img} width="100" height="100"/>
      <span class= "cart-item-title"> {props.title}</span>
    </div>
    <span class= "cart-price cart-column"> $ {props.price}</span>
    <div class="cart-quantity cart-column">
      <button class="btn ntn-danger" type="button" 
      onClick={()=> clickHandler(props.id)}>remove</button> 
      </div>

    
    </div>
    )
 
} 
export default Cart
