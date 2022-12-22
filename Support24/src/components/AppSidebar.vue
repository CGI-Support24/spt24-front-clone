<template>
  <CSidebar
    position="fixed"
    :unfoldable="sidebarUnfoldable"
    :visible="sidebarVisible"
    @visible-change="
      (event) =>
        $store.commit({
          type: 'updateSidebarVisible',
          value: event,
        })
    "
  >
    <CSidebarBrand>
      <a href="#">
        <img class="title" src="@/assets/images/EXTITTLE.png" />
      </a>
    </CSidebarBrand>
    <AppSidebarNav />
    <div v-if="userInfo != null">
      <UserInfo />
    </div>
    <div v-if="userInfo == null" align="center">
      <p>로그인시 <br />사용자의 정보가 표기됩니다.</p>
    </div>
  </CSidebar>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { AppSidebarNav } from './AppSidebarNav'
import UserInfo from '@/components/UserInfo'
export default {
  name: 'AppSidebar',
  components: {
    AppSidebarNav,
    UserInfo,
  },
  data() {
    return {
      userInfo: 'null아님',
    }
  },
  setup() {
    const store = useStore()
    return {
      sidebarUnfoldable: computed(() => store.state.sidebarUnfoldable),
      sidebarVisible: computed(() => store.state.sidebarVisible),
    }
  },
}
</script>
<style>
.sidebar-nav {
  flex: unset !important;
}

.title {
  height: 50px;
  width: 220px;
}
</style>
