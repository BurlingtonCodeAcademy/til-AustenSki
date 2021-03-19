import React from "react";
function Home(props) {
  <form action="/facts" method="POST" id="form">
    <input name="title" type="text" placeholder="Post Title" />
    <input name="author" type="text" placeholder="Post Author" />
    <input name="topic" type="text" placeholder="Post Topic" />
    <input name="date" type="date" />
    <textarea name="content" placeholder="What did you learn today?" />
    <input type="submit" />
  </form>;
}

export default Home;
