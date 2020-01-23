import React from "react";
import { Document, Page } from "react-pdf";

import "./Content.scss";
import document from "../../images/document.svg";

const Content = props => {
  const { selected, documents } = props;
  const currentDoc = documents.find(item => item.id === selected);
  const height = window.innerHeight - 250;

  return (
    <div className="content">
      <header className="content-header">
        <img src={document} alt="ic_document" className="ic-content-header" />
        <h1 className="file-name">{currentDoc.title}</h1>
      </header>

      {!currentDoc.url ? (
        <div className="view-file">
          <div className="file-area">DISPLAY PDF HERE</div>
        </div>
      ) : (
        <Document file={currentDoc.url} noData="">
          <Page pageNumber={1} height={height} />
        </Document>
      )}
    </div>
  );
};

Content.propTypes = {};

export default Content;
