<template>
  <div id="main">
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :sm="5">
                <CCardHeader>
                  <h4><strong>수출</strong> <small>지원사업공고</small></h4>
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
                        href="https://www.egbiz.or.kr/prjCategory/a/m/selectPrjView.do?prjDegreeId=PD000000025948
"
                      >
                        <CCardImage orientation="top" :src="SPexport" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          2022년 경기도 소모성자재(MRO)몰 구축운영사업
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.egbiz.or.kr/prjCategory/a/m/selectPrjView.do?prjDegreeId=PD000000025564

"
                      >
                        <CCardImage orientation="top" :src="SPexport2" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          국제 지재권분쟁 대응전략 지원사업(상표/디자인) 공고
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.startup-plus.kr/cms_for_portal/process/program/view.do?c=1&s_program=3&c_no=2233
"
                      >
                        <CCardImage orientation="top" :src="SPexport3" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          뉴미디어 스튜디오 협력사 상시모집
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=162953&page=1&schStr=regist&pbancEndYn=N
"
                      >
                        <CCardImage orientation="top" :src="SPexport4" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          2023년 광명업사이클아트센터(1차) 입주기업 및
                          가상오피스 지원기업 모집
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://dacon.io/competitions/official/236042/overview/description
"
                      >
                        <CCardImage orientation="top" :src="SPexport5" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          2023 교원그룹 손글씨 인식 AI 챌린지 예선
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
                        <CCardImage orientation="top" :src="SPexport6" />
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
                        href="https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=149506
"
                      >
                        <CCardImage orientation="top" :src="SPexport7" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          2022년도 R&D/비R&D 과제코디 지원사업 모집 공고 @
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.egbiz.or.kr/prjCategory/a/m/selectPrjView.do?prjDegreeId=PD000000026963
"
                      >
                        <CCardImage orientation="top" :src="SPexport8" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          2022년 수출지원기반활용사업 참여기업 추가 모집공고
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
import SPexport from '@/assets/SPexport/SPexport.jpg'
import SPexport2 from '@/assets/SPexport/SPexport2.jpg'
import SPexport3 from '@/assets/SPexport/SPexport3.jpg'
import SPexport4 from '@/assets/SPexport/SPexport4.jpg'
import SPexport5 from '@/assets/SPexport/SPexport5.jpg'
import SPexport6 from '@/assets/SPexport/SPexport6.jpg'
import SPexport7 from '@/assets/SPexport/SPexport7.jpg'
import SPexport8 from '@/assets/SPexport/SPexport8.jpg'
export default {
  components: {},
  setup() {
    return {
      SPexport,
      SPexport2,
      SPexport3,
      SPexport4,
      SPexport5,
      SPexport6,
      SPexport7,
      SPexport8,
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
