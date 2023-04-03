import {frontend as w} from '../public/webtech'
import MyItem from './MyItem'
const WebTech = () => {
  const basic = ['html','css','js','ts']
  return (
    <div className='flex w-full flex-col items-center my-10'>
      <div className='flex '>
        <h1 className='flex  text-white font-bold my-10'>Let's drive in</h1>
      </div>


      <div className='flex w-full flex-col items-center my-10'>
        <h1 className='text-white'> I think I have solid knowladge in fundementals</h1>
        <div className='pt-5 gap-6 flex flex-wrap px-5 justify-center'>
         <MyItem item={w.html}/>
         <MyItem item={w.css}/>
         <MyItem item={w.javaScript}/>
         <MyItem item={w.typeScript}/>
        </div> 

      </div>
      <div className='flex w-full flex-col items-center my-10'>
        <h1 className='text-white'> I think I have solid knowladge in fundementals</h1>
        <div className='pt-5 gap-6 flex flex-wrap px-5 justify-center'>
         <MyItem item={w.react}/>
         <MyItem item={w.next}/>
         <MyItem item={w.tailwind} />
         <MyItem item={w.framer}/>
         <MyItem item={w.three}/>
        </div> 

      </div>


      <div>

      </div>



    </div>
  )
    
}

export default WebTech

