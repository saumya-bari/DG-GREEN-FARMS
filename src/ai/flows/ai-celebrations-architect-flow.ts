'use server';
/**
 * @fileOverview An AI Celebrations Architect agent that provides curated event themes and personalized dinner menus.
 * Includes a fallback for demo mode if no API key is provided.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiCelebrationsArchitectInputSchema = z.object({
  guestCount: z
    .number()
    .int()
    .positive()
    .describe('The number of guests attending the event.'),
  eventType: z
    .string()
    .describe(
      'The type of event (e.g., "birthday party", "corporate retreat", "wedding anniversary", "family reunion", "romantic getaway").'
    ),
});
export type AiCelebrationsArchitectInput = z.infer<
  typeof AiCelebrationsArchitectInputSchema
>;

const AiCelebrationsArchitectOutputSchema = z.object({
  eventTheme: z
    .string()
    .describe(
      'A curated and unique theme idea for the event, matching the luxury feel of DG Green Farms.'
    ),
  dinnerMenu: z
    .string()
    .describe(
      'A personalized dinner menu proposal, tailored to the event type and guest count, emphasizing gourmet and luxury dining.'
    ),
});
export type AiCelebrationsArchitectOutput = z.infer<
  typeof AiCelebrationsArchitectOutputSchema
>;

const MOCK_RESPONSES: Record<string, AiCelebrationsArchitectOutput> = {
  'birthday party': {
    eventTheme: "Indore's Emerald Gala: A sophisticated outdoor garden celebration featuring live Sufi music and hanging amber lanterns across the poolside.",
    dinnerMenu: "Appetizer: Organic Indori Corn Fritters with Mint Chutney\nMain: Saffron Infused Paneer Lababdar with Garlic Naan\nDessert: Warm Malpua with Rabdi"
  },
  'wedding anniversary': {
    eventTheme: "Midnight Rose Serenade: A romantic red-rose trail leading to a floating candle-lit dinner in the private pool area.",
    dinnerMenu: "Appetizer: Truffle-infused Mushroom Galouti\nMain: Chef's Signature Butter Dal with Steamed Basmati\nDessert: Dark Chocolate Rose Petal Fondue"
  },
  'romantic getaway': {
    eventTheme: "Starlit Sanctuary: An intimate setup under the Gazebo with soft velvet seating and personalized acoustic melodies.",
    dinnerMenu: "Appetizer: Artisanal Cheese and Fruit Platter\nMain: Grilled Farm-Fresh Vegetables in Pesto Cream\nDessert: Signature Fruit Cream with Honeycomb"
  }
};

export async function aiCelebrationsArchitect(
  input: AiCelebrationsArchitectInput
): Promise<AiCelebrationsArchitectOutput> {
  // Graceful fallback for demo/keyless mode
  if (!process.env.GOOGLE_GENAI_API_KEY || process.env.GOOGLE_GENAI_API_KEY === 'YOUR_API_KEY_HERE') {
    // Artificial delay to simulate AI thinking
    await new Promise(resolve => setTimeout(resolve, 1500));
    return MOCK_RESPONSES[input.eventType] || MOCK_RESPONSES['birthday party'];
  }

  return aiCelebrationsArchitectFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiCelebrationsArchitectPrompt',
  input: {schema: AiCelebrationsArchitectInputSchema},
  output: {schema: AiCelebrationsArchitectOutputSchema},
  prompt:
    'You are an AI Celebrations Architect for DG Green Farms, a luxury resort in Indore. Your task is to craft bespoke event themes and personalized gourmet dinner menus.\n\nThe event details are as follows:\n- Event Type: {{{eventType}}}\n- Guest Count: {{{guestCount}}}\n\nBased on these details, propose a unique and sophisticated event theme that resonates with the luxury ambiance of DG Green Farms.\nAdditionally, design a personalized, multi-course dinner menu (e.g., appetizer, main course, dessert) that emphasizes gourmet ingredients and an exquisite dining experience, tailored specifically for the event type and guest count provided.\nEnsure the output is in JSON format as per the specified schema.',
});

const aiCelebrationsArchitectFlow = ai.defineFlow(
  {
    name: 'aiCelebrationsArchitectFlow',
    inputSchema: AiCelebrationsArchitectInputSchema,
    outputSchema: AiCelebrationsArchitectOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
