import React from "react";
import style from "../styles/Sidebar.module.css";
import home from "../images/house-32.png";
import movies from "../images/movies.png";
import star from "../images/star.png";
import sport from "../images/sport.png";
import kids from "../images/kids.png";
import tv from "../images/tv.png";
import concert from "../images/concert.png";
import episode1 from "../images/episode1.jpg";
import episode2 from "../images/episode2.jpg";
import episode3 from "../images/episode3.jpg";
import episode4 from "../images/episode4.jpg";
import westworld from "../images/westworld.jpg";
import star2 from "../images/star2.png";
import play from "../images/play.png";
import user from "../images/user.png";


function Sidebar(props) {

    const handleClick = () =>{
        props.history.push("/")
      }
    

  return (
    <>
      <div className={style.main_div}>
        <div className={style.sidebar}>
          <span style={{ color: "#B0B0B0", marginLeft: "2.5rem" }}>
            Category
          </span>
          <ul>
            <li className={style.li_tag} onClick={handleClick}>
              <img src={home} alt="home" /> <small>Main Page</small>
            </li>
            <li className={style.li_tag}>
              <img src={tv} alt="home" />
              <small>TV-channels</small>
            </li>
            <li className={style.li_tag}>
              <img src={movies} alt="home" /> <small>Movies</small>
            </li>
            <li className={style.li_tag}>
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
            <div>
              <div className={style.c_item}>
                <img
                  className={style.image_carousel}
                  src={westworld}
                  alt="First slide"
                />
                <div className={style.detaill}>
                  <small style={{ color: "whitesmoke" }}>
                    Action || Drama || Movie || Adventure
                  </small>
                  <h2 className={style.caro_name}>Westworld</h2>
                  <div
                    style={{
                      width: "100%",
                      color: "whitesmoke",
                      lineHeight: "1",
                      marginTop: "1.2rem",
                    }}
                  >
                    <div style={{ width: "40%" }}>
                      <small>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Exercitationem ducimus maiores dolores
                        necessitatibus, ipsam facilis quam? Voluptas unde sequi
                        ducimus.
                      </small>
                    </div>

                    <p style={{ marginTop: "1.2rem" }}>Sessions</p>
                    <span className={style.seasons}>Season 1</span>
                    <span className={style.seasons}>Season 2</span>
                    <span className={style.seasons}>Season 3</span>
                    <span className={style.seasons}>Season 4</span>
                    <span className={style.seasons}>Season 5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <div style={{ display: "flex", marginTop: "2rem" }}>
                <img
                  className={style.image_Card}
                  src={episode4}
                  alt="imagemovie"
                />
                <div
                  style={{
                    marginLeft: "1rem",
                    marginTop: "1rem",
                    width: "18%",
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      fontSize: "medium",
                      fontWeight: "bold",
                    }}
                  >
                    Continue Playing
                  </p>
                  <small
                    style={{
                      color: "gray",
                    }}
                  >
                    Season 1 Series 3
                  </small>
                  <p
                    style={{
                      color: "white",
                      fontSize: "medium",
                      fontWeight: "medium",
                    }}
                  >
                    "The Stay"
                  </p>
                </div>
                <div style={{ width: "100%", float: "right" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ marginLeft: "40rem" }}>
                      <img src={play} alt="play" />{" "}
                      <small style={{ color: "white" }}>Watch Trailer</small>
                    </div>
                    <div style={{ marginLeft: "40rem" }}>
                      {" "}
                      <img src={star2} alt="play" />
                      <small
                        style={{
                          color: "white",
                          marginLeft: "8px",
                        }}
                      >
                        In to favourites
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", color: "white", marginTop: "25px" }}>
              <div style={{ width: "50%", lineHeight: "1" }}>
                <p>Desciption</p>
                <small>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  explicabo, odit similique vitae amet incidunt esse nisi porro
                  quibusdam numquam ab voluptatum ducimus? Pariatur, doloribus!
                  Porro quia enim necessitatibus mollitia, nemo unde labore illo
                  tempore commodi veniam accusamus perferendis ipsum eveniet?
                  Corporis, exercitationem optio nulla quidem suscipit doloribus
                  voluptatem blanditiis!
                </small>
              </div>
              <div>
                <ul style={{ listStyleType: "none" }}>
                  <li>
                    <small style={{ color: "gray" }}>Directors</small>{" "}
                    <small style={{ color: "white", marginLeft: "2rem" }}>
                      Jonatthan Nolan,Richard J. Leiws
                    </small>
                  </li>
                  <li>
                    <small style={{ color: "gray" }}>Cast</small>
                    <small style={{ marginLeft: "4rem" }}>
                      Anthony Hoppkin, Chris Haris, Jon Snow
                    </small>
                  </li>
                  <li>
                    <small style={{ color: "gray" }}>Country</small>
                    <small style={{ marginLeft: "2.7rem" }}>USA</small>
                  </li>
                  <li>
                    <small style={{ color: "gray" }}>Production</small>
                    <small style={{ marginLeft: "1.7rem" }}>HBO</small>
                  </li>
                </ul>
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
            Seasion 1 Series
          </p>
          <div style={{ display: "flex" }}>
            <div className={style.card_div}>
              <img
                className={style.image_Card}
                src={episode1}
                alt="imagemovie"
              />
              <div className={style.content}>
                <p className={style.para}>The Original</p>
                <small className={style.para}>Episode 1</small>
              </div>
            </div>
            <div className={style.card_div}>
              <img
                className={style.image_Card}
                src={episode2}
                alt="imagemovie"
              />
              <div className={style.content}>
                <p className={style.para}>Chestnuts</p>
                <small className={style.para}>Episode 2</small>
              </div>
            </div>
            <div className={style.card_div}>
              <img
                className={style.image_Card}
                src={episode3}
                alt="imagemovie"
              />
              <div className={style.content}>
                <p className={style.para}>The Stray</p>
                <small className={style.para}>Episode 3</small>
              </div>
            </div>
            <div className={style.card_div}>
              <img
                className={style.image_Card}
                src={episode4}
                alt="imagemovie"
              />
              <div className={style.content}>
                <p className={style.para}>Disoonance Theory</p>
                <small className={style.para}>Episode 4</small>
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
