const UserProfile = ({ user }) => {
  return (
    <div>
      <h1>User Profile</h1>
      <p>Username : {user.userName}</p>
      <p>Email: {user.email}</p>
      <p>Password : ********</p>
      <button>Reset Password</button>
    </div>
  );
};

export default UserProfile;
