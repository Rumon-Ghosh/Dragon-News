import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();
  // console.log(data)

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
    } else if (id == "1") {
      const newData = data.filter(news => news.others.is_today_pick == true);
      setCategoryNews(newData);
    } else {
      const filteredData = data.filter((news) => news.category_id == id);
      setCategoryNews(filteredData);
    }
  }, [id, data]);

  return (
    <div>
      <h2 className="font-bold mb-5">Total <span className="text-secondary">{categoryNews.length}</span> news found</h2>
      <div className="grid grid-cols-1 gap-5">
        {
          categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default CategoryNews;
