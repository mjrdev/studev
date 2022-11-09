import CourseItem from './courses/item';

export default function () {

  return (
    <section className="w-100 p-5 flex flex-col">
      
      <h1 className="text-[30pt] font-bold border-b">Meus Cursos</h1>

      <div className="my-10">
        <ul className="flex gap-4 gap-y-8 flex-wrap justify-evenly">
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
        </ul>
      </div>
    </section>  
  )
}