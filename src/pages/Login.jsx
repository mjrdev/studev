import { useNavigate } from "react-router-dom";
import { MdLogin } from 'react-icons/md';

export default function() {
  const navigate = useNavigate();

  return (
    <div className="h-[100vh] w-full bg-primary-dark flex justify-center items-center">
      <section className="h-[28rem] w-[22rem] bg-white flex flex-col justify-around p-6 gap-2 rounded-md drop-shadow-2xl">
        <h1 className="self-center font-bold text-[25pt] text-secundary flex items-center gap-2">Login <MdLogin/></h1>

        <div className="flex flex-col">
          <h2 className="text-secundary font-semibold">Email</h2>
          <input type="email" className="focus:border-secundary rounded-md border border-gray-400 h-8 px-2"/>
          <h2 className="text-secundary font-semibold">password</h2>
          <input type="password" className="focus:border-secundary rounded-md border border-gray-400 h-8 px-2"/>

          <div className="flex items-center gap-2 text-gray-600">
            <input type="checkbox" className="text-secundary form-checkbox rounded-sm"/>
            lembra-me
          </div>
        </div>

        <div className="flex flex-col justify-center gap-1 text-gray-600">
          <button className="px-4 py-2 bg-primary text-white rounded-md font-medium"
          onClick={() => navigate('/')}>seguir</button>
          <a className="self-center">esqueci minha senha</a>
        </div>

      </section>
    </div>
  )
}