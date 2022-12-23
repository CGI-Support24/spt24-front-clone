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
                    <CAccordionHeader> 질문1 </CAccordionHeader>
                    <CAccordionBody>
                      <strong>굵은글씨</strong> 답변
                    </CAccordionBody>
                  </CAccordionItem>
                  <CAccordionItem :item-key="2">
                    <CAccordionHeader> 질문2 </CAccordionHeader>
                    <CAccordionBody>
                      <strong>굵은글씨</strong>
                      답변
                    </CAccordionBody>
                  </CAccordionItem>
                  <CAccordionItem :item-key="3">
                    <CAccordionHeader> 질문3 </CAccordionHeader>
                    <CAccordionBody>
                      <strong>굵은글씨</strong> 답변
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
                <h4 id="traffic" class="card-title mb-0">문의하기</h4>
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
