import ActionBar from "@/components/ActionBar";
import CodeEditor from "@/components/CodeEditor";
import FileTree from "@/components/FileTree";
import Terminal from "@/components/Terminal";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const Home = () => {
  return (
    <div className="w-full h-screen overflow-auto bg-[#f5f5f5]">
      <ActionBar />
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel>
          {/* <div className="flex"> */}
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel>
                <div className="pl-1 border-r border-x-zinc-800 h-full">
                  <FileTree />
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel>
                {/* <div className=""> */}
                  <CodeEditor />
                {/* </div> */}
              </ResizablePanel>
            </ResizablePanelGroup>
          {/* </div> */}
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <div className="w-full border-t border-zinc-800">
            <Terminal />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Home;
