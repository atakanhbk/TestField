import { useState } from "react";
import "./App.css";
import FirstPerson from "./PersonInfos/FirstPerson";
import SecondPerson from "./PersonInfos/SecondPerson";
import ThirdPerson from "./PersonInfos/ThirdPerson";

function App() {
  const [infoList, setInfoList] = useState([]);
  

  const handeInfoList = (value) => {
    setInfoList([...infoList,value])
  }

  const handleShowAllInfos = () => {
    console.log(infoList);
    return 10;
  }
  return (
    <div className="App">
      <FirstPerson info={handeInfoList}/>
      <SecondPerson info={handeInfoList} />
      <ThirdPerson  info={handeInfoList}/>

      <button onClick={handleShowAllInfos} style={{ marginTop: "100px" }}>Show All Person List</button>

    </div>
  );
}

export default App;
