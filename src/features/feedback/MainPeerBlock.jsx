import { useQuery } from 'react-query';
import axios from 'axios';
import { usePeerEv, useTogetherPeerEv } from '../../store/PeerStore/store';
import {
  useBackLogPageRes,
  useProjectInBackLog,
} from '../../store/BackLogStore/store';
import { useNavigate } from 'react-router-dom';
import CreatePjtSkeleton from '../../skeleTon/CreatePjtSkeleton';

export default function MainPeerBlock() {
  const { currentProjectNumber, currentProjectOwner } = useBackLogPageRes(
    (state) => state,
  );
  const { setPeerList } = usePeerEv((state) => state);
  const navigate = useNavigate();

  const { setSelectedPeerId, setSelectedName, setSelectedImg } =
    useTogetherPeerEv((state) => state);
  const { pjtData } = useProjectInBackLog((state) => state);

  const { data: useListForPeer1, isLoading: isLoadingUseListForPeer } =
    useQuery(
      [
        'pjtModalData',
        pjtData[currentProjectNumber]?.no,
        pjtData[currentProjectNumber]?.user_id,
      ],
      async () => {
        const res = await axios.get(
          `/api/project/peerlist?projectNumber=${pjtData[currentProjectNumber]?.no}`,
          {
            withCredentials: true,
          },
        );
        return res.data;
      },
      {
        onSuccess: (data) => {
          console.log('undefined log : ', data);
          setPeerList(data?.datalist);
        },
        onError: (error) => {
          console.log('error : ', error);
        },
        refetchOnWindowFocus: false,
      },
    );

  return (
    <div className="p-1">
      <p className="m-2 ml-3 mb-5 border-b-2 border-slate-100 text-lg font-semibold text-gray-700">
        함께한 <span className="font-extrabold">동료</span>에 대해 평가해주세요
      </p>
      <div className="h-full grid grid-cols-6 gap-4 text-center text-base p-4 scrollBar">
        {useListForPeer1 ? (
          useListForPeer1?.datalist.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer max-w-sm bg-white shadow-xl rounded-lg overflow-hidden h-60 hover:scale-95"
              onClick={(e) => {
                console.log('제발 projectNumber', item.id);
                setSelectedName(item.name);
                setSelectedPeerId(item.id);
                setSelectedImg(item.image);
                // setSelectedImg(`data:image/*;base64,${item.image}`);
                navigate('/home/feedback2');
              }}
            >
              <img
                src={`data:image/*;base64,${item.image}`}
                className="w-full h-48 object-cover object-center"
              />
              {/* <div class="flex items-center px-4 py-2 bg-[#FFD232]">
                <svg
                  class="h-5 w-5 text-white fill-current"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z" />
                </svg>
                <h1 class="mx-3 text-white font-semibold text-base">
                  {item?.roll ? item?.roll : 'TM'}
                </h1>
              </div> */}
              <div className="p-1">
                <div className="mb-10 flex justify-center items-center gap-2">
                  <span className="rounded-full font-black p-2 text-[#FFA500]">
                    {item?.roll ? item?.roll : 'TM'}
                  </span>
                  <h1 className="text-lg font-semibold text-gray-870">
                    {item.name}
                  </h1>
                  <p>( {item.id.toUpperCase()} )</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <CreatePjtSkeleton />
        )}
      </div>
    </div>
  );
}
