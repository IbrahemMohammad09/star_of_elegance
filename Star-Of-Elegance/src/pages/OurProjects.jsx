import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MainTitle from "../components/sharedComponents/MainTitle";
import Title from "../components/sharedComponents/Title";
import "./OurProjects.css";
import TitleProject from "../components/TitleProject";

const Card = ({ frontImage, title }) => (
  <div className="col w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-2rem)] m-4 cursor-pointer">
    <div className="container transform-style preserve-3d perspective-1000 relative">
      <div
        className="front bg-cover bg-center rounded-xl shadow-lg h-auto min-h-[280px] relative"
        style={{ backgroundImage: `url(${frontImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
        <div className="inner absolute inset-0 flex items-center justify-center z-10 text-white text-2xl font-bold">
          <p>{title}</p>
        </div>
      </div>
      <div className="back absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#cedce7] to-[#596a72] rounded-xl flex items-center justify-center p-8 text-white">
        <a
          href="/view-project"
          className="text-lg font-semibold text-white hover:underline"
        >
          View More Details
        </a>
      </div>
    </div>
  </div>
);

const OurProjects = () => {
  const cards = [
    {
      frontImage: "https://unsplash.it/500/500/",
      title: "Diligord",
    },
    {
      frontImage: "https://unsplash.it/503/503/",
      title: "Clossyo",
    },
    {
      frontImage: "https://unsplash.it/504/504/",
      title: "Rendann",
    },
    {
      frontImage: "https://unsplash.it/505/505/",
      title: "Reflupper",
    },
    {
      frontImage: "https://unsplash.it/506/506/",
      title: "Acirassi",
    },
    {
      frontImage: "https://unsplash.it/508/508/",
      title: "Sohanidd",
    },
    {
      frontImage: "https://unsplash.it/508/508/",
      title: "Sohanidd",
    },
    {
      frontImage: "https://unsplash.it/508/508/",
      title: "Sohanidd",
    },
  ];

  return (
    <div>
      <Navbar />
      <MainTitle title={"Our Projects"} />
      <div className="wrapper mt-16 sm:pt-36 w-[90%] mx-auto max-w-[80rem]">
        <Title />
        <TitleProject/>
        <div className="cols flex flex-wrap justify-center">
          {cards.map((card, index) => (
            <Card key={index} frontImage={card.frontImage} title={card.title} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurProjects;
