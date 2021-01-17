import React, { useState } from "react";
import "./card.css";
import { ReactComponent as Heart } from "./heart.svg";
import { ReactComponent as HeartUnfilled } from "./heart_unfilled.svg";

const addFavGrant = (setFavorite, favorite, allDatum, setHeartClicked) => {
  if (favorite.length === 0) {
    setHeartClicked(true);
    return setFavorite([...favorite, allDatum]);
  }
  for (let i = 0; i < favorite.length; i++) {
    if (favorite[i].solicitation_title === allDatum.solicitation_title) {
      // console.log("favorite: :" + favorite[i].solicitation_title);
      // console.log("alldatum: :" + allDatum.solicitation_title);
      favorite.splice(i, 1);
      // console.log("newFav: " + favorite);
      setFavorite(favorite);
      setHeartClicked(false);
    } else {
      setFavorite([...favorite, allDatum]);
      setHeartClicked(true);
    }
  }
};

const Card = (props) => {
  const {
    index,
    title,
    sol_num,
    program,
    phase,
    agency,
    branch,
    year,
    release_date,
    open_date,
    close_date,
    research_info_link,
    paper_info_link,
    current_status,
    favorite,
    setFavorite,
    allDatum
  } = props;

  const [heartClicked, setHeartClicked] = useState(false);

  // console.log(`${index}:  ${heartClicked}`);

  return (
    <div className="card">
      <h3>{title}</h3>
      <h4 className=" card_status">
        Current Status: {current_status.toUpperCase()}
      </h4>
      {heartClicked ? (
        <Heart
          onClick={() => {
            addFavGrant(setFavorite, favorite, allDatum, setHeartClicked);
          }}
        />
      ) : (
        <HeartUnfilled
          onClick={() => {
            addFavGrant(setFavorite, favorite, allDatum, setHeartClicked);
          }}
        />
      )}

      <div className="card_table">
        <div className="card_group card_group--1">
          <p className=" card_subtitles">Soliciation Number</p>
          <p className="">{sol_num ? sol_num : "None"}</p>
        </div>
        <div className="card_group card_group--2">
          <p className=" card_subtitles">Program</p>
          <p className="">{program}</p>
        </div>
        <div className="card_group card_group--3">
          <p className=" card_subtitles">Phase</p>
          <p className="">{phase}</p>
        </div>
        <div className="card_group card_group--4">
          <p className="card_subtitles">Soliciation Year</p>
          <p className="">{year}</p>
        </div>
        <div className="card_group card_group--5">
          <p className=" card_subtitles">Agency</p>
          <p className="">{agency}</p>
        </div>
        <div className="card_group card_group--6">
          <p className=" card_subtitles">Branch</p>
          <p className="">{branch}</p>
        </div>

        <div className="card_group card_group--7">
          <p className=" card_subtitles">Soliciation Link</p>
          <a href={research_info_link} className="">
            {research_info_link}
          </a>
        </div>

        <div className="card_group card_group--8">
          <p className=" card_subtitles">For More Information: </p>
          <a href={paper_info_link} className="">
            {paper_info_link}
          </a>
        </div>
      </div>
      <div className="card_dates">
        <div className="card_group card_group--release">
          <p className=" card_subtitles">Release Date</p>
          <p className="dates dates--release">{release_date}</p>
        </div>
        <div className="card_group card_group--open">
          <p className=" card_subtitles">Open Date</p>
          <p className="dates dates--open">{open_date}</p>
        </div>
        <div className="card_group card_group--close">
          <p className=" card_subtitles">Close Date</p>
          <p className="dates dates--close">{close_date}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
