export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='w-full h-[100vh]'>
      {children}
    </main>
  );
}
