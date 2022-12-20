<template>
  <div id="main">
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :sm="5" class="header1">
                <h4 id="traffic" class="card-title mb-0">
                  클릭한 지원 사업 공고 <br />지원사업 공고가 있는 페이지 URL
                </h4>
              </CCol>
            </CRow>
            <CRow>
              <div style="height: 800px; max-height: 800px; margin-top: 40px">
                <div class="container show-grid">
                  <div class="row">
                    <div>
                      <h3>공고제목</h3>
                      <p>
                        이부분엔 지원 사업의 내용이 들어가는 부분입니다. 크롤링
                        해온 데이터들중 내용 부분이 여기에 들어가요
                      </p>
                    </div>
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
