import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import NavBar from "../Shared/Navbar/NavBar";


const NewsDetails = () => {
    const {id} = useParams()
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>

            <div className="grid md:grid-cols-4">
                <div className="col-span-3">

                    <h2>{id}</h2>

                </div>

                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default NewsDetails;