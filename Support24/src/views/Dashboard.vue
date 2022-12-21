<template>
  <div id="main">
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :sm="5">
                <h4 id="traffic" class="card-title mb-0">
                  신규 지원 사업 공고
                </h4>
              </CCol>
            </CRow>
            <CRow>
              <div style="height: 300px; max-height: 300px; margin-top: 40px">
                <div class="container show-grid">
                  <div class="row">
                    <div class="col-md-3">
                      <router-link to="Supportnotice/Supportnotice">
                        <h3>공고제목 or 이미지</h3>
                        <p>
                          공고 내용 여기는 지원사업 내용을 <br />쓰는 자리
                          입니다.
                        </p>
                      </router-link>
                    </div>
                    <div class="col-md-3">
                      <h3>공고제목 or 이미지</h3>
                      <p>
                        공고 내용 여기는 지원사업 내용을 <br />쓰는 자리 입니다.
                      </p>
                    </div>
                    <div class="col-md-3">
                      <h3>공고제목 or 이미지</h3>
                      <p>
                        공고 내용 여기는 지원사업 내용을 <br />쓰는 자리 입니다.
                      </p>
                    </div>
                    <div class="col-md-3">
                      <h3>공고제목 or 이미지</h3>
                      <p>
                        공고 내용 여기는 지원사업 내용을 <br />쓰는 자리 입니다.
                      </p>
                    </div>
                    <div class="col-md-3">
                      <h3>공고제목 or 이미지</h3>
                      <p>
                        공고 내용 여기는 지원사업 내용을 <br />쓰는 자리 입니다.
                      </p>
                    </div>
                    <div class="col-md-3">
                      <h3>공고제목 or 이미지</h3>
                      <p>
                        공고 내용 여기는 지원사업 내용을 <br />쓰는 자리 입니다.
                      </p>
                    </div>
                    <div class="col-md-3">
                      <h3>공고제목 or 이미지</h3>
                      <p>
                        공고 내용 여기는 지원사업 내용을 <br />쓰는 자리 입니다.
                      </p>
                    </div>
                    <div class="col-md-3">
                      <h3>공고제목 or 이미지</h3>
                      <p>
                        공고 내용 여기는 지원사업 내용을 <br />쓰는 자리 입니다.
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
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :sm="5">
                <h4 id="traffic" class="card-title mb-0">마감임박 지원 사업</h4>
              </CCol>
            </CRow>
            <CRow>
              <div style="height: 300px; max-height: 300px; margin-top: 40px">
                <div class="container show-grid">
                  <div class="row">
                    <div class="col-md-3">첫번째 공고 들어가는 자리</div>
                    <div class="col-md-3">두번째 공고 들어가는 자리</div>
                    <div class="col-md-3">세번째 공고 들어가는 자리</div>
                    <div class="col-md-3">네번째 공고 들어가는 자리</div>
                    <div class="col-md-3">다섯번째 공고 들어가는 자리</div>
                    <div class="col-md-3">여섯째 공고 들어가는 자리</div>
                    <div class="col-md-3">일곱번째 공고 들어가는 자리</div>
                    <div class="col-md-3">여덟번째 공고 들어가는 자리</div>
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
.col-md-3 {
  height: 150px;
}
.testimage {
  width: 250px;
  height: 150px;
}
</style>
