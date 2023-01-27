import './styles/global.css'
import {Plus} from 'phosphor-react';
// import { Habit } from './components/Habits'
import './lib/dayjs.js';

import LogoImage from './assets/Logo.svg';
import { Header } from './components/Header';
import { SumaryTable } from './components/SumaryTable';

export function App() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-full max-w-5xl px-6 flex flex-col gap-16 '>
        <Header/>
        <SumaryTable/>
      </div>
    </div>
  )
}


