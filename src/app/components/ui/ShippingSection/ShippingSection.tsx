// import shippingImage from '../../../../../public/images/shipping.png';
import React from "react";
import TruckSvg from "../../common/Svg/TruckSvg";
import ExchangeSvg from "../../common/Svg/ExchangeSvg";
import PaymentSvg from "../../common/Svg/PaymentSvg";

const ShippingSection = () => {
  return (
    <div className="bg-[#6441C2E5] w-full py-auto lg:h-[78px] py-3 px-4 lg:px-[80px] inline-block lg:flex items-center justify-between space-y-3 lg:space-y-0">
      
      <div>
        <div className="flex  gap-4">
          <span>
            <TruckSvg />
          </span>
          <div>
            <p className="text-[16px] lg:text-[19px] font-semibold text-white">
              FREE SHIPPING
            </p>
            <p className="text-[13px] leading-4 text-white">
              BUY BDT 3000+ & GET FREE DELIVERY
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex  gap-4">
          <span>
           <ExchangeSvg/>
          </span>
          <div>
            <p className="text-[16px] lg:text-[19px] font-semibold text-white">
            7 DAYS EXCHANGE
            </p>
            <p className="text-[13px] leading-4 text-white">
            EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex  gap-4">
          <span>
            <PaymentSvg/>
          </span>
          <div>
            <p className="text-[16px] lg:text-[19px] font-semibold text-white">
            100% PAYMENT SECURE
            </p>
            <p className="text-[13px] leading-4 text-white">
            CASH ON DELIVERY AND SECURED ONLINE PAYMENT
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ShippingSection;
