import { PrismaClient } from "../generated/prisma";
import { APP_ENV, APP_ENV_VALUES } from "./constants";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

const prisma = globalForPrisma.prisma || new PrismaClient();

if (APP_ENV !== APP_ENV_VALUES.PRODUCTION) globalForPrisma.prisma = prisma;

export default prisma;
