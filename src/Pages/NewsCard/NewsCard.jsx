import { Link } from "react-router-dom";

const NewsCard = ({ ANews }) => {
   // console.log(ANews);

    const { title,image_url,_id,details} = ANews || {}
    return (
        <div>
            <div className="card  bg-base-100 ">
                <h1 className="text-xl font-bold px-3">{title}</h1>
                <figure><img src={image_url} /></figure>
                <div className="card-body">
                    <h2 className="card-title"></h2>
                   
                        {
                            details.length > 200 ? <p>{details.slice(0,200)} 
                            <Link to={`/news/${_id}`}  className="text-blue-700 font-bold">Read More...</Link></p> :
                             <p>{details}</p>

                        }
                   
                    
                </div>
            </div>
        </div>
    );
};

export default NewsCard;