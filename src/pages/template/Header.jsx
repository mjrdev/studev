import { CgProfile } from 'react-icons/cg';
import { BiHelpCircle } from 'react-icons/bi';

export default function () {

  return (
    <header className="z-2 fixed flex justify-between items-center h-[5rem] bg-white border w-full">

      <div></div>

      <div></div>
      
      <ul className="mx-6 flex gap-x-4">
        <li className="px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-md flex justify-center items-center gap-x-2 cursor-pointer">
          ajuda
          <BiHelpCircle size={20}/>
        </li>
        <li className="px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-md flex justify-center items-center gap-x-2 cursor-pointer">
          meu perfil
          <CgProfile size={20}/>
        </li>
      </ul>
    </header>
  )
}