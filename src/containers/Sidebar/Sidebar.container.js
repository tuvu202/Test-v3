import React from "react";
import "./Sidebar.scss";
import logo from "../../images/logo.svg";
import Button from "../../components/Button/Button.component";
import upload from "../../images/upload.svg";
import ListItem from "../../components/ListItem/ListItem.component";

const Sidebar = props => {
  const { onClick, selected, documents, handleUpload } = props;

  return (
    <div className="side-bar" id="sidebar-wrapper">
      <img src={logo} alt="reader" className="reader-image" />

      <>
        <div className="section-title">FILES</div>
        <div className="documents-container">
          {documents &&
            documents.map(item => {
              return (
                <ListItem
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  onClick={() => onClick(item.id)}
                  active={selected === item.id}
                />
              );
            })}
        </div>
      </>

      <footer>
        <Button
          text="Upload Files"
          icon={upload}
          className="button-upload"
          onChange={handleUpload}
        />
      </footer>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
