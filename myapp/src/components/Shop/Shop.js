import React , {useState} from 'react'
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import "./Shop.css"

function Shop () {


const [products, setProducts] = useState (
    [
                {id:1, title:'product1', price:1000, img:'images/product1.jpg'},
                {id:2, title:'product2', price:2000, img:'images/product2.jpg'},
                {id:3, title:'product3', price:3000, img:'images/product3.jpg'},
                {id:4, title:'product4', price:41000, img:'images/product4.jpg'},
                {id:5, title:'product5', price:5000, img:'images/product5.jpg'},
                {id:6, title:'product6', price:6000, img:'images/product6.jpg'}
    
            ])
  const [shoppingCart, setShoppingCart]= useState([])



    // this.state ={

    //     products : [
    //         {id:1, title:'product1', price:1000, img:'images/product1.jpg'},
    //         {id:2, title:'product2', price:2000, img:'images/product2.jpg'},
    //         {id:3, title:'product3', price:3000, img:'images/product3.jpg'},
    //         {id:4, title:'product4', price:41000, img:'images/product4.jpg'},
    //         {id:5, title:'product5', price:5000, img:'images/product5.jpg'},
    //         {id:6, title:'product6', price:6000, img:'images/product6.jpg'}

    //     ],

    //     shoppingCart:[]



const addProductToCart= (productId) => {
    console.log(productId);
    let mainProduct = products.find(product => {
        return product.id === productId
    })

    console.log(mainProduct);
    // this.setState(prevState => {
    //     return{
    //         shoppingCart : [ ...prevState.shoppingCart, mainProduct]
    //     }
    // })

    setShoppingCart( prevState =>{
        return [ ...prevState, mainProduct]
    })
}

const emptyShoppingCart = () => {
//   this.setState({
//     shoppingCart:[]
//   })
setShoppingCart([])

}

const removeProductFromCart = (productId) => {
  console.log(productId);
  let newShoppingCart = shoppingCart.filter (product => {
    return product.id !== productId
  })
//   this.setState ({
//     shoppingCart : newShoppingCart
//   })
setShoppingCart(newShoppingCart  )
}
   


    return (
      <>

          
    <div class="container content-section">
      <div class="shop-items">
        {products.map(product => (
            <Product {...product} onAddProduct={addProductToCart}/>
        ))}

      </div>

      
 
      </div>


      <div class="container content-section">
       
       <h2 class="section-header">CART</h2>
       <div class="cart-row">
         <span class="cart-item cart-header cart-column">ITEM</span>
         <span class="cart-price cart-header cart-column">PRICE</span>
         <span class="cart-quantity cart-header cart-column">QUANTITY</span>
       </div>
       <div class="cart-items">
        {shoppingCart.map(product => (
           <Cart {...product} onRemove={removeProductFromCart}/>
        ))}
       
 
       </div>
 
       <div class="cart-total">
         <strong class="cart-total-title">Total</strong>
         <span class="cart-total-price"> $0</span> 
       </div>
       <button class="btn btn-primary btn-purchase" id="remove-all-products" type="button" onClick={emptyShoppingCart}>
         Empty Cart
       </button>
     
 
         
       </div>
     
        
      </>
    )
        }
 
     
export default Shop
