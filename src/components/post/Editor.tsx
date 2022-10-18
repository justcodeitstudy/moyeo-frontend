import React, { memo, useRef } from "react";
import { Editor as TuiEditor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";

const Editor = () => {
  const editorRef = useRef<TuiEditor>(null);
  const toolbarItems = [
    ["heading", "bold", "italic", "strike"],
    ["hr"],
    ["ul", "ol", "task"],
    ["table", "link"],
    ["code", "codeblock"],
  ];

  return (
    <TuiEditor
      ref={editorRef}
      previewStyle="tab"
      previewHighlight={true}
      initialEditType="wysiwyg"
      initialValue=" "
      height="500px"
      language="ko-KR"
      toolbarItems={toolbarItems}
      usageStatistics={false}
      useCommandShortcut={false}
      plugins={[colorSyntax]}
    />
  );
};

export default memo(Editor);
