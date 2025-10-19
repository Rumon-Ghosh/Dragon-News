import React, { use } from 'react';
import Marquee from 'react-fast-marquee';

const newsData = fetch('/news.json').then(res => res.json())

const LatestNews = () => {
  const news = use(newsData);
  // console.log(news)
  const breakingNews = news.slice(0, 3);
  // console.log(breakingNews)
  return (
    <div className='flex items-center gap-4 mt-3 bg-base-200 p-2'>
      <h1 className='text-base-100 bg-secondary px-3 py-2'>Latest</h1>
      <Marquee speed={20} direction='left' pauseOnHover={`true`}>
        {
          breakingNews.map(news => <p key={news.id} className='font-bold ml-5'>{ news?.title}</p>)
        }
      </Marquee>
    </div>
  );
};

export default LatestNews;