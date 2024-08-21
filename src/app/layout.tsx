import DarkModeProvider from "@/providers/dark-mode-proivder";
import ReactQueryProvider from "@/providers/react-query-provider";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Mentor",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <main>
          <ReactQueryProvider>
            <DarkModeProvider>
              <Theme>{children}</Theme>
            </DarkModeProvider>
          </ReactQueryProvider>
        </main>
      </body>
    </html>
  );
}
