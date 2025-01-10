import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import axios from "axios";

function Invoice() {
  const location = useLocation().search.replace("?", "");
  const amount = 50000 ;
  const navigate = useNavigate();

  const customer = location.split("=")[1];

  const description = "2-for-1 promo";
  // console.log(customer)
  const makePayment = async (form) => {
    form.preventDefault();
    try {
      let response = await axios.post(
        "https://api.paystack.co/paymentrequest",
        {
          customer,
          amount: amount*100,
          description,
        },

        {
          headers: {
            Authorization:
              "Bearer " + "sk_test_b67c74ff0ca0c976a02d9689b30d5ecb7f04398f",
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      // console.log(customer)

      if (response) {
        // navigate(`./Payment?amount=${amount}`)
        alert("Kindly Check your email for Invoice");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (

    <>
    <div className="App">
       <div className="checkout invoice">
        <div style={{lineHeight:"1px"}}>
        <h5 className="logo2" >Blaqkly</h5>
        </div>
           <h3>Customer Invoice </h3>
          <div className="div1">
            <div className="title">
              <h3>Customer Code:</h3>
            </div>
            <p>{customer}</p>
          </div>

          <div className="div1">
            <div className="title">
              <h3>Amount</h3>
            </div>

            <p>{amount}</p>
          </div>

          <div className="div1">
            <div className="title">
              <h3>Description</h3>
            </div>

            <p>{description}</p>
          </div>

          <button className="invoice-button" onClick={makePayment}>Create Invoice</button>
        </div>
   
    </div>
   
    
    </>
   
  );
}

export default Invoice;
