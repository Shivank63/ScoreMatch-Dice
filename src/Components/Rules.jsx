import styled from "styled-components"


function Rules() {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <div className="text">
        <p>*Select any Number</p>
        <p>*Click on dice image</p>
        <p>
            *After click on dice if selected number is equal to dice number you will get same point as dice{" "}
        </p>
        <p>*If you get wrong guess then 2 point will be deducted</p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer=styled.div`
margin: 0 auto;
max-width: 800px;
background-color:#fbf1f1;
padding:20px;
margin-top:40px;
border:1px solid black;
h2{
    font-size:24px;
}
.text{
    margin-top: 24px;
}
`;