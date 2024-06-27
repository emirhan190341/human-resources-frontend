import Team from "../components/home/Team";
import Testimonials from "../components/home/Testimonials";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="w-full overflow-hidden flex justify-center mt-10">
        <img
          className="w-1/2 max-h-[450px] object-cover"
          src="/src/assets/photo1.jpg"
          alt="Photo"
        />
        <img
          className="w-1/2 max-h-[450px] object-cover"
          src="/src/assets/photo2.jpg"
          alt="Photo"
        />
      </div>

      <div className="w-full mx-auto ">
        <Testimonials />
      </div>

      <Team />
    </div>
  );
};

export default HomePage;
