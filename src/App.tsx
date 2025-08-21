import { toast } from "sonner";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <ModeToggle className="fixed top-3 right-3" />
      <Button onClick={() => toast.info("Hello")}>Click me</Button>
    </div>
  );
}

export default App;
