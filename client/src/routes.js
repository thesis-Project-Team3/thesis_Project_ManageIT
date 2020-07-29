import jwtDecode from 'jwt-decode';
import Dashboard from 'views/Dashboard.js';
// import Icons from "views/Icons.js";
// import Map from "views/Map.js";
import Notifications from 'views/Notifications.js';
// import Rtl from "views/Rtl.js";
import ProjectHistory from 'views/ProjectHistory.js';
import CreateProject from 'views/CreateProject.js';
import ProjectInfo from 'views/ProjectInfo.js';
import Login from 'views/Login.js';
import AddEmployee from 'views/AddEmployee.js';
import AddHead from 'views/AddHead.js';
import RemoveEmployee from 'views/RemoveEmployee.js';
import RemoveHead from 'views/RemoveHead.js';
import UpdateProject from 'views/UpdateProject.js';
import ScheduleMeeting from 'views/ScheduleMeeting.js';
import Meetings from 'views/Meetings.js';
import UserProfile from 'views/UserProfile.js';
import ProjectHistoryMethods from 'views/ProjectHistoryMethods.js';
import ProjectHistoryIT from 'views/ProjectHistoryIT.js';

var user = localStorage.getItem('token');
var routes;

if (user && jwtDecode(user).role === 'Employee') {
  routes = [
    {
      path: '/user-profile',
      name: 'User Profile',
      rtlName: 'ملف تعريفي للمستخدم',
      icon: 'tim-icons icon-single-02',
      component: UserProfile,
      layout: '/admin',
    },

    {
      path: '/create-project',
      name: 'Create A New Project',
      rtlName: 'إنجاز مشروع',
      icon: 'tim-icons icon-map-big',
      component: CreateProject,
      layout: '/admin',
    },
    {
      path: '/update-project',
      name: 'Request A New Feature',
      rtlName: 'تحديث مشروع',
      icon: 'tim-icons icon-pencil',
      component: UpdateProject,
      layout: '/admin',
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
      path: '/project-Info',
      name: 'Project Info',
      rtlName: 'أرشيف المشاريع',
      icon: 'tim-icons icon-notes',
      component: ProjectInfo,
      layout: '/admin',
    },
    {
      path: '/my-scheduled-meetings',
      name: 'My Scheduled Meetings',
      rtlName: 'اجتماع مجدول',
      icon: 'tim-icons icon-bullet-list-67',
      component: Meetings,
      layout: '/admin',
    },
    {
      path: '/notifications',
      name: 'Notifications',
      rtlName: 'إخطارات',
      icon: 'tim-icons icon-bell-55',
      component: Notifications,
      layout: '/admin',
    },
    {
      path: '/my-dashboard',
      name: 'My Dashboard',
      rtlName: 'لوحة القيادة',
      icon: 'tim-icons icon-chart-pie-36',
      component: Dashboard,
      layout: '/admin',
    },
  ];
} else if (
  (user &&
    jwtDecode(user).role === 'Head' &&
    jwtDecode(user).department === 'Financial') ||
  (user &&
    jwtDecode(user).role === 'Head' &&
    jwtDecode(user).department === 'Accounting') ||
  (user &&
    jwtDecode(user).role === 'Head' &&
    jwtDecode(user).department === 'Marketing')
) {
  routes = [
    {
      path: '/user-profile',
      name: 'User Profile',
      rtlName: 'ملف تعريفي للمستخدم',
      icon: 'tim-icons icon-single-02',
      component: UserProfile,
      layout: '/admin',
    },

    {
      path: '/create-project',
      name: 'Create A New Project',
      rtlName: 'إنجاز مشروع',
      icon: 'tim-icons icon-map-big',
      component: CreateProject,
      layout: '/admin',
    },
    {
      path: '/update-project',
      name: 'Request A New Feature',
      rtlName: 'تحديث مشروع',
      icon: 'tim-icons icon-pencil',
      component: UpdateProject,
      layout: '/admin',
    },

    {
      path: '/projects-history',
      name: 'Recieved Projects',
      rtlName: 'أرشيف المشاريع',
      icon: 'tim-icons icon-single-copy-04',
      component: ProjectHistory,
      layout: '/admin',
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
      path: '/ScheduleMeeting',
      name: 'Schedule A Meeting',
      rtlName: 'اجتماع مجدول',
      icon: 'tim-icons icon-time-alarm',
      component: ScheduleMeeting,
      layout: '/admin',
    },
    {
      path: '/my-scheduled-meetings',
      name: 'My Scheduled Meetings',
      rtlName: 'اجتماع مجدول',
      icon: 'tim-icons icon-bullet-list-67',
      component: Meetings,
      layout: '/admin',
    },
    {
      path: '/notifications',
      name: 'Notifications',
      rtlName: 'إخطارات',
      icon: 'tim-icons icon-bell-55',
      component: Notifications,
      layout: '/admin',
    },
    {
      path: '/dashboard',
      name: 'My Dashboard',
      rtlName: 'لوحة القيادة',
      icon: 'tim-icons icon-chart-pie-36',
      component: Dashboard,
      layout: '/admin',
    },
  ];
} else if (
  user &&
  jwtDecode(user).role === 'Head' &&
  jwtDecode(user).department === 'Human Ressources'
) {
  routes = [
    {
      path: '/user-profile',
      name: 'User Profile',
      rtlName: 'ملف تعريفي للمستخدم',
      icon: 'tim-icons icon-single-02',
      component: UserProfile,
      layout: '/admin',
    },

    {
      path: '/create-project',
      name: 'Create A New Project',
      rtlName: 'إنجاز مشروع',
      icon: 'tim-icons icon-map-big',
      component: CreateProject,
      layout: '/admin',
    },
    {
      path: '/update-project',
      name: 'Request A New Feature',
      rtlName: 'تحديث مشروع',
      icon: 'tim-icons icon-pencil',
      component: UpdateProject,
      layout: '/admin',
    },

    {
      path: '/projects-history',
      name: 'Recieved Projects',
      rtlName: 'أرشيف المشاريع',
      icon: 'tim-icons icon-single-copy-04',
      component: ProjectHistory,
      layout: '/admin',
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
      path: '/ScheduleMeeting',
      name: 'Schedule A Meeting',
      rtlName: 'اجتماع مجدول',
      icon: 'tim-icons icon-time-alarm',
      component: ScheduleMeeting,
      layout: '/admin',
    },
    {
      path: '/my-scheduled-meetings',
      name: 'My Scheduled Meetings',
      rtlName: 'اجتماع مجدول',
      icon: 'tim-icons icon-bullet-list-67',
      component: Meetings,
      layout: '/admin',
    },
    {
      path: '/notifications',
      name: 'Notifications',
      rtlName: 'إخطارات',
      icon: 'tim-icons icon-bell-55',
      component: Notifications,
      layout: '/admin',
    },
    {
      path: '/dashboard',
      name: 'My Dashboard',
      rtlName: 'لوحة القيادة',
      icon: 'tim-icons icon-chart-pie-36',
      component: Dashboard,
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
  ];
} else if (
  user &&
  jwtDecode(user).role === 'Head' &&
  jwtDecode(user).department === 'IT'
) {
  routes = [
    {
      path: '/user-profile',
      name: 'User Profile',
      rtlName: 'ملف تعريفي للمستخدم',
      icon: 'tim-icons icon-single-02',
      component: UserProfile,
      layout: '/admin',
    },

    {
      path: '/create-project',
      name: 'Create A New Project',
      rtlName: 'إنجاز مشروع',
      icon: 'tim-icons icon-map-big',
      component: CreateProject,
      layout: '/admin',
    },
    {
      path: '/update-project',
      name: 'Request A New Feature',
      rtlName: 'تحديث مشروع',
      icon: 'tim-icons icon-pencil',
      component: UpdateProject,
      layout: '/admin',
    },

    {
      path: '/projects-history',
      name: 'Recieved Projects',
      rtlName: 'أرشيف المشاريع',
      icon: 'tim-icons icon-single-copy-04',
      component: ProjectHistoryIT,
      layout: '/admin',
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
      path: '/ScheduleMeeting',
      name: 'Schedule A Meeting',
      rtlName: 'اجتماع مجدول',
      icon: 'tim-icons icon-time-alarm',
      component: ScheduleMeeting,
      layout: '/admin',
    },
    {
      path: '/my-scheduled-meetings',
      name: 'My Scheduled Meetings',
      rtlName: 'اجتماع مجدول',
      icon: 'tim-icons icon-bullet-list-67',
      component: Meetings,
      layout: '/admin',
    },
    {
      path: '/notifications',
      name: 'Notifications',
      rtlName: 'إخطارات',
      icon: 'tim-icons icon-bell-55',
      component: Notifications,
      layout: '/admin',
    },
    {
      path: '/dashboard',
      name: 'My Dashboard',
      rtlName: 'لوحة القيادة',
      icon: 'tim-icons icon-chart-pie-36',
      component: Dashboard,
      layout: '/admin',
    },
  ];
} else if (
  user &&
  jwtDecode(user).role === 'Head' &&
  jwtDecode(user).department === 'Methods'
) {
  routes = [
    {
      path: '/user-profile',
      name: 'User Profile',
      rtlName: 'ملف تعريفي للمستخدم',
      icon: 'tim-icons icon-single-02',
      component: UserProfile,
      layout: '/admin',
    },

    {
      path: '/create-project',
      name: 'Create A New Project',
      rtlName: 'إنجاز مشروع',
      icon: 'tim-icons icon-map-big',
      component: CreateProject,
      layout: '/admin',
    },
    {
      path: '/update-project',
      name: 'Request A New Feature',
      rtlName: 'تحديث مشروع',
      icon: 'tim-icons icon-pencil',
      component: UpdateProject,
      layout: '/admin',
    },

    {
      path: '/projects-history',
      name: 'Recieved Projects',
      rtlName: 'أرشيف المشاريع',
      icon: 'tim-icons icon-single-copy-04',
      component: ProjectHistoryMethods,
      layout: '/admin',
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
      path: '/ScheduleMeeting',
      name: 'Schedule A Meeting',
      rtlName: 'اجتماع مجدول',
      icon: 'tim-icons icon-time-alarm',
      component: ScheduleMeeting,
      layout: '/admin',
    },
    {
      path: '/my-scheduled-meetings',
      name: 'My Scheduled Meetings',
      rtlName: 'اجتماع مجدول',
      icon: 'tim-icons icon-bullet-list-67',
      component: Meetings,
      layout: '/admin',
    },
    {
      path: '/notifications',
      name: 'Notifications',
      rtlName: 'إخطارات',
      icon: 'tim-icons icon-bell-55',
      component: Notifications,
      layout: '/admin',
    },
    {
      path: '/dashboard',
      name: 'My Dashboard',
      rtlName: 'لوحة القيادة',
      icon: 'tim-icons icon-chart-pie-36',
      component: Dashboard,
      layout: '/admin',
    },
  ];
} else if (user && jwtDecode(user).role === 'CEO') {
  routes = [
    {
      path: '/user-profile',
      name: 'User Profile',
      rtlName: 'ملف تعريفي للمستخدم',
      icon: 'tim-icons icon-single-02',
      component: UserProfile,
      layout: '/admin',
    },

    {
      path: '/projects-history',
      name: 'Recieved Projects',
      rtlName: 'أرشيف المشاريع',
      icon: 'tim-icons icon-single-copy-04',
      component: ProjectHistoryMethods,
      layout: '/admin',
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
      path: '/ScheduleMeeting',
      name: 'Schedule A Meeting',
      rtlName: 'اجتماع مجدول',
      icon: 'tim-icons icon-time-alarm',
      component: ScheduleMeeting,
      layout: '/admin',
    },
    {
      path: '/my-scheduled-meetings',
      name: 'My Scheduled Meetings',
      rtlName: 'اجتماع مجدول',
      icon: 'tim-icons icon-bullet-list-67',
      component: Meetings,
      layout: '/admin',
    },
    {
      path: '/notifications',
      name: 'Notifications',
      rtlName: 'إخطارات',
      icon: 'tim-icons icon-bell-55',
      component: Notifications,
      layout: '/admin',
    },
    {
      path: '/dashboard',
      name: 'My Dashboard',
      rtlName: 'لوحة القيادة',
      icon: 'tim-icons icon-chart-pie-36',
      component: Dashboard,
      layout: '/admin',
    },
    {
      path: '/AddHead',
      name: 'Add Head of Department',
      rtlName: 'ل',
      icon: 'tim-icons icon-simple-add',
      component: AddHead,
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
  ];
} else if (!user) {
  routes = [];
}

export default routes;
