import Link from 'next/link'

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="border-4 border-blue-500 p-4 bg-blue-50">
      {/* Include shared UI here e.g. a header or sidebar */}
      <p>Dashboard Layout</p>
      <nav>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/users">Users</Link>
        <Link href="/dashboard/settings">Settings</Link>
      </nav>

      {children}
    </section>
  );
}
