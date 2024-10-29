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
				${isActive ? "bg-app-white text-app-black" : "hover:bg-app-background hover:text-font-topic-50"}`}
			>
				<div className="flex flex-col justify-center items-center">
					<Icon size={16} className={`${isActive ? "text-app-black" : ""}`} />

					<span className="text-xs">{label}</span>
				</div>
			</Link>
		</li>
	);
};

const GlobalNavigation = () => {
	return (
		<nav className="fixed flex flex-col h-full w-fit justify-center ml-2">
			<ul className="flex flex-col h-fit items-center bg-black rounded-2xl gap-2 py-2">
				<NavigationItem href="/" label="Home" icon={Home} />
				<NavigationItem href="/contents/del" label="配信設定" icon={Home} />
				<NavigationItem href="/contents/book" label="電子書籍" icon={Book} />
				<NavigationItem href="/contents/video" label="動画" icon={Video} />
				<NavigationItem href="/contents/keyQuestion" label="キー問題" icon={FlaskRound} />
				<NavigationItem href="/setting/notification" label="おしらせ" icon={Bell} />
				<NavigationItem href="/debug/demo" label="Demo" icon={Beaker} />
			</ul>
		</nav>
	);
};

export default GlobalNavigation;
