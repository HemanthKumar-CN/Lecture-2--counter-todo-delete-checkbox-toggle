import React from "react";

function TaskItem({title,status,color})
{
    return (
        <div>
            <h4 style={{color}}>{`${title}-${status}`}</h4>
        </div>
    )
}

export {TaskItem}