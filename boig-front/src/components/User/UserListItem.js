const UserListItem = ({ user }) => {
  return (
    <ul>
      <p>{user.name}</p>
      <button>Edit User</button>
      <button>Send password reset email</button>
    </ul>
  );
};

export default UserListItem;
