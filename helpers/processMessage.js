const API_AI_TOKEN = 'd26530ac4d384f2e8d3f2d9cbf64aeea';//‘your Dialogflow Client Access Token’;
const apiAiClient = require('apiai')(API_AI_TOKEN);
const FACEBOOK_ACCESS_TOKEN = 'EAAUlZAuTFadIBAGGvrFdMrdKOi22b0dpbIxeNnc1LFanRWtB4ZA8Atz2rTXA6a7JdfOTwrcRlxlMZClxwGHqJOOp2WZCa2Ik3ZBMUOwnd3EpKPkftu0v0HLRAMQu9trZA07ZB63xITN1DpP1DO9wlKiWFih70kDQyErdGNGxeeD4wZDZD';//‘your Facebook Page Access Token’;
const request = require('request');
const sendTextMessage = (senderId, text) => {
 request({
 url: 'https://graph.facebook.com/v2.6/me/messages',
 qs: { access_token: FACEBOOK_ACCESS_TOKEN },
 method: 'POST',
 json: {
 recipient: { id: senderId },
 message: { text },
 }
 });
};
module.exports = (event) => {
 const senderId = event.sender.id;
 const message = event.message.text;
const apiaiSession = apiAiClient.textRequest(message, {sessionId: 'crowdbotics_bot'});
apiaiSession.on('response', (response) => {
 const result = response.result.fulfillment.speech;
sendTextMessage(senderId, result);
 });
apiaiSession.on('error', error => console.log(error));
 apiaiSession.end();
};