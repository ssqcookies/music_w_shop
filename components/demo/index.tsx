// import Head from "next/head";

const Demo = () => {
  return <div>

    {/* <Head>
      <title>Demo</title>
      <meta name="description" content="网易云商城项目demo" />
    </Head> */}
    {/* 
    ❌ 不支持：在 App Router 中直接使用 <Head> 组件会导致报错
    应用场景：主要用于SEO优化和添加外部资源，如修改页面标题、添加meta描述、引入站点图标等
    注意事项：组件内只能包含HTML头部标签，如title、meta、link等 */}
    <h1>Demo</h1>
    <p>This is a demo component</p>

  </div>;
};

export default Demo;