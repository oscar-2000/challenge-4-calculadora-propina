import { useState } from 'react'
import reactLogo from '@assets/react.svg'
import viteLogo from '@assets/vite.svg'
import '@styles/App.css'
import Formulario from '@components/Formulario'
import Results from '@components/Results'

function App() {
  return (
    <>
     <div className='bg-celeste dark:bg-[#363636] h-full lg:h-screen'>
      <div className='w-full lg:max-w-[1300px] mx-auto py-10 px-5'>
        <div className='relative lg:fixed inset-0 flex flex-col items-center justify-center'>
            <div className='flex flex-col'>
              <div class="grid grid-cols-4 gap-x-4 text-center text-[#01454b]/70 text-2xl p-6 uppercase font-bold w-max mx-auto">
                <div className='col-span'>S</div>
                <div className='col-span'>P</div>
                <div className='col-span'>L</div>
                <div className='col-span'>I</div>
                <div className='col-span'>T</div>
                <div className='col-span'>T</div>
                <div className='col-span'>E</div>
                <div className='col-span'>R</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl py-7 px-10 shadow-xl shadow-[#01454b]/15 s:w-full lg:w-[1200px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="col-auto py-5">
                  <Formulario/>
                </div>
                <div className="col-auto bg-verde-oscuro rounded-2xl">
                  <Results/>
                </div>
              </div>
            </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
