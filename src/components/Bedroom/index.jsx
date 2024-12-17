import { ContainerWrapper } from "../container-wrapper"
import logo from '../../assets/icons/logo.png'
import fe from '../../assets/icons/fe.png'
import ti from '../../assets/icons/ti.png'
import i from '../../assets/icons/in.png'
import is from '../../assets/icons/is.png'
export const Bedroom = () => {
  return (
   <section>
    <ContainerWrapper>
        <div>
            <div>
                <div className="flex xl:flex-row flex-col sm:flex-col md:flex-row text-center justify-between">
                   <div>
                   <img className="w-[200px] mx-auto" src={logo} alt="" />
                    <p className="w-[393px] mt-3 mx-auto  ">It is a long established fact that a reader will be distracted lookings.</p>
                    <div className="flex gap-6 w-[120px] mx-auto mt-5">
                    <img src={fe} alt="" />
                     <img src={ti} alt="" />
                     <img src={i} alt="" />
                     <img src={is} alt="" />
                   </div>
                    </div>
                    <div>
                        <p className="text-[25px] font-Roboto "> Pages</p>
                        <p className="mt-[20px]">About Us</p>
                        <p className="mt-[20px]">Our Projects</p>
                        <p className="mt-[20px]">Our Team</p>
                        <p className="mt-[20px]">Contact Us</p>
                        <p className="mt-[20px]">Services</p>
                    </div>
                    <div>
                        <p className="text-[25px] font-Roboto ">Services</p>
                        <p className="mt-[20px]">About Us</p>
                        <p className="mt-[20px]">Our Projects</p>
                        <p className="mt-[20px]">Our Team</p>
                        <p className="mt-[20px]">Contact Us</p>
                        <p className="mt-[20px]">Services</p>
                    </div>
                    <div>
                        <p className="text-[25px] font-Roboto ">Contact</p>
                        <p  className="mt-[20px] w-[258px] mx-auto">55 East Birchwood Ave. Brooklyn, New York 11201</p>
                        <p  className="mt-[20px]">contact@interno.com
                        </p>
                        <p  className="mt-[20px]">(123) 456 - 7890</p>
                    </div>
                </div>
                
            </div>
        </div>
    </ContainerWrapper>
   </section>
  )
}
