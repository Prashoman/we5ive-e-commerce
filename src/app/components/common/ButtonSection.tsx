"use client";
interface TProps{
    shadow: boolean;
}
const ButtonSection = ({shadow}:TProps) => {
  return (
    <div className="flex items-center">
      <button className={`bg-[#8F71E1] py-2 lg:py-3 px-9 rounded-full text-white ${shadow === true ?'text-shadow-custom':''} `}>Shop Now</button>
      <button className="bg-[#8F71E1] rounded-full py-2 px-2 lg:py-3 lg:px-3">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 7L6 18"
            stroke="#F4F8FF"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M11 6.13153C11 6.13153 16.6335 5.65664 17.4885 6.51155C18.3434 7.36647 17.8684 13 17.8684 13"
            stroke="#F4F8FF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default ButtonSection;
