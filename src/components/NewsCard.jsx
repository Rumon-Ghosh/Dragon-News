import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { title, id, author, thumbnail_url, rating, total_view, details, tags } =
    news;

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-sm">{author?.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author?.published_date).toDateString()}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-600">
          <button className="hover:text-primary">
            <FaRegBookmark />
          </button>
          <button className="hover:text-primary">
            <FaShareAlt />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h2 className="card-title text-lg font-bold mb-2">{title}</h2>
        <figure>
          <img
            src={thumbnail_url}
            alt={title}
            className="rounded-lg w-full object-cover"
          />
        </figure>
        <p className="text-sm text-gray-600 mt-3">
          {details.length > 200 ? details.slice(0, 200) + "..." : details}
        </p>
        <Link to={`/news-details/${id}`} className="text-secondary font-bold">Read More</Link>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="badge badge-outline text-xs">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-4 pt-3 border-t">
          <div className="flex items-center text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < rating.number ? "text-yellow-500" : "text-gray-300"
                }
              />
            ))}
            <span className="ml-2 text-gray-700 font-semibold">
              {rating.number}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
