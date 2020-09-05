let React = require('react');

// TODO: Create the Notification Component
// import React, {Component} from 'react';

const Notification = props => {
  return (
    <div id="app">
      <div>
        { props.message? <p> {props.message} </p> : null }
       
      </div>
    </div>
  );
}

// export default Notification;

function App() {
    // TODO: Pass Notification its props
    notificationProps = () => {
    message: 'Should we bake a pie?',
    type: 'message',
    accept: function() {
        // parent component can do something with accept
    },
    decline: function() {
        // parent component can do something with decline
    }
}
	return (
		<div id="app">
      
			<Notification message={...notifation} />
            <Confirmation message={...notification} />
		</div>
	)
}


// TODO: Create a Confirmation Component

class Confirmation extends React.Component{
state = {
              accept: false,
              decline: false
}
handleAccept  = () => {
        this.setState({ accept: !this.state.accept  })
    }
    
handleDecline  = () => {
        this.setState({ decline: !this.state.decline  })
    }
  
  
    
  return (
    <div class="alert alert-info">
           <div class="btn btn-primary" onClick={this.handleAccept}>Sure</div>
                {!this.state.accept ? 
                     <p>props.message</p>
                    <div class="btn btn-primary" onClick={this.handleAccept}>Sure</div>
                   <div class="btn btn-danger" onClick={this.handleDecline}>No Thanks</div>
               : 
                null
               }
        <div class="btn btn-danger" onClick={this.handleDecline}>No Thanks</div>
                 {!this.state.declined ? 
                           <p>props.message</p>
                          <div class="btn btn-primary" onClick={this.handleAccept}>Sure</div>
                         <div class="btn btn-danger" onClick={this.handleDecline}>No Thanks</div>
                        : 
                        null
                }
   </div>
  );
  
}
export default Confirmation
