"use client";

import Link from "next/link";
import { Home, Book, Video, FlaskRound, Bell, Beaker } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
interface NavigationItemProps {
	href: string;
	label: string;
	icon: LucideIcon;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ href, label, icon: Icon }) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<li>
			<Link
				href={href}
				className={`flex items-center w-full p-2 rounded-lg transition-colors duration-200
				${isActive ? "bg-app-black text-app-white" : "hover:bg-app-background hover:text-font-topic-50"}`}
			>
				<div className="flex flex-col justify-center items-center">
					<Icon size={16} className={`${isActive ? "text-app-white" : ""}`} />

					<span className="text-xs">{label}</span>
				</div>
			</Link>
		</li>
	);
};

const Navigation = () => {
	return (
		<nav className="fixed h-full w-24 bg-app-surface shadow-lg text-font-black-70 p-4">
			<div className="mb-6">
				<h2 className="text-lg font-bold text-font-topic-50">BLS ADMIN SITE</h2>
			</div>
			<ul className="flex flex-col space-y-2 items-center">
				<NavigationItem href="/" label="Home" icon={Home} />
				<NavigationItem href="/contents/book" label="Book" icon={Book} />
				<NavigationItem href="/contents/video" label="Video" icon={Video} />
				<NavigationItem href="/contents/keyQuestion" label="KeyQuestion" icon={FlaskRound} />
				<NavigationItem href="/setting/notification" label="Notification" icon={Bell} />
				<NavigationItem href="/contents/debug/demo" label="Demo" icon={Beaker} />
			</ul>
		</nav>
	);
};

export default Navigation;
