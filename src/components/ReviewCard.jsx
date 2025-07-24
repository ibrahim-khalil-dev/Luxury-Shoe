import { star } from "../assets/icons";
const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col  ">
      <img
        src={imgURL}
        alt={customerName}
        className="h-[120px] w-[120px] rounded-full"
      />
      <p className="text-center text-[#6D6D6D] mt-6 max-w-sm ">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="rating"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl text-[#6D6D6D]">{rating}</p>
      </div>
      <h3 className="mt-1 text-3xl max-sm:text-2xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
