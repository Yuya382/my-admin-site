"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { ServiceConfigurations } from "@/config/ServiceConfiguration";

const Header = () => {
	return (
		<header className="bg-app-main shadow-md max-h-20">
			<div className=" px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-4">
					{/* Logo Dropdown */}
					<div className="flex-shrink-0">
						<DropdownMenu>
							<DropdownMenuTrigger className="flex items-center focus:outline-none">
								<ChevronDown />
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuLabel>サービス選択</DropdownMenuLabel>
								<DropdownMenuSeparator />
								{ServiceConfigurations.map((service) => (
									<DropdownMenuItem key={service.globalCourseName}>
										{service.globalCourseName}
									</DropdownMenuItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>
					</div>

					{/* User Info */}
					<div className="flex items-center">
						<DropdownMenu>
							<DropdownMenuTrigger className="flex items-center space-x-3 focus:outline-none">
								<Avatar>
									<AvatarImage src="https://github.com/shadcn.png" alt="User" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<span className="text-sm font-medium text-gray-700">Name</span>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuLabel>My Account</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem>Profile</DropdownMenuItem>
								<DropdownMenuItem>Settings</DropdownMenuItem>
								<DropdownMenuItem>Logout</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
