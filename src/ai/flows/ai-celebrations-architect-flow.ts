'use server';
/**
 * @fileOverview An AI Celebrations Architect agent that provides curated event themes and personalized dinner menus.
 *
 * - aiCelebrationsArchitect - A function that handles the generation of event themes and dinner menus.
 * - AiCelebrationsArchitectInput - The input type for the aiCelebrationsArchitect function.
 * - AiCelebrationsArchitectOutput - The return type for the aiCelebrationsArchitect function.
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
      'A curated and unique theme idea for the event, matching the luxury feel of Verdant Luxe Reserve.'
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

export async function aiCelebrationsArchitect(
  input: AiCelebrationsArchitectInput
): Promise<AiCelebrationsArchitectOutput> {
  return aiCelebrationsArchitectFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiCelebrationsArchitectPrompt',
  input: {schema: AiCelebrationsArchitectInputSchema},
  output: {schema: AiCelebrationsArchitectOutputSchema},
  prompt:
    'You are an AI Celebrations Architect for Verdant Luxe Reserve, a luxury escape known for its exclusivity and premium hospitality. Your task is to craft bespoke event themes and personalized gourmet dinner menus.\n\nThe event details are as follows:\n- Event Type: {{{eventType}}}\n- Guest Count: {{{guestCount}}}\n\nBased on these details, propose a unique and sophisticated event theme that resonates with the luxury ambiance of Verdant Luxe Reserve.\nAdditionally, design a personalized, multi-course dinner menu (e.g., appetizer, main course, dessert) that emphasizes gourmet ingredients and an exquisite dining experience, tailored specifically for the event type and guest count provided.\nEnsure the output is in JSON format as per the specified schema.',
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
