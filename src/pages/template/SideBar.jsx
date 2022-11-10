import React, { useContext } from 'react';

import { ApplicationContext } from '../../contexts/Application';

import { BsBook } from 'react-icons/bs';
import { AiOutlinePlusCircle, AiOutlineShoppingCart } from 'react-icons/ai';
import { TfiPanel } from 'react-icons/tfi';

export default function () {

  const { tab, changeTab } = useContext(ApplicationContext);
  
  const options = [
    {
      id: 0,
      name: 'Painel',
      icon: <TfiPanel/>
    },
    {
      id: 1,
      name: 'Meus Cursos',
      icon: <BsBook/>
    },
    {
      id: 2,
      name: 'Mercado',
      icon: <AiOutlineShoppingCart/>
    },
    {
      id: 3,
      name: 'Adicionais',
      icon: <AiOutlinePlusCircle/>
    }
  ]

  const optionsMap = options.map(opt => {
    return <li className='bg-gray-50 py-3 px-4 drop-shadow-sm border flex items-center gap-x-3 hover:bg-gray-100'
      key={opt.name} onClick={() => changeTab(opt.id)}>
      
      {opt.icon}{opt.name}
    </li>
  })

  return (
    <aside className="z-0 h-[100vh] w-[20rem] bg-gray-50 border hover:w-[23rem] transition-all flex flex-col items-start justify-start">
        
      <div className='flex flex-col my-5 px-5'>
        <h1 className="text-2xl font-bold">Studev</h1>
        <p className='text-md font-light'>Olá Name, seja bem vindo!</p>
      </div>

      <ul className=' cursor-pointer font-medium w-full'>
        {optionsMap}
      </ul>
      
      <div className='flex flex-col justify-end items-center h-full w-full'>
        <h1 className='text-md font-normal'>Studev</h1>
        <h1 className='text-sm font-thin'>Aprenda a programar com quem sabe.</h1>
      </div>
    </aside>
  )
}