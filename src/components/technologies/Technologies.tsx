import { Suspense, useState } from "react";
import type { TechnologyType } from "../../type";
import Stack from "./Stack";
import Technology from "./Technology";
import { toast } from "react-toastify";
// import { toast } from "react-toastify/unstyled";
// Fetch
async function technologiesDataPromise(): Promise<TechnologyType[]> {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

const Technologies = () => {
  // Technology data State
  const [data, setData] = useState<TechnologyType[]>([]);
  let stackId = data.map(item => item.id);

  // let isSelected;
  const handleClickToAddStack = (technologyObj: TechnologyType): void => {
    let newData = [...data, technologyObj];
    setData(newData);
    toast.success(`${technologyObj.name} is Added`)
  };

  const handleRemoveAllFromStack = () => {
    setData([]);
    stackId.length !== 0 && toast.error("All Item Removed")
  };

  const handleRemoveEachElement = (getId:number) =>{
    let modifyData = data.filter(item=> item.id !== getId);
    setData(modifyData);
    let findItem = data.find(item=> item.id === getId );
    // console.log(findItem);
    toast.warn(`${findItem?.name} is Removed`)
  }




  return (
    <div className="container mx-auto h-min pt-25">
      <h2 className="text-[24px] sm:text-[27px] md:text-[31px] lg:text-4xl font-black text-center lg:text-start lg:ml-15 xl:ml-0 mb-1 px-3 text-[#111827]">Explore the <span className="bg-[linear-gradient(to_right,#FF5722_0%,#E91E63_50%,#9C27B0_100%)] bg-clip-text text-transparent">Technologies</span></h2>

      <p className="text-center lg:text-start lg:ml-15 xl:ml-0 px-3 text-[14px] md:text-[16px] text-[#6B7280] mb-10">Pick one technology per category to build your ideal stack.</p>
      <div className="grid grid-cols-12 mx-5 xl:mx-0 ">
        <Suspense fallback={<h2>Loading</h2>}>
          <Technology
            technologiesDataPromise={technologiesDataPromise()}
            handleClickToAddStack={handleClickToAddStack}
            stackId = {stackId}
          ></Technology>
        </Suspense>
        <Stack
          data={data}
          handleRemoveAllFromStack={handleRemoveAllFromStack}
          handleRemoveEachElement = {handleRemoveEachElement}
        ></Stack>
      </div>
    </div>
  );
};

export default Technologies;
