import React, {useEffect, useState} from "react"
import first from "../assets/image/Guranteed _Returns.png"
import second from "../assets/image/Bru Tokens.png"
import third from "../assets/image/NFT.png"
import BuyBonds from "../Modal/BuyBonds"
import Welcome from "../Modal/Welcome"
import Login from "../Modal/Login"
import Borrow from "../Modal/BorrowModal"
import {getProfile} from "../services/apiService"

const NewHome = () => {
  const [buyBonds, setBuyBonds] = useState(false)
  const [welcome, setWelcome] = useState(false)
  const [login, setLogin] = useState(false)
  const [completedProfile, setCompletedProfile] = useState(false);
  const [borrow, setBorrow] = useState(false);
  const handleBuyBonds = () => setBuyBonds(false)
  const handleWelcome = () => setWelcome(false)
  const handleLogin = () => setLogin(false)
  const handleBorrow = () => setBorrow(false)

  const profile = async() => {
    const prof = await getProfile();
    //console.log(prof,'prof')
    if(prof.success){
      setCompletedProfile(true)
    }
  }
  useEffect(()=>{
    profile();
  },[])

  return (
    <div className="new-home">
      <div className="con-1">
        <div className="sub-con-1">
          <p>👋 Welcome to</p>
          <h1>
            <span className="span">Brú</span> Finance
          </h1>
        </div>
        <div className="sub-con-2">
          <p>
            Creating a new paradigm of<span className="span"> DeFi 2.5</span>,
            bringing emerging market asset backed bonds to decentralized
            finance.
          </p>
        </div>
        <div className="sub-con-3">
          <button onClick={() => setBuyBonds(true)}>Buy Bonds</button>
          <button onClick={() => setBorrow(true)}>Borrow</button>
        </div>
      </div>
      <div className="con-2">
        <h1>3-in-1 Returns</h1>
        <div className="sub-con-4">
          <div className="grid-con">
            <img src={first} alt="" />
            <h2>Guaranteed Economic Return</h2>
          </div>
          <div className="grid-con">
            <img src={second} alt="" />
            <h2>Bonus Brú Tokens</h2>
          </div>
          <div className="grid-con">
            <img src={third} alt="" />
            <h2>Social Impact NFT</h2>
          </div>
        </div>
      </div>
      <div className="disclaimer">
        <p style={{fontWeight: 700}}>Disclaimer*</p>
        <p>
          Brú Finance platform is not open to use by the residents or citizens
          of China, Iran, Russia, North Korea, or any other person, entity, or
          country on the OFAC sanction list. In addition, the platform is not
          open to use by such residents or citizens of the United States of
          America (USA) who don’t qualify as accredited investors as per the
          regulations applicable in the USA. Any person who knowingly or
          unknowingly uses the platform will be liable to Brú Finance and its
          founders, associate entities, employees or affiliate entities for any
          damage, penalties, or losses suffered by Brú and such person agrees to
          indemnify Brú from any such losses. Further, such a user of the
          platform agrees to forfeit its legal remedies, if any, against Brú
          Finance and its founders, associates, employees, or affiliates
          entities. If you are a citizen/resident of any of the countries
          mentioned above, please leave/delete this platform immediately. You
          will be proceeding on your own risk if you chose so and Brú finance
          reserves it’s rights to take such action incl. legal action as it may
          deem fit.
        </p>
      </div>
      <BuyBonds
        open={buyBonds}
        handleClose={handleBuyBonds}
        setWelcome={setWelcome}
        completedProfile={completedProfile}
      />
      <Borrow open={borrow} handleClose={handleBorrow} completedProfile={completedProfile} setLogin={setLogin}/>
      <Welcome open={welcome} handleClose={handleWelcome} setLogin={setLogin} />
      <Login open={login} handleClose={handleLogin} bond={welcome}/>
    </div>
  )
}

export default NewHome
