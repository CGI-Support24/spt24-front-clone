<template>
  <div id="main">
    <CRow>
      <CCardBody>
        <CCol :md="12">
          <CCard class="mb-4">
            <CCardHeader>
              <h4><strong>인기</strong> <small>지원사업공고</small></h4>
            </CCardHeader>
            <CCardBody class="maincontents">
              <CCard>
                <router-link to="Supportnotice/Supportnotice">
                  <CCardImage orientation="top" :src="VueImg" />
                </router-link>
                <CCardBody>
                  <CCardText> 이부분에는 글의 내용이 들어갑니다 </CCardText>
                </CCardBody>
              </CCard>
            </CCardBody>
            <CCardBody class="maincontents">
              <CCard>
                <CCardImage orientation="top" :src="VueImg" />
                <CCardBody>
                  <CCardText> 이부분에는 글의 내용이 들어갑니다 </CCardText>
                </CCardBody>
              </CCard>
            </CCardBody>
          </CCard>
        </CCol>
      </CCardBody>
    </CRow>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :sm="5">
                <h4 id="traffic" class="card-title mb-0">마감임박 지원 사업</h4>
                <br />
              </CCol>
            </CRow>
            <CRow>
              <div class="container show-grid">
                <div class="row">
                  <div class="col-md-4">
                    <h3>공고제목 or 이미지</h3>
                    <p>공고 내용 여기는 지원사업 내용을 쓰는 자리 입니다.</p>
                  </div>
                  <div class="col-md-4">
                    <h3>공고제목 or 이미지</h3>
                    <p>공고 내용 여기는 지원사업 내용을 쓰는 자리 입니다.</p>
                  </div>
                  <div class="col-md-4">
                    <h3>공고제목 or 이미지</h3>
                    <p>공고 내용 여기는 지원사업 내용을 쓰는 자리 입니다.</p>
                  </div>
                  <div class="col-md-4">
                    <h3>공고제목 or 이미지</h3>
                    <p>공고 내용 여기는 지원사업 내용을 쓰는 자리 입니다.</p>
                  </div>
                  <div class="col-md-4">
                    <h3>공고제목 or 이미지</h3>
                    <p>공고 내용 여기는 지원사업 내용을 쓰는 자리 입니다.</p>
                  </div>
                  <div class="col-md-4">
                    <h3>공고제목 or 이미지</h3>
                    <p>공고 내용 여기는 지원사업 내용을 쓰는 자리 입니다.</p>
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
import VueImg from '@/assets/images/vue.jpg'
export default {
  components: {},
  setup() {
    return {
      VueImg,
    }
  },
}
</script>

<style>
#main {
  position: relative;
  right: 110px;
}

.testimg1 {
  width: 100%;
  height: 180px;
}
.textimg {
  width: 410px;
  height: 170px;
}
.maincontents {
  width: 300px;
}
</style>
