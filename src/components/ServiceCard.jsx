const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full shadow-xl padding-iii rounded-[20px]">
      <div className="w-11 h-11 justify-center items-center coral-red rounded-full flex">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-6 text-3xl leading-normal font-bold">{label}</h3>
      <p className="mt-4 break-words text-lg leading-normal text-[#6D6D6D]">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
