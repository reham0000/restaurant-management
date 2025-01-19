import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './featured.css'

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading="Check It Out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pt-12 pb-20 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2025</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            The chain is a favorite among locals for casual dining, and they
            have multiple outlets in major cities across Bangladesh. Tasty Treat
            is often associated with a family-friendly environment and is also a
            go-to place for quick bites or takeaways. Their commitment to
            maintaining good taste and affordability has made them a household
            name in the country.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
<SectionTitle heading="Check It Out"></SectionTitle>;
