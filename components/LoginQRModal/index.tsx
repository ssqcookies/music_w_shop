'use client';

import { Modal, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { closeLoginQRModal } from '@/store/modules/modalSlice';
import { useRouter } from 'next/navigation';

const LoginQRModal = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const visible = useSelector((state: any) => state.modal.loginQRVisible);

  // 关闭弹窗
  const handleClose = () => {
    dispatch(closeLoginQRModal());
  };

  // 跳转登录页
  const goOtherLogin = () => {
    handleClose();
    router.push('/login');
  };

  return (
    <Modal
      open={visible}
      onCancel={handleClose}
      footer={null}
      width={600}
      centered
    >
      <div className="py-6 text-center">
        <h2 className="text-[26px] font-medium text-gray-800 mb-2">登录获取更懂你的好音乐</h2>
        <p className="text-gray-500 text-lg mb-6">扫码登录</p>

        {/* 二维码图片 public/images/login-qrcode.png */}
        <div className="flex justify-center mb-6">
          <img
            src="/images/login-qrcode.png"
            alt="登录二维码"
            className="w-[300px] h-[300px] border border-gray-200"
          />
        </div>

        <p className="text-gray-500 mb-4">
          使用<span className="text-red-500 font-medium">网易云音乐APP</span> 或
          <span className="text-green-500 font-medium">微信</span> 扫码登录
        </p>

        <Button
          onClick={goOtherLogin}
          className="px-6 py-1 rounded-full border-gray-400 text-gray-600"
        >
          选择其他登录模式
        </Button>

        <div className="border-t border-gray-200 my-6"></div>

        <p
          className="text-blue-500 cursor-pointer"
          onClick={() => window.open('https://music.163.com/#/download')}
        >
          下载客户端，VIP歌曲免费听
        </p>
      </div>
    </Modal>
  );
};

export default LoginQRModal;