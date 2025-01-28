import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const navigate = useNavigate();
  const firebaseConfig = {
    apiKey: "AIzaSyCFRWPIQ0WYGTLFJOfLlYJZWb16vaWhmhQ",
    authDomain: "auth-784a5.firebaseapp.com",
    projectId: "auth-784a5",
    storageBucket: "auth-784a5.firebasestorage.app",
    messagingSenderId: "367817918317",
    appId: "1:367817918317:web:80968c1f2ef516f8e03c64",
    measurementId: "G-JGNY9X5LFW",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(); //email / password authontion

  const loginData = (e) => {
    e.preventDefault();

    let obj = {
      email: email,
      password: pass1,
    };
    signInWithEmailAndPassword(auth, obj.email, obj.password)
      .then(() => {
        alert("Login succefully....");
        navigate("/list");
      })
      .catch((err) => {
        alert("Getting Error");
      });
  };
  return (
    <div className="container">
    <div className="card butterfly-card">
      <div className="card-titles">
        <h2 className="text-center butterfly-text">Login Page</h2>
      </div>
      <div className="card-body">
        <form onSubmit={loginData}>
          <table className="butterfly-table">
            <tbody>
              <tr>
                <td><label htmlFor="exampleInputEmail1" className="form-label butterfly-text">Email</label></td>
                <td>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control butterfly-input"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </td>
              </tr>
              <tr>
                <td><label htmlFor="exampleInputPassword1" className="form-label butterfly-text">Password</label></td>
                <td>
                  <input
                    value={pass1}
                    onChange={(e) => setPass1(e.target.value)}
                    type="password"
                    className="form-control butterfly-input"
                    aria-describedby="emailHelp"
                    id="exampleInputPassword1"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="text-center">
                  <button type="submit" className="btn butterfly-btn">Login</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
    <h4 className="butterfly-text">
      <br></br>
      If you don't have an account <Link to="/" className="butterfly-link">Register</Link>
    </h4>
  </div>
  


  );
}

export default Login;
