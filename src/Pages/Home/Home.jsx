import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import NavBar from "../Shared/Navbar/NavBar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "../NewsCard/NewsCard";

const Home = () => {
  const news = useLoaderData()
 // console.log(news);

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <NavBar></NavBar>
      <h1 className="text-4xl ">This is home</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div >
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2">
          <div className="grid md:grid-cols-1 gap-10 ">

           {
            news.map(ANews => <NewsCard key={ANews._id} ANews={ANews}>

            </NewsCard>)
           }

          </div>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
