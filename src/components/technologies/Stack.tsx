import type { TechnologyType } from "../../type";
import StackCart from "./StackCart";

interface StackTypeData {
  data: TechnologyType[];
  handleRemoveAllFromStack: () =>void;
  handleRemoveEachElement: (getId:number) =>void;
}
const Stack = ({ data,handleRemoveAllFromStack,handleRemoveEachElement }: StackTypeData) => {
  return (
    <div className="col-span-12 mt-12 xl:mt-0 xl:col-span-3 sticky top-24 h-fit ">
      <div className="xl:ml-6 border border-gray-100 bg-white p-5 shadow-sm rounded-3xl w-96 sm:w-auto mx-auto ">
        <h3 className=" text-[#0F172A] font-bold mb-1 text-[18px] ">
          Your Stack
        </h3>

        <p className=" text-[#94A3B8] mb-4 ">
          {
            data.length=== 0 ? "No technologies selected yet." :`${data.length} Technology Selected`
          }
        </p>

        {
        data.length === 0 ? <div className="border border-dashed text-center rounded-2xl py-6 text-[#94A3B8] border-[#94A3B8]">Your stack is empty.</div> :
        data.map((item) => <StackCart key={item.id} cartItem = {item} handleRemoveEachElement={handleRemoveEachElement}></StackCart>)
        }

        <button onClick={handleRemoveAllFromStack} className="cursor-pointer text-[#D82C20] border border-[#D82C20] w-full py-1.5 rounded-2xl font-bold mt-10">Remove All </button>
      </div>
    </div>
  );
};

export default Stack;
