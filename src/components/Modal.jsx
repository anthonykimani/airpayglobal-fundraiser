import React, { useState } from "react";
import ModalImage from "../assets/svg/modal-image.svg";
import { ModalSource } from "../helpers/ModalSource";

function Modal({ setShowModal }) {
  const [showTab, setShowTab] = useState(true);

  return (
    <>
      <div
        className="bg-gray-700 bg-opacity-80 absolute w-full h-full px-2 py-8 top-0"
        id="modal"
      >
        <div className="flex items-center justify-center px-4 h-full w-full relative">
          <div className="fixed overflow-y-auto h-screen py-10 ">
            <div className="bg-white md:h-[700px] w-auto md:w-[1000px] rounded-md relative">
              <article className="flex flex-col md:flex-row ">
                {showTab ? (
                  <img
                    src={ModalSource[0].image}
                    alt=""
                    className="md:w-[400px] md:h-[700px] object-cover "
                  />
                ) : (
                  <img
                    src={ModalSource[1].image}
                    alt=""
                    className="md:w-[400px] md:h-[700px] object-cover "
                  />
                )}
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
                  {showTab ? (
                    <div>
                      <h2 className="font-bold text-xl text-[#14183E]">{ModalSource[0].title}</h2>
                      <h3 className="my-3">{ModalSource[0].subtitle1}</h3>
                      <h3 className="my-3">{ModalSource[0].subtitle2}</h3>
                    </div>
                  ) : (
                    <div>
                      <h2 className="font-bold text-xl text-[#14183E]">{ModalSource[1].title}</h2>
                      <h3 className="my-3">{ModalSource[1].subtitle1}</h3>
                      <h3 className="my-3">{ModalSource[1].subtitle2}</h3>
                    </div>
                  )}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
