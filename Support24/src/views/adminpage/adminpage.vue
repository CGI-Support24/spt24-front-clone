<template>
  <div id="main">
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :md="12">
                <h3>관리자 페이지</h3>
                <br />
              </CCol>
              <CRow>
                <CCol :md="12">
                  <p>
                    이부분에는 신규 크롤링 게시물의 이미지와 텍스트가
                    표기됩니다.
                  </p>
                  <br />
                  <br />
                  <br />
                  <h4>DB키워드 오류 수정</h4>
                  <p>이곳에는 DB에 들어가 있는 키워드들이 나열됩니다.</p>
                </CCol>
              </CRow>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<!-- 백단에서 넣어야 하는 데이터들은 여기아래에-->
<script>
export default {
  components: {},
  setup() {
    return {}
  },
}
</script>
<style></style>
