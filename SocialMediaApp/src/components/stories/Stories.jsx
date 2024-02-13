// import { useContext } from "react";
// import "./stories.scss"
// import { AuthContext } from "../../context/authContext"

// const Stories = () => {

//   const {currentUser} = useContext(AuthContext)

//   //TEMPORARY
//   const stories = [
//     {
//       id: 1,
//       name: "John Doe",
//       img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
//     },
//     {
//       id: 2,
//       name: "John Doe",
//       img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
//     },
//     {
//       id: 3,
//       name: "John Doe",
//       img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
//     },
//     {
//       id: 4,
//       name: "John Doe",
//       img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
//     },
//   ];

//   return (
//     <div className="stories">
//       <div className="story">
//           <img src={currentUser.profilePic} alt="" />
//           <span>{currentUser.name}</span>
//           <button>+</button>
//         </div>
//       {stories.map(story=>(
//         <div className="story" key={story.id}>
//           <img src={story.img} alt="" />
//           <span>{story.name}</span>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Stories;

import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  // TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Aditya Kumar",
      img:"https:images.pexels.com/photos/762041/pexels-photo-762041.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-762041.jpg&fm=jpg",
    },
    {
      id: 2,
      name: "Saif",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRTaSxbwgE42c0zEqZErbZ4RvulLk7OMsg1Q&usqp=CAU",
    },
    {
      id: 3,
      name: "Shikha Kumari",
      img: "https://images.pexels.com/photos/709143/pexels-photo-709143.jpeg?cs=srgb&dl=pexels-kripesh-adwani-709143.jpg&fm=jpg"
    },
    {
      id: 4,
      name: "Abhinav Ali",
      img: "https://images.pexels.com/photos/2176593/pexels-photo-2176593.jpeg?cs=srgb&dl=pexels-quang-nguyen-vinh-2176593.jpg&fm=jpg",
    },
  ];

  return (
    <div className="stories">
      {/* {currentUser && ( */}
        <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {/* )} */}
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
