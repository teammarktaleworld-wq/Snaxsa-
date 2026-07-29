export async function GET() {
  return Response.json({
    exists: !!process.env.GROQ_API_KEY,
    value: process.env.GROQ_API_KEY?.slice(0, 8),
  });
}