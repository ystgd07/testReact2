import React, { useEffect } from 'react';
import PjtinfoTitle from './PjtinfoTitle';
import PjtInfoMain from './PjtInfoMain';
import { useHover, useProjectModal } from '../../store/store';
import PjtinfoDetail from './PjtinfoDetail';
import { useQuery } from 'react-query';
import { format } from 'date-fns';
import ContentLoader, { Facebook } from 'react-content-loader';
import axios from 'axios';

export default function PjtInfo() {
  const { projectNumber, projectUserId, pjtModalData, setPjtModalData } =
    useProjectModal((state) => state);

  const { data: userListData, isLoading: isLoadingListData } = useQuery(
    ['pjtModalData', projectNumber, projectUserId],
    async () => {
      const res = await axios.get(
        // `/api/project/peerlist?projectNumber=${projectNumber}&owner=${projectUserId}`,
        // 변경사항 추후 적용
        `/api/project/peerlist?projectNumber=${projectNumber}`,
        {
          withCredentials: true,
        },
      );
      return res.data;
    },
    {
      enabled: !!projectNumber,
      onSuccess: (data) => {
        console.log('undefined log : ', data);
      },
      onError: (error) => {
        console.log('error : ', error);
      },
      refetchOnWindowFocus: false,
    },
  );

  const {
    data: pjtDetail,
    isLoading: isPjtDetailLoading,
    refetch: pjtDetailRefatch,
  } = useQuery(
    ['pjtModalData', projectNumber],
    async () => {
      const res = await axios.get(
        `/api/project?projectNumber=${projectNumber}
        `,
        {
          withCredentials: true,
        },
      );
      return res.data;
    },
    {
      enabled: !!userListData,
      // enabled: false,
      onSuccess: (data) => {
        console.log('undefined log : ', data);
      },
      onError: (error) => {
        console.log('error : ', error);
      },
      refetchOnWindowFocus: false,
    },
  );

  console.log('pjtModalData data : ', userListData);
  console.log('pjtDetail data : ', pjtDetail);

  const { hover } = useHover((state) => state);

  return (
    <div className="ml-3">
      <div
        className={`transition-all duration-200 max-w-md p-4   bg-white border-gray-200 rounded-lg shadow-lg t w-screen h-full sm:p-8 dark:bg-gray-500 dark:border-gray-500 ${
          hover ? 'opacity-100' : 'hidden opacity-0'
        } `}
      >
        {pjtDetail ? (
          <PjtinfoTitle
            startDate={pjtDetail?.data?.start_date}
            endDate={pjtDetail?.data?.end_date}
            title={pjtDetail?.data?.title}
          />
        ) : (
          <Facebook />
        )}
        <div className="flow-root">
          <ul role="list" className="divide-gray-200 dark:divide-gray-700">
            <div className="flex flex-row-reverse">
              <div className="mb-4">
                <div className="flex items-center gap-3">
                  <p className="text-sm font-bold text-green-500">시작일</p>
                  <p className="text-xs font-semibold text-green-500">
                    {pjtDetail &&
                      format(
                        new Date(pjtDetail?.data?.start_date),
                        'yyyy-MM-dd',
                      )}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-sm font-bold text-red-500">종료일</p>
                  <p className="text-xs font-semibold text-red-500">
                    {pjtDetail &&
                      format(new Date(pjtDetail?.data?.end_date), 'yyyy-MM-dd')}
                  </p>
                </div>
              </div>
            </div>
            {pjtDetail ? (
              <>
                <PjtinfoDetail detail={pjtDetail?.data?.detail} />
                <PjtInfoMain
                  workerList={userListData?.datalist}
                  title={pjtDetail?.data?.title}
                />
              </>
            ) : (
              <Facebook />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
