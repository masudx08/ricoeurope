import React from "react";
import "./swap.css";
import Icon from '../../assets/img/Icon/Icon.png'
export default function Swap() {
  return (
    <div className="swapCont">
      <div className="container">
      <div className="section1">
        <h2 className='titleBorder'>$DLZ STAKING</h2>
        <div className='text-end mt-4'>
          <h2>3678.000</h2>
          <p className='highlight-text'>DLZ HELD</p>
        </div>
        <p className='highlight-text'>Stake your $DLZ and earn $GOTM</p>

        <div className='showAmountCont'>
          <div>
            <h2>30.000</h2>
          </div>
          <div>
            <img style={{width: '60px'}} src={Icon} alt="logo" />
          </div>
        </div>
        <p className='highlight-text' style={{fontSize:'14px', marginTop:'5px'}}>YOUR STAKED $DLZ</p>

        <div className='showAmountCont'>
          <div>
            <h2>3.000</h2>
          </div>
          <div>
            <img style={{width: '60px'}} src={Icon} alt="logo" />
          </div>
        </div>
        <p className='highlight-text' style={{fontSize:'14px', marginTop:'5px'}}>EST DAILY $GOTM</p>

        <div className='mb-4 mt-4'>
          <p>farming multiplyer x-10</p>
         <div className="btnCont">
         <button className="mybtn mybtn-p">STAKE</button>
          <button className="mybtn mybtn-p">UNSTAKE</button>
         </div>
          <p style={{fontSize:'14px', marginTop:'10px'}}>10% fee -DLZ burn when unstake</p>
        </div>
      </div>

      <div className="section2">
        <h2 className='titleBorder'>CLAIM</h2>
        <div className='text-end mt-4'>
          <h2>7895.0000</h2>
          <p className='highlight-text'>TOTAL GOTM HELD</p>
        </div>
        <div className='showAmountCont'>
          <div>24.35</div>
        </div>
        <p>your claimable $GOTM</p>

        <div>
        <div className="btnCont">
        <button className="mybtn mybtn-p">CLAIM</button>
          <button className="mybtn mybtn-p">CLAIM AND UNSTAKE ALL DLZ</button>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}
