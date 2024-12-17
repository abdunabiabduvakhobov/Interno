import { ContainerWrapper } from "../container-wrapper"
import call from '../../assets/icons/call.png';
import { PrimyeButton } from "../primyeButton";
import { Vector } from "../../assets/icons/vector";
import room from '../../assets/icons/room.png';
export const About = () => {
  return (
   <section className="w-full  xl:pt-[100px] pt-[30px]">
    <ContainerWrapper>
       <div className="flex justify-between flex-col xl:flex-row">
        <div>
            <p className="text-[50px] xl:w-[420px] font-Roboto ">We Create The Art
Of Stylish Living
Stylishly</p>
           <p className="text-[22px] font-Roboto xl:w-[472px] mt-4">it is a long established fact that a reader will be distracted by the of readable content of a page 
when lookings at its layouts the points of using 
that it has a more-or-less normal.</p>
          <div className="flex gap-5 pt-[40px]">
          <div className="w-[83px] h-[83px] rounded-[50px] bg-[#F4F0EC]"><img className="pl-[25px] pt-[25px]" src={call} alt="" /></div>
           <div className="pt-[7px]" >
            <p className="text-[24px] font-Roboto">012345678</p>
            <p className="text-[22px] font-Roboto">Call Us Anytime</p>
           </div>
          </div>
          <PrimyeButton>Get Free Estimate <Vector className={'mt-[10px] ml-5'}/></PrimyeButton>
        </div>
        <img className="xl:mt-0 mt-5" src={room} alt="" />
       </div>
    </ContainerWrapper>
   </section>
  )
}
