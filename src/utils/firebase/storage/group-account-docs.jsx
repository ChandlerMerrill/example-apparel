// app/(dashboard)/[accountSlug]/documents/group-files.js
export function groupFilesByFolder(files) {
  const grouped = {};

  for (const file of files) {
    const parts = file.fullPath.split("/"); // ['accounts', 'client-id', maybe-folder, file]

    // If there's no subfolder (i.e., file is at root like `accounts/client-id/file.pdf`)
    const folder = parts.slice(2, -1).join("/") || "Root";

    (grouped[folder] ||= []).push(file);
  }

  return grouped;
}
