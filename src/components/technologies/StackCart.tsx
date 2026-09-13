import XMark from "../../assets/images/xmark.png";
import type { TechnologyType } from "../../type";

interface CartItemType {
  cartItem: TechnologyType;
  handleRemoveEachElement: (getId:number) => void;
}

const StackCart = ({cartItem,handleRemoveEachElement}:CartItemType) => {
  return (
    <div className="flex justify-between items-center border border-[#E2E8F0] px-4 py-1.5 rounded-md mb-1 ">
      <div className="flex gap-2 items-center">
        <img className="w-7 h-7 mr-2" src={cartItem.icon} alt="Stack Icon" />

        <div>
          <h3 className="text-[13px] font-bold text-[#0F172A]">{cartItem.name}</h3>
          <p className="text-[11px] font-bold text-[#94A3B8]">
            {cartItem.category}
          </p>
        </div>
      </div>

      <div>
        <button className="cursor-pointer" onClick={()=>{
          handleRemoveEachElement(cartItem.id)
        }}>
          <img src={XMark} alt="" />
        </button>
      </div>
    </div>
  );
};

export default StackCart;
