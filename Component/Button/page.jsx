import React, {useState} from "react";
import "./Payment.css";
import { useNavigate } from "react-router";
import axios from "axios";


function Button() {
  const [email, setEmail] = useState("")
  const navigate = useNavigate();

  // const createInvoice= ()=>{

  // }

  const checkCustomerExists = async (email_or_code) => {
    try {
      const result = await axios.get(
        `https://api.paystack.co/customer/${email_or_code}`,

        {
          headers: {
            Authorization:
              "Bearer " + "sk_test_b67c74ff0ca0c976a02d9689b30d5ecb7f04398f",
          },
        }
      );
      // console.log(result.data)
      const customer = result.data.data.customer_code
      console.log(customer)

    if (result) {
      navigate(`../Invoice?customer=${customer}`);
    }
     
      console.log("worked");
    } catch (error) {
    //   navigate("./Customer");
      console.log(err)
    }


  };

  return (
<>

    <div className="App" style={{marginTop:"20px"}}>

 

      <div style={{backgroundColor:'#3b3b3b', padding:"20px"}}>
      <form action="">
        <input type="email" name="" id="" style={{ backgroundColor:"#0000", padding:"10px", borderRadius:'20px', border:"none"}}
        placeholder="Enter Email Address Here"
         onChange={(e) => setEmail(e.target.value)}/>
      </form>

      <div>
        
      </div>
      <button style={{fontSize:"12px", marginTop:"20px"}}
      
        onClick={() => {
          checkCustomerExists(email);
        }}
      >
        Get Invoice
      </button>
      </div>
      
    </div>
    </>
  );
}

export default Button
