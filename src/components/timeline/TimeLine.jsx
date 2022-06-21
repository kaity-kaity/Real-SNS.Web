import React from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./TimeLine.css";
import { Posts } from "../../dummyData";

const TimeLine = () => {
  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {Posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
