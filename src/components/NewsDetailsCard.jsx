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

// {
//     "id": "23456789abcdef0123456789",
//     "category_id": 2,
//     "title": "Central Bank Announces New Monetary Policy to Control Inflation",
//     "rating": {
//         "number": 3,
//         "badge": "trending"
//     },
//     "total_view": 4567,
//     "author": {
//         "name": "Aminul Islam",
//         "published_date": "2025-04-22T16:45:00.000Z",
//         "img": "https://randomuser.me/api/portraits/men/55.jpg"
//     },
//     "thumbnail_url": "https://www.tbsnews.net/sites/default/files/styles/infograph/public/images/2024/12/06/taka_mumitm-1977_0.jpg",
//     "image_url": "https://www.tbsnews.net/sites/default/files/styles/infograph/public/images/2024/12/06/taka_mumitm-1977_0.jpg",
//     "details": "The central bank of Bangladesh has unveiled its latest monetary policy statement, outlining measures intended to curb the recent rise in inflation. The new policy includes adjustments to key interest rates and reserve requirements for commercial banks. The central bank aims to stabilize prices and manage inflationary pressures effectively through these interventions. Economists are closely analyzing the potential impact of these measures on various sectors of the economy and on the overall cost of living. The effectiveness of the new monetary policy in achieving its objectives will be closely monitored in the coming months, as the nation grapples with the challenges of rising inflation.",
//     "tags": [
//         "central bank",
//         "monetary policy",
//         "inflation",
//         "economy",
//         "finance"
//     ],
//     "others": {
//         "is_today_pick": false,
//         "is_trending": false
//     },
//     "production": true
// }