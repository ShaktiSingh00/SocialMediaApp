import Post from "../post/Post";
import "./posts.scss";
import my from "../../assets/images/myImg.jpeg";
import post from "../../assets/images/postimg.jpg"
import myimg from "../../assets/images/img1.jpg"

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Shakti Singh",
      userId: 1,
      profilePic:
        my,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: post,
    },
    {
      id: 2,
      name: "Aditya",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
      img : myimg,
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;