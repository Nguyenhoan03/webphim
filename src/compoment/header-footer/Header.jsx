import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {AiFillCaretDown} from 'react-icons/ai'
import {RiGitRepositoryFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {AiOutlineMenuUnfold} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function Header() {
  const navigate = useNavigate();
    const handleclick = (e)=>{
          e.preventDefault();
    }

    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
      setMenuVisible(!isMenuVisible);
    };
    const [searchfilm, setSearchFilm] = useState('');
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);

  const handlesearch = () => {
    if (searchfilm.length > 0) {
      // Thực hiện tìm kiếm ở đây
      navigate(`/tim_kiem/${searchfilm}`);
    }
  }

  const handleInputChange = (e) => {
    setSearchFilm(e.target.value);
    setIsSearchEnabled(e.target.value.length > 0);
  }

  return (
    <div className='header'>
     <div className="header1">
        <div className="phantuheader1">
          <img
            src="https://motchill.info/motchill.png?v1.0.2"
            className="img-fluid" // Bootstrap class to make the image responsive
            alt="Motchill Logo"
          />
         <input
        onClick={handleclick}
        placeholder="Nhập từ khóa tìm kiếm..."
        className="form-control"
        style={{ maxWidth: '38%' }}
        value={searchfilm}
        onChange={handleInputChange}
      />
      {
        isSearchEnabled ? (
          <div className="input-group-append">
            <span className="input-group-text">
              <BsSearch onClick={handlesearch} style={{ fontSize: 22, color: 'red' }} />
            </span>
          </div>
        ) : null
      }
          {/* <div className="input-group-append">
            <span className="input-group-text">
              <BsSearch onClick={handlesearch} style={{ fontSize: 22, color: 'red' }} />
            </span>
          </div> */}
          <button className="btn btn-primary ml-auto">
            <RiGitRepositoryFill /> Tủ phim <span className="badge badge-dark">0</span>
          </button>
        </div>
      </div>
       <div className='header2' >
       
       <div className='phantuheader2' >
       <button className='buttontoggle' style={{backgroundColor: '#202025', color: 'white', border: 'none'}} onClick={toggleMenu}>
  <AiOutlineMenuUnfold style={{ backgroundColor: '#202025', fontSize: 33, color: 'white' }} />
</button>

   
       <ul className={`menu-list ${isMenuVisible ? 'visible' : ''}`}>
      <li className="menu-item">
        <Link to="/">trang chủ</Link>
      </li>
      <li className="menu-item">
        <Link className="menu-link">
          thể loại <AiFillCaretDown style={{ fontSize: 13, backgroundColor: '#202025', marginLeft: 5 }} />
        </Link>
  
     
          <table className='theloai' style={{backgroundColor:'#161619',}}>
              <tr>
                  <th><Link to="/phim-hanh-dong">PHIM HÀNH ĐỘNG</Link></th>
                  <th><Link to="/phim-hai-huoc">PHIM HÀI HƯỚC</Link></th>
                  <th><Link to="/phim-kinh-di">PHIM KINH DỊ</Link></th>
              </tr>
  
              <tr>
                  <th><Link to="/phim-tinh-cam-lang-man">PHIM TÌNH CẢM LÃNG MẠN</Link></th>
                  <th><Link to="/phim-vien-tuong">PHIM VIỄN TƯỞNG</Link></th>
                  <th><Link to="/phim-hinh-su">PHIM HÌNH SỰ</Link></th>
              </tr>
  
              <tr>
                  <th><Link to="/phim-chien-tranh">PHIM CHIẾN TRANH</Link></th>
                  <th><Link to="/phim-co-trang">PHIM CỔ TRANG</Link></th>
                  <th><Link to="/phim-hoi-hop-gay-can">PHIM HỒI HỘP-GAY CẤN  </Link></th>
              </tr>
  
              <tr>
                  <th><Link to="/phim-phieu-luu">PHIM PHIÊU LƯU </Link></th>
                  <th><Link to="/phim-hoat-hinh">PHIM HOẠT HÌNH</Link></th>
                  <th><Link to="/phim-tam-ly">PHIM TÂM LÝ</Link></th>
              </tr>
          </table>
       
  
      </li>
      <li className="menu-item">
        <Link to="/phim-le">phim lẻ</Link>
      </li>
      <li className="menu-item">
        <Link to="/phim-chieu-rap">phim chiếu rạp</Link>
      </li>
      <li className="menu-item">
        <Link to="/phim-netflix">phim netflix</Link>
      </li>
      <li className="menu-item">
        <Link to="/phim-bo-my">phim bộ mỹ</Link>
      </li>
      <li className="menu-item">
        <Link to="/phim-bo-han-quoc">phim bộ hàn quốc</Link>
      </li>
      <li className="menu-item">
        <Link to="/phim-bo-trung-quoc">phim bộ trung quốc</Link>
      </li>
      <li className="menu-item">
        <Link to="/phim-viet-nam">phim việt nam</Link>
      </li>
      <li className="menu-item">
        <Link to="/phim-hoat-hinh">phim hoạt hình</Link>
      </li>
    </ul>
 
</div>

       </div>
    </div>
  )
}
