"use client";

import { CldUploadButton } from "next-cloudinary";

export default function ImageUploder() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-xl font-bold mb-4">Upload to Cloudinary</h1>
      
      <CldUploadButton
        uploadPreset="unsigned_preset"
        options={{ sources: ["local", "url", "camera"] }} // optional
        onSuccess={(result, { widget }) => {
          console.log("✅ Success result:", result);
          console.log("📦 Widget instance:", widget);
        }}
        onError={(error, { widget }) => {
          console.error("❌ Upload error:", error);
        }}
      />
    </main>
  );
}
