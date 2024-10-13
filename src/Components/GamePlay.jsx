import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button } from "./styled/Button";
import Rules from "./Rules";

function GamePlay() {

  const [score,SetScore]=useState(0);
  const [selectedNumber,setSelectedNumber]=useState();
  const[currentDice,setCurrentDice]=useState(1);
  const [error,setError]=useState("");
  const [showRules,setShowRules]=useState(false);


  const genrateRandomNumber=(min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);

    };
    const roleDice=()=>{

      if(!selectedNumber) {
        setError("You have not selected any number");
        return;
      }
      

      const randomNumber= genrateRandomNumber(1,7)
      setCurrentDice((prev)=>randomNumber);
      
      if(selectedNumber==randomNumber){
        SetScore(prev=>prev+randomNumber);
      }
      else{
        SetScore((prev)=>prev-2);
      }
      setSelectedNumber(undefined);
   };

   const resetScore=()=>{
    SetScore(0);
   }
  return (
    <MainContainer>
        <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector
        error={error}
        setError={setError}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        />
        </div>
        <RoleDice currentDice={currentDice} roleDice={roleDice}/>
        <div className="btns">
          <Button onClick={resetScore}>Reset</Button>
          <Button
          onClick={()=> setShowRules((prev)=>!prev)}
          >{showRules ? "Hide" : "Show"}Rules</Button>
        </div>
        {showRules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay;

const MainContainer = styled.main`
padding-top:40px;
.top_section {
    display: flex;
    padding-top:70px;
    justify-content:space-around;
    align-items:end ;
    .btns {
      color:red;
    }
}`;