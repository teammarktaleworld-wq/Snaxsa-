// import { NextRequest, NextResponse } from "next/server";
// import { groq } from "@/lib/groq";
// import { SYSTEM_PROMPT } from "@/lib/chatbot";

// export const runtime = "nodejs";

// export async function POST(req: NextRequest) {
//   try {
//     const { message } = await req.json();

//     const completion = await groq.chat.completions.create({
//       model: "llama-3.3-70b-versatile",
//       temperature: 0.6,
//       messages: [
//         {
//           role: "system",
//           content: SYSTEM_PROMPT,
//         },
//         {
//           role: "user",
//           content: message,
//         },
//       ],
//     });

//     return NextResponse.json({
//       success: true,
//       reply:
//         completion.choices[0].message.content ??
//         "Sorry, I couldn't answer that.",
//     });
//   } catch (err) {
//     console.error("Chat API Error:", err);

//     return NextResponse.json(
//       {
//         success: false,
//         reply: "Something went wrong.",
//       },
//       { status: 500 },
//     );
//   }
// }















import { NextRequest, NextResponse } from "next/server";
import { SYSTEM_PROMPT } from "@/lib/chatbot";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        temperature: 0.6,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message },
        ],
      }),
    });

    const data = await groqRes.json();

    return NextResponse.json({
      success: true,
      reply: data.choices?.[0]?.message?.content ?? "Sorry, I couldn't answer that.",
    });
  } catch (err) {
    console.error("Chat API Error:", err);
    return NextResponse.json(
      { success: false, reply: "Something went wrong." },
      { status: 500 }
    );
  }
}