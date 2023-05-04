import React from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import Link from "next/link";
import Loader from "./Layout/Loader";

const Success = ({loaded, message}) => {
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14 mt-10"
      id="payment-status"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        {loaded ? ( 
            <Loader />
        ) : ( 
            <div className="flex flex-col w-full">
                <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl  xl:px-20">
                    <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                        <Image
                        src="/assets/used/Standard.png"
                        width={100}
                        height={85}
                        alt="success"
                        />
                    </div>
                    <h1 className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">Success</h1> 
                    <p><strong>X-Search</strong> successfully received your payment of Your subscription will be activated soon.</p>
                    <hr/>
                    <p>{message}</p>
                    <div className="flex flex-col w-full justify-center mb-8 flex-none ">
                        <ButtonPrimary>
                            <Link href={'/'}>Close Modal</Link>
                        </ButtonPrimary>
                    </div>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default Success;
