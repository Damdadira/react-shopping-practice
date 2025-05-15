
import { Link } from 'react-router';
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { login } from '../api/firebase';

export default function Navbar() {
  return (
    <header className='flex justify-between border-b border-gray-300 p-2'>
      <Link to='/' className='flex items-center text-4xl' style={{color: 'var(--color-brand)'}}>
        <FiShoppingBag />
        <h1>YOUNGSTYLE</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/products'>Products</Link>
        <Link to='/carts'>Carts</Link>
        <Link to='/products/new' className='text-2xl'>
          <BsFillPencilFill />
        </Link>
        {/* 콜백함수에서 인자와 호출 인자가 아무것도 없는게 동일해서 생략 */}
        <button onClick={login}>Login</button> 
      </nav>
    </header>
  )
}