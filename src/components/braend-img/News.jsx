import { ContainerWrapper } from "../container-wrapper"
import modern from '../../assets/icons/modern.png';
import kip from '../../assets/icons/kip.png';
import bes from '../../assets/icons/bes.png';
import stul from '../../assets/icons/stul.png';
export const News = () => {
  return (
    <section>
      <ContainerWrapper>
        <div className="md:ml-[100px] lg:ml-[200px] xl:ml-0">
          <div className="flex flex-col    xl:flex-row justify-between">
            <div className="">
              <img src={modern} alt="" />
              <div className="flex ">
                <div className="mt-[30px]">
                  <p className="text-[25px] w-[200px] font-Roboto">Modern Kitchan</p>
                  <p className="text-[22px] w-[300px] ">Decor / Artchitecture</p>
                </div>
              </div>
            </div>
            <div className="">
              <img src={kip} alt="" />
              <div className="flex ">
                <div className="mt-[30px]">
                  <p className="text-[25px] font-Roboto">Modern Kitchan</p>
                  <p className="text-[22px] ">Decor / Artchitecture</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-9   xl:flex-row justify-between xl:pt-[70px]">
            <div className="">
              <img src={bes} alt="" />
              <div className="flex ">
                <div className="xl:mt-[30px] mt-10">
                  <p className="text-[25px] font-Roboto">Modern Kitchan</p>
                  <p className="text-[22px]  ">Decor / Artchitecture</p>
                </div>

              </div>
            </div>
            <div className="">
              <img src={stul} alt="" />
              <div className="flex ">
                <div className="mt-[30px]">
                  <p className="text-[25px] font-Roboto">Modern Kitchan</p>
                  <p className="text-[22px] ">Decor / Artchitecture</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </ContainerWrapper>
    </section>
  )
}
