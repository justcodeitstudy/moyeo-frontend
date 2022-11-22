import React from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Viewer as TuiViewer } from "@toast-ui/react-editor";

interface Props {
  content: string;
}

const Viewer = ({ content = "" }: Props) => {
  return (
    <>{content && <TuiViewer initialValue={content || ""} plugins={[]} />}</>
  );
};

export default Viewer;
