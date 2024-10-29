import { ContentsType } from "@/config/ContentsType";
import { iServiceConfigurations } from "@/types/iServiceConfiguration";

export const ServiceConfigurations: iServiceConfigurations[] = [
	{
		//全体のサービス名称
		globalCourseName: "ServiceName",
		// コースコード
		courseCode: "",
		// 商品
		plans: ["route-full-pack"],
		// ロゴファイル(public配下）
		logoFileName: "titleLogo/route.svg",
		// シリーズの名前
		SeriesName: [
			{
				priority: 1,
				name: "",
				addAbleType: [ContentsType.Book, ContentsType.Video, ContentsType.Series],
			},
		],
	},
];
