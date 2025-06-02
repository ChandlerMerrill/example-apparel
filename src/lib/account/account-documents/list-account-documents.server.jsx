// app/lib/account/account-documents/list-account-documents.js
import { adminStorage } from "@/lib/firebase/firebase.admin";

// export async function listClientFiles(accountId) {
//   const [files] = await adminStorage.getFiles({
//     prefix: `accounts/${accountId}/`,
//   });

//   return await Promise.all(
//     files.map(async (file) => {
//       const [url] = await file.getSignedUrl({
//         action: "read",
//         expires: Date.now() + 60 * 60 * 1000, // 1 hour
//       });
//       console.log("File URL:", url); // Debugging line to check the URL
//       return {
//         name: file.name.split("/").pop(),
//         fullPath: file.name,
//         url,
//       };
//     })
//   );
// }

export async function listClientFiles(accountId) {
  const [files] = await adminStorage.getFiles({
    prefix: `accounts/${accountId}/`,
  });

  return await Promise.all(
    files
      .filter((file) => !file.name.endsWith("/")) // exclude folder-like blobs
      .map(async (file) => {
        const [url] = await file.getSignedUrl({
          action: "read",
          expires: Date.now() + 60 * 60 * 1000,
        });

        return {
          name: file.name.split("/").pop(),
          fullPath: file.name,
          url,
        };
      })
  );
}
