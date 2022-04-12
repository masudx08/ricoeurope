import React, { useContext } from 'react'
import { MyContext } from '../../App'
import Cartel from '../../components/LeaderBoard/Cartel'
import Leader from '../../components/LeaderBoard/Leader'
import './leaderboard.css'

export default function LeaderBoard() {
  const {leaderboard, setLeaderboard} = useContext(MyContext)
  return (
    <div className='leaderboardCont'>
      <div className="container">
        {
          leaderboard == 'leader' && <Leader />
        }
        {
          leaderboard == 'cartel' && <Cartel />
        }
      </div>
    </div>
  )
}
