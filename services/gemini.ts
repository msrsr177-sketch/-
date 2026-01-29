
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

// Function to handle chat with Gemini
export const chatWithGemini = async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  // Always create a new instance right before making the API call to ensure it uses the latest API key
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      // Use gemini-3-flash-preview for the fastest response time in chat scenarios
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.8, // Slightly higher for more natural, varied speech patterns
      },
    });

    // Access the .text property directly
    return response.text || "آسف عيوني، صار عندي خلل بسيط. كرر سؤالك يرحم والديك.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "عيوني النت شوية ضعيف يمي، جرب ترسل مرة ثانية فدوة الك.";
  }
};
