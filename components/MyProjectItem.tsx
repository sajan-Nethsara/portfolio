import Image from "next/image"

const MyProjectItem = (props:any) => {
  const desc:string = props.description
  return (
    <div className=' rounded-2xl flex sm:h-[500px] sm:w-[500px] h-[250px] w-[200px] bg-green-400 relative m-2'>
      <Image src={props.img} className=" rounded-2xl w-full h-full object-cover" alt={`Project of ${props.name}`}/>
      <div className="absolute bottom-0 bg-black bg-opacity-50 flex flex-col w-full ">
        <div className=" relative flex justify-center items-center h-[200px] flex-col">
        <h3 className="text-white text-center p-1">{props.name}</h3>
        <div className="text-white">{desc}</div>

        </div>
      </div>
    </div>
  )
}

export default MyProjectItem