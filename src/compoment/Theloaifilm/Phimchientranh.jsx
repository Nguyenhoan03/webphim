import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../header-footer/Header'
import Footer from '../header-footer/Footer'

export default function Phimhanhdong() {
  const [theloaiphimhanhdong, setTheloaiphimhanhdong] = useState([]);
  const [phimhoathinh, setPhimhoathinh] = useState([]);
  const [phimtinhcamlangman, setPhimtinhcamlangman] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 35;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCategories = theloaiphimhanhdong.slice(startIndex, endIndex);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASEURL}/api/theloaiphimchientranh`)
      .then((response) => {
        setTheloaiphimhanhdong(response.data);
      });
  }, []);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASEURL}/api/phimhoathinh`)
      .then((response) => {
        setPhimhoathinh(response.data);
      });
  }, []);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASEURL}/api/phimtinhcamlangman`)
      .then((response) => {
        setPhimtinhcamlangman(response.data);
      });
  }, []);

  const containerStyle = {
    backgroundColor: 'black',
    width:'85%',
    margin:'0 auto',  
    color: 'white',
    padding: '20px',
    borderRadius: '5px',
    display: 'flex', 
  };
  const leftColumnStyle = {
    width: '67%', // Bên trái chiếm 67%
    marginRight: '3%', // Khoảng cách giữa cột trái và cột phải
  };

  const rightColumnStyle = {
    width: '30%', // Bên phải chiếm 30%
    marginTop:'-40px',
    
  
  };
  const linkStyle = {
    width:'100%',
    textDecoration: 'none', // Remove the underline from links
    
  };

  return (
    <div style={{backgroundColor:'black'}}>
<Header/>
    <div style={containerStyle} className='containerphimbohq'>
    <div className='leftcontainerphimbohq'>
      <div className="text-center" style={{width:'70%',margin:'0 auto',marginTop:-100,}}>
        <h2 className="display-4">PHIM CHIẾN TRANH</h2>
        <hr className="bg-primary" />
      </div>
      <div className="row">
        {displayedCategories.map((tlphd) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4" key={tlphd.id}>
            <Link to={`/${tlphd.Name}`} style={linkStyle}>
              <div className="card" style={{marginTop:-10,marginLeft:-10}}>
                <img src={`${process.env.REACT_APP_BASEURL}/upload/${tlphd.image}`} alt="" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{tlphd.Name}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <nav aria-label="Page navigation" className="d-flex justify-content-center nhucc">
        <ul className="pagination">
          {Array.from({ length: Math.ceil(theloaiphimhanhdong.length / itemsPerPage) }).map((_, index) => (
            <li className={`page-item ${page === index + 1 ? 'active' : ''}`} key={index}>
              <button className="page-link" onClick={() => setPage(index + 1)}>{index + 1}</button>
            </li>
          ))}
        </ul>
      </nav>
      </div>
      <div className='rightcontainerphimbohq'>
      <div className="text-center mt-4">
        <h3>PHIM HOẠT HÌNH</h3>
      </div>
      <div className="row" style={{flexDirection:'column',flexWrap:"wrap"}}>
        {phimhoathinh.map((pkdi) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4" key={pkdi.id} style={{width:'100%',height:130}}>
            <Link to={`/${pkdi.Name}`} style={linkStyle}>
           <div className="card" style={{ display: 'flex', flexDirection: 'row', width: '100%', }}>
  <img style={{width: '30%',height:'140px' }} src={`${process.env.REACT_APP_BASEURL}/upload/${pkdi.image}`} alt="" className="card-img-top" />
  <h5 style={{ width: '70%' }} className="card-title">{pkdi.Name}</h5>
</div>

            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <h3>PHIM TÌNH CẢM LÃNG MẠN</h3>
      </div>
       <div className="row" style={{flexDirection:'column',flexWrap:"wrap",}}>
        {phimtinhcamlangman.map((pkdi) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4" key={pkdi.id} style={{width:'100%',height:130}}>
            <Link to={`/${pkdi.Name}`} style={linkStyle}>
           <div className="card" style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
  <img style={{ width: '30%',height:'140px' }} src={`${process.env.REACT_APP_BASEURL}/upload/${pkdi.image}`} alt="" className="card-img-top" />
  <h5 style={{ width: '70%' }} className="card-title">{pkdi.Name}</h5>
</div>

            </Link>
          </div>
        ))}
        </div>
    </div>
    </div>
    <Footer/>
    </div>
  );
}
