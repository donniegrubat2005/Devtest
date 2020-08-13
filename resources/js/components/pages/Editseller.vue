<template>
    <div class="row">
        <div class="col-xl-12 col-md-12">
            <div class="container-fluid">
                <div class="card rounded-0">
                    <div class="card-header">
                        <div class="card-title">
                            <span class="page-title">
                                <h5>{{ $route.meta.title }}</h5>
                            </span>
                            <span class="back-button">
                                <button
                                    class="btn btn-default rounded-0"
                                    @click.prevent="returntoList()"
                                >
                                    <i class="fas fa-arrow-left">Back</i>
                                </button>
                            </span>
                        </div>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <label for="make">Make</label>
                                <input
                                    type="text"
                                    name="make"
                                    v-model="seller.make"
                                    class="form-control rounded-0"
                                />
                            </div>

                            <div class="form-group">
                                <label for="model">Model</label>
                                <input
                                    type="text"
                                    name="model"
                                    v-model="seller.model"
                                    class="form-control rounded-0"
                                />
                            </div>
                            <div class="form-group">
                                <label for="year">Year</label>
                                <input
                                    type="text"
                                    name="model"
                                    maxlength="4"
                                    v-model="seller.year"
                                    class="form-control rounded-0"
                                />
                            </div>
                            <div class="form-group">
                                <label for="price">Price</label>
                                <input
                                    type="text"
                                    name="price"
                                    v-model="seller.price"
                                    class="form-control rounded-0"
                                />
                            </div>
                            <button
                                class="btn btn-primary float-left float-sm-left btn-rounded"
                                type="button"
                                @click.prevent="save()"
                            >
                                Save
                            </button>
                        </form>
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
            seller: {},
            error: {}
        };
    },
    methods: {
        save() {
            let uri = "api/sellers/" + this.$route.params.id;
            axios
                .patch(uri, this.seller)
                .then(response => {
                    this.seller = response.data;
                    this.$toastr.success("Updated Successfully!", "Updated!");
                    this.returntoList();
                })
                .catch(error => {
                    this.error = error.response.data.error;
                    this.$toastr.warning(this.error, "Error!");
                });
        },

        returntoList() {
            this.$router.push({ name: "seller" });
        }
    },
    created() {
        let uri = "api/sellers/" + this.$route.params.id + "/edit";
        axios
            .get(uri)
            .then(response => {
                this.seller = response.data;
            })
            .catch(error => (this.errors = error.response.data.errors));
    }
};
</script>

<style></style>
