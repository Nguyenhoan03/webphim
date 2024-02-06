import React from 'react'

export default function Likecompoment(prop) {
    const {datahref} = prop;

  return (
    <div style={{marginLeft:15}} class="fb-like" data-href={`http://localhost:3000/${datahref}`} data-width="250" data-layout="" data-action="" data-size="" data-share="true"></div>
  )
}
