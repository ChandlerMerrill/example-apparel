// app/(dashboard)/[accountSlug]/documents/page.jsx
import { listClientFiles } from "@/lib/account/account-documents/list-account-documents.server";
import { groupFilesByFolder } from "@/utils/firebase/storage/group-account-docs";
import DocumentSection from "@/components/dashboard-components/documents/document-section.component";

export const metadata = { title: "My Documents" }; // optional SEO helper

export default async function DocumentsPage() {
  const accountId = "west-jordan-soccer-club"; // TODO: make dynamic via params
  const files = await listClientFiles(accountId);
  const grouped = groupFilesByFolder(files);

  return (
    <>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
        My Documents
      </h1>

      <p style={{ marginBottom: "1.5rem", color: "#4b5563" }}>
        Find all your shared files here, organized by folder. Upload and remove
        functionality is coming soon!
      </p>

      {Object.entries(grouped).map(([folder, docs]) => (
        <DocumentSection key={folder} title={folder} docs={docs} />
      ))}
    </>
  );
}
