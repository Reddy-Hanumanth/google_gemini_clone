import { GoogleGenAI } from "@google/genai";

const apiurl = process.env.REACT_APP_GEMINI_API_KEY

const ai = new GoogleGenAI({
  apiKey: apiurl
});

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  console.log(response.text);
  return response.text;
}

export default main;

