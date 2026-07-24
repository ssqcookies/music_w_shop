import { NextResponse } from 'next/server';
import {ISearchSuggest} from "@/service/home";

export async function GET() {
  await new Promise(resolve => setTimeout(resolve, 350));

  const data: ISearchSuggest = {
    id: 30001,
    defaultKey: "蓝牙耳机",
    configKey: [
      { "1": "迪士尼Q2" },
      { "2": "日常元素" },
      { "3": "珀莱雅" },
      { "4": "真无线" },
      { "5": "漫步者" }
    ]
  };

  return NextResponse.json({
    code: 200,
    data
  });
}