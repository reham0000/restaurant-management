import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import special1 from "../../../assets/home/special-1.jpg";
import special2 from "../../../assets/home/special-2.jpg";
import special3 from "../../../assets/home/special-3.jpg";
const ChefRecommends = () => {
  return (
    <section>
      <SectionTitle
        heading="CHEF RECOMMENDS"
        subHeading="Should Try"
      ></SectionTitle>

      <div className="flex mt-5 mb-10 items-center justify-center">
        <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <img className="w-full h-48 object-cover" src={special1} alt="" />
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800">
              Escalope de Veau
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Roasted duck breast (served pink) with gratin potato and a
              griottine cherry sauce
            </p>
            <button className="mt-4 w-full py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <img className="w-full h-48 object-cover" src={special2} alt="" />
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800">
              Roast Duck Breast
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Roasted duck breast (served pink) with gratin potato and a
              griottine cherry sauce.
            </p>
            <button className="mt-4 w-full py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <img className="w-full h-48 object-cover" src={special3} alt="" />
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800">Haddock</h2>
            <p className="text-gray-600 text-sm mt-2">
              Chargrilled fresh tuna steak (served medium rare) on classic
              Niçoise salad with French beans.
            </p>
            <button className="mt-4 w-full py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommends;
