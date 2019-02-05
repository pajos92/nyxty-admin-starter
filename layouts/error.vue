<template>
    <div class="fix-header fix-sidebar card-no-border">
    <!-- ============================================================== -->
    <!-- Main wrapper - style you can find in pages.scss -->
    <!-- ============================================================== -->
    <section id="wrapper" class="error-page">
        <div class="error-box">
            <div class="error-body text-center">
                <h1 class="text-info">404</h1>
                <h3 class="text-uppercase">Page Not Found !</h3>
                <p class="text-bold m-t-30 m-b-30">YOU SEEM TO BE TRYING TO FIND YOUR WAY HOME.</p>
                <nuxt-link to="/" class="btn btn-info btn-rounded waves-effect waves-light m-b-40">Back to home</nuxt-link>
                </div>
            <footer class="footer text-center">© {{ new Date().getFullYear() }} | IoTECH TELECOMMUNICATIONS G.P.</footer>
        </div>
    </section>
</div>
</template>

