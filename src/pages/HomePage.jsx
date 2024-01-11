import React from 'react'
import Pic from '../assets/profile.jpg'
import { FaCaretDown } from "react-icons/fa";
import StackedBarChart from '../components/BaeGraph';
import CircularWithValueLabel from '../components/CirculatProgress'
import NativeSelectDemo from '../components/SelectComponent';
import CustomSlider from '../components/CustomizedSlider';
import { NavLink } from 'react-router-dom';
function HomePage() {
  return (
    <div className="homePageContainer">
      <div className="personalInfoSection">
        <div className="profileSection">
          <img className='profilePic' src={Pic} alt="profile" />
          <div className="profileText">
            <h2>Hi Sumit,</h2>
            <p>Welcome Back.</p>
          </div>
        </div>
        <div className="profileBalanceSection">
          <h1 className="balance-date-text" >Today</h1>
          <div className="accountBalanceInfo">
            <h1>$19,892</h1>
            <p>Account Balance</p>
          </div>
          <div className="contributionInfo">
            <h3>$4,000</h3>
            <p>Year To Date Contribution</p>
          </div>
          <div className="intrestInfo">
            <h3>$1,892</h3>
            <p>Total Intrest</p>
          </div>
          <button className="iWantToButton" onClick={()=> alert("I Want to Click :)")} >I want to <FaCaretDown /></button>
        </div>
        <div className="recentTransactions">
          <h3>Recent Transaction</h3>
          <div className="transactions">
            <p>2020-08-07</p>
            <h4>Withdrawal transfer to bank-xxx11</h4>
          </div>
          <hr />
          <div className="transactions">
            <p>2020-07-21</p>
            <h4>Withdrawal transfer to bank-xxx11</h4>
          </div>
          <hr />
          <div className="transactions">
            <p>2020-07-16</p>
            <h4>Withdrawal transfer to bank-xxx11</h4>
          </div>
          <hr />
        </div>
      </div>
      <div className="statsInfoSection">
        <div className="statsInfoSectionContainer">
          <div className="topText">
            <p>Retierment Income</p>
            <h3>Starting Year 2056</h3>
          </div>
          <div className="topStats">
            <div className="stat">
              <h2>$300,000</h2>
              <p>My Goal</p>
              <hr />
            </div>
            <div className="stat">
              <h2>59%</h2>
              <p>Goal Achieved</p>
              <hr />
            </div>
            <div className="stat">
              <h2>$300</h2>
              <p>Est. Monthly Income</p>
              <hr />
            </div>
          </div>
          <div className="graphSection">
            <h4>Contributions Overtime</h4>
            <div className="graph">
              <StackedBarChart />
            </div>
          </div>
          <div className="compareSection">
            <h3>How do I compare to my peers?</h3>
            <p>These numbers represent current goal achievment</p>

            <div className="compareSectionDataShowcase">
              <div className="selections">
                <NativeSelectDemo lable={'Age'} margin={'28px'} value={{a:'Under 30'}} />
                <NativeSelectDemo lable={'Salery'} margin={'9px'} value={{a:'K 20 - K 30'}} />
                <NativeSelectDemo lable={'Gender'} margin={'2px'} value={{a:'Male',b:'Female',c:'Other'}} />
              </div>
              <div className="progressSection">
                <div className="progress">
                <CircularWithValueLabel value={78} />
                <p>Average</p>
                </div>
                <div className="progress">
                <CircularWithValueLabel value={95} />
                <p>Top</p>
                </div>
                <div className="progress progress3">
                <CircularWithValueLabel value={59} />
                <p>Me</p>
                </div>
            </div>

            </div>
          </div>
        </div>
      </div>
      <div className="thirdSection">
        <div className="retiermentStrategyOuterBox">
          <div className="retiermentStrategyBox">
            <h3 className='retiermentText' >Retierment Strategy</h3>
            <p className="sliderLabel">Employee Contribution</p>
            <CustomSlider defaultValue={45} />
            <p className="sliderLabel">Intrest Rate</p>
            <CustomSlider defaultValue={65} />
            <hr />
          </div>
          <div className="percentageDataBox">
            <div className="percentageData">
              <h4>Employer Contribution</h4>
              <p>8.4%</p>
            </div>
            <div className="percentageData">
              <h4>Intrest Rate</h4>
              <p>5%</p>
            </div>
          </div>
          <div className="updateButtonBox">
            <button className='updateButton' onClick={(()=>alert('Update'))} >Update</button>
          </div>
          <div className="helpDocsLink">
            <NavLink>{`View Help Doc >`}</NavLink>
          </div>
        </div>
        <div className="adBox">
          <p className="adText1">Are you considering a </p>
          <p className="adText2">Housing Advance?</p>
          <p className="adText3">Limited time reduced intrest.</p>
          <NavLink>{`Learn more >`}</NavLink>
        </div>
      </div>
    </div>
  )
}

export default HomePage