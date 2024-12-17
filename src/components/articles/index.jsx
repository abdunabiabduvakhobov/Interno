import { ContainerWrapper } from "../container-wrapper"
import s from '../../assets/icons/s.png';
import v from '../../assets/icons/v.png';
import opo from '../../assets/icons/opo.png';
import rak from '../../assets/icons/rak.png';
export const Articles = () => {
  return (
   <section>
    <ContainerWrapper>
        <div>
            <div>
                <p className="font-Roboto text-[50px] text-center" >Articles & News</p>
                <p className="text-center text-[22px] xl:w-[811px] mx-auto">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
            </div>
            <div className="flex justify-between   flex-col xl:flex-row">
                <div className="xl:w-[382px] xl:h-[521px] w-[400px] h-[560px] border-2 rounded-[40px] mt-24">
             <div>
                 <img className="xl:ml-[20px] xl:mt-[20px] ml-[30px] xl:w-[340px] xl:h-[289.27px] w-[340px] h-[289.27px]  mt-[20px] " src={s} alt="" />
             </div>
              <p className="text-[22px] xl:w-[250px] w-[250px] font-Roboto ml-[20px] mt-[20px]">Let’s Get Solution For Building Construction Work</p>
              <div className="flex gap-[160px]">
                <p className="mt-[20px] ml-[20px]">26 December,2022 </p>
                <div className="bg-[#F4F0EC] mt-[6px] w-[52px] h-[52px] rounded-[50px]">
                    <img className="pt-[18px] pl-[20px]" src={v} alt="" />
                </div>
              </div>
            </div>
            <div className="xl:w-[382px] xl:h-[521px] w-[400px] h-[560px] border-2 rounded-[40px] mt-24">
              <img className="xl:ml-[20px] xl:mt-[20px] ml-[30px]  mt-[20px] " src={opo} alt="" />
              <p className="text-[22px] w-[250px] font-Roboto ml-[20px] mt-[20px]">Low Cost Latest Invented Interior Designing Ideas.</p>
              <div className="flex gap-[160px]">
                <p className="mt-[20px] ml-[20px]">26 December,2022 </p>
                <div className="bg-[#F4F0EC] mt-[6px] w-[52px] h-[52px] rounded-[50px]">
                    <img className="pt-[18px] pl-[20px]" src={v} alt="" />
                </div>
              </div>
            </div>
            <div className="xl:w-[382px] xl:h-[521px] w-[400px] h-[560px] border-2 rounded-[40px] mt-24">
              <img className="xl:ml-[20px] xl:mt-[20px] ml-[30px]  mt-[20px] " src={rak} alt="" />
              <p className="text-[22px] w-[250px] font-Roboto ml-[20px] mt-[20px]">Best For Any Office & Business Interior Solution</p>
              <div className="flex gap-[160px]">
                <p className="mt-[20px] ml-[20px]">26 December,2022 </p>
                <div className="bg-[#F4F0EC] mt-[6px] w-[52px] h-[52px] rounded-[50px]">
                    <img className="pt-[18px] pl-[20px]" src={v} alt="" />
                </div>
              </div>
            </div>
            </div>
        </div>
    </ContainerWrapper>
   </section>
  )
}
