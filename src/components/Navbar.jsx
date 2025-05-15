import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { login, logout, onUserStateChange } from '../api/firebase';
import User from './User';

export default function Navbar() {
  const [user, setUser] = useState();

    /**
   * 콜백함수에서 함수의 인자가 같은 경우 생략 가능
   * () => login()
   * (user) => setUser(user)
   * -------------사용 방법-------------------
   * login, setUser
   */
  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

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
        {!user 
          ? <button onClick={login}>Login</button>
          : <>
              <User user={user} />
              <button onClick={logout}>Logout</button>
            </>
        }
      </nav>
    </header>
  )
}