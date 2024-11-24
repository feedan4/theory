import React from 'react'
import ProductSlider from './ProductSlider';
import ProductSlider2 from './ProductSlider2';

function Main() {

  return (
    <main className='w-full flex flex-col items-center'>
      <div className="w-full flex items-center h-[240px] transition-all duration-1000 sm:h-[340px] mq700:h-[500px] md:h-[640px]">
        <div
          className="bg-center bg-cover w-[50%] h-[240px] transition-all duration-1000 sm:h-[340px] mq700:h-[500px] md:h-[640px] z-30 flex flex-col gap-4 justify-center items-center"
          style={{
            backgroundImage: `url('https://ak-media.theory.com/i/theory/1101-hp-gendertile-w?$mediaDesktopLarge$')`,
          }}
        >
          <h1 className='capitalize text-white text-center text-[20px] mq662:text-[34px] font-bold font-archivo tracking-wider'>the women's shop</h1>
          <button className='hidden sm:block outline outline-1 outline-white text-white bg-black bg-opacity-10 hover:outline-2 uppercase w-[200px] py-[8px]'>shop now</button>
        </div>
        <div
          className="bg-center bg-cover w-[50%] h-[240px] transition-all duration-1000 sm:h-[340px] mq700:h-[500px] md:h-[640px] z-30  flex flex-col gap-4 justify-center items-center"
          style={{
            backgroundImage: `url('https://ak-media.theory.com/i/theory/1101-hp-gendertile-m?$mediaDesktopLarge$')`,
          }}
        >
          <h1 className='capitalize text-white text-center text-[20px] mq662:text-[34px] font-bold font-archivo tracking-wider'>the men's shop</h1>
          <button className='hidden sm:block outline outline-1 outline-white text-white bg-black bg-opacity-10 hover:outline-2 uppercase w-[200px] py-[8px]'>shop now</button>
        </div>
      </div>
      <ProductSlider />
      <div className='w-full h-[70vh] bg-cover bg-center flex flex-col gap-3 items-center justify-center py-[30px] font-archivo tracking-wider'
        style={{ backgroundImage: `url("https://ak-media.theory.com/i/theory/1101-hp-gg-desktop?$mediaDesktopLarge$")`}}
      >
        <h1 className='text-white text-center text-[26px] sm:text-[34px] capitalize font-archivo tracking-wider font-bold '>the gift guide</h1>
        <p className='text-white text-[16px] text-center'>Curated with care for everyone on your list.</p>
      </div>
      <ProductSlider2 />
      <div className='w-full bg-cover bg-center flex flex-col gap-3 items-center justify-center py-[30px] font-archivo tracking-wider'
        style={{ backgroundImage: `url("https://ak-media.theory.com/i/theory/InTheory-Mobile?$mediaDesktop$")` }}>
        <h1 className='text-white text-[20px] sm:text-[34px] font-archivo tracking-wider font-bold '>#InTheory</h1>
        <p className='text-white text-[16px] text-center'>The season's best, styled by our staff.</p>
        <button className='outline outline-1 outline-white text-white bg-black bg-opacity-10 hover:outline-2 uppercase w-[200px] py-[8px]'>about us</button>
      </div>
    </main>

  );
}

export default Main