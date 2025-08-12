import { Link } from 'react-router';
import { PiTShirtFill } from "react-icons/pi";
import { RiHeartAdd2Line } from "react-icons/ri";
import User from './User';
import Button from './ui/Button';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from './CartStatus';

export default function Navbar() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className='flex justify-between border-b border-gray-300 p-3'>
      <Link to='/' className='flex items-center text-4xl' style={{color: '#787c50'}}>
        <h1 className='font-semibold'>YoungStyle</h1>
      </Link>
      <nav className='flex items-center gap-5 font-semibold'>
        <Link to='/products' className='text-4xl'>
          <PiTShirtFill />
        </Link>
        
        {!user 
          ? <Button text={'Login'} onClick={login} />
          : <>
              <Link to='/carts'><CartStatus /></Link>
              { user.isAdmin && (
                <Link to='/products/new' className='text-3xl'>
                  <RiHeartAdd2Line />
                </Link>
              )}
              <User user={user} />
              <Button text={'Logout'} onClick={logout} />
            </>
        }
      </nav>
    </header>
  )
}