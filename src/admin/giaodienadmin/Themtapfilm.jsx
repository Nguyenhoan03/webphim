import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import {FaTrashAlt} from 'react-icons/fa'
import {BsFillBookmarksFill} from 'react-icons/bs';
import {BsFillTrashFill} from 'react-icons/bs';
import {AiOutlineSearch} from 'react-icons/ai';

export default function Themtapfilm() {
    const [danhmucsp,setdanhmucsp]=useState([]);
  const [detailfilm_id,setdetailfilm_id]=useState("");
  console.log(detailfilm_id);
 
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [titlefilm, settitlefilm] = useState("");
  const [searchKeyword, setSearchKeyword] = useState('');
  const [showDefaultOption, setShowDefaultOption] = useState(true);

  
  const [linkfilm, setlinkfilm] = useState("");
  const [episode, setepisode] = useState("");


  
  const [error, setError] = useState('');
  const [detailproduct, setdetailproduct] = useState([]);

  const [editxemphimid,seteditxemphimid] = useState(null);
const [edittapfilm,setedittapfilm] = useState("");
const [editlinkfilm,seteditlinkfilm] = useState("");
  

  const handledelete =async (id)=>{
    await axios.delete(`${process.env.REACT_APP_BASEURL}/api/detail_product/${id}`)
    .then((response)=>{
      window.location.reload(); 
      alert('xóa sản phẩm thành công');
    })
  }

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BASEURL}/api/thongtinfilm`)
    .then((response)=>{
      setdanhmucsp(response.data);
    })
  }, []);

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BASEURL}/api/xemphim`)
    .then((response)=>{
      setdetailproduct(response.data)
    })
  }, []);
  
  async function save(event) {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('detailfilm_id', detailfilm_id);
      formData.append('titlefilm', titlefilm); 
      formData.append('linkfilm', linkfilm); 
      formData.append('episode', episode); 
    
   
     
      const response = await axios.post(`${process.env.REACT_APP_BASEURL}/api/createthongtinphim`, formData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      });
      alert("Thêm thành công");
      setdetailfilm_id("");
      setepisode("");
      setlinkfilm("");
      settitlefilm("");
     
     
   
      window.location.reload(); 
    
    } catch (err) {
      console.log(err)
    }
  }


  const hanhdlexoa =async (id)=>{
    const hoilaichochac = window.confirm('bạn có chắc muốn xóa');
    if(hoilaichochac){
      await axios.delete(`${process.env.REACT_APP_BASEURL}/api/xoaxemphim/${id}`)
      .then((response)=>{
        alert('xóa sản phẩm thành công');
        window.location.reload(); 
       
      })
    }else{
      
    }
   
  }

  const handlesua = (pro)=>{
    seteditxemphimid(pro.id);
    setedittapfilm(pro.episode);
    seteditlinkfilm(pro.linkfilm);
  }
  
  const handleUpdate  = async (id) => {
    const hoilai = window.confirm('bạn có chắc muốn lưu những thay đổi');
    if(hoilai){
    try {
      // Truyền dữ liệu cần cập nhật trong body của yêu cầu PUT
      await axios.put(`${process.env.REACT_APP_BASEURL}/api/editxemphim/${id}`, {
        linkfilm: editlinkfilm,
        episode: edittapfilm,
       
        id:editxemphimid ,
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
  };

  const handleSearch = () => {
    const filteredResults = detailproduct.filter((product) =>
      product.titlefilm.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const filteredDanhMuc = danhmucsp.filter((dm) => dm.title.toLowerCase().includes(searchKeyword.toLowerCase()));

  const handleDanhMucChange = (e) => {
    const selecteddetailfilm_id = e.target.value;
    setdetailfilm_id(selecteddetailfilm_id);

    const selectedDanhMuc = danhmucsp.find((dm) => dm.id == selecteddetailfilm_id);
    settitlefilm(selectedDanhMuc ? selectedDanhMuc.title : 'chưa xác định');
  };

  const handleSearchkey = (e) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);

    // Kiểm tra xem có nên hiển thị tùy chọn mặc định "Chọn danh mục film..."
    setShowDefaultOption(keyword === '');

    // Cập nhật danh sách tùy chọn dựa trên từ khóa tìm kiếm
    const filteredDanhMuc = danhmucsp.filter((dm) => dm.title.toLowerCase().includes(keyword.toLowerCase()));
    console.log('filter',filteredDanhMuc);

    // Cập nhật danh sách tùy chọn và giá trị `detailfilm_id`
    if (filteredDanhMuc.length === 0) {
      setdetailfilm_id('');
    } else if (showDefaultOption) {
      setdetailfilm_id('');
    } else {
      setdetailfilm_id(filteredDanhMuc[0].id);
      settitlefilm(filteredDanhMuc[0].title);
     
    }
  };
  return (
    <div style={{display:'flex'}}> 
   <Navbar />
   
        <Sidebar />
        <div style={{width:'85%',margin:'0 auto',marginTop:75}} className='custom-margin-top'>
        <div style={{ width:'100%',float:'top'}} class="row row-offcanvas row-offcanvas-right">
      
  
  
  <h2>thêm tập film</h2>
  <form onSubmit={save}>
  {/* Hiển thị thông báo lỗi nếu có */}
  {error && <div>{error}</div>}
  <div>
  <div className="form-group">
      <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Danh mục film</label>
      <input
        type="text"
        style={{width:'50%',borderRadius:15,paddingLeft:10}}
        placeholder="Tìm kiếm danh mục film..."
        value={searchKeyword}
        onChange={handleSearchkey}
      />
      <select
        className="custom-select my-1 mr-sm-2"
        id="inlineFormCustomSelectPref"
        name="product_id"
        required
        value={detailfilm_id}
        onChange={handleDanhMucChange}
      >
        {showDefaultOption && (
          <option value="">Chọn danh mục film...</option>
        )}
        {filteredDanhMuc.map((dm) => (
          <option key={dm.id} value={dm.id}>
            {dm.title}
          </option>
        ))}
      </select>
    </div>

<div className="form-group">
  <label htmlFor="title">Tên film</label>
  <input type="text" name="title" className="form-control" id="title" placeholder="tên film" required value={titlefilm} />
</div>

    </div>

  <div class="form-group">
    <label htmlFor="title">tập phim</label>
    <input type="text" name="chatlieu" class="form-control" id="title" placeholder="Nhập tập film" required value={episode} onChange={(e) => setepisode(e.target.value)} />
  </div>

  <div class="form-group">
    <label htmlFor="title">link phim</label>
    <input type="text" name="themanhsp" class="form-control" id="title" placeholder="nhập link film" required value={linkfilm} onChange={(e) => setlinkfilm(e.target.value)} />
  </div>

 

  <button type="submit" class="btn btn-primary">Thêm</button>
</form>

<div style={{justifyContent:'space-between',width:'100%',display:"flex"}}> 
    <h2 style={{color:'tomato'}}>Danh sách sản phẩm</h2>

    <div style={{ alignItems: 'center', marginRight: 20, marginTop: 10, display: 'inline-block', position: 'relative' }}>
    <input
  type="text"
  placeholder="Tìm kiếm tên phim"
  style={{ textAlign: 'center', width: 300, height: 36 }}
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
/>
<button
  style={{ position: 'absolute', right: 0, top: 0, bottom: 0, marginLeft: 7, width: 40, border: '1px solid black', backgroundColor: 'white' }}
  onClick={handleSearch}
>
  <AiOutlineSearch
    style={{ border: 'none', fontSize: 20, color: 'tomato', backgroundColor: 'transparent', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
  />
</button>
</div>

</div>

<table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">tên film </th>
      <th scope="col">tập film</th>
      <th scope="col">link film</th>
     
      <th scope="col">Sửa</th>
      <th scope="col">Xóa</th>
    </tr>
  </thead>
  <tbody>
  {searchResults.length > 0 ? (
    searchResults.map((product) => (
      <tr key={product.id}>
        <td>{product.id}</td>
     
        { editxemphimid === product.id ? (

<>
<td>
    <input
  style={{width:'80%',}}
   type="text"
   placeholder={product.titlefilm}
   
 />
</td>

<td>
    <input
  style={{width:'80%'}}
   type="text"
   value={edittapfilm}
   onChange={(e) => setedittapfilm(e.target.value)}
 />
</td>

<td>
    <input
  style={{width:'80%'}}
   type="text"
   value={editlinkfilm}
   onChange={(e) => seteditlinkfilm(e.target.value)}
 />
</td>




<td>
 <button onClick={() => handleUpdate(product.id)}>Lưu</button>
 <button onClick={() => seteditxemphimid(null)}>Hủy</button>
</td>
</>
)
:(
<>

<td>{product.titlefilm}</td>
<td>{product.episode}</td>
<td>{product.linkfilm}</td>


<th><button style={{alignItems:'center',justifyContent:'center',border:'none',borderRadius:5}}><BsFillBookmarksFill style={{color:'yellow',fontSize:20,alignItems:'center',justifyContent:'center',textAlign:'center'}} onClick={()=>handlesua(product)} /></button></th>
   <th><button style={{alignItems:'center',justifyContent:'center',border:'none',borderRadius:5}}><BsFillTrashFill style={{color:'red',fontSize:20,alignItems:'center',justifyContent:'center',textAlign:'center'}} onClick={()=>hanhdlexoa(product.id)}/></button></th>
</>
)

} 
      </tr>
    ))
  ) : (
    detailproduct.map((pro) => {
      return (
        <tr>
          <td>{pro.id}</td>

        { editxemphimid === pro.id ? (

           <>

          <td>
              <input
            style={{width:'80%',}}
            type="text"
            placeholder={pro.titlefilm}
            
          />
          </td>
           <td>
               <input
             style={{width:'80%'}}
              type="text"
              value={edittapfilm}
              onChange={(e) => setedittapfilm(e.target.value)}
            />
          </td>
          
          <td>
            <input
              type="text"
              value={editlinkfilm}
              onChange={(e) => seteditlinkfilm(e.target.value)}
            />
          </td>

          <td>
            <button onClick={() => handleUpdate(pro.id)}>Lưu</button>
            <button onClick={() => seteditxemphimid(null)}>Hủy</button>
          </td>
           </>
        )
         :(
          <>
          
           <td>{pro.titlefilm}</td>
          <td>{pro.episode}</td>
          <td>{pro.linkfilm}</td>
         

          <th><button style={{alignItems:'center',justifyContent:'center',border:'none',borderRadius:5}}><BsFillBookmarksFill style={{color:'yellow',fontSize:20,alignItems:'center',justifyContent:'center',textAlign:'center'}} onClick={()=>handlesua(pro)} /></button></th>
              <th><button style={{alignItems:'center',justifyContent:'center',border:'none',borderRadius:5}}><BsFillTrashFill style={{color:'red',fontSize:20,alignItems:'center',justifyContent:'center',textAlign:'center'}} onClick={()=>hanhdlexoa(pro.id)}/></button></th>
          </>
         )

          } 

         
        </tr>
      );
    })
  )}
  </tbody>
</table>

 </div>

  
        </div>
  </div>
  )
}
