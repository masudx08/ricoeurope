import React, { useState } from 'react'
import './attack.css'
import ItemImg1 from '../../assets/img/Attack_Defence_Items/tripmine_gold1.png'
import ItemImg2 from '../../assets/img/Attack_Defence_Items/attackdog2.png'
import ItemImg3 from '../../assets/img/Attack_Defence_Items/droneattack3.png'
import ItemImg4 from '../../assets/img/Attack_Defence_Items/EMP4.png'
import ItemImg5 from '../../assets/img/Attack_Defence_Items/facerecognition5.png'
import ItemImg6 from '../../assets/img/Attack_Defence_Items/gasmask6.png'
import ItemImg7 from '../../assets/img/Attack_Defence_Items/wirecutters_zoomin7.png'
import ItemImg8 from '../../assets/img/Attack_Defence_Items/meat8.png'
import ItemImg9 from '../../assets/img/Attack_Defence_Items/alarm9.png'
import ItemImg10 from '../../assets/img/Attack_Defence_Items/metal detector10.png'
import ItemImg11 from '../../assets/img/Attack_Defence_Items/nightvision11.png'
import ItemImg12 from '../../assets/img/Attack_Defence_Items/poisongas12.png'
import MyVideo from '../../assets/video/Attack Videos/gangmeta_items_02_tripmines_02.mp4'
export default function Attack() {
  const [play, setPlay] = useState(false)
  const items1 = [
    {img: ItemImg1},
    {img: ItemImg2},
    {img: ItemImg3},
    {img: ItemImg4},
    {img: ItemImg5},
    {img: ItemImg6},
  ]
  const items2 = [
    {img: ItemImg7},
    {img: ItemImg8},
    {img: ItemImg9},
    {img: ItemImg10},
    {img: ItemImg11},
    {img: ItemImg12},
  ]
  return (
    <div className='attackCont'>
      <h2 className='highlight-text mb-5'>Items for attacking and defending</h2>
      <div className="items_1">
        {
          items1.map((item, index)=>{
            return (
              <div className='item'>
                <img src={item.img} alt="" />
              </div>
            )
          })
        }
      </div>
      <div className="items_2 mt-4">
        {
          items2.map((item, index)=>{
            return (
              <div className='item'>
                <img src={item.img} alt="" />
              </div>
            )
          })
        }
      </div>

      <div>
      <video className='myvideo' src={MyVideo} controls={false} muted autoPlay={true} preload="auto" loop>
         video  is not supported here
      </video>
      </div>
    </div>
  )
}
