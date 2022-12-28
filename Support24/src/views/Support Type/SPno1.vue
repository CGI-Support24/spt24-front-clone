<template>
  <div id="main">
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :sm="5">
                <CCardHeader>
                  <h4><strong>인력</strong> <small>지원사업공고</small></h4>
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
                        href="https://www.egbiz.or.kr/prjCategory/a/m/selectPrjView.do?prjDegreeId=PD000000026916
"
                      >
                        <CCardImage orientation="top" :src="peoimg" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          2022년 산업현장 여성R&D인력 참여확산 기반구축 사업
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A href="https://merryyear.org/archives/news/14012">
                        <CCardImage orientation="top" :src="peoimg2" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          여성창업가 성장지원 프로그램 WE Project 2기 참여기업
                          모집
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <a
                        href="https://cvoucher.kcopa.or.kr/beneficiary-recruit-cont?annId=announce_641662363289599"
                      >
                        <CCardImage orientation="top" :src="peoimg3" />
                      </a>
                      <CCardBody>
                        <CCardText>
                          2022년 맞춤형 해외 저작권 바우처 지원사업
                          참여기업(개인) 수시모집
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <a
                        href="https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=162952&page=1&schStr=regist&pbancEndYn=N
"
                      >
                        <CCardImage orientation="top" :src="peoimg4" />
                      </a>
                      <CCardBody>
                        <CCardText>
                          [특강토크쇼] METAVERSE TALK SHOW 참가자 모집
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <a
                        href="https://www.venturesquare.net/announcement/870504"
                      >
                        <CCardImage orientation="top" :src="peoimg5" />
                      </a>
                      <CCardBody>
                        <CCardText>
                          대덕특구 액셀러레이팅 프로그램 대덕인싸 6기 참가기업
                          모집
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <a
                        href="https://www.egbiz.or.kr/prjCategory/a/m/selectPrjView.do?prjDegreeId=PD000000027613
"
                      >
                        <CCardImage orientation="top" :src="peoimg6" />
                      </a>
                      <CCardBody>
                        <CCardText>
                          2023 경기 스타트업 CLASS 예비·초기창업자 모집안내
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <a
                        href="https://www.egbiz.or.kr/prjCategory/a/m/selectPrjView.do?prjDegreeId=PD000000026076
"
                      >
                        <CCardImage orientation="top" :src="peoimg7" />
                      </a>
                      <CCardBody>
                        <CCardText>
                          2022년 일학습병행 참여기업 모집 안내
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <a
                        href="https://www.egbiz.or.kr/prjCategory/a/m/selectPrjView.do?prjDegreeId=PD000000025471
"
                      >
                        <CCardImage orientation="top" :src="peoimg8" />
                      </a>
                      <CCardBody>
                        <CCardText>
                          경기도 중소기업·소상공인을 위한 「비대면 교육」 안내
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
import peoimg from '@/assets/SPpeo/peoimg.jpg'
import peoimg2 from '@/assets/SPpeo/peoimg2.jpg'
import peoimg3 from '@/assets/SPpeo/peoimg3.jpg'
import peoimg4 from '@/assets/SPpeo/peoimg4.jpg'
import peoimg5 from '@/assets/SPpeo/peoimg5.jpg'
import peoimg6 from '@/assets/SPpeo/peoimg6.jpg'
import peoimg7 from '@/assets/SPpeo/peoimg7.jpg'
import peoimg8 from '@/assets/SPpeo/peoimg8.jpg'
export default {
  components: {},
  setup() {
    return {
      peoimg,
      peoimg2,
      peoimg3,
      peoimg4,
      peoimg5,
      peoimg6,
      peoimg7,
      peoimg8,
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
