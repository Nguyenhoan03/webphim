import React, { useState } from 'react'


import Dashboard from './giaodienadmin/Dashboard';
import Navbar from './giaodienadmin/Navbar';
import Sidebar from './giaodienadmin/Sidebar';

import { useEffect } from 'react';
import axios from 'axios';

export default function Homeadmin() {


  return (
    <div style={{display:'flex'}}>
      <Navbar/>
               
                   <Sidebar style={{width:'29%'}}/>
                  <Dashboard style={{width:'70%'}}/>
         y

    </div>
  )
}
