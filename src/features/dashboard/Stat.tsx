import { Skeleton } from "@/components/ui/skeleton";
import type { stat } from "../../types";

function Stat({ image, field, count, isPending }: stat) {
  if (isPending)
    return (
      <div className=" w-full px-[50px] py-[35px] rounded-[30px] bg-white flex gap-[20px] border border-[#F0F0F0]">
        {/* Image placeholder */}
        <Skeleton className="h-12 w-12 rounded-full" />

        {/* Text section */}
        <div className="flex flex-col pt-2 gap-2">
          {/* field */}
          <Skeleton className="h-[14px] w-[80px]" />

          {/* count */}
          <Skeleton className="h-[32px] w-[100px]" />
        </div>
      </div>
    );
  return (
    <div className=" w-full px-[50px] py-[35px] rounded-[30px] bg-white flex gap-[20px]  border border-[#F0F0F0]">
      <div>
        <img src={image} />
      </div>
      <div className="flex flex-col pt-2">
        <span className="text-[#ACACAC] text-[12px]">{field}</span>
        <p className="text-[#333333] text-[32px] font-semibold">{count}</p>
      </div>
    </div>
  );
}

export default Stat;
