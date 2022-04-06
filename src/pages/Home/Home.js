import React from 'react'
import {Link} from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <Link to='/mint'>Mint</Link> <br />
      <Link to='/mintresult'>Mint Result</Link> <br />
      <Link to='/staking'>Staking</Link> <br />
      <Link to='/swag'>Swag</Link> <br />
      <Link to='/breed'>Breed</Link> <br />
      <Link to='/jail'>Jail</Link> <br />
    </div>
  )
}
