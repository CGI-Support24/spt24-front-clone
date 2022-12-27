<template>
  <div id="main">
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :md="12">
                <h4 id="traffic" class="card-title mb-0">자주 묻는 질문</h4>
                <br />
                <CAccordion :active-item-key="2" always-open id="test4">
                  <CAccordionItem :item-key="1">
                    <CAccordionHeader>
                      지원사업은 누구나 지원할수 있는건가요?
                    </CAccordionHeader>
                    <CAccordionBody>
                      <strong
                        >정부 지원 사업의 경우 모집 공고 부분에 지원사업의
                        대상에 해당하는 경우 지원할 수 있습니다.</strong
                      >
                    </CAccordionBody>
                  </CAccordionItem>
                  <CAccordionItem :item-key="2">
                    <CAccordionHeader>
                      하나의 지원사업을 받으면서 다른 지원 사업도 신청할 수
                      있나요 ?
                    </CAccordionHeader>
                    <CAccordionBody>
                      <strong
                        >각 지원사업의 지원 공고에 나와있는 신청 조건에 부합하는
                        경우 신청할 수 있습니다.</strong
                      >
                    </CAccordionBody>
                  </CAccordionItem>
                  <CAccordionItem :item-key="3">
                    <CAccordionHeader>
                      정부가 지원하는 모든 보조금 사업을
                      안내하나요?</CAccordionHeader
                    >
                    <CAccordionBody>
                      <strong
                        >보조금24에서는 개인·가구를 대상으로 현금·현물·이용권
                        등을 제공하는 보조금 사업 또는 정부 지원 사업을 통해
                        제공되는 서비스를 대상으로 안내하고 있습니다.</strong
                      >
                      협회·단체·법인·시설 등을 대상으로 지원하는 사업, 시설 및
                      및 R&D 등 개인이 신청해야 받는 서비스와 관련 없는 보조금
                      사업은 보조금24 서비스 대상이 아닙니다.
                    </CAccordionBody>
                  </CAccordionItem>
                </CAccordion>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>

    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :sm="5">
                <h4 id="traffic" class="card-title mb-0">추가문의사항접수</h4>
                <br />
                <CForm>
                  <CFormTextarea id="Textarea1" label="제목" rows="1" />
                  <CFormTextarea id="Textarea1" label="문의 내용" rows="3" />
                  <div class="col-auto">
                    <br />
                    <CButton
                      type="submit"
                      color="primary"
                      class="input"
                      id="button1"
                      @click="
                        () => {
                          visibleLiveDemo = true
                        }
                      "
                      >보내기</CButton
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
                        <CModalTitle>전송완료</CModalTitle>
                      </CModalHeader>
                      <CModalBody> <b> 전송이 완료되었습니다.</b> </CModalBody>
                      <CModalFooter>
                        <CButton
                          color="secondary"
                          @click="
                            () => {
                              visibleLiveDemo = false
                            }
                          "
                          >닫기</CButton
                        >
                      </CModalFooter>
                    </CModal>
                  </div>
                </CForm>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>
<script>
import { CCardBody } from '@coreui/vue'
export default {
  name: 'Buttons',
  components: { CCardBody },
  data() {
    return {
      visibleLiveDemo: false,
    }
  },
}
</script>

<style>
#test4 {
  width: 100%;
  height: 100%;
}

#Textarea1 {
  width: 246.5%;
  height: 100%;
}

#button1 {
  position: relative;
  left: 235%;
}
</style>
