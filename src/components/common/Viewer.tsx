import React, { memo } from "react";
import { Viewer as TuiViewer, ViewerProps } from "@toast-ui/react-editor";

import "@toast-ui/editor/dist/toastui-editor.css";

const Viewer = (props: ViewerProps) => {
  return <TuiViewer {...props} />;
};

export default memo(Viewer);
