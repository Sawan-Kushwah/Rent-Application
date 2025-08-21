import Owner from "@/app/api/models/Owner";
import { connectToDB } from "@/app/utils/connectDB";
import { dataNotFound, success } from "@/app/utils/errorMessage";
import { NextResponse } from "next/server";

// owner ki id req me bhjna he
export async function PATCH(req) {
  try {
    connectToDB();
    const ownerData = await req.json();

    if (!ownerData) {
      return dataNotFound("owner");
    }

    const updatedOwner = await Owner.findByIdAndUpdate(
      ownerData._id,
      ownerData,
      {
        new: true,
        runValidator: true
      }
    )

    console.log("updated owner : ", updatedOwner);
    return success("owner created");
  } catch (error) {
    console.log(error)
  }
}
