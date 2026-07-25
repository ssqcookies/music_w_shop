import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getDetailPageInfo, IDetailPageInfo } from '@/service/detail';

interface DetailState {
  info: IDetailPageInfo | null;
  loading: boolean;
  error: string | null;
}

const initialState: DetailState = {
  info: null,
  loading: false,
  error: null
};

// 异步请求详情
export const fetchDetailById = createAsyncThunk(
  'detail/fetchDetailById',
  async (specialTopicId: string, { rejectWithValue }) => {
    try {
      // 调用修改后的接口函数
      const res = await getDetailPageInfo(specialTopicId);
      return res
    } catch (err) {
      console.error(err);
      return rejectWithValue(err instanceof Error ? err.message : '网络请求异常')
 
    }
  }
);


const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    // 清空详情（返回上一页用）
    clearDetail: (state) => {
      state.info = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetailById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDetailById.fulfilled, (state, action) => {
        state.loading = false;
        state.info = action.payload.data;
      })
      .addCase(fetchDetailById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

export const { clearDetail } = detailSlice.actions;
export default detailSlice.reducer;