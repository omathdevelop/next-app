import Link from "next/link";
import Search from "./Search";
const NaviGation = () => {
  return (
    <nav className={'bg-blue-400 flex justify-between p-4 flex-col md:flex-row sticky top-0 drop-shadow-xl'}
    >
     <h1 className={'text-2xl font-bold text-white grid place-content-center mb-2 md:mb-0 md:text-3xl'}>
        <Link href={"/"}>Wiki 👨🏾‍🦱 App</Link>
     </h1>
     <Search/>
    </nav>
  )
}

export default NaviGation;