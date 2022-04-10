import React from 'react'
import { Link } from 'react-router-dom'
import About from '../../components/Home/About'
import Assets from '../../components/Home/Assets'
import Attack from '../../components/Home/Attack'
import Header from '../../components/Home/Header'
import Slider from '../../components/Slider/Slider'
export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <div style={{padding: '50px 0', background:'#1d1c1c'}}>
        <Slider />
      </div>
      <Attack />
      <Assets />
    </div>
  )
}

{/* <Link to='/mint'>Mint</Link> <br /><Link to='/mintresult'>Mint Result</Link> <br /><Link to='/staking'>Staking</Link> <br /><Link to='/swag'>Swag</Link> <br /><Link to='/breed'>Breed</Link> <br /><Link to='/jail'>Jail</Link> <br /><p>Breed Results</p><Link to='/b/babymama'>BabyMama</Link> <br /><Link to='/b/babythief'>BabyThief</Link> <br /><Link to='/b/failure'>Failure</Link> <br /><Link to='/b/guard'>Guard</Link> <br /><Link to='/b/leader'>Leader</Link> <br /><Link to='/b/member'>Member</Link> <br /><Link to='/b/police'>Police</Link> <br /><Link to='/b/spy'>Spy</Link> <br /><Link to='/b/thief'>Thief</Link> <br /><Link to='/b/twin'>Twin</Link> <br /><Link to='/b/triplet'>Triplet</Link> <br /> */}