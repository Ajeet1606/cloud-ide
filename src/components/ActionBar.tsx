import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, Save, Settings } from "lucide-react";

const ActionBar = () => {
  return (
    <div className="flex items-center justify-between p-2 bg-secondary border-b-zinc-800 border-b">
      <div className="flex items-center space-x-2">
        <h3 className="text-lg font-semibold">CodeIt</h3>
        <Button variant="ghost" size="icon">
          <Save className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Play className="h-4 w-4" />
        </Button>
      </div>
      <Input className="w-1/2" placeholder="Search..." />
      <Button variant="ghost" size="icon">
        <Settings className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ActionBar;
