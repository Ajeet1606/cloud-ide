const CodeEditor = () => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 p-4 bg-background overflow-auto">
        <pre className="text-sm">
          <code>{`function HelloWorld() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

export default HelloWorld;`}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeEditor;
