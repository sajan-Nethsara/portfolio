"use client"
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import MyProjectItem from './MyProjectItem'
import { projects as P} from '../public/projects'

const Projects = () => {
  const slideLeft = () => {
    var slider:any = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider:any = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div className=' w-full flex relative items-center'>
       <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 text-white m-2' onClick={slideLeft} size={50} />
      <div className='w-full h-full overflow-x-scroll overflow-y-clip gap-2  whitespace-nowrap scroll-smooth scrollbar-hide' id='slider'>
      {P.map((item , index)=>{
        return(
          <div key={index} className=' inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>
            <MyProjectItem   {...item} />
          </div>
        ) 
      })}
    </div>
    <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />

    </div>
    
  )
}

export default Projects