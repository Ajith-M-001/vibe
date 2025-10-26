import OpenAI from "openai";
import { inngest } from "@/inngest/client";
import { OPENROUTER_API_KEY, OPENROUTER_API_URL } from "@/lib/constants";

const openrouter = new OpenAI({
  baseURL: OPENROUTER_API_URL,
  apiKey: OPENROUTER_API_KEY,
});

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const completion = await openrouter.chat.completions.create({
      model: "openai/gpt-oss-20b:free",
      messages: [
        {
          role: "system",
          content:
            "You are a export nextjs developer, you write readable ,maintainable code.You write simple nextjs and react snippets.",
        },
        {
          role: "user",
          content: `write the following snippets: ${event.data.value}`,
        },
      ],
    });

    const summary = completion.choices[0]?.message?.content ?? "No output";

    console.log(summary);
    return { response: summary };
  }
);
