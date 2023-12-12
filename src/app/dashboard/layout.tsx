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
        <a href="/dashboard">Dashboard</a>
        <a href="/dashboard/users">Users</a>
        <a href="/dashboard/settings">Settings</a>
      </nav>

      {children}
    </section>
  );
}
