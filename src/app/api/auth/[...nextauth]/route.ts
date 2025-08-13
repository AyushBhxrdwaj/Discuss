// Ensure Node.js runtime for NextAuth (Prisma adapter requires Node, not Edge)
export const runtime = "nodejs";
export { GET, POST } from "@/auth";
// export async function GET(){

// }