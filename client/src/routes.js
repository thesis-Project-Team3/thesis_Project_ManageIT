
import jwtDecode from 'jwt-decode';
import Dashboard from 'views/Dashboard.js';0
// import Icons from "views/Icons.js";
// import Map from "views/Map.js";
import Notifications from 'views/Notifications.js';
// import Rtl from "views/Rtl.js";
import ProjectHistory from 'views/ProjectHistory.js';
import Project from 'views/Project.js';
import ProjectInfo from 'views/ProjectInfo.js';
import Login from 'views/Login.js';
import AddEmployee from 'views/AddEmployee.js';
import RegisterHead from 'views/RegisterHead.js';
import RemoveEmployee from 'views/RemoveEmployee.js';
import RemoveHead from 'views/RemoveHead.js';
import UpdateProject from 'views/UpdateProject.js';
import ScheduleMeeting from 'views/ScheduleMeeting.js';
import Meetings from 'views/Meetings.js';
import UserProfile from 'views/UserProfile.js';

var user = localStorage.getItem('token');
var routes = [
  {
    path: '/user-profile',
    name: 'User Profile',
    rtlName: 'ملف تعريفي للمستخدم',
    icon: 'tim-icons icon-single-02',
    component: UserProfile,
    layout: '/admin',
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    rtlName: 'لوحة القيادة',
    icon: 'tim-icons icon-chart-pie-36',
    component: Dashboard,
    layout: '/admin',
  },
  {
    path: '/project',
    name: 'Create New Project',
    rtlName: 'إنجاز مشروع',
    icon: 'tim-icons icon-map-big',
    component: Project,
    layout: '/admin',
  },
  {
    path: '/Update-Project',
    name: 'Update Project',
    rtlName: 'تحديث مشروع',
    icon: 'tim-icons icon-pencil',
    component: UpdateProject,
    layout: '/admin',
  },
  {
    path: '/ScheduleMeeting',
    name: 'Schedule Meeting',
    rtlName: 'اجتماع مجدول',
    icon: 'tim-icons icon-time-alarm',
    component: ScheduleMeeting,
    layout: '/admin',
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: "tim-icons icon-atom",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/map",
  //   name: "Map",
  //   rtlName: "خرائط",
  //   icon: "tim-icons icon-pin",
  //   component: Map,
  //   layout: "/admin"
  // },
  {
    path: '/notifications',
    name: 'Notifications',
    rtlName: 'إخطارات',
    icon: 'tim-icons icon-bell-55',
    component: Notifications,
    layout: '/admin',
  },
  {
    path: "/projects-history",
    name: "Projects History",
    rtlName: "أرشيف المشاريع",
    icon: "tim-icons icon-single-copy-04",
    component: ProjectHistory,
    layout: "/admin",
  },
  {
    path: "/project-Info",
    name: "Project Info",
    rtlName: "أرشيف المشاريع",
    icon: "tim-icons icon-notes",
    component: ProjectInfo,
    layout: "/admin",
  },
  {
    path: "/meetings",
    name: "Meetings",
    rtlName: "اجتماع مجدول",
    icon: "tim-icons icon-bullet-list-67",
    component: Meetings,
    layout: '/admin',
  },
  {
    path: '/Login',
    name: 'Login',
    rtlName: 'ل',
    icon: 'tim-icons icon-time-alarm',
    component: Login,
    layout: '/admin',
  },
  {
    path: '/RegisterHead',
    name: 'Add Head of Department',
    rtlName: 'ل',
    icon: 'tim-icons icon-simple-add',
    component: RegisterHead,
    layout: '/admin',
  },
  {
    path: '/AddEmployee',
    name: 'Add a New Employee',
    rtlName: 'ل',
    icon: 'tim-icons icon-simple-add',
    component: AddEmployee,
    layout: '/admin',
  },
  {
    path: '/RemoveEmployee',
    name: 'Remove Employee',
    rtlName: 'ل',
    icon: 'tim-icons icon-simple-delete',
    component: RemoveEmployee,
    layout: '/admin',
  },
  {
    path: '/RemoveHead',
    name: 'Remove Head of Department',
    rtlName: 'ل',
    icon: 'tim-icons icon-simple-delete',
    component: RemoveHead,
    layout: '/admin',
  },
  // {
  //   path: "/rtl-support",
  //   name: "RTL Support",
  //   rtlName: "ار تي ال",
  //   icon: "tim-icons icon-world",
  //   component: Rtl,
  //   layout: "/rtl"
  // }
];

if (
  (user && jwtDecode(user).role === "financial") ||
  (user && jwtDecode(user).role === "accounting") ||
  (user && jwtDecode(user).role === "marketing")
) {
  var routes = [
    {
      path: "/user-profile",
      name: "User Profile",
      rtlName: "ملف تعريفي للمستخدم",
      icon: "tim-icons icon-single-02",
      component: UserProfile,
      layout: "/admin",
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      rtlName: "لوحة القيادة",
      icon: "tim-icons icon-chart-pie-36",
      component: Dashboard,
      layout: "/admin",
    },
    {
      path: "/project",
      name: "Create New Project",
      rtlName: "إنجاز مشروع",
      icon: "tim-icons icon-map-big",
      component: Project,
      layout: "/admin",
    },
    {
      path: "/Update-Project",
      name: "Update Project",
      rtlName: "تحديث مشروع",
      icon: "tim-icons icon-pencil",
      component: UpdateProject,
      layout: "/admin",
    },
    {
      path: "/ScheduleMeeting",
      name: "Schedule Meeting",
      rtlName: "اجتماع مجدول",
      icon: "tim-icons icon-time-alarm",
      component: ScheduleMeeting,
      layout: "/admin",
    },
    // {
    //   path: "/icons",
    //   name: "Icons",
    //   rtlName: "الرموز",
    //   icon: "tim-icons icon-atom",
    //   component: Icons,
    //   layout: "/admin"
    // },
    // {
    //   path: "/map",
    //   name: "Map",
    //   rtlName: "خرائط",
    //   icon: "tim-icons icon-pin",
    //   component: Map,
    //   layout: "/admin"
    // },
    {
      path: "/notifications",
      name: "Notifications",
      rtlName: "إخطارات",
      icon: "tim-icons icon-bell-55",
      component: Notifications,
      layout: "/admin",
    },
    {
      path: '/projects-history',
      name: 'Projects History',
      rtlName: 'أرشيف المشاريع',
      icon: 'tim-icons icon-single-copy-04',
      component: ProjectHistory,
      layout: '/admin',
    },
    {
      path: "/project-Info",
      name: "Project Info",
      rtlName: "أرشيف المشاريع",
      icon: "tim-icons icon-notes",
      component: ProjectInfo,
      layout: "/admin",
    },
    {
      path: "/meetings",
      name: "Meetings",
      rtlName: "اجتماع مجدول",
      icon: "tim-icons icon-bullet-list-67",
      component: Meetings,
      layout: "/admin",
    },
    // {
    //   path: '/Login',
    //   name: 'Login',
    //   rtlName: 'ل',
    //   icon: 'tim-icons icon-time-alarm',
    //   component: Login,
    //   layout: '/admin',
    // },
    // {
    //   path: '/AddEmployee',
    //   name: 'Add a new head of department',
    //   rtlName: 'ل',
    //   icon: 'tim-icons icon-simple-add',
    //   component: AddEmployee,
    //   layout: '/admin',
    // },
    // {
    //   path: '/RemoveEmployee',
    //   name: 'Remove Employee',
    //   rtlName: 'ل',
    //   icon: 'tim-icons icon-simple-delete',
    //   component: RemoveEmployee,
    //   layout: '/admin',
    // },
    // {
    //   path: '/RemoveHead',
    //   name: 'Remove Head of Department',
    //   rtlName: 'ل',
    //   icon: 'tim-icons icon-simple-delete',
    //   component: RemoveHead,
    //   layout: '/admin',
    // },
    // {
    //   path: "/rtl-support",
    //   name: "RTL Support",
    //   rtlName: "ار تي ال",
    //   icon: "tim-icons icon-world",
    //   component: Rtl,
    //   layout: "/rtl"
    // }
  ];
} else if (user && jwtDecode(user).role === "human_ressources") {
  routes = [
    {
      path: "/user-profile",
      name: "User Profile",
      rtlName: "ملف تعريفي للمستخدم",
      icon: "tim-icons icon-single-02",
      component: UserProfile,
      layout: "/admin",
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      rtlName: "لوحة القيادة",
      icon: "tim-icons icon-chart-pie-36",
      component: Dashboard,
      layout: "/admin",
    },
    {
      path: "/project",
      name: "Create New Project",
      rtlName: "إنجاز مشروع",
      icon: "tim-icons icon-map-big",
      component: Project,
      layout: "/admin",
    },
    {
      path: "/Update-Project",
      name: "Update Project",
      rtlName: "تحديث مشروع",
      icon: "tim-icons icon-pencil",
      component: UpdateProject,
      layout: "/admin",
    },
    {
      path: "/ScheduleMeeting",
      name: "Schedule Meeting",
      rtlName: "اجتماع مجدول",
      icon: "tim-icons icon-time-alarm",
      component: ScheduleMeeting,
      layout: "/admin",
    },

    {
      path: "/notifications",
      name: "Notifications",
      rtlName: "إخطارات",
      icon: "tim-icons icon-bell-55",
      component: Notifications,
      layout: "/admin",
    },
    {
      path: '/projects-history',
      name: 'Projects History',
      rtlName: 'أرشيف المشاريع',
      icon: 'tim-icons icon-single-copy-04',
      component: ProjectHistory,
      layout: '/admin',
    },
    {
      path: "/project-Info",
      name: "Project Info",
      rtlName: "أرشيف المشاريع",
      icon: "tim-icons icon-notes",
      component: ProjectInfo,
      layout: "/admin",
    },
    {
      path: "/meetings",
      name: "Meetings",
      rtlName: "اجتماع مجدول",
      icon: "tim-icons icon-bullet-list-67",
      component: Meetings,
      layout: "/admin",
    },
    {
      path: '/AddEmployee',
      name: 'Add a New Employee',
      rtlName: 'ل',
      icon: 'tim-icons icon-simple-add',
      component: AddEmployee,
      layout: '/admin',
    },

    {
      path: "/RemoveEmployee",
      name: "Remove Employee",
      rtlName: "ل",
      icon: "tim-icons icon-simple-delete",
      component: RemoveEmployee,
      layout: "/admin",
    },
  ];
} else if (user && jwtDecode(user).role === "methods") {
  routes = [
    {
      path: "/user-profile",
      name: "User Profile",
      rtlName: "ملف تعريفي للمستخدم",
      icon: "tim-icons icon-single-02",
      component: UserProfile,
      layout: "/admin",
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      rtlName: "لوحة القيادة",
      icon: "tim-icons icon-chart-pie-36",
      component: Dashboard,
      layout: "/admin",
    },
    {
      path: "/project",
      name: "Create New Project",
      rtlName: "إنجاز مشروع",
      icon: "tim-icons icon-map-big",
      component: Project,
      layout: "/admin",
    },
    {
      path: "/Update-Project",
      name: "Update Project",
      rtlName: "تحديث مشروع",
      icon: "tim-icons icon-pencil",
      component: UpdateProject,
      layout: "/admin",
    },
    {
      path: "/project-Info",
      name: "Project Info",
      rtlName: "أرشيف المشاريع",
      icon: "tim-icons icon-notes",
      component: ProjectInfo,
      layout: "/admin",
    },
    {
      path: "/ScheduleMeeting",
      name: "Schedule Meeting",
      rtlName: "اجتماع مجدول",
      icon: "tim-icons icon-time-alarm",
      component: ScheduleMeeting,
      layout: "/admin",
    },
    // {
    //   path: "/icons",
    //   name: "Icons",
    //   rtlName: "الرموز",
    //   icon: "tim-icons icon-atom",
    //   component: Icons,
    //   layout: "/admin"
    // },
    // {
    //   path: "/map",
    //   name: "Map",
    //   rtlName: "خرائط",
    //   icon: "tim-icons icon-pin",
    //   component: Map,
    //   layout: "/admin"
    // },
    {
      path: "/notifications",
      name: "Notifications",
      rtlName: "إخطارات",
      icon: "tim-icons icon-bell-55",
      component: Notifications,
      layout: "/admin",
    },
    {
      path: '/projects-history',
      name: 'Projects History',
      rtlName: 'أرشيف المشاريع',
      icon: 'tim-icons icon-single-copy-04',
      component: ProjectHistory,
      layout: '/admin',
    },
    {
      path: "/meetings",
      name: "Meetings",
      rtlName: "اجتماع مجدول",
      icon: "tim-icons icon-bullet-list-67",
      component: Meetings,
      layout: "/admin",
    },
  ];
} else if (user && jwtDecode(user).role === "it") {
  routes = [
    {
      path: "/user-profile",
      name: "User Profile",
      rtlName: "ملف تعريفي للمستخدم",
      icon: "tim-icons icon-single-02",
      component: UserProfile,
      layout: "/admin",
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      rtlName: "لوحة القيادة",
      icon: "tim-icons icon-chart-pie-36",
      component: Dashboard,
      layout: "/admin",
    },
    {
      path: "/project",
      name: "Create New Project",
      rtlName: "إنجاز مشروع",
      icon: "tim-icons icon-map-big",
      component: Project,
      layout: "/admin",
    },
    {
      path: "/Update-Project",
      name: "Update Project",
      rtlName: "تحديث مشروع",
      icon: "tim-icons icon-pencil",
      component: UpdateProject,
      layout: "/admin",
    },
    {
      path: '/project-Info',
      name: 'Project Info',
      rtlName: 'أرشيف المشاريع',
      icon: 'tim-icons icon-notes',
      component: ProjectInfo,
      layout: '/admin',
    },
    {
      path: "/ScheduleMeeting",
      name: "Schedule Meeting",
      rtlName: "اجتماع مجدول",
      icon: "tim-icons icon-time-alarm",
      component: ScheduleMeeting,
      layout: "/admin",
    },
    // {
    //   path: "/icons",
    //   name: "Icons",
    //   rtlName: "الرموز",
    //   icon: "tim-icons icon-atom",
    //   component: Icons,
    //   layout: "/admin"
    // },
    // {
    //   path: "/map",
    //   name: "Map",
    //   rtlName: "خرائط",
    //   icon: "tim-icons icon-pin",
    //   component: Map,
    //   layout: "/admin"
    // },
    {
      path: "/notifications",
      name: "Notifications",
      rtlName: "إخطارات",
      icon: "tim-icons icon-bell-55",
      component: Notifications,
      layout: "/admin",
    },
    {
      path: '/projects-history',
      name: 'Projects History',
      rtlName: 'أرشيف المشاريع',
      icon: 'tim-icons icon-single-copy-04',
      component: ProjectHistory,
      layout: '/admin',
    },
    {
      path: "/meetings",
      name: "Meetings",
      rtlName: "اجتماع مجدول",
      icon: "tim-icons icon-bullet-list-67",
      component: Meetings,
      layout: "/admin",
    },
  ];
} else if (user && jwtDecode(user).role === "ceo") {
  routes = [
    {
      path: "/user-profile",
      name: "User Profile",
      rtlName: "ملف تعريفي للمستخدم",
      icon: "tim-icons icon-single-02",
      component: UserProfile,
      layout: "/admin",
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      rtlName: "لوحة القيادة",
      icon: "tim-icons icon-chart-pie-36",
      component: Dashboard,
      layout: "/admin",
    },
    {
      path: "/project",
      name: "Create New Project",
      rtlName: "إنجاز مشروع",
      icon: "tim-icons icon-map-big",
      component: Project,
      layout: "/admin",
    },
    {
      path: "/Update-Project",
      name: "Update Project",
      rtlName: "تحديث مشروع",
      icon: "tim-icons icon-pencil",
      component: UpdateProject,
      layout: "/admin",
    },
    {
      path: '/project-Info',
      name: 'Project Info',
      rtlName: 'أرشيف المشاريع',
      icon: 'tim-icons icon-notes',
      component: ProjectInfo,
      layout: '/admin',
    },
    {
      path: "/RegisterHead",
      name: "Add Head of Department",
      rtlName: "ل",
      icon: "tim-icons icon-simple-add",
      component: RegisterHead,
      layout: "/admin",
    },
    {
      path: "/ScheduleMeeting",
      name: "Schedule Meeting",
      rtlName: "اجتماع مجدول",
      icon: "tim-icons icon-time-alarm",
      component: ScheduleMeeting,
      layout: "/admin",
    },
    // {
    //   path: "/icons",
    //   name: "Icons",
    //   rtlName: "الرموز",
    //   icon: "tim-icons icon-atom",
    //   component: Icons,
    //   layout: "/admin"
    // },
    // {
    //   path: "/map",
    //   name: "Map",
    //   rtlName: "خرائط",
    //   icon: "tim-icons icon-pin",
    //   component: Map,
    //   layout: "/admin"
    // },
    {
      path: "/notifications",
      name: "Notifications",
      rtlName: "إخطارات",
      icon: "tim-icons icon-bell-55",
      component: Notifications,
      layout: "/admin",
    },
    {
      path: '/projects-history',
      name: 'Projects History',
      rtlName: 'أرشيف المشاريع',
      icon: 'tim-icons icon-single-copy-04',
      component: ProjectHistory,
      layout: "/admin",
    },
    {
      path: '/project-Info',
      name: 'Project Info',
      rtlName: 'أرشيف المشاريع',
      icon: 'tim-icons icon-notes',
      component: ProjectInfo,
      layout: '/admin',
    },
    {
      path: '/meetings',
      name: 'Meetings',
      rtlName: 'اجتماع مجدول',
      icon: 'tim-icons icon-bullet-list-67',
      component: Meetings,
      layout: "/admin",
    },
    // {
    //   path: '/Login',
    //   name: 'Login',
    //   rtlName: 'ل',
    //   icon: 'tim-icons icon-time-alarm',
    //   component: Login,
    //   layout: '/admin',
    // },
    // {
    //   path: '/Register',
    //   name: 'Add a new head of department',
    //   rtlName: 'ل',
    //   icon: 'tim-icons icon-simple-add',
    //   component: Register,
    //   layout: '/admin',
    // },
    {
      path: '/RegisterHead',
      name: 'Add Head of Department',
      rtlName: 'ل',
      icon: 'tim-icons icon-simple-add',
      component: RegisterHead,
      layout: '/admin',
    },
    {
      path: "/RemoveHead",
      name: "Remove Head of Department",
      rtlName: "ل",
      icon: "tim-icons icon-simple-delete",
      component: RemoveHead,
      layout: "/admin",
    },
  ];
} else if (!user) {
  routes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      rtlName: "لوحة القيادة",
      icon: "tim-icons icon-chart-pie-36",
      component: Dashboard,
      layout: "/admin",
    },
  ];
}

export default routes;
