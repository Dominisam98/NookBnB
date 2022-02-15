const ALL_HOMES = "home/ALL_HOMES"
const ADD_HOME = "home/ADD_HOME"
const ONE_HOME = "home/ONE_HOME"
const DELETE_HOME = "home/DELETE_HOME";

const allHomes = (payload) => ({
    type: ALL_HOMES,
    payload,
})

const addHome = (payload) => ({
    type: ADD_HOME,
    payload
})

const singleHome = (payload) => ({
    type: ONE_HOME,
    payload,
});

const deleteHome = (payload) => ({
    type: DELETE_HOME,
    payload,
});



//GET ALL Homes
export const thunk_getAllHomes = () => async (dispatch) => {
    const res = await fetch(`/api/homes/`);

    if (res.ok) {
        const homes = await res.json();
        dispatch(allHomes(homes));
        return homes;
    }
};

//GET ALL Homes
export const thunk_getAPI = () => async (dispatch) => {
    const res = await fetch(`/api/api/`);

    if (res.ok) {
        const homes = await res.json();
        // dispatch(allHomes(Homes));
        return homes;
    }
};


//GET ONE HOMES
export const thunk_getOneHome = (id) => async (dispatch) => {
    const res = await fetch(`/api/homes/${id}`);

    if (res.ok) {
        const home = await res.json();
        dispatch(singleHome(home));
        return home;
    }
};

//ADD A HOMES
export const thunk_addHome =
    ({ userId, city, country, price, state, images, address, name, url }) =>
        async (dispatch) => {
            const res = await fetch("/api/homes/new/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId,
                    city,
                    country,
                    price,
                    state,
                    images,
                    address,
                    name,
                    url,
                }),
            });

            if (res.ok) {
                const home = await res.json();
                dispatch(addHome(home));
                return home;
            }
        };

//UPDATE HOMES
export const thunk_updateHome =
    ({ id, userId, price, name }) =>
        async (dispatch) => {

            const res = await fetch(`/api/homes/${id}/edit`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId,
                    price,
                    name,
                }),
            });

            if (res.ok) {
                const home = await res.json();
                dispatch(addHome(home));
                return home;
            }
        };

// DELETE HOMES
export const thunk_deleteHome = ({ id }) => async (dispatch) => {
    const res = await fetch(`/api/homes/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id
        })
    });

    if (res.ok) {
        const deletedHome = await res.json();
        dispatch(deleteHome(deletedHome));
        return "Deletion successful";
    }
};

//POST REVIEW
export const thunk_postReview =
    ({ homeId, userId, review }) =>
        async (dispatch) => {
            const res = await fetch(`/api/reviews/new/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    homeId,
                    userId,
                    review,
                }),
            });

            if (res.ok) {
                const res = await fetch(`/api/homes/`);

                if (res.ok) {
                    const homes = await res.json();
                    dispatch(allHomes(homes));
                    return homes;
                }
            }
        };

//DELETE REVIEW
export const thunk_deleteReview =
    ({ reviewId }) =>
        async (dispatch) => {
            const res = await fetch(`/api/reviews/${reviewId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    reviewId,
                }),
            });

            if (res.ok) {
                const deletedReview = await res.json();
                return "Deletion successful";
            }
        };

//EDIT REVIEW
export const thunk_editReview =
    ({ reviewId, review }) =>
        async (dispatch) => {
            const res = await fetch(`/api/reviews/${reviewId}/edit`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    reviewId,
                    review,
                }),
            });

            if (res.ok) {
                return "Update successful"
            }
        }


//HOMES REDUCER
const homeReducer = (state = {}, action) => {
    switch (action.type) {
        case ALL_HOMES: {
            const newState = { ...state };
            newState["allHomes"] = action.payload;
            return newState;
        }
        case ONE_HOME: {
            const newState = { ...state };
            newState["oneHome"] = action.payload;
            return newState;
        }
        case DELETE_HOME: {
            const newState = { ...state };
            delete newState[action.payload];
            return newState;
        }
        default:
            return state;
    }
};

export default homeReducer;
