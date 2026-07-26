import { NextResponse } from 'next/server';
// 把你本地 mock/detail.mock.ts 直接导入复用
import { detailMock_55001, detailMock_68001 } from '@/mocks/detail.mock';

export  function GET(request: Request) {
 
  const { searchParams } = new URL(request.url);
  const specialTopicId = searchParams.get('specialTopicId') || '';

  // 和本地mock逻辑完全一致
  let data;
  if (specialTopicId === '68001') {
    data = detailMock_68001;
  } else {
    data = detailMock_55001;
  } 

  // 统一返回格式，和MSW结构一模一样，前端零改动
  return NextResponse.json(data);
}