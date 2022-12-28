<template>
  <div id="main">
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :sm="5">
                <CCardHeader>
                  <h4>
                    <strong>사용자 추천</strong> <small>지원사업공고</small>
                  </h4>
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
                        href="https://www.gsp.or.kr/supportProject/UVSD0001.do?sportSeq=2655
"
                      >
                        <CCardImage orientation="top" :src="SPnotice" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          [가비아] 하이웍스 메일/그룹웨어 12개월 무료 지원
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.egbiz.or.kr/prjCategory/a/m/selectPrjView.do?prjDegreeId=PD000000027106
"
                      >
                        <CCardImage orientation="top" :src="SPnotice2" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          경기VR/AR제작거점센터 XR시설 장비 무상지원
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.gsp.or.kr/supportProject/UVSD0001.do?sportSeq=3222
"
                      >
                        <CCardImage orientation="top" :src="SPnotice3" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          제1회 IPO 기술특례상장 세미나 지원사업 모집 공고
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.venturesquare.net/announcement/864689
"
                      >
                        <CCardImage orientation="top" :src="SPnotice4" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          28 충남창업마루나비 팹랩 장비대여 @
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.gsp.or.kr/supportProject/UVSD0001.do?sportSeq=1979
"
                      >
                        <CCardImage orientation="top" :src="SPnotice5" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          [무료지원 기업모집] 기업제품과 딱 맞게 자동으로
                          매칭되는 바이어와 화상상담
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.egbiz.or.kr/prjCategory/a/m/selectPrjView.do?prjDegreeId=PD000000027572
"
                      >
                        <CCardImage orientation="top" :src="SPnotice6" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          2023년 경기 스타트업 랩 신규 입주기업 모집
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.egbiz.or.kr/prjCategory/a/m/selectPrjView.do?prjDegreeId=PD000000026376
"
                      >
                        <CCardImage orientation="top" :src="SPnotice7" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          2022년 인공지능(AI) 기술실증 테스트베드 연계
                          기회제공형 실증 지원사업 공고
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.rechallenge.or.kr/planweb/board/view.9is?dataUid=2c9b8073831b780301835542f23430d1&page=1&boardUid=40288095586a64e001586c59efce00f7&contentUid=402880955861e980015861fbf1aa0040&layoutUid=&searchType=&keyword=&categoryUid1=&categoryUid2=&cateogryUid3=
"
                      >
                        <CCardImage orientation="top" :src="SPnotice8" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          2022년 ESG 경영 우수 혁신사례 공모전 모집 공고
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
import SPnotice from '@/assets/SPnotice/SPnotice.jpg'
import SPnotice2 from '@/assets/SPnotice/SPnotice2.jpg'
import SPnotice3 from '@/assets/SPnotice/SPnotice3.jpg'
import SPnotice4 from '@/assets/SPnotice/SPnotice4.jpg'
import SPnotice5 from '@/assets/SPnotice/SPnotice5.jpg'
import SPnotice6 from '@/assets/SPnotice/SPnotice6.jpg'
import SPnotice7 from '@/assets/SPnotice/SPnotice7.jpg'
import SPnotice8 from '@/assets/SPnotice/SPnotice8.jpg'
export default {
  components: {},
  setup() {
    return {
      SPnotice,
      SPnotice2,
      SPnotice3,
      SPnotice4,
      SPnotice5,
      SPnotice6,
      SPnotice7,
      SPnotice8,
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
