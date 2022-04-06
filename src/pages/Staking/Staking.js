import React, {useContext} from 'react'
import { MyContext } from '../../App'
import Stake from '../../components/Stake/Stake'
import UnStake from '../../components/UnStake/UnStake'
import './staking.css'

export default function Staking() {
  const {staking, setStaking} = useContext(MyContext)
  return (
    <div className='stakingCont'>
      <h1>Staking</h1>
      <div className='stake__switch mb-5'>
        <h6 className={staking=='stake'?'stake selected':'stake'} onClick={()=>setStaking('stake')}>Staked #12</h6>
        <h6 className={staking=='unstake'?'unstake selected':'unstake'} onClick={()=>setStaking('unstake')}>UnStaked #3</h6>
      </div>
      {
        staking == 'stake' &&
        <Stake />
      }
      {
        staking == 'unstake' &&
        <UnStake />
      }
    </div>
  )
}
