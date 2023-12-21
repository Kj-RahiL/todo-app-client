import banner from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div className="hero relative">
            <img className='h-[100vh] w-full bg-cover ' src={banner} alt="Slide 1" />
            <div className="hero-overlay bg-[#000000] bg-opacity-60"></div>
            <div className="space-y-6 w-3/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center py-10">
                <h1 className="text-xl md:text-4xl lg:text-7xl font-bold uppercase">Task Manager App..!!</h1>
                <p className="hidden md:block text-xs md:text-2xl text-gray-200">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <button className='btn btn-sm md:btn-md text-white bg-[#c500d4] hover:bg-transparent'>Explore more</button>
            </div>
        </div>
    );
};

export default Banner;