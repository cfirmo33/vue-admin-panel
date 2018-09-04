<template>
  <vuestic-sidebar :hidden="isOpen">
    <template slot="menu">
      <sidebar-link
        :to="{ name: 'dashboard' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-dashboard"></span>
          <span>{{ $t('menu.dashboard') }}</span>
        </span>
      </sidebar-link>
      <sidebar-link
        :to="{ name: 'products' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon fa fa-barcode"></span>
          <span>{{ $t('menu.products') }}</span>
        </span>
      </sidebar-link>
      <sidebar-link
        :to="{ name: 'orders' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon fa fa-shopping-cart"></span>
          <span>Pedidos</span>
        </span>
      </sidebar-link>
      <sidebar-link
        :to="{ name: 'reports' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-statistics"></span>
          <span>Relatórios</span>
        </span>
      </sidebar-link>
      <sidebar-link
        :to="{ name: 'coupons' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon fa fa-tag"></span>
          <span>Cupons</span>
        </span>
      </sidebar-link>
      <sidebar-link
        :to="{ name: 'stock' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon fa fa-archive"></span>
          <span>Estoque</span>
        </span>
      </sidebar-link>
      <sidebar-link
        :to="{ name: 'deliveries' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon fa fa-truck"></span>
          <span>Entregas</span>
        </span>
      </sidebar-link>
      <sidebar-link
        :to="{ name: 'users' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon fa fa-users"></span>
          <span>Usuários</span>
        </span>
      </sidebar-link>
      <sidebar-link
        :to="{ name: 'settings' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon fa fa-cogs"></span>
          <span>Configurações</span>
        </span>
      </sidebar-link>
    </template>
  </vuestic-sidebar>
</template>

<script>
import VuesticSidebar from "@/vuestic-theme/vuestic-components/vuestic-sidebar/VuesticSidebar"
import SidebarLink from "./components/SidebarLink"
import SidebarLinkGroup from "./components/SidebarLinkGroup"

export default {
  name: "app-sidebar",
  components: {
    VuesticSidebar,
    SidebarLink,
    SidebarLinkGroup
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  }
}
</script>
