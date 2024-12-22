
/* eslint-disable no-unused-vars */

import {
  GoogleGenerativeAI,
 
  HarmCategory,
  HarmBlockThreshold,
}  from "@google/generative-ai";

const apiKey = "AIzaSyA4Rb1A6OtW5Rh5N26rM5MwOv2VROv5F9g";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
    ],
  });

  const result = await chatSession.sendMessage(prompt);
  const response = result.response;
  console.log(result.response.text());
  return response.text();
}

 export default run;