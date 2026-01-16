import { Link } from "react-router-dom";
const ProjectDetail = () => (
  <div className="pt-32 px-6 max-w-5xl mx-auto h-screen text-center">
    <h1 className="text-4xl font-bold mb-8">项目详情</h1>
    <p className="text-zinc-500">这里是项目的具体介绍内容...</p>
    <Link to="/" className="text-blue-500 mt-8 inline-block">
      ← 返回主页
    </Link>
  </div>
);
export default ProjectDetail;
