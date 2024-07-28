"use client";

import { usePathname } from "next/navigation";
import React from "react";

const VideoPage = () => {
	const pathname = usePathname();
	return <div>{pathname}</div>;
};

export default VideoPage;
