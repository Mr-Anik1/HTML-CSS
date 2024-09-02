import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_AI_KEY } from "./constant";

// If I want to use this key form the .env file I must to use import.meta.env.VITE_GEMINI_AI_KEY
const genAI = new GoogleGenerativeAI(GEMINI_AI_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export { model };
