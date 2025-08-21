import { NextResponse } from "next/server";
import Owner from "../../models/Owner";
import { connectToDB } from "@/app/utils/connectDB";

export async function GET() {
    try {
        connectToDB();
        const data = await Owner.find({});
        console.log(data);
        if (!data) {
            console.error("owner not found");
            return NextResponse.json({ message: "Owner not found" });
        }
        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
    }
} 