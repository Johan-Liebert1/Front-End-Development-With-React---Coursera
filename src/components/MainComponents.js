import React, {Component} from 'react';
// we need withRouter to be able to configure the react application to work with redux
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import  {connect} from 'react-redux'

import Header from "./HeaderComponent"
import Footer from "./FooterComponent"
import Home from './HomeComponent'
import Menu from './MenuComponent'
import DishDetail from './DishDetails'
import Contact from "./ContactComponent"
import About from "./AboutComponent"

import {addComment} from "../redux/actionCreators"

// mapping states to props
const mapStateToProps = state => {
    // state is coming from the redux store
    return{
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = dispatch => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
})

class Main extends Component {

    constructor(props) {
        super(props);

    }


    render() {


        const HomePage = () => {
            return (
                // removing the code that used states, as now they are passed as props due to 
                // mapStateToProps function

                // <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                //       promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
                //       leader={this.state.leaders.filter((leader) => leader.featured)[0]}

                <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                      promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
                      leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
                // as filter reatuns an array
            )
        }

        const DishWithId = ({match}) => { 
            // match prop is passed in by the route along with location and hitory, but we only want match
            return (
                <DishDetail 
                    dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    addComment={this.props.addComment}
                    
                />
            )
        }


        const AboutUs = () => {
            return (
                <About leaders={this.props.leaders} />
            )
        }



        return (
        <div>
            <Header />

            <Switch>
                <Route path = "/home" component={HomePage} />
                <Route exact path = "/menu" component={() =>  <Menu dishes = {this.props.dishes} />  } />
                <Route path = "/menu/:dishId" component = {DishWithId} />
                <Route exact path="/contactus" component = {Contact} />
                <Route path = "/about" component = {AboutUs} />
                <Redirect to="/home" />
            </Switch>

            <Footer />
        </div>
        )
    }
}

// connecting component to redux store
export default withRouter(connect(mapStateToProps, mapDispatchToProps) (Main));
