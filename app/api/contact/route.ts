

// import { NextRequest, NextResponse } from "next/server";
// import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import { groq } from "@/lib/groq";

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();

//     const { name, email, phone, subject, message } = body;

//     // Basic validation
//     if (!name || !email || !message) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Please fill all required fields.",
//         },
//         { status: 400 },
//       );
//     }

//     // Ask Groq to analyse the enquiry
//     const aiResponse = await groq.chat.completions.create({
//       model: "llama-3.3-70b-versatile",
//       messages: [
//         {
//           role: "system",
//           content: `
// You are an AI assistant for Snax SA.

// Analyze the customer's enquiry.

// Return ONLY valid JSON.

// Do not return markdown.
// Do not return explanations.
// Do not wrap JSON inside \`\`\`.

// Return this exact structure:

// {
//   "category": "",
//   "priority": "",
//   "summary": ""
// }

// Category must be one of:
// - Bulk Order
// - Product Inquiry
// - Complaint
// - General
// - Partnership

// Priority must be:
// - Low
// - Medium
// - High
// `,
//         },
//         {
//           role: "user",
//           content: `
// Name: ${name}

// Email: ${email}

// Phone: ${phone}

// Subject: ${subject}

// Message:
// ${message}
// `,
//         },
//       ],
//     });

//     const content = aiResponse.choices[0]?.message?.content ?? "{}";

//     let aiResult = {
//       category: "General",
//       priority: "Low",
//       summary: message,
//     };

//     try {
//       aiResult = JSON.parse(content);
//     } catch (err) {
//       console.error("Groq JSON Parse Error:", err);
//     }

//     // Save to Firebase
//     await addDoc(collection(db, "contacts"), {
//       name,
//       email,
//       phone,
//       subject,
//       message,

//       category: aiResult.category,
//       priority: aiResult.priority,
//       summary: aiResult.summary,

//       createdAt: serverTimestamp(),
//     });

//     return NextResponse.json({
//       success: true,
//       message: "Contact saved successfully",
//       ai: aiResult,
//     });
//   } catch (error) {
//     console.error("Contact API Error:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to submit contact form.",
//       },
//       { status: 500 },
//     );
//   }
// }
















import { NextRequest, NextResponse } from "next/server";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill all required fields." },
        { status: 400 }
      );
    }

    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: `
You are an AI assistant for Snax SA.
Analyze the customer's enquiry.
Return ONLY valid JSON. No markdown. No explanations. No backticks.

{
  "category": "",
  "priority": "",
  "summary": ""
}

Category must be one of: Bulk Order, Product Inquiry, Complaint, General, Partnership
Priority must be: Low, Medium, or High
`,
          },
          {
            role: "user",
            content: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage:\n${message}`,
          },
        ],
      }),
    });

    const groqData = await groqRes.json();
    const content = groqData.choices?.[0]?.message?.content ?? "{}";

    let aiResult = { category: "General", priority: "Low", summary: message };

    try {
      aiResult = JSON.parse(content);
    } catch (err) {
      console.error("Groq JSON Parse Error:", err);
    }

    await addDoc(collection(db, "contacts"), {
      name,
      email,
      phone,
      subject,
      message,
      category: aiResult.category,
      priority: aiResult.priority,
      summary: aiResult.summary,
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({
      success: true,
      message: "Contact saved successfully",
      ai: aiResult,
    });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit contact form." },
      { status: 500 }
    );
  }
}