import Link from "next/link"

const Navbar = () => {
  return (
    <div className='w-full h-20 bg-opacity-10 text-white flex justify-between items-center'>
      <div>
        <h1 className="text-[2em] ml-8">Hi</h1>
      </div>
      <div className="flex gap-8 mr-8">
        <Link href='/' className="flex font-mono hover:font-bold">
          <p>Home</p>
        </Link>
        <Link href='/contact' className="flex font-mono hover:font-bold">
          <p>Contact</p>
        </Link>
        <Link href='/about' className="flex font-mono hover:font-bold">
          <p>About</p>
        </Link>
        
      </div>
    </div>
  )
}

export default Navbar