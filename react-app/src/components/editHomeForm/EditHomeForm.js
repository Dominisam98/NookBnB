import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { useParams } from "react-router";
import * as homeActions from "../../store/home";
import isCurrency from "validator/lib/isCurrency";
import isURL from "validator/lib/isURL";
import './editHome.css'
const EditHomeForm = () => {
  const [errors, setErrors] = useState([]);
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  let currentHomes = useSelector((state) => state?.homeReducer.allHomes)
  let currentHome;
  if (currentHomes) {
    currentHome = currentHomes.filter((home) => home["id"] == id)[0];
  }
  const [price, setPrice] = useState(currentHome?.price);
  const [name, setName] = useState(currentHome?.name);
  const [address, setAddress] = useState(currentHome?.address);
  const [imageOne, setImageOne] = useState(currentHome?.images[0]?.url)
  const [imageTwo, setImageTwo] = useState(currentHome?.images[1]?.url)
  const [imageThree, setImageThree] = useState(currentHome?.images[2]?.url)




  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = []
    if(!name){
      validationErrors.push("---Home name can't be empty---")
    }
    else if(!address){
      validationErrors.push("---address can't be empty---")
    }
    else if(!price || price > 1000 || price <= 0){
      validationErrors.push("---price has to be $1 to $1000---")
    }
    // else if(!isURL(imageOne) || !isURL(imageTwo) || !isURL(imageThree)){
    //   validationErrors.push("---Please input a valid image URL.---")
    // }
    else if(imageOne.length == 0 || imageTwo.length == 0 || imageThree.length == 0){
      validationErrors.push("---Please input a valid image URL.---")
    }
    else if (!/\.(jpe?g|png|gif|bmp)$/gi.test(imageOne) || !/\.(jpe?g|png|gif|bmp)$/gi.test(imageTwo) || !/\.(jpe?g|png|gif|bmp)$/gi.test(imageThree)) {
      validationErrors.push("---Must be a valid image url  (.jpeg, .png, .gif, .bmp---");
    }
    const userId = user.id;
    setErrors(validationErrors);
    if (!validationErrors.length) {
    await dispatch(homeActions.thunk_updateHome({ id, userId, price, name, address,
    imageOneId: currentHome?.images[0]?.id,
    imageOneUrl: imageOne,
    imageTwoId: currentHome?.images[1]?.id,
    imageTwoUrl: imageTwo,
    imageThreeId: currentHome?.images[2]?.id,
    imageThreeUrl: imageThree,}))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      })
    await dispatch(homeActions.thunk_getAllHomes()).then(
      (res) => res && history.push("/homes")
    );
    }
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
              <label className='edit-header'> Name </label>
              <input
                className="edit-Home-input"
                name="name"
                type="input"
                placeholder="Home Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <div>
                <label className='edit-header'> Price </label>
                <input
                  className="edit-Home-input"
                  name="price"
                  type="number"
                  placeholder="price"
                  max="10000"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                ></input>
              </div>
              <div>
                <label className='edit-header'> Address </label>
                <input
                  className="edit-Home-input"
                  name="address"
                  type="input"
                  placeholder="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></input>
              </div>
              <div>
                <label className='edit-header'> Image One</label>
                <input
                  className="edit-Home-input"
                  name="image-one"
                  type="input"
                  placeholder="Image URL"
                  value={imageOne}
                  onChange={(e) => setImageOne(e.target.value)}
                ></input>
              </div>
              <div>
                <label className='edit-header'> Image Two</label>
                <input
                  className="edit-Home-input"
                  name="image-two"
                  type="input"
                  placeholder="Image URL"
                  value={imageTwo}
                  onChange={(e) => setImageTwo(e.target.value)}
                ></input>
              </div>
              <div>
              <label className='edit-header'> Image Three</label>
                <input
                  className="edit-Home-input"
                  name="image-three"
                  type="input"
                  placeholder="Image URL"
                  value={imageThree}
                  onChange={(e) => setImageThree(e.target.value)}
                ></input>
              </div>

            </div>

            <button className="sub" type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default EditHomeForm;
