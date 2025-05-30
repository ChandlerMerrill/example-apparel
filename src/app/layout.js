import ClientLayout from "./client-layout";
import { AppProviders } from "./providers";

export const metadata = {
  title: "Your App",
  description: "Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="app-layout" style={{ padding: 0, margin: 0 }}>
        <AppProviders>
          <ClientLayout>{children}</ClientLayout>
        </AppProviders>
      </body>
    </html>
  );
}
