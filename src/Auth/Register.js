import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");

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
  const auth = getAuth();

  const registerData = (e) => {
    e.preventDefault();

    let obj = {
      email: email,
      password: pass1,
    };

    createUserWithEmailAndPassword(auth, obj.email, obj.password)
      .then(() => {
        alert("Registered successfully...");
        navigate("/login");
      })
      .catch((err) => {
        alert("Error during registration");
      });
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-titles">
          <h2 className="text-center">Registration Page</h2>
        </div>
        <div className="card-body">
          <form onSubmit={registerData}>
            <table className="butterfly-table">
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="fullName" className="form-label butterfly-text">
                    Name
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="fullName"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control butterfly-input"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="email" className="form-label butterfly-text">
                      Email
                    </label>
                  </td>
                  <td>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control butterfly-input"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="password" className="form-label butterfly-text">
                      Password
                    </label>
                  </td>
                  <td>
                    <input
                      type="password"
                      id="password"
                      value={pass1}
                      onChange={(e) => setPass1(e.target.value)}
                      className="form-control butterfly-input"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="confirmPassword" className="form-label butterfly-text">
                      Confirm Password
                    </label>
                  </td>
                  <td>
                    <input
                      type="password"
                      id="confirmPassword"
                      value={pass2}
                      onChange={(e) => setPass2(e.target.value)}
                      className="form-control butterfly-input"
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="text-center">
                    <button type="submit" className="btn butterfly-btn">
                      Register
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
      <h4 className="butterfly-text">
        If you already have an account, <Link to="/login" className="butterfly-link">Login</Link>
      </h4>
    </div>
  );
}

export default Register;
