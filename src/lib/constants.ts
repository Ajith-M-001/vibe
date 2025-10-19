//src\lib\constants.ts

// Allowed environment values
export const APP_ENV_VALUES = {
  DEVELOPMENT: "development",
  STAGING: "staging",
  PRODUCTION: "production",
} as const;

export type AppEnv = (typeof APP_ENV_VALUES)[keyof typeof APP_ENV_VALUES];

export const APP_ENV =
  process.env.NEXT_PUBLIC_APP_ENV || APP_ENV_VALUES.DEVELOPMENT;

// Application base URL*
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

// Application name
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "VIBE";


export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "VIBE is an AI-powered app builder that generates full-stack applications from simple prompts using programmable AI agents. It leverages models like OpenAI, Anthropic, and Grok for code generation, executes tasks in secure cloud sandboxes with E2B and Docker, and provides features like agent orchestration, background jobs, project dashboards, authentication & billing with Clerk, and AI-assisted Git workflows with PR reviews. Built with Next.js 15, React 19, and Tailwind v4, VIBE is a modern AI-first toolchain for rapid application development.";
