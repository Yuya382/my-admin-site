"use client";

import { usePathname } from "next/navigation";
import React from "react";

const KeyQuestionPage = () => {
	const pathname = usePathname();
	return <div>{pathname}</div>;
};

export default KeyQuestionPage;
