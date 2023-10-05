import React from "react";
import YoutubeIcon from "../../components/icons/YoutubeIcon";
import FacebookIcon from "../../components/icons/FacebookIcon";
import TwitterIcon from "../../components/icons/TwitterIcon";
import LinkdinIcon from "../../components/icons/LinkdinIcon";
import InstagramIcon from "../../components/icons/InstagramIcon";

function FooterSection() {
	return (
		<div className="border-t border-purple-400 pt-8 lg:pt-11 text-white">
			<div className="sm:flex items-start justify-between text-right flex-row-reverse">
				<div className="sm:w-2/5 text-right">
					<div className="flex items-center justify-end">
						<p className="text-2xl font-bold mr-2">ذكـي</p>
						<img src="./assets/imgs/logo.png" alt="logo" className="w-14 h-14" />
					</div>
					<p className="pt-10 text-[#B0B0B0] text-sm"> © 2024 Thek AI, INC.</p>
					<div className="flex items-center justify-end pt-10 gap-2">
						<YoutubeIcon />
						<FacebookIcon />
						<TwitterIcon />
						<LinkdinIcon />
						<InstagramIcon />
					</div>
				</div>
				<div className="flex items-start justify-between sm:w-3/5 pt-6 sm:pt-0">
					<div>
						<p className="text-2xl font-bold">الشركة</p>
						<p className="pt-[18px] text-xl font-normal text-[#B0B0B0] hover:text-white cursor-pointer">
							الوظائف
						</p>
						<p className="pt-[18px] text-xl font-normal text-[#B0B0B0] hover:text-white cursor-pointer">
							التسويق بالعمولة
						</p>
						<p className="pt-[18px] text-xl font-normal text-[#B0B0B0] hover:text-white cursor-pointer">
							المراجعات
						</p>
						<p className="pt-[18px] text-xl font-normal text-[#B0B0B0] hover:text-white cursor-pointer">
							سياسة الخصوصية
						</p>
						<p className="pt-[18px] text-xl font-normal text-[#B0B0B0] hover:text-white cursor-pointer">
							شروط الخدمة
						</p>
					</div>
					<div>
						<p className="text-2xl font-bold">التعليم والدعم</p>
						<p className="pt-[18px] text-xl font-normal text-[#B0B0B0] hover:text-white cursor-pointer">
							المدونة
						</p>
						<p className="pt-[18px] text-xl font-normal text-[#B0B0B0] hover:text-white cursor-pointer">
							الأوامر
						</p>
						<p className="pt-[18px] text-xl font-normal text-[#B0B0B0] hover:text-white cursor-pointer">
							الدعم الفني
						</p>
					</div>
					<div>
						<p className="text-2xl font-bold">المنتجات</p>
						<p className="pt-[18px] text-xl font-normal text-[#B0B0B0] hover:text-white cursor-pointer">
							محادثة ذكي
						</p>
						<p className="pt-[18px] text-xl font-normal text-[#B0B0B0] hover:text-white cursor-pointer">
							القوالب
						</p>
						<p className="pt-[18px] text-xl font-normal text-[#B0B0B0] hover:text-white cursor-pointer">
							الحماية
						</p>
						<p className="pt-[18px] text-xl font-normal text-[#B0B0B0] hover:text-white cursor-pointer">
							حالات الإستخدام
						</p>
						<p className="pt-[18px] text-xl font-normal text-[#B0B0B0] hover:text-white cursor-pointer">
							الأسعار
						</p>
						<p className="pt-[18px] text-xl font-normal text-[#B0B0B0] hover:text-white cursor-pointer">
							تسجيل الدخول إلى ذكي
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FooterSection;
