function Alert(props) {
  return (
    props.alert && (
      <div
        className="alert bg-danger text-white            alert-dismissible fade show mt-2"
        role="alert"
      >
        <strong>{props.alert.type}</strong> : {props.alert.msg}

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    )
  );
}

export default Alert;