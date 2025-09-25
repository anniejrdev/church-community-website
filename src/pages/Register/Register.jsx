import { GoArrowRight } from "react-icons/go";

const Register = () => {
  return (
    <div>
      <div className="relative h-screen w-full text-white">
        {/* Background Image */}
        <img
          src="https://png.pngtree.com/background/20230611/original/pngtree-church-with-large-wooden-pews-and-stained-glass-picture-image_3171495.jpg"
          alt=""
          className="h-screen w-full"
        />

        {/* login page */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <div
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl  max-w-md w-full border border-transparent 
            shadow-lg"
          >
            <div className="flex justify-center">
              {/* <div><img src={logoImage} className='w-18 h-18'/></div> */}
              <h2 className="text-3xl  font-bold text-center mb-2 p-4 ">
                Register Here
              </h2>
            </div>
            <div className="space-y-5">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full py-2 border-b text-white outline-none"
              />
              <input
                type="date"
                placeholder="Enter DOB"
                className="w-full py-2 border-b outline-none"
              />
              <input
                type="number"
                placeholder="Phone Number"
                className="w-full py-2 border-b outline-none"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-2 border-b outline-none"
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full py-2 border-b outline-none"
              />
              <input
                type="password"
                placeholder="confirm password"
                className="w-full py-2 border-b outline-none"
              />
              <div className="flex justify-center mt-6">
                <button className="flex justify-center items-center gap-2 bg-white text-black px-6 py-2 rounded-full font-medium shadow transition">
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
