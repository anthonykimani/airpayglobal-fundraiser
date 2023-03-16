import React from "react";
import ModalImage from "../assets/svg/modal-image.svg";

function Modal({ showModal, setShowModal }) {
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
                <img
                  src={ModalImage}
                  alt=""
                  className="md:w-[400px] md:h-[700px] object-cover "
                />
                <div className="flex flex-col justify-around items-start p-3">
                  <span className="w-full flex justify-end">
                    <i
                      class="bx bx-x bx-sm"
                      onClick={() => setShowModal(false)}
                    ></i>
                  </span>
                  <h2 className="font-bold">
                    Help Support Malawi-Mozambique Cyclone Relief
                  </h2>
                  <ul className="flex">
                    <li className="px-1">Malawi</li>
                    <li className="px-1">Mozambique</li>
                  </ul>
                  <hr className="md:w-[550px]" />
                  <h3>
                    The devastating Tropical Cyclone Freddy which has ripped
                    through southern Africa in a rare second landfall has killed
                    at least 216 people in Malawi and Mozambique since Saturday
                    night, with the death toll expected to rise.
                  </h3>
                  <h3>
                    Heavy rains that triggered floods and mudslides have killed
                    199 people in Malawi, authorities said Tuesday. President
                    Lazarus Chakwera declared a "state of disaster" in the
                    country's southern region and the now-ravaged commercial
                    capital, Blantyre. Some 19,000 people in the south of the
                    nation have been displaced, according to Malawi's disaster
                    management directorate.
                  </h3>
                  <form className="flex flex-col justify-around">
                    <input type="text" placeholder="full name" className="border border-[#14183E] p-2 m-2 w-[400px] rounded " />
                    <input type="email" placeholder="email" className="border border-[#14183E] p-2 m-2 w-[400px] rounded " />
                    <input type="number" placeholder="amount to donate" className="border border-[#14183E] p-2 m-2 w-[400px] rounded " />
                    <input type="submit" value="Donate Now" className=" bg-[#007BFF] text-white py-2 px-4 rounded mx-2 font-extrabold w-[200px]" />
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
