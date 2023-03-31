import React from 'react'
import "./Product.css"

function Product (props) {

  const clickHandler = (id)=> {
    // console.log(id);
   props.onAddProduct(id)

  }





   
    return (
        

        
       <div class="shop-item">
            <span class="shop-item-title">{props.title}</span>
            <img class="shop-item-image" src={props.img}/>
            <div class="shop-item-details">
                <span class="shop-item-price"> ${props.price}</span>
                <button class="btn btn-primary shop-item-button" type="button"
                onClick={() => clickHandler(props.id)}>
                  ADD TO CART</button>
            </div>
        </div>

    )

    }
export default Product
