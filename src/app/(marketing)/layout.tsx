export default function MarketingLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="border-4 border-yellow-500 p-4 bg-yellow-50">
      {/* Include shared UI here e.g. a header or sidebar */}
      <p>Marketing Layout</p>

      {children}
    </section>
  );
}
