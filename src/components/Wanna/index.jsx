import { Vector } from "../../assets/icons/vector"
import { ContainerWrapper } from "../container-wrapper"


export const Wanna = () => {
  return (
   <section>
     <ContainerWrapper>
        <div>
            <div>
                <div className="bg-[#292F36] w-full h-[30pc] rounded-[90px] pt-[120px]">
                   <p className="xl:text-[50px] text-[40px] font-Roboto text-white text-center">Wanna join the interno?</p>
                   <p className="text-[22px] text-white font-Roboto text-center">It is a long established fact  will be distracted.</p>
                   <div className="xl:w-[280px] w-[200px] mx-auto">
                   <button className="font-normal xl:text-[22px] sm:text-[14px] lg:text-[14px] text-[14px] flex md:text-[14px] leading-[33px]  bg-[#a78d71] hover:bg-amber-900 rounded-[20px]   mt-[30px] bg-transparent py-5 px-[30px]  border-[#e7e5e5] text-white">Contact With Us <Vector className={'mt-[10px] ml-5 '}/></button>
                   </div>
                </div>
            </div>
        </div>
     </ContainerWrapper>
   </section>
  )
}
