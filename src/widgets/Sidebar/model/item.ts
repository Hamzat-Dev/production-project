import React from 'react';
import AboutIcon from 'shared/assets/icons/aboutIcon.svg';
import MainIcon from 'shared/assets/icons/mainIcon.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [

    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Главная',

    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О сайте',

    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true,

    },
];
