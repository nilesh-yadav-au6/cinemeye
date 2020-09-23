import React from "react";
import style from "../styles/Sidebar.module.css";
import home from "../images/house-32.png";
import movies from "../images/movies.png";
import star from "../images/star.png";
import sport from "../images/sport.png";
import kids from "../images/kids.png";
import tv from "../images/tv.png";
import concert from "../images/concert.png";
import image1 from "../images/image1.jpg";
import adventure from "../images/adventure.jpg";
import drama from "../images/drama.jpg";
import fantastic from "../images/fantastic.jpg";
import comedy from "../images/comedy.jpg";
import bridge from "../images/bridge.jpg";
import midway from "../images/midway.jpg";
import jumanji from "../images/jumanji.jpg";
import gentlemen from "../images/gentlemen.jpg";
import play from "../images/play.png";
import user from "../images/user.png";
import { Carousel } from "react-bootstrap";

function Sidebar(props) {


  const handleClick = () =>{
    props.history.push("/tvseries")
  }

  return (
    <>
      <div className={style.main_div}>
        <div className={style.sidebar}>
          <span style={{ color: "#B0B0B0", marginLeft: "2.5rem" }}>
            Category
          </span>
          <ul>
          <li className={style.li_tag}>
              <img src={home} alt="home" /> <small>Main Page</small>
            </li>
            <li className={style.li_tag}>
              <img src={tv} alt="home" />
              <small>TV-channels</small>
            </li>
            <li className={style.li_tag}>
              <img src={movies} alt="home" /> <small>Movies</small>
            </li>
            <li className={style.li_tag} onClick={handleClick}>
              <img src={movies} alt="home" />
              <small>TV series</small>
            </li>
            <li className={style.li_tag}>
              <img src={concert} alt="home" />
              <small>Concerts</small>
            </li>
            <li className={style.li_tag}>
              <img src={sport} alt="home" />
              <small>Sport</small>
            </li>
            <li className={style.li_tag}>
              <img src={kids} alt="home" />
              <small>For Kids</small>
            </li>
            <li className={style.li_tag}>
              <img src={star} alt="home" />
              <small>Favourites</small>
            </li>
            <li className={style.li_tag}>
              <img src={user} alt="home" />
              <small>Personal data</small>
            </li>
          </ul>
        </div>
        <div className={style.caraousel}>
          <div>
            <Carousel>
              <Carousel.Item className={style.c_item}>
                <img
                  className={style.image_carousel}
                  src={image1}
                  alt="First slide"
                />
                <div className={style.detaill}>
                  <small style={{ color: "whitesmoke" }}>
                    Action || Drama || Movie || Adventure
                  </small>
                  <h2 className={style.caro_name}>Interstellar</h2>
                  <div style={{ margin: "1.5rem 0" }}>
                    <span>
                      <img src={play} alt="play" />{" "}
                      <small style={{ color: "white", opacity: "1" }}>
                        Watch Trailer
                      </small>
                    </span>
                    <span>
                      {" "}
                      <img src={star} width="2%" alt="play" />
                      <small
                        style={{
                          color: "white",
                          opacity: "1",
                          marginLeft: "8px",
                        }}
                      >
                        Add to favourites
                      </small>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "40%",
                      color: "whitesmoke",
                      lineHeight: "1",
                      marginTop: "1.2rem",
                    }}
                  >
                    <small>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Exercitationem ducimus maiores dolores necessitatibus,
                      ipsam facilis quam? Voluptas unde sequi ducimus.
                    </small>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div>
            <div style={{ margin: "25px 0" }}>
              <span
                style={{
                  color: "white",
                  width: "20rem",
                  fontSize: "large",
                  fontWeight: "bold",
                  marginTop: "25px",
                }}
              >
                Movie Collections{" "}
              </span>
              <span className={style.collection}>All Collections</span>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className={style.card_div}>
              <img
                className={style.image_Card}
                src={adventure}
                alt="imagemovie"
              />
              <div className={style.content}>
                <p className={style.para}>Adventure</p>
                <small className={style.para}>
                  Collection of the film that amaze
                </small>
              </div>
            </div>
            <div className={style.card_div}>
              <img
                className={style.image_Card}
                src={fantastic}
                alt="imagemovie"
              />
              <div className={style.content}>
                <p className={style.para}>Fantastic</p>
                <small className={style.para}>
                  Collection of the film that amaze
                </small>
              </div>
            </div>
            <div className={style.card_div}>
              <img className={style.image_Card} src={comedy} alt="imagemovie" />
              <div className={style.content}>
                <p className={style.para}>Comedy</p>
                <small className={style.para}>
                  Collection of the film that amaze
                </small>
              </div>
            </div>
            <div className={style.card_div}>
              <img className={style.image_Card} src={drama} alt="imagemovie" />
              <div className={style.content}>
                <p className={style.para}>Dramma</p>
                <small className={style.para}>
                  Collection of the film that amaze
                </small>
              </div>
            </div>
          </div>
          <p
            style={{
              color: "white",
              marginTop: "25px",
              fontSize: "large",
              fontWeight: "bold",
            }}
          >
            Season 1 Series
          </p>
          <div style={{ display: "flex" }}>
            <div className={style.card_div}>
              <img
                className={style.image_Card}
                src={jumanji}
                alt="imagemovie"
              />
              <div className={style.content}>
                <p className={style.para}>Jumanji:The Next Level</p>
                <small className={style.para}>Fanstasy,Adventure,Comedy</small>
              </div>
            </div>
            <div className={style.card_div}>
              <img className={style.image_Card} src={midway} alt="imagemovie" />
              <div className={style.content}>
                <p className={style.para}>Midway</p>
                <small className={style.para}>Action,Adventure,Drama</small>
              </div>
            </div>
            <div className={style.card_div}>
              <img className={style.image_Card} src={bridge} alt="imagemovie" />
              <div className={style.content}>
                <p className={style.para}>21 Bridges</p>
                <small className={style.para}>Action, Thriller</small>
              </div>
            </div>
            <div className={style.card_div}>
              <img
                className={style.image_Card}
                src={gentlemen}
                alt="imagemovie"
              />
              <div className={style.content}>
                <p className={style.para}>The Gentlemen</p>
                <small className={style.para}>Action Comedy</small>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Sidebar;
