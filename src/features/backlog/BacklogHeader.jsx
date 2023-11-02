import { useBackLogPage } from '../../store/store';
import ButtonPakage from '../../ui/ButtonPakage';
import CreateButton from '../../ui/CreateButton';
import TestModal from './TestModal';

export default function BacklogHeader() {
  const { setBackLogModalOpen } = useBackLogPage((state) => state);
  return (
    <div className="flex items-center justify-between mx-1">
      <div className="mx-3 text-3xl text-slate-700">백로그</div>
      <CreateButton value={'이슈 만들기'} event={setBackLogModalOpen} />
    </div>
  );
}
