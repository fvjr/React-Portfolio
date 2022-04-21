import React from "react";
import Accordion from "react-bootstrap/Accordion";
import goodTreble from "../../Assets/goodTreble.png";

export default function Portfolio() {
  return (
    <div>
      <h3>Good Treble</h3>
      {/* short description */}
      {/* deployed link
      github link */}
      <h1>Applications</h1>
      <h6>Click each application name to find out more</h6>
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Good Treble</Accordion.Header>
          <Accordion.Body>
            A full-stack application using MySQL, Express, and Spotify API to
            allow users to share music playlists
            <img src={goodTreble} alt="Logo" />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Film-Bites!</Accordion.Header>
          <Accordion.Body>
            An application using JS, Materialize CSS, and APIs (OMDB and
            themealdb) to allow users to find recipe and movie suggestions based
            on user input.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Scribble</Accordion.Header>
          <Accordion.Body>
            A browser based text editor utilizing IndexedAPI and idb
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Babble</Accordion.Header>
          <Accordion.Body>
            A social network API using Mongoose and Express
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Employee Tracker</Accordion.Header>
          <Accordion.Body>
            A node based application utilizing Express, MYSQL, and JS which
            allows a user to manage an employee database.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>E-Bazaar</Accordion.Header>
          <Accordion.Body>
            An application using MySQL, Sequelize, Express, and JS which
            provides the back-end portion of an online store.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

//apps being included
// 1.) Good Treble
// 2.) Film-Bites
// 3.) Scribble
// 4.) Babble
// 5.) Employee Tracker
// 6.) E-Bazaar
