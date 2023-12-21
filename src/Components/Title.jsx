import cover from '../assets/mesh-786.png'

const Title = ({ title }) => {
    return (
        <div className="hero h-[40vh] bg-cover bg-blend-overlay bg-[#2f2f2f56]" style={{ backgroundImage: `url(${cover})` }}>
            <div className="hero-overlay bg-[#000000] bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className=" text-lime-500/90 text-center text-5xl font-bold uppercase">{title}</h1>
                </div>
            </div>
        </div>
    );
};

export default Title;