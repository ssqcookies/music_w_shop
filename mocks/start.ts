if (process.env.NODE_ENV === 'development') {
  const initWorker = async () => {
    const { worker } = await import('./browser');
    await worker.start({
      onUnhandledRequest: 'bypass',
      // 增加注册超时等待
      serviceWorker: {
        url: '/mockServiceWorker.js'
      }
    });
  };
  initWorker();
}
