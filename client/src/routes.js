import Dashboard from 'views/Dashboard.js';
// import Icons from "views/Icons.js";
// import Map from "views/Map.js";
import Notifications from 'views/Notifications.js';
// import Rtl from "views/Rtl.js";
import TableList from 'views/TableList.js';
import Project from 'views/Project.js';
// import Login from "views/Login.js";
import Register from 'views/Register.js';
import RemoveEmployee from 'views/RemoveEmployee.js';
import RemoveHead from 'views/RemoveHead.js';
import UpdateProject from 'views/UpdateProject.js';
import ScheduleMeeting from 'views/ScheduleMeeting.js';
import Meetings from 'views/Meetings.js';
import UserProfile from 'views/UserProfile.js';

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
    path: '/projects-history',
    name: 'Projects History',
    rtlName: 'أرشيف المشاريع',
    icon: 'tim-icons icon-single-copy-04',
    component: TableList,
    layout: '/admin',
  },
  {
    path: '/meetings',
    name: 'Meetings',
    rtlName: 'اجتماع مجدول',
    icon: 'tim-icons icon-bullet-list-67',
    component: Meetings,
    layout: '/admin',
  },
  // {
  //   path: "/Login",
  //   name: "Login",
  //   rtlName: "ل",
  //   icon: "tim-icons icon-time-alarm",
  //   component: Login,
  //   layout: "/"
  // },
  {
    path: '/Register',
    name: 'Add Employee',
    rtlName: 'ل',
    icon: 'tim-icons icon-simple-add',
    component: Register,
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
export default routes;
