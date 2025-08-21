import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const data = await req.json();
        console.log("data comes", data);
        return NextResponse.json({ message: "i am post room" });
    } catch (error) {
        console.log(error);
    }
}