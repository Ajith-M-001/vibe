//src\inngest\client.ts
import { APP_NAME } from "@/lib/constants";
import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: `${APP_NAME}-development` });
