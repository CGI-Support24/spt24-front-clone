<template>
  <div id="main">
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :sm="5">
                <h4 id="traffic" class="card-title mb-0">지원금 관련 사항</h4>
                <br />
                <br />
              </CCol>
            </CRow>
            <CCol :md="12">
              <P
                >지원금 관련 문의 사항은 공고문에 작성되어 있는 연락처 및
                이메일로 문의사항을 접수해 주세요.</P
              >
              <P
                >지원금 관련 문의사항 추가 접수가 필요하시다면 자주묻는 질문의
                추가 문의사항 접수를 이용해 주세요.</P
              >
            </CCol>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<!-- 백단에서 넣어야 하는 데이터들은 여기아래에-->
<script>
export default {
  components: {},
  setup() {
    return {}
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
</style>
