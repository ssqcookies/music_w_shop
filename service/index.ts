import axios from "axios";
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const BASE_URL = "";
const TIME_OUT = 1000 * 60;
export const getApiPrefix = () => {
  if (process.env.NODE_ENV === 'development') {
    // 本地走MSW原始路径
    return '';
  }
  // 生产走Next.js App Router真实API路由 /api/xxx
  return '/api';
};

// 后端统一返回格式
export interface IResultData<T> {
  code: number;
  data: T;
}

class HYRequest {
  instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    // ✅ 修复：请求拦截器类型要用 InternalAxiosRequestConfig
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        console.log("请求拦截");
        // 可以统一添加token、请求头
        return config;
      },
      (err) => Promise.reject(err)
    );

    this.instance.interceptors.response.use(
      (res: AxiosResponse<IResultData<unknown>>) => {
        console.log("响应拦截");
        // 统一处理状态码、错误提示
        return res;
      },
      (err) => Promise.reject(err)
    );
  }

  // 通用请求方法
  request<T = unknown>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<IResultData<T>>(config)
        .then((res) => {
          // 直接剥外层，拿到后端data，外部不用每次 .data.data
          resolve(res.data.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  get<T = unknown>(url: string, params?: any): Promise<T> {
    return this.request<T>({ url, params, method: "GET" });
  }

  post<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ url, data, ...config, method: "POST" });
  }
}

export default new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT ,
});