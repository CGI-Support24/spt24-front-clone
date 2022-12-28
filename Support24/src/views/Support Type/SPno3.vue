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
                        href="https://www.egbiz.or.kr/prjCategory/a/m/selectPrjView.do?prjDegreeId=PD000000027000
"
                      >
                        <CCardImage orientation="top" :src="techimg" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          [한국데이터산업진흥원] 마이데이터 사업화 상시자문 지원
                          안내
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.egbiz.or.kr/prjCategory/a/m/selectPrjView.do?prjDegreeId=PD000000026334
"
                      >
                        <CCardImage orientation="top" :src="techimg2" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          2022 중소수출기업 글로벌 점프업(물류비) 지원사업
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.egbiz.or.kr/prjCategory/a/m/selectPrjView.do?prjDegreeId=PD000000025706
"
                      >
                        <CCardImage orientation="top" :src="techimg3" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          2022년 디지털포렌식 및 디지털증거 보존지원 서비스
                          신청안내(무료) 모집 공고
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://piville.kr/news/news_view.asp?b_idx=391&KeyNewsSeq=&KeyField=&KeyWord=&Current_Page=1
"
                      >
                        <CCardImage orientation="top" :src="techimg4" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          고려대학교 KU-3DS 설계 및 구조해석 기술지원 프로그램
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.startup-plus.kr/cms_for_portal/process/program/view.do?c=1&s_program=6&c_no=1078
"
                      >
                        <CCardImage orientation="top" :src="techimg5" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          제품화 지원센터 기구 전기 전자 전문가 기술 멘토링
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=162907&page=1&schStr=regist&pbancEndYn=N
"
                      >
                        <CCardImage orientation="top" :src="techimg6" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          2023년 KEPCO 에너지 스타트업 지원기업 모집공고
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.egbiz.or.kr/prjCategory/a/m/selectPrjView.do?prjDegreeId=PD000000025706
"
                      >
                        <CCardImage orientation="top" :src="techimg7" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          2022년 디지털포렌식 및 디지털증거 보존지원 서비스
                          신청안내(무료) 모집 공고
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.startup-plus.kr/cms_for_portal/process/program/view.do?c=1&s_program=3&c_no=3122
"
                      >
                        <CCardImage orientation="top" :src="techimg8" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          KT&G x Seoul Startup Open Innovation 2022
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
import techimg from '@/assets/SPtech/techimg.jpg'
import techimg2 from '@/assets/SPtech/techimg2.jpg'
import techimg3 from '@/assets/SPtech/techimg3.jpg'
import techimg4 from '@/assets/SPtech/techimg4.jpg'
import techimg5 from '@/assets/SPtech/techimg5.jpg'
import techimg6 from '@/assets/SPtech/techimg6.jpg'
import techimg7 from '@/assets/SPtech/techimg7.jpg'
import techimg8 from '@/assets/SPtech/techimg8.jpg'
export default {
  components: {},
  setup() {
    return {
      techimg,
      techimg2,
      techimg3,
      techimg4,
      techimg5,
      techimg6,
      techimg7,
      techimg8,
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
