import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeWrapper from "./components/ThemeWrapper";

export const metadata = {
  title: "Personal Portfolio",
  description: "My Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </ThemeProvider>
    </html>
  );
}