import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='footer' style={{width:'100%',backgroundColor:'#2D2D2D',marginTop:15,}}>
   <div className="titlegioithieufooter" style={{width:'91%',margin:' 0 auto',color:'white',marginTop:8,paddingTop:15,backgroundColor:'#2D2D2D'}}>
      PHIMGI.NET xin giới thiệu đến người xem những thể loại phim hay và đặc sắc như :

Phim lẻ Âu Mỹ: nổi bật với các phim như Hobbit, Biệt Đội Siêu Anh Hùng, Thần Sấm, Người Sắt, Taken, John Wick, Fast and Furious, Immortals, Focus, Không Đơn Độc, Green Lantern, Run All Night, 50 Sắc Thái, Cướp biển vùng Caribbe…
Phim lẻ Châu Á: được biết đến với các bộ phim như Tuổi Đôi Mươi, Bạo Phong Ngữ, Sát Phá Lang, Kiếm Rồng, Đại Thủy Chiến, Vô Gian Đạo, Xích Bích, Thập Diện Mai Phục, Chuyên Gia Bắt Ma, Sparrow…
Phim lẻ Kinh Dị: có thể nhắc đến các bộ phim như Hồi Sinh, Quỷ Quyệt, Thứ Sáu Ngày 13, Dư Âm, Cuộc Gọi Lúc Nửa Đêm, Xác Sống, Bí Ẩn Kim Tự Tháp, Kỳ Án Truyện Tranh, Tế Xác, Chơi Ngải, Búp Bê Ma Ám, Điềm Gở…
Phim lẻ Hoạt Hình: Big Hero 6, Hành Trình Trở Về, Vua Banh Bàn, Doraemon Đôi Bạn Thân, Asterix, Penguins of Madagascar, Pixar, Pokemon, Vua Banh Bàn, Frozen, Rio, Xì Trum, Hội Quái Hộp, Câu Chuyện Đồ Chơi…
Phim lẻ Khoa Học Viễn Tưởng: Transformers, Avengers, Iron Man, Interstellar, Người Thừa Kế Vũ Trụ, Vân Đồ, Bộ Tứ Siêu Đẳng, Người Truyền Ký Ức, Kẻ Hủy Diệt, Man of Steel, The Dark Knight, Giải Mã Mê Cung, Lucy…
Phim lẻ Tình Cảm: Vẫn Là Alice, Sắc Đẹp Vĩnh Cửu, Love Sick, All About Love, Khi Anh Đang Ngủ, Love Actually, Cinderella, 3 Ngày Để Yêu, Giấc Mơ Thay Đổi, Love Forecast, Cô Dâu Nổi Loạn, Lộ Thủy Hồng Nhan…
Phim lẻ Hành Động Phiêu Lưu: The Departed, Mật Vụ Kingsman, Báo Thù, Vụ Cướp Thế Kỷ, Du Khách Bí Ẩn, American Sniper, Bạch Tuyết Và Gã Thợ Săn, Inglourious Basterds, Robin Hood, Django Unchained…
Phim lẻ Hài Hước: Click, Đen Đủ Đường, Vùng Đất Thây Ma, Scary Movie, Tình Yêu Và Tình Dược, Chú Gấu Ted, The Interview, Ba Chàng Ngốc, Ninja Rùa, Gia Đình Tinh Võ, Let’s Be Cops, Hoa Điền Hỷ Sự…
Phim lẻ Võ Thuật: Truy Tìm Tượng Phật, The Raid, Thiết Quyền, Chung Quỳ Phục Ma, Kungfu Jungle, Long Hổ Môn, Shanghai Knights, Tinh Võ Anh Hùng, Hoàng Phi Hồng, Hoắc Nguyên Giáp, Diệp Vấn, Flash Point…
      </div>
      <hr style={{background:'red',width:'70%',margin:'0 auto',marginTop:15,marginLeft:180}} />
    <div className="contentfooter" style={{margin:' 0 auto',width: '75%',backgroundColor:'#2D2D2D',display:'flex',marginTop:15}}>
      
     <div className="leftfooter" style={{width:'67%',backgroundColor:'#2D2D2D',paddingTop:10}}>

   

        <p style={{color:'white',backgroundColor:'#2D2D2D'}}>Xem phim online miễn phí chất lượng cao với phụ đề tiếng việt - thuyết minh - lồng tiếng. Mọt phim có nhiều thể loại phim phong phú, đặc sắc, nhiều bộ phim hay nhất - mới nhất.</p>
        <p style={{color:'white',backgroundColor:'#2D2D2D'}}>Website phimhay.click với giao diện trực quan, thuận tiện, tốc độ tải nhanh, thường xuyên cập nhật các bộ phim mới hứa hẹn sẽ đem lại những trải nghiệm tốt cho người dùng.</p>
     </div>
     <div className="rightfooter" style={{width:'25%',backgroundColor:'#353535'}}>
     <div style={{backgroundColor:'#353535',color:'white',paddingLeft:20,margin: '0 auto',alignItems:'center',textAlign:'center',justifyContent:'center',paddingTop:10}}>
        <table style={{backgroundColor:'#353535'}}>
          <tr>
            <td style={{fontSize:14,color:'tomato'}}>quy định</td>
            <td style={{fontSize:14,color: 'tomato'}}>giới thiệu</td>
          </tr>
          <tr>
            <td><Link>điều khoản chung</Link></td>
            <td><Link>trang chủ</Link></td>
          
          </tr>

          <tr>
            <td><Link>chính sách riêng tư</Link></td>
            <td><Link>Facebook</Link></td>
           
          </tr>
        </table>
     </div>
     </div>
    </div>
        
    </div>
  )
}
