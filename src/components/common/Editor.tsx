import React from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import { Editor as TuiEditor, EditorProps } from "@toast-ui/react-editor";
import { forwardRef } from "react";

interface Props extends EditorProps {
  content: string;
  editorRef: React.MutableRefObject<any>;
}

const toolbarItems = [
  ["heading", "bold", "italic", "strike"],
  ["hr"],
  ["ul", "ol", "task"],
  ["table", "link"],
  ["image"],
  ["code"],
  ["scrollSync"],
];

// eslint-disable-next-line react/display-name
const Editor = forwardRef(({ content = "", editorRef, ...rest }: Props) => {
  return (
    <>
      {editorRef && (
        <TuiEditor
          ref={editorRef}
          initialValue={content || " "}
          initialEditType="wysiwyg"
          previewStyle={"tab"}
          hideModeSwitch={true}
          theme={""}
          usageStatistics={false}
          toolbarItems={toolbarItems}
          useCommandShortcut={true}
          plugins={[colorSyntax]}
          {...rest}
        />
      )}
    </>
  );
});

export default Editor;
