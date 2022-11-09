import Header from './template/Header';
import SideBar from './template/SideBar';

import Course from './home/Courses';
import Panel from './home/Panel';

export default function () {

  const main = [
    <Course />, <Panel />
  ];

  const mainSelect = 0;

  return (
    <div className="flex flex-col max-w-[1920px]">
      <Header/>
      <div className='flex'>
        <SideBar/>
        <section className=" pt-[5rem] w-full">
          {main[mainSelect]}
        </section>
      </div>
    </div>
  )
}