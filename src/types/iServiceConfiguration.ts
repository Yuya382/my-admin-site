export interface iServiceConfigurations {
	//全体のサービス名称
	globalCourseName: string;
	// コースコード
	courseCode: string;
	// 商品
	plans: string[];
	// ロゴファイル(public配下）
	logoFileName: string;
	// シリーズの名前
	SeriesName: [
		{
			priority: number;
			name: string;
			addAbleType: string[];
		},
	];
}
