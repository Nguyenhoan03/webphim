import React from 'react'
import Header from './header-footer/Header'
import Footer from './header-footer/Footer'
import {AiFillCaretDown,AiFillCaretRight} from 'react-icons/ai'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Button, Container, Image } from 'react-bootstrap';
import Likecompoment from '../pluginfb/Likecompoment';
import Commentcompoment from '../pluginfb/Commentcompoment';



export default function Detailfilm() {

const [tapfilm,settapfilm] = useState([]);
  const [rating, setRating] = useState(0);
  const [ktbutton,setktbutton] = useState(false);
  
  const toggleChonTap = () => {
    setktbutton(!ktbutton); // Đảo ngược giá trị của biến ktbutton khi nút "Chọn tập" được nhấn
  };
  


const [phimvientuong,setphimvientuong] = useState([]);
useEffect( ()=>{
    axios.get(`${process.env.REACT_APP_BASEURL}/api/phimvientuong`)
    .then((response)=>{
        setphimvientuong(response.data);
       
    })
},[]);

const { title } = useParams(); // Lấy giá trị title từ URL

const [detailfilm, setDetailFilm] = useState([]);



useEffect(() => {
  const sanitizedTitle = title.replace(/-/g, '–');

  axios.get(`${process.env.REACT_APP_BASEURL}/api/${sanitizedTitle}`)
    .then((response) => {
      setDetailFilm(response.data);
    

    })
    .catch((error) => {
      console.error('Error fetching film details:', error);
    });
}, []);

useEffect(()=>{
   axios.get(`${process.env.REACT_APP_BASEURL}/api/gettapfilm/${title}`)
   .then(response=>{
    settapfilm(response.data);
   })

},[]);


  return (
    <div style={{backgroundColor:'black'}}>
      <Header/>

<div className="bodydetailfilm" style={{width:'100%',marginTop:-92}}>
    <div className="contentbodydetail" style={{margin: '0 auto',display:'flex',width:'75%'}}>
     
    <div className="leftcontentbodydetail">
    <div className="gop2phan" style={{display:'flex'}}>
      <div className="anhdetailfilm">
      <img src={`${process.env.REACT_APP_BASEURL}/upload/${detailfilm.product?.image}`}  alt="" className="anhdetailfilm-img img-fluid" />

        <div className="anhdetailfilm-buttons">
        <button onClick={toggleChonTap} className={`chon-tap-button ${ktbutton ? 'rotated' : ''}`}>
        <AiFillCaretRight className='AiFillCaretRight' style={{ marginTop: -7 }} /> Chọn tập
      </button>
        <button className="xem-phim-button" style={{marginLeft:10}}><AiFillCaretRight style={{marginTop:-7}}/> <Link style={{color:'tomato',textDecoration:'none'}} to={`/xem-phim/${detailfilm.title}/tap-1`}>Xem phim</Link></button>
        </div>
      </div>
        <div className="thongtindetailfilm">
          <h2 className="film-title">{detailfilm.title}</h2>
          <p style={{fontSize:16,marginTop:-15}} className="film-nameenglish">( {detailfilm.nameenglish} )</p>
          <hr />
          <div className="film-info" style={{marginTop:-10}}>
            <p>Mới cập nhật: <span style={{color:'tomato'}} className="update-button">{detailfilm.moicapnhat}</span></p>
            <hr />
            <p>Tình trạng: <span style={{color:'tomato'}}>{detailfilm.tinhtrang}</span></p>
            <hr />
            <p>Năm: <span style={{color:'tomato'}}> {detailfilm.nam}</span></p>
            <hr />
            <p>Thể loại: <span style={{color:'tomato',}}> {detailfilm.theloai}</span></p>
            <hr />
            <p>Quốc gia : <span style={{color:'tomato'}}> {detailfilm.quocgia}</span></p>
            <p>Đạo diễn : <span style={{color:'tomato'}}> {detailfilm.daodien}</span></p>
            <p>Diễn viên: <span style={{color:'tomato'}}> {detailfilm.dienvien}</span></p>
            <p>Thời lượng: <span style={{color:'tomato'}}> {detailfilm.thoiluong}</span></p>
          </div>
        </div>
      </div>
      <div className={`chontapfilm ${ktbutton ? 'show' : 'hide'}`}>
        <button className="server-button" style={{backgroundColor:'tomato'}}>Server #1</button>
       
        {
          tapfilm.map(tapf=>(
            <Link to={`/xem-phim/${detailfilm.title}/tap-${tapf.episode}`}> <button className="episode-button">tập {tapf.episode}</button> </Link>
          ))
        }
       
        {/* Thêm các nút tập khác ở đây */}
      </div>
      <div  style={{borderRadius:10}} className="motaphim">
        <p style={{fontSize:15,fontWeight:550,color:'white',paddingTop:8  }}>Tóm tắt phim</p>
        <div style={{marginTop:-8,paddingLeft:8}}>
        <span style={{color:'#A2A2A2'}}>{detailfilm.title} - </span>
        <span style={{color:'#A2A2A2'}}>{detailfilm.descripts}</span>
      </div>
    
      </div>
      <div>
        <div style={{width:'100%',display:'flex',marginTop:10}}>
        <p style={{color:'white'}}> chia sẻ </p>
       <Likecompoment datahref={title}/>
   
        </div>
       <span style={{color:'white',fontSize:14,fontWeight:550}}>bình luận</span>
      <Commentcompoment datahrefcomment={title} />
      </div>
      
    </div>
  
      <div className="rightcontentbodydetail">
      <div className="rightdanhmucfilm" style={{width:'100%'}}>
             <div className="rightchung">
        

                <div className='phimkinhdiright' style={{marginTop:20}}>
                <h3 style={{color:'white',color:'yellow',borderBottom:'4px solid gray'}}>PHIM VIỄN TƯỞNG</h3>

                {
                    phimvientuong.map(pvtuong=>(
                        <div className="filmrightcon" style={{marginTop:18,height:95,display:'flex'}}>
                         
                        <img style={{width:75,height:95,borderRadius:8}} src={`${process.env.REACT_APP_BASEURL}/upload/${pvtuong.image}`} alt="" />
                        <div className="titlecon">
                    
                        <a href={`/${pvtuong.Name}`}>
          <p style={{
            fontSize: 19,
            width: '100%',
            paddingLeft: 15,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          }}>
            {pvtuong.Name}
          </p>
        </a>


                        <p style={{fontSize:17,color:'yellow',paddingLeft:15,paddingTop:8}}>176 lượt xem</p>
    
    
                         
               
                          
                        </div>
                    </div>
                    ))
                }


                <button style={{backgroundColor:'#202025',width:'100%',margin:'0 auto',borderRadius:15,marginTop:25,fontSize:17,height:27,fontWeight:550,color:'white',}}><Link to="/phim-vien-tuong">XEM TẤT CẢ</Link> </button>



                </div>
           
             </div>
         </div>
      </div>
      
    </div>
    
</div>

<Footer/>
     
    </div>
  )
}
