import React, {Component} from 'react'
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
        Button, ModalHeader, ModalBody, Modal, FormGroup, Form, Input, Label } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this); 
        // we are doing this to create a variable called toggleNav
        // so that we can simply pass the variable into <NavbarToggler> instead of calling it as a function
        // we could have also called it as a function, this is another way of doing this

        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({isNavOpen: !this.state.isNavOpen})
    }

    toggleModal() {
        this.setState({isModalOpen: !this.state.isModalOpen})
    }

    handleLogin(event) {
        this.toggleModal();

        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);

        event.preventDefault();
    }

    render(){
        return(
            <>
                <Navbar dark expand="md">

                <div className="container">
                    
                    <NavbarToggler onClick={this.toggleNav} />

                    <NavbarBrand className="mr-auto" href="#">
                        <img src="assets/images/logo.png" height="30" width="41"/>
                    </NavbarBrand>

                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        
                        <Nav nabvar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/about">
                                    <span className="fa fa-info fa-lg"></span> About
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg"></span> Menu
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg"></span> Contact Us
                                </NavLink>
                            </NavItem>

                        </Nav>

                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModal}>
                                    <span className="fa fa-sign-in">  Login</span>
                                </Button>
                            </NavItem>
                        </Nav>

                    </Collapse>
                </div>

                </Navbar>

                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>This is the Restaurant</h1>
                                <p>Awesome Description</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Login
                    </ModalHeader>

                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="usernmae" 
                                  innerRef={(input) => this.username = input} /> 
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" 
                                  innerRef={(input) => this.password = input} /> 
                                  
                            </FormGroup>

                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input} /> 
                                   Remember Me
                                </Label>
                            </FormGroup>

                            <Button type="submit" value="submit" className="bg-primary">
                                LogIn
                            </Button>
                        </Form>

                    </ModalBody>

                </Modal>
            </>
        )
    }
}

export default Header