import React from "react";
import design from "../assets/img-1.jpg";

const Banner = () => {
  return (
    <div className="bg-dark-red">
      <div className="flex flex-col md:flex-row px-0 md:px-16 pt-16">
        <div class="p-6 grid">
          <a href="#">
            <h5 class="mb-2 text-[28px] md:text-[45px] md:text-left font-bold tracking-tight text-white">
              San Francisco Bus Tours
            </h5>
          </a>
          <p class="mb-3 font-normal text-white md:text-left text-[16px] md:text-[26px]">
            Experience the best of San Francisco on a Hop-on, Hop-off San
            Francisco Big Bus Tour!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <a
              href="#"
              class="w-max bg-secondary text-primary font-semibold items-center px-6 py-4 text-sm text-center rounded-md"
            >
              BUY TICKETS
            </a>
            <a
              href="#"
              class="bg-transparent  text-[16px] md:text-[26px] text-secondary font-medium items-center px-3 py-2 text-sm text-center rounded-md"
            >
              Adult tickets from <strong>US$63.00</strong>
            </a>
          </div>
        </div>
        <img className="-mb-8 rounded-md  mx-auto" src={design} alt="design" />
      </div>
    </div>
  );
};

export default Banner;
