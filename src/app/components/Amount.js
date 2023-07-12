"use client";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';


const currencies = [
    {
        value: 'NGN - Nigerian Naira',
        label: '#',
      },
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

export default function Amount() {
    const [selectedCurrency, setSelectedCurrency] = useState('#');
    const [amount, setAmount] = useState('');
  
    const handleCurrencyChange = (event) => {
      setSelectedCurrency(event.target.value);
    };
  
    const handleAmountChange = (event) => {
      setAmount(event.target.value);
    };

    return(
        <div className="flex flex-col pl-10">

            <div className='mb-2'>
                <div className="text-label-text">Narration</div>
                <div><input className="w-72 rounded-sm p-2 border border-[#00000066] text-sm " /></div>
           </div>

            <div className="flex justify-between">
                <span>
                    <label className="text-label-text">Amount to pay</label><br/>
                    <span className="flex justify-between">
                        <span className="w-fit rounded-sm p-2 border bg-[#D9D9D9] border-r-0 border-[#00000066] text-sm ">{selectedCurrency}</span>
                        <input className="w-72 rounded-sm p-2 border border-[#00000066] border-l-0 text-sm appearance-none" type="number" value={amount} onChange={handleAmountChange}/>
                    </span> 
                </span>

                <span>
                    <label className="text-label-text">Select Currency</label><br/>
                    
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Select"
                        defaultValue="NGN"
                        helperText="Please select your currency"
                        value={selectedCurrency} onChange={handleCurrencyChange} 
                        >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.label}>
                            {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </span>
            </div>
            
        
            
        </div>
    )
}