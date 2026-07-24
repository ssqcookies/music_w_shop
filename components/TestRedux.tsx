'use client';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { increment, fetchSearchSuggest } from '@/store/modules/home';

export default function TestRedux() {
  // 读取home模块状态
  const dispatch = useAppDispatch();
  const homeState = useAppSelector(state => state.home);

  return (
    <div style={{padding:"20px"}}>
      <h3>counter：{homeState.counter}</h3>
      <button onClick={() => dispatch(increment(5))}>
        counter +5
      </button>
      <br/>
      <button onClick={() => dispatch(fetchSearchSuggest())}>
        请求搜索建议
      </button>
      <pre>{JSON.stringify(homeState.navbar, null, 2)}</pre>
    </div>
  )
}