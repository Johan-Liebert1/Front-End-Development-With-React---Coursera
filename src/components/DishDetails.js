import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom'


function RenderComments({comments}) {
    if (comments == null) {
        return (<div></div>)
    }

    const Comments = comments.map(comment => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author},
                &nbsp;
                {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                </p>
            </li>
        )
    })

    return (
        <div className='col-12 col-md-5 m-1'>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {Comments}
            </ul>
        </div>    
    )
}

function RenderDish({dish}) {
    if (dish != null) {
        return (
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    else {
        return (<div></div>)
    }
}

const DishDetail = (props) => {
    const dish = props.dish
    const comments = props.comments
    if (dish == null) {
        return (<div></div>)
    }
    const dishItem = <RenderDish dish={dish} />
    const commentItem = <RenderComments comments={comments}/>

    return (
        <div className="container">

            <div className="row">

                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                </Breadcrumb>

                <div className="col-12">
                    <h3>{dish.name}</h3>
                    <hr/>
                </div>
            </div>

            <div className='row'>
                {dishItem}
                {commentItem}
            </div>
        </div>
        
    )
}


export default DishDetail