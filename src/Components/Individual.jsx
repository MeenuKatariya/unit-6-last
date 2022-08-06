import React from 'react'
import { useParams } from 'react-router-dom'
export const IndividualPage=()=> {
    const {id} =useParams()
    console.log(id)
    const [singleItem, setSingleItem] = React.useState();
    const [isInCart, setIsInCart] = React.useState(false);
    const [itemFromCart, setItemFromCart] = React.useState(null);

    const fetchProduct = async(id) => {
        try {
          let res = await fetch(`http://localhost:8080/products/${id}`);
          let item = await res.json();
          setSingleItem(item);
        } catch (error) {
          console.log(error)
        }
      }

      const checkInCart = async (productId) => {
        try {
          let res = await fetch(`http://localhost:8080/cart/${productId}`);
          let item = await res.json();
          // console.log(item);
          if(item.id){
            setIsInCart(true);
            setItemFromCart(item);
          }
          else{
            setIsInCart(false);
            setItemFromCart(null);
          }
        } catch (error) {
          console.log(error)
        }
      }

      const handleAddToCart = async (item) => {
        try {
          let body = item;
          body.quantity = 1;
          // console.log(body);
          await fetch(`http://localhost:8080/cart`, {
            method: 'POST',
            headers : { 'Content-Type' : 'application/json' },
            body : JSON.stringify(body)
          });
          setIsInCart(true);
          setItemFromCart(body);
        } catch (error) {
          console.log(error)
        }
      }

      React.useEffect(()=>{
       if(id)
       {
        fetchProduct(id)
        checkInCart(id)
       }
      },[])
  return (
    <div>
    {
        singleItem?<div>
         <img src={singleItem.image} alt="" />
         <p>
            {singleItem.title}
         </p>
         <p>
            {singleItem.price}
         </p>
         <p>
            {singleItem.brand}
         </p>
         <button onClick={()=>{handleAddToCart(singleItem)}} >ADD TO CART</button>
        </div>:null
    }
    </div>
  )
}
