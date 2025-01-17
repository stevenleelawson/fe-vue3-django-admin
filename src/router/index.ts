import Login from "@/public/Login.vue";
import Register from "@/public/Register.vue";
import Dashboard from "@/secure/dashboard/Dashboard.vue";
import Secure from "@/secure/Secure.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/register",
		component: Register,
	},
	{
		path: "/login",
		component: Login,
	},
	{
		// CHILD ROUTES: all the children of Secure will make sure user is authenticated
		path: "/",
		component: Secure,
		children: [{ path: "", component: Dashboard }],
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
