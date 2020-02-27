/** @jsx jsx */
import { useMemo } from "react";

import { jsx } from '@emotion/core';
//import styled from '@emotion/styled'


import { useDropzone } from "react-dropzone";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  height: 56,
  width: 280,
  borderWidth: 0,
  borderRadius: 30,
  borderColor: "none",
  borderStyle: "dashed",
  backgroundColor: "#D4D7DD",
  color: "var(--black)",
  outline: "none",
  transition: "border .24s ease-in-out"
};

const activeStyle = {
  borderColor: "#2196f3"
};

const acceptStyle = {
  borderColor: "#00e676"
};

const rejectStyle = {
  borderColor: "#ff1744"
};

export default function FileUpload(props) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({ accept: "image/*" });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }),
    [isDragActive, isDragReject]
  );

  return (
    <div className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p className="u-margin-0 u-text-300 u-Roboto18">{props.labelFile}</p>
      </div>
    </div>
  );
}
