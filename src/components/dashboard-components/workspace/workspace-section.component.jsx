// app/components/workspace/workspace-section.component.jsx
"use client";
import {
  Container,
  Heading,
  Description,
  ToolsUl,
  ToolItem,
  ToolInfo,
  ToolName,
  ToolDescription,
  ToolLink,
} from "./workspace-section.styles";

export default function WorkspaceSection({ tools }) {
  return (
    <Container>
      <Heading>Collaboration Tools</Heading>
      <Description>
        These are the tools we use to work together on your project. Click any
        of them to open in a new tab.
      </Description>

      <ToolsUl>
        {tools.map((tool) => (
          <ToolItem key={tool.id}>
            <ToolInfo>
              <ToolName>{tool.name}</ToolName>
              <ToolDescription>{tool.description}</ToolDescription>
            </ToolInfo>
            <ToolLink href={tool.url} target="_blank" rel="noopener noreferrer">
              Open
            </ToolLink>
          </ToolItem>
        ))}
      </ToolsUl>
    </Container>
  );
}
