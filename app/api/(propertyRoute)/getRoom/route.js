import { connectToDB } from "../../lib/connectDB";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        await connectToDB()
        console.log("i am good room");
        return NextResponse.json({ message: "yeah i am a good room" });
    } catch (error) {
        console.log(error);
    }
}