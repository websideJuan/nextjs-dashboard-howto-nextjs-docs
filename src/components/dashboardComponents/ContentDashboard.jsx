
export function ContentDashboard({ children }) {
  return (
    <div
      className="col-span-10 grid h-dvh"
    >
      <main className="p-5">
        {children}
      </main>
    </div>
  );
}
