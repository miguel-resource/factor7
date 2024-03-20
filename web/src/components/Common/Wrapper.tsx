import Script from "next/script";
import Header from "./Header";
import Footer from "./Footer";

export const CommonWrapper = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-between bg-white">
          <Header />
          {children}

          <Footer />
        </main>
      </body>
      <Script src="https://kit.fontawesome.com/5d592560e2.js" />
    </html>
  );
};
