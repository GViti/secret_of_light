import React from "react";
import { works } from "../../../data/works";

function WorkPreview() {
    return (
        <div>
            {works.map((work) => (
                <div className="item" key={work.id}>
                    <img src={work.img} alt={`Lavoro ${work.clientName}`} />
                    <div className="content content-p">
                        <div className="title">{work.clientName}</div>
                        {/* <div className="description">{work.description}</div> */}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default WorkPreview;
