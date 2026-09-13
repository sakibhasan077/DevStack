import { use } from "react";
import type { TechnologyType } from "../../type";
import Cart from "./Cart";

interface TechnologiesDataPromiseType {
  technologiesDataPromise: Promise<TechnologyType[]>;
  handleClickToAddStack: (handleClickToAddStack: TechnologyType) => void;
  stackId : number[];

}
// const setData: React.Dispatch<React.SetStateAction<TechnologyType[]>>
const Technology = ({
  technologiesDataPromise,
  handleClickToAddStack,
  stackId
}: TechnologiesDataPromiseType) => {
  const technologiesData = use(technologiesDataPromise);
  return (
    <div className="col-span-12 xl:col-span-9">
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center xl:grid-cols-3 gap-5">
        {technologiesData.map((item) => (
          <Cart
            key={item.id}
            technologiesDataItem={item}
            handleClickToAddStack={handleClickToAddStack}
            stackId = {stackId.includes(item.id)}
          ></Cart>
        ))}
      </div>
    </div>
  );
};

export default Technology;
