import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ 
    apiKey: import.meta.env.VITE_GEMINI_API_KEY
});

export const generateSummary = async (userInput) => {

    const inputToString = JSON.stringify(userInput);

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [{ role: "user", parts: [{ text: inputToString }]}],
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: { 
                        summary: { type: Type.STRING },
                        sentiment: { type: Type.STRING },
                        tags: {
                            type: Type.ARRAY,
                            items: { type: Type.STRING }
                        }
                    },
                    required: ["summary", "sentiment", "tags"],
                },
                systemInstruction: "You are a good AI Expenses Auditor. In given userInput if it contains the bestAlternative and savings, then summarise why alternative plan is better than current plan in 100 words. If there is not bestAlternative present in data then summarise why current plan is optimized for customer needs in 100 words only. This summary must have valid reason by understanding the data. Response only with the summary.",
            },
        });

        return JSON.parse(response.text);
    }
    catch (error) {
        console.log("GEMINI Error", error);
        throw error;
    }
}