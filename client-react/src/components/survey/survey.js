import React from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { Container, TextField, Button, Grid, InputLabel } from '@material-ui/core';
class SurveyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCompleted: false };
    this.onCompleteComponent = this.onCompleteComponent.bind(this);
  }
  onCompleteComponent() {
    this.setState({ isCompleted: true });
    this.props.history.push('/home-architecture');
  }
  render() {
    let json = {
      questions: [
        // {
        //  type: "checkbox",
        //  name: "car",
        //  title: "What car are you driving?",
        //  isRequired: true,
        //  hasSelectAll: true,
        //  hasNone: true,
        //  noneText: "None of the above",
        //  colCount: 4,
        //  choicesOrder: "asc",
        //  choices: [
        //   "Ford",
        //   "Tesla",
        //   "Vauxhall",
        //   "Volkswagen",
        //  ]
        // },
        // {
        //     type: "checkbox",
        //     name: "car",
        //     title: "What car are you driving?",
        //     isRequired: true,
        //     hasSelectAll: true,
        //     hasNone: true,
        //     noneText: "None of the above",
        //     colCount: 4,
        //     choicesOrder: "asc",
        //     choices: [
        //      "Ford",
        //      "Tesla",
        //      "Vauxhall",
        //      "Volkswagen",
        //     ]
        //    },
        {
          type: "radiogroup",
          name: "question1",
          title: "Select your location ",
          isRequired: true,
          hasSelectAll: true,
          hasNone: true,
          noneText: "None of the above",
          colCount: 2,
          choicesOrder: "asc",
          choices: [
            "Islamabad",
            "Others"
          ]
        },
        {
          type: "radiogroup",
          name: "question2",
          title: "Please give us more information. What is the type of your project?",
          isRequired: true,
          hasSelectAll: true,
          hasNone: true,
          noneText: "None of the above",
          colCount: 2,
          choicesOrder: "asc",
          choices: [
            "It is a house",
            "It is a commercial plot"
          ]
        },
        {
          type: "radiogroup",
          name: "question3",
          title: "What is the size of the plot? ",
          isRequired: true,
          hasSelectAll: true,
          hasNone: true,
          noneText: "None of the above",
          colCount: 3,
          choicesOrder: "asc",
          choices: [
            "5",
            "10",
            "20"
          ]
        },
        {
          type: "text",
          name: "question4",
          title: "Enter the size of the project in square feet (If you know)",
          placeHolder: "Enter text here"
        },
        {
          type: "radiogroup",
          name: "question5",
          title: "Do you have approval for construction from the local authority?",
          isRequired: true,
          hasSelectAll: true,
          hasNone: true,
          noneText: "None of the above",
          colCount: 2,
          choicesOrder: "asc",
          choices: [
            "Yes",
            "No"
          ]
        },
        {
          type: "radiogroup",
          name: "question6",
          title: "What is your construction budget? ",
          isRequired: true,
          hasSelectAll: true,
          hasNone: true,
          noneText: "None of the above",
          colCount: 4,
          choicesOrder: "asc",
          choices: [
            "Luxury",
            "Premium",
            "High End",
            "Economy"
          ]
        },
        {
          type: "radiogroup",
          name: "question7",
          title: "When would you like to start the project? ",
          isRequired: true,
          hasSelectAll: true,
          hasNone: true,
          noneText: "None of the above",
          colCount: 4,
          choicesOrder: "asc",
          choices: [
            "Immediately",
            "Within one month",
            "1 - 2 months",
            "Not sure"
          ]
        },
        {
          type: "radiogroup",
          name: "question8",
          title: "What are you comfortable with for a down payment amount (%)?",
          isRequired: true,
          hasSelectAll: true,
          hasNone: true,
          noneText: "None of the above",
          colCount: 4,
          choicesOrder: "asc",
          choices: [
            "15",
            "20",
            "25",
            "30"
          ]
        },
        {
          type: "radiogroup",
          name: "question9",
          title: "Will you tell others about us if you like our work?",
          isRequired: true,
          hasSelectAll: true,
          hasNone: true,
          noneText: "None of the above",
          colCount: 2,
          choicesOrder: "asc",
          choices: [
            "Yes",
            "No"
          ]
        },
        {
          type: "text",
          name: "question10",
          title: "Anything we need to know?",
          placeHolder: "Enter text here"
        }
      ]
    }
    return (
      <div>
        <h3 style={{color:"#FF2A27", marginTop:30, marginBottom:50}}>Please fill the required details</h3>
        <Survey.Survey
          json={json}
          showCompletedPage={false}
          onComplete={this.onCompleteComponent}
        />
      </div>
    );
  }
  
 
}

export default SurveyComponent




// {
//   "pages": [
//    {
//     "name": "page1",
//     "elements": [
    //  {
    //   "type": "radiogroup",
    //   "name": "question1",
    //   "title": "Select your location ",
    //   "isRequired": true,
    //   "choices": [
    //    {
    //     "value": "item1",
    //     "text": "Islamabad"
    //    },
    //    {
    //     "value": "item2",
    //     "text": "Others"
    //    }
    //   ]
    //  },
    //  {
    //   "type": "radiogroup",
    //   "name": "question2",
    //   "title": "Please give us more information. What is the type of your project?",
    //   "isRequired": true,
    //   "choices": [
    //    {
    //     "value": "item1",
    //     "text": "It is a house"
    //    },
    //    {
    //     "value": "item2",
    //     "text": "It is a commercial plot"
    //    }
    //   ]
    //  },
    //  {
    //   "type": "radiogroup",
    //   "name": "question3",
    //   "title": "What is the size of the plot? ",
    //   "isRequired": true,
    //   "choices": [
    //    {
    //     "value": "item1",
    //     "text": "5"
    //    },
    //    {
    //     "value": "item2",
    //     "text": "10"
    //    },
    //    {
    //     "value": "item3",
    //     "text": "20"
    //    }
    //   ]
    //  },
    //  {
    //   "type": "text",
    //   "name": "question4",
    //   "title": "Enter the size of the project in square feet (If you know)",
    //   "placeHolder": "Enter text here"
    //  },
    //  {
    //   "type": "radiogroup",
    //   "name": "question5",
    //   "title": "Do you have approval for construction from the local authority?",
    //   "isRequired": true,
    //   "choices": [
    //    {
    //     "value": "item1",
    //     "text": "Yes"
    //    },
    //    {
    //     "value": "item2",
    //     "text": "No"
    //    }
    //   ]
    //  },
    //  {
    //   "type": "radiogroup",
    //   "name": "question6",
    //   "title": "What is your construction budget? ",
    //   "isRequired": true,
    //   "choices": [
    //    {
    //     "value": "item1",
    //     "text": "Luxury"
    //    },
    //    {
    //     "value": "item2",
    //     "text": "Premium"
    //    },
    //    {
    //     "value": "item3",
    //     "text": "High End"
    //    }
    //   ],
    //   "hasOther": true,
    //   "otherText": "Economy"
    //  },
    //  {
    //   "type": "radiogroup",
    //   "name": "question7",
    //   "title": "When would you like to start the project? ",
    //   "isRequired": true,
    //   "choices": [
    //    {
    //     "value": "item1",
    //     "text": "Immediately"
    //    },
    //    {
    //     "value": "item2",
    //     "text": "Within one month"
    //    },
    //    {
    //     "value": "item3",
    //     "text": "1 - 2 months"
    //    }
    //   ],
    //   "hasOther": true,
    //   "otherText": "Not sure"
    //  },
    //  {
    //   "type": "radiogroup",
    //   "name": "question8",
    //   "title": "What are you comfortable with for a down payment amount (%)?",
    //   "isRequired": true,
    //   "choices": [
    //    {
    //     "value": "item1",
    //     "text": "15"
    //    },
    //    {
    //     "value": "item2",
    //     "text": "20"
    //    },
    //    {
    //     "value": "item3",
    //     "text": "25"
    //    }
    //   ],
    //   "hasOther": true,
    //   "otherText": "30"
    //  },
    //  {
    //   "type": "radiogroup",
    //   "name": "question9",
    //   "title": "Will you tell others about us if you like our work?",
    //   "isRequired": true,
    //   "choices": [
    //    {
    //     "value": "item1",
    //     "text": "Yes"
    //    },
    //    {
    //     "value": "item2",
    //     "text": "No"
    //    }
    //   ]
    //  },
    //  {
    //   "type": "text",
    //   "name": "question10",
    //   "title": "Anything we need to know?",
    //   "placeHolder": "Enter text here"
    //  }
//     ]
//    }
//   ]
//  }
