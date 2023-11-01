import BacklogThead from './BacklogThead';
import BacklogTbody from './BacklogTbody';

export default function BacklogBorad() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <BacklogThead />
        </thead>
        <tbody className="overflow-scroll">
          <BacklogTbody />
        </tbody>
      </table>
    </div>
  );
}
