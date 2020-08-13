import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/pages/Home.vue";
import Seller from "./components/pages/Seller.vue";
import CreateSeller from "./components/pages/Createseller.vue";
import EditSeller from "./components/pages/Editseller.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    //mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            meta: {
                title: "Dashboard",
                description: "This is dashboard page"
            }
        },
        {
            path: "/sellers",
            name: "seller",
            component: Seller,
            meta: {
                title: "Seller",
                description: "This is seller page"
            }
        },

        {
            path: "/sellers/create",
            name: "create",
            component: CreateSeller,
            meta: {
                title: "Create Seller",
                description: "This is seller create page"
            }
        },
        {
            path: "/sellers/:id/edit",
            name: "editseller",
            component: EditSeller,
            meta: {
                title: "Edit Seller"
            }
        }
    ],
    linkActiveClass: "active",
    linkExactActiveClass: "active"
});
export default router;
