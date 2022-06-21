import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import TimeLine from "../../components/timeline/TimeLine";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./Profile.css";

const Profile = () => {
  return (
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="/assets/post/3.jpeg"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="/assets/person/1.jpeg"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">kaity code</h4>
              <spna className="profileInfoDesc">
                駆け出しフロントエンドエンジニアです
              </spna>
            </div>
          </div>
          <div className="profileRightButtom">
            <TimeLine />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
