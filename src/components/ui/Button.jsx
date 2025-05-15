export default function Button({ text, onClick }) {
  return <button className='cursor-pointer text-white py-2 px-4 rounded-sm hover:brightness-110' style={{background: 'var(--color-brand)'}} onClick={onClick}>{text}</button>
  
}