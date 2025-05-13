import Footer from "@/components/footer/footer";
import NavBar from "@/components/shared/navbar";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex h-screen flex-col">
        <NavBar />
        <main className="flex-1 wrapper">
            {children}
        </main>
        <Toaster />
        <Footer />
      </div>
    );
  }