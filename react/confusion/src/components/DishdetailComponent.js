import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{

    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div>
                    <div className='row'>
                        <div className='col-12 col-md-5 m-1'>
                            <Card>
                                <CardImg width="100%" src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className='col-12 col-md-5 m-1'>
                            <h4>Comments</h4>
                            {this.renderComments(dish.comments)}
                        </div>
                    </div>
                </div>

            );
        } else {
            return (
                <div></div>
            );
        }
    }

    renderComments(comments) {
        if (comments != null) {
            const com = comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <CardText>
                            <li className="mt-3">{comment.comment}</li>
                            <li className="mt-3">-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date )))}</li>
                        </CardText>
                    </div>
                )
            })
            return (
                <ul className="list-unstyled">
                    {com}
                </ul>
            )

        } else {
            return (<div></div>)
        }
    }

    render() {


        return (
            <div className="container">
                <div className="row">
                    {this.renderDish(this.props.dish)}
                </div>
            </div>
        );
    }

}

export default DishDetail;