// import { useState } from "react";
import { toast } from "react-toastify";
import StarIcon from "../../assets/images/starIcon.png";
import type { TechnologyType } from "../../type";

interface TechnologiesDataItemType {
  technologiesDataItem: TechnologyType;
  handleClickToAddStack: (handleClickToAddStack: TechnologyType) => void;
  stackId: boolean;
}

const Cart = ({
  technologiesDataItem,
  handleClickToAddStack,
  stackId,
}: TechnologiesDataItemType) => {
  // console.log(stackId);
  return (
    <div
      className={`rounded-3xl border ${stackId ? "border-[#D91B7E]" : "border-gray-100"} bg-white p-6 shadow-sm text-slate-800 flex flex-col justify-between max-w-sm `}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 flex items-center justify-center">
          <img src={technologiesDataItem.icon} alt="Cart Icon" />
        </div>

        <span className="px-3.5 py-1.5 rounded-full text-sm font-medium text-pink-500 bg-pink-50/80">
          {technologiesDataItem.badge}
        </span>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        {technologiesDataItem.name}
      </h2>
      <p className="text-slate-500 text-sm leading-relaxed mb-6">
        {technologiesDataItem.description}
      </p>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500 mb-5">
        <span className="px-3 py-1.5 rounded-lg bg-slate-100/80 text-slate-600 font-medium">
          {technologiesDataItem.difficulty}
        </span>

        <span className="font-medium text-slate-500">
          {technologiesDataItem.category}
        </span>

        <div className="flex items-center gap-1 font-semibold text-slate-800">
          <img src={StarIcon} alt="Star Icon" />
          <span>{technologiesDataItem.rating}</span>
        </div>
      </div>

      <button
        onClick={() => {
          if (stackId) {
            toast.error("Already Added");
            return;
          }
          handleClickToAddStack(technologiesDataItem);
        }}
        className={`w-full py-3 px-4 rounded-xl ${stackId ? "bg-pink-50/80" : "bg-[#080d1a]"} ${stackId || "hover:bg-slate-800"} ${stackId ? " cursor-no-drop" : "bg-[#080d1a]"} ${stackId ? "text-[#D91B7E]" : "text-white"}  font-medium transition-colors duration-200`}
      >
        {stackId ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default Cart;
