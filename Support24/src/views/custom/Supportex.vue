<template>
  <div id="main">
    <form action="맞춤지원사업보내기(백단에서받아서보이게하기)" method="post">
      <!-- 맞춤 지원 사업 보내는 폼-->
      <CRow>
        <CCol :md="12">
          <CCard class="mb-4">
            <CCardBody>
              <CRow>
                <CCol :md="12">
                  <h4 id="traffic" class="card-title mb-0">
                    맞춤 지원 사업 공고
                  </h4>
                  <br />
                  <div id="location">
                    <b>지역</b><br />
                    <CFormCheck
                      inline
                      id="inlineCheckbox1"
                      value="option1"
                      label="서울"
                    />
                    <CFormCheck
                      inline
                      id="inlineCheckbox2"
                      value="option2"
                      label="부산"
                    />
                    <CFormCheck
                      inline
                      id="inlineCheckbox2"
                      value="option2"
                      label="경기"
                    />
                    <CFormCheck
                      inline
                      id="inlineCheckbox2"
                      value="option2"
                      label="전남"
                    />
                    <CFormCheck
                      inline
                      id="inlineCheckbox2"
                      value="option2"
                      label="경남"
                    />
                    <CFormCheck
                      inline
                      id="inlineCheckbox2"
                      value="option2"
                      label="광주"
                    />
                  </div>
                </CCol>
              </CRow>
              <CRow>
                <CCol :md="2">
                  <CButton color="secondary" id="noticesearchbutton"
                    >맞춤지원사업검색</CButton
                  >
                  <!-- 검색 해서 나오는결과값 버튼-->
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </form>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <div style="height: 300px; max-height: 300px; margin-top: 40px">
                <div class="container show-grid">
                  <div class="row">
                    <div class="col-md-3">첫번째 공고 들어가는 자리</div>
                    <div class="col-md-3">두번째 공고 들어가는 자리</div>
                    <div class="col-md-3">세번째 공고 들어가는 자리</div>
                    <div class="col-md-3">네번째 공고 들어가는 자리</div>
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
#noticesearchbutton {
  position: relative;
  left: 550%;
}
</style>
