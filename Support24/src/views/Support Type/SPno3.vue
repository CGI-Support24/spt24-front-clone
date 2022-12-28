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
                        href="https://www.egbiz.or.kr/prjCategory/a/m/selectPrjView.do?prjDegreeId=PD000000027000

"
                      >
                        <CCardImage orientation="top" :src="techimg5" />
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
                        href="https://www.egbiz.or.kr/prjCategory/a/m/selectPrjView.do?prjDegreeId=PD000000027000

"
                      >
                        <CCardImage orientation="top" :src="techimg6" />
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
                        href="https://www.egbiz.or.kr/prjCategory/a/m/selectPrjView.do?prjDegreeId=PD000000027000

"
                      >
                        <CCardImage orientation="top" :src="techimg7" />
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
                        href="https://www.egbiz.or.kr/prjCategory/a/m/selectPrjView.do?prjDegreeId=PD000000027000

"
                      >
                        <CCardImage orientation="top" :src="techimg8" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          [한국데이터산업진흥원] 마이데이터 사업화 상시자문 지원
                          안내
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
import manimg from '@/assets/SPmanage/manimg.jpg'
import manimg2 from '@/assets/SPmanage/manimg2.jpg'
import manimg3 from '@/assets/SPmanage/manimg3.jpg'
import manimg4 from '@/assets/SPmanage/manimg4.jpg'
import manimg5 from '@/assets/SPmanage/manimg5.jpg'
import manimg6 from '@/assets/SPmanage/manimg6.jpg'
import manimg7 from '@/assets/SPmanage/manimg7.jpg'
import manimg8 from '@/assets/SPmanage/manimg8.jpg'
export default {
  components: {},
  setup() {
    return {
      manimg,
      manimg2,
      manimg3,
      manimg4,
      manimg5,
      manimg6,
      manimg7,
      manimg8,
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
