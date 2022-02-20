import React, {useContext} from 'react';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import {Context} from '../../context/surveyContext'
import {json} from '../survey/surveyQuestions'

var defaultThemeColors = Survey
    .StylesManager
    .ThemeColors["default"];
    defaultThemeColors["$main-color"] = "#F6836B";
    defaultThemeColors["$main-hover-color"] = "#F6836B";
    defaultThemeColors["$text-color"] = "#4a4a4a";
    defaultThemeColors["$header-color"] = "#F6836B";
    defaultThemeColors["$header-background-color"] = "#FFFFF3";
    defaultThemeColors["$body-container-background-color"] = "#f8f8f8";

Survey
    .StylesManager
    .applyTheme();

// const handleSaveToPC = jsonData => {
//     const fileData = JSON.stringify(jsonData);
//     console.log("111");
//     console.log(jsonData);
//     const blob = new Blob([fileData], {type: "text/plain"});
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.download = 'filename.json';
//     link.href = url;
//     link.click();
//   }

const SurveyType = (prop)=>{
    //const {state:{surveys:{data}}} = useContext(Context);
    const data = useContext(Context);
    console.log(data);
    
    
    return (
        
        <Survey.Survey
        json={json}
        showCompletedPage={false}
        onComplete={data => prop.showCompletePage(data.valuesHash)}
        />
        
    )
}
export default SurveyType;