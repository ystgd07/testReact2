import { UseBackLog, createBackLog } from '../../store/BackLogStore/store';
import CreateButton from '../../ui/CreateButton';
import { useMutation, useQueryClient } from 'react-query';
import ModalRadio from './ModalRadio';
import { createBackLogApi } from '../../apis/backLogApis';

export default function ModalDetail() {
  // 백로그 유저 서치
  const { setSearchRes, searchUser, setSearchUser, searchRes } = UseBackLog(
    (state) => state,
  );
  // 백로그 생성
  const { setUserId, setStatus, setTitle, setDetail, addFileName, backlogDto } =
    createBackLog((state) => state);

  const queryClient = useQueryClient();

  const { mutate: createAccount, isCreateLoading } = useMutation(
    createBackLogApi,
    {
      onSuccess: (user) => {
        console.log('Success : ', user);

        queryClient.invalidateQueries();
      },
      onError: (error) => {
        console.log('Error', error);
      },
    },
  );

  return (
    <>
      <div>
        <div className="relative mt-6 flex-1 px-4 sm:px-6">
          <ModalRadio onChange={(e) => setStatus(e.target.value)} />
          <input
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 w-full  border-gray-300 p-2 mb-4 rounded-md"
            placeholder=" *무엇을 해야합니까"
          />
          <input
            name="user_id"
            className="border-2 w-full border-gray-300 p-2 mb-4 rounded-md"
            placeholder=" *담당자를 선택해주세요"
            onChange={(e) => {
              setSearchUser(e.target.value);
            }}
          />
          <input
            name="detail"
            onChange={(e) => setDetail(e.target.value)}
            className="border-2 w-full border-gray-300 p-2 mb-4 rounded-md"
            placeholder="설명을 입력할 수 있습니다"
          />
          <div className="items-center">
            <label className="block">
              <input
                type="file"
                name="name"
                onChange={(e) => addFileName(e.target.value)}
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold"
              />
            </label>
          </div>
          <div className="float-right my-2">
            <CreateButton
              value={'완료'}
              event={createAccount}
              dto={backlogDto}
            />
          </div>
        </div>
      </div>
    </>
  );
}
