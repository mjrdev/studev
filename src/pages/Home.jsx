import Header from './template/Header'
import SideBar from './template/SideBar'

export default function () {

  return (
    <div className="grid">
      <SideBar />
      <Header />
      <main className="bg-blue-50 h-[40rem]">

      </main>
    </div>
  )
}