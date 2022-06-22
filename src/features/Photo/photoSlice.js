const { createSlice } = require('@reduxjs/toolkit');

const photo = createSlice({
    name: 'photos',
    initialState: [],
    reducers: {
        addPhoto: (state, action) => {
            state.push(action.payload);
        },
        deletePhoto: (state, action) => {
            state.splice(action.payload, 1);
        },
    },
});

const { actions, reducer } = photo;

export const { addPhoto, deletePhoto } = actions;

export default reducer;
