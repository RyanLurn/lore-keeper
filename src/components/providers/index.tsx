import { ConvexClientProvider } from "@/components/providers/convex";
import { ThemeProvider } from "@/components/providers/theme";
import { Toaster } from "@/components/ui/sonner";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ConvexClientProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}
        <Toaster closeButton richColors position="top-center" />
      </ThemeProvider>
    </ConvexClientProvider>
  );
}

export { Providers };
