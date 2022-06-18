import PhotoForm from "features/Photo/components/PhotoForm";

import Banner from "../../../../components/Banner";
// import PhotoForm from "../../components/PhotoForm";

AddEditPage.propTypes = {};

function AddEditPage(props) {
    // console.log("add edit page");

    return (
        <div className="photo-edit">
            <Banner title="ADD EDIT PAGE" />

            <div className="photo-edit__form">
                <PhotoForm />
            </div>
        </div>
    );
}

export default AddEditPage;
