import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux/es/exports';
import { toggleAuth } from '../Redux/Login/Action';
import { Link } from 'react-router-dom';
import ShowData from "./ShowData";
 

function Home()
{
    const isLoggedIn = useSelector(store => store.isLoggedIn);
    const dispatch = useDispatch();
    const [products,setProducts]=React.useState([])
    
    const handleLogout = () => {
        dispatch(toggleAuth());
    }

    const fetchData = async () => {
        try {
          
          let result = await fetch(
            `http://localhost:8080/products`
          );
          let data = await result.json();
          setProducts(data)
          
        } catch (error) {
        

        
          console.log(error);
        }
      };
    
React.useEffect(() => {
    fetchData();
  }, []);


    return(
        <div>
      {
            !isLoggedIn ? (<Link style={{color:'blue',textDecoration:'none'}} to="/login">Login</Link>) : <button style={{border:'none',fontSize:'16px', cursor:'pointer',color:'blue'}} onClick={handleLogout}>Logout</button>
        } 
          {
            isLoggedIn? <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
            {
                products?.map((el,productId)=>{
                  return(
                    <div>
                        <img src={el.image} alt="" />
                        <p>{el.title}</p>
                        <p>{el.brand}</p>
                        <p>{el.price}</p>
                        <p>{el.category}</p>
                        <Link  to={`/product/${el.id}`}>More Details</Link>
                        
                    </div>
                  )
                })
            }
    </div>:null
          }

                </div>
        
    )
}
export default Home