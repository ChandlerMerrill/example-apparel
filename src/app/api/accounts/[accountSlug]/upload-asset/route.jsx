import { uploadStoreAsset } from "@/lib/portals/upload-store-asset";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // disable ISR
export const runtime = "nodejs"; // need Node Buffer

export async function POST(req, context) {
  const { storeSlug } = context.params;
  const formData = await req.formData();
  const file = formData.get("file");
  const fileType = formData.get("fileType") || "logo";

  if (!file || !(file instanceof File)) {
    return NextResponse.json({ error: "No file" }, { status: 400 });
  }

  try {
    const buffer = Buffer.from(await file.arrayBuffer());

    const url = await uploadStoreAsset({
      buffer,
      mimeType: file.type,
      storeSlug,
      fileType,
      originalName: file.name,
    });

    return NextResponse.json({ url });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
