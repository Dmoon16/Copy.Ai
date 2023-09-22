import { SwipeableDrawer } from "@material-ui/core";
import React, { useState } from "react";
import Layout from "../Layout";
import BrandVoiceEdit from "./BrandVoiceEdit";
import {
	AddRounded,
	PlayForWorkRounded,
	PlusOneRounded,
	SearchRounded,
} from "@material-ui/icons";
import AnalizeBrandVoice from "./AnalizeBrandVoice";

function BrandVoice() {
	const [isEdit, setIsEdit] = useState(false);
	return (
		<Layout>
			<div className="flex flex-1 justify-center px-6 py-8 duration-500 !pt-0 !px-0">
				<div className="flex w-full flex-1 flex-col items-center max-w-screen-xl">
					<div className="min-h-72 w-full px-6 py-10">
						<div className="mb-2 text-2xl font-bold">
							Brand Voice
						</div>
						<div className="text-grey-600">
							Create different Brand Voices to use in various
							instances - ensuring consistency of your
							AI-generated content.
						</div>
						<button
							onClick={() => setIsEdit(true)}
							className="group focus:outline-none flex select-none items-center text-xs rounded-lg px-3 py-2 font-semibold focus:ring-purple-500 bg-purple-700 text-purple-100 hover:bg-purple-800 my-3 md:mt-10 ring-offset-2 focus:ring-2"
						>
							<AddRounded className="h-3 w-3 text-purple-500" />
							<h3
								className="flex-nowrap whitespace-nowrap ml-2 text-h3 font-semibold tracking-wide text-left"
								aria-label="New Brand Voice"
							>
								New Brand Voice
							</h3>
						</button>
						<div className="rounded-lg border border-grey-100">
							<div className="flex border-b border-grey-100 bg-grey-100">
								<div className="w-2/5 border-r border-grey-100 p-4 text-xs text-grey-400">
									NAME
								</div>
								<div className="w-3/5 p-4 text-xs text-grey-400">
									BRAND VOICE
								</div>
								<div className="w-20 p-4 text-xs text-grey-400">
									ACTIONS
								</div>
							</div>
							<div>
								<div className="flex cursor-pointer border-b border-grey-100">
									<div className="w-2/5 flex flex-wrap items-center border-r border-grey-100 p-3">
										<div className="truncate">strong</div>
									</div>
									<div
										style={{ whiteSpace: "break-spaces" }}
										className="w-3/5 truncate p-3"
									>
										I'm sorry, but the text provided doesn't
										seem to be valid or sufficient to
										identify a brand's voice, tone,
										audience, and style. Could you please
										provide a more substantial or meaningful
										sample?
									</div>
									<div className="w-20 p-3">
										<div
											className="relative flex"
											aria-disabled="false"
										>
											<button
												className="flex cursor-pointer items-center justify-center p-3 text-grey-600"
												id="headlessui-menu-button-75"
												type="button"
												aria-haspopup="true"
												aria-expanded="false"
											>
												<span
													className="sr-only"
													data-testid="more-button"
												>
													Open options
												</span>
												<svg
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M4 8C4 9.10457 3.10457 10 2 10C0.895431 10 0 9.10457 0 8C0 6.89543 0.895431 6 2 6C3.10457 6 4 6.89543 4 8ZM16 8C16 9.10457 15.1046 10 14 10C12.8954 10 12 9.10457 12 8C12 6.89543 12.8954 6 14 6C15.1046 6 16 6.89543 16 8ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
														fill="#6C8D9D"
													></path>
												</svg>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<SwipeableDrawer
				anchor={"left"}
				open={isEdit}
				onClose={() => setIsEdit(false)}
				onOpen={() => setIsEdit(true)}
			>
				<div className="w-full md:w-[420px]">
					<AnalizeBrandVoice setIsEdit={setIsEdit} />
				</div>
			</SwipeableDrawer>
		</Layout>
	);
}

export default BrandVoice;
