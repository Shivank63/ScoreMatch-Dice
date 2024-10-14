
import styled from "styled-components";

function RoleDice({roleDice,currentDice})
 {


   
   
  return (
    <DiceContainer>
    <div className="dice" onClick={roleDice}>
        <img src={`dice_${currentDice}.png`} alt="dice 1"/>
    </div>
    <p>Click on Dice to Roll</p>
    </DiceContainer>
  )
};

export default RoleDice;


const DiceContainer=styled.div`
    display:flex;
    margin-top: 48px;
    flex-direction:column;
    align-items: center;
    .dice{
    cursor: pointer;
    }

    .p{
      font-size: 24px;
    }

`;