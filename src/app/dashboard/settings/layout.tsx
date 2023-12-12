// Layouts in a route are nested by default. Each parent layout wraps child layouts below it using the React children prop.
export default function SettingsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="border-4 border-green-500 p-4 bg-green-50">
      {/* Include shared UI here e.g. a header or sidebar */}
      <p>Settings Layout</p>

      {children}
    </section>
  );
}
