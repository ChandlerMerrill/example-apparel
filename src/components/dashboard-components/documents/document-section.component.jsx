"use client";
import { useState } from "react";
import {
  Section,
  Summary,
  FileList,
  FileRow,
  FileName,
  FileLink,
  ToggleIcon,
} from "./document-section.styles";
import { Folder } from "lucide-react";

export default function DocumentSection({ title, docs }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Section>
      <Summary
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setIsOpen((o) => !o);
        }}
      >
        <Folder
          size={20}
          style={{ marginRight: "0.5rem", flexShrink: 0, color: "#2563eb" }}
        />
        {title}
        <ToggleIcon isOpen={isOpen} aria-hidden="true" />
      </Summary>

      {isOpen && (
        <FileList>
          {docs.map((doc) => (
            <FileRow key={doc.fullPath}>
              <FileLink
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }} // optional, depends on styling
              >
                <FileName>{doc.name}</FileName>
              </FileLink>
              {/* Optional: remove the separate "View" link, or keep it */}
              {/* <FileLink
      href={doc.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      View
    </FileLink> */}
            </FileRow>
          ))}
        </FileList>
      )}
    </Section>
  );
}
