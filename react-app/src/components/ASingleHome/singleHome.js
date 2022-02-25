import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import EditHomeModal from "../EditHomeModal"
import * as homeStore from "../../store/home";
import "./singlehome.css";

function SingleHome() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const homes = useSelector((state) => state.homeReducer.allHomes)
  const [review, setReview] = useState('');
  const [editedReview, setEditedReview] = useState('')
  const [editReviewId, setEditReviewId] = useState('')
  const [editSelected, setEditSelected] = useState([false, null])
  const userId = user?.id;
  const [errors, setErrors] = useState([]);

  if(!homes){
    history.push('/homes')
  }

  let home;
  let homeReviews;
  if(homes){
    home = homes.filter((home) =>home["id"] == id)[0];
    homeReviews = home?.reviews

  }

  if(home){
    const reviews = home?.reviews;
    console.log(reviews);
  }

  let content;
  if(userId === home?.userId){
    content = (
      <div className="edit-delete">
        <div>
          <EditHomeModal />
        </div>
        <div>
          <button className="single-home-button" onClick={() => deleteHome(id)}>
            <i className="far fa-trash-alt"></i>Delete
          </button>
        </div>
      </div>
    );
  }

  const deleteHome = async (id) => {
    await dispatch(homeStore.thunk_deleteHome({ id }));
    await dispatch(homeStore.thunk_getAllHomes());
    history.push('/homes')
  };

  const postReview = async (homeId) => {
    if (review.length > 0 & review.length < 300) {
      setErrors([]);
      await dispatch(homeStore.thunk_postReview({ review, userId, homeId }));
      await dispatch(homeStore.thunk_getAllHomes());
      setReview("");
    }else{return  setErrors(['Please provide a review'])}
  };

  let reviewEdit =
  <div className="edit-review-container">
    <textarea
      id="review-edit-input"
      type="text"
      value={editedReview}
      onChange={(e) => setEditedReview(e.target.value)}
      placeholder=""
    ></textarea>
    <span>
      <button
        id="edit-review-submit"
        onClick={() => editReview(editReviewId, editedReview)}
      >
        Update
      </button>
    </span>
  </div>


  const editReview = async (id) => {
    let reviewId = editReviewId
    let review = editedReview
    setErrors([]);
    if(editedReview){
    await dispatch(homeStore.thunk_editReview({reviewId, review}))
    await dispatch(homeStore.thunk_getAllHomes());
    } else {return setErrors(['Please provide a review, can not submit empty edit'])}
    setEditSelected([false,null])
  }

  const deleteReview = async (reviewId) => {
    await dispatch(homeStore.thunk_deleteReview({reviewId}))
    await dispatch(homeStore.thunk_getAllHomes());
  }


  useEffect(() => {
    dispatch(homeStore.thunk_getAllHomes());
  }, [dispatch, id]);

  return (
    <div className="single-post-container">
      <div className="single-home-name">{home?.name}</div>
      <div className="review-count">
        <span className="review-color">{home?.reviews.length} review(s)</span>
      </div>
      <div className="home-edit-delete">
        <div>
          {home?.address} {home?.city}, {home?.state}
        </div>
        <div>{content}</div>
      </div>
      <div className="images-container">
        <div className="main-image-container">
          <img className="main-image" src={home?.images[0].url} alt="" />
        </div>
        <div className="small-images-container">
          <img
            className="small-image"
            id="little-image-top"
            src={home?.images[1].url}
            alt=""
          />
          <img
            className="small-image"
            id="little-image-bottom"
            src={home?.images[2].url}
            alt=""
          />
        </div>
      </div>
      <div className="host-and-price-container">
        <div className="host-home-small">
          Hosted by: {home?.User}
        </div>
        <div className="home-price">Price: ${home?.price}/night</div>
      </div>
      {user && (
        <div className="post-reviews">
          {user.id !== home?.userId &&
          <ul className="review-input">
            <li>
              <input
                type="text"
                className="review-box"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Write a review"
              ></input>
            </li>
            <li>
              <button
                className="submit-review-button"
                onClick={() => postReview(home.id)}
              >
                Submit
              </button>
            </li>
            <ul className='label'>
                        {errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))}
                    </ul>
          </ul>
          }
        </div>
      )}
      <div className="main-review-container">
        {homeReviews &&
          homeReviews?.map((home, key) => (
            <div className="review-container" key={key}>
              <div className="posted-review-container">
                <p className="posted-by">{home?.user.username}</p>
                <div className="review-contents">{editSelected[0] && editSelected[1] == home.id ? reviewEdit : home?.review}</div>
              </div>
              {user?.id == home?.userId && (
                <div className="edit-delete-button-review">
                  <button
                    className="review-button"
                    onClick={() => {
                      setEditedReview(home.review)
                      setEditReviewId(home.id)
                      setEditSelected([!editSelected[0], home.id])
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="review-button"
                    onClick={() => deleteReview(home.id)}
                  >
                    <i className="far fa-trash-alt"></i>Delete
                  </button>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default SingleHome;
