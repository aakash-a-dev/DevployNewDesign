import JSImg from '../assets/JSImg.jpg';

const Course = () => {
  return (
    <div>
      <div className="bg-[#fbe20c] w-full  items-center p-8 border-t-2 border-b-2 border-black"> 
        <h1 className="font-custom font-black text-[#2a2a2a] text-3xl block w-full">COURSES</h1>
      </div>
<div className="flex">
  
  <div className="p-20  w-full md:w-1/2">
        <h3 className="font-custom text-[#2a2a2a] font-bold mb-4">Javascript Beginners</h3>
      <div className="bg-white rounded-lg shadow-lg">
       <img src={JSImg} alt="" className="" />
        <div className="p-6">
          <h2 className="font-custom font-bold mb-2 text-2xl text-purple-800">Beginner`s Javascript Modules
          </h2>
          <p className="font-custom text-purple-700 mb-2">Collection of complete kit for getting started. </p>
          <button type="button" className="font-custom text-[#2a2a2a] bg-[#fbe20c] border-2 border-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 text-center mr-3 md:mr-0">GET NOTES</button>
        </div>

      </div>
    </div>
<div className="p-20 bg-purple-100 w-full md:w-1/2">
  <h3 className="font-custom text-[#2a2a2a] font-bold mb-4">Javascript Intermediate</h3>
  <div className="bg-white rounded-lg shadow-lg">
    <img src={JSImg} alt="" className="" />
    <div className="p-6">
      <h2 className="font-custom font-bold mb-2 text-2xl text-purple-800">Intermediate`s Javascript Modules
      </h2>
      <p className="font-custom text-purple-700 mb-2">Collection of complete kit for exploring more. </p>
      <button type="button" className="font-custom text-[#2a2a2a] bg-[#fbe20c] border-2 border-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 text-center mr-3 md:mr-0">GET NOTES</button>
    </div>

  </div>
</div>

</div>
<div className="flex">
  
  <div className="p-20 bg-purple-100 w-full md:w-1/2">
        <h3 className="font-custom text-[#2a2a2a] font-bold mb-4">NodeJS Beginner</h3>
      <div className="bg-white rounded-lg shadow-lg">
       <img src={JSImg} alt="" className="" />
        <div className="p-6">
          <h2 className="font-custom font-bold mb-2 text-2xl text-purple-800">Beginner`s NodeJS Modules
          </h2>
          <p className="font-custom text-purple-700 mb-2">Collection of complete kit for getting started. </p>
          <button type="button" className="font-custom text-[#2a2a2a] bg-[#fbe20c] border-2 border-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 text-center mr-3 md:mr-0">GET NOTES</button>
        </div>

      </div>
    </div>
<div className="p-20  w-full md:w-1/2">
  <h3 className="font-custom text-[#2a2a2a] font-bold mb-4">NodeJS Intermediate</h3>
  <div className="bg-white rounded-lg shadow-lg">
    <img src={JSImg} alt="" className="" />
    <div className="p-6">
      <h2 className="font-custom font-bold mb-2 text-2xl text-purple-800">Intermediate`s Javascript Modules
      </h2>
      <p className="font-custom text-purple-700 mb-2">Collection of complete kit for exploring more. </p>
      <button type="button" className="font-custom text-[#2a2a2a] bg-[#fbe20c] border-2 border-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 text-center mr-3 md:mr-0">GET NOTES</button>
    </div>

  </div>
</div>

</div>
       
      </div>

  )
}

export default Course