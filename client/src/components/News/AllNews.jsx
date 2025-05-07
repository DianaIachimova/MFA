import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import News from "./News";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getNewsData } from "../../store/actions/newsData.action";

const AllNews = () => {
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.news);
  const { i18n } = useTranslation();

  useEffect(() => {
    dispatch(getNewsData);
  }, []);

  return (
    <div className="grid grid-cols-2 m-10">
      {newsData.map((item) => (
        <Link to={`/${i18n.language}/news/${item.key}`}>
          <News
            key={item.id}
            data={item.data}
            title={item.title}
            detail={item.previewDetail}
            imgUrl={item.imgUrl}
          />
        </Link>
      ))}
    </div>
  );
};

export default AllNews;
