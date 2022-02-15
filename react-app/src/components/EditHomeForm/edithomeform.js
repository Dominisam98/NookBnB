import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { useParams } from "react-router";
// import "./EditSpotForm.css";

import * as homeActions from "../../store/home";

const EditHomeForm = () => {
  const [errors, setErrors] = useState([]);
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  let currentHomes = useSelector((state) => state?.homeReducer.allHomes)
  let currentHome;
  if (currentHomes) {
    currentHome = currentHomes.filter((home) => home["id"] === id)[0];
  }
  const [price, setPrice] = useState(currentHome?.price);
  const [name, setName] = useState(currentHome?.name);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = user.id;
    await dispatch(homeActions.thunk_updateHome({ id, userId, price, name}))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      })
    await dispatch(homeActions.thunk_getAllHomes()).then(
      (res) => res && history.push("/homes")
    );
  };


  return (
    <>
      <section>
        <div>
          <form className="edit-form" onSubmit={handleSubmit}>
            <h3 className="edit-header">Edit Home</h3>
            <div>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            <div>
              <input
                className="edit-Home-input"
                name="name"
                type="input"
                placeholder="Home Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <div>
                <input
                  className="edit-Home-input"
                  name="price"
                  type="number"
                  placeholder="Price"
                  min="1"
                  max="10000"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                ></input>
              </div>
            </div>
            <button className="edit-form-button" type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default EditHomeForm;
