import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ChatIcon from "../../components/icons/ChatIcon";
import DbIcon from "../../components/icons/DbIcon";
import DocIcon from "../../components/icons/DocIcon";
import TemplateIcon from "../../components/icons/TemplateIcon";
import ToolIcon from "../../components/icons/ToolIcon";

function SideBar() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [activeMenu, setActiveMenu] = useState();
	useEffect(() => {
		let menu = window.location.pathname.split("/")[1];
		setActiveMenu(menu + "/");
	}, [navigate]);

	const menus = [
		{
			name: t("chat"),
			to: "/chat",
			icon: <ChatIcon />,
		},
		{
			name: t("myProjects"),
			to: "/projects",
			icon: <DocIcon className="text-slate-600 group-hover:text-slate-700 !h-4 !w-4 !mr-3" />,
		},
		{
			name: t("infoBase"),
			to: "/infobase",
			icon: <DbIcon />,
		},
		{
			name: t("templates"),
			to: "/templates",
			icon: <TemplateIcon />,
		},
		{
			name: t("tools"),
			to: "/tools",
			icon: <ToolIcon />,
		},
	];

	const handleMenu = (to) => {
		navigate(to);
	};

	return (
		<div
			id="sidebar"
			data-testid="sidebar"
			className="fixed flex md:top-0 z-50 opacity-100 w-full transition-all md:sticky md:h-screen md:w-auto md:min-w-min mt-16 md:mt-0 justify-end"
		>
			<div
				id="desktop"
				className="w-full"
			>
				<div className="flex h-screen w-full flex-col justify-start border-l border-slate-200 bg-white pt-4 pl-3 md:min-h-screen md:w-64 md:bg-slate-100 md:pl-8 md:pb-0">
					<div className="flex h-full flex-col justify-between pb-40 md:pb-0">
						<div>
							<div className="pr-3">
								<div className="hidden flex-row items-center justify-between py-2 pr-2 md:py-4 md:flex md:justify-end">
									<div className="h-8 w-20 md:w-32">
										<a href="/">
											<img src="./assets/imgs/logo.svg" />
										</a>
									</div>
								</div>
								<div className="block pr-3 md:hidden">
									<div
										tabIndex="0"
										className="z-30 flex h-20 cursor-pointer items-center justify-between py-10 sticky top-0"
									>
										<button
											className="focus:outline-none flex h-full w-full cursor-pointer items-center text-left focus:ring-0"
											id="headlessui-menu-button-7"
											type="button"
											aria-haspopup="true"
											aria-expanded="false"
										>
											<div className="flex flex-grow flex-col text-right">
												<span className="text-sm font-bold text-blue-900 line-clamp-1">
													{t("personalWorkspace")}
												</span>
												<span className="text-xs font-light text-slate-600 line-clamp-1">
													{t("freePlan")}
												</span>
											</div>
											<img
												src="https://ui-avatars.com/api/?name=Personal+Workspace&amp;color=5E7682&amp;background=F8FBFC&amp;size=100"
												alt="avatar"
												className="rounded-full border border-teal-800 shadow ml-2 h-8 w-8"
											/>
										</button>
									</div>
									<div className="border-b border-purple-100 h-0 w-full"></div>
								</div>
								<div className="mt-4 pr-3">
									<div className="absolute right-0 h-10 w-1.5 rounded-l-lg bg-teal-800"></div>
									{menus.map((item, index) => {
										return (
											<div key={index}>
												<button
													onClick={() =>
														handleMenu(item?.to)
													}
													className="group focus:outline-none flex justify-end select-none items-center 
													rounded-lg px-3 font-semibold border-0 focus:ring-teal-500 text-slate-800 hover:text-slate-900 text-md w-full py-3 hover:bg-teal-100 md:text-sm focus:shadow-none text-right"
												>
													<h3
														className="flex-nowrap whitespace-nowrap mr-2 text-h3 font-semibold tracking-wide"
														aria-label="Chat"
													>
														{item?.name}
													</h3>
													{item?.icon}
												</button>
											</div>
										);
									})}
								</div>
							</div>
						</div>
						<div className="hidden pr-6 md:block">
							<button
								data-testid="upgrade-button"
								aria-label="Upgrade to Pro"
								tabIndex="0"
								className="focus:outline-none flex select-none items-center py-3 text-xs font-medium ring-offset-2 focus:ring-2 text-white justify-center rounded-lg bg-purple-500 hover:bg-purple-700 w-full px-5"
							>
								<span className="flex-nowrap whitespace-nowrap mr-2">
									{t("upgrade")}
								</span>
								<img src="./assets/imgs/check.svg" />
							</button>
							<div
								tabIndex="0"
								className="z-30 flex h-20 cursor-pointer items-center justify-between py-10 relative"
							>
								<button
									className="focus:outline-none flex h-full w-full cursor-pointer items-center text-left focus:ring-0"
									id="headlessui-menu-button-8"
									type="button"
									aria-haspopup="true"
									aria-expanded="false"
								>
									<div className="flex flex-grow flex-col text-right">
										<span className="text-sm font-bold text-blue-900 line-clamp-1">
											{t("personalWorkspace")}
										</span>
										<span className="text-xs font-light text-slate-600 line-clamp-1">
											{t("freePlan")}
										</span>
									</div>
									<img
										src="https://ui-avatars.com/api/?name=Personal+Workspace&amp;color=5E7682&amp;background=F8FBFC&amp;size=100"
										alt="avatar"
										className="rounded-full border border-teal-800 shadow ml-2 h-8 w-8"
									/>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SideBar;