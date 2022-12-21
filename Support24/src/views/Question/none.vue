<template>
  <div id="main">
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :sm="5">
                <h4 id="traffic" class="card-title mb-0">지원금 지원 관련</h4>
              </CCol>
            </CRow>
            <CRow>
              <div style="height: 300px; max-height: 300px; margin-top: 40px">
                <div class="container show-grid">
                  <div class="row">
                    <div class="col-md-3">예시</div>
                    <div class="col-md-3">페이지</div>
                    <div class="col-md-3">입니당</div>
                    <div class="col-md-3">!!</div>
                  </div>
                </div>
              </div>
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
#main {
  position: relative;
  right: 110px;
  width: 1500px;
}
#box1 {
  width: 0px;
}
</style>
