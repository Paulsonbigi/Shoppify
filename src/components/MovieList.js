import React, { Fragment } from 'react'
import "../App.css"
import { Card, Col, Button } from "reactstrap"
const MovieList = (props) => {

	const Nominees  = props.NomineeComp
	
    return (
        <Fragment>
            {props.movies.map((movie, index) => (

				<Col md="6" xs="12" lg="3">
					<Card body style={{ height: "200px"}} className="mb-4 display-card">
						<h5>{movie.Title}</h5>
						<h6>{movie.Year}</h6>
						<Button 
							block
							color="primary"
							onClick={() => props.handleClick(movie)}
							className='button'>
							<Nominees/>
						</Button>
					</Card>
				</Col>
			))}
        </Fragment>
    )
}

export default MovieList