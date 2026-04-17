import { GoogleGenAI, Type, Schema } from "@google/genai";

const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is missing. If you've just deployed to GitHub, ensure you added the secret and re-ran the build.");
  }
  return new GoogleGenAI({ apiKey });
};

const SYSTEM_INSTRUCTION = "You are a Multilevel Governance Strategy Assistant based on the CHAMP initiative and the CCFLA/Urban-Act Enabling Framework Conditions standards. Your exclusive function is to contextualize climate finance recommendations. Reject any query unrelated to urban climate finance. You must extract operational logic strictly from the provided recommendation text. Suggest precise, structurally necessary stakeholders. Do not generate fictional budgets or hyper-specific operational metrics. For National Governments, focus on subnational networks, line ministries, and national development banks. For Cities, focus on internal municipal departments and local intermediaries. For International Partners, focus on sovereign counterparts and co-financiers.";

export interface AiContextData {
  country?: string;
  city?: string;
  partnerType?: string;
}

export interface FileData {
  inlineData: {
    mimeType: string;
    data: string;
  }
}

export async function identifyStakeholders(
  recommendationPoints: string[],
  actor: string,
  contextData: AiContextData
): Promise<string[]> {
  const ai = getGeminiClient();
  const entityName = contextData.country 
    ? contextData.city ? `${contextData.city}, ${contextData.country}` : contextData.country
    : contextData.partnerType || "the entity";

  const targetRecommendation = recommendationPoints.join(' ');

  const prompt = `Actor: ${actor}. Entity: ${entityName}. Target Recommendation: ${targetRecommendation}. Read the strategic recommendation above. Identify the mandatory institutional stakeholders that ${entityName} must engage to operationalize this recommendation. Output a strict, comma-separated list of 4 to 6 specific stakeholder names. Provide only the tags.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.2,
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("The AI returned an empty response. This might be due to safety filters.");
    }

    return text.split(',').map(s => s.trim()).filter(s => s.length > 0);
  } catch (error: any) {
    console.error("Error calling Gemini API for stakeholders:", error);
    const message = error?.message || "Unknown error";
    throw new Error(`Failed to identify stakeholders: ${message}`);
  }
}

export async function generateContextualizedPlan(
  recommendationPoints: string[],
  actor: string,
  contextData: AiContextData,
  stakeholders: string[]
): Promise<string> {
  const ai = getGeminiClient();
  const entityName = contextData.country 
    ? contextData.city ? `${contextData.city}, ${contextData.country}` : contextData.country
    : contextData.partnerType || "the entity";

  const targetRecommendation = recommendationPoints.join(' ');
  const finalizedStakeholders = stakeholders.join(', ');

  const prompt = `Actor: ${actor}. Entity: ${entityName}. Target Recommendation: ${targetRecommendation}. Finalized Stakeholders: ${finalizedStakeholders}. Generate a strategic implementation plan for ${entityName} to execute this recommendation. Structure strictly as: 1. The Core Directive: [One sentence]. 2. Stakeholder Integration: [Bullet points defining the operational role of each provided stakeholder]. 3. Implementation Pathway: [A 3-step numbered roadmap].`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.5,
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("The AI returned an empty response.");
    }

    return text;
  } catch (error: any) {
    console.error("Error calling Gemini API for plan generation:", error);
    const message = error?.message || "Unknown error";
    throw new Error(`Failed to generate contextualized plan: ${message}`);
  }
}

