import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <section className="relative overflow-hidden py-10">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center w-20 md:w-30">
                <img src={logo} alt="logo" />
                <span className="ml-4 text-lg font-bold">Hotel Mome</span>
              </div>
              <div>
                <p className="mb-4  text-base font-medium">
                Made with ❤️ by Jaimin Patel
                </p>
                <p className="text-sm">
                  &copy; Copyright 2022. All Rights Reserved by Hotel Momo.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase">
                Company
              </h3>
              <ul>
                <li className="mb-4">Features</li>
                <li className="mb-4">Pricing</li>
                <li className="mb-4">Affiliate Program</li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase ">
                Support
              </h3>
              <ul>
                <li className="mb-4">Account</li>
                <li className="mb-4">Help</li>
                <li className="mb-4">Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase ">
                Legals
              </h3>
              <ul>
                <li className="mb-4">Terms &amp; Conditions</li>
                <li className="mb-4">Privacy Policy</li>
                <li>Licensing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
