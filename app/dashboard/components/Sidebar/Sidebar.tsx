"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import ClickOutside from "@/components/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";
import Update from "./Updat";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    name: "MENU",
    menuItems: [
      {
        icon: (
          <svg
            className="fill-current"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z"
              fill=""
            />
            <path
              d="M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z"
              fill=""
            />
            <path
              d="M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z"
              fill=""
            />
            <path
              d="M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z"
              fill=""
            />
          </svg>
        ),
        label: "Dashboard",
        route: "/dashboard",
      },
      {
        icon: <span>&gt;_</span>,
        label: "Console",
        route: "/dashboard/console",
      },
      {
        icon: (
          <svg
            width="15"
            height="18"
            viewBox="0 0 15 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.20801 0.666626C1.17247 0.666626 0.333008 1.50609 0.333008 2.54163V15.4583C0.333008 16.4938 1.17247 17.3333 2.20801 17.3333H8.45834C9.48801 17.3333 10.3238 16.5034 10.3333 15.476L10.3335 15.4584V14.2084C10.3335 13.8632 10.0538 13.5834 9.70851 13.5834C9.33034 13.5834 9.09242 13.4816 8.92784 13.3494C8.75451 13.21 8.61159 12.995 8.50201 12.6917C8.27484 12.0625 8.25026 11.233 8.25017 10.4583C8.25017 10.3 8.19009 10.1476 8.08209 10.032C8.01851 9.96379 7.97584 9.91763 7.94509 9.88446C7.86976 9.80304 7.86617 9.79921 7.80301 9.73971C7.74142 9.68179 7.55334 9.50221 6.81717 8.76638C6.42676 8.37613 6.21026 8.04588 6.13942 7.79363C6.10701 7.67804 6.10867 7.59179 6.12642 7.52238C6.14409 7.45354 6.18742 7.36313 6.29701 7.2535C6.40651 7.14393 6.49676 7.10083 6.56517 7.08332C6.63409 7.06565 6.72009 7.06401 6.83542 7.09654C7.08751 7.16765 7.41751 7.38454 7.80809 7.77538C8.25776 8.22529 8.68509 8.64788 9.06784 9.02646C9.70076 9.65229 10.2125 10.1584 10.5017 10.4682C10.7372 10.7205 11.1327 10.7341 11.385 10.4986C11.6373 10.2631 11.651 9.86763 11.4155 9.61529C11.1783 9.36121 10.7973 8.97988 10.3332 8.51996L10.3331 5.71688L12.7009 8.08471C13.0525 8.43629 13.2501 8.91321 13.2501 9.41046V16.7083C13.2501 17.0535 13.5299 17.3333 13.8751 17.3333C14.2203 17.3333 14.5001 17.0535 14.5001 16.7083V9.41046C14.5001 8.58171 14.1708 7.78688 13.5848 7.20078L10.3331 3.94908L10.333 2.54158C10.333 1.50606 9.49359 0.666626 8.45801 0.666626H2.20801ZM8.14459 14.3235C8.41234 14.5388 8.72601 14.6888 9.08334 14.768V14.8333H8.45842C8.11326 14.8333 7.83342 15.1131 7.83342 15.4583V16.0833H6.58342V15.4583C6.58342 14.7138 7.01734 14.0706 7.64601 13.768C7.77942 13.972 7.94309 14.1615 8.14459 14.3235ZM7.00101 10.7049C7.00259 10.9157 7.00717 11.1435 7.01992 11.3798C6.54376 11.7178 5.96176 11.9165 5.33342 11.9165C3.72256 11.9165 2.41672 10.6107 2.41672 8.99988C2.41672 7.38904 3.72256 6.08322 5.33342 6.08322C5.46726 6.08322 5.59892 6.09223 5.72801 6.10968C5.61684 6.18376 5.51184 6.2709 5.41301 6.36975C5.16935 6.61345 4.99692 6.89511 4.91568 7.21172C4.83459 7.52779 4.8542 7.84029 4.93596 8.13146C5.0935 8.69263 5.49034 9.20754 5.93351 9.65046C6.66951 10.386 6.86959 10.5779 6.94659 10.6502C6.95134 10.6547 6.95492 10.658 6.95767 10.6605C6.96059 10.6632 6.96259 10.665 6.96426 10.6664L6.96751 10.6693C6.97184 10.6733 6.97584 10.6776 6.99767 10.7013L7.00101 10.7049ZM2.83342 1.91663H4.08342V2.54122C4.08342 3.57675 3.24395 4.41622 2.20842 4.41622H1.58301V3.16622H2.20842C2.55359 3.16622 2.83342 2.8864 2.83342 2.54122V1.91663ZM6.58342 1.91663H7.83342V2.54122C7.83342 2.8864 8.11326 3.16622 8.45842 3.16622H9.08309V4.41622H8.45842C7.42284 4.41622 6.58342 3.57675 6.58342 2.54122V1.91663ZM4.08342 16.0833H2.83342V15.4583C2.83342 15.1131 2.55359 14.8333 2.20842 14.8333H1.58301V13.5833H2.20842C3.24395 13.5833 4.08342 14.4228 4.08342 15.4583V16.0833Z"
              fill="#9CA3AF"
            />
          </svg>
        ),
        label: "Connect IG",
        route: "/dashboard/connect",
      },
      {
        icon: (
          <svg
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.83301 4.20829C2.83301 3.86312 3.11167 3.58329 3.45542 3.58329H8.46059C8.80434 3.58329 9.08301 3.86312 9.08301 4.20829C9.08301 4.55347 8.80434 4.83329 8.46059 4.83329H3.45542C3.11167 4.83329 2.83301 4.55347 2.83301 4.20829ZM3.45542 11.0833C3.11167 11.0833 2.83301 11.3631 2.83301 11.7083C2.83301 12.0535 3.11167 12.3333 3.45542 12.3333H8.46059C8.80434 12.3333 9.08301 12.0535 9.08301 11.7083C9.08301 11.3631 8.80434 11.0833 8.46059 11.0833H3.45542ZM2.83301 7.95829C2.83301 7.61313 3.11167 7.33329 3.45542 7.33329H8.46059C8.80434 7.33329 9.08301 7.61313 9.08301 7.95829C9.08301 8.30346 8.80434 8.58329 8.46059 8.58329H3.45542C3.11167 8.58329 2.83301 8.30346 2.83301 7.95829ZM0.333008 2.54163C0.333008 1.50609 1.17247 0.666626 2.20801 0.666626H9.70801C10.7435 0.666626 11.583 1.50609 11.583 2.54163V13.375C11.583 14.4105 10.7435 15.25 9.70801 15.25H2.20801C1.17247 15.25 0.333008 14.4105 0.333008 13.375V2.54163ZM1.58623 2.47773C1.5841 2.49873 1.58301 2.52005 1.58301 2.54163V13.375C1.58301 13.7201 1.86283 14 2.20801 14H9.70801C10.0532 14 10.333 13.7201 10.333 13.375V2.54163C10.333 2.19645 10.0532 1.91663 9.70801 1.91663H2.20801C1.8844 1.91663 1.61824 2.16256 1.58623 2.47773ZM4.29207 17.3333C3.47568 17.3333 2.78116 16.8115 2.52377 16.0833H9.70876C11.2045 16.0833 12.4171 14.8707 12.4171 13.375V6.44737L13.1179 7.14819C13.4695 7.49979 13.6671 7.97671 13.6671 8.47404V13.375C13.6671 15.5611 11.8948 17.3333 9.70876 17.3333H4.29207Z"
              fill="#9CA3AF"
            />
          </svg>
        ),
        label: "Invoices",
        route: "/dashboard/invoices",
      },

      {
        icon: (
          <svg
            className="fill-current"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_130_9763)">
              <path
                d="M17.0721 7.30835C16.7909 6.99897 16.3971 6.83022 15.9752 6.83022H15.8909C15.7502 6.83022 15.6377 6.74585 15.6096 6.63335C15.5815 6.52085 15.5252 6.43647 15.4971 6.32397C15.4409 6.21147 15.4971 6.09897 15.5815 6.0146L15.6377 5.95835C15.9471 5.6771 16.1159 5.28335 16.1159 4.86147C16.1159 4.4396 15.9752 4.04585 15.6659 3.73647L14.569 2.61147C13.9784 1.99272 12.9659 1.9646 12.3471 2.58335L12.2627 2.6396C12.1784 2.72397 12.0377 2.7521 11.8971 2.69585C11.7846 2.6396 11.6721 2.58335 11.5315 2.55522C11.3909 2.49897 11.3065 2.38647 11.3065 2.27397V2.13335C11.3065 1.26147 10.6034 0.55835 9.73148 0.55835H8.15648C7.7346 0.55835 7.34085 0.7271 7.0596 1.00835C6.75023 1.31772 6.6096 1.71147 6.6096 2.10522V2.21772C6.6096 2.33022 6.52523 2.44272 6.41273 2.49897C6.35648 2.5271 6.32835 2.5271 6.2721 2.55522C6.1596 2.61147 6.01898 2.58335 5.9346 2.49897L5.87835 2.4146C5.5971 2.10522 5.20335 1.93647 4.78148 1.93647C4.3596 1.93647 3.96585 2.0771 3.65648 2.38647L2.53148 3.48335C1.91273 4.07397 1.8846 5.08647 2.50335 5.70522L2.5596 5.7896C2.64398 5.87397 2.6721 6.0146 2.61585 6.09897C2.5596 6.21147 2.53148 6.29585 2.47523 6.40835C2.41898 6.52085 2.3346 6.5771 2.19398 6.5771H2.1096C1.68773 6.5771 1.29398 6.71772 0.984604 7.0271C0.675229 7.30835 0.506479 7.7021 0.506479 8.12397L0.478354 9.69897C0.450229 10.5708 1.15335 11.274 2.02523 11.3021H2.1096C2.25023 11.3021 2.36273 11.3865 2.39085 11.499C2.4471 11.5833 2.50335 11.6677 2.53148 11.7802C2.5596 11.8927 2.53148 12.0052 2.4471 12.0896L2.39085 12.1458C2.08148 12.4271 1.91273 12.8208 1.91273 13.2427C1.91273 13.6646 2.05335 14.0583 2.36273 14.3677L3.4596 15.4927C4.05023 16.1115 5.06273 16.1396 5.68148 15.5208L5.76585 15.4646C5.85023 15.3802 5.99085 15.3521 6.13148 15.4083C6.24398 15.4646 6.35648 15.5208 6.4971 15.549C6.63773 15.6052 6.7221 15.7177 6.7221 15.8302V15.9427C6.7221 16.8146 7.42523 17.5177 8.2971 17.5177H9.8721C10.744 17.5177 11.4471 16.8146 11.4471 15.9427V15.8302C11.4471 15.7177 11.5315 15.6052 11.644 15.549C11.7002 15.5208 11.7284 15.5208 11.7846 15.4927C11.9252 15.4365 12.0377 15.4646 12.1221 15.549L12.1784 15.6333C12.4596 15.9427 12.8534 16.1115 13.2752 16.1115C13.6971 16.1115 14.0909 15.9708 14.4002 15.6615L15.5252 14.5646C16.144 13.974 16.1721 12.9615 15.5534 12.3427L15.4971 12.2583C15.4127 12.174 15.3846 12.0333 15.4409 11.949C15.4971 11.8365 15.5252 11.7521 15.5815 11.6396C15.6377 11.5271 15.7502 11.4708 15.8627 11.4708H15.9471H15.9752C16.819 11.4708 17.5221 10.7958 17.5502 9.92397L17.5784 8.34897C17.5221 8.01147 17.3534 7.5896 17.0721 7.30835ZM16.2284 9.9521C16.2284 10.1208 16.0877 10.2615 15.919 10.2615H15.8346H15.8065C15.1596 10.2615 14.569 10.6552 14.344 11.2177C14.3159 11.3021 14.2596 11.3865 14.2315 11.4708C13.9784 12.0333 14.0909 12.7365 14.5409 13.1865L14.5971 13.2708C14.7096 13.3833 14.7096 13.5802 14.5971 13.6927L13.4721 14.7896C13.3877 14.874 13.3034 14.874 13.2471 14.874C13.1909 14.874 13.1065 14.874 13.0221 14.7896L12.9659 14.7052C12.5159 14.2271 11.8409 14.0865 11.2221 14.3677L11.1096 14.424C10.4909 14.6771 10.0971 15.2396 10.0971 15.8865V15.999C10.0971 16.1677 9.95648 16.3083 9.78773 16.3083H8.21273C8.04398 16.3083 7.90335 16.1677 7.90335 15.999V15.8865C7.90335 15.2396 7.5096 14.649 6.89085 14.424C6.80648 14.3958 6.69398 14.3396 6.6096 14.3115C6.3846 14.199 6.1596 14.1708 5.9346 14.1708C5.54085 14.1708 5.1471 14.3115 4.83773 14.6208L4.78148 14.649C4.66898 14.7615 4.4721 14.7615 4.3596 14.649L3.26273 13.524C3.17835 13.4396 3.17835 13.3552 3.17835 13.299C3.17835 13.2427 3.17835 13.1583 3.26273 13.074L3.31898 13.0177C3.7971 12.5677 3.93773 11.8646 3.6846 11.3021C3.65648 11.2177 3.62835 11.1333 3.5721 11.049C3.3471 10.4583 2.7846 10.0365 2.13773 10.0365H2.05335C1.8846 10.0365 1.74398 9.89585 1.74398 9.7271L1.7721 8.1521C1.7721 8.0396 1.82835 7.98335 1.85648 7.9271C1.8846 7.89897 1.96898 7.84272 2.08148 7.84272H2.16585C2.81273 7.87085 3.40335 7.4771 3.65648 6.88647C3.6846 6.8021 3.74085 6.71772 3.76898 6.63335C4.0221 6.07085 3.9096 5.36772 3.4596 4.91772L3.40335 4.83335C3.29085 4.72085 3.29085 4.52397 3.40335 4.41147L4.52835 3.3146C4.61273 3.23022 4.6971 3.23022 4.75335 3.23022C4.8096 3.23022 4.89398 3.23022 4.97835 3.3146L5.0346 3.39897C5.4846 3.8771 6.1596 4.01772 6.77835 3.7646L6.89085 3.70835C7.5096 3.45522 7.90335 2.89272 7.90335 2.24585V2.13335C7.90335 2.02085 7.9596 1.9646 7.98773 1.90835C8.01585 1.8521 8.10023 1.82397 8.21273 1.82397H9.78773C9.95648 1.82397 10.0971 1.9646 10.0971 2.13335V2.24585C10.0971 2.89272 10.4909 3.48335 11.1096 3.70835C11.194 3.73647 11.3065 3.79272 11.3909 3.82085C11.9815 4.1021 12.6846 3.9896 13.1627 3.5396L13.2471 3.48335C13.3596 3.37085 13.5565 3.37085 13.669 3.48335L14.7659 4.60835C14.8502 4.69272 14.8502 4.7771 14.8502 4.83335C14.8502 4.8896 14.8221 4.97397 14.7659 5.05835L14.7096 5.1146C14.2034 5.53647 14.0627 6.2396 14.2877 6.8021C14.3159 6.88647 14.344 6.97085 14.4002 7.05522C14.6252 7.64585 15.1877 8.06772 15.8346 8.06772H15.919C16.0315 8.06772 16.0877 8.12397 16.144 8.1521C16.2002 8.18022 16.2284 8.2646 16.2284 8.3771V9.9521Z"
                fill=""
              />
              <path
                d="M9.00029 5.22705C6.89092 5.22705 5.17529 6.94268 5.17529 9.05205C5.17529 11.1614 6.89092 12.8771 9.00029 12.8771C11.1097 12.8771 12.8253 11.1614 12.8253 9.05205C12.8253 6.94268 11.1097 5.22705 9.00029 5.22705ZM9.00029 11.6114C7.59404 11.6114 6.44092 10.4583 6.44092 9.05205C6.44092 7.6458 7.59404 6.49268 9.00029 6.49268C10.4065 6.49268 11.5597 7.6458 11.5597 9.05205C11.5597 10.4583 10.4065 11.6114 9.00029 11.6114Z"
                fill=""
              />
            </g>
            <defs>
              <clipPath id="clip0_130_9763">
                <rect
                  width="18"
                  height="18"
                  fill="white"
                  transform="translate(0 0.052124)"
                />
              </clipPath>
            </defs>
          </svg>
        ),
        label: "Affiliations",
        route: "/dashboard/Affiliations",
      },

      {
        icon: (
          <svg
            width="15"
            height="18"
            viewBox="0 0 15 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.20801 0.666626C1.17247 0.666626 0.333008 1.50609 0.333008 2.54163V15.4583C0.333008 16.4938 1.17247 17.3333 2.20801 17.3333H8.45834C9.48801 17.3333 10.3238 16.5034 10.3333 15.476L10.3335 15.4584V14.2084C10.3335 13.8632 10.0538 13.5834 9.70851 13.5834C9.33034 13.5834 9.09242 13.4816 8.92784 13.3494C8.75451 13.21 8.61159 12.995 8.50201 12.6917C8.27484 12.0625 8.25026 11.233 8.25017 10.4583C8.25017 10.3 8.19009 10.1476 8.08209 10.032C8.01851 9.96379 7.97584 9.91763 7.94509 9.88446C7.86976 9.80304 7.86617 9.79921 7.80301 9.73971C7.74142 9.68179 7.55334 9.50221 6.81717 8.76638C6.42676 8.37613 6.21026 8.04588 6.13942 7.79363C6.10701 7.67804 6.10867 7.59179 6.12642 7.52238C6.14409 7.45354 6.18742 7.36313 6.29701 7.2535C6.40651 7.14393 6.49676 7.10083 6.56517 7.08332C6.63409 7.06565 6.72009 7.06401 6.83542 7.09654C7.08751 7.16765 7.41751 7.38454 7.80809 7.77538C8.25776 8.22529 8.68509 8.64788 9.06784 9.02646C9.70076 9.65229 10.2125 10.1584 10.5017 10.4682C10.7372 10.7205 11.1327 10.7341 11.385 10.4986C11.6373 10.2631 11.651 9.86763 11.4155 9.61529C11.1783 9.36121 10.7973 8.97988 10.3332 8.51996L10.3331 5.71688L12.7009 8.08471C13.0525 8.43629 13.2501 8.91321 13.2501 9.41046V16.7083C13.2501 17.0535 13.5299 17.3333 13.8751 17.3333C14.2203 17.3333 14.5001 17.0535 14.5001 16.7083V9.41046C14.5001 8.58171 14.1708 7.78688 13.5848 7.20078L10.3331 3.94908L10.333 2.54158C10.333 1.50606 9.49359 0.666626 8.45801 0.666626H2.20801ZM8.14459 14.3235C8.41234 14.5388 8.72601 14.6888 9.08334 14.768V14.8333H8.45842C8.11326 14.8333 7.83342 15.1131 7.83342 15.4583V16.0833H6.58342V15.4583C6.58342 14.7138 7.01734 14.0706 7.64601 13.768C7.77942 13.972 7.94309 14.1615 8.14459 14.3235ZM7.00101 10.7049C7.00259 10.9157 7.00717 11.1435 7.01992 11.3798C6.54376 11.7178 5.96176 11.9165 5.33342 11.9165C3.72256 11.9165 2.41672 10.6107 2.41672 8.99988C2.41672 7.38904 3.72256 6.08322 5.33342 6.08322C5.46726 6.08322 5.59892 6.09223 5.72801 6.10968C5.61684 6.18376 5.51184 6.2709 5.41301 6.36975C5.16935 6.61345 4.99692 6.89511 4.91568 7.21172C4.83459 7.52779 4.8542 7.84029 4.93596 8.13146C5.0935 8.69263 5.49034 9.20754 5.93351 9.65046C6.66951 10.386 6.86959 10.5779 6.94659 10.6502C6.95134 10.6547 6.95492 10.658 6.95767 10.6605C6.96059 10.6632 6.96259 10.665 6.96426 10.6664L6.96751 10.6693C6.97184 10.6733 6.97584 10.6776 6.99767 10.7013L7.00101 10.7049ZM2.83342 1.91663H4.08342V2.54122C4.08342 3.57675 3.24395 4.41622 2.20842 4.41622H1.58301V3.16622H2.20842C2.55359 3.16622 2.83342 2.8864 2.83342 2.54122V1.91663ZM6.58342 1.91663H7.83342V2.54122C7.83342 2.8864 8.11326 3.16622 8.45842 3.16622H9.08309V4.41622H8.45842C7.42284 4.41622 6.58342 3.57675 6.58342 2.54122V1.91663ZM4.08342 16.0833H2.83342V15.4583C2.83342 15.1131 2.55359 14.8333 2.20842 14.8333H1.58301V13.5833H2.20842C3.24395 13.5833 4.08342 14.4228 4.08342 15.4583V16.0833Z"
              fill="#9CA3AF"
            />
          </svg>
        ),
        label: "Pricing",
        route: "/dashboard/pricing",
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  console.log(pathname);
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed left-0 top-0 z-9999  bg-white flex h-screen w-72.5 flex-col overflow-y-hidden duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex   items-center justify-between gap-2 px-3 py-5.5 lg:py-6.5">
          <Link href="/" className="flex items-center justify-center">
            <Image
              className="w-full h-full"
              width={180}
              height={180}
              src={"/applogo.png"}
              alt="Logo"
              priority
            />
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="block lg:hidden"
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-3 px-4 py-4 lg:mt-3 lg:px-6">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-4 ml-4 text-sm font-semibold text-body dark2">
                  {group.name}
                </h3>

                <ul className="mb-6  mt-2 flex flex-col gap-1.5">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
          <Update />
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
