import Script from "next/script";
import { Sidebar } from "./Sidebar";

export const WrapperAdmin = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-between bg-white">
          <section className="w-5/6">
            <Sidebar />
            {children}
          </section>
        </main>
      </body>
      <Script src="https://kit.fontawesome.com/5d592560e2.js" />
    </html>
  );
};
