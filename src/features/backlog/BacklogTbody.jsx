import { AiOutlineDownload } from 'react-icons/ai';
import BacklogStatus from './BacklogStatus';
import BacklogSprint from './BacklogSprint';

const backlogData = [
  {
    id: 1,
    title: '메인 페이지 UI 작업',
    sprint: 'UI 작업',
    status: '완료',
    color: 'green',
    imgSrc: 'testImg.jpg',
  },
  {
    id: 2,
    title: '회원가입 페이지 UI 작업',
    sprint: 'UI 작업',
    status: '완료',
    color: 'green',
    imgSrc: 'testImg.jpg',
  },
  {
    id: 3,
    title: '로그인 페이지 UI 작업',
    sprint: 'UI 작업',
    status: '진행 중',
    color: 'blue',
    imgSrc: 'testImg.jpg',
  },
  {
    id: 4,
    title: '개인 페이지 UI 작업',
    sprint: 'UI 작업',
    status: '진행 예정',
    color: 'red',
    imgSrc: 'testImg.jpg',
  },
  {
    id: 18,
    title: 'General Manager',
    sprint: 'Dr',
    status: 'cfradgleyh@google.de',
    color: 'Mauv',
    imgSrc: 'http://dummyimage.com/168x84.png/dddddd/000000',
  },
  {
    id: 19,
    title: 'Budget/Accounting Analyst I',
    sprint: 'Dr',
    status: 'ogrenvillei@spotify.com',
    color: 'Teal',
    imgSrc: 'http://dummyimage.com/174x74.png/ff4444/ffffff',
  },
  {
    id: 20,
    title: 'VP Accounting',
    sprint: 'Mrs',
    status: 'bbeckersj@xing.com',
    color: 'Orange',
    imgSrc: 'http://dummyimage.com/177x84.png/cc0000/ffffff',
  },
  {
    id: 21,
    title: 'Social Worker',
    sprint: 'Dr',
    status: 'aroartyk@google.ru',
    color: 'Green',
    imgSrc: 'http://dummyimage.com/211x26.png/ff4444/ffffff',
  },
  {
    id: 22,
    title: 'Business Systems Development Analyst',
    sprint: 'Mrs',
    status: 'agogganl@phpbb.com',
    color: 'Purple',
    imgSrc: 'http://dummyimage.com/71x42.png/ff4444/ffffff',
  },
  {
    id: 23,
    title: 'Speech Pathologist',
    sprint: 'Dr',
    status: 'ablenchm@bigcartel.com',
    color: 'Maroon',
    imgSrc: 'http://dummyimage.com/6x43.png/dddddd/000000',
  },
  {
    id: 24,
    title: 'Assistant Professor',
    sprint: 'Dr',
    status: 'jberringern@indiatimes.com',
    color: 'Fuscia',
    imgSrc: 'http://dummyimage.com/217x87.png/ff4444/ffffff',
  },
  {
    id: 25,
    title: 'Assistant Manager',
    sprint: 'Honorable',
    status: 'drodolpheo@aol.com',
    color: 'Green',
    imgSrc: 'http://dummyimage.com/66x77.png/cc0000/ffffff',
  },
  {
    id: 26,
    title: 'Structural Engineer',
    sprint: 'Mr',
    status: 'ehueyp@flavors.me',
    color: 'Mauv',
    imgSrc: 'http://dummyimage.com/27x7.png/dddddd/000000',
  },
  {
    id: 27,
    title: 'Help Desk Technician',
    sprint: 'Mrs',
    status: 'vstaubynq@last.fm',
    color: 'Teal',
    imgSrc: 'http://dummyimage.com/134x67.png/dddddd/000000',
  },
  {
    id: 28,
    title: 'Senior Financial Analyst',
    sprint: 'Dr',
    status: 'crisboroughr@ted.com',
    color: 'Green',
    imgSrc: 'http://dummyimage.com/62x57.png/dddddd/000000',
  },
  {
    id: 29,
    title: 'General Manager',
    sprint: 'Mr',
    status: 'jthoumass@nyu.edu',
    color: 'Teal',
    imgSrc: 'http://dummyimage.com/62x48.png/cc0000/ffffff',
  },
  {
    id: 30,
    title: 'Programmer Analyst I',
    sprint: 'Ms',
    status: 'cberntht@baidu.com',
    color: 'Maroon',
    imgSrc: 'http://dummyimage.com/168x79.png/cc0000/ffffff',
  },
  {
    id: 31,
    title: 'Quality Control Specialist',
    sprint: 'Rev',
    status: 'aepslyu@oaic.gov.au',
    color: 'Mauv',
    imgSrc: 'http://dummyimage.com/146x10.png/dddddd/000000',
  },
  {
    id: 32,
    title: 'Paralegal',
    sprint: 'Ms',
    status: 'haloshikinv@hao123.com',
    color: 'Turquoise',
    imgSrc: 'http://dummyimage.com/196x8.png/cc0000/ffffff',
  },
  {
    id: 33,
    title: 'Software Test Engineer III',
    sprint: 'Honorable',
    status: 'wbladderw@hao123.com',
    color: 'Pink',
    imgSrc: 'http://dummyimage.com/157x37.png/5fa2dd/ffffff',
  },
  {
    id: 34,
    title: 'Information Systems Manager',
    sprint: 'Mr',
    status: 'kpossekx@cdbaby.com',
    color: 'Red',
    imgSrc: 'http://dummyimage.com/224x8.png/ff4444/ffffff',
  },
  {
    id: 35,
    title: 'Media Manager I',
    sprint: 'Honorable',
    status: 'hsherrocksy@ucsd.edu',
    color: 'Orange',
    imgSrc: 'http://dummyimage.com/241x12.png/cc0000/ffffff',
  },
  {
    id: 36,
    title: 'Executive Secretary',
    sprint: 'Mrs',
    status: 'ealmeyz@creativecommons.org',
    color: 'Yellow',
    imgSrc: 'http://dummyimage.com/184x90.png/dddddd/000000',
  },
  {
    id: 37,
    title: 'Structural Analysis Engineer',
    sprint: 'Mrs',
    status: 'rspeller10@last.fm',
    color: 'Maroon',
    imgSrc: 'http://dummyimage.com/21x45.png/dddddd/000000',
  },
  {
    id: 38,
    title: 'VP Product Management',
    sprint: 'Mrs',
    status: 'rspottiswood11@nationalgeographic.com',
    color: 'Fuscia',
    imgSrc: 'http://dummyimage.com/27x83.png/cc0000/ffffff',
  },
  {
    id: 39,
    title: 'Sales Associate',
    sprint: 'Dr',
    status: 'mcustance12@chron.com',
    color: 'Fuscia',
    imgSrc: 'http://dummyimage.com/63x14.png/ff4444/ffffff',
  },
  {
    id: 40,
    title: 'Physical Therapy Assistant',
    sprint: 'Ms',
    status: 'hbeddo13@cmu.edu',
    color: 'Maroon',
    imgSrc: 'http://dummyimage.com/193x29.png/dddddd/000000',
  },
  {
    id: 41,
    title: 'Legal Assistant',
    sprint: 'Ms',
    status: 'gmesser14@upenn.edu',
    color: 'Yellow',
    imgSrc: 'http://dummyimage.com/94x71.png/5fa2dd/ffffff',
  },
  {
    id: 42,
    title: 'Paralegal',
    sprint: 'Mrs',
    status: 'roake15@pinterest.com',
    color: 'Purple',
    imgSrc: 'http://dummyimage.com/17x42.png/ff4444/ffffff',
  },
  {
    id: 43,
    title: 'Accounting Assistant II',
    sprint: 'Rev',
    status: 'tfeaviour16@last.fm',
    color: 'Khaki',
    imgSrc: 'http://dummyimage.com/204x85.png/ff4444/ffffff',
  },
  {
    id: 44,
    title: 'Database Administrator II',
    sprint: 'Dr',
    status: 'elewton17@usgs.gov',
    color: 'Turquoise',
    imgSrc: 'http://dummyimage.com/220x42.png/5fa2dd/ffffff',
  },
  {
    id: 45,
    title: 'Internal Auditor',
    sprint: 'Dr',
    status: 'ebarczynski18@japanpost.jp',
    color: 'Mauv',
    imgSrc: 'http://dummyimage.com/50x89.png/cc0000/ffffff',
  },
  {
    id: 46,
    title: 'Nuclear Power Engineer',
    sprint: 'Honorable',
    status: 'jdivers19@issuu.com',
    color: 'Green',
    imgSrc: 'http://dummyimage.com/213x55.png/ff4444/ffffff',
  },
  {
    id: 47,
    title: 'Nuclear Power Engineer',
    sprint: 'Rev',
    status: 'icownden1a@php.net',
    color: 'Violet',
    imgSrc: 'http://dummyimage.com/82x8.png/ff4444/ffffff',
  },
  {
    id: 48,
    title: 'Help Desk Technician',
    sprint: 'Honorable',
    status: 'bdewolfe1b@who.int',
    color: 'Goldenrod',
    imgSrc: 'http://dummyimage.com/113x13.png/dddddd/000000',
  },
  {
    id: 49,
    title: 'Occupational Therapist',
    sprint: 'Honorable',
    status: 'dchester1c@etsy.com',
    color: 'Khaki',
    imgSrc: 'http://dummyimage.com/164x92.png/5fa2dd/ffffff',
  },
  {
    id: 50,
    title: 'Developer IV',
    sprint: 'Mr',
    status: 'auc1d@state.tx.us',
    color: 'Purple',
    imgSrc: 'http://dummyimage.com/200x78.png/ff4444/ffffff',
  },
  {
    id: 51,
    title: 'VP Quality Control',
    sprint: 'Rev',
    status: 'wkleinstein1e@jiathis.com',
    color: 'Puce',
    imgSrc: 'http://dummyimage.com/199x40.png/cc0000/ffffff',
  },
  {
    id: 52,
    title: 'Research Assistant II',
    sprint: 'Mrs',
    status: 'ccopestake1f@ft.com',
    color: 'Violet',
    imgSrc: 'http://dummyimage.com/174x14.png/dddddd/000000',
  },
  {
    id: 53,
    title: 'Senior Financial Analyst',
    sprint: 'Ms',
    status: 'mtwinbourne1g@who.int',
    color: 'Red',
    imgSrc: 'http://dummyimage.com/248x20.png/ff4444/ffffff',
  },
  {
    id: 54,
    title: 'Account Executive',
    sprint: 'Honorable',
    status: 'rmacdunlevy1h@bbb.org',
    color: 'Orange',
    imgSrc: 'http://dummyimage.com/217x48.png/dddddd/000000',
  },
  {
    id: 55,
    title: 'Developer IV',
    sprint: 'Mrs',
    status: 'nmcdiarmid1i@vinaora.com',
    color: 'Goldenrod',
    imgSrc: 'http://dummyimage.com/64x46.png/dddddd/000000',
  },
  {
    id: 56,
    title: 'Marketing Manager',
    sprint: 'Honorable',
    status: 'asilberschatz1j@qq.com',
    color: 'Purple',
    imgSrc: 'http://dummyimage.com/129x29.png/cc0000/ffffff',
  },
  {
    id: 57,
    title: 'Analog Circuit Design manager',
    sprint: 'Ms',
    status: 'ltadlow1k@taobao.com',
    color: 'Fuscia',
    imgSrc: 'http://dummyimage.com/178x37.png/5fa2dd/ffffff',
  },
  {
    id: 58,
    title: 'Recruiter',
    sprint: 'Honorable',
    status: 'kmeaders1l@ed.gov',
    color: 'Blue',
    imgSrc: 'http://dummyimage.com/100x56.png/5fa2dd/ffffff',
  },
  {
    id: 59,
    title: 'VP Product Management',
    sprint: 'Mr',
    status: 'cdebiasi1m@google.com.br',
    color: 'Turquoise',
    imgSrc: 'http://dummyimage.com/16x89.png/ff4444/ffffff',
  },
  {
    id: 60,
    title: 'Database Administrator I',
    sprint: 'Mr',
    status: 'aheindle1n@bizjournals.com',
    color: 'Mauv',
    imgSrc: 'http://dummyimage.com/189x73.png/ff4444/ffffff',
  },
  {
    id: 61,
    title: 'Civil Engineer',
    sprint: 'Honorable',
    status: 'ejedrzejewski1o@creativecommons.org',
    color: 'Green',
    imgSrc: 'http://dummyimage.com/65x80.png/ff4444/ffffff',
  },
  {
    id: 62,
    title: 'Product Engineer',
    sprint: 'Dr',
    status: 'bklaggeman1p@behance.net',
    color: 'Aquamarine',
    imgSrc: 'http://dummyimage.com/81x25.png/ff4444/ffffff',
  },
  {
    id: 63,
    title: 'Software Test Engineer IV',
    sprint: 'Dr',
    status: 'vfance1q@google.nl',
    color: 'Puce',
    imgSrc: 'http://dummyimage.com/66x97.png/ff4444/ffffff',
  },
  {
    id: 64,
    title: 'Help Desk Operator',
    sprint: 'Mr',
    status: 'sbusswell1r@earthlink.net',
    color: 'Red',
    imgSrc: 'http://dummyimage.com/187x26.png/dddddd/000000',
  },
  {
    id: 65,
    title: 'Data Coordinator',
    sprint: 'Rev',
    status: 'fmayho1s@wufoo.com',
    color: 'Mauv',
    imgSrc: 'http://dummyimage.com/69x24.png/ff4444/ffffff',
  },
  {
    id: 66,
    title: 'Senior Quality Engineer',
    sprint: 'Dr',
    status: 'abarraclough1t@dmoz.org',
    color: 'Khaki',
    imgSrc: 'http://dummyimage.com/207x49.png/5fa2dd/ffffff',
  },
  {
    id: 67,
    title: 'Graphic Designer',
    sprint: 'Honorable',
    status: 'awyllis1u@yellowpages.com',
    color: 'Violet',
    imgSrc: 'http://dummyimage.com/114x92.png/cc0000/ffffff',
  },
  {
    id: 68,
    title: 'Systems Administrator III',
    sprint: 'Honorable',
    status: 'mmactimpany1v@cocolog-nifty.com',
    color: 'Khaki',
    imgSrc: 'http://dummyimage.com/205x28.png/5fa2dd/ffffff',
  },
  {
    id: 69,
    title: 'Staff Scientist',
    sprint: 'Rev',
    status: 'ddigger1w@upenn.edu',
    color: 'Violet',
    imgSrc: 'http://dummyimage.com/219x41.png/ff4444/ffffff',
  },
  {
    id: 70,
    title: 'Tax Accountant',
    sprint: 'Mr',
    status: 'jmillington1x@lycos.com',
    color: 'Blue',
    imgSrc: 'http://dummyimage.com/110x59.png/dddddd/000000',
  },
  {
    id: 71,
    title: 'Internal Auditor',
    sprint: 'Mrs',
    status: 'greck1y@seesaa.net',
    color: 'Maroon',
    imgSrc: 'http://dummyimage.com/240x78.png/5fa2dd/ffffff',
  },
  {
    id: 72,
    title: 'Media Manager IV',
    sprint: 'Ms',
    status: 'vvandervelden1z@artisteer.com',
    color: 'Blue',
    imgSrc: 'http://dummyimage.com/143x33.png/5fa2dd/ffffff',
  },
  {
    id: 73,
    title: 'Electrical Engineer',
    sprint: 'Mr',
    status: 'estebbins20@epa.gov',
    color: 'Red',
    imgSrc: 'http://dummyimage.com/124x49.png/cc0000/ffffff',
  },
  {
    id: 74,
    title: 'Pharmacist',
    sprint: 'Rev',
    status: 'lpieterick21@kickstarter.com',
    color: 'Red',
    imgSrc: 'http://dummyimage.com/234x85.png/ff4444/ffffff',
  },
  {
    id: 75,
    title: 'VP Product Management',
    sprint: 'Honorable',
    status: 'wmulvin22@state.tx.us',
    color: 'Orange',
    imgSrc: 'http://dummyimage.com/44x32.png/ff4444/ffffff',
  },
  {
    id: 76,
    title: 'Graphic Designer',
    sprint: 'Rev',
    status: 'gradbourn23@thetimes.co.uk',
    color: 'Green',
    imgSrc: 'http://dummyimage.com/158x66.png/ff4444/ffffff',
  },
  {
    id: 77,
    title: 'General Manager',
    sprint: 'Mr',
    status: 'mcollinette24@sfgate.com',
    color: 'Turquoise',
    imgSrc: 'http://dummyimage.com/195x9.png/5fa2dd/ffffff',
  },
  {
    id: 78,
    title: 'Occupational Therapist',
    sprint: 'Mr',
    status: 'drozzell25@yandex.ru',
    color: 'Crimson',
    imgSrc: 'http://dummyimage.com/59x63.png/cc0000/ffffff',
  },
  {
    id: 79,
    title: 'Web Designer II',
    sprint: 'Dr',
    status: 'asmewings26@uol.com.br',
    color: 'Teal',
    imgSrc: 'http://dummyimage.com/51x94.png/cc0000/ffffff',
  },
  {
    id: 80,
    title: 'VP Sales',
    sprint: 'Mrs',
    status: 'ckabisch27@opensource.org',
    color: 'Turquoise',
    imgSrc: 'http://dummyimage.com/17x90.png/5fa2dd/ffffff',
  },
  {
    id: 81,
    title: 'Design Engineer',
    sprint: 'Dr',
    status: 'kstenett28@alexa.com',
    color: 'Orange',
    imgSrc: 'http://dummyimage.com/232x8.png/5fa2dd/ffffff',
  },
  {
    id: 82,
    title: 'Research Assistant I',
    sprint: 'Ms',
    status: 'lbuttrey29@rambler.ru',
    color: 'Blue',
    imgSrc: 'http://dummyimage.com/16x72.png/dddddd/000000',
  },
  {
    id: 83,
    title: 'VP Marketing',
    sprint: 'Mrs',
    status: 'wstairs2a@dmoz.org',
    color: 'Green',
    imgSrc: 'http://dummyimage.com/162x88.png/dddddd/000000',
  },
  {
    id: 84,
    title: 'Dental Hygienist',
    sprint: 'Honorable',
    status: 'erude2b@networkadvertising.org',
    color: 'Indigo',
    imgSrc: 'http://dummyimage.com/87x100.png/ff4444/ffffff',
  },
  {
    id: 85,
    title: 'Human Resources Assistant II',
    sprint: 'Honorable',
    status: 'glochrie2c@cbsnews.com',
    color: 'Mauv',
    imgSrc: 'http://dummyimage.com/94x21.png/ff4444/ffffff',
  },
  {
    id: 86,
    title: 'Information Systems Manager',
    sprint: 'Mrs',
    status: 'cromaint2d@opensource.org',
    color: 'Maroon',
    imgSrc: 'http://dummyimage.com/28x14.png/5fa2dd/ffffff',
  },
  {
    id: 87,
    title: 'Account Coordinator',
    sprint: 'Honorable',
    status: 'wdeakins2e@mapy.cz',
    color: 'Mauv',
    imgSrc: 'http://dummyimage.com/78x34.png/5fa2dd/ffffff',
  },
  {
    id: 88,
    title: 'Health Coach II',
    sprint: 'Rev',
    status: 'dalcoran2f@amazon.co.jp',
    color: 'Turquoise',
    imgSrc: 'http://dummyimage.com/239x9.png/dddddd/000000',
  },
  {
    id: 89,
    title: 'Food Chemist',
    sprint: 'Mrs',
    status: 'mwalmsley2g@globo.com',
    color: 'Maroon',
    imgSrc: 'http://dummyimage.com/132x6.png/ff4444/ffffff',
  },
  {
    id: 90,
    title: 'Mechanical Systems Engineer',
    sprint: 'Mrs',
    status: 'ltrillow2h@edublogs.org',
    color: 'Mauv',
    imgSrc: 'http://dummyimage.com/135x23.png/5fa2dd/ffffff',
  },
  {
    id: 91,
    title: 'VP Accounting',
    sprint: 'Dr',
    status: 'crusson2i@webeden.co.uk',
    color: 'Orange',
    imgSrc: 'http://dummyimage.com/177x49.png/ff4444/ffffff',
  },
  {
    id: 92,
    title: 'Payment Adjustment Coordinator',
    sprint: 'Mr',
    status: 'nwestoll2j@omniture.com',
    color: 'Indigo',
    imgSrc: 'http://dummyimage.com/166x69.png/ff4444/ffffff',
  },
  {
    id: 93,
    title: 'Human Resources Assistant IV',
    sprint: 'Honorable',
    status: 'lgundry2k@howstuffworks.com',
    color: 'Violet',
    imgSrc: 'http://dummyimage.com/41x75.png/5fa2dd/ffffff',
  },
  {
    id: 94,
    title: 'Help Desk Technician',
    sprint: 'Mr',
    status: '진행',
    color: 'Violet',
    imgSrc: 'http://dummyimage.com/245x63.png/5fa2dd/ffffff',
  },
  {
    id: 95,
    title: 'Analyst Programmer',
    sprint: 'Ms',
    status: 'wramshay2m@nydailynews.com',
    color: 'blue',
    imgSrc: 'http://dummyimage.com/245x71.png/ff4444/ffffff',
  },
  {
    id: 96,
    title: 'Payment Adjustment Coordinator',
    sprint: 'Honorable',
    status: 'hkrolak2n@yellowbook.com',
    color: 'Teal',
    imgSrc: 'http://dummyimage.com/12x90.png/dddddd/000000',
  },
  {
    id: 97,
    title: 'VP Product Management',
    sprint: 'Dr',
    status: 'helliker2o@utexas.edu',
    color: 'Crimson',
    imgSrc: 'http://dummyimage.com/179x93.png/5fa2dd/ffffff',
  },
  {
    id: 98,
    title: 'Occupational Therapist',
    sprint: 'Dr',
    status: 'kportam2p@indiegogo.com',
    color: 'Purple',
    imgSrc: 'http://dummyimage.com/90x31.png/dddddd/000000',
  },
  {
    id: 99,
    title: 'Engineer II',
    sprint: 'Mrs',
    status: 'mwitton2q@huffingtonpost.com',
    color: 'Crimson',
    imgSrc: 'http://dummyimage.com/100x44.png/dddddd/000000',
  },
  {
    id: 100,
    title: 'Assistant Media Planner',
    sprint: 'Rev',
    status: 'cblunn2r@fda.gov',
    color: 'Yellow',
    imgSrc: 'http://dummyimage.com/26x12.png/5fa2dd/ffffff',
  },
];

export default function BacklogTbody() {
  return (
    <>
      {backlogData.map((item) => (
        <tr key={item.id} className="bg-white border-b">
          <th
            scope="row"
            className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
          >
            <a href="#" className="font-medium hover:text-blue-600">
              {item.title}
            </a>
          </th>
          <td className="px-6 py-2">
            <BacklogSprint value={item.sprint} />
          </td>
          <td className="px-6 py-2">
            <BacklogStatus value={item.status} color={item.color} />
          </td>
          <td className="px-6 py-2">
            <img
              src={item.imgSrc}
              className="w-6 h-6 rounded-full"
              alt="백로그_담당자_이미지"
            />
          </td>
          <td className="px-4 py-2 text-right">
            <a href="#" className="font-medium text-xl text-blue-600">
              <AiOutlineDownload />
            </a>
          </td>
        </tr>
      ))}
    </>
  );
}
