import React, {useState,useCallback} from 'react';
import SurveyType from '../survey/surveyTypes.js';

var stylingObject = {
  container: {
      width: "100%",
      height: "1000px",
      background: "#FFFFF3",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
  },
}

function SurveyOne() {
  const [showCompletedPage, setshowCompletedPage] =useState(true)
  const onCompletepage = useCallback((data)=>{
    console.log({data})
    setshowCompletedPage(!showCompletedPage)
  },[showCompletedPage])

  const setFinalPage = () =>{
    return(
      <div style={stylingObject.container}>
        <h1>THANK YOU FOR TAKING THE SURVEY</h1>
      </div>
    )
  }
  
  return (
    <React.Fragment>
      {
        showCompletedPage?
        <SurveyType showCompletePage={data=>onCompletepage(data)} />:
        setFinalPage()
      }
    </React.Fragment>

  );
}

export default SurveyOne;
