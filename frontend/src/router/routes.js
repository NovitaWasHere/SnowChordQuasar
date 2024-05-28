const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/index.vue") }],
  },
  {
    path: "/politics",
    component: () => import("layouts/Politics.vue"),
    children: [{ path: "", component: () => import("pages/Politics.vue") }],
  },
  {
    path: "/recMusic",
    component: () => import("layouts/RecMusic.vue"),
    children: [{ path: "", component: () => import("pages/RecMusic.vue") }],
  },
  {
    path: "/librery",
    component: () => import("layouts/Biblioteca.vue"),
    children: [{ path: "", component: () => import("pages/Biblioteca.vue") }],
  },
  {
    path: "/register",
    component: () => import("layouts/Register.vue"),
    children: [{ path: "", component: () => import("pages/Register.vue") }],
  },
  {
    path: "/prefs",
    component: () => import("layouts/PrefUser.vue"),
    children: [{ path: "", component: () => import("pages/Prefs.vue") }],
  },
  {
    path: "/prefsGen",
    component: () => import("layouts/PrefGen.vue"),
    children: [{ path: "", component: () => import("pages/PrefGen.vue") }],
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
    path: "/shop",
    component: () => import("layouts/Shop.vue"),
    children: [{ path: "", component: () => import("pages/Shop.vue") }],
  },
  {
    path: "/theory/:id",
    component: () => import("layouts/Theory.vue"),
    children: [{ path: "", component: () => import("pages/Theory.vue") }]
  },
  {
    path: "/play/:id",
    component: () => import("layouts/Play.vue"),
    children: [{ path: "", component: () => import("pages/Play.vue") }],
  },
  {
    path: "/admin",
    component: () => import("layouts/Admin.vue"),
    children: [{ path: "", component: () => import("pages/Admin.vue") }],
  },
];

export default routes;
