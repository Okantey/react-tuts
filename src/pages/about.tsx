import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

type PostData = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
// https://jsonplaceholder.typicode.com/posts
const About = () => {
  //state to keep track of the posts coming in from our server
  const [posts, setPosts] = useState<PostData[]>([]);
  // state to keep track of whether the posts is loading or not
  const [isLoading, setIsLoading] = useState(false);
  // we access the theme context by passing it to the useContext hook
  const theme = useContext(ThemeContext);
  // assess properties of the theme context using theme and the dot operator since its an object

  // eg. theme.logout, theme.isAuthenticated, theme.theme etc

  // this function handles the api request to the public api to get a lists of posts
  const handlePostFetching = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("use effect ran");
    handlePostFetching();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        {isLoading ? (
          <p className="text-8xl">Loading........</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="flex items-center gap-10">
              <h1 className="text-2xl text-blue-800">{post.id}</h1>
              <div>
                <h1 className="font-bold text-3xl text-red-800">
                  {post.title}
                </h1>
                <p>{post.body}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <button onClick={() => theme?.logout()}>Logout</button>
    </>
  );
};

export default About;
