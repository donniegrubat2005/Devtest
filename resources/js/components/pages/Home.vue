<template>
    <div class="row">
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div
                                class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                            >
                                <h5>Seller</h5>
                            </div>

                            <div class="h6 mb-0 font-weight-bold text-gray-800">
                                <router-link to="/sellers">
                                    Seller Page
                                </router-link>
                            </div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-list fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        redirectToSeller() {
            this.$router.push({ name: "seller" });
        }
    },

    mounted() {
        console.log("Component mounted.");
    }
};
</script>
