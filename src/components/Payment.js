import React, { useState } from 'react';
import { AccountBalanceWallet, CreditCard, LocalAtm, Check } from '@mui/icons-material';

export default function Payment() {
    const [selectedCard, setSelectedCard] = useState('payment');

    const handleCardClick = (card) => {
        if (selectedCard === card) {
        setSelectedCard(null);
        } else {
        setSelectedCard(card);
        }
    };

    return(
        <div className="">
            <div className="text-md font-medium">Payment Method</div>

            <p className="text-label-text">Choose a payment method</p>
            {/* <div className='pl-10'>
                <div className="flex justify-between">
                    <div className={`border ${
                        selectedCard === 'payment' ? 'border-green-500' : 'border-black'
                        } border-opacity-25 rounded-lg p-4 cursor-pointer`}
                        onClick={() => handleCardClick('payment')}>
                        <span className="text-blue-500 text-3xl">
                        <CreditCard />
                        </span>
                        <div className="mt-2 text-gray-700 font-bold text-sm">Payment</div>
                        {selectedCard === 'payment' && (
                            <span className="absolute top-2 right-2 text-green-500">
                                <Check />
                            </span>
                        )}
                    </div>

                    <div className={`border ${
                        selectedCard === 'wallet' ? 'border-green-500' : 'border-black'
                        } border-opacity-25 rounded-lg p-4 cursor-pointer mx-4`}
                        onClick={() => handleCardClick('wallet')}>
                        <span className="text-yellow-500 text-3xl">
                        <AccountBalanceWallet />
                        </span>
                        <div className="mt-2 text-gray-700 font-bold text-sm">Wallet</div>
                        {selectedCard === 'wallet' && (
                            <span className="absolute top-2 right-2 text-green-500">
                                <Check />
                            </span>
                        )}
                    </div>

                    <div className={`border ${
                            selectedCard === 'bankTransfer' ? 'border-green-500' : 'border-black'
                            } border-opacity-25 rounded-lg p-4 cursor-pointer`}
                            onClick={() => handleCardClick('bankTransfer')}>
                        <span className="text-green-500 text-3xl">
                        <LocalAtm />
                        </span>
                        <div className="mt-2 text-gray-700 font-bold text-sm">Bank Transfer</div>
                        {selectedCard === 'bankTransfer' && (
                            <span className="absolute top-2 right-2 text-green-500">
                                <Check />
                            </span>
                        )}
                    </div>
                </div>
            </div> */}

            <div>

            <form className="pl-10">
            
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="cardNumber">
                        Card Number
                        </label>
                        <input
                        className="shadow appearance-none border rounded w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="cardNumber"
                        type="text"
                        placeholder="Enter card number"
                    />
                </div>
                <div className="flex justify-between">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="expirationDate">
                        Expiration Date
                            </label>
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="expirationDate"
                            type="text"
                            placeholder="MM/YYYY"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="cvv">
                            CVV
                            </label>
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="cvv"
                            type="text"
                            placeholder="Enter CVV"
                        />
                    </div>
                </div>
                
            </form>

            </div>

            



        </div>
    )
}