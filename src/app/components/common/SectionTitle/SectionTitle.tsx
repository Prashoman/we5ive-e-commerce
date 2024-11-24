
interface TProps{
    title: string;
    subTitle: string;
}

const SectionTitle = ({title, subTitle}:TProps) => {
    return (
        <div>
        <h2 className="text-[#7E53D4] text-[16px] lg:text-[19px] leading-[24.7px]">
          {title}
        </h2>
        <h1 className="text-[23px] lg:text-[28px] leading-[36px] font-bold text-black">
          {subTitle}
        </h1>
      </div>
    );
};

export default SectionTitle;