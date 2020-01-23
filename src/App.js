import React, { useState } from "react";
import "./App.scss";
import Sidebar from "./containers/Sidebar/Sidebar.container";
import Content from "./containers/Content/Content.container";
import icNav from "./images/menu.svg";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(1);
  const [documents, addDocuments] = useState([
    {
      id: 1,
      title: "Document 01",
      description: "Nam vel porta velit"
    },
    {
      id: 2,
      title: "Document 02",
      description: "Nam vel porta velit"
    }
  ]);

  const toggle = () => {
    setShowSidebar(!showSidebar);
  };

  const handleClick = id => {
    setSelectedDoc(id);
  };

  const handleUpload = e => {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      const newData = [
        ...documents,
        {
          id: Math.random(),
          title: `Document ${`${`0${documents.length + 1}`.slice(-2)}`}`,
          description: "Nam vel porta velit",
          url: reader.result
        }
      ];
      addDocuments(newData);
    };
    if (reader) {
    }
    reader.readAsDataURL(file);
  };

  return (
    <div className="App">
      <div
        className={`app-container ${showSidebar ? "toggled" : ""}`}
        id="wrapper"
      >
        <Sidebar
          onClick={handleClick}
          selected={selectedDoc}
          documents={documents}
          handleUpload={handleUpload}
        />
        <div id="page-content-wrapper">
          <nav className="navbar">
            <img src={icNav} alt="toggle" onClick={toggle} width="24px" />
          </nav>
          <Content selected={selectedDoc} documents={documents} />
        </div>
      </div>
    </div>
  );
};

export default App;
