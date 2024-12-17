import { useState } from 'react'; 
import { ContainerWrapper } from '../container-wrapper';
import a from '../../assets/icons/ino.svg';  
import b from '../../assets/icons/in.svg';  

export const Header = () => {
  
  const [menuOpen, setMenuOpen] = useState();

  return (
    <header className='w-full h-auto pt-[10px]'>
      <ContainerWrapper>
        <div className='w-full flex flex-col sm:flex-row justify-between items-center'>
         
          <div className='flex items-center justify-between w-full sm:w-auto'>
            <img src={a} alt="" className='w-[120px] h-[40px] sm:w-[150px] sm:h-[50px]' />

           
            <button
              className='md:hidden flex items-center' 
              onClick={() => setMenuOpen(!menuOpen)} 
            >
              <img src={b} alt="Menu Icon" className='w-8 h-8' />
            </button>
          </div>

          {menuOpen && (
            <nav className='sm:hidden w-full'>
              <ul className='flex flex-col items-center gap-5 mt-5'>
                <li className='text-[20px] font-Roboto'>Home</li>
                <li className='text-[20px] font-Roboto'>Pages</li>
                <li className='text-[20px] font-Roboto'>Services</li>
                <li className='text-[20px] font-Roboto'>Project</li>
                <li className='text-[20px] font-Roboto'>Blog</li>
                <li className='text-[20px] font-Roboto'>Contact</li>
              </ul>
            </nav>
          )}

          <nav className='hidden sm:flex'>
            <ul className='flex gap-[70px] mt-[15px]'>
              <li className='text-[20px] font-Roboto'>Home</li>
              <li className='text-[20px] font-Roboto'>Pages</li>
              <li className='text-[20px] font-Roboto'>Services</li>
              <li className='text-[20px] font-Roboto'>Project</li>
              <li className='text-[20px] font-Roboto'>Blog</li>
              <li className='text-[20px] font-Roboto'>Contact</li>
            </ul>
          </nav>
        </div>
      </ContainerWrapper>
    </header>
  );
};
