import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <div>news</div>;
      <ul>
        <li>
          <Link href="/news/this-news-is-great">Great News</Link>
        </li>
        <li>
          <Link href="/news/this-news-is-not-great">Not Great News</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
