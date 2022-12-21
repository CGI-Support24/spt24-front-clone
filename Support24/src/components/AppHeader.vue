<template>
  <CHeader position="sticky" class="mb-4">
    <CContainer fluid>
      <CHeaderToggler class="ps-1" @click="$store.commit('toggleSidebar')">
        <CIcon icon="cil-menu" size="lg" /><!--메뉴 여닫는 버튼 입니당 -->
      </CHeaderToggler>
      <CHeaderNav class="d-none d-md-flex me-auto">
        <CNavItem>
          <form action="." method="post">
            <input
              class="search-txt"
              type="text"
              placeholder="검색어를 입력해 주세요"
            /><!--검색하는 부분 입니당 -->
            <button class="search-btn" type="submit">
              <img class="ser" src="@/assets/images/search.png" />
            </button>
          </form>
        </CNavItem>
        <div>
          <CButton
            color="dark"
            class="login"
            @click="
              () => {
                visibleLiveDemo = true
              }
            "
            >로그인
          </CButton>
          <CModal
            :visible="visibleLiveDemo"
            @close="
              () => {
                visibleLiveDemo = false
              }
            "
          >
            <!-- 로그인 버튼인데 지금로그인 되어있는데 구현되어있습니다. 로그인이 되어있을때면 -->
            <!--<CButton color="dark" class="login">로그아웃 </CButton>  이 버튼이 출력되어야합니다.-->
            <CModalHeader>
              <!--아래는로그인 모달 입니당 기능구현은 안해도되고 해도 된다고 해요.-->
              <CModalTitle>로그인</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <CInputGroup class="mb-3">
                <CInputGroupText>
                  <CIcon icon="cil-user" />
                </CInputGroupText>
                <CFormInput placeholder="아이디입력" autocomplete="username" />
              </CInputGroup>
              <CInputGroup class="mb-4">
                <CInputGroupText>
                  <CIcon icon="cil-lock-locked" />
                </CInputGroupText>
                <CFormInput
                  type="password"
                  placeholder="비밀번호 입력"
                  autocomplete="current-password"
                />
              </CInputGroup>
            </CModalBody>
            <CModalFooter>
              <CButton class="ModalButton">로그인</CButton>
              <CButton class="ModalButton">회원가입</CButton>
              <CButton
                color="secondary"
                @click="
                  () => {
                    visibleLiveDemo = false
                  }
                "
                >닫기</CButton
              >
            </CModalFooter>
          </CModal>
        </div>
      </CHeaderNav>
    </CContainer>
  </CHeader>
</template>
<style>
.search-btn {
  position: relative;
  top: 18px;
  width: 37px;
  height: 36px;
  background: #fff;
  border: none !important;
  border-top: 1px solid #343c58 !important;
  border-right: 1px solid #343c58 !important;
  border-bottom: 1px solid #343c58 !important;
}
.ser {
  width: 20px;
  height: 20px;
}
.search-txt {
  position: relative;
  top: 18px;
  width: 1300px;
  padding: 5px;
  border: none !important;
  border-top: 1px solid #343c58 !important;
  border-left: 1px solid #343c58 !important;
  border-bottom: 1px solid #343c58 !important;
}
button.login {
  border: 0;
  outline: none;
  font-size: 15px;
  margin: 15px;
  padding: 10px;
  cursor: pointer;
}

.ModalButton:hover {
  color: white;
  background: gray;
}
</style>
<script>
export default {
  data() {
    return {
      visibleLiveDemo: false,
    }
  },
}
</script>
