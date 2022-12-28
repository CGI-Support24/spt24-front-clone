<template>
  <div id="main">
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :sm="5">
                <CCardHeader>
                  <h4><strong>경영</strong> <small>지원사업공고</small></h4>
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
                        href="https://nbv.co.kr/notice/detail?id=10
"
                      >
                        <CCardImage orientation="top" :src="manimg" />
                      </A>
                      <CCardBody>
                        <CCardText>
                          뉴본벤처스 2023. 1월 IR멘토링데이 참가기업 모집
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A href="https://onoffmix.com/event/268154">
                        <CCardImage orientation="top" :src="manimg2" />
                      </A>
                      <CCardBody>
                        <CCardText> 더벤쳐스 Seed Program </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <a
                        href="https://www.kised.or.kr/gallery.es?mid=a10311000000&bid=0007&act=view&list_no=931&nPage=1
"
                      >
                        <CCardImage orientation="top" :src="manimg3" />
                      </a>
                      <CCardBody>
                        <CCardText>
                          도전! K-스타트업 2022 혁신창업리그
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <a
                        href="https://www.startup-plus.kr/cms_for_portal/process/program/view.do?c=1&s_program=3&c_no=2521
"
                      >
                        <CCardImage orientation="top" :src="manimg4" />
                      </a>
                      <CCardBody>
                        <CCardText>
                          벤처나라 혁신조달상품 등록 지원제도 기관 추천 희망
                          기업 상시모집
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <a
                        href="https://www.gsp.or.kr/supportProject/UVSD0001.do?sportSeq=3223"
                      >
                        <CCardImage orientation="top" :src="manimg5" />
                      </a>
                      <CCardBody>
                        <CCardText>
                          분당서울대학교병원 디지털 헬스케어 오픈이노베이션
                          스타트업 및 기업 모집
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <a
                        href="https://www.egbiz.or.kr/prjCategory/a/m/selectPrjView.do?prjDegreeId=PD000000024841
"
                      >
                        <CCardImage orientation="top" :src="manimg6" />
                      </a>
                      <CCardBody>
                        <CCardText>
                          소상공인 점프업허브 스마트오피스 멤버 모집 안내
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <a
                        href="https://www.data.go.kr/bbs/ntc/selectNotice.do?originId=NOTICE_0000000002673
"
                      >
                        <CCardImage orientation="top" :src="manimg7" />
                      </a>
                      <CCardBody>
                        <CCardText>
                          오픈스퀘어-D 공공데이터 활용 컨설팅
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <a
                        href="https://www.gsp.or.kr/supportProject/UVSD0001.do?sportSeq=3207
"
                      >
                        <CCardImage orientation="top" :src="manimg8" />
                      </a>
                      <CCardBody>
                        <CCardText>
                          창업 1년 미만 소기업 스타트업 오피스 지원 안내
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
