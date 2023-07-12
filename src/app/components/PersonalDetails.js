import RemitaPayment from "react-remita";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const residences = [
  {
    value: 'ABH',
    label: 'Alexander brown hall',
  },
  {
    value: 'AWO',
    label: 'Awolowo hall',
  },
  {
    value: 'SBH',
    label: 'Bello hall',
  },
  {
    value: 'QIH',
    label: 'Idia hall',
  },
  {
    value: 'GIH',
    label: 'Independence hall',
  },
  {
    value: 'RKH',
    label: 'Kuti hall',
  },
  {
    value: 'KMH',
    label: 'Mellanby hall',
  },
  {
    value: 'NAH',
    label: 'Nnamdi Azikwe hall',
  },
  {
    value: 'QEH',
    label: 'Queen Elizabeth hall',
  },
  {
    value: 'LTH',
    label: 'Tedder hall',
  },
];


export default function PersonalDetails() {

  const [paymentData, setpaymentData] = useState({
    key: "QzAwMDAyNzEyNTl8MTEwNjE4NjF8OWZjOWYwNmMyZDk3MDRhYWM3YThiOThlNTNjZTE3ZjYxOTY5NDdmZWE1YzU3NDc0ZjE2ZDZjNTg1YWYxNWY3NWM4ZjMzNzZhNjNhZWZlOWQwNmJhNTFkMjIxYTRiMjYzZDkzNGQ3NTUxNDIxYWNlOGY4ZWEyODY3ZjlhNGUwYTY=", // enter your key here
    customerId: "",
    firstName: "",
    lastName: "",
    email: "",
    amount: null,
    narration: "",
  });


  let data = {
    ...paymentData,
    onSuccess: function (response) {
      // send data to backend 
      // function callback when payment is successful
      // console.log("callback Successful Response", response);
    },
    onError: function (response) {
     
      // function callback when payment fails
      // console.log("callback Error Response", response);
    },
    onClose: function () {
   
      // function callback when payment modal is closed
      // console.log("closed");
    },
  };

    return(
      <div className="container pl-10" id="payment-form"> 
        <h2>Pay with Remita</h2>
        <div className='flex justify-between'>
          <div className="flex flex-col mb-2">
                <div className="text-label-text">First Name</div>
                <div>
                  <input 
                    type='text' 
                    name="firstName" 
                    onChange={(e) =>
                      setpaymentData({ ...paymentData, firstName: e.target.value })
                    }
                    className="w-72 p-2 border border-[#00000066] rounded-sm text-sm" />
                </div>
           </div>

           <div className="flex flex-col mb-2">
                <div className="text-label-text">Last Name</div>
                <div>
                  <input 
                    type='text' 
                    name="lastName" 
                    onChange={(e) =>
                      setpaymentData({ ...paymentData, lastName: e.target.value })
                    }
                    className="w-72 p-2 border border-[#00000066] rounded-sm text-sm" />
                  </div>
           </div>
        </div>

        <div className='flex justify-between'>

           <div className="flex flex-col mb-2">
                <div className="text-label-text">Email</div>
                <div>
                  <input 
                    type='email' 
                    name="email"
                    onChange={(e) =>
                      setpaymentData({ ...paymentData, email: e.target.value })
                    }
                    className="w-72 p-2 border border-[#00000066] rounded-sm text-sm" />
                </div>
           </div>

            <div className="flex flex-col">
              <div><label className="text-label-text">Year of Graduation</label></div>
              <div>
                <input 
                  type='text' 
                  name="graduation" 
                
                  className="w-72 p-2 border border-[#00000066] rounded-sm text-sm" />
                </div>
                
            </div>
        </div>

        <div className='flex justify-between'>
          <div className='mb-2'>
              <div className="text-label-text">Narration</div>
              <div>
                <input 
                  type='text' 
                  name="narration" 
                  onChange={(e) =>
                    setpaymentData({ ...paymentData, narration: e.target.value })
                  }
                  className="w-72 rounded-sm p-2 border border-[#00000066] text-sm " /></div>
          </div>

          <div className='mb-2'>
            <div className="text-label-text">Amount to pay</div>
              <div>
                <input 
                  type='number' 
                  name="amount" 
                  onChange={(e) =>
                    setpaymentData({ ...paymentData, amount: e.target.value })
                  }
                  className="w-72 rounded-sm p-2 border border-[#00000066] text-sm appearance-none" />
              </div>
            </div>
          </div>
           
            
          <div className="flex flex-col mb-2"> 
              <div>
                <label className="text-label-text">Hall of Residence</label>
              </div>


              <div>
                <TextField
                    id=''
                    select
                    name="residence"
                
          
                    >
                    {residences.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
              </div>

              

              
                
                
            </div>
            
          
            <RemitaPayment
              remitaData={data}
              className="rounded-btn bg-btn text-btn-text w-40 p-2" // class to style the button
              text='Pay with Remita' //text to show on button
              // add a 'live' prop to use the live urls/keys
            />
            

        </div>
    )
    
}