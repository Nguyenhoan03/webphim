import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Loginadmin(setAuthenticated) {
  const [username,setusername] = useState("");
 
  const [password,setpassword] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASEURL}/api/loginadmin`, formData);
      if (response.status == 200) {


        localStorage.setItem('loggedIn', 'true');

  window.location.href = '/Adminpanel';
      } else if (response.data.error == 'loi') {
        alert('xem lại tài khoản, mật khẩu'); // Hiển thị thông báo lỗi từ phản hồi API
      }
    } catch (err) {
      console.log(err);
    }
  }


  
  
  console.log(password)
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
    backgroundColor: '#f2f2f2',
    padding: '20px',
    maxWidth: '400px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  };

  const labelStyle = {
    color: '#ff0000',
    marginBottom: '5px',
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  const inputStyle = {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '100%',
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
  };

  return (
    <div>
      
      <div className='loginadmin' style={containerStyle}>
      <h1>login admin</h1>
        <form onSubmit={handlesubmit}>
          <div className="form-group" style={formGroupStyle}>
            <label htmlFor="exampleInputEmail1" style={labelStyle}>Email address</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              style={inputStyle}
              value={username}
              onChange={e=>setusername(e.target.value)}
            />
          </div>
          <div className="form-group" style={formGroupStyle}>
            <label htmlFor="exampleInputPassword1" style={labelStyle}>Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              style={inputStyle}
              value={password}
              onChange={e=>setpassword(e.target.value)}
            />
          </div>
          <div className="form-check" style={formGroupStyle}>
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary" style={buttonStyle}>Submit</button>
        </form>
      </div>
    </div>
  );
}
