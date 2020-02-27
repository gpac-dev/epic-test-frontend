/** @jsx jsx */
import { jsx,css } from '@emotion/core';
import { useMemo } from "react";
import fileIcon from '../../img/icons/upload-file-dark.svg'
import { useDropzone } from "react-dropzone";


const LabelText = css `
   color: #5D626F;

`;

const IconStyle = css`
    width: 30px; 
    height: auto;
    margin-left: auto;
`;


const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "row",
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
    //[isDragActive, isDragReject]
  );

  return (
    <div className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p css={LabelText} className="u-margin-0 u-text-300 u-Roboto18">{props.labelFile}</p>
        <img css={IconStyle}
         src={fileIcon} alt=""/>
      </div>
    </div>
  );
}
