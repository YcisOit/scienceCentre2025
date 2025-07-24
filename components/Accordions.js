'use client';
import { useState } from 'react';

const YearData = [
  {
    title: 'RSIAC Repot Final 2024',
    isOpen: true,
    content: [
    { no: 1, Year: '2023-24', link: '/pdf/RSIAC Repot Final 2024 (3) (1).pdf' }
      ],
  },
  {
    title: 'RSIAC Report 2024-2025',
    isOpen: true,
    content: [
      { no: 1, Year: '2024-25', link: '/pdf/RSIAC Report 2024-2025.pdf' }

    ],
    
  },
  {
    title: 'Comprehensive_SIAC_Outcome',
  isOpen: true,
    content: [
      { no: 1, Year: '2025', link: '/pdf/Comprehensive_SIAC_Outcome (1).pdf' }
    ]
  },
  {
    title: 'RSIAC PPT 2025',
    isOpen: true,
    content: [
  { no: 1, Year: '2025', link: '/pdf/RSIAC PPT 2025 revised 21042025 Revised.pptx' },
   
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
                    <th className="border px-3 py-2">Year</th>
                    <th className="border px-3 py-2">Download</th>
                  </tr>
                </thead>
                <tbody>
                  {item.content.map((row, i) => (
                    <tr key={i} className="text-center">
                      <td className="border px-3 py-2">{row.no}</td>
                      <td className="border px-3 py-2">{row.Year}</td>
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
