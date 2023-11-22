function Display({ user }) {
  return (
    <div>
      <h1>{user.login}</h1>
      <img src={user.avatar_url} alt="profile" />
      <p>
        Profile:{" "}
        <a href={user.html_url} target="blank">
          Here
        </a>
      </p>
      {user.blog && <p>Blog: {user.blog}</p>}
      {user.bio && <p>Bio: {user.bio}</p>}
    </div>
  );
}

export default Display;
