import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-screen col justify-center items-center gap-y-2.5">
      <div className="col gap-y-2.5 max-w-100">
        <h1 className="text-4xl font-black">아직도 액셀로 요구 사항을??</h1>
        <h2 className="font-light text-lg">
          파이어베이스로 지하철, 버스, 지하철 등 이동시간에 짬내서 빨리빨리
          수정하시고 삭제하세요!
        </h2>
      </div>
      <Link to="signin" className="button">
        지금 시작하세요
      </Link>
    </div>
  );
};

export default Home;
