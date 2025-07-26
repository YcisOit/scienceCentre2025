'use client';
import { useState } from 'react';

const YearData = [
  {
    title: '2020-2021 ',
    isOpen: true,
    content: [
    { no: 1, Event: 'Teachers Workshop', link: '/event/workshop2020-21.jpg' },
        { no: 2,Event: 'Liquid Nitrogen Show', link: '/event/nitro2020-21.jpg' }
      ],
  },
  {
    title: '2021-2022',
    isOpen: true,
    content: [
       { no: 1, Event: 'Competition', link: '/event/compitition2021-22.jpg' },
        { no: 2, Event: 'Sky Gazing ', link: '/event/sky2021-22.jfif' },
         { no: 3, Event: 'Liquid Nitrogen Show', link: '/event/nitro2020-21.jpg' },
          { no: 4, Event: 'Workshop ', link: '/event/workshop2021-22.jfif' }

    ],
    
  },
  {
    title: '2022-2023',
  isOpen: true,
    content: [
      { no: 1, Event: 'Competition', link: '/event/compitition2022-23.jfif' },
       { no: 2, Event: 'Sky Gazing', link: '/event/sky2022-23.jpg' },
        { no: 3, Event: 'Liquid Nitrogen Show', link: '/event/nitro2022-23.jpg' },
         { no: 4, Event: 'Workshop', link: '/event/workshop2022-23.jfif' }
        
    ]
  },
  {
    title: '2023-2024 ',
    isOpen: true,
    content: [
  { no: 1, Event: 'Zero Shadow Day', link: '/event/zeroday2023-24.jpg' },
    { no: 2, Event: 'Competition', link: '/event/compitition2023-24.jpg' },
       { no: 3, Event: 'Sky Gazing', link: '/event/sky2023-24.jpg' },
        { no: 4, Event: 'Liquid Nitrogen Show', link: '/event/nitro2023-24.jpg' },
         { no: 5, Event: 'Workshop', link: '/event/workshop2023-24.jpg' }
   
    ],
  },
  {
    title: '2024-2025',
    isOpen: true,
    content: [
 { no: 1, Event: 'National Tiger Day ', link: '/event/workshop2020-21.jpg' },
  { no: 1, Event: 'Competition', link: '/event/compitition2024-25.jpg' },
   { no: 1, Event: 'Zero Shadow Day', link: '/event/zero2024-25.jpg' },
    { no: 1, Event: 'Sky Gazing ', link: '/event/sky2024-25.jpg' },
     { no: 1, Event: 'Liquid Nitrogen Show', link: '/event/nitro2024-25.jpg' },
      { no: 1, Event: 'ISRO Workshop', link: '/event/isro2024-25.jpg' },
       { no: 1, Event: 'Teachers Workshop', link: '/event/teacherworkshop2024-25.jpg' },
   
    ],
  },
  
  
 
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(-1); // First open by default

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 space-y-2">
      {YearData.map((item, index) => (
        <div key={index}>
          <button
            className={`w-full text-left px-4 py-3 font-semibold ${
              openIndex === index ? 'bg-[#4e4e5188]' : 'bg-[#003A62]'
            } text-white`}
            onClick={() => toggle(index)}
          >
            {openIndex === index ? '−' : '+'} {item.title}
          </button>

          {openIndex === index && item.content && (
            <div className="border border-t-0 border-gray-300">
              <table className="w-full table-auto text-sm">
                <thead className="bg-[#3d1a55] text-white">
                  <tr>
                    <th className="border px-3 py-2">Sr.no</th>
                    <th className="border px-3 py-2">Event</th>
                    <th className="border px-3 py-2">Photos</th>
                  </tr>
                </thead>
                <tbody>
                  {item.content.map((row, i) => (
                    <tr key={i} className="text-center">
                      <td className="border px-3 py-2">{row.no}</td>
                      <td className="border px-3 py-2">{row.Event}</td>
                      <td className="border px-3 py-2 text-blue-600 underline cursor-pointer">
                        <a href={row.link} target="_blank" rel="noopener noreferrer">View</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
