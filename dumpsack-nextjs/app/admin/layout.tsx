import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel — DumpSack",
  description: "DumpSack Admin Control Panel",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Admin layout doesn't include Header/Footer
  // Just return children without wrapping in main tag
  return <>{children}</>;
}

