import { ContainerWrapper } from "../container-wrapper"

export const Success = () => {
  return (
 <section className="w-full bg-[#F4F0EC]">
    <ContainerWrapper>
        <div>
            <div className="flex flex-col  xl:ml-[90px] xl:flex-row ">
                <div className="border-r-2  border-[#CDA274] xl:w-[300px]">
                    <p className="text-[85px] text-center text-[#CDA274] font-Roboto">12</p>
                    <p className="text-[20px] text-center font-Roboto">Years Of Experiance</p>
                </div>
                <div className="border-r-2  border-[#CDA274] xl:w-[300px]">
                    <p className="text-[85px] text-center text-[#CDA274] font-Roboto">85</p>
                    <p className="text-[20px] text-center font-Roboto">Success Project</p>
                </div>
                <div className="border-r-2 border-[#CDA274] xl:w-[300px]">
                    <p className="text-[85px] text-center  text-[#CDA274] font-Roboto">15</p>
                    <p className="text-[20px] text-center font-Roboto">Active Project</p>
                </div>
                <div className="border-r-2 border-[#CDA274] xl:w-[300px]">
                    <p className="text-[85px] text-center text-[#CDA274] font-Roboto">95</p>
                    <p className="text-[20px] text-center font-Roboto">Happy CUstomers</p>
                </div>
            </div>
        </div>
    </ContainerWrapper>
 </section>
  )
}
