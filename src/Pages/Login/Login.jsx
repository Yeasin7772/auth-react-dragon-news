import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../Shared/Navbar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {

    const {login} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log('loginpasefff', location);

    const handelFormSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);

        login(email,password)

        .then(result => {
            console.log(result.user);
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            console.error(error);
        })


    }
    return (
        <div>

            <NavBar></NavBar>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <div>
                            <h1 className="text-5xl font-bold">Login your account</h1>
                        </div>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelFormSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email address</span>
                                </label>
                                <input name="email" type="email" placeholder="Enter your email address" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="Enter your password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#403F3F] ">Login</button>
                            </div>
                            <p>Dont’t Have An Account ? <Link className="text-[#F75B5F]" to='/register'>Register</Link></p>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;