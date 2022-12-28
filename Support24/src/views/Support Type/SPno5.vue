<template>
  <div id="main">
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :sm="5">
                <CCardHeader>
                  <h4><strong>창업</strong> <small>지원사업공고</small></h4>
                </CCardHeader>
                <br />
              </CCol>
            </CRow>
            <CRow>
              <div class="container show-grid">
                <div class="row">
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.gsp.or.kr/supportProject/UVSD0001.do?sportSeq=3206
"
                      >
                        <CCardImage orientation="top" :src="SPstartup" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          22년 지방 핀테크기업 입주지원 대상기업 모집공고
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.egbiz.or.kr/prjCategory/a/m/selectPrjView.do?prjDegreeId=PD000000025644
"
                      >
                        <CCardImage orientation="top" :src="SPstartup2" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          2022년도 일터혁신 컨설팅 지원사업 안내
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.egbiz.or.kr/prjCategory/a/m/selectPrjView.do?prjDegreeId=PD000000027591
"
                      >
                        <CCardImage orientation="top" :src="SPstartup3" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          경기벤처창업지원센터&경기스타트업랩(AI) 개방형
                          창업공간(지정석) 2023년 상반기 모집 공고
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.egbiz.or.kr/prjCategory/a/m/selectPrjView.do?prjDegreeId=PD000000027591
"
                      >
                        <CCardImage orientation="top" :src="SPstartup4" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          경기벤처창업지원센터&경기스타트업랩(AI) 개방형
                          창업공간(지정석) 2023년 상반기 모집 공고
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.gsp.or.kr/supportProject/UVSD0001.do?sportSeq=3216
"
                      >
                        <CCardImage orientation="top" :src="SPstartup5" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          판교 제2테크노밸리「창업존」입주기업 모집
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.gsp.or.kr/supportProject/UVSD0001.do?sportSeq=3221
"
                      >
                        <CCardImage orientation="top" :src="SPstartup6" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          2023년 한국장학재단 창업지원형 기숙사 입주생 모집
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=162940&page=1&schStr=regist&pbancEndYn=N
"
                      >
                        <CCardImage orientation="top" :src="SPstartup7" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          2023 코어 스타트업 어워즈 참가기업 모집
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.startup-plus.kr/cms_for_portal/process/program/view.do?c=1&s_program=1&c_no=3109
"
                      >
                        <CCardImage orientation="top" :src="SPstartup8" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          2023 서울창업성장센터 입주기업 모집
                        </CCardText>
                      </CCardBody>
                    </CCard>
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
import SPstartup from '@/assets/SPstartup/SPstartup.jpg'
import SPstartup2 from '@/assets/SPstartup/SPstartup2.jpg'
import SPstartup3 from '@/assets/SPstartup/SPstartup3.jpg'
import SPstartup4 from '@/assets/SPstartup/SPstartup4.jpg'
import SPstartup5 from '@/assets/SPstartup/SPstartup5.jpg'
import SPstartup6 from '@/assets/SPstartup/SPstartup6.jpg'
import SPstartup7 from '@/assets/SPstartup/SPstartup7.jpg'
import SPstartup8 from '@/assets/SPstartup/SPstartup8.jpg'
export default {
  components: {},
  setup() {
    return {
      SPstartup,
      SPstartup2,
      SPstartup3,
      SPstartup4,
      SPstartup5,
      SPstartup6,
      SPstartup7,
      SPstartup8,
    }
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
  margin-bottom: 20px;
}
</style>
