import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from 'next/link'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Root Layout",
  description: "Root Layout description",
};

// The top-most layout is called the Root Layout.
// This required layout is shared across all pages in an application.
// Root layouts must contain html and body tags.
// The root layout is defined at the top level of the app directory and applies to all routes.
// This layout enables you to modify the initial HTML returned from the server.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Blog", href: "/blog" },
    { label: "Sales", href: "/sales" },
  ];

  return (
    <html lang="en">
      <body className={inter.className + " p-4 h-screen"}>
        <div className="border-4 border-red-500 p-4 bg-red-50">
          <p>Root layout</p>
          <nav>
            {links.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
