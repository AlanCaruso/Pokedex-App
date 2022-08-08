import React from "react";
import "./style.css";
import ArrowIcon from "../../img/arrow.svg";

const Pagination = (props) => {
    const { onLeftClick, onRightClick, page, totalPages } = props;
    return (
        <div className="pagination">
            <button className="pagination-button left-button">
                <img src={ArrowIcon} onClick={onLeftClick}></img>
            </button>
            <div>
                <p>{page} from {totalPages}</p>
            </div>
            <button className="pagination-button">
                <img src={ArrowIcon} onClick={onRightClick}></img>
            </button>
        </div>
    )
}

export default Pagination;