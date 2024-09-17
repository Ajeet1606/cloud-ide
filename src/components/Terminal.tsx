import { ScrollArea } from "@/components/ui/scroll-area";

const Terminal = () => {
  return (
    <div className="h-1/3 bg-secondary p-2 overflow-auto">
      <ScrollArea className="h-full">
        <pre className="text-sm text-primary">
          $ npm start Starting the development server... Compiled successfully!
          You can now view your project in the browser. Local:
          http://localhost:3000 On Your Network: http://192.168.1.5:3000 Note
          that the development build is not optimized. To create a production
          build, use npm run build.
        </pre>
      </ScrollArea>
    </div>
  );
};

export default Terminal;
