import type { stat } from "../../types";

function Stat({ image, field, count }: stat) {
  return (
    <div className="max-w-[324px] w-full px-[50px] py-[35px] rounded-[30px] bg-white flex gap-[20px] border border-[#F0F0F0]">
      <div>
        <img src={image} />
      </div>
      <div className="flex flex-col pt-2">
        <span className="text-[#ACACAC] text-[14px]">{field}</span>
        <p className="text-[#333333] text-[32px] font-semibold">{count}</p>
      </div>
    </div>
  );
}

export default Stat;
