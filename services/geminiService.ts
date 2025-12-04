import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getBaristaResponse = async (userMessage: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });
    
    return response.text || "Sorry, I haven't had my coffee yet. Can you repeat that?";
  } catch (error) {
    console.error("Error talking to AI Barista:", error);
    return "The espresso machine is acting up (Network Error). Try again in a moment!";
  }
};