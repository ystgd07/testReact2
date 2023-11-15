import { MdDelete } from 'react-icons/md';
import BacklogStatus from './BacklogStatus';
import BacklogSprint from './BacklogSprint';
import {
  AllBacklogOfThisPjt,
  useBackLogPageRes,
  useBackNumStore,
  useProjectInBackLog,
} from '../../store/BackLogStore/store';
import { FcDownload } from 'react-icons/fc';
import { deleteBacklog, fetchBackLogList } from '../../apis/backLogApis';
import { useMutation, useQuery } from 'react-query';
import { useBackLogDetailPage } from '../../store/store';
import BacklogDetailModal from './BacklogDetailModal';

export default function BacklogTbody() {
  // 전체 백로그 확인
  const { backlogData, setBacklogData } = AllBacklogOfThisPjt((state) => state);
  console.log('[BacklogTbody] 전체 백로그 확인, backlogData', backlogData);
  // 프로젝트 번호
  const { pjtData } = useProjectInBackLog((state) => state);
  console.log('[BacklogTbody] 프로젝트 번호, pjtData', pjtData);
  // 헤더 프로젝트 번호
  const { currentProjectNumber } = useBackLogPageRes((state) => state);
  // 백로그 상세페이지 모달
  const { isBackLogModalOpen, setBackLogModalOpen } = useBackLogDetailPage(
    (state) => state,
  );
  //
  const { backNum, setBackNum, setSelectedBackObj } = useBackNumStore(
    (state) => state,
  );
  //

  console.log('[BacklogTbody] nowNum 번호 ====> ', currentProjectNumber);
  console.log('[BacklogTbody] backlogData.no 번호 ====> ', backlogData.no);

  // 백로그 데이터 받아오기
  const {
    data: bData,
    isLoading: bDataLoading,
    // refetch: Backlogs,
  } = useQuery(
    ['fetchBackLogList', pjtData[currentProjectNumber].no],
    () => fetchBackLogList(pjtData[currentProjectNumber].no),
    {
      onSuccess: (data) => {
        console.log('fetchBackLogList :', data);
        setBacklogData(data?.data?.datalist);
      },
    },
  );

  // 백로그 삭제
  const { mutate: deleteBacklog, isLoading: isDeleteBacklogLoading } =
    useMutation((backNum) => deleteBacklog(backNum), {
      onSuccess: (data) => {
        console.log('fetchBackLogList :', data);
        setBacklogData(data?.data?.datalist);
      },
    });

  return (
    <>
      {isBackLogModalOpen && <BacklogDetailModal />}
      {backlogData.map((item, idx) => (
        <tr key={idx} className="bg-white border-b">
          <th
            scope="row"
            className="pl-6 py-2 font-medium text-gray-900 whitespace-nowrap flex flex-row"
          >
            <button
              className="font-medium hover:text-blue-600 cursor-pointer"
              onClick={() => {
                setBackLogModalOpen();
                setBackNum(item.no);
                setSelectedBackObj(item);
              }}
              value={item.title}
            >
              {item.title}
            </button>
            <button className="ml-2">
              <FcDownload />
            </button>
          </th>
          {/* <th className="py-2"></th> */}
          <td className="px-6 py-2">
            <BacklogStatus
              value={
                item.status === 'todo'
                  ? '● 진행 예정 '
                  : item.status === 'ing'
                  ? '● 진행 중'
                  : '● 완료'
              }
              color={
                item.status === 'todo'
                  ? 'red'
                  : item.status === 'ing'
                  ? 'blue'
                  : 'green'
              }
            />
          </td>
          <td className="px-6 py-2">
            <BacklogSprint
              value={item.sprint_no === 0 ? '-' : item.sprint_no}
            />
          </td>
          <td className="px-4 py-2">
            <span className="flex">
              <img
                // src={item.image}
                src={`data:image/*;base64,${item.image}`}
                className="w-6 h-6 rounded-full"
                alt="백로그_담당자_이미지"
              />
              <span className="ml-1">{item.user_id}</span>
            </span>
          </td>
          <td className="px-2 py-2">
            <button
              onClick={() => deleteBacklog(item.no)}
              className="text-xl font-medium text-gray-400 hover:text-red-600"
            >
              <MdDelete />
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}
