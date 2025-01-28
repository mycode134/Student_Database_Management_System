import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Addstudent() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [clas, setClas] = useState("");
  const [roll, setRoll] = useState("");
  const [mobile_number, setMobile_number] = useState("");
  const [blood_group, setBlood_group] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const sendData = (event) => {
    event.preventDefault();
    const data = { id, name, email, clas, roll, mobile_number, blood_group, city };
    fetch("http://localhost:3001/Studentlist", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(() => {
        alert("Posted successfully...!");
        navigate("/list");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <br /><br /><br /><br /><br />
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h2>Add Student Data</h2>
          </div>
          <div className="card-body">
            <form onSubmit={sendData}>
              <div className="form-group">
                <label>ID</label>
                <input value={id} disabled type="number" className="form-input" />
              </div>
              <div className="form-group">
                <label>Student Name</label>
                <input value={name} type="text" onChange={(e) => setName(e.target.value)} className="form-input" />
              </div>
              <div className="form-group">
                <label>Student Email</label>
                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} className="form-input" />
              </div>
              <div className="form-group">
                <label>Student Class</label>
                <input value={clas} type="text" onChange={(e) => setClas(e.target.value)} className="form-input" />
              </div>
              <div className="form-group">
                <label>Student Roll No</label>
                <input value={roll} type="number" onChange={(e) => setRoll(e.target.value)} className="form-input" />
              </div>
              <div className="form-group">
                <label>Student Mobile Number</label>
                <input value={mobile_number} type="number" onChange={(e) => setMobile_number(e.target.value)} className="form-input" />
              </div>
              <div className="form-group">
                <label>Student Blood Group</label>
                <input value={blood_group} type="text" onChange={(e) => setBlood_group(e.target.value)} className="form-input" />
              </div>
              <div className="form-group">
                <label>Student City</label>
                <input value={city} type="text" onChange={(e) => setCity(e.target.value)} className="form-input" />
              </div>
              <br></br>
              <br></br>
              <div className="button-group">
                
                <button type="submit" className="butterfly-button">Add</button>
                <Link to="/list" className="butterfly-link">Back</Link>
              </div>
            </form>
          </div>
        </div>

        <style>{`
          .card {
            background: white;
            border-radius: 10px;
            padding: 15px;
            background: linear-gradient(to right, rgb(7, 7, 7) 50%, rgb(255,165,0) 50%);
            }
          .card-header {
            text-align: center;
            margin-bottom: 15px;
          }
          .card-header h2 {
            font-family: 'Arial', sans-serif;
            color: darkblue;
            text-shadow: 1px 1px 2px gray;
          }ś
          .form-group {
            margin-bottom: 15px;
          }
          .form-group label {
            font-size: 14px;
            font-weight: bold;
            color: darkgreen;
          }
          .form-input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 14px;
          }
        .butterfly-button {
          background-color: skyblue;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          font-size: 16px;
          margin-right: 10px;
          transition: all 0.3s ease;
        }
        .butterfly-button:hover {
          background-color:  rgb(25, 0, 255);
          transform: scale(1.1);
        }
        .butterfly-link {
           background-color: skyblue;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          font-size: 16px;
          margin-right: 10px;
          transition: all 0.3s ease;
        }
        .butterfly-link:hover {
           background-color: rgb(25, 0, 255);
          transform: scale(1.1);
        }
        @media (max-width: 750px) {
            .container {
              padding: 15px;
            }
            .form-input {
              font-size: 12px;
            }
            .butterfly-button, .butterfly-link {
              font-size: 14px;
            }
          }
          @media (max-width: 430px) {
            .card-header h2 {
              font-size: 18px;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export default Addstudent;
