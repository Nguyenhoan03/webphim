import React from 'react'
import {AiOutlineLeft} from 'react-icons/ai'
import {BsChevronRight} from 'react-icons/bs'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import axios from 'axios'
import {AiFillCaretDown} from 'react-icons/ai'




export default function Body() {
   
  const [position, setPosition] = useState(0);
  const filmWidth = 200; 

  const handleBtnLeft = () => {
    if (position > 0) {
      setPosition(position - filmWidth);
    }
  };

  const handleBtnRight = () => {
    setPosition(position + filmWidth);
  };

  const slideStyles = useSpring({
    transform: `translateX(-${position}px)`,
    config: { tension: 120, friction: 14 },
  });

  const totalFilms = 23; // Change this to the actual number of films

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition + filmWidth; // Move one film width to the left
        if (newPosition > filmWidth * totalFilms) {
          return 0; // Go back to the beginning after reaching the end
        }
        return newPosition;
      });
    }, 6000); // Move every 6 seconds

    return () => clearInterval(interval);
  }, []);

//dánh giá sao 
const [rating, setRating] = useState(0);

// const handleRatingChange = (newRating) => {
//     setRating(newRating);
// };
//kdfjaskdl

const [phimchieurapindex,setphimchieurapindex] = useState([]);
useEffect( ()=>{
    axios.get(`${process.env.REACT_APP_BASEURL}/api/phimchieurap`)
    .then((response)=>{
        setphimchieurapindex(response.data);
    })
},[]);

const [phimbomyindex,setphimbomyindex] = useState([]);
const [phimbohanquocindex,setphimbohanquocindex] = useState([]);
const [phimbotrungquocindex,setphimbotrungquocindex] = useState([]);
useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BASEURL}/api/phimbomoi`)
    .then((response)=>{
        setphimbomyindex(response.data.phimbomy);
        setphimbohanquocindex(response.data.phimbohanquoc);
        setphimbotrungquocindex(response.data.phimbotrungquoc);
    })
},[]);

const [phimnetflix,setphimnetflix] = useState([]);

useEffect( ()=>{
    axios.get(`${process.env.REACT_APP_BASEURL}/api/phimnetflix`)
    .then((response)=>{
        setphimnetflix(response.data);
    })
},[]);

const [phimmoicapnhat,setphimmoicapnhat] = useState([]);
console.log(phimmoicapnhat);
useEffect( ()=>{
    axios.get(`${process.env.REACT_APP_BASEURL}/api/phimmoicapnhat`)
    .then((response)=>{
        setphimmoicapnhat(response.data);
    })
},[]);

const [phimkinhdi,setphimkinhdi] = useState([]);
useEffect( ()=>{
    axios.get(`${process.env.REACT_APP_BASEURL}/api/phimkinhdi`)
    .then((response)=>{
        setphimkinhdi(response.data);
    })
},[]);


const [phimvientuong,setphimvientuong] = useState([]);
useEffect( ()=>{
    axios.get(`${process.env.REACT_APP_BASEURL}/api/phimvientuong`)
    .then((response)=>{
        setphimvientuong(response.data);
    })
},[]);

const [theloaicategory,settheloaicategory] = useState([]);
useEffect( ()=>{
    axios.get(`${process.env.REACT_APP_BASEURL}/api/categoryall`)
    .then((response)=>{
      settheloaicategory(response.data);
    })
},[]);

  const [ktralocfilm,setktralocfilm] = useState(false);
  
  const handlektralocfilm = () =>{
     setktralocfilm(!ktralocfilm);
  }


  return (
    
    <div style={{marginTop:-78,position:'relative'}} className='bodycompoment'>
     
         <div className='phimhot'>
         <div className="locfilm" style={{ display: 'flex', color: '#A5A599', justifyContent: 'space-between',cursor:'pointer' }}>
      <p className='tieudebody'>Phimhay | Xem phim hay Online | Xem phim Vietsub HD | Phim chiếu rạp mới nhất</p>
      </div>
      {ktralocfilm ? (
        <>
          <p style={{ color: 'white', cursor:'pointer'}} onClick={handlektralocfilm}>
            Lọc film <AiFillCaretDown />
          </p>
          <div>
            <select style={{ width: '25%' }} className="custom-select my-1 mr-sm-2" id="yearSelect" name="year" required>
              <option value="chọn danh mục">Năm</option>
            </select>
            <select style={{ width: '25%' }} className="custom-select my-1 mr-sm-2" id="categorySelect" name="category" required>
              <option value="chọn danh mục">Thể loại</option>
              {theloaicategory.map((tlc, index) => (
                <option key={index} value={tlc.namecategory}>
                  {tlc.namecategory}
                </option>
              ))}
            </select>
            <select style={{ width: '25%' }} className="custom-select my-1 mr-sm-2" id="countrySelect" name="country" required>
              <option value="chọn danh mục">Quốc gia</option>
            </select>
            <button className='locfilmbutton' style={{transition:'1s all',color:'white',fontWeight:550, width: 150, background: 'red', float: 'right', alignItems: 'center', borderRadius: 7, height: 35 }}>
              Lọc film
            </button>
          </div>
        </>
      ) : (
        <>
          <p style={{ color: 'white' ,cursor:'pointer',transition:'1s all'}} onClick={handlektralocfilm}>
            Lọc film <AiFillCaretDown />
          </p>
        </>
      )}
   
      
  
            <p style={{color:'#B06B46',fontSize:29}}>PHIM MỚI CẬP NHẬT</p>
         
               <div className='dsfilm'>
                {
                    phimmoicapnhat.map(pmcn=>(
                        <animated.div className='thefilm' style={slideStyles}>

                        <Link to={`/${pmcn.Name}`}>
                        {
                        pmcn.image && pmcn.image.includes('ophim9.cc') ? (
                          <img src={pmcn.image} style={{width:180,height: 256}} alt="" />
                        ) : (
                          <img src={`${process.env.REACT_APP_BASEURL}/upload/${pmcn.image}`} style={{width:180,height: 256}}/>
                        )
                      }

                       
                           
                            
                             <p style={{fontSize:13,fontFamily:'sans-serif'}}>{pmcn.Name}</p>
                             </Link>
                         </animated.div>
                    ))
                }
                
    
                 
                
               </div>
       

           <div>
                <AiOutlineLeft onClick={handleBtnLeft} style={{fontSize:21,zIndex:7,color:'red',position:'absolute',backgroundColor:'#353231',marginTop:-155,width:40,height:58,color:'white',marginLeft:6,cursor:'pointer'}}/>
               </div>
               <div style={{float:'right',alignItems:'center',marginRight:45}}>
               <BsChevronRight onClick={handleBtnRight} style={{fontSize:21,color:'red',position:'absolute',zIndex:7,backgroundColor:'#353231',marginTop:-155,width:40,height:58,color:'white',cursor:'pointer'}}/>
               </div>
         </div>

          
          <div className="danhmucfilm" >
         <div className="leftdanhmucfilm" style={{marginTop:20}}>
            <div className='phimhotdanhmucfilm' style={{width: '100%'}}>
            
            <p style={{color:'white ',alignItems:'center',textAlign:'center',justifyContent:'center',fontSize:20,fontFamily:"fantasy",fontWeight:550,width: 190,height:33,borderRadius:15,backgroundColor:'#303032'}}>PHIM BỘ MỚI</p>
           <div className="phimhotchung" style={{marginTop:15}}>
            {
                phimbomyindex.map(pbm=>(
                
                    <div className="thefilmphimhot">
                      <Link to={`/${pbm.Name}`}>
                      <img src={`${process.env.REACT_APP_BASEURL}/upload/${pbm.image}`} alt="" />

                      <p style={{fontSize:13,fontFamily:'sans-serif'}}>{pbm.Name}</p>
                      </Link>
                  </div>
                ))
            }

{
                phimbohanquocindex.map(pbhq=>(
                    <div className="thefilmphimhot">
                     <Link to={`/${pbhq.Name}`}>
                     <img src={`${process.env.REACT_APP_BASEURL}/upload/${pbhq.image}`} alt="" />
                      <p style={{fontSize:13,fontFamily:'sans-serif'}}>{pbhq.Name}</p>
                      </Link>
                  </div>
                ))
            }


{
                phimbotrungquocindex.map(pbtq=>(
                    <div className="thefilmphimhot">
                    <Link to={`/${pbtq.Name}`}>
                    <img src={`${process.env.REACT_APP_BASEURL}/upload/${pbtq.image}`} alt="" />
                      <p style={{fontSize:13,fontFamily:'sans-serif'}}>{pbtq.Name}</p>
                      </Link>
                  </div>
                ))
            }
          

          
           </div>
           <button style={{backgroundColor:'#202025',width:'70%',margin:'0 auto',borderRadius:15,marginTop:8,fontSize:18,height:35,fontWeight:550,color:'white'}}><Link to="phim-bo-my"> XEM TẤT CẢ</Link></button>

         </div>




         <div className='phimchieurapdanhmucfilm' style={{marginTop:15}}>
         <p style={{color:'white ',alignItems:'center',textAlign:'center',justifyContent:'center',fontSize:20,fontFamily:'fantasy',fontWeight:550,width: 190,height:33,borderRadius:15,backgroundColor:'#303032'}}>PHIM CHIẾU RẠP</p>
           
         <div className="phimhotchung" style={{marginTop:15}}>
            
            {
                phimchieurapindex.map((pcr)=>(

                    <div className="thefilmphimhot">
                      <Link to={`/${pcr.Name}`}>
                      <img src={`${process.env.REACT_APP_BASEURL}/upload/${pcr.image}`} alt="" />
                      <p style={{fontSize:13,fontFamily:'sans-serif'}}>{pcr.Name}</p>
                      </Link>
                
                  </div>
                ))
            }
           

           

           </div>
           <button style={{backgroundColor:'#202025',width:'70%',margin:'0 auto',borderRadius:15,marginTop:8,fontSize:18,height:35,fontWeight:550,color:'white'}}><Link to="/phim-chieu-rap"> XEM TẤT CẢ </Link></button>


         </div>


         <div className='phimnetfilxdanhmucfilm' style={{marginTop:15}}>
         <p style={{color:'white ',alignItems:'center',textAlign:'center',justifyContent:'center',fontSize:20,fontFamily:'fantasy',fontWeight:550,width: 190,height:33,borderRadius:15,backgroundColor:'#303032'}}>PHIM NETFILX MỚI</p>
           
         <div className="phimhotchung" style={{marginTop:15}}>
            {
            phimnetflix.map(pnflix=>(
                <div className="thefilmphimhot">
                <Link to={`/${pnflix.Name}`}>
                <img src={`${process.env.REACT_APP_BASEURL}/upload/${pnflix.image}`} alt="" />
                  <p style={{fontSize:13,fontFamily:'sans-serif'}}>{pnflix.Name}</p>
                  </Link>
              </div>
            ))
}
           

       

           </div>
           <button style={{backgroundColor:'#202025',width:'70%',margin:'0 auto',borderRadius:15,marginTop:8,fontSize:18,height:35,fontWeight:550,color:'white'}}><Link to="/phim-netflix"> XEM TẤT CẢ </Link></button>



         </div>
         </div>

         <div className="rightdanhmucfilm" style={{marginTop:35,}}>
             <div className="rightchung">
            <div className='phimkinhdiright'>
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



                </div>

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
    
  )
}
