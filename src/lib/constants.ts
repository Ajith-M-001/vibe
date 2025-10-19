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
