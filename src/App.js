import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate

import Homefilm from "./compoment/Homefilm";
import Detailfilm from "./compoment/Detailfilm";
import Xemphim from "./compoment/Xemfilm";
import Phimhanhdong from './compoment/Theloaifilm/Phimhanhdong';
import Phimtinhcamlangman from './compoment/Theloaifilm/Phimtinhcamlangman';
import Phimchientranh from './compoment/Theloaifilm/Phimchientranh';
import Phimphieuluu from './compoment/Theloaifilm/Phimphieuluu';
import Phimhaihuoc from './compoment/Theloaifilm/Phimhaihuoc';
import Phimvientuong from './compoment/Theloaifilm/Phimvientuong';
import Phimcotrang from './compoment/Theloaifilm/Phimcotrang';
import Phimhoathinh from './compoment/Theloaifilm/Phimhoathinh';


import Phimkinhdi from './compoment/Theloaifilm/Phimkinhdi';
import Phimhinhsu from './compoment/Theloaifilm/Phimhinhsu';
import Phimhoihopgaycan from './compoment/Theloaifilm/Phimhoihopgaycan';

import Phimtamly from './compoment/Theloaifilm/Phimtamly';
import Phimle from './compoment/Theloaifilm/Phimle';
import Phimchieurap from './compoment/Theloaifilm/Phimchieurap';

import Phimbomy from './compoment/Theloaifilm/Phimbomy';
import Phimnetflix from './compoment/Theloaifilm/Phimnetflix';
import Phimbohanquoc from './compoment/Theloaifilm/Phimbohanquoc';
import Phimbotrungquoc from './compoment/Theloaifilm/Phimbotrungquoc';
import Phimvietnam from './compoment/Theloaifilm/Phimvietnam';

import Loginadmin from './admin/Loginadmin';
import Adminpanel from './admin/AdminPanel';
import Productfilmadmin from './admin/giaodienadmin/Productfilmadmin';
import Themdetailfilm from './admin/giaodienadmin/Themdetailfilm';
import Themtapfilm from './admin/giaodienadmin/Themtapfilm';
import Searchfilm from './compoment/Searchfilm';

function App() {
  const loggedIn = localStorage.getItem('loggedIn');
  setTimeout(function() {
    localStorage.removeItem('loggedIn');
  }, 15 * 60 * 1000); 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homefilm/>}/>
          <Route path="/:title" element={<Detailfilm/>}/>
          <Route path="/xem-phim/:title/:episode" element={<Xemphim/>}/>


          <Route path="/phim-hanh-dong" element={<Phimhanhdong/>}/>
          <Route path="/phim-tinh-cam-lang-man" element={<Phimtinhcamlangman/>}/>
          <Route path="/phim-chien-tranh" element={<Phimchientranh/>}/>
          <Route path="/phim-phieu-luu" element={<Phimphieuluu/>}/>
          <Route path="/phim-hai-huoc" element={<Phimhaihuoc/>}/>

          <Route path="/phim-vien-tuong" element={<Phimvientuong/>}/>
          <Route path="/phim-co-trang" element={<Phimcotrang/>}/>
          <Route path="/phim-hoat-hinh" element={<Phimhoathinh/>}/>

          <Route path="/phim-kinh-di" element={<Phimkinhdi/>}/>
          <Route path="/phim-hinh-su" element={<Phimhinhsu/>}/>
          <Route path="/phim-hoi-hop-gay-can" element={<Phimhoihopgaycan/>}/>


          <Route path="/phim-tam-ly" element={<Phimtamly/>}/>
          <Route path="/phim-le" element={<Phimle/>}/>
          <Route path="/phim-chieu-rap" element={<Phimchieurap/>}/>
          <Route path="/tim_kiem/:slug" element={<Searchfilm/>}/>


          <Route path="/phim-netflix" element={<Phimnetflix/>}/>
          <Route path="/phim-bo-han-quoc" element={<Phimbohanquoc/>}/>
          <Route path="/phim-bo-my" element={<Phimbomy/>}/>
          <Route path="/phim-bo-trung-quoc" element={<Phimbotrungquoc/>}/>
          <Route path="/phim-viet-nam" element={<Phimvietnam/>}/>

          <Route path="/Loginadmin" element={<Loginadmin/>}/>
          <Route path="/Adminpanel" element={loggedIn ? <Adminpanel /> : <Navigate to="/Loginadmin" />}/>


          <Route path="/product-film" element={loggedIn ? <Productfilmadmin /> : <Navigate to="/Loginadmin" />}/>
          <Route path="/admin-detail-film" element={loggedIn ? <Themdetailfilm /> : <Navigate to="/Loginadmin" />}/>
          <Route path="/admin-xem-phim" element={loggedIn ? <Themtapfilm /> : <Navigate to="/Loginadmin" />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
