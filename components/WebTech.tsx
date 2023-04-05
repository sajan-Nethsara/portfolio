import {frontend as w} from '../public/webtech'
import {backend as b} from '../public/webtech'
import MyItem from './MyItem'
import Tip from './Tip'
const WebTech = () => {
  const basic = ['html','css','js','ts']
  return (
    <div className='flex  flex-col items-center my-10'>
      <div className='flex flex-col items-center  '>
        <h1 className='flex text-white text-center font-bold text-[2em] mt-10'>Quick summary of what am I skilled/continuasly learning stuff</h1>
        <Tip text={'click on each boxes for get more idea about'}/>
      </div>


      <div className='flex w-full flex-col items-center my-10'>
        <h1 className='text-white text-center text-[1em]'>I have solid knowledge on basics of Web</h1>
        <div className='pt-5 sm:gap-6 gap-3 flex flex-wrap px-5  justify-center'>
         <MyItem item={w.html}/>
         <MyItem item={w.css}/>
         <MyItem item={w.javaScript}/> 
         <MyItem item={w.typeScript}/>
        </div> 

      </div>
      <div className='flex w-full flex-col items-center my-10'>
        <h1 className='text-white text-center mx-3'>the modern <span className='font-bold'>frontend technologies</span> that I am familiar with</h1>
        <div className='pt-5 sm:gap-6 gap-3 flex flex-wrap px-5 justify-center'>
         <MyItem item={w.react}/>
         <MyItem item={w.next}/>
         <MyItem item={w.tailwind} />
         <MyItem item={w.framer}/>
         <MyItem item={w.three}/>
        </div> 

      </div>


      <div className='flex w-full flex-col items-center my-10'>
        <h1 className='text-white text-center mx-3'>the modern <span className='font-bold'>backend technologies</span> that I am familiar with</h1>
        <div className='pt-5 sm:gap-6 gap-3 flex flex-wrap px-5 justify-center'>
         <MyItem item={b.node}/>
         <MyItem item={b.express}/>
         <MyItem item={b.mongodb} />
         <MyItem item={b.googleAuth}/>
         <MyItem item={b.stripe}/>
         <MyItem item={b.strapi}/>

        </div> 

      </div>



    </div>
  )
    
}

export default WebTech

