import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  const newsId = router.query.newsID;
  return <div>Detail</div>;
};

export default DetailPage;
