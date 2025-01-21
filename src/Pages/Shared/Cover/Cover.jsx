import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
         <div
      className="hero h-[600px]"
      
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <p className="mb-5">
          Tasty Treat is a prominent fast-food and bakery chain in Bangladesh, established in 2014, with over 360 outlets nationwide as of 2024.Their menu offers a diverse selection of items, including fast food, snacks, cakes, pastries, desserts, and sweets.
          </p>
        </div>
      </div>
    </div>
    </Parallax>
   
  );
};

export default Cover;
