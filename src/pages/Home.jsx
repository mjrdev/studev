import Header from './template/Header'

export default function () {

  return (
    <div className="grid">
      {/* <aside className="fixed bg-white border w-[10rem] h-[100vh]"></aside> */}
    
      <Header />
      <main className="bg-blue-50 h-[40rem]"></main>
    </div>
  )
}