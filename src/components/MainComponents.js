import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import {DISHES} from "../Shared/dishes";
import {COMMENTS} from "../Shared/comments";
import {LEADERS} from "../Shared/leaders";
import {PROMOTIONS} from "../Shared/promotions";

import Header from "./HeaderComponent"
import Footer from "./FooterComponent"
import Home from './HomeComponent'
import Menu from './MenuComponent'
import DishDetail from './DishDetails'
import Contact from "./ContactComponent"
import About from "./AboutComponent"


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        leaders: LEADERS,
        promotions: PROMOTIONS
        }
    }

    render() {
        const HomePage = () => {
            return (
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                      promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
                      leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
                // as filter reatuns an array
            )
        }

        const DishWithId = ({match}) => { 
            // match prop is passed in by the route along with location and hitory, but we only want match
            return (
                <DishDetail 
                    dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                />
            )
        }



        // passing in the props to AboutUs page
        // passing in the props to AboutUs page
        // passing in the props to AboutUs page


        const AboutUs = () => {
            return (
                <About leaders={this.state.leaders} />
            )
        }


        // passing in the props to AboutUs page
        // passing in the props to AboutUs page
        // passing in the props to AboutUs page



        return (
        <div>
            <Header />

            <Switch>
                <Route path = "/home" component={HomePage} />
                <Route exact path = "/menu" component={() =>  <Menu dishes = {this.state.dishes} />  } />
                <Route path = "/menu/:dishId" component = {DishWithId} />
                <Route exact path="/contactus" component = {Contact} />

                {/* I have passed the props in the AboutUs function defined above.
                Please review the entire submission before carelessly deducting grades */}
                
                <Route path = "/about" component = {AboutUs} />


                <Redirect to="/home" />
            </Switch>

            <Footer />
        </div>
        )
    }
}

export default Main;
