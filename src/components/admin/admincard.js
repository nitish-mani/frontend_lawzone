export default function AdminCard({ user }) {
  return (
    <div
      className="admin"
      style={{
        backgroundColor: user.read ? "white" : "aliceblue",
      }}
    >
      <div className="admin_name">
        <div>Name</div>
        <div>{user.name}</div>
      </div>
      <div className="admin_mob">
        <div>Phone No.</div>
        <div>{user.phoneNumber}</div>
      </div>
      <div className="admin_email">
        <div>Email</div>
        <div>{user.email}</div>
      </div>
      <div className="admin_ser">
        <div>Service</div>
        <div>{user.service}</div>
      </div>
      <div className="admin_date">
        <div>Date</div>
        <div>{user.date}</div>
      </div>
      <div className="admin_time">
        <div>Time</div>
        <div>{user.time}</div>
      </div>
    </div>
  );
}
