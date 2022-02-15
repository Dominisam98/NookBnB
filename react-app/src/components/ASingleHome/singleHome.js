import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { useParams } from "react-router";
// import NavBar from "../navBar/NavBar.js";
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

  // const reviews = spot?.reviews
  // console.log(reviews)
  if(!homes){
    history.push('/homes')
  }

  let home;
  let homeReviews;
  if(homes){
    home = homes.filter((home) =>home["id"] == id)[0];
    // spotReviews = spot?.reviews

  }

  // if(spot){
  //   const reviews = spot?.reviews;
  //   console.log(reviews);
  // }

  let content;
  if(userId === home?.userId){
    content = (
      <div className="edit-delete">
        <div>
          <EditHomeModal />
        </div>
        <div>
          <button className="single-spot-button" onClick={() => deleteSpot(id)}>
            <i className="far fa-trash-alt"></i>Delete
          </button>
        </div>
      </div>
    );
  }


//   let reviewEdit =
//     <div className="edit-review-container">
//       <textarea
//         id="review-edit-input"
//         type="text"
//         value={editedReview}
//         onChange={(e) => setEditedReview(e.target.value)}
//         placeholder=""
//       ></textarea>
//       <span>
//         <button
//           id="edit-review-submit"
//           onClick={() => editReview(editReviewId, editedReview)}
//         >
//           Update
//         </button>
//       </span>
//     </div>


//   const postReview = async (spotId) => {
//     if (review.length < 300) {
//       await dispatch(homeStore.thunk_postReview({ review, userId, spotId }));
//       await dispatch(homeStore.thunk_getAllHomes());
//     }
//     setReview("");
//   };

  const deleteSpot = async (id) => {
    await dispatch(homeStore.thunk_deleteHome({ id }));
    await dispatch(homeStore.thunk_getAllHomes());
    history.push('/homes')
  };

//   const editReview = async (id) => {
//     let reviewId = editReviewId
//     let review = editedReview
//     if(editedReview){
//     await dispatch(homeStore.thunk_editReview({reviewId, review}))
//     await dispatch(homeStore.thunk_getAllHomes());
//     }
//     setEditSelected([false,null])
//   }

//   const deleteReview = async (reviewId) => {
//     await dispatch(homeStore.thunk_deleteReview({reviewId}))
//     await dispatch(homeStore.thunk_getAllHomes());
//   }


  useEffect(() => {
    dispatch(homeStore.thunk_getAllHomes());
  }, [dispatch, id]);

  return (
    <div className="single-post-container">
      <div className="single-spot-name">{home?.name}</div>
      {/* <div className="review-count">
        <span className="review-color">{home?.reviews.length} review(s)</span>
      </div> */}
      <div className="spot-edit-delete">
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
        <div className="host-spot-small">
          Entire house hosted by: {home?.User}
        </div>
        <div className="spot-price">Price: ${home?.price}/night</div>
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
                placeholder="Leave a review"
              ></input>
            </li>
            {/* <li>
              <button
                className="submit-review-button"
                onClick={() => postReview(home.id)}
              >
                Submit
              </button>
            </li> */}
          </ul>
          }
        </div>
      )}
      <div className="main-review-container">
        {/* {spotReviews &&
          spotReviews?.map((spot, key) => (
            <div className="review-container" key={key}>
              <div className="posted-review-container">
                <p className="posted-by">{spot?.user.username}</p>
                <div className="review-contents">{editSelected[0] && editSelected[1] == spot.id ? reviewEdit : spot?.review}</div>
              </div>
              {user?.id == spot?.userId && (
                <div className="edit-delete-button-review">
                  <button
                    className="single-spot-button"
                    onClick={() => {
                      setEditedReview(spot.review)
                      setEditReviewId(spot.id)
                      setEditSelected([!editSelected[0], spot.id])
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="single-spot-button"
                    onClick={() => deleteReview(spot.id)}
                  >
                    <i className="far fa-trash-alt"></i>Delete
                  </button>
                </div>
              )}
            </div>
          ))} */}
      </div>
    </div>
  );
}

export default SingleHome;
