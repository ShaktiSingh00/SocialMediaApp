import "./share.scss";
import Image from "../../assets/images/img.png";
import Map from "../../assets/images/map.png";
import Friend from "../../assets/images/friend.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Share = () => {
  const { currentUser } = useContext(AuthContext);

  // Check if currentUser is null or undefined before accessing its properties
  const profilePic = currentUser ? currentUser.profilePic : '';

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img src={profilePic} alt="" />
          <input type="text" placeholder={`What's on your mind ${currentUser ? currentUser.name : ''}?`} />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;