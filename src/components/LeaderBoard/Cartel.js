import React, { useContext } from 'react'
import './leader_cartel.css'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Col, Pagination, Row, Table } from 'react-bootstrap'
import Babymama from '../../assets/img/Characters/png/babymama.png'
import { MyContext } from '../../App'
export default function Cartel() {
  const { leaderboard, setLeaderboard } = useContext(MyContext)
  const ranks = [
    {
      rank: 1,
    },
    { rank: 2 },
    { rank: 3 },
    { rank: 4 },
    { rank: 5 },
    { rank: 6 },
    { rank: 7 },
    { rank: 8 },
    { rank: 9 },
    { rank: 10 },


  ]
  return (
    <div className='leadcartelCont'>
      <div className='toptitle'>
        <h2>LEADERBOARD</h2>
      </div>
      <div className='switcher'>
        <h6 onClick={() => setLeaderboard('leader')} >Leader</h6>
        <h6 onClick={() => setLeaderboard('cartel')} className='selected'>Cartel</h6>
      </div>
      {/* <div className='inputArea'>
        <input type="text" placeholder='Enter leader id or name' />
        <button className="mybtn mybtn-p">Search</button>
      </div> */}
      <div className='cartle__lefttitle'>
        <p className='mb-0'>My Cartel</p>
      </div>
      <p style={{marginTop:'70px', textAlign:'left', marginLeft:'10px'}}>RANK: --</p>
      {/* <div ></div> */}
      <div>


        <div className="rankContainer rankContainer2">
          <Row className='rankItemHeader'>
            <Col><p className='mb-0'>RANK</p></Col>
            <Col><p className='mb-0'>CARTEL NAME</p></Col>
            <Col><p className='mb-0'>GANG LEADERS</p></Col>
            <Col><p className='mb-0'>MEMBERS</p></Col>
            <Col><p className='mb-0'>POINTS</p></Col>
            <Col><p className='mb-0'>STARS</p></Col>
            <Col><p className='mb-0'>EST.DLZ PER DAY</p></Col>
            <Col><p className='mb-0'>OWNED BY</p></Col>
          </Row>
          {
            ranks.map((item, index) => {
              return (
                <Row key={index} className='rankItem'>
                  <Col><p>{item.rank || ''}</p></Col>
                  <Col className='d-flex align-items-center'>
                    <p>{item.name || ''}</p>
                  </Col>
                  <Col><p>{item.leader || ''}</p></Col>
                  <Col><p>{item.member || ''}</p></Col>
                  <Col><p>{item.point || ''}</p></Col>
                  <Col><p>{item.star || ''}</p></Col>
                  <Col><p>{item.point || ''}</p></Col>
                  <Col><p>{item.perday || ''}</p></Col>
                  <Col><p>{item.ownedby || ''}</p></Col>
                </Row>
              )
            })
          }
        </div>
        <div className='mypagination'>
          <div className='text-danger'>
            Page 1 of 625  (10,000)
          </div>
          <div style={{width: '100%'}} className='mt-2'>
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
          </div>
        </div>
      </div>
    </div>
  )
}
