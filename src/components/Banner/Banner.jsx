
const Banner = () => {
    return (

                <div className="hero mb-12 lg:mb-24">
                    <div className="w-10/12 bg-[#1313130D] flex flex-col justify-between items-center lg:flex-row-reverse p-12 rounded-xl">
                        <img src="/banner.png" className="max-w-md lg:max-w-md xl:max-w-xl py-12" />
                        <div className="text-center lg:text-left space-y-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold lg:leading-tight heading">Books to freshen up<br />your bookshelf</h1>
                            <button className="btn bg-[#23BE0A] text-white">View The List</button>
                        </div>
                    </div>
                </div>

    );
};

export default Banner;