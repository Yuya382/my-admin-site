"use client";

import { usePathname } from "next/navigation";
import React from "react";

const BookPage = () => {
	const pathname = usePathname();
	return <div>{pathname}</div>;
};

export default BookPage;
