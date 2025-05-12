// 'use server';
/**
 * @fileOverview This file contains the Genkit flow for suggesting smart replies based on the content of the message in the contact form.
 *
 * - suggestReply - A function that takes a message as input and returns suggested replies.
 * - SuggestReplyInput - The input type for the suggestReply function.
 * - SuggestReplyOutput - The return type for the suggestReply function.
 */

'use server';
import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestReplyInputSchema = z.object({
  message: z.string().describe('The content of the message from the contact form.'),
});
export type SuggestReplyInput = z.infer<typeof SuggestReplyInputSchema>;

const SuggestReplyOutputSchema = z.object({
  suggestedReplies: z
    .array(z.string())
    .describe('An array of suggested replies based on the message content.'),
});
export type SuggestReplyOutput = z.infer<typeof SuggestReplyOutputSchema>;

export async function suggestReply(input: SuggestReplyInput): Promise<SuggestReplyOutput> {
  return suggestReplyFlow(input);
}

const suggestReplyPrompt = ai.definePrompt({
  name: 'suggestReplyPrompt',
  input: {schema: SuggestReplyInputSchema},
  output: {schema: SuggestReplyOutputSchema},
  prompt: `You are a helpful assistant designed to suggest smart replies to user messages.

  Given the following message from a user, suggest three concise and helpful replies.

  Message: {{{message}}}

  Format your response as a JSON object with a "suggestedReplies" field containing an array of strings.
  Do not include any conversational text or headers, only the JSON object.
  `,
});

const suggestReplyFlow = ai.defineFlow(
  {
    name: 'suggestReplyFlow',
    inputSchema: SuggestReplyInputSchema,
    outputSchema: SuggestReplyOutputSchema,
  },
  async input => {
    const {output} = await suggestReplyPrompt(input);
    return output!;
  }
);
