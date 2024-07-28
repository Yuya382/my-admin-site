import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/style/globals.css";
import React from "react";
import Navigation from "../components/[feature]/Navigation/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Financial Security Report",
	description: "Overview of financial security measures and performance",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="jp">
			<body className={inter.className}>
				<Navigation />
				<main>{children}</main>
			</body>
		</html>
	);
}
