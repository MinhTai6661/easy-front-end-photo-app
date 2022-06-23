const { createSlice } = require('@reduxjs/toolkit');

const photo = createSlice({
    name: 'photos',
    initialState: [
        {
            id: 123,
            title: 'minh tai',
            category: 1,
            photo: ' https://picsum.photos/id/396/300/300 ',
        },
        {
            id: 234,
            title: 'cong hoa xax hoi chu nghiax viet nam',
            category: 2,
            photo: ' https://picsum.photos/id/948/300/300 ',
        },
        {
            id: 333,
            title: 'cong hoa xax hoi chu nghiax viet nam',
            category: 2,
            photo: ' https://picsum.photos/id/444/300/300 ',
        },
        {
            id: 456,
            title: 'hehehheheh hehe',
            category: 2,
            photo: ' https://picsum.photos/id/123/300/300 ',
        },
    ],
    reducers: {
        addPhoto: (state, action) => {
            state.push(action.payload);
        },
        deletePhoto: (state, action) => {
            return state.filter((photo) => photo.id !== action.payload);
        },
        editPhoto: (state, action) => {
        const newPhoto = action.payload
        console.log("🚀 ~ file: PhotoSlice.js ~ line 40 ~ newPhoto", newPhoto)

        
            const index = state.findIndex((photo)=>photo.id == newPhoto.id);

            if(index >=0){
                
                state[index] = newPhoto;
            }
          
        },
    },
});

const { actions, reducer } = photo;

export const { addPhoto, deletePhoto,editPhoto } = actions;

export default reducer;
