import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios';
import {FaTrashAlt} from 'react-icons/fa'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import {BsFillBookmarksFill} from 'react-icons/bs';
import {BsFillTrashFill} from 'react-icons/bs';
import {AiOutlineSearch} from 'react-icons/ai';



export default function Productfilmadmin() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  console.log(selectedCategories);
const [product,setproduct] = useState([]);
const [hinhanh,sethinhanh] = useState("");
const [namefilm,setnamefilm] = useState("");


const [phimvietnam,setphimvietnam] = useState(0);
console.log(phimvietnam);
const [phimbotrungquoc,	setphimbotrungquoc] = useState(0);
const [phimbohanquoc,setphimbohanquoc] = useState(0);
const [phimbomy,setphimbomy] = useState(0);
const [phimnetflix,setphimnetflix] = useState(0);
const [phimchieurap,setphimchieurap] = useState(0);
const [phimle,setphimle] = useState(0);
const [phimtamly,setphimtamly] = useState(0);
const [phimhoihopgaycan,setphimhoihopgaycan] = useState(0);
const [phimhinhsu,setphimhinhsu] = useState(0);
const [kinhdi,setkinhdi] = useState(0);
const [hoathinh,sethoathinh] = useState(0);
const [phimcotrang,setphimcotrang] = useState(0);
const [phimvientuong,setphimvientuong] = useState(0);
const [phimhaihuoc,setphimhaihuoc] = useState(0);
const [phimphieuluu,setphimphieuluu] = useState(0);
const [phimchientranh,setphimchientranh] = useState(0);
const [phimtinhcamlangman,setphimtinhcamlangman] = useState(0);
const [phimhanhdong,setphimhanhdong] = useState(0);

const [editid,seteditid] = useState(null);
const [edittitlefilm,setedittitlefilm] = useState("");
const [edithinhanh,setedithinhanh] = useState("");


const [searchQuery, setSearchQuery] = useState('');
const [searchResults, setSearchResults] = useState([]);


const[danhmuccategory,setdanhmuccategory] = useState([]);


useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASEURL}/api/hoan`)
      .then((response) => {
      
        setproduct(response.data);
       
      })
      .catch((error) => {
        console.log(error); // Kiểm tra xem có lỗi xảy ra hay không
      });
  }, []);



// const xoasp = (id)=>{
//   axios.delete(`${process.env.REACT_APP_BASEURL}/api/deleteproduct/${id}`)
//   .then((response)=>{
//     window.location.reload(); 
//     alert('xóa sản phẩm thành công');
//   })
// }

useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BASEURL}/api/categoryall`)
    .then(response=>{
        setdanhmuccategory(response.data);
    })
},[])

const handlesua = (pro)=>{
   seteditid(pro.id);
   setedittitlefilm(pro.Name);
   setedithinhanh(pro.image);
}
 

  async function save(event) {
  event.preventDefault();
  try {
    const formData = new FormData();
    formData.append('image', event.target.hinhanh.files[0]);
    formData.append('Name', namefilm);

    formData.append('phimhanhdong', phimhanhdong);
    formData.append('phimtinhcamlangman', phimtinhcamlangman);
    formData.append('phimchientranh', phimchientranh);
    formData.append('phimphieuluu', phimphieuluu);
    formData.append('phimhaihuoc', phimhaihuoc);
    formData.append('phimvientuong', phimvientuong);
    formData.append('phimcotrang', phimcotrang);
    formData.append('hoathinh', hoathinh);
    formData.append('kinhdi', kinhdi);
    formData.append('phimhinhsu', phimhinhsu);
    formData.append('phimhoihopgaycan', phimhoihopgaycan);
    formData.append('phimtamly', phimtamly);
    formData.append('phimle', phimle);
    formData.append('phimchieurap', phimchieurap);
    formData.append('phimnetflix', phimnetflix);
    formData.append('phimbomy', phimbomy);
    formData.append('phimbohanquoc', phimbohanquoc);
    formData.append('phimbotrungquoc', phimbotrungquoc);
    formData.append('phimvietnam', phimvietnam);
    
    
    const response = await axios.post(`${process.env.REACT_APP_BASEURL}/api/createproductfilm`, formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
   
    if (response.data.message === 'success') {
      alert("thêm film thành công");
      sethinhanh("");
      setnamefilm("");
      window.location.reload();
    } else if (response.data.error === 'error') {
      alert('film này đã tồn tại');
    }
  } catch (err) {
    alert("Failed to add product");
  }
}

const hanhdlexoa =async (id)=>{
  const hoilaichochac = window.confirm('bạn có chắc muốn xóa');
  if(hoilaichochac){
    await axios.delete(`${process.env.REACT_APP_BASEURL}/api/xoaproduct/${id}`)
    .then((response)=>{
      alert('xóa sản phẩm thành công');
      window.location.reload(); 
     
    })
  }else{
    
  }
 
}

const handleUpdate  = async (id) => {
  const hoilai = window.confirm('bạn có chắc muốn lưu những thay đổi');
  if(hoilai){
  try {
    // Truyền dữ liệu cần cập nhật trong body của yêu cầu PUT
    await axios.put(`${process.env.REACT_APP_BASEURL}/api/editproduct/${id}`, {
      Name: edittitlefilm,
      image: edithinhanh,
     
      id:editid ,
    });
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}
};

const handleSearch = () => {
  const filteredResults = product.filter((product) =>
    product.Name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  setSearchResults(filteredResults);
};


  return (
    <div style={{display:'flex'}}> 
    <Navbar />
   
        <Sidebar />
        <div style={{width:'85%',margin:'0 auto',marginTop:75}} className='custom-margin-top'>
        <div style={{ width:'100%',float:'top'}} class="row row-offcanvas row-offcanvas-right">
  <div class="col-md-12">
    <h2>Thêm sản phẩm</h2>
    <form onSubmit={save}>
    <div class="form-group">
        <label for="title">Tên film</label>
        <input type="text" name="title" class="form-control" id="title" placeholder="Nhập Tên Film" required value={namefilm} onChange={(e) => setnamefilm(e.target.value)} />
      </div>


      <div class="form-group">
        <label for="hinhanh">Hình Ảnh</label>
        <input style={{height:50,border:'1px solid grey',alignItems:'center',padding:'8px 10px' }} type="file" name="hinhanh" class="form-control-file" id="hinhanh" required />
      </div>



<h2>thuộc danh mục film</h2> 



<div style={{display:'flex',width:'100%',height:'100%',flexWrap:'wrap'}}>
  <div className="row">  
<div style={{width:250,paddingLeft:30}} className="form-group col-12"> 
  
  <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">film hành động</label>
  <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="product_id" required value={phimhanhdong} onChange={(e) => setphimhanhdong(e.target.value)}>
      <option value="0">không thuộc</option>
      <option value="1">có thuộc</option>
   
  </select>
</div>
</div>


<div className="row">
<div style={{width:250,paddingLeft:30}} className="form-group col-12">
  
  <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">phim tình cảm lãng mạn</label>
  <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="product_id" required value={phimtinhcamlangman} onChange={(e) => setphimtinhcamlangman(e.target.value)}>
      <option value="0">không thuộc</option>
      <option value="1">có thuộc</option>
   
  </select>
</div>
</div>

<div className="row">
<div style={{width:250,paddingLeft:30}} className="form-group col-12">
  
  <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">phim chiến tranh</label>
  <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="product_id" required value={phimchientranh} onChange={(e) => setphimchientranh(e.target.value)}>
      <option value="0">không thuộc</option>
      <option value="1">có thuộc</option>
   
  </select>
</div>
</div>

<div className="row">
<div style={{width:250,paddingLeft:30}} className="form-group col-12">
  
  <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">phim phiêu lưu </label>
  <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="product_id" required value={phimphieuluu} onChange={(e) => setphimphieuluu(e.target.value)}>
      <option value="0">không thuộc</option>
      <option value="1">có thuộc</option>
   
  </select>
</div>
</div>

<div className="row">
<div style={{width:250,paddingLeft:30}} className="form-group col-12">
  
  <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">phim hài hước</label>
  <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="product_id" required value={phimhaihuoc} onChange={(e) => setphimhaihuoc(e.target.value)}>
      <option value="0">không thuộc</option>
      <option value="1">có thuộc</option>
   
  </select>
</div>
</div>

<div className="row">
<div style={{width:250,paddingLeft:30}} className="form-group col-12">
  
  <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">phim viễn tưởng</label>
  <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="product_id" required value={phimvientuong} onChange={(e) => setphimvientuong(e.target.value)}>
      <option value="0">không thuộc</option>
      <option value="1">có thuộc</option>
   
  </select>
</div>
</div>

<div className="row">
<div style={{width:250,paddingLeft:30}} className="form-group col-12">
  
  <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">phim cổ trang</label>
  <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="product_id" required value={phimcotrang} onChange={(e) => setphimcotrang(e.target.value)}>
      <option value="0">không thuộc</option>
      <option value="1">có thuộc</option>
   
  </select>
</div>
</div>

<div className="row">
<div style={{width:250,paddingLeft:30}} className="form-group col-12">
  
  <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">phim hoạt hình</label>
  <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="product_id" required value={hoathinh} onChange={(e) => sethoathinh(e.target.value)}>
      <option value="0">không thuộc</option>
      <option value="1">có thuộc</option>
   
  </select>
</div>
</div>

<div className="row">
<div style={{width:250,paddingLeft:30}} className="form-group col-12">
  
  <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">phim kinh dị</label>
  <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="product_id" required value={kinhdi} onChange={(e) => setkinhdi(e.target.value)}>
      <option value="0">không thuộc</option>
      <option value="1">có thuộc</option>
   
  </select>
</div>
</div>

<div className="row">
<div style={{width:250,paddingLeft:30}} className="form-group col-12">
  
  <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">phim hình sự</label>
  <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="product_id" required value={phimhinhsu} onChange={(e) => setphimhinhsu(e.target.value)}>
      <option value="0">không thuộc</option>
      <option value="1">có thuộc</option>
   
  </select>
</div>
</div>

<div className="row">
<div style={{width:250,paddingLeft:30}} className="form-group col-12">
  
  <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">phim hồi hộp gay cấn </label>
  <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="product_id" required value={phimhoihopgaycan} onChange={(e) => setphimhoihopgaycan(e.target.value)}>
      <option value="0">không thuộc</option>
      <option value="1">có thuộc</option>
   
  </select>
</div>
</div>

<div className="row">
<div style={{width:250,paddingLeft:30}} className="form-group col-12">
  
  <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">phim tâm lý</label>
  <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="product_id" required value={phimtamly} onChange={(e) => setphimtamly(e.target.value)}>
      <option value="0">không thuộc</option>
      <option value="1">có thuộc</option>
   
  </select>
</div>
</div>

<div className="row">
<div style={{width:250,paddingLeft:30}} className="form-group col-12">
  
  <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">phim lẻ</label>
  <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="product_id" required value={phimle} onChange={(e) => setphimle(e.target.value)}>
      <option value="0">không thuộc</option>
      <option value="1">có thuộc</option>
   
  </select>
</div>
</div>

<div className="row">
<div style={{width:250,paddingLeft:30}} className="form-group col-12">
  
  <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">phim chiếu rạp</label>
  <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="product_id" required value={phimchieurap} onChange={(e) => setphimchieurap(e.target.value)}>
      <option value="0">không thuộc</option>
      <option value="1">có thuộc</option>
   
  </select>
</div>
</div>

<div className="row">
<div style={{width:250,paddingLeft:30}} className="form-group col-12">
  
  <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">phim netflix</label>
  <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="product_id" required value={phimnetflix} onChange={(e) => setphimnetflix(e.target.value)}>
      <option value="0">không thuộc</option>
      <option value="1">có thuộc</option>
   
  </select>
</div>
</div>

<div className="row">
<div style={{width:250,paddingLeft:30}} className="form-group col-12">
  
  <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">phim bộ mỹ</label>
  <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="product_id" required value={phimbomy} onChange={(e) => setphimbomy(e.target.value)}>
      <option value="0">không thuộc</option>
      <option value="1">có thuộc</option>
   
  </select>
</div>
</div>

<div className="row">
<div style={{width:250,paddingLeft:30}} className="form-group col-12">
  
  <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">phim bộ hàn quốc</label>
  <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="product_id" required value={phimbohanquoc} onChange={(e) => setphimbohanquoc(e.target.value)}>
      <option value="0">không thuộc</option>
      <option value="1">có thuộc</option>
   
  </select>
</div>
</div>

<div className="row">
<div style={{width:250,paddingLeft:30}} className="form-group col-12">
  
  <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">phim bộ trung quốc</label>
  <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="product_id" required value={phimbotrungquoc} onChange={(e) => setphimbotrungquoc(e.target.value)}>
      <option value="0">không thuộc</option>
      <option value="1">có thuộc</option>
   
  </select>
</div>
</div>

<div className="row">
<div style={{width:250,paddingLeft:30}} className="form-group col-12">
  
  <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">phim việt nam</label>
  <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="product_id" required value={phimvietnam} onChange={(e) => setphimvietnam(e.target.value)}>
      <option value="0">không thuộc</option>
      <option value="1">có thuộc</option>
   
  </select>
</div>
</div>
</div>



      <button type="submit" class="btn btn-primary">Thêm Sản Phẩm</button>
    </form>
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
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
        
          <th scope="col">Tên film</th>
          <th scope="col">Hình ảnh</th>
          
          <th scope="col">Sửa</th>
          <th scope="col">Xóa</th>
        </tr>
      </thead>
      <tbody>
  {searchResults.length > 0 ? (
    searchResults.map((product) => (
      <tr key={product.id}>
        <td>{product.id}</td>
     
        { editid === product.id ? (

<>
<td>
    <input
  style={{width:'80%',}}
   type="text"
   value={edittitlefilm}
   onChange={(e) => setedittitlefilm(e.target.value)}
   
 />
</td>

<td>
    <input
  style={{width:'80%'}}
   type="text"
   value={edithinhanh}
   onChange={(e) => setedithinhanh(e.target.value)}
 />
</td>


<td>
 <button onClick={() => handleUpdate(product.id)}>Lưu</button>
 <button onClick={() => seteditid(null)}>Hủy</button>
</td>
</>
)
:(
<>

<td>{product.Name}</td>
<td>{product.image}</td>


<th><button style={{alignItems:'center',justifyContent:'center',border:'none',borderRadius:5}}><BsFillBookmarksFill style={{color:'yellow',fontSize:20,alignItems:'center',justifyContent:'center',textAlign:'center'}} onClick={()=>handlesua(product)} /></button></th>
   <th><button style={{alignItems:'center',justifyContent:'center',border:'none',borderRadius:5}}><BsFillTrashFill style={{color:'red',fontSize:20,alignItems:'center',justifyContent:'center',textAlign:'center'}} onClick={()=>hanhdlexoa(product.id)}/></button></th>
</>
)

} 
      </tr>
    ))
  ) : (
    product.map((pro) => {
      return (
        <tr>
          <td>{pro.id}</td>

        { editid === pro.id ? (

           <>

          <td>
              <input
            style={{width:'80%',}}
            type="text"
            value={edittitlefilm}
            onChange={(e) => setedittitlefilm(e.target.value)}
            
          />
          </td>
           <td>
               <input
             style={{width:'80%'}}
              type="text"
              value={edithinhanh}
              onChange={(e) => setedithinhanh(e.target.value)}
            />
          </td>
          
         
          <td>
            <button onClick={() => handleUpdate(pro.id)}>Lưu</button>
            <button onClick={() => seteditid(null)}>Hủy</button>
          </td>
           </>
        )
         :(
          <>
          
           <td>{pro.Name}</td>
          <td>{pro.image}</td>
       

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
      </div>
    
 
        
   
  
   

  
  
  )
}
