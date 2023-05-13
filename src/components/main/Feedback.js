import React from 'react'

const Feedback = () => {
  return (
    <div>
        <>
  {/*Modal Launch Button*/}
  <button
    type="button"
    className="btn btn-info btn-lg openmodal"
    data-toggle="modal"
    data-target="#myModal"
  >
    Open Modal
  </button>
  {/*Division for Modal*/}
  <div id="myModal" className="modal fade" role="dialog">
    {/*Modal*/}
    <div className="modal-dialog">
      {/*Modal Content*/}
      <div className="modal-content">
        {/* Modal Header*/}
        <div className="modal-header">
          <h3>Feedback Request</h3>
          {/*Close/Cross Button*/}
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            style={{ color: "white" }}
          >
            ×
          </button>
        </div>
        {/* Modal Body*/}
        <div className="modal-body text-center">
          <i className="far fa-file-alt fa-4x mb-3 animated rotateIn icon1" />
          <h3>Your opinion matters</h3>
          <h5>
            Help us improve our product? <strong>Give us your feedback.</strong>
          </h5>
          <hr />
          <h6>Your Rating</h6>
        </div>
        {/* Radio Buttons for Rating*/}
        <div className="form-check mb-4">
          <input name="feedback" type="radio" />
          <label className="ml-3">Very good</label>
        </div>
        <div className="form-check mb-4">
          <input name="feedback" type="radio" />
          <label className="ml-3">Good</label>
        </div>
        <div className="form-check mb-4">
          <input name="feedback" type="radio" />
          <label className="ml-3">Mediocre</label>
        </div>
        <div className="form-check mb-4">
          <input name="feedback" type="radio" />
          <label className="ml-3">Bad</label>
        </div>
        <div className="form-check mb-4">
          <input name="feedback" type="radio" />
          <label className="ml-3">Very Bad</label>
        </div>
        {/*Text Message*/}
        <div className="text-center">
          <h4>What could we improve?</h4>
        </div>
        <textarea
          type="textarea"
          placeholder="Your Message"
          rows={3}
          defaultValue={""}
        />
        {/* Modal Footer*/}
        <div className="modal-footer">
          <a href="" className="btn btn-primary">
            Send
            <i className="fa fa-paper-plane" />
          </a>
          <a href="" className="btn btn-outline-primary" data-dismiss="modal">
            Cancel
          </a>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default Feedback