import React, {Component} from 'react';
// we need withRouter to be able to configure the react application to work with redux
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import  {connect} from 'react-redux'
import {actions} from 'react-redux-form'

// IMPORTING THE COMPONENTS
import Header from "./HeaderComponent"
import Footer from "./FooterComponent"
import Home from './HomeComponent'
import Menu from './MenuComponent'
import DishDetail from './DishDetails'
import Contact from "./ContactComponent"
import About from "./AboutComponent"


import {addComment, fetchDishes, fetchComments, fetchPromos} from "../redux/actionCreators"

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
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),

    //fetchDishes is a thunk
    fetchDishes: () => {dispatch(fetchDishes())},
    resetFeedbackForm: () => {dispatch(actions.reset('feedback'))},

    fetchComments: () => {dispatch(fetchComments())},

    fetchPromos: () => {dispatch(fetchPromos())}

})

class Main extends Component {

    constructor(props) {
        super(props);

    }

    // LIFECYCLE METHOD THAT WILL BE CALLED JUST AFTER THE COMPONENT IS MOUNTED INTO THE VIEW

    componentDidMount() {
        this.props.fetchDishes()
        this.props.fetchComments();
        this.props.fetchPromos();
    }


    render() {


        const HomePage = () => {
            return (
                // removing the code that used states, as now they are passed as props due to 
                // mapStateToProps function

                // <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                //       promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
                //       leader={this.state.leaders.filter((leader) => leader.featured)[0]}

                // props.dishes.dishes becuse we changed the structure of the dishes state

                <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                      dishesLoading={this.props.dishes.isLoading}
                      dishesErrMess={this.props.dishes.errMess}
                      promotion={this.props.promotions.promotions.filter((promotion) => promotion.featured)[0]}
                      
                      promoLoading={this.props.promotions.isLoading}
                      promoErrMess={this.props.promotions.errMess}
                      leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
                // as filter reatuns an array
            )
        }

        // THIS IS BEING PASSED TO THE MENU COMPONENT

        const DishWithId = ({match}) => { 
            // match prop is passed in by the route along with location and hitory, but we only want match
            return (
                <DishDetail 
                    dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}

                    isLoading={this.props.dishes.isLoading}
                    ErrMess={this.props.dishes.errMess}
                    addComment={this.props.addComment}

                    
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    commentsErrMess={this.props.comments.errMess}
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
                <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
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
