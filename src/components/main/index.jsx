import React from 'react'
import { ContainerWrapper } from '../container-wrapper'
import { PrimyeButton } from '../primyeButton'
import { Vector } from '../../assets/icons/vector'

export const Main = () => {
  return (
   <main>
     <section>
        <ContainerWrapper>
            <div className=" bg-no-repeat bg-cover bg-center w-full   rounded-[60px] bg-[url('../rum.png')] h-screen">
                <div className='xl:ml-[80px] ml-[20px] pt-[170px] xl:pt-[140px]'>
                  <p className='font-Roboto xl:text-[55px] xl:w-[443px]  text-[30px]      '>Let Your Home 
                  Be Unique</p>
                  <p className='font-Roboto xl:text-[22px] leading-[33px]  xl:w-[470px] text[10px]   mt-[30px] tracking-[1px] '>There are many variations of the passages of
                  lorem Ipsum fromavailable, majority.</p>
                  <p className='font-Roboto xl:text-[22px]  text[10px] mt-[30px] xl:w-[470px]   leading-[33px] tracking-[1px] '>There are many variations of the passages of
                  lorem Ipsum fromavailable, majority</p>
                  <PrimyeButton>Get Started <Vector className={'mt-[10px] ml-[14px]'}/></PrimyeButton>
                </div>
               
            </div>
        </ContainerWrapper>
    </section>
   </main>
  )
}
