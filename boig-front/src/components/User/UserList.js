const UserList = ({ users }) => {
  return (
    <div className="userlist">
      <ul>
        {users.map((user) => (
          <li user={user} key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
