import React, { forwardRef, LegacyRef, memo } from "react";
import {
  Editor as TuiEditor,
  EditorProps as TuiEditorProps,
} from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";

export type EditorProps = Omit<
  TuiEditorProps,
  | "previewStyle"
  | "previewHighlight"
  | "initialEditType"
  | "language"
  | "toolbarItems"
  | "usageStatistics"
  | "useCommandShortcut"
  | "plugins"
>;

const toolbarItems = [
  ["heading", "bold", "italic", "strike"],
  ["hr"],
  ["ul", "ol", "task"],
  ["table", "link"],
  ["code", "codeblock"],
];

// eslint-disable-next-line react/display-name
const Editor = forwardRef<TuiEditor, EditorProps>((props, ref) => {
  return (
    <TuiEditor
      ref={ref}
      previewStyle="tab"
      previewHighlight={true}
      initialEditType="wysiwyg"
      language="ko-KR"
      toolbarItems={toolbarItems}
      usageStatistics={false}
      useCommandShortcut={false}
      plugins={[colorSyntax]}
      {...props}
    />
  );
});

export default memo(Editor);
