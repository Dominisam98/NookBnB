import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as homeStore from "../../store/home";
import './viewhomes.css'
import { Link } from "react-router-dom";
import { thunk_getAllHomes } from "../../store/home";

function ViewHomes() {
  const history = useHistory();
  const dispatch = useDispatch();
  const homeReducer = useSelector((state) => state.homeReducer);
  let homes = homeReducer?.allHomes
  const [homeState, setHomeState] = useState(homes);
  const [isShown, setIsShown] = useState('');



  if(!homes){
    dispatch(homeStore.thunk_getAllHomes());
  }

  useEffect(() => {
    dispatch(homeStore.thunk_getAllHomes());
  }, [dispatch]);


  return (
    <section className="background-container">
      <div className="feed-main-container">
        <div className="feed-buttons">
          <div className="buttons-container">
            <button
              className="button-guy"
              onClick={() => setHomeState(homeReducer?.allHomes)}
            >
            </button>
          </div>
        </div>
        <div className="map-and-feed">
          <div className="feed-div">
            {homeState &&
              homeState.map((home, key) => (
                <div
                  className="home-feed-container"
                  key={key}
                  onMouseEnter={() => setIsShown(home.id)}
                  onMouseLeave={() => setIsShown("")}


                     >
                  <img
                    className="feed-image"
                    onClick={() => history.push(`/homes/${home.id}`)}
                    src={home.images[0]?.url}
                    alt=""
                  />
                  <div className="home-details">
                    <div>
                      <span className="home-name">{home.name}</span>
                      <p>
                        <span className="review-color">
                          {home.reviews.length} review(s)
                        </span>
                      </p>
                    </div>
                    <div
                      className={
                        isShown == home.id
                          ? "show-images-true"
                          : "show-images-false"
                      }
                    >
                      <img
                        className="smaller-image1"
                        src={home?.images[1]?.url}
                        alt=""
                      />
                      <img
                        className="smaller-image2"
                        src={home?.images[2]?.url}
                        alt=""
                      />
                    </div>
                    <div className="host-and-price">
                      <p>Hosted by: {home.User}</p>
                      <p>{"$" + home.price}/night</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ViewHomes;
