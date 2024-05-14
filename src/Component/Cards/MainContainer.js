import React from 'react';
import Card from './Card';
import Arrow from './Arrow';
import arrow1 from './Arrow1';
import './MainContainer.css';
import Arrow1 from './Arrow1';

function MainContainer() {
  return (
    <div className="container">
      <h1>Beginner to Web Dev</h1>
      <div className="card-row">
        <Card
          imgSrc="https://www.pngitem.com/pimgs/m/2-23455_website-logo-png-transparent-background-clipart-png-transparent.png"
          title="Fundamental of web & how its works"
        />
        <Arrow />
        <Card
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPmou6evgeGnMsU4Kac3TEv60q65uqVigxib1NYMmoFw&s"
          title="HTML:5 The basic & Beyond"
        />
        <Arrow />
        <Card
          imgSrc="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png"
          title="CSS:3 Responsive Layout & Design"
        />
        <Arrow />
        <Card
          imgSrc="https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Symbol.png"
          title="Javascript Basic & ECMAscript"
        />
      </div>
      <Arrow1 direction='vertical'/>
      <div className="card-row">
        <Card
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLA972a1NXwGHTIpgjxpRdu1DD5te1evggDgjNvM_FcbtGxaPYrHbV27RNzJSA_ZhrY28&usqp=CAU"
          title="Setting up route & Controller"
        />
        <Arrow  />
        <Card
          imgSrc="https://cdn.iconscout.com/icon/free/png-256/free-node-js-3628954-3030179.png?f=webp"
          title="Introduction to Backend With Node Js"
        />
        <Arrow />
        <Card
          imgSrc="https://lofrev.net/wp-content/photos/2017/04/http_logo_dpwnload.png"
          title="HTTP and Backend Fundamental"
        />
        <Arrow />
        <Card
          imgSrc="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-512.png"
          title="Learn use Git & GitHub"
        />
      </div>
      <Arrow direction="vertical" />
      <div className="card-row">
        <Card
          imgSrc="https://ih1.redbubble.net/image.438910675.6211/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"
          title="CRUD Operation on Mongo DB"
        />
        <Arrow />
        <Card
          imgSrc="https://logowik.com/content/uploads/images/google-authenticator-new-202365744.logowik.com.webp"
          title="Authentication & Authorization"
        />
        <Arrow />
        <Card
          imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          title="Introduction to Javascript Framework"
        />
        <Arrow />
        <Card
          imgSrc="https://static-00.iconduck.com/assets.00/redux-icon-512x486-1n8k02rk.png"
          title="Manage Global side With Redux"
        />
      </div>
    </div>
  );
}

export default MainContainer;
