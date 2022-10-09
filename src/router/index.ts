import { createRouter, createWebHistory } from "vue-router";
import LandingView from "../modules/common/views/LandingView.vue";
import Sidebar from "@/modules/common/components/Sidebar.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      components: {
        default: LandingView,
        aside: Sidebar,
      },
    },
    {
      path: "/about",
      name: "about",
      components: {
        default: () => import("../views/AboutView.vue"),
        aside: Sidebar,
      },
    },
    {
      path: "/expenses",
      name: "expenses",
      components: {
        default: () => import("@/modules/expenses/views/ExpensesView.vue"),
        aside: Sidebar,
      },
    },
    {
      path: "/expense-detail/:id",
      name: "expense-detail",
      components: {
        default: () => import("@/modules/expenses/views/ExpenseDetail.vue"),
        aside: Sidebar,
      },
    },
    {
      path: "/customers",
      name: "customers",
      components: {
        default: () => import("@/modules/customers/views/CustomerView.vue"),
        aside: Sidebar,
      },
    },
    {
      path: "/customer-detail/:id",
      name: "customer-detail",
      components: {
        default: () => import("@/modules/customers/views/CustomerDetail.vue"),
        aside: Sidebar,
      },
    },
    {
      path: "/resume",
      name: "resume",
      components: {
        default: () => import("@/modules/resume/views/ResumeView.vue"),
        aside: Sidebar,
      },
    },
  ],
});

export default router;
