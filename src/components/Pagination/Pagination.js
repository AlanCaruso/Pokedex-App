import React from "react";
import "./style.css";

const Pagination = (props) => {
    const { onLeftClick, onRightClick, page, totalPages } = props;
    return (
        <div className="pagination">
            <button onClick={onLeftClick}>
                <div>Back</div>
            </button>
            <div>{page} from {totalPages}</div>
            <button>
                <div onClick={onRightClick}>Next</div>
            </button>
        </div>
    )
}

export default Pagination;