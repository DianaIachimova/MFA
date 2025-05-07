import React from "react";
import { useEffect } from "react";
import DetailsNews from "./DetailsNews";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getOpenNewsData } from "../../store/actions/openNewsData.action";

const OpenNews = () => {
  const { newsId } = useParams();
  const dispatch = useDispatch();
  const openNewsData = useSelector((state) => state.news);
  const newsOpenData = openNewsData[newsId];

  useEffect(() => {
    if (!newsOpenData) {
      dispatch(getOpenNewsData(newsId));
    }
  }, [newsId]);

  return (
    <div>
      <DetailsNews
        key={newsOpenData.key}
        title={newsOpenData.title}
        detail={newsOpenData.detail}
        imgUrl={newsOpenData.imgUrl}
      />
    </div>
  );
};

export default OpenNews;
