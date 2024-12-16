import axios from 'axios';
import React, { useState } from 'react'

const Addabout = () => {
    const moreObj = {
        image: "",
        title: "",
        price: "",
        description: "",
        category: ""
        
    };
    
      const [crossset ,setcrossset] = useState(moreObj)
      console.log(crossset);
      
     const handlesubmits = (e) => {
        e.preventDefault()
    
        axios.post('http://localhost:3000/product',crossset)
        .then((res) => setcrossset(res.data))
        .catch((err) => console.log(err))
     }
    
     const handlechange = (e) => {
        setcrossset({ ...crossset, [e.target.name]: e.target.value });
      console.log(e.target.value);
      
    };
    
    
    
      return (
        <div>
          
    
          <form onSubmit={handlesubmits} style={{marginTop:"25px"}}>
                    <input type='text' placeholder='Image' name="image" value={crossset.image} onChange={handlechange}   style={{padding : "10px 40px"}}/><br /><br />
                    <input type='text' placeholder='Title' name="title"  value={crossset.title} onChange={handlechange}  style={{padding : "10px 40px"}} /><br /><br />
    
                    <select name="category"   style={{padding : "10px 58px"}} value={crossset.category} onChange={handlechange} >
                        <option value="">Select Category</option>
                        <option value="mens_clothing">Men's Clothing</option>
                        <option value="jewellery">Jewellery</option>
                        <option value="electronics">Electronics</option>
                        <option value="womens_clothing">Women's Clothing</option>
                    </select><br /><br />
    
                    <input type='text' placeholder='Price' name="price" value={crossset.price} onChange={handlechange}  style={{padding : "10px 40px"}} /><br /><br />
                    <input type='text' placeholder='Description' name="description"  value={crossset.description} onChange={handlechange} style={{padding : "10px 40px"}} /><br /><br />
                    <input type='submit' style={{padding : "8px 20px"}}/><br /><br />
                </form>
        </div>
      )


 
}

export default Addabout
