import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "./pagination";
import { useAuth } from "./Auth/User";

let URL = "http://localhost:3001/Studentlist";

function Studentlist() {
  const [data, setDate] = useState("");
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [recods, setRecods] = useState(7);

  useEffect(() => {
    fetch(URL, { method: "GET" })
      .then((res) => res.json())
      .then((resp) => setDate(resp))
      .catch((err) => console.error(err));
  }, []);

  const deleteData = (id) => {
    fetch(`${URL}/${id}`, { method: "DELETE" }).then(() => window.location.reload());
  };

  const editData = (id) => navigate(`/edit/${id}`);

  const filterRecord = async (e) => {
    e.preventDefault();
    const res = await axios.get(`${URL}?q=${value}`);
    setDate(res.data);
    setValue("");
  };

  const resetData = () => {
    fetch(URL, { method: "GET" })
      .then((res) => res.json())
      .then((resp) => setDate(resp))
      .catch((err) => console.error(err));
  };

  const sortRecords = async (e) => {
    const value = e.target.value;
    setSort(value);
    const res = await axios.get(`${URL}?_sort=${value}&_order=asc`);
    setDate(res.data);
  };

  const lr = recods * page;
  const fr = lr - recods;
  const myData = data.slice(fr, lr);

  const updatedPaga = (n) => setPage(n);

  const CurrentUser = useAuth();

  return (
    <div>
      <style>
        {`
          body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
          }
          
          .card {
          background: linear-gradient(to right, rgb(255,0,0) 50% , rgb(255,165,0) 50%);
            padding: 20px;
            border-radius: 10px;
          }
          .card-title h1 {
            color: #333;
            text-align: center;
            font-size: 2.5rem;
            font-weight: 700;
          }
          .card-title h2 {
            font-size: 2.3rem;
            text-align: center;
            color: #555;
            margin-top: 10px;
          }
          .filter-section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
          }
          .filter-section input[type="text"] {
            padding: 10px;
            width: 200px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
          }
          .filter-section .btn {
            padding: 10px 15px;
            font-size: 14px;
            color: white;
            background: #6c5ce7;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-left: 10px;
            text-decoration: none;
            text-align: center;
          }
          .filter-section .btn:hover {
            background: #341f97;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            background: #f9f9f9;
          }
          th {
            background: #6c5ce7;
            color: white;
            text-align: left;
            padding: 12px;
            font-size: 14px;
          }
          td {
            padding: 12px;
            border: 1px solid #ddd;
            font-size: 14px;
          }
          tr:nth-child(even) {
            background: #f2f2f2;
          }
          tr:hover {
            background: #dcdde1;
          }
          .action-buttons {
            display: flex;
            gap: 10px;
          }
          .btn-delete {
            padding: 8px 12px;
            color: white;
            background: #e84118;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          .btn-edit {
            padding: 8px 12px;
            color: white;
            background: #00cec9;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          @media (max-width: 750px) {
            .filter-section {
              flex-wrap: wrap;
              justify-content: center;
            }
            table, th, td {
              font-size: 12px;
            }
          }
          @media (max-width: 430px) {
            .card-title h1 {
              font-size: 1.8rem;
            }
            .filter-section input[type="text"] {
              width: 100%;
              margin-bottom: 10px;
            }
          }
        `}
      </style>
      <br></br><br></br><br></br><br></br>
      <br></br><br></br>
      
      <div className="container">
        
        <div className="card">
          <div className="card-title">
            <h1>Student List</h1>
            <h2>{CurrentUser?.email?.charAt(0)?.toUpperCase() || ''}</h2>
          </div>
          <div className="filter-section">
            <form onSubmit={filterRecord} style={{ display: "flex", alignItems: "center" }}>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search..."
              />
              <button type="submit" className="btn">Search</button>
              <button type="button" className="btn" onClick={resetData}>Reset</button>
            </form>
            <Link to="/add" className="btn">Add Student</Link>
            <select value={sort} onChange={sortRecords} className="btn">
              <option value="">Sort By</option>
              {["name", "email", "clas", "roll", "mobile_number", "blood_group", "city"].map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Class</th>
                  <th>Roll No</th>
                  <th>Mobile Number</th>
                  <th>Blood Group</th>
                  <th>City</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {myData && myData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.clas}</td>
                    <td>{item.roll}</td>
                    <td>{item.mobile_number}</td>
                    <td>{item.blood_group}</td>
                    <td>{item.city}</td>
                    <td>
                      <div className="action-buttons">
                        <button onClick={() => deleteData(item.id)} className="btn-delete">Delete</button>
                        <button onClick={() => editData(item.id)} className="btn-edit">Edit</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <br/>
          <div className="Pagination-center">
            <Pagination total={data.length} recods={recods} update={updatedPaga} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studentlist;
