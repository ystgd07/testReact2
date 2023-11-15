import axios from 'axios';

// 백로그 생성
export const createBackLogApi = async (backlogDto, backFileDto, test) => {
  console.log('api call currentProjectNumber : ', backFileDto);

  const formData = new FormData();

  formData.append(
    'backlogDto',
    new Blob([JSON.stringify(backlogDto)], { type: 'application/json' }),
  );

  formData.append(
    'fileDto',
    new Blob([JSON.stringify(backFileDto)], { type: 'multipart/form-data' }),
  );

  const res = axios.post(`/api/project/backlog?project_no=${test}`, formData);
  return res;
};

// 진행중인 백로그 가져오기
export const fetchBacklogTitle = async () => {
  try {
    const response = await axios.get('/api/project/backlog/ing');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 스프린트 번호
export const fetchBackLogPjtData = async () => {
  const res = await axios.get(`/api/project/list`, {
    withCredentials: true,
  });

  return res;
};

// 프로젝트 유저
export const fetchBackLogPjtDetailData = async (pjtNum, owner) => {
  const res = await axios.get(`/project/peerlist?projectNumber=${pjtNum}`, {
    withCredentials: true,
  });

  return res;
};

// 현재 프로젝트의 모든 백로그
export const fetchBackLogList = async (pjtNum) => {
  const res = await axios.get(`/api/project/backlog/all?project_no=${pjtNum}`, {
    withCredentials: true,
  });

  return res;
};

// 백로그 상세 페이지
export const fetchBacklogDetail = async (BackNum) => {
  const res = await axios.get(`/api/project/backlog?no=${BackNum}`, {
    withCredentials: true,
  });

  return res;
};

// 백로그 수정
export const updateBacklogData = async (
  backNum,
  selectedBackObj,
  backFileDto,
) => {
  const formData = new FormData();

  formData.append(
    'backlogDto',
    new Blob([JSON.stringify(selectedBackObj)], { type: 'application/json' }),
  );

  formData.append(
    'fileDto',
    new Blob([JSON.stringify(backFileDto)], { type: 'multipart/form-data' }),
  );

  const res = await axios.put(`/api/project/backlog?no=${backNum}`, formData, {
    withCredentials: true,
  });
  return res;
};

// 백로그 삭제
export const deleteBacklog = async (BackNum) => {
  const res = await axios.delete(`//api/project/backlog?no=${BackNum}`, {
    withCredentials: true,
  });

  return res;
};
