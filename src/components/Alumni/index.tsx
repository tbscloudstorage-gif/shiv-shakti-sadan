import FooterThree from '@/layouts/footers/FooterThree'
import HeaderOne from '@/layouts/headers/HeaderOne'
// import React from 'react'
import TeamSeven from '../team/TeamSeven'
import Breadcrumb from '../breadcrumb/Breadcrumb'

export default function index() {
  return (
    <div>
        <HeaderOne/>
        
                <Breadcrumb title="Alumni" subtitle="Alumni" breadcrumb_img="/assets/img/breadcrumb/event-1.png" />
        
        <TeamSeven/>
        <FooterThree/>

    </div>
  )
}
