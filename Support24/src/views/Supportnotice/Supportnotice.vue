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
              <CCol :md="12"> <P>이부분에는 글의 내용이들어갑니다.</P> </CCol>
            </CRow>
            <CRow>
              <CCol :md="12"> 이부분은 아래 해시태그부분입니다 </CCol>
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
  height: 130px;
}
</style>
