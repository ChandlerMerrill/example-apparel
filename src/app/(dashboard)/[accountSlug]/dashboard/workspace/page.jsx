import WorkspaceSection from "@/components/dashboard-components/workspace/workspace-section.component";
import { getAccountData } from "@/lib/account/account-documents/getAccountData.server";

export default async function WorkspacePage({ params }) {
  const accountSlug = params.accountSlug;
  const accountData = await getAccountData(accountSlug);

  const tools = accountData.tools || [];

  return <WorkspaceSection tools={tools} />;
}
