import { ContainerWrapper } from "../container-wrapper"
import { Slider } from "./slider"



export const Just = () => {
  return (
    <section className=" ">
        <ContainerWrapper>
            <div className="w-full h-screen bg-[#F4F0EC] rounded-[100px] mt-[150px]">
                <div>
                   <div>
                    <p className="xl:text-[50px] text-[30px]  font-Roboto xl:w-[547px] text-center mx-auto pt-[90px] ">What the People Thinks
                    About Us</p>
                    <Slider/>
                   </div>
                </div>
            </div>
          
        </ContainerWrapper>
    </section>
  )
}
