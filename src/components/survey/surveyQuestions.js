export const json = {
    title: "Diet Preference",
    pages: [
        {
            "navigationTitle": "Health Vs Taste",
            "navigationDescription": "Your Preference",
            "elements": [
                {
                    "type": "matrix",
                    "name": "Quality",
                    "title": "Please Choose the option you resonate with the most",
                    "columns": [
                        {
                            "value": 1,
                            "text": "Strongly Disagree"
                        }, {
                            "value": 2,
                            "text": "Disagree"
                        }, {
                            "value": 3,
                            "text": "Neutral"
                        }, {
                            "value": 4,
                            "text": "Agree"
                        }, {
                            "value": 5,
                            "text": "Strongly Agree"
                        }
                    ],
                    "rows": [
                         {
                            "value": "greens",
                            "text": "I want more green vetables in my diet"
                        }, {
                            "value": "protein",
                            "text": "I want more proteins in my diet"
                        }, {
                            "value": "fruits",
                            "text": "I want more fruits in my diet"
                        }
                    ]
                }, {
                    "type": "rating",
                    "name": "health_scale",
                    "title": "How much do you value healthiness in your diet",
                    "isRequired": true,
                    "mininumRateDescription": "Nah",
                    "maximumRateDescription": "I want to eat as healthy as I could!"
                },{
                    "type": "rating",
                    "name": "exercise",
                    "visibleIf": "{health_scale} > 3",
                    "title": "How much calories do you want",
                    "mininumRateDescription": "Minium",
                    "maximumRateDescription": "Food I eat must to be tasty!"
                }, {
                    "type": "rating",
                    "name": "taste_scale",
                    "isRequired": true,
                    //"visibleIf": "{satisfaction} > 3",
                    "title": "How much do you value the taste of your food",
                    "mininumRateDescription": "I'll eat anything",
                    "maximumRateDescription": "Food I eat must to be tasty!"
                }
            ]
        }, {
            title: "Dietary Restriction",
            questions: [
                {
                    "type": "boolean",
                    "name": "Lactose intolerance",
                    "title": "Please answer the question",
                    "label": "Are you Lactose intolerance?",
                    "isRequired": true
                }, {
                    "type": "boolean",
                    "name": "Gluten intolerance",
                    "title": "Please answer the question",
                    "label": "Are you Gluten intolerance?",
                    "isRequired": true
                },{
                    "type": "boolean",
                    "name": "Vegetarian",
                    "title": "Please answer the question",
                    "label": "Are you a Vegetarian?",
                    "isRequired": true
                }, {
                    "type": "boolean",
                    "name": "Vegan",
                    "title": "Please answer the question",
                    "label": "Are you a Vegan?",
                    "isRequired": true
                }
            ]
        },{
            title: "What types of food do you like",
            questions: [
                {
                    type: "checkbox",
                    name: "langs",
                    title: "Please select from the list",
                    colCount: 4,
                    isRequired: true,
                    choices: [
                        "Vegetables",
                        "Fruits",
                        "Grains",
                        "Beans",
                        "Nuts",
                        "Meat",
                        "Seafood",
                        "Dairy",
                        "Egg",
                        "Tomato",
                        "Potato",
                        "Salty",
                        "Sweet",
                        "Sour",
                        "Spicy",
                        "Chinese",
                        "Japanese",
                        "Korean",
                        "India",
                        "Indonesian",
                        "Irish",
                        "Persian",
                        "Portuguese",
                        "Jamaican",
                        "Mexico",
                        "Orange",
                        "Beef",
                        "Shrimp",
                        "Greens",
                        "Coconut"
                    ]
                }
            ]
        }, {
            title: "Please enter your name and e-mail",
            questions: [
                {
                    "name": "name",
                    "type": "text",
                    "title": "Please enter your name:",
                    "placeHolder": "Jon Snow",
                    "isRequired": true,
                    "autoComplete": "name"
                }, {
                    "name": "email",
                    "type": "text",
                    "inputType": "email",
                    "title": "Your e-mail:",
                    "placeHolder": "jon.snow@nightwatch.org",
                    "isRequired": true,
                    "autoComplete": "email",
                    "validators": [
                {
                    "type": "email"
                }
            ]
                }
            ]
        }
    ]
};
