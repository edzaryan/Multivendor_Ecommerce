import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/shared/theme-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="p-5">
      <div className="flex gap-x-5 justify-end">
        <UserButton />
        <ThemeToggle />
      </div>
      <Button>Click me</Button>
    </div>
  );
}
