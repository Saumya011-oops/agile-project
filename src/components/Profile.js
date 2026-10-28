export default function Profile() {
  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div className="container mt-5">
      <div className="profile-card mx-auto">

        <div className="profile-header">
          <div className="profile-avatar">
            {user.name?.charAt(0).toUpperCase()}
          </div>

          <h2 className="mt-3">
            {user.name}
          </h2>

          <p className="text-muted">
            Valued Customer
          </p>
        </div>

        <hr />

        <div className="profile-info">

          <div className="info-box">
            <h6>Email</h6>
            <p>{user.email}</p>
          </div>

          <div className="info-box">
            <h6>Mobile Number</h6>
            <p>{user.mobilenumber}</p>
          </div>

          <div className="info-box">
            <h6>Member Since</h6>
            <p>2026</p>
          </div>

        </div>

      </div>
    </div>
  );
}