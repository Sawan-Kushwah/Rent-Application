import { NextResponse } from "next/server";
import Owner from "../../models/Owner";
import { connectToDB } from "../../../utils/connectDB";

export async function POST(req) {
    try {
        connectToDB();
        const data = await req.json();
        console.log(data);
        if (!data) return NextResponse.json({ message: "Fill the details properly" });

        const owner = new Owner(data);

        await owner.save();

        return NextResponse.json({ message: "Owner created successfully" });

    } catch (error) {
        console.log(error);
    }
}