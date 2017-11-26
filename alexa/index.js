// const Alexa = require('alexa-sdk');
// var request = require('request');
//
// exports.handler = function(event, context, callback) {
//   var alexa = Alexa.handler(event, context, callback);
//   alexa.registerHandlers(handlers);
//   alexa.execute();
// };
//
// var handlers = {
//     'LaunchRequest': function () {
//       this.emit(':ask', 'Chotu can '+
//                         'Make a new profile for you.'+
//                         'What do you want it to do?', 'What do you want it to do?');
//     },
//
//     'AddProfileIntent': function(){
//
//       var person = {
//         name: this.event.request.intent.slots.name.value,
//         phone: this.event.request.intent.slots.phone.value
//       }
//
//       person = JSON.stringify(person)
//
//     //   var options = {
//     //     host: '192.168.1.6',
//     //     port: 10002,
//     //     path: 'api/',
//     //     method: 'POST',
//     //     headers: {
//     //       'Content-Type': 'aplication/json'
//     //     }
//     //   }
//     //
//     //   var request = http.request(options, function(res){
//     //     res.setEncoding('utf8')
//     //   });
//     //
//     //   request.write(person)
//     //   request.end()
//     //
//
//       request.post(
//         '192.168.1.6/api/',
//         {
//           json: person
//         },
//         function (error, response, body) {
//             if (!error && response.statusCode == 200) {
//               this.emit(':tell', 'Profile added!')
//             } else if(error){
//               this.emit(':tell', 'Crap! We have an error. Here\'s what it says, ' + error)
//             }
//         }
//       );
//     }
//
//
//  };

'use strict';

const Alexa = require('alexa-sdk');

exports.handler = (event, context) => {
  const alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

const handlers = {
  //By having a single 'Unhandled' handler, we ensure all requests are route to it
  'Unhandled': function () {
    //log the event sent by the Alexa Service in human readable format
    console.log(JSON.stringify(this.event));
    let skillId, requestType, dialogState, intent ,intentName, intentConfirmationStatus, slotArray, slots, count;

    try {
      //Parse necessary data from JSON object using dot notation
      //build output strings and check for undefined
      skillId = this.event.session.application.applicationId;
      requestType = "The request type is, "+this.event.request.type+" .";
      dialogState = this.event.request.dialogState;
      intent = this.event.request.intent;
      if (intent != undefined) {
        intentName = " The intent name is, "+this.event.request.intent.name+" .";
        slotArray = this.event.request.intent.slots;
        intentConfirmationStatus = this.event.request.intent.confirmationStatus;

        if (intentConfirmationStatus != "NONE" && intentConfirmationStatus != undefined ) {
          intentConfirmationStatus = " and its confirmation status is "+ intentConfirmationStatus+" . ";
          intentName = intentName+intentConfirmationStatus;
        }
      } else {
        intentName = "";
        slotArray = "";
        intentConfirmationStatus = "";
      }

      slots = "";
      count = 0;

      if (slotArray == undefined || slots == undefined) {
        slots = "";
      }

      //Iterating through slot array
      for (let slot in slotArray) {
        count += 1;
        let slotName = slotArray[slot].name;
        let slotValue = slotArray[slot].value;
        let slotConfirmationStatus = slotArray[slot].confirmationStatus;
        slots = slots + "The <say-as interpret-as='ordinal'>"+count+"</say-as> slot is, " + slotName + ", its value is, " +slotValue;

        if (slotConfirmationStatus!= undefined && slotConfirmationStatus != "NONE") {
          slots = slots+" and its confirmation status is "+slotConfirmationStatus+" . ";
        } else {
          slots = slots+" . ";
        }
      }

      //Delegate to Dialog Manager when needed
      //<reference to docs>
      if (dialogState == "STARTED" || dialogState == "IN_PROGRESS") { 
        this.emit(":delegate");
      }
    } catch(err) {
      console.log("Error: " + err.message);
    }

    let speechOutput = "Your end point receive a request, here's a breakdown. " + requestType + " " + intentName + slots;
    let cardTitle = "Skill ID: " + skillId;
    let cardContent = speechOutput;

    this.response.cardRenderer(cardTitle, cardContent);
    // this.response.speak(speechOutput);
    this.response.speak('Yo yo yo yo yo Ooj is the best')

    this.emit(':responseReady');
  }
};
