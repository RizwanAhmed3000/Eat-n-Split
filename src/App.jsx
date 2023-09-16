import { useState } from "react";
import "./app.css"
function App() {

  const firendsData = [
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

  const [firendsList, setFriendsList] = useState(firendsData)


  return (
    <div className="mainContainer">
      <div>
        <h1 id="mainHeading" style={{ textAlign: "center", padding: "10px 4px" }}>Eat n Split</h1>
      </div>

      <div className="container">
        <div className="cards">
          {
            firendsList.map((friend) => (
              <FriendsCard name= {friend.name} imageUrl= {friend.imageUrl} friendMoney= {friend.friendMoney}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

function FriendsCard({name, imageUrl, friendMoney}) {
  return (
    <div className="cardContainer">
      <img src={imageUrl} alt="" className="friendImage" />
      <div className="textArea">
        <h3>{name}</h3>
        {
          friendMoney  > 0 ? <p>{name} owes you {friendMoney}</p> : friendMoney < 0 ? <p>you owes {name} {Math.abs(friendMoney)}</p> : <p>we are even</p>
        }
      </div>
      <button className="selectBtn">Select</button>
    </div>
  )
}


export default App;
