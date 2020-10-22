import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Link } from "react-router-dom";
// import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Signup = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const pdfload = () => (
    <Document
      file="https://res.cloudinary.com/dyrannvyu/image/upload/v1602254803/lxj6megse6ompiqbbaza.pdf"
      onLoadSuccess={onDocumentLoadSuccess}
    >
      <Page pageNumber={pageNumber} />
    </Document>
  );

  // const download = () => (
  //   <div>
  //     <PDFDownloadLink document={<pdfload />} fileName="hello">
  //       {({ blob, url, loading, error }) =>
  //         loading ? "Loading document..." : "Download now!"
  //       }
  //     </PDFDownloadLink>
  //   </div>
  // );

  return (
    <>
      {pdfload()}
      {/* {download()} */}
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
        <Link
          to="https://res.cloudinary.com/dyrannvyu/image/upload/v1602254803/lxj6megse6ompiqbbaza.pdf"
          target="_blank"
          download
        >
          Download
        </Link>
      </div>
    </>
  );
};

export default Signup;
