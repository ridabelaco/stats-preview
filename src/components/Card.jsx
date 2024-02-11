import headerMobile from '../assets/image-header-mobile.jpg';
import headerDesktop from '../assets/image-header-desktop.jpg';

export default function Card() {
  return (
    <div className="flex flex-col md:flex-row-reverse rounded-xl overflow-hidden md:h-[60vh] md:mx-40">
      <div className='bg-purple-900  md:w-full'>
        <img className='opacity-50 object-cover w-full h-full' src={headerMobile} md:src={headerDesktop} alt="hero" />
      </div>
      <div className='bg-darkDesaturatedBlue flex flex-col items-center justify-center '>
        <h1 className='text-white text-3xl font-bold font-Inter text-center md:text-left pb-4 md:pl-16 md:pr-20 px-4 md:pt-4 pt-10'>Get <span className='text-softViolet'>insights</span> that help your business grow.</h1>
        <p className='text-mainParagraph text-center md:text-left font-Inter text-base px-8 md:px-16 pb-8 md:pb-14'>
          Discover the benefits of data analytics and make better decisions regarding revenue, customer
          experience, and overall efficiency.
        </p>
        <div className='flex flex-col md:flex-row  justify-between space-y-6 md:space-y-0 md:w-full md:pl-16 md:pr-32 pb-8'>
          <div>
            <h2 className='text-white text-2xl font-bold font-Inter text-center md:text-left'>10k+</h2>
            <p className='text-mainParagraph text-center md:text-left font-Inter text-xs'>COMPANIES</p>
          </div>
          <div>
            <h3 className='text-white text-2xl font-bold font-Inter text-center md:text-left'>314</h3>
            <p className='text-mainParagraph text-center md:text-left font-Inter text-xs'>TEMPLATES</p>
          </div>
          <div>
            <h4 className='text-white text-2xl font-bold font-Inter text-center md:text-left'>12M+</h4>
            <p className='text-mainParagraph text-center md:text-left font-Inter text-xs '>QUERIES</p>
          </div>
        </div>
      </div>
    </div>
  )
}
