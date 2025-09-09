'use client';
import { useState } from 'react';

const YearData = [
  {
    title: '2022 ',
    isOpen: true,
    content: [
    { no: 1,Date:'28/12/2022', News: 'Science Centre Reopening  ',Media:'Punya Nagari', link: '/news/2022_1.jpeg' }
        
      ],
  },
  {
    title: '2024',
    isOpen: true,
    content: [
      { no: 1,Date:'05/03/2024', News: 'National Science Day Celebration with schools student conducting competitions at Science Centre  ',Media:'Aikya', link: '/news/2024_1.jpg' },
    { no: 2,Date:'08/05/2024', News: 'Science Centre organised Sky Gazing Camp for pink moon for students ',Media:'Tanun Bharat', link: '/news/2024_2.jpg' },
     { no: 3,Date:'03/09/2024', News: 'Students ISRO workshop  news ',Media:'Prabhat', link: '/news/2024_3.jpg' },
     { no: 4,Date:'16/10/2024', News: 'Science Centre Science Teachers Workshop ',Media:'Punya Nagari', link: '/news/2024_4.jpg' }
    ],
    
  },
  {
    title: '2025',
  isOpen: true,
    content: [
      { no: 1,Date:'21/04/2025', News: 'Student Visit at science centre ',Media:'Punya Nagari', link: '/news/2025_1.jpg' },
       
        
    ]
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
                    <th className="border px-3 py-2">Date</th>
                    <th className="border px-3 py-2">News</th>
                    <th className="border px-3 py-2">Media</th>
                    <th className="border px-3 py-2">Photos</th>
                  </tr>
                </thead>
                <tbody>
                  {item.content.map((row, i) => (
                    <tr key={i} className="text-center">
                      <td className="border px-3 py-2">{row.no}</td>
                      <td className="border px-3 py-2">{row.Date}</td>
                      <td className="border px-3 py-2">{row.News}</td>
                      <td className="border px-3 py-2">{row.Media}</td>
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
