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
                <br />
                <br />
                <div class="col-md-5">
                  <h3>공고제목 or 이미지</h3>
                  <p>공고 내용 여기는 지원사업 내용을 쓰는 자리 입니다.</p>
                </div>
                <div class="col-md-5">
                  <h3>공고제목 or 이미지</h3>
                  <p>공고 내용 여기는 지원사업 내용을 쓰는 자리 입니다.</p>
                </div>
                <div class="col-md-5">
                  <h3>공고제목 or 이미지</h3>
                  <p>공고 내용 여기는 지원사업 내용을 쓰는 자리 입니다.</p>
                </div>
                <br />
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
                        <div>내용이 들어갑니다.</div>
                        <CButton class="keywordbtn" color="secondary"
                          >수정하기</CButton
                        >
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">지원사업</th>
                      <td>내용이 들어갑니다.</td>
                    </tr>
                    <tr>
                      <th scope="row">지원금</th>
                      <td>내용이 들어갑니다.</td>
                    </tr>
                  </tbody>
                </table>
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
export default {
  components: {},
  setup() {
    return {}
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
  width: 50px;
  padding: 10px;
  font-weight: bold;
  vertical-align: top;
  border-bottom: 1px solid #ccc;
  background: #fcf1f4;
}
table.keyword td {
  width: 350px;
  padding: 10px;
  vertical-align: top;
  border-bottom: 1px solid #ccc;
}
.support-content {
  width: 100% !important;
  display: flex;
  justify-content: space-between;
}
</style>
