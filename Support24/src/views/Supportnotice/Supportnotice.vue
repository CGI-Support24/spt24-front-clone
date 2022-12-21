<template>
  <div id="main">
    <CRow>
      <CCol :md="9">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :md="12">
                <h3>이부분에는 지원사업의 이름이 들어갑니다.</h3>
                <br />
              </CCol>
            </CRow>
            <CRow>
              <CCol :md="12">
                <P>이부분에는 크롤링 한 게시물의 URL이 표기됩니다.</P>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol :md="3">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :md="12" class="photo1"
                >이부분은 포스터이미지들어가는부분</CCol
              >
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :md="12">
                <P>이부분에는 게시물의 내용이 들어가는부분입니다</P>
              </CCol>
              <CRow>
                <CCol :md="12">
                  <P>이부분에는 글의 해시태그가 들어가는 부분입니다.</P>
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
<style>
.photo1 {
  height: 110px;
}
</style>
