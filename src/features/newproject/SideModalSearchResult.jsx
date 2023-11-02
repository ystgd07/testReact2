import React from 'react';
import { useCreatePjtOne } from '../../store/store';
import { useQuery } from 'react-query';
import axios from 'axios';

export default function SideModalSearchResult() {
  const {
    peerName,
    setPeerName,
    userList,
    setSelectUser,
    selectedUser,
    isSearchResultOpen,
    setIsSearchResultOpen,
  } = useCreatePjtOne((state) => state);

  const { data, isLoading } = useQuery(
    ['userList', peerName],
    async () => {
      const res = await axios.get(
        `http://www.peernow.site/api/project/peer?peerName=${peerName}`,
        {
          withCredentials: true,
        },
      );
      return res;
    },
    {
      enabled: !!peerName,
      onSuccess: (data) => {
        console.log('undefined log : ', data);
      },
      onError: (error) => {
        console.log('error : ', error);
      },
      refetchOnWindowFocus: false,
    },
  );
  console.log('data : ', data);
  return (
    <div
      className={`absolute z-50 ${
        !peerName > 0 || !isSearchResultOpen ? 'hidden' : ''
      } h-fit py-3 mt-8 overflow-y-scroll text-sm bg-white rounded-md w-full shadow-md top-11 right-0`}
    >
      {!isLoading &&
        data?.data?.datalist &&
        data?.data?.datalist?.map((user, idx) => (
          <div
            className="flex justify-start px-2 py-2 my-2 text-gray-700 rounded-md cursor-pointer hover:text-blue-400 hover:bg-blue-100"
            key={idx}
            onClick={() => {
              setSelectUser(user);
              setIsSearchResultOpen();
              setPeerName('');
            }}
          >
            <span className="w-2 h-2 m-2 bg-gray-400 rounded-full"></span>
            <div className="flex-grow px-2 font-medium">{user.name}</div>
            <div className="text-sm font-normal tracking-wide text-gray-500">
              {user.team ? user.team : '무소속'}
            </div>
          </div>
        ))}
    </div>
  );
}
