import Image from "next/image"

const MyProjectItem = (props:any) => {
  return (
    <div className=' flex sm:h-[500px] sm:w-[500px] h-[250px] w-[200px] bg-green-400 relative m-2'>
      <Image src={props.img} className="w-full h-full object-cover" alt={`Project of ${props.name}`}/>
      <div className="absolute bottom- bg-lime-400 flex flex-col w-full ">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default MyProjectItem