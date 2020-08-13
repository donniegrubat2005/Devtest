<template>
    <div id="wrapper">
        <!-- Sidebar -->
        <ul
            class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
        >
            <!-- Sidebar - Brand -->
            <router-link
                to="/dashboard"
                class="sidebar-brand d-flex align-items-center justify-content-center"
            >
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">
                    My
                    <sup>PriceCar</sup>
                </div>
            </router-link>

            <!-- Divider -->
            <hr class="sidebar-divider my-0" />

            <!-- Nav Item - Dashboard -->
            <li class="nav-item">
                <router-link to="/" class="nav-link">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Home</span>
                </router-link>
            </li>

            <!-- Heading -->
            <div class="sidebar-heading">Modules</div>
            <li class="nav-item">
                <router-link to="/sellers" class="nav-link">
                    <i class="fas fa-fw fa-list-alt"></i>
                    <span>Seller</span>
                </router-link>
            </li>
        </ul>

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">
            <!-- Main Content -->
            <div id="content">
                <!-- Topbar -->
                <nav
                    class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
                >
                    <!-- Sidebar Toggle (Topbar) -->
                    <button
                        id="sidebarToggleTop"
                        class="btn btn-link d-md-none rounded-circle mr-3"
                    >
                        <i class="fa fa-bars"></i>
                    </button>

                    <!-- Topbar Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Nav Item - Search Dropdown (Visible Only XS) -->
                        <li class="nav-item dropdown no-arrow d-sm-none">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                id="searchDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <i class="fas fa-search fa-fw"></i>
                            </a>
                            <!-- Dropdown - Messages -->
                            <div
                                class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                aria-labelledby="searchDropdown"
                            >
                                <form
                                    class="form-inline mr-auto w-100 navbar-search"
                                >
                                    <div class="input-group">
                                        <input
                                            type="text"
                                            class="form-control bg-light border-0 small"
                                            placeholder="Search for..."
                                            aria-label="Search"
                                            aria-describedby="basic-addon2"
                                        />
                                        <div class="input-group-append">
                                            <button
                                                class="btn btn-primary"
                                                type="button"
                                            >
                                                <i
                                                    class="fas fa-search fa-sm"
                                                ></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>
                    </ul>
                </nav>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid">
                    <!-- Page Heading -->

                    <div class="container">
                        <router-view></router-view>
                    </div>
                </div>
                <!-- /.container-fluid -->
            </div>
            <!-- End of Main Content -->

            <!-- Footer -->
            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; My PriceCar 2020</span>
                    </div>
                </div>
            </footer>
            <!-- End of Footer -->
        </div>
        <!-- End of Content Wrapper -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            //image: require("@/assets/images/avatar5.png")
        };
    }
};
</script>

<style>
.router-link-exact-active {
    background-color: #1e282c;
    color: #fff;
}
</style>
