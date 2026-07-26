import InitLoadData from '@/components//home/InitLoadData';
import HomeContent from '@/components/home/HomeContent';

// 服务端页面，只做结构嵌套，不写任何hooks
export default function Home() {
  return (
    <main>
      {/* 1. 挂载就自动请求所有接口存入redux（只执行一次） */}
      <InitLoadData />

      {/* 2. 客户端子组件从redux读取数据渲染 */}
      <HomeContent />
    </main>
  );
}