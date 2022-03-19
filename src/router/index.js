import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
//import ContactView from "../views/ContactView.vue";
// import AboutView from "../views/AboutView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: AboutView,
  // },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(
        /* webpackChunkName: "contact", webpackPrefetch:true */ "../views/ContactView.vue"
      ),
  },
  {
    path: "/basic",
    name: "basic",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BasicView.vue"),
  },
  {
    path: "/htmlString",
    name: "htmlString",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DataBindingHtml.vue"),
  },
  {
    path: "/dataBindingExample",
    name: "dataBindingExample",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DataBindingExample.vue"),
  },
  {
    path: "/serverdata",
    name: "ServerData",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ServerData.vue"),
  },
  {
    path: "/slot",
    name: "SlotUserModalLayout",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SlotUseModalLayout.vue"),
  },
  {
    path: "/provideInject",
    name: "ProvideInject",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProvideInject.vue"),
  },
  {
    path: "/mixin",
    name: "MixinTest",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MixinTest.vue"),
  },
  {
    path: "/calculator",
    name: "Calculator",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CalculatorExample.vue"),
  },
  {
    path: "/compositionApi",
    name: "CompositionAPI",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CompositionAPI.vue"),
  },
  {
    path: "/compositionApi2",
    name: "CompositionAPI2",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CompositionAPI2.vue"),
  },
  {
    path: "/compositionApi3",
    name: "CompositionAPI3",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CompositionAPI3.vue"),
  },
  {
    path: "/compositionApi4",
    name: "CompositionAPI4",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CompositionAPI4.vue"),
  },
  {
    path: "/compositionApiProvide",
    name: "CompositionAPIProvide",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/CompositionAPIProvide.vue"
      ),
  },
  {
    path: "/customDirective",
    name: "CustomDirective",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CustomDirective.vue"),
  },
  {
    path: "/plugins",
    name: "PluginsExample",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PluginsExample.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
