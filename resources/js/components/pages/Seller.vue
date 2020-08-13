<template>
    <div class="container">
        <div class="row">
            <div class="col-xl-12 col-md-12">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="row mb-3">
                            <div class="col-sm-6">
                                <h4 class="float-left">
                                    {{ $route.meta.title }}
                                </h4>
                            </div>
                            <div class="col-sm-6">
                                <router-link
                                    to="/sellers/create"
                                    class="btn btn-primary float-left float-sm-right btn-rounded"
                                    >Create Seller</router-link
                                >
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="table-responsive">
                            <table
                                ref="sellertable"
                                class="table thead-light table-borderless"
                            >
                                <thead>
                                    <tr>
                                        <th scope="col" width="30px">#</th>
                                        <th scope="col">Make</th>
                                        <th scope="col">Model</th>
                                        <th scope="col">Year</th>
                                        <th scope="col">Price</th>
                                        <th scope="col" width="90px">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="(seller, item) in sellers"
                                        :key="seller.id"
                                        class="table-light"
                                    >
                                        <th scope="row">{{ item + 1 }}</th>
                                        <td>{{ seller.make }}</td>
                                        <td>{{ seller.model }}</td>
                                        <td>{{ seller.year }}</td>
                                        <td>{{ seller.price }}</td>
                                        <td>
                                            <span>
                                                <router-link
                                                    :to="{
                                                        name: 'editseller',
                                                        params: {
                                                            id: seller.id
                                                        }
                                                    }"
                                                >
                                                    <button
                                                        class="btn btn-secondary"
                                                    >
                                                        <i
                                                            class="fas fa-pencil-alt ms-text-primary"
                                                        ></i>
                                                    </button>
                                                </router-link>
                                            </span>
                                            <span>
                                                <button class="btn btn-danger">
                                                    <i
                                                        class="far fa-trash-alt ms-text-danger"
                                                        @click="
                                                            remove(
                                                                item,
                                                                seller.id
                                                            )
                                                        "
                                                    ></i>
                                                </button>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            sellers: [],
            error: {},
            dataTable: null
        };
    },
    methods: {
        getSellers() {
            axios
                .get("/api/sellers")
                .then(response => {
                    this.dt = $(this.$refs.sellertable).DataTable();
                    setTimeout(() => (this.sellers = response.data));

                    // console.log(this.sellers);
                })
                .catch(error => (this.error = error.response.data.error));
        },

        remove(key, id) {
            axios
                .delete(`/api/sellers/${id}`)
                .then(
                    response => this.sellers.splice(key, 1),
                    this.$toastr.success("Deleted Successfully!", "Deleted!")
                )
                .catch(error => {
                    this.error = error.response.data.error;
                    this.$toastr.warning(this.error, "Error!");
                });
        }
    },

    mounted() {
        this.getSellers();
        //$("#sellertable").DataTable({});
    },
    watch: {
        sellers(val) {
            this.dt.destroy();
            this.$nextTick(() => {
                this.dt = $(this.$refs.sellertable).DataTable();
            });
        }
    }
};
</script>

<style scoped></style>
