import "./globals.css";
import RootShell from "@/components/RootShell";
  
export const metadata = {
  title: "TrendySales",
  description: "E-commerce Store",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RootShell>{children}</RootShell>
      </body>
    </html>
  );
}
