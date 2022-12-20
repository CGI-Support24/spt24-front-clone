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
    <div v-if="userInfo == null">
      <!--로그인 하면 이 컴포넌트 보여주면 됩니다. 지금은 =!, == 거꾸로 해둬서 정보 보임!-->
      <UserInfo />
    </div>
    <div v-if="userInfo != null">로그인하세용</div>
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
      userinfo: '로그인함',
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
