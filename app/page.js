"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import axios from "axios";
// import boots from "./assets/boots.jpeg";
// import { useNavigate } from "react-router";
// import { Link } from "react-router-dom";
// import Button from "./Button";

function Home() {

    const publicKey = "pk_test_b96e71b885408edb45a872a480eed4cec4e1608f";
    // const [amount, setAmount] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const amount=50000 
    // const navigate = useNavigate()
    const router = useRouter()
    const componentProps = {
      email,
      amount:amount*100,
    
      metadata: {
        name,
        phone,
      },
      publicKey,
      text: "Pay Now",
      onSuccess: () =>
        alert("Thanks for doing business with us! Come back soon!!"),
        // navigate('./'),
        onClose: () => alert("Wait! Don't leave :("),
     
     
  
      
    };
    
  
    // const createInvoice= ()=>{
  
    // }
  
    const checkCustomerExists = async (email_or_code) => {
      try {
        const result = await axios.get(
          `https://api.paystack.co/customer/${email_or_code}`,
  
          {
            headers: {
                Authorization:
                "Bearer sk_test_022aebd27b0221da3fca099ca791100a9e2a6fc8",
                "Content-Type": "application/json"
            },
          }
          
        );
        console.log(result)
        const customer = result.data.data.customer_code
          console.log(customer)
      if (customer) {
        router.push(`/Invoice?customer=${customer}`);
      }
       
        console.log("worked");
      } catch (error) {
        console.log(error)
        router.push("/Customer");
      }
  
  
    };





  return (
    <>
   
      <div className="App">
            <div className="heading">
            <h3 className="logo">Teestores</h3>
            <span>Your one stop Shop for every Piece of Luxury</span>
            </div>

      <div className="container">
        <div className="item">
        
          <img className="item-image" src='https://media.istockphoto.com/id/1359011668/photo/woman-holding-in-hands-black-leather-female-boots-in-box-isolated-on-gray-background-copy.jpg?s=612x612&w=0&k=20&c=npH67ILZiLjNowvJ3hXmzZDD3wLIbTdEXPVZ9xOJXUs=' alt="" />
          <div className="item-details">
            <p>Wonderful kicks</p>
          </div>
        </div>

        <div className="checkout">
        <div className="checkout-form">
          <div className="checkout-field">
            <label>Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="checkout-field">
            <label>Email</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="checkout-field">
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
            
          <div className="checkout-field">
            <label>Amount</label>
           <p style={{border:"1px solid white", borderRadius:"5px", padding:"7px", textAlign:"left" , marginTop:"2px"}}>{amount}</p>
            
          </div>
          <PaystackButton
            className="paystack-button"
            style={{ marginTop: "0px" }}
            {...componentProps}
            
          />
        </div>
        </div>
       
      </div>

       
      </div>

      <footer >
        <h4>Would you rather Pay Later?
            Quickly generate your Invoice Here: </h4>
            <div style={{ padding:"20px"}}>
      <form action="">
        <input type="email" name="" id="" style={{ backgroundColor:"#e5e5e5", color:"black", padding:"10px", borderRadius:'20px', border:"none"}}
        placeholder="Enter Email Address Here"
         onChange={(e) => setEmail(e.target.value)} required/>
      </form>

      <div>
        
      </div>
      <button style={{fontSize:"12px", marginTop:"20px"}}
      
        onClick={()=>{checkCustomerExists(email)}}
      >
        Get Invoice
      </button>
      </div>
       
       </footer>
    </>
  );
}

export default Home;
