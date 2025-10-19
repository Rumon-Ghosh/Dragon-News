import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
  const {title, details, image_url, category_id } = news;
  return (
    <div className='mt-7 shadow-md p-5'>
      <img className='w-full' src={image_url} alt="" />
      <h2 className='font-bold text-3xl my-5'>{ title}</h2>
      <p className='text-accent text-base/7'>{details}</p>
      <Link to={`/category/${category_id}`} className='btn mt-7 bg-secondary text-base-100'>All news in the category</Link>
    </div>
  );
};

export default NewsDetailsCard;
  