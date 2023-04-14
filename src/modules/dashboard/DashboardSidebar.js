import {
  IconCampaign,
  IconDashboard,
  IconLight,
  IconLogout,
  IconPayment,
  IconProfile,
  IconWithdraw,
} from "components/icons";
import React from "react";
import { NavLink } from "react-router-dom";

const sidebarLinks = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Dashboard",
    url: "/",
  },
  {
    icon: <IconCampaign></IconCampaign>,
    title: "Campaign",
    url: "/campaign",
  },
  {
    icon: <IconPayment></IconPayment>,
    title: "Payment",
    url: "/payment",
  },
  {
    icon: <IconWithdraw></IconWithdraw>,
    title: "Withdraw",
    url: "/withdraw",
  },
  {
    icon: <IconProfile></IconProfile>,
    title: "Profile",
    url: "/profile",
  },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "#",
    onClick: () => {},
  },
  {
    icon: <IconLight></IconLight>,
    title: "Light/Dark",
    url: "#",
    onClick: () => {},
  },
];

const DashboardSidebar = () => {
  return (
    <div className="w-full md:w-[76px] px-[14px] flex-shrink-0 py-10 shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] bg-white rounded-3xl flex flex-col">
      {sidebarLinks.map((link) => (
        <NavLink
          to={link.url}
          key={link.title}
          className={`flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8 text-iconColor last:mt-auto last:bg-white last:shadow-shadow1 ${({
            isActive,
          }) => (isActive ? "bg-primary" : "")}`}
        >
          <span>{link.icon}</span>
          <span className="md:hidden">{link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;
