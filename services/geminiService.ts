
import { GoogleGenAI, Type } from "@google/genai";
import { MENU_ITEMS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getDishRecommendation = async (userPreferences: string) => {
  try {
    const menuContext = JSON.stringify(MENU_ITEMS.map(item => ({
      name: item.name,
      description: item.description,
      tags: item.tags
    })));

    const prompt = `Based on these menu items: ${menuContext}, 
    and user preference: "${userPreferences}", 
    recommend exactly 2 dishes. 
    Explain why each fits their preference.`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendations: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  dishName: { type: Type.STRING },
                  reason: { type: Type.STRING }
                },
                required: ["dishName", "reason"]
              }
            }
          },
          required: ["recommendations"]
        }
      }
    });

    return JSON.parse(response.text || '{"recommendations": []}');
  } catch (error) {
    console.error("Gemini Error:", error);
    return { recommendations: [] };
  }
};
