const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/index.vue") }],
  },
  {
    path: "/register",
    component: () => import("layouts/Register.vue"),
    children: [{ path: "", component: () => import("pages/Register.vue") }],
  },
  {
    path: "/home",
    component: () => import("layouts/Home.vue"),
    children: [{ path: "", component: () => import("pages/Home.vue") }],
  },
  {
    path: "/songs",
    component: () => import("layouts/Songs.vue"),
    children: [{ path: "", component: () => import("pages/Songs.vue") }],
  },
  {
    path: "/profile",
    component: () => import("layouts/Profile.vue"),
    children: [{ path: "", component: () => import("pages/Profile.vue") }],
  },
  {
    path: "/prefs",
    component: () => import("layouts/PrefUser.vue"),
    children: [{ path: "", component: () => import("pages/Prefs.vue") }],
  },
];

export default routes;
