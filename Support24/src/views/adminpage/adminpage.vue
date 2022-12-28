<template>
  <div id="main">
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :sm="5">
                <h4 id="traffic" class="card-title mb-0">관리자페이지</h4>
                <BR />
              </CCol>
              <CRow>
                <h4>오늘 추가된 지원사업!</h4>
                <BR />
                <BR />

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
                <BR />
                <table class="keyword2">
                  <thead>
                    <tr>
                      <th scope="cols">지원사업명</th>
                      <th scope="cols">분류</th>
                      <th scope="cols">개요</th>
                      <th scope="cols">대상</th>
                      <th scope="cols">나이</th>
                      <th scope="cols">지역</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>지원사업명1</td>
                      <td>금융</td>
                      <td>투자기업발굴</td>
                      <td>3년미만</td>
                      <td>청년</td>
                      <td>서울</td>
                    </tr>
                    <tr>
                      <td>지원사업명2</td>
                      <td>기술</td>
                      <td>개요2</td>
                      <td>창업예정</td>
                      <td>중년</td>
                      <td>경기</td>
                    </tr>
                    <tr>
                      <td>지원사업명3</td>
                      <td>인력</td>
                      <td>개요3</td>
                      <td>7년미만</td>
                      <td>정년퇴직이후</td>
                      <td>광주</td>
                    </tr>
                    <tr>
                      <td>지원사업명4</td>
                      <td>내용</td>
                      <td>개요4</td>
                      <td>전체</td>
                      <td>전체</td>
                      <td>부산</td>
                    </tr>
                  </tbody>
                </table>
                <CButton
                  color="dark"
                  class="fixbtn"
                  @click="
                    () => {
                      visibleLiveDemo2 = true
                    }
                  "
                  >데이터수정</CButton
                >
                <CModal
                  :visible="visibleLiveDemo2"
                  @close="
                    () => {
                      visibleLiveDemo = false
                    }
                  "
                >
                  <CModalHeader>
                    <CModalTitle class="logfixtitle"
                      >지원사업키워드수정</CModalTitle
                    >
                  </CModalHeader>
                  <CModalBody>
                    <CInputGroup class="mb-3">
                      <CInputGroupText>
                        <CIcon icon="cilLaptop" />
                      </CInputGroupText>
                      <CFormInput placeholder="지원사업명" />
                    </CInputGroup>
                    <CInputGroup class="mb-3">
                      <CInputGroupText>
                        <CIcon icon="cilMenu" />
                      </CInputGroupText>
                      <CFormInput placeholder="분류" />
                    </CInputGroup>
                    <CInputGroup class="mb-3">
                      <CInputGroupText>
                        <CIcon icon="cilStar" />
                      </CInputGroupText>
                      <CFormInput placeholder="개요" />
                    </CInputGroup>
                    <CInputGroup class="mb-3">
                      <CInputGroupText>
                        <CIcon icon="cilCheck" />
                      </CInputGroupText>
                      <CFormInput placeholder="대상" />
                    </CInputGroup>
                    <CInputGroup class="mb-3">
                      <CInputGroupText>
                        <CIcon icon="cil-user" />
                      </CInputGroupText>
                      <CFormInput placeholder="나이" />
                    </CInputGroup>
                    <CInputGroup class="mb-3">
                      <CInputGroupText>
                        <CIcon icon="cil-Notes" />
                      </CInputGroupText>
                      <CFormInput placeholder="지역" />
                    </CInputGroup>
                  </CModalBody>
                  <CModalFooter>
                    <CButton class="ModalButton">수정하기</CButton>
                    <CButton
                      color="secondary"
                      @click="
                        () => {
                          visibleLiveDemo2 = false
                        }
                      "
                      >닫기</CButton
                    >
                  </CModalFooter>
                </CModal>
                <BR />
                <h4>DB키워드 오류 수정</h4>
                <table class="keyword">
                  <thead>
                    <tr>
                      <th scope="cols">키워드</th>
                      <th scope="cols">내용</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">지원</th>
                      <td class="support-content">
                        <div>
                          '지원' 이라는 키워드가 들어가는 경우 사업 크롤링
                        </div>
                        <CButton
                          class="keywordbtn"
                          color="secondary"
                          @click="
                            () => {
                              visibleLiveDemo = true
                            }
                          "
                          >수정하기</CButton
                        >
                        <CModal
                          :visible="visibleLiveDemo"
                          @close="
                            () => {
                              visibleLiveDemo = false
                            }
                          "
                        >
                          <CModalHeader>
                            <CModalTitle class="logfixtitle"
                              >키워드 수정</CModalTitle
                            >
                          </CModalHeader>
                          <CModalBody>
                            <CInputGroup class="mb-3">
                              <CInputGroupText>
                                <CIcon icon="cilLaptop" />
                              </CInputGroupText>
                              <CFormInput placeholder="키워드입력" />
                            </CInputGroup>
                          </CModalBody>
                          <CModalFooter>
                            <CButton
                              color="secondary"
                              @click="
                                () => {
                                  visibleLiveDemo = false
                                }
                              "
                              >수정하기</CButton
                            >
                          </CModalFooter>
                        </CModal>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">지원사업</th>
                      <td class="support-content">
                        <div>
                          '지원사업' 이라는 키워드가 들어가는 경우 사업 크롤링
                        </div>
                        <CButton
                          class="keywordbtn"
                          color="secondary"
                          @click="
                            () => {
                              visibleLiveDemo = true
                            }
                          "
                          >수정하기</CButton
                        >
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">지원금</th>
                      <td class="support-content">
                        <div>
                          '지원금' 이라는 키워드가 들어가는 경우 사업 크롤링
                        </div>
                        <CButton
                          class="keywordbtn"
                          color="secondary"
                          @click="
                            () => {
                              visibleLiveDemo = true
                            }
                          "
                          >수정하기</CButton
                        >
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">창업</th>
                      <td class="support-content">
                        <div>
                          '창업' 이라는 키워드가 들어가는 경우 사업 크롤링
                        </div>
                        <CButton
                          class="keywordbtn"
                          color="secondary"
                          @click="
                            () => {
                              visibleLiveDemo = true
                            }
                          "
                          >수정하기</CButton
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div><a class="more" href="#">더보기</a></div>
              </CRow>
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
export default {
  components: {},
  setup() {
    return {
      SPstartup,
      SPstartup2,
      SPstartup3,
      SPstartup4,
    }
  },
  data() {
    return {
      visibleLiveDemo: false,
      visibleLiveDemo2: false,
    }
  },
}
</script>
<style>
table.keyword {
  border-collapse: collapse;
  text-align: left;
  line-height: 1.5;
  border: 1px solid #ccc;
  margin: 20px 10px;
}
table.keyword thead {
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
  background: #3c4b64;
}
table.keyword thead th {
  padding: 10px;
  font-weight: bold;
  vertical-align: top;
  color: #fff;
}
table.keyword tbody th {
  width: 10%;
  padding: 10px;
  font-weight: bold;
  vertical-align: top;
  border-bottom: 1px solid #ccc;
  background: #fcf1f4;
}
table.keyword td {
  width: 90%;
  padding: 10px;
  vertical-align: top;
  border-bottom: 1px solid #ccc;
}
.support-content {
  width: 100% !important;
  display: flex;
  justify-content: space-between;
}
.more {
  display: flex;
  justify-content: end;
}

table.keyword2 {
  border-collapse: separate;
  border-spacing: 1px;
  text-align: center;
  line-height: 1.5;
  margin: 20px 10px;
}
table.keyword2 th {
  width: 155px;
  padding: 10px;
  font-weight: bold;
  vertical-align: top;
  color: #fff;
  background: #3c4b64;
}
table.keyword2 td {
  width: 155px;
  padding: 10px;
  vertical-align: top;
  border-bottom: 1px solid #ccc;
  background: #eee;
}
.fixbtn {
  position: relative;
  left: 90%;
  width: 107px;
  height: 40px;
}
</style>
