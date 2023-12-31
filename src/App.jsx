import { useState } from "react";
import "./App.css";
function App() {

  const friendsData = [
    {
      name: "Rizwan",
      imageUrl: "https://www.aquasafemine.com/wp-content/uploads/2018/06/dummy-man-570x570.png",
      friendMoney: 500,
    },
    {
      name: "kamran",
      imageUrl: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_640.png",
      friendMoney: -200,
    },
    {
      name: "Fahad",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVO3vT97IfwDPs1mnCpnmPz6Xs7vs_hBSGNmRr9o8ntiP3hV1Q3zRDlc6AmQCY-AczP5Y&usqp=CAU",
      friendMoney: 0,
    },
  ]

  const [friendsList, setFriendsList] = useState(friendsData)
  const [addFriendBox, setAddFriendBox] = useState(false)
  const [splitState, setSpliteState] = useState(false)
  const [user, setUser] = useState({})

  function addFriendHandler(name, imageUrl) {
    const addFriendList = [...friendsList];
    addFriendList.push({
      name,
      imageUrl,
      friendMoney: 0
    })
    setFriendsList(addFriendList)
  }


  return (
    <div className="mainContainer">
      <div>
        <h1 id="mainHeading" style={{ textAlign: "center", padding: "10px 4px" }}>Eat n Split</h1>
      </div>

      <div className="container">
        <div className="cards">
          {
            friendsList.map((friend) => (
              <FriendsCard name={friend.name} imageUrl={friend.imageUrl} friendMoney={friend.friendMoney} setSpliteState={setSpliteState} setUser={setUser} friend={friend} />
            ))
          }
          <button className="selectBtn" onClick={() => { setAddFriendBox(true) }}>Add Friend</button>
          {
            addFriendBox && <AddFriendBox setAddFriendBox={setAddFriendBox} addFriendHandler={addFriendHandler} />
          }
        </div>
        {
          splitState && <EatAndSplit setSpliteState={setSpliteState} friend={user} />
        }
      </div>
    </div>
  );
}
//--------------------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------------------------------------------//

// -------------------------------Friends card component--------------------------------------------//

function FriendsCard({ name, imageUrl, friendMoney, setSpliteState, setUser, friend }) {
  return (
    <div className="cardContainer">
      <img src={imageUrl} alt="" className="friendImage" />
      <div className="textArea">
        <h3>{name}</h3>
        {
          friendMoney > 0 ? <p>{name} owes you {friendMoney}</p> : friendMoney < 0 ? <p>you owes {name} {Math.abs(friendMoney)}</p> : <p>we are even</p>
        }
      </div>
      <button className="selectBtn" onClick={() => {
        setSpliteState(true)
        setUser(friend)
      }}>Select</button>
    </div>
  )
}

// -------------------------------add friend box component--------------------------------------------//

function AddFriendBox({ setAddFriendBox, addFriendHandler }) {
  const [name, setName] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  return (
    <div className="cardContainer" style={{ display: "block", backgroundColor: "orange" }}>
      <div style={{ margin: "8px 0px" }}>
        <p style={{ padding: "3px 0px" }}>Friend name</p>
        <input type="text" placeholder="Name" className="addFriendInput" onChange={(e) => setName(e.target.value)} value={name} />
      </div>
      <div style={{ margin: "8px 0px" }}>
        <p style={{ padding: "3px 0px" }}>Image URL</p>
        <input type="text" placeholder="Enter URL" className="addFriendInput" onChange={(e) => setImageUrl(e.target.value)} value={imageUrl} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>

        <button className="selectBtn" style={{ backgroundColor: "white" }} onClick={() => setAddFriendBox(false)}>Close</button>
        <button className="selectBtn" style={{ backgroundColor: "white" }} onClick={() => {
          addFriendHandler(name, imageUrl)
          setName("")
          setImageUrl("")
          setAddFriendBox(false)
        }}>Add</button>


      </div>
    </div>
  )
}

// -------------------------------eat split box component--------------------------------------------//

function EatAndSplit({ setSpliteState, friend }) {
  // console.log(friend);
  return (
    <div className="eatContainer">
      <h1 style={{ textAlign: "center" }}>Split the bill with {friend.name}</h1>
      <div className="flex">
        <h2>Bill value:</h2>
        <input type="number" className="addFriendInput" />
      </div>
      <div className="flex">
        <h2>Your expense:</h2>
        <input type="number" className="addFriendInput" />
      </div>
      <div className="flex">
        <h2>Friends expense:</h2>
        <input type="number" className="addFriendInput" />
      </div>
      <div className="flex">
        <h2>Whos paying:</h2>
        <select name="" id="" className="select">
          <option value="">You</option>
          <option value="">{friend.name}</option>
        </select>
      </div>
      <div className="flex">
        <button className="selectBtn" style={{ backgroundColor: "white" }} onClick={() => {
          setSpliteState(false)
        }}>Close</button>
        <button className="selectBtn" style={{ backgroundColor: "white" }}>Split</button>
      </div>
    </div>
  )
}

export default App;
