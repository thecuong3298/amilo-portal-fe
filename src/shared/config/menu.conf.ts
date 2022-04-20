import { MenuModel } from '@/model/menu.model';

export const MENU: MenuModel[] = [
  {
    path: '/dashboard',
    meta: {
      title: 'menu.dashboard',
      icon: 'SettingOutlined',
    },
  },
  {
    path: '/user',
    component: {
      key: 'user-management',
    },
    meta: {
      title: 'menu.setting',
      icon: 'SettingOutlined',
    },
    children: [
      {
        path: '/user-management',
        component: {
          key: 'user',
          parentKey: 'user-management',
        },
        meta: {
          title: 'menu.user-management',
          icon: 'UserOutlined',
        },
      },
      {
        path: '/role-management',
        meta: {
          title: 'menu.role-management',
          icon: 'ControlOutlined',
        },
      },
    ],
  },
];
