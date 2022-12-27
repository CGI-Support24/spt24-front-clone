<template>
  <div class="user-info">
    <!-- 아래부분이 로그인 시  업데이트 되면 되는 부분-->
    <p>회사명 : 한국 디지털 통신</p>
    <p>소재지 : 경기도 화성</p>
    <p>사업체 종류 : 정보통신</p>
    <p>개업시기 : 20.12.19</p>
    <p>사업체 인원수 : 29</p>
    <div>
      <!-- 아래 모달 정보수정 하면 데이터가 바뀌는 부분을 보여주면좋겠어요..-->
      <CButton
        id="loginfix"
        color="dark"
        class="loginfix"
        @click="
          () => {
            visibleLiveDemo = true
          }
        "
        >정보수정</CButton
      >
      <CModal
        :visible="visibleLiveDemo"
        @close="
          () => {
            visibleLiveDemo = false
          }
        "
      >
        <CModalHeader>
          <CModalTitle class="logfixtitle">회원정보수정</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CInputGroup class="mb-3">
            <CInputGroupText>
              <CIcon icon="cilLaptop" />
            </CInputGroupText>
            <CFormInput placeholder="회사명" autocomplete="회사명입력" />
          </CInputGroup>
          <CInputGroup class="mb-3">
            <CInputGroupText>
              <CIcon icon="cilMenu" />
            </CInputGroupText>
            <CFormInput placeholder="소재지" autocomplete="소재지입력" />
          </CInputGroup>
          <CInputGroup class="mb-3">
            <CInputGroupText>
              <CIcon icon="cilStar" />
            </CInputGroupText>
            <CFormInput
              placeholder="사업체종류"
              autocomplete="사업체종류 입력"
            />
          </CInputGroup>
          <CInputGroup class="mb-3">
            <CInputGroupText>
              <CIcon icon="cilCheck" />
            </CInputGroupText>
            <CFormInput placeholder="개업시기" autocomplete="개업시기입력" />
          </CInputGroup>
          <CInputGroup class="mb-3">
            <CInputGroupText>
              <CIcon icon="cil-user" />
            </CInputGroupText>
            <CFormInput
              placeholder="사업체인원수"
              autocomplete="사업체인원수입력"
            />
          </CInputGroup>
        </CModalBody>
        <CModalFooter>
          <CButton class="ModalButton">수정하기</CButton>
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
    <router-link to="adminpage/adminpage"
      ><CButton color="info" id="adminb">관리자</CButton>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  setup() {
    return {}
  },
  data() {
    return {
      visibleLiveDemo: false,
    }
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
#loginfix {
  position: relative;
  left: 120px;
  width: 90px;
  height: 40px;
}
#adminb {
  position: relative;
  left: 120px;
  width: 90px;
  height: 40px;
}
.logfixtitle {
  color: black;
}
</style>
