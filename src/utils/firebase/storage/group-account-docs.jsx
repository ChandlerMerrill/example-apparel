// app/(dashboard)/[accountSlug]/documents/group-files.js
// export function groupFilesByFolder(files) {
//   const grouped = {};

//   for (const file of files) {
//     const parts = file.fullPath.split("/"); // ['accounts', 'client-id', maybe-folder, file]

//     // If there's no subfolder (i.e., file is at root like `accounts/client-id/file.pdf`)
//     const folder = parts.slice(2, -1).join("/") || "Root";

//     (grouped[folder] ||= []).push(file);
//   }

//   return grouped;
// }

// app/(dashboard)/[accountSlug]/documents/group-files.js

export function groupFilesByFolder(files) {
  const tree = {};

  for (const file of files) {
    const parts = file.fullPath.split("/").slice(2); // skip 'accounts' and 'client-id'
    const fileName = parts.pop(); // last item is the file name

    let current = tree;

    for (const part of parts) {
      current[part] ||= {};
      current = current[part];
    }

    // Attach the file to a special key like "_files" at the current folder level
    (current._files ||= []).push(file);
  }

  return tree;
}
