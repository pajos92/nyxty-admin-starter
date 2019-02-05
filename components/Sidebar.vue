<template>
  <aside class="left-sidebar">
    <!-- Sidebar scroll-->
    <div class="scroll-sidebar">
      <!-- User profile -->
      <div class="user-profile">
        <!-- User profile text-->
        <div class="profile-text">
          <a href="#"
            class="dropdown-toggle u-dropdown text-center"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="true"
          >John Doeasdsads</a>
          <div class="dropdown-menu animated flipInY">
            <nuxt-link to="/profile" class="dropdown-item">
              <i class="ti-user"></i>
              My Profile
            </nuxt-link>
            <div class="dropdown-divider"></div>
            <nuxt-link to="/settings" class="dropdown-item">
              <i class="ti-settings"></i>
              Account Setting
            </nuxt-link>
            <div class="dropdown-divider"></div>
            <nuxt-link to="logout" class="dropdown-item">
              <i class="fa fa-power-off"></i>
              Logout
            </nuxt-link>
          </div>
        </div>
      </div>
      <!-- End User profile text-->

      <!-- Sidebar navigation-->
      <nav class="sidebar-nav">
        <ul id="sidebarnav">
          <li class="nav-small-cap">DASHBOARD</li>
          <li>
            <a class="has-arrow waves-effect waves-dark" aria-expanded="false">
              <i class="mdi mdi-gauge"></i>
              <span class="hide-menu">My Dashboard</span>
            </a>
            <ul aria-expanded="false" class="collapse">
              <li>
                <nuxt-link to="/">Overview</nuxt-link>
              </li>
            </ul>
            <ul aria-expanded="false" class="collapse">
              <li>
                <nuxt-link to="/blank">Blank Page</nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- End Sidebar navigation -->
    </div>
    <!-- End Sidebar scroll-->
    <!-- Bottom points-->
    <div class="sidebar-footer">
      <!-- item-->
      <nuxt-link to="/profile" class="link" data-toggle="tooltip" title="Profile">
        <i class="ti-user"></i>
      </nuxt-link>
      <!-- item-->
      <nuxt-link to="/settings" class="link" data-toggle="tooltip" title="Settings">
        <i class="ti-settings"></i>
      </nuxt-link>
      <!-- item-->
      <nuxt-link to="/logout" class="link" data-toggle="tooltip" title="Logout">
        <i class="mdi mdi-power"></i>
      </nuxt-link>
    </div>
    <!-- End Bottom points-->
  </aside>
</template>
