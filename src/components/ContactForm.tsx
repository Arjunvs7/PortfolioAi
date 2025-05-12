
"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Sparkles, Send, MessageSquare } from 'lucide-react';
import { composeMessage, ComposeMessageInput } from '@/ai/flows/compose-message';
import { suggestReply, SuggestReplyInput } from '@/ai/flows/suggest-reply';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  aiDescription: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingCompose, setIsLoadingCompose] = useState(false);
  const [isLoadingSuggest, setIsLoadingSuggest] = useState(false);
  const [suggestedReplies, setSuggestedReplies] = useState<string[]>([]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      aiDescription: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    console.log("Form data:", data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
    setSuggestedReplies([]);
  };

  const handleComposeMessage = async () => {
    const description = form.getValues("aiDescription");
    if (!description || description.trim().length < 5) {
      toast({
        title: "AI Composition Failed",
        description: "Please provide a brief description (at least 5 characters) for AI to compose the message.",
        variant: "destructive",
      });
      return;
    }
    setIsLoadingCompose(true);
    try {
      const result = await composeMessage({ description } as ComposeMessageInput);
      form.setValue("message", result.draftMessage);
      toast({
        title: "Message Composed by AI",
        description: "The AI has drafted a message for you. Feel free to edit it.",
      });
    } catch (error) {
      console.error("Error composing message:", error);
      toast({
        title: "AI Composition Error",
        description: "Could not compose message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoadingCompose(false);
    }
  };

  const handleSuggestReplies = async () => {
    const currentMessage = form.getValues("message");
    if (!currentMessage || currentMessage.trim().length < 10) {
      toast({
        title: "AI Suggestion Failed",
        description: "Please write a message (at least 10 characters) to get AI reply suggestions.",
        variant: "destructive",
      });
      return;
    }
    setIsLoadingSuggest(true);
    setSuggestedReplies([]);
    try {
      const result = await suggestReply({ message: currentMessage } as SuggestReplyInput);
      setSuggestedReplies(result.suggestedReplies);
      toast({
        title: "AI Suggestions Ready",
        description: "Here are some reply suggestions based on your message.",
      });
    } catch (error) {
      console.error("Error suggesting replies:", error);
      toast({
        title: "AI Suggestion Error",
        description: "Could not suggest replies. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoadingSuggest(false);
    }
  };

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Get In Touch</CardTitle>
        <CardDescription>Fill out the form below or use AI to help you craft your message.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...form.register("name")} placeholder="Your Name" className="mt-1" />
              {form.formState.errors.name && <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...form.register("email")} placeholder="your@email.com" className="mt-1" />
              {form.formState.errors.email && <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="aiDescription">Describe your message for AI (Optional)</Label>
            <div className="flex gap-2">
              <Input 
                id="aiDescription" 
                {...form.register("aiDescription")} 
                placeholder="e.g., Ask about collaboration on a project" 
                className="flex-grow"
              />
              <Button type="button" onClick={handleComposeMessage} disabled={isLoadingCompose} variant="outline" className="shrink-0">
                <Sparkles className={`mr-2 h-4 w-4 ${isLoadingCompose ? 'animate-spin' : ''}`} />
                {isLoadingCompose ? "Composing..." : "Compose with AI"}
              </Button>
            </div>
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" {...form.register("message")} placeholder="Your message here..." rows={5} className="mt-1" />
            {form.formState.errors.message && <p className="text-sm text-destructive mt-1">{form.formState.errors.message.message}</p>}
          </div>

          {suggestedReplies.length > 0 && (
            <div className="space-y-2">
              <Label>AI Suggested Replies:</Label>
              <div className="flex flex-wrap gap-2">
                {suggestedReplies.map((reply, index) => (
                  <Button key={index} type="button" variant="outline" size="sm" onClick={() => form.setValue("message", reply)}>
                    {reply}
                  </Button>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Button type="button" onClick={handleSuggestReplies} disabled={isLoadingSuggest} variant="ghost">
              <MessageSquare className={`mr-2 h-4 w-4 ${isLoadingSuggest ? 'animate-spin' : ''}`} />
              {isLoadingSuggest ? "Getting Suggestions..." : "Suggest Replies with AI"}
            </Button>
            <Button type="submit" disabled={isSubmitting} size="lg">
              <Send className="mr-2 h-4 w-4" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
