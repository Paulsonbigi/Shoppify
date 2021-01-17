import React from 'react'
import "../App.css"

const ListHeading = (props) => {
    return (
        <div className="col">
            <h3 className="section-header">{props.heading}</h3>
        </div>
    )
}

export default ListHeading
