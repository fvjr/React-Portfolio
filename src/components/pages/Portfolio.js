import React from "react";
import Accordion from "react-bootstrap/Accordion";
import goodTreble from "../../Assets/goodTreble.png";
import filmBites from "../../Assets/filmBites.png";
import scribble from "../../Assets/scribble.png";
import babble from "../../Assets/babble.png";
import employeeTracker from "../../Assets/employeeTracker.png";
import eBazaar from "../../Assets/eBazaar.png";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Image from "react-bootstrap/Image";

const styles = {
  textAlign: "center",
};
export default function Portfolio() {
  return (
    <div
      className="container-fluid flex-column w-75 justify-content-center text-center"
      styles={styles}
    >
      <div className="row p-2">
        <div className="col-12 col-sm-6 col-md-4">
          <div className="card card-bg">
            <img
              className="card-img-top"
              alt="good treble application logo"
              src={goodTreble}
              fluid="true"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Good-Treble</h5>
              <p className="card-text">
                A full-stack application using MySQL, Express, and Spotify API
                to allow users to share music playlists.
              </p>
              <div className="d-flex justify-content-around">
                <Button
                  variant="primary"
                  href="https://github.com/fvjr/Good-Treble"
                >
                  GitHub
                </Button>
                <Button
                  variant="warning"
                  href="https://good-treble.herokuapp.com/login"
                >
                  Deployed
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <div className="card card-bg">
            <img
              className="card-img-top"
              alt="scribble application"
              src={filmBites}
            />
            <div className="card-body">
              <h5 className="card-title text-center">Film-Bites!</h5>
              <p className="card-text">
                An application using JS, Materialize CSS, and APIs (OMDB and
                themealdb) to allow users to find recipe and movie suggestions
                based on user input.
              </p>
              <div className="d-flex justify-content-around">
                <Button
                  variant="primary"
                  href="https://github.com/fvjr/Film-Bites"
                >
                  GitHub
                </Button>
                <Button
                  variant="warning"
                  href="https://mbarrientos1129.github.io/mighty-mustangs-Project-1-Group"
                >
                  Deployed
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <div className="card card-bg">
            <img
              className="card-img-top"
              alt="scribble app in use showing written text"
              src={scribble}
              fluid="true"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Scribble</h5>
              <p className="card-text">
                A browser based text editor utilizing IndexedAPI and idb.
              </p>
              <div className="d-flex justify-content-around">
                <Button
                  variant="primary"
                  href="https://github.com/fvjr/Scribble"
                >
                  GitHub
                </Button>
                <Button
                  href="https://scribble-text-editor.herokuapp.com/"
                  variant="warning"
                >
                  Deployed
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <div className="card card-bg">
            <img
              className="card-img-top"
              alt="babble application data information displayed"
              src={babble}
              fluid="true"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Babble</h5>
              <p className="card-text">
                A social network API using Mongoose and Express.
              </p>
              <div className="d-flex justify-content-around">
                <Button variant="primary" href="https://github.com/fvjr/Babble">
                  GitHub
                </Button>
                <Button
                  variant="warning"
                  href="https://drive.google.com/file/d/15O5y0R1whoZoN1SrX51Rd0EkE75-RpyV/view"
                >
                  Video
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <div className="card card-bg">
            <img
              className="card-img-top"
              alt="application in use showing employee information"
              src={employeeTracker}
              fluid="true"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Employee Tracker</h5>
              <p className="card-text">
                A node based application utilizing Express, MYSQL, and JS which
                allows a user to manage an employee database.
              </p>
              <div className="d-flex justify-content-around">
                <Button
                  variant="primary"
                  href="https://github.com/fvjr/Employee-Tracker"
                >
                  GitHub
                </Button>
                <Button
                  variant="warning"
                  href="https://drive.google.com/file/d/12BDzwH9aYJAi9b3HdV0bxOF0CgCIlbl7/view"
                >
                  Video
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <div className="card card-bg">
            <img
              className="card-img-top"
              alt="ebazaar application data information displayed"
              src={eBazaar}
              fluid="true"
            />
            <div className="card-body">
              <h5 className="card-title text-center">E-Bazaar</h5>
              <p className="card-text">
                An application using MySQL, Sequelize, Express, and JS which
                provides the back-end portion of an online store.
              </p>
              <div className="d-flex justify-content-around">
                <Button
                  variant="primary"
                  href="https://github.com/fvjr/e-Bazaar"
                >
                  GitHub
                </Button>
                <Button
                  variant="warning"
                  href="https://drive.google.com/file/d/1LnHAhmJHO1vjBvhw7bl4s-4TAIAVWKyU/view"
                >
                  Video
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
