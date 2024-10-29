import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/style/globals.css";
import React from "react";
import GlobalNavigation from "../components/[feature]/Navigation/GlobalNavigation";
import GlobalHeader from "@/components/[feature]/Header/GlobalHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Financial Security Report",
	description: "Overview of financial security measures and performance",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="jp">
			<body className={inter.className}>
				<header>
					<GlobalHeader />
				</header>
				<GlobalNavigation />
				<main className="w-fit h-fit pt-4 pl-28">{children}</main>
				<footer className=" text-app-black">@Yuya382</footer>
			</body>
		</html>
	);
}
