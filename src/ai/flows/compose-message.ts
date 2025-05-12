'use server';
/**
 * @fileOverview A message composition AI agent.
 *
 * - composeMessage - A function that handles the message composition process.
 * - ComposeMessageInput - The input type for the composeMessage function.
 * - ComposeMessageOutput - The return type for the composeMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ComposeMessageInputSchema = z.object({
  description: z.string().describe('A short description of the message to compose.'),
});
export type ComposeMessageInput = z.infer<typeof ComposeMessageInputSchema>;

const ComposeMessageOutputSchema = z.object({
  draftMessage: z.string().describe('The generated draft message.'),
});
export type ComposeMessageOutput = z.infer<typeof ComposeMessageOutputSchema>;

export async function composeMessage(input: ComposeMessageInput): Promise<ComposeMessageOutput> {
  return composeMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'composeMessagePrompt',
  input: {schema: ComposeMessageInputSchema},
  output: {schema: ComposeMessageOutputSchema},
  prompt: `You are an AI assistant that helps users compose messages based on a short description.
  Based on the description, generate a draft message.

  Description: {{{description}}} `,
});

const composeMessageFlow = ai.defineFlow(
  {
    name: 'composeMessageFlow',
    inputSchema: ComposeMessageInputSchema,
    outputSchema: ComposeMessageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
