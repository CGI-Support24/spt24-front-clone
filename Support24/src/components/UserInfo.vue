<template>
  <div class="user-info">
    <!-- 아래부분이 로그인 시  업데이트 되면 되는 부분-->
    <p>회사명 : 한국농업</p>
    <p>소재지 : 경기도 화성</p>
    <p>사업체 종류 : 농업</p>
    <p>개업시기 : 20.12.19</p>
    <p>사업체 인원수 : 27</p>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  setup() {
    return {}
  },
}
</script>

<style>
.user-info {
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  top: 30px;
  left: 30px;
}
</style>
