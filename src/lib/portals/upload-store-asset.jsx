// import { firestoreAdmin, adminStorage } from "./firebase/admin";

import { adminStorage, firestoreAdmin } from "../firebase/firebase.admin";

export async function uploadStoreAsset({
  buffer,
  mimeType,
  storeSlug,
  fileType,
  originalName,
}) {
  const ext = originalName.split(".").pop() || "png";
  const path = `stores/${storeSlug}/brand/${fileType}.${ext}`;

  // Upload to GCS (which backs Firebase Storage)
  const file = adminStorage.file(path);
  await file.save(buffer, {
    metadata: {
      contentType: mimeType,
      cacheControl: "public,max-age=31536000",
    },
    public: true, // anonymous GET
    // You can also rely on the bucket’s uniform ACL instead of `public: true`
  });

  const url = `https://storage.googleapis.com/${
    adminStorage.name
  }/${encodeURIComponent(path)}`;

  // Record the URL in Firestore
  await firestoreAdmin
    .collection("clients")
    .doc(storeSlug)
    .set(
      {
        assets: {
          [fileType + "Url"]: url,
        },
        updatedAt: new Date().toISOString(),
      },
      { merge: true }
    );

  return url;
}
