import UserListItem from "./UserListItem";

const UserList = ({ users }) => {
  return (
    <div className="userlist">
      <ul>
        {users.map((user) => (
          <UserListItem user={user} key={user.id} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
