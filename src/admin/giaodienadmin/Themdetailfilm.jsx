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


export default function Themdetailfilm() {
    const [danhmucsp,setdanhmucsp]=useState([]);
  const [product_id,setproduct_id]=useState("");
  console.log(product_id);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  
  const [title, settitle] = useState("");
  console.log(title)
  
  const [nameenglish, setnameenglish] = useState("");
  const [moicapnhat, setmoicapnhat] = useState("");
  const [tinhtrang, settinhtrang] = useState("");
  const [nam, setnam] = useState(0);
  const [theloai, settheloai] = useState("");
  const [quocgia, setquocgia] = useState("");
  const [daodien, setdaodien] = useState("...");
  const [dienvien, setdienvien] = useState("...");
  const [thoiluong, setthoiluong] = useState("");
  const [descripts, setdescripts] = useState("");
  
  const [error, setError] = useState('');
  const [detailproduct, setdetailproduct] = useState([]);

  const handledelete =async (id)=>{
    await axios.delete(`${process.env.REACT_APP_BASEURL}/api/detail_product/${id}`)
    .then((response)=>{
      window.location.reload(); 
      alert('xóa sản phẩm thành công');
    })
  }

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BASEURL}/api/hoan`)
    .then((response)=>{
      setdanhmucsp(response.data);
    })
  }, []);

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BASEURL}/api/thongtinfilm`)
    .then((response)=>{
      setdetailproduct(response.data)
    })
  }, []);
  
  async function save(event) {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('product_id', product_id);
      formData.append('title', title); 
      formData.append('nameenglish', nameenglish); 
      formData.append('moicapnhat', moicapnhat); 
      formData.append('tinhtrang', tinhtrang); 
      formData.append('nam',nam); 
      formData.append('theloai', theloai); 
      formData.append('quocgia', quocgia); 
      formData.append('daodien', daodien); 
      formData.append('dienvien', dienvien); 
      formData.append('thoiluong', thoiluong); 
      formData.append('descripts', descripts); 
   
     
      const response = await axios.post(`${process.env.REACT_APP_BASEURL}/api/createdetailfilm`, formData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      });
      alert("Thêm thành công");
      setproduct_id("");
      setdescripts("");
      settitle("");
      setnameenglish("");
      setmoicapnhat("");
      settinhtrang("");
      setnam("");
      settheloai("");
      setquocgia("");
      setdaodien("");
      setdienvien("");
      setthoiluong("");
     
   
      window.location.reload(); 
    
    } catch (err) {
      console.log(err)
    }
  }
  const hanhdlexoa =async (id)=>{
    const hoilaichochac = window.confirm('bạn có chắc muốn xóa');
    if(hoilaichochac){
      await axios.delete(`${process.env.REACT_APP_BASEURL}/api/xoadetailfilm/${id}`)
      .then((response)=>{
        alert('xóa sản phẩm thành công');
        window.location.reload(); 
       
      })
    }else{
      
    }
   
  }
  const [editxemphimid,seteditxemphimid] = useState(null);

  const [editnameenglish, seteditnameenglish] = useState("");
  const [editmoicapnhat, seteditmoicapnhat] = useState("");
  const [edittinhtrang, setedittinhtrang] = useState("");
  const [editnam, seteditnam] = useState(0);
  const [edittheloai, setedittheloai] = useState("");
  const [editquocgia, seteditquocgia] = useState("");
  const [editdaodien, seteditdaodien] = useState("");
  const [editdienvien, seteditdienvien] = useState("");
  const [editthoiluong, seteditthoiluong] = useState("");
  const [editdescripts, seteditdescripts] = useState("");
  

  
  const handlesua = (pro)=>{
    seteditxemphimid(pro.id);
    seteditnameenglish(pro.nameenglish);
    seteditmoicapnhat(pro.moicapnhat);
    setedittinhtrang(pro.tinhtrang);
    seteditnam(pro.nam);
    setedittheloai(pro.theloai);
    seteditquocgia(pro.quocgia);
    seteditdaodien(pro.daodien);
    seteditdienvien(pro.dienvien);
    seteditthoiluong(pro.thoiluong);
    seteditdescripts(pro.descripts);
    
  }

  const handleUpdate  = async (id) => {
    const hoilai = window.confirm('bạn có chắc muốn lưu những thay đổi');
    if(hoilai){
    try {
      // Truyền dữ liệu cần cập nhật trong body của yêu cầu PUT
      await axios.put(`${process.env.REACT_APP_BASEURL}/api/editdetailfilm/${id}`, {
        nameenglish: editnameenglish,
        moicapnhat: editmoicapnhat,
        tinhtrang: edittinhtrang,
        nam: editnam,
        theloai: edittheloai,
        quocgia: editquocgia,
        daodien: editdaodien,
        dienvien: editdienvien,
        thoiluong: editthoiluong,
        descripts: editdescripts,
       
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
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  };


  return (
    <div style={{display:'flex'}}> 
   <Navbar />
    
        <Sidebar />
        <div style={{width:'85%',margin:'0 auto',marginTop:75}} className='custom-margin-top'>
        <div style={{ width:'100%',float:'top'}} class="row row-offcanvas row-offcanvas-right">
      
  
  
  <h2>thêm chi tiết sản phẩm</h2>
  <form onSubmit={save}>
  {/* Hiển thị thông báo lỗi nếu có */}
  {error && <div>{error}</div>}
  <div>
  <div className="form-group">
  <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Danh mục film</label>
  <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="product_id" required value={product_id} onChange={(e) => {
    const selectedProduct_id = e.target.value;
    setproduct_id(selectedProduct_id);
   
    const selectedDanhMuc = danhmucsp.find((dm) => dm.id == selectedProduct_id);
    settitle(selectedDanhMuc ? selectedDanhMuc.Name : 'chưa xác định');
  }}>
    <option value="chọn danh mục">Chọn danh mục film...</option>
    {danhmucsp.map((dm) => (
      <option key={dm.id} value={dm.id}>
        {dm.id}. {dm.Name}
      </option>
    ))}
  </select>
</div>

<div className="form-group">
  <label htmlFor="title" style={{color:'blue'}}>Tên film</label>
  <input type="text" name="title" className="form-control" id="title" placeholder="Nhập tình trạng sản phẩm" required value={title} />
</div>

    </div>

  <div class="form-group">
    <label htmlFor="title" style={{color:'blue'}}>tên bằng tiếng anh</label>
    <input type="text" name="chatlieu" class="form-control" id="title" placeholder="Nhập chất liệu Sản Phẩm" required value={nameenglish} onChange={(e) => setnameenglish(e.target.value)} />
  </div>

  <div class="form-group">
    <label htmlFor="title" style={{color:'blue'}}>mới cập nhật</label>
    <input type="text" name="themanhsp" class="form-control" id="title" placeholder="Thế mạnh Sản Phẩm" required value={moicapnhat} onChange={(e) => setmoicapnhat(e.target.value)} />
  </div>

  <div class="form-group">
    <label htmlFor="title" style={{color:'blue'}}>tình trạng</label>
    <input type="text" name="themanhsp" class="form-control" id="title" placeholder="Thế mạnh Sản Phẩm" required value={tinhtrang} onChange={(e) => settinhtrang(e.target.value)} />
  </div>

  <div class="form-group">
    <label htmlFor="title" style={{color:'blue'}}>năm</label>
    <input type="text" name="themanhsp" class="form-control" id="title" placeholder="Thế mạnh Sản Phẩm" required value={nam} onChange={(e) => setnam(e.target.value)} />
  </div>

  <div class="form-group">
    <label htmlFor="title" style={{color:'blue'}}>thể loại</label>
    <input type="text" name="themanhsp" class="form-control" id="title" placeholder="Thế mạnh Sản Phẩm" required value={theloai} onChange={(e) => settheloai(e.target.value)} />
  </div>

  <div class="form-group">
    <label htmlFor="title" style={{color:'blue'}}>quốc gia</label>
    <input type="text" name="themanhsp" class="form-control" id="title" placeholder="Thế mạnh Sản Phẩm" required value={quocgia} onChange={(e) => setquocgia(e.target.value)} />
  </div>

  <div class="form-group">
    <label htmlFor="title" style={{color:'blue'}}>đạo diễn</label>
    <input type="text" name="themanhsp" class="form-control" id="title" placeholder="Thế mạnh Sản Phẩm" required value={daodien} onChange={(e) => setdaodien(e.target.value)} />
  </div>

  <div class="form-group">
    <label htmlFor="title" style={{color:'blue'}}>diễn viên</label>
    <input type="text" name="themanhsp" class="form-control" id="title" placeholder="Thế mạnh Sản Phẩm" required value={dienvien} onChange={(e) => setdienvien(e.target.value)} />
  </div>

  <div class="form-group">
    <label htmlFor="title" style={{color:'blue'}}>thời lượng film</label>
    <input type="text" name="themanhsp" class="form-control" id="title" placeholder="Thế mạnh Sản Phẩm" required value={thoiluong} onChange={(e) => setthoiluong(e.target.value)} />
  </div>

  <div class="form-group">
    <label htmlFor="title" style={{color:'blue'}}>mô tả film</label>
    <input type="text" name="themanhsp" class="form-control" id="title" placeholder="Thế mạnh Sản Phẩm" required value={descripts} onChange={(e) => setdescripts(e.target.value)} />
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
      <th>id</th>
      <th scope="col">Title </th>
      <th scope="col">tên tiếng anh </th>
      <th scope="col">mới cập nhật</th>
      <th scope="col">tình trạng</th>
      <th scope="col">năm phát hành</th>
      <th scope="col">thể loại </th>
      <th scope="col">quốc gia</th>
      <th scope="col">đạo diễn</th>
      <th scope="col">diễn viên</th>
      <th scope="col">thời lượng/tập</th>
      <th scope="col">mô tả</th>
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
   placeholder={product.title}
   
 />
</td>

<td>
    <input
  style={{width:'80%'}}
   type="text"
   value={editnameenglish}
   onChange={(e) => seteditnameenglish(e.target.value)}
 />
</td>

<td>
 <input
   type="text"
   value={editmoicapnhat}
   onChange={(e) => seteditmoicapnhat(e.target.value)}
 />
</td>

<td>
 <input
   type="text"
   value={edittinhtrang}
   onChange={(e) => setedittinhtrang(e.target.value)}
 />
</td>

<td>
 <input
   type="text"
   value={editnam}
   onChange={(e) => seteditnam(e.target.value)}
 />
</td>

<td>
 <input
   type="text"
   value={edittheloai}
   onChange={(e) => setedittheloai(e.target.value)}
 />
</td>

<td>
 <input
   type="text"
   value={editquocgia}
   onChange={(e) => seteditquocgia(e.target.value)}
 />
</td>

<td>
 <input
   type="text"
   value={editdaodien}
   onChange={(e) => seteditdaodien(e.target.value)}
 />
</td>

<td>
 <input
   type="text"
   value={editdienvien}
   onChange={(e) => seteditdienvien(e.target.value)}
 />
</td>

<td>
 <input
   type="text"
   value={editthoiluong}
   onChange={(e) => seteditthoiluong(e.target.value)}
 />
</td>

<td>
 <input
   type="text"
   value={editdescripts}
   onChange={(e) => seteditdescripts(e.target.value)}
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

<td>{product.title}</td>
<td>{product.nameenglish}</td>
<td>{product.moicapnhat}</td>
<td>{product.tinhtrang}</td>
<td>{product.nam }</td>
<td>{product.theloai}</td>
<td>{product.quocgia}</td>
<td>{product.daodien }</td>
<td>{product.dienvien }</td>
<td>{product.thoiluong}</td>
<td>{product.descripts}</td>

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
            placeholder={pro.title}
            
          />
          </td>
           <td>
               <input
             style={{width:'80%'}}
              type="text"
              value={editnameenglish}
              onChange={(e) => seteditnameenglish(e.target.value)}
            />
          </td>
          
          <td>
            <input
              type="text"
              value={editmoicapnhat}
              onChange={(e) => seteditmoicapnhat(e.target.value)}
            />
          </td>

          <td>
            <input
              type="text"
              value={edittinhtrang}
              onChange={(e) => setedittinhtrang(e.target.value)}
            />
          </td>

          <td>
            <input
              type="text"
              value={editnam}
              onChange={(e) => seteditnam(e.target.value)}
            />
          </td>

          <td>
            <input
              type="text"
              value={edittheloai}
              onChange={(e) => setedittheloai(e.target.value)}
            />
          </td>

          <td>
            <input
              type="text"
              value={editquocgia}
              onChange={(e) => seteditquocgia(e.target.value)}
            />
          </td>

          <td>
            <input
              type="text"
              value={editdaodien}
              onChange={(e) => seteditdaodien(e.target.value)}
            />
          </td>

          <td>
            <input
              type="text"
              value={editdienvien}
              onChange={(e) => seteditdienvien(e.target.value)}
            />
          </td>

          <td>
            <input
              type="text"
              value={editthoiluong}
              onChange={(e) => seteditthoiluong(e.target.value)}
            />
          </td>

          <td>
            <input
              type="text"
              value={editdescripts}
              onChange={(e) => seteditdescripts(e.target.value)}
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
          
           <td>{pro.title}</td>
          <td>{pro.nameenglish}</td>
          <td>{pro.moicapnhat}</td>
          <td>{pro.tinhtrang}</td>
          <td>{pro.nam }</td>
          <td>{pro.theloai}</td>
          <td>{pro.quocgia}</td>
          <td>{pro.daodien }</td>
          <td>{pro.dienvien }</td>
          <td>{pro.thoiluong}</td>
          <td>{pro.descripts}</td>

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
