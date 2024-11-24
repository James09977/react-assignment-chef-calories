import banner from "../../../../public/img/Banner img.jpg";

const Banner = ({ toast }) => {
  return (
    <div className="">
      {/* toast */}

      <div className={`toast toast-top toast-end ${toast} `}>
        <div className="alert alert-info">
          <span>Already Added</span>
        </div>
      </div>

      <div
        className="bg-cover h-80 md:h-[600px] object-contain rounded-3xl mt-12  "
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 className="text-white font-bold text-5xl text-center md:pt-36 leading-[72px]">
          Discover an exceptional cooking <br /> class tailored for you!
        </h1>
        <p className="text-white text-base text-center pt-6 leading-8 ">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding <br /> problems to become an
          exceptionally well world-class Programmer.
        </p>
        <div className="flex justify-center mt-10">
          <button className="w-44 h-16 rounded-full bg-[#0BE58A] font-semibold text-xl me-7">
            Explore Now
          </button>
          <button className="w-52 h-16 rounded-full font-semibold bg-transparent text-white border">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
