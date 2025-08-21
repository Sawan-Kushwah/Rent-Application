import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";


export async function POST(req) {
    try {
      const formData = req.formData();

      const files = formData.get(File)
        
        return NextResponse.json({ message: "Post Updated successfully" }, { status: 200 });

    } catch (error) {
        console.log("Error in finding post by id", error);
        return NextResponse.json({ message: "Failed to get post by id", error: error.message }, { status: 500 });
    }
} 


<CldUploadButton uploadPreset="your-upload-preset" />
