import React from "react";
import Viewer, { Worker } from "@phuocng/react-pdf-viewer";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";

const pdf = () => {
  return (
    <div>
      <h1>PDF viewer</h1>

      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js">
        <div style={{ height: "550px", width: "600px" }}>
          <Viewer fileUrl="https://res.cloudinary.com/dyrannvyu/image/upload/v1602254803/lxj6megse6ompiqbbaza.pdf" />
        </div>
      </Worker>
    </div>
  );
};

export default pdf;

// https://react-pdf-viewer.dev/examples/preview-a-document-inside-a-modal/
