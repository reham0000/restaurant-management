import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import Cheif from "../Cheif/Cheif";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Cheif></Cheif>
      <PopularMenu></PopularMenu>
      <Contact></Contact>
      <ChefRecommends></ChefRecommends>
      <Featured></Featured>
    </div>
  );
};

export default Home;
