import { ScrollArea } from "@/components/ui/scroll-area";
import { File, Folder } from "lucide-react";

const FileTree = () => {
  return (
    <div className="w-64 bg-secondary p-2 overflow-auto ml-2">
      <ScrollArea className="h-full">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Folder className="h-4 w-4" />
            <span>src</span>
          </div>
          <div className="pl-4 space-y-2">
            <div className="flex items-center space-x-2">
              <File className="h-4 w-4" />
              <span>index.js</span>
            </div>
            <div className="flex items-center space-x-2">
              <File className="h-4 w-4" />
              <span>app.js</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Folder className="h-4 w-4" />
            <span>public</span>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default FileTree;
