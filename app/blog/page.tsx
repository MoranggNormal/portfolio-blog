// import React, { cache } from "react";
// import { users } from "@prisma/client";

// const getUsers = cache(() =>
// fetch("http://localhost:3000/api/users").then((res) => res.json())
// );

const Blog = () => {
  // let users = React.use<users[]>(getUsers());

  return (
    <div>
      blog-desu
      {/* {users && users.map(user => (
        user.name
      ))} */}
    </div>
  );
};

export default Blog;
