import React, { Fragment } from 'react'
import { Input } from "reactstrap"

const InputSearch = (props) => {
    return (
        <Fragment>
            <Input 
                type="text"
                value={props.search}
                id="search-input"
                onChange={(e) => props.setSearch(e.target.value)}
                placeholder="Search a movie"/>
        </Fragment>
    )
}

export default InputSearch