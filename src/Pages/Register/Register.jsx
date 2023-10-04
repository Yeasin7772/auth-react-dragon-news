
import NavBar from "../Shared/Navbar/NavBar";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext} from "react";
import { Link } from "react-router-dom";



const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handelRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })

    }
    return (
        <div>

            <NavBar></NavBar>

           <div>
           <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <div>
                            <h1 className="text-5xl font-bold">Login your account</h1>
                        </div>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Enter your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name="photo" type="photo" placeholder="Enter your image" className="input input-bordered" required />
                            </div>
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
                            <p>Already Have An Account ?
                                <Link className="text-[#F75B5F] ml-2" to='/login'>Login</Link></p>
                        </form>


                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Register;