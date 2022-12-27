<template>
  <div id="main">
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :sm="5">
                <CCardHeader>
                  <h4><strong>인기</strong> <small>지원사업공고</small></h4>
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
                        href="https://general-twist-2b7.notion.site/BoomUP-2022-075a812a8fc54aa191e6bc8285c93ba9"
                      >
                        <CCardImage orientation="top" :src="VueImg" />
                      </A>
                      <CCardBody>
                        <CCardText> BoomUP 2022 참여기업 모집 </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A
                        href="https://www.mois.go.kr/frt/sub/a06/b07/localyouthjob/screen.do"
                      >
                        <CCardImage orientation="top" :src="VueImg2" />
                      </A>
                      <CCardBody>
                        <CCardText> 지역주도형 청년일자리사업 </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <a
                        href="http://www.gywbi.or.kr/sub1/sub1_view.aspx?b=482&p=0&cdt=&txt="
                      >
                        <CCardImage orientation="top" :src="VueImg3" />
                      </a>
                      <CCardBody>
                        <CCardText>
                          고양시여성창업지원센터 7기 입주기업 모집 공고
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <a
                        href="https://www.egbiz.or.kr/prjCategory/a/m/selectPrjView.do?prjDegreeId=PD000000027591"
                      >
                        <CCardImage orientation="top" :src="VueImg4" />
                      </a>
                      <CCardBody>
                        <CCardText>
                          경기벤처창업지원센터&경기스타트업랩(AI) 개방형
                          창업공간 2023년 상반기 모집 공고
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <a
                        href="http://www.gsp.or.kr/supportProject/UVSD0001.do?sportSeq=3189"
                      >
                        <CCardImage orientation="top" :src="VueImg5" />
                      </a>
                      <CCardBody>
                        <CCardText>
                          2023년 경기 스타트업 랩 신규 입주기업 모집
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <a href="http://me2.do/GnCvTtqr">
                        <CCardImage orientation="top" :src="VueImg6" />
                      </a>
                      <CCardBody>
                        <CCardText>
                          경기벤처창업지원센터(안양/판교) BI 입주기업 모집
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <A href="http://ggxr.or.kr/">
                        <CCardImage orientation="top" :src="VueImg7" />
                      </A>
                      <CCardBody>
                        <CCardText> 경기VR/AR제작거점센터 안내 </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard class="border-secondary">
                      <a
                        href="https://www.egbiz.or.kr/prjCategory/a/m/selectPrjView.do?prjDegreeId=PD000000026992"
                      >
                        <CCardImage orientation="top" :src="VueImg8" />
                      </a>
                      <CCardBody>
                        <CCardText>
                          2022년 경기도 기술개발사업 평가위원 후보단 모집 공고
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
  <div id="main">
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :sm="5">
                <CCardHeader>
                  <h4><strong>마감임박</strong> <small>지원사업공고</small></h4>
                </CCardHeader>
                <br />
              </CCol>
            </CRow>
            <CRow>
              <div class="container show-grid">
                <div class="row">
                  <div class="col-md-3">
                    <CCard>
                      <router-link to="Supportnotice/Supportnotice">
                        <CCardImage orientation="top" :src="VueImg" />
                      </router-link>
                      <CCardBody>
                        <CCardText>
                          이부분에는 글의 내용이 들어갑니다
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard>
                      <router-link to="Supportnotice/Supportnotice">
                        <CCardImage orientation="top" :src="VueImg" />
                      </router-link>
                      <CCardBody>
                        <CCardText>
                          이부분에는 글의 내용이 들어갑니다
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard>
                      <router-link to="Supportnotice/Supportnotice">
                        <CCardImage orientation="top" :src="VueImg" />
                      </router-link>
                      <CCardBody>
                        <CCardText>
                          이부분에는 글의 내용이 들어갑니다
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard>
                      <router-link to="Supportnotice/Supportnotice">
                        <CCardImage orientation="top" :src="VueImg" />
                      </router-link>
                      <CCardBody>
                        <CCardText>
                          이부분에는 글의 내용이 들어갑니다
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard>
                      <router-link to="Supportnotice/Supportnotice">
                        <CCardImage orientation="top" :src="VueImg" />
                      </router-link>
                      <CCardBody>
                        <CCardText>
                          이부분에는 글의 내용이 들어갑니다
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard>
                      <router-link to="Supportnotice/Supportnotice">
                        <CCardImage orientation="top" :src="VueImg" />
                      </router-link>
                      <CCardBody>
                        <CCardText>
                          이부분에는 글의 내용이 들어갑니다
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard>
                      <router-link to="Supportnotice/Supportnotice">
                        <CCardImage orientation="top" :src="VueImg" />
                      </router-link>
                      <CCardBody>
                        <CCardText>
                          이부분에는 글의 내용이 들어갑니다
                        </CCardText>
                      </CCardBody>
                    </CCard>
                  </div>
                  <div class="col-md-3">
                    <CCard>
                      <router-link to="Supportnotice/Supportnotice">
                        <CCardImage orientation="top" :src="VueImg2" />
                      </router-link>
                      <CCardBody>
                        <CCardText>
                          이부분에는 글의 내용이 들어갑니다
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
import VueImg from '@/assets/images/vue.jpg'
import VueImg2 from '@/assets/images/vue2.jpg'
import VueImg3 from '@/assets/images/vue3.jpg'
import VueImg4 from '@/assets/images/vue4.jpg'
import VueImg5 from '@/assets/images/vue5.jpg'
import VueImg6 from '@/assets/images/vue6.jpg'
import VueImg7 from '@/assets/images/vue7.jpg'
import VueImg8 from '@/assets/images/vue8.jpg'
export default {
  components: {},
  setup() {
    return {
      VueImg,
      VueImg2,
      VueImg3,
      VueImg4,
      VueImg5,
      VueImg6,
      VueImg7,
      VueImg8,
    }
  },
}
</script>

<style>
#main {
  position: relative;
  right: 110px;
}
.maincontents {
  width: 300px;
}
.col-md-3 {
  margin-bottom: 20px;
}
</style>
