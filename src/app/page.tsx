import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/shared/theme-toggle";

export default function Home() {
  return (
    <div className="p-5">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
      <Button>Click me</Button>
    </div>
  );
}
