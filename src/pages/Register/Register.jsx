import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import googleIcon from '../../assets/images/google.png';
import facebookIcon from '../../assets/images/fb.png';


const Register = () => {
    const {createUser,handleGoogleSignIn} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(null)
    const navigate = useNavigate();

    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        // create user
        createUser(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const handleSocialLogin = () =>{
        handleGoogleSignIn()
        .then(result=>{
          const loggedUser = result.user;
          console.log(loggedUser)
          navigate('/')
        })
        .catch(error =>{
           console.log(error)
        })

   }
    return (
        <>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center mt-12 lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative">
          <input type={showPassword ? "password" : "text"}
           name="password"
            placeholder="password" 
            className="input input-bordered" required />
            <div className="text-2xl absolute top-3 right-9">
                 <button onClick={()=>setShowPassword(!showPassword)}>
                    {
                        showPassword ?  <FaRegEye /> : <FaEyeSlash />
                    }
                 </button>
            </div>
          </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
       <p className="text-center">Already Have an account <Link className="btn btn-link" to='/login'>Login</Link> </p>
       <div>
      <span className="flex my-5">
       <hr  className="border border-red-500 w-32"/> <span className="-mt-3">OR</span><hr  className="border border-red-500 w-32"/>
       </span>
      </div>
      <div className="flex justify-center items-center gap-6 mb-3 rounded-xl border border-green-500 py-2">
            <img className="w-6" src={facebookIcon} alt="" /> 
             <button>Continue with Facebook</button>
      </div>
      <div className="flex justify-center items-center gap-8 rounded-xl border border-green-500 py-2">
            <img className="w-6" src={googleIcon} alt="" /> 
             <button onClick={handleSocialLogin}>Continue with Google</button>
      </div>
    </div>
  </div>
</div>
        </>
    );
};

export default Register;