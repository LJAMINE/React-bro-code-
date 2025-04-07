import PropTypes from 'prop-types' 

function UserGreetings(props) {

    // if (props.isLoggedIn) {
    //     return <h2>welcome {props.UserGreetings} </h2>
    // }else{
    //     return <h2>please logged in to continue </h2>
    // }

    return (props.isLoggedIn ?
          <h2 className="welcome-message" >welcome {props.UserGreetings} </h2> 
         :<h2  className="login-message">please logged in to continue </h2>);
}

UserGreetings.PropTypes={
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,

}

UserGreetings.defaultProps={
    isLoggedIn:false,
    username:"guest"
}

export default UserGreetings

