import { NextRequest, NextResponse } from "next/server";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, occasion, quantity, message } = await req.json();

    if (!name || !phone || !occasion || !quantity) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 },
      );
    }

    await addDoc(collection(db, "bulk-orders"), {
      name,
      phone,
      occasion,
      quantity,
      message,
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 },
    );
  }
}
