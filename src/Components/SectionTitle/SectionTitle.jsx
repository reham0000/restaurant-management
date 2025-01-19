const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div>
      <p className="text-lg text-center mt-10 text-yellow-400 mb-3">
        --- {subHeading} ---
      </p>
      <hr className="w-1/4 border-gray-300 mx-auto mb-5 border-2"></hr>
      <h3 className="text-black text-center text-4xl mb-5">{heading}</h3>
      <hr className="w-1/4 border-gray-300 mx-auto mb-10 border-2"></hr>
    </div>
  );
};

export default SectionTitle;


