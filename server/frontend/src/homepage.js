import './bootstrap.min.css';
import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div style={{display:"flex"}}>
        <img class="rounded shadow" src='/cardealership.jpeg' style={{width: "300px"}}/>
        <div style={{margin:"100px"}}>
                <span style={{margin:"15px"}}>
                    "Welcome to Best Car Dealership, where we offer a wide range of vehicles to suit your driving needs. With our knowledgeable sales team, state-of-the-art facilities, and exceptional customer service, we are committed to making your car-buying experience enjoyable and stress-free. Browse our inventory online or visit us in-store to find the perfect vehicle for you. Let us help you drive home in style today!"
                </span >
           </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
