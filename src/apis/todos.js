import axios from "axios";
import { SERVER_URL } from "./config";
// 전체 목록 가져오기
// BE 연동은 시간이 걸린다.
// 즉, 비동기입니다.
// 언제 결과가 올지 몰라요.
// 성공이든, 에러든 시간이 걸립니다.
// axios 를 사용하시면 기본형을 지켜서 코딩합니다.

const API_URL = `${SERVER_URL}/todos`;

// 4단계
export const getTodos = async () => {
  // 1단계
  try {
    // 3단계
    // 5단계 하고 싶은일 작성
    // axios.get( 주소 );
    // 자료를 얻겠다.

    const response = await axios.get(API_URL);
    //console.log(respose);
    //console.log(respose.data);
    //console.log(respose.status);
    const status = response.status.toString();
    const statusResult = status.charAt(0);
    if (statusResult === "2") {
      console.log("정상적 처리");
      // 호출 한 곳으로 자료를 돌려준다.
      return response.data;
    } else {
      console.log("예외처리");
    }
  } catch (error) {
    // 2단계
    console.log(error);
    alert(error.message);
  }
};
// 목록 1개만 가져오기
// 4단계
export const getOneTodos = async id => {
  // 1번단계
  try {
    // 3단계
    // 5단계  하고 싶은일
    const response = await axios.get(`${API_URL}/${id}`);
    const status = response.status.toString();
    const statusResult = status.charAt(0);
    if (statusResult === "2") {
      console.log("정상적 처리");
      console.log(response.data);
      // 호출 한 곳으로 자료를 돌려준다.
      return response.data;
    } else {
      console.log("예외처리");
    }
  } catch (error) {
    // 2단계
    console.log(error);
    alert(error);
  }
};
// 글 등록하기
// obj = { id: 50, content:"새할일", completed: false}

// export const postTodos = async obj => {
export const postTodos = async ({ id, content, completed }) => {
  try {
    // post 는 주소 및 패스, 보낼 객체 리터럴
    const response = await axios.post(API_URL, { id, content, completed });

    const status = response.status.toString();
    const statusResult = status.charAt(0);
    if (statusResult === "2") {
      console.log("정상적 처리");
      console.log(response.data);
      // 호출 한 곳으로 자료를 돌려준다.
      return response.data;
    } else {
      console.log("예외처리");
    }
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
// 글 삭제하기
export const deleteTodos = async id => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    const status = response.status.toString().charAt(0);
    if (status === "2") {
      console.log("정상적 처리");
      console.log(response.data);
      // 호출 한 곳으로 자료를 돌려준다.
      return response.data;
    } else {
      console.log("예외처리");
    }
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

// 글 수정하기
// axios.put()
export const putTodos = async ({ id, content }) => {
  try {
    // 특정한 글을 수정한다.
    const response = await axios.put(`${API_URL}/${id}`, {
      content,
    });
    const status = response.status.toString().charAt(0);
    if (status === "2") {
      console.log("정상적 처리");
      console.log(response.data);
      // 호출 한 곳으로 자료를 돌려준다.
      return response.data;
    } else {
      console.log("예외처리");
    }
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
