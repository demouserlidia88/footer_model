import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import teamLeader from '../Images/MariusBirsan.jpg';
import scrumMaster from '../Images/Dan Retegan.jpeg';
import webDeveloper from '../Images/Cristina Laes.png';
import webDeveloper1 from '../Images/Rares Dragan.png';
import webDeveloper2 from '../Images/Robert Uta.png';
import webDeveloper3 from '../Images/Lidia.png';

class FooterControl extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div>
        <footer>
          <button type="button" onClick={this.showModal}>
            Apasa aici
          </button>
          <div className="footer">
            <div className="sb_footer section_padding">
              <hr className="hr_footer"></hr>

              <div className="sb_footer-below">
                <div className="sb_footer-copyright">
                  <p>
                    @{new Date().getFullYear()} Money Guard. by GoIT Students.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <h4>The project was made by&#8758;</h4>
            <ul>
              <li>
                <img
                  src={teamLeader}
                  alt="Team leader"
                  width="200px"
                  height="200px"
                />
                <div className="status">
                  <span className="name">Marius Birsan</span>
                  <span className="position">
                    Team Leader&#44; web developer
                  </span>
                  <div>
                    <a href="https://github.com/MariusBirsan">
                      <icon></icon>
                    </a>
                    <a href=""></a>
                    <a href=""></a>
                  </div>
                </div>
              </li>
              <li>
                <img
                  src={scrumMaster}
                  alt="Scrum Master"
                  width="200px"
                  height="200px"
                />
                <div className="status">
                  <span className="name">Dan Retegan</span>
                  <span className="position">
                    Scrum Master&#44; web developer
                  </span>
                  <div>
                    <a href="https://github.com/danretegan">
                      <icon></icon>
                    </a>
                    <a href=""></a>
                    <a href=""></a>
                  </div>
                </div>
              </li>
              <li>
                <img
                  src={webDeveloper}
                  alt="Web developer"
                  width="200px"
                  height="200px"
                />
                <div className="status">
                  <span className="name">Cristina Laes</span>
                  <span className="position">
                    Web developer&#44; web developer
                  </span>
                  <div>
                    <a href="https://github.com/danretegan">
                      <icon></icon>
                    </a>
                    <a href=""></a>
                    <a href=""></a>
                  </div>
                </div>
              </li>
              <li>
                <img
                  src={webDeveloper1}
                  alt="Web developer"
                  width="200px"
                  height="200px"
                />
                <div className="status">
                  <span className="name">Rares Dragan</span>
                  <span className="position">
                    Web developer&#44; web developer
                  </span>
                  <div>
                    <a href="https://github.com/danretegan">
                      <icon></icon>
                    </a>
                    <a href=""></a>
                    <a href=""></a>
                  </div>
                </div>
              </li>
              <li>
                <img
                  src={webDeveloper2}
                  alt="Web developer"
                  width="200px"
                  height="200px"
                />
                <div className="status">
                  <span className="name">Robert Uta</span>
                  <span className="position">
                    Web developer&#44; web developer
                  </span>
                  <div>
                    <a href="https://github.com/danretegan">
                      <icon></icon>
                    </a>
                    <a href=""></a>
                    <a href=""></a>
                  </div>
                </div>
              </li>
              <li>
                <img
                  src={webDeveloper3}
                  alt="Web developer"
                  width="200px"
                  height="200px"
                />
                <div className="status">
                  <span className="name">Lidia Molodiuc</span>
                  <span className="position">
                    Web developer&#44; web developer
                  </span>
                  <div>
                    <a href="https://github.com/demouserlidia88">
                      <icon></icon>
                    </a>
                    <a href=""></a>
                    <a href=""></a>
                  </div>
                </div>
              </li>
            </ul>
          </Modal>
        </footer>
      </div>
    );
  }
}

export default FooterControl;
