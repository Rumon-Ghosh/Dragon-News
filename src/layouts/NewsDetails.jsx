import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/homeLayout/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
  const [news, setNews] = useState({})
  const newsData = useLoaderData()
  const { id } = useParams()
  // console.log(newsData, id)

  useEffect(() => {
    const currentNews = newsData.find((news) => news.id == id)
  // console.log(currentNews)
      setNews(currentNews)
   }, [newsData, id])

  return (
    <div>
      <header className='py-3'>
        <Header></Header>
      </header>
      <main className='w-11/12 mx-auto grid grid-cols-4 gap-5 py-10'>
        <section className='col-span-3'>
          <h2 className='font-bold text-2xl'>Dragon News</h2>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className='col-span-1'>
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;