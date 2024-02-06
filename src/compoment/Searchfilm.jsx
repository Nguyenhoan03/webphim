import React from 'react';
import Header from "./header-footer/Header";

import Foooter from "./header-footer/Footer";
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function Searchfilm() {
    const {slug} = useParams();
  
//     const [phimkinhdi,setphimkinhdi] = useState([]);
// useEffect( ()=>{
//     axios.get(`${process.env.REACT_APP_BASEURL}/api/phimkinhdi`)
//     .then((response)=>{
//         setphimkinhdi(response.data);
//     })
// },[]);


const [phimvientuong,setphimvientuong] = useState([]);
useEffect( ()=>{
    axios.get(`${process.env.REACT_APP_BASEURL}/api/phimvientuong`)
    .then((response)=>{
        setphimvientuong(response.data);
    })
},[]);


const [dulieusearch,setdulieusearch] = useState([]);
useEffect( ()=>{
    axios.get(`${process.env.REACT_APP_BASEURL}/api/tim_kiem/${slug}`)
    .then((response)=>{
        setdulieusearch(response.data);
    })
},[]);
  return (
    <div style={{backgroundColor:'black',width:'100%'}}>
        <Header />
     

        <div style={{marginTop:-78,position:'relative'}} className='bodycompoment'>
     
     <div className='phimhot'>
     <div className="locfilm" style={{ display: 'flex', color: '#A5A599', justifyContent: 'space-between',cursor:'pointer' }}>
  <p className='tieudebody'>Phimhay | Xem phim hay Online | Xem phim Vietsub HD | Phim chiếu rạp mới nhất</p>
  </div>


  

   

    
      
      <div className="danhmucfilm" style={{marginTop:-20}}>
     <div className="leftdanhmucfilm" style={{marginTop:20,width:'100%'}}>
        
     <div className="phimnetfilxdanhmucfilm" style={{ marginTop: 15 }}>
  <p style={{
    color: 'white',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontFamily: 'fantasy',
    fontWeight: 550,
    width: '190px',
    height: '33px',
    borderRadius: '15px',
    backgroundColor: '#303032',
    margin: '0 auto',
  }}>
    Kết quả tìm kiếm: {slug}
  </p>

  <div className="phimhotchung" style={{ marginTop: 15, }}>
    {dulieusearch.map(pnflix => (
      <div className="thefilmphimhot" key={pnflix.Name}>
        <Link to={`/${pnflix.Name}`}>
          <img src={`${process.env.REACT_APP_BASEURL}/upload/${pnflix.image}`} alt={pnflix.Name} />
          <p style={{ fontSize: 13, fontFamily: 'sans-serif' }}>{pnflix.Name}</p>
        </Link>
      </div>
    ))}
  </div>
</div>

     </div>

     <div className="rightdanhmucfilm" style={{marginTop:35,width:'100%'}}>
         <div className="rightchung">
        {/* <div className='phimkinhdiright'>
            <h3 style={{color:'white',color:'yellow',borderBottom:'4px solid gray'}}>PHIM KINH DỊ</h3>
           {
            phimkinhdi.map(pkdi=>(
                <div className="filmrightcon" style={{marginTop:18,height:95,display:'flex'}}>
                <img style={{width:75,height:95,borderRadius:8}} src={`${process.env.REACT_APP_BASEURL}/upload/${pkdi.image}`} alt="" />
                <div className="titlecon">
              <p style={{
fontSize: 17,
width: '100%',
paddingLeft: 15,
overflow: 'hidden',
textOverflow: 'ellipsis',
display: '-webkit-box',
WebkitLineClamp: 2,
WebkitBoxOrient: 'vertical'
}}>
<Link to={`/${pkdi.Name}`}>{pkdi.Name}</Link>
</p>

                <p style={{fontSize:17,color:'yellow',paddingLeft:15,paddingTop:8}}>176 lượt xem</p>


                
                  
                </div>
            </div>
            ))
           }
           
           

           

            <button style={{backgroundColor:'#202025',width:'100%',margin:'0 auto',borderRadius:15,marginTop:25,fontSize:17,height:27,fontWeight:550,color:'white',}}><Link to="phim-kinh-di"> XEM TẤT CẢ </Link></button>



            </div> */}

            <div className='phimkinhdiright' style={{marginTop:20}}>
            <h3 style={{color:'white',color:'yellow',borderBottom:'4px solid gray'}}>PHIM VIỄN TƯỞNG</h3>

            {
                phimvientuong.map(pvtuong=>(
                    <div className="filmrightcon" style={{marginTop:18,height:95,display:'flex'}}>
                    <img style={{width:75,height:95,borderRadius:8}} src={`${process.env.REACT_APP_BASEURL}/upload/${pvtuong.image}`} alt="" />
                    <div className="titlecon">
                    <p style={{
fontSize: 17,
width: '100%',
paddingLeft: 15,
overflow: 'hidden',
textOverflow: 'ellipsis',
display: '-webkit-box',
WebkitLineClamp: 2,
WebkitBoxOrient: 'vertical'
}}>
<Link to={`/${pvtuong.Name}`}>{pvtuong.Name}</Link>
</p>

                    <p style={{fontSize:17,color:'yellow',paddingLeft:15}}>176 lượt xem</p>


                      
           
                      
                    </div>
                </div>
                ))
            }

          

         

            

            <button style={{backgroundColor:'#202025',width:'100%',margin:'0 auto',borderRadius:15,marginTop:25,fontSize:17,height:27,fontWeight:550,color:'white',}}><Link to="phim-vien-tuong">XEM TẤT CẢ </Link></button>



            </div>
       
         </div>
     </div>
     </div>

</div>


        <Foooter/>
    </div>
    </div>
  )
}


