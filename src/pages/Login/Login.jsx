import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2';
import googleIcon from '../../assets/images/google.png';
import facebookIcon from '../../assets/images/fb.png';



const Login = () => {
    const {login, handleGoogleSignIn} = useContext(AuthContext);
    const navigate = useNavigate()
    const [success, setSuccess] = useState(null) 
    const [error, setError] = useState(null)
     
     const handleLogin = e =>{
          e.preventDefault();
          const form = e.target;
          const email = form.email.value;
          const password = form.password.value;
          console.log(email,password);

           
           setError('')
           setSuccess('')
          login(email,password)
          .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            setSuccess(Swal.fire({
                title: 'Login Successfully',
                
                
              }))
            navigate('/')
          })
          .catch(error =>{
            console.log(error)
            
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Okey'
              })
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
           <div className="hero  min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center mt-12 lg:text-left">
      <h1 className="text-4xl font-bold">Login now!</h1>
      
    </div>
    <div className="w-full p-5 rounded  bg-base-100">
      <form onSubmit={handleLogin} className="card-body border border-red-500 rounded-md">
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
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
          {
            success && <p>{success}</p>
          }
          {
            error && <p>{error}</p>
          }
      </form>
       <p className="text-center">Don't have an account? <Link className="btn btn-link" to='/register'>Create Account</Link> </p>
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

export default Login;