import React, { useState } from "react";
import { ModalSource } from "../helpers/ModalSource";
import axios from "axios";

const API_URL = "https://wec.airpaygiving.com/main/initialize_payment";
const SECRET_KEY = import.meta.env.VITE_REACT_APP_PAYSTACK_SECRET_KEY;

function Modal({ setShowModal }) {
  const [showTab, setShowTab] = useState(true);
  // const [reference, setReference] = useState('');
  // const [initial_tx_result, setInitialTxResult] = useState({});
  const [paymentDetails, setPaymentDetails] = useState({
    fullname: null,
    email: null,
    amount: null,
  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    console.log(paymentDetails);
    return setPaymentDetails({
      ...paymentDetails,
      [name]: value.toLowerCase(),
    });
  };

  const handleInitializeTransaction = async (event) => {
    event.preventDefault();
    try {
      let request = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: paymentDetails.fullname,
          email: paymentDetails.email,
          amount: paymentDetails.amount,
        }),
      });
      let data = await request.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  // async function paystack_callback() {
  //   const reference = sessionStorage.getItem('reference');
  //   const token = LIVE_SECRET_KEY;

  //   if (!reference) {
  //     throw new Error('No reference supplied');
  //   }
  //   const url = '/transaction/verify/' + encodeURIComponent(reference);
  //   const resultObj = await submitRequest(
  //     'https://api.paystack.co',
  //     'https://api.paystack.co',
  //     'test',
  //     'GET',
  //     url,
  //     {
  //       Authorization: 'Bearer ' + token,
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     }
  //   );

  //   if (resultObj) {
  //     let data = {};
  //     data['trax'] = resultObj;

  //     if (resultObj['status'] === true) {
  //       data['tx_amount'] = sessionStorage.getItem('amount_plus_fee');
  //       // transaction was successful...
  //       // please check other things like whether you already gave value for this ref
  //       // if the email matches the customer who owns the product etc
  //       // Give value
  //       return view('success', data);
  //     } else {
  //     }
  //   }
  // }

  // async function submitRequest(SandboxBaseURL, ProductionBaseURL, mode = 'test', method, url, params = {}) {
  //   let httpResult = null;
  //   let conts = null;
  //   let httpResponse = null;
  //   let exception = null;

  //   let BASE_URL = ProductionBaseURL;

  //   if (mode === 'test') {
  //     BASE_URL = SandboxBaseURL;
  //   }

  //   try {
  //     const response = await fetch(BASE_URL + url, {
  //       method: method,
  //       headers: params,
  //       body: params.body,
  //     });
  //     conts = await response.text();
  //     httpResult = JSON.parse(conts);
  //     return httpResult;
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // }

  // function getGUID() {
  //   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
  //     const r = (Math.random() * 16) | 0,
  //       v = c == 'x' ? r : (r & 0x3) | 0x8;
  //     return v.toString(16);
  //   });
  // }

  // async function initialize_transaction(token, transaction_to_initialize_as_assoc_array) {
  //   const url = '/transaction/initialize';

  //   const resultObj = await submitRequest(
  //     'https://api.paystack.co',
  //     'https://api.paystack.co',
  //     'test',
  //     'POST',
  //     url,
  //     {
  //       Authorization: 'Bearer ' + token,
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //       body: JSON.stringify(transaction_to_initialize_as_assoc_array),
  //     }
  //   );
  //   if (
  //     resultObj != null &&
  //     resultObj.hasOwnProperty('data') &&
  //     resultObj.hasOwnProperty('status')
  //   )
  //     return resultObj;
  //   else return null;
  // }

  // const initializePayment = async () => {
  //   const token = LIVE_SECRET_KEY;
  //   const baseUrl = window.location.origin;

  //   const data = {
  //     amount: paymentDetails.amount * 100,
  //     email: paymentDetails.email,
  //     currency: 'ZAR',
  //     reference: reference.toString(),
  //     callback_url: `${baseUrl}/main/paystack_callback`,
  //     subaccount: 'ACCT_02jsjsbkj8hksin',
  //   };

  //   const initializeTransaction = async () => {
  //     const initialTxResult = await initialize_transaction(token, data);
  //     if (initialTxResult != null && initialTxResult.status === true) {
  //       setInitialTxResult(initialTxResult);
  //       setReference(initialTxResult.data.reference);
  //     }
  //   };

  //   initializeTransaction();

  //   /**
  //    * sample response
  //    * {
  //    *   "status": true,
  //    *   "message": "Authorization URL created",
  //    *   "data": {
  //    *     "authorization_url": "https://checkout.paystack.com/0peioxfhpn",
  //    *     "access_code": "0peioxfhpn",
  //    *     "reference": "7PVGX8MEk85tgeEpVDtD"
  //    *   }
  //    * }
  //    */
  // }

  return (
    <>
      <div
        className="bg-gray-700 bg-opacity-80 absolute w-full h-full px-2 py-8 top-0"
        id="modal"
      >
        <div className="flex items-center justify-center px-4 h-full w-full relative">
          <div className="fixed overflow-y-auto h-screen py-10 ">
            <div className="bg-white md:h-[700px] w-auto md:w-[1000px] rounded-md relative">
              {showTab ? (
                <article className="flex flex-col md:flex-row ">
                  <img
                    src={ModalSource[0].image}
                    alt=""
                    className="md:w-[400px] md:h-[700px] object-cover "
                  />
                  <div className="flex flex-col justify-around items-start p-3">
                    <span className="w-full flex justify-end">
                      <i
                        className="bx bx-x bx-sm hover:cursor-pointer"
                        onClick={() => setShowModal(false)}
                      ></i>
                    </span>
                    <ul className="flex text-[#007BFF] font-semibold">
                      <li
                        className="px-1 mx-1  cursor-pointer hover:border-b-[#007BFF] border-b-2"
                        onClick={() => setShowTab(true)}
                      >
                        Malawi
                      </li>
                      <li
                        className="px-1 mx-1  cursor-pointer hover:border-b-[#007BFF] border-b-2"
                        onClick={() => setShowTab(false)}
                      >
                        Mozambique
                      </li>
                    </ul>
                    <hr className="md:w-[550px]" />
                    <div>
                      <h2 className="font-bold text-xl text-[#14183E]">
                        {ModalSource[0].title}
                      </h2>
                      <h3 className="my-3">{ModalSource[0].subtitle1}</h3>
                      <h3 className="my-3">{ModalSource[0].subtitle2}</h3>
                    </div>
                    <form
                      onSubmit={handleInitializeTransaction}
                      className="flex flex-col justify-around"
                    >
                      <input
                        type="text"
                        placeholder="full name"
                        onChange={handleInput}
                        name="fullname"
                        className="border border-[#14183E] p-2 m-2 w-[400px] rounded "
                      />
                      <input
                        type="email"
                        placeholder="email"
                        name="email"
                        onChange={handleInput}
                        className="border border-[#14183E] p-2 m-2 w-[400px] rounded "
                      />
                      <input
                        type="number"
                        name="amount"
                        placeholder="amount to donate"
                        onChange={handleInput}
                        className="border border-[#14183E] p-2 m-2 w-[400px] rounded "
                      />
                      <input
                        type="submit"
                        value="Donate Now"
                        className=" bg-[#007BFF] text-white py-2 px-4 rounded mx-2 font-extrabold w-[200px]"
                      />
                    </form>
                  </div>
                </article>
              ) : (
                <article className="flex flex-col md:flex-row ">
                  <img
                    src={ModalSource[1].image}
                    alt=""
                    className="md:w-[400px] md:h-[700px] object-cover "
                  />
                  <div className="flex flex-col justify-around items-start p-3">
                    <span className="w-full flex justify-end">
                      <i
                        className="bx bx-x bx-sm hover:cursor-pointer"
                        onClick={() => setShowModal(false)}
                      ></i>
                    </span>
                    <ul className="flex text-[#007BFF] font-semibold">
                      <li
                        className="px-1 mx-1  cursor-pointer hover:border-b-[#007BFF] border-b-2"
                        onClick={() => setShowTab(true)}
                      >
                        Malawi
                      </li>
                      <li
                        className="px-1 mx-1  cursor-pointer hover:border-b-[#007BFF] border-b-2"
                        onClick={() => setShowTab(false)}
                      >
                        Mozambique
                      </li>
                    </ul>
                    <hr className="md:w-[550px]" />
                    <div>
                      <h2 className="font-bold text-xl text-[#14183E]">
                        {ModalSource[1].title}
                      </h2>
                      <h3 className="my-3">{ModalSource[1].subtitle1}</h3>
                      <h3 className="my-3">{ModalSource[1].subtitle2}</h3>
                    </div>
                    <form className="flex flex-col justify-around">
                      <input
                        type="text"
                        placeholder="full name"
                        className="border border-[#14183E] p-2 m-2 w-[400px] rounded "
                      />
                      <input
                        type="email"
                        placeholder="email"
                        className="border border-[#14183E] p-2 m-2 w-[400px] rounded "
                      />
                      <input
                        type="number"
                        placeholder="amount to donate"
                        className="border border-[#14183E] p-2 m-2 w-[400px] rounded "
                      />
                      <input
                        type="submit"
                        value="Donate Now"
                        className=" bg-[#007BFF] text-white py-2 px-4 rounded mx-2 font-extrabold w-[200px]"
                      />
                    </form>
                  </div>
                </article>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
