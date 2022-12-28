<template>
  <div id="main">
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :sm="5">
                <CCardHeader>
                  <h4><strong>기술</strong> <small>지원사업공고</small></h4>
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
                        href="https://www.egbiz.or.kr/prjCategory/a/m/selectPrjView.do?prjDegreeId=PD000000026663
"
                      >
                        <CCardImage orientation="top" :src="SPfinance" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          2022 해외사업화 BD 지원 안내 공고
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://blog.naver.com/heemangfdn/222845819133
"
                      >
                        <CCardImage orientation="top" :src="SPfinance2" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          피칭 역량강화 프로그램 "먼-먼데이 피칭"
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.egbiz.or.kr/prjCategory/a/m/selectPrjView.do?prjDegreeId=PD000000026523
"
                      >
                        <CCardImage orientation="top" :src="SPfinance3" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          2022 화성시 해외 수출보험료 지원사업 공고
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="http://main.demoday.co.kr/invest/5137
"
                      >
                        <CCardImage orientation="top" :src="SPfinance4" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          B.스타트업 오픈 이노베이션 창구 등록 기업 상시 모집
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.egbiz.or.kr/prjCategory/a/m/selectPrjView.do?prjDegreeId=PD000000026246
"
                      >
                        <CCardImage orientation="top" :src="SPfinance5" />
                      </A>
                      <CCardBody>
                        <CCardText> 2022년도 데이터금고 지원사업 </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.egbiz.or.kr/prjCategory/a/m/selectPrjView.do?prjDegreeId=PD000000025704
"
                      >
                        <CCardImage orientation="top" :src="SPfinance6" />
                      </A>
                      <CCardBody>
                        <CCardText> 2022년 일터혁신컨설팅 지원사업 </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.bizinfo.go.kr/web/lay1/bbs/S1T122C128/AS/74/view.do?target=PR&pblancId=PBLN_000000000078997&menuId=80001001001
"
                      >
                        <CCardImage orientation="top" :src="SPfinance7" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          2022년 시제품제작터 전문가 지원 서비스
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.egbiz.or.kr/prjCategory/a/m/selectPrjView.do?prjDegreeId=PD000000025133
"
                      >
                        <CCardImage orientation="top" :src="SPfinance8" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          2022년 시니어인턴십 참여기업 모집 @
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
import SPfinance from '@/assets/SPfinance/SPfinance.jpg'
import SPfinance2 from '@/assets/SPfinance/SPfinance2.jpg'
import SPfinance3 from '@/assets/SPfinance/SPfinance3.jpg'
import SPfinance4 from '@/assets/SPfinance/SPfinance4.jpg'
import SPfinance5 from '@/assets/SPfinance/SPfinance5.jpg'
import SPfinance6 from '@/assets/SPfinance/SPfinance6.jpg'
import SPfinance7 from '@/assets/SPfinance/SPfinance7.jpg'
import SPfinance8 from '@/assets/SPfinance/SPfinance8.jpg'
export default {
  components: {},
  setup() {
    return {
      SPfinance,
      SPfinance2,
      SPfinance3,
      SPfinance4,
      SPfinance5,
      SPfinance6,
      SPfinance7,
      SPfinance8,
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
