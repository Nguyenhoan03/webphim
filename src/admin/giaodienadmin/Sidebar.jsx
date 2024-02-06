import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillCaretDown} from 'react-icons/ai'

export default function Sidebar() {
  return (
    <div style={{backgroundColor:'pink',}} class="sidebar" id="sidebar" role="navigation">
    <ul class="nav flex-column sticky-top" style={{paddingTop:60}}>
        <li class="nav-item">
            <a class="nav-link text-secondary" href="#">
                <h5><Link to="/Adminpanel" style={{listStyle:'none',textDecoration:'none'}}>Hi!!! minh hoàn</Link></h5>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-secondary" href="#submenu1" data-toggle="collapse" data-target="#submenu1">
                <i class="far fa-file-word font-weight-bold"></i>
                <span class="ml-3">Danh mục film ▾</span>
            </a>
            <ul class="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                <li class="nav-item">
                    <a style={{paddingLeft:28,marginTop:-13}} class="nav-link text-secondary" href="#">
                        <i class="fas fa-book-reader"></i>
                        <Link to="/product-film">Thêm film mới</Link>
                    </a>
                </li>
                <li class="nav-item">
                    <a style={{paddingLeft:28,marginTop:-13}} class="nav-link text-secondary" href="#">
                        <i class="fas fa-book-medical"></i>
                        <Link to="/admin-detail-film">Thêm chi tiết film</Link>
                    </a>
                </li>

                <li class="nav-item">
                    <a style={{paddingLeft:28,marginTop:-13}} class="nav-link text-secondary" href="#">
                        <i class="fas fa-book-medical"></i>
                        <Link to="/admin-xem-phim">Thêm tập film</Link>
                    </a>
                </li>
            </ul>
        </li>
        <li class="nav-item custom-margin">
            <a class="nav-link text-secondary" href="#">
                <i class="far fa-chart-bar font-weight-bold"></i>
                <span class="ml-3">Thể loại film</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-secondary" href="#">
                <i class="fas fa-user font-weight-bold"></i>
                <span class="ml-3">Quốc gia film</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-secondary" href="#">
                <i class="fas fa-atom font-weight-bold"></i>
                <span class="ml-3">Film</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-secondary" href="#">
                <i class="far fa-folder font-weight-bold"></i>
                <span class="ml-3">Layouts</span>
            </a>
        </li>
    </ul>
</div>

  )
}
