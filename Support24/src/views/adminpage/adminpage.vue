<template>
  <div id="main">
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :md="4">
                <h3>관리자 페이지</h3>
                <br />
              </CCol>
              <CRow>
                <h4>오늘 추가된 지원사업!</h4>
                <br />
                <CCol :md="3">
                  <h3>공고제목 and 이미지</h3>
                  <p>
                    공고 내용 여기는 지원사업 내용을 <br />쓰는 자리 입니다.
                  </p>
                </CCol>
                <CCol :md="3">
                  <h3>공고제목 and 이미지</h3>
                  <p>
                    공고 내용 여기는 지원사업 내용을 <br />쓰는 자리 입니다.
                  </p>
                </CCol>
                <CCol :md="3">
                  <h3>공고제목 and 이미지</h3>
                  <p>
                    공고 내용 여기는 지원사업 내용을 <br />쓰는 자리 입니다.
                  </p>
                </CCol>
                <CCol :md="3">
                  <h3>공고제목 and 이미지</h3>
                  <p>
                    공고 내용 여기는 지원사업 내용을 <br />쓰는 자리 입니다.
                  </p>
                </CCol>
                <br />
                <br />
                <br />
                <h4>DB키워드 오류 수정</h4>
                <p>이곳에는 DB에 들어가 있는 키워드들이 나열됩니다.</p>
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
const HOST = "http://221.156.243.172:3003";
export default {
  components: {},
  setup() {
    return {}
  },
 getData(){
  this.$axios
  .get(HOST + "/adminpage/getAll")
  .then((res)=>{
    console.log(res.staus);
    console.los(res.data);
  })
  .catch((error)=>{
    console.log(error);
  })
  .finally(()=>{
    console.log("종료")
  })
 } 
  


}

</script>
<style></style>
