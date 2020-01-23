import React from "react";
import "./ListItem.scss";
import document from "../../images/document.svg";

const ListItem = props => {
  const { title, description, onClick, active } = props;

  return (
    <div className={`list-item ${active ? "active" : ""}`} onClick={onClick}>
      <img src={document} alt="ic_document" className="ic-list-item" />
      <div className="item-content">
        <span className="item-name">{title}</span>
        <div className="item-description">{description}</div>
      </div>
    </div>
  );
};

ListItem.propTypes = {};

export default ListItem;
