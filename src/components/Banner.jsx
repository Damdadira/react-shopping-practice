export default function Banner() {
  return (
    <section className='h-96 bg-yellow-900 relative'>
      <div className='w-full h-full opacity-80' style={{backgroundImage: 'url(/images/banner.png)'}}></div>
      <div className='absolute w-full top-36 text-center text-gray-50 drop-shadow-2xl'>
        <h2 className='text-6xl pb-4'>Shop With US</h2>
        <p className='text-2xl'>Best Products, High Quality</p>
      </div>
    </section>
  )
}