import Prism, { highlight } from "prismjs";
import Editor from "react-simple-code-editor";
import { playgroundData } from "./playground";

interface CodeEditorProps {
    data: playgroundData;
    setData: React.Dispatch<React.SetStateAction<playgroundData>>;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ data, setData }) => {
    return (
        <Editor
            // tailwind class to suppress border on focus of textarea
            className="w-full rounded-md border-4 border-input bg-transparent text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[300px] flex-1 p-4 md:min-h-[550px] lg:min-h-[550px]"
            value={data.code}
            onValueChange={(code) => setData({ ...data, code })}
            highlight={(code) =>
                highlight(code, Prism.languages.amrit, "amrit")
            }
            padding={10}
            style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
            }}
        />
    );
};

export default CodeEditor;
