import React from 'react'
import Header from './header-footer/Header'
import Footer from './header-footer/Footer'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { Button, Container, Image } from 'react-bootstrap';


export default function Xemfilm() {
 
  const[xemphim,setxemphim] = useState([]);
  const [rating, setRating] = useState(0);
  const { title, episode } = useParams();
 
  const cleanedEpisode = episode.replace('tap-', '');

  const [tapfilm,settapfilm] = useState([]);


  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BASEURL}/api/gettapfilm/${title}`)
    .then(response=>{
     settapfilm(response.data);
    })
 
 },[]);


  const [phimvientuong,setphimvientuong] = useState([]);
  useEffect( ()=>{
      axios.get(`${process.env.REACT_APP_BASEURL}/api/phimvientuong`)
      .then((response)=>{
          setphimvientuong(response.data);
      })
  },[]);

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BASEURL}/api/gettapfilm/${title}`)
    .then(response=>{
     settapfilm(response.data);
   
    })
 
 },[]);

 useEffect(()=>{
  axios.get(`${process.env.REACT_APP_BASEURL}/api/getxemphim/${title}/${cleanedEpisode}`)
  .then(response=>{
    setxemphim(response.data);
    console.log( 'ưdsfarg', response.data.linkfilm);
 
  })

},[]);

const handleclick = (episode) => {
  const newURL = `/xem-phim/${title}/tap-${episode}`;
  window.location.href = newURL;
}
  
  return (
    
    <div style={{backgroundColor:'#161619'}}>
      <Header/>
     
    
      <div className="containerxemphim" style={{width: '75%',margin:'0 auto',display:'flex',marginTop:-68}}>
       
          <div className="leftxemphim" style={{width:'100%'}}>
          <p style={{color:'white'}}>phimhay.net ▶▶ <span style={{color:'#A5A5A5'}}> {xemphim.titlefilm}</span> - tập {xemphim.episode}</p>
          <iframe style={{width:'100%',height:394,border:'none'}} class="embed-responsive-item" src={xemphim.linkfilm} allowfullscreen=""></iframe>
          
       
         <div style={{marginTop:15}}>
        <Button className="server-button" style={{backgroundColor:'tomato'}}>Server #1</Button>
       
        <div>
      {tapfilm.map(tapf => (
        
          <Button
            className="episode-button"
            style={{marginLeft:5,marginTop:5,
              backgroundColor: xemphim.episode === tapf.episode ? '#007bff' : 'gray'
            }}
            onClick={() => handleclick(tapf.episode)}
          >
            Tập {tapf.episode}
          </Button>
      
      ))}
    </div>

     
      </div>

      <div>
        <div style={{width:'100%',display:'flex',marginTop:10}}>
        <p style={{color:'white'}}> chia sẻ </p>
       
        <div style={{marginLeft:15}} class="fb-like" data-href="http://localhost:3000/B%E1%BA%A0CH%20H%E1%BB%92:%20T%C3%8CNH%20DUY%C3%8AN" data-width="250" data-layout="" data-action="" data-size="" data-share="true"></div>
        </div>
       <span style={{color:'white',fontSize:14,fontWeight:550}}>bình luận</span>
       <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-width="90%" data-numposts="8"></div>
      </div>

          </div>

         

          {/* fzdfbdf */}

          <div className="rightcontentbodydetail"style={{marginLeft:20}}>
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

   <Link to={`/${pvtuong.Name}`}>{pvtuong.Name}</Link>
</p>
</a>
                        <p style={{fontSize:17,color:'yellow',paddingLeft:15,paddingTop:8}}>176 lượt xem</p>
    
    
                     

                          
                        </div>
                    </div>
                    ))
                }

              

             

                

                <button style={{backgroundColor:'#202025',width:'100%',margin:'0 auto',borderRadius:15,marginTop:25,fontSize:17,height:27,fontWeight:550,color:'white',}}>XEM TẤT CẢ</button>



                </div>
           
             </div>
         </div>
      </div>

      </div>
      <Footer/>
    </div>
  )
}
