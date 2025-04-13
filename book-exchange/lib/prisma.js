// import { PrismaClient } from "@lib\generated\prisma";
// import { PrismaClient } from '@lib/generated/client/deno/edge.ts'
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis;

export const db = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;
