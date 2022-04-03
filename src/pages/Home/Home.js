import React from 'react'
import {Link} from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <Link to='/mint'>Mint</Link> <br />
      <Link to='/stake'>Stake</Link> <br />
      <Link to='/swag'>Swag</Link> <br />
      <Link to='/breed'>Breed</Link> <br />
      <Link to='/gangs'>Gangs</Link> <br />
      <Link to='/store'>Store</Link> <br />
      <Link to='/map'>Map</Link> <br />
      <Link to='/swap'>Swap</Link> <br />
    </div>
  )
}
