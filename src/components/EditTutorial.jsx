

const EditTutorial = ({editData, editTutorial, handleChange}) => {

    const saveChanges = () => {
        editTutorial(editData.id, editData.title, editData.desc)
    }
    return (
        <div>
            <div className="modal fade" tabIndex="-1" id="edit-modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    placeholder="Enter your title"
                                    value={editData.title}
                                    onChange={ handleChange}
                                    required
                                />
                            </div>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="desc" className="form-label">
                                    Description
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="desc"
                                    placeholder="Enter your Description"
                                    value={editData.desc}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button  data-bs-dismiss="modal" type="button" className="btn btn-primary" onClick={saveChanges}>
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditTutorial;