<template>
  <div id="main">
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :sm="5">
                <h4 id="traffic" class="card-title mb-0">
                  추천 지원 사업 공고
                </h4>
              </CCol>
              <div style="height: 300px; max-height: 300px; margin-top: 40px">
                <div class="container show-grid">
                  <div class="row">
                    <div class="col-md-3">첫번째 맞춤형 공고 들어가는 자리</div>
                    <div class="col-md-3">두번째 맞춤형 공고 들어가는 자리</div>
                    <div class="col-md-3">세번째 맞춤형 공고 들어가는 자리</div>
                    <div class="col-md-3">네번째 맞춤형 공고 들어가는 자리</div>
                    <!-- 추가되면 4개씩 아래로 쌓이는 형식-->
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
