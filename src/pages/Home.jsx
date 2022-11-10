import { useContext } from 'react';

import Header from './template/Header';
import SideBar from './template/SideBar';

import Course from './home/Courses';
import Panel from './home/Panel';
import Marketplace from './home/Marketplace';
import More from './home/More';

import { ApplicationContext } from '../contexts/Application';

export default function () {

  const { tab, changeTab } = useContext(ApplicationContext);

  const main = [
    <Panel />, <Course />, <Marketplace />, <More />
  ];

  const mainSelect = 0;

  return (
    <div className="flex flex-col max-w-[1920px]">
      <Header/>
      <div className='flex'>
        <SideBar/>
        <section className="pt-[5rem] w-full">
          {main[tab]}
        </section>
      </div>
    </div>
  )
}