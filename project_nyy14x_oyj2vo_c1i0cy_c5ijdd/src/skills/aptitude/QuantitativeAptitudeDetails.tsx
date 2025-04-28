// import { Link } from 'react-router-dom';
// import { ArrowLeft } from 'lucide-react';

// const QuantitativeAptitudeDetails = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-8">
//           <Link to="/skills/non-technical" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
//             <ArrowLeft className="h-4 w-4 mr-1" />
//             Back to Non-Technical Skills
//           </Link>
//         </div>
//         <h1 className="text-3xl font-bold text-gray-900 mb-8">Quantitative Aptitude</h1>
        
//         <div className="flex space-x-12">
//           <div className="flex-1">
//             <div className="bg-white rounded-lg shadow-lg p-6">
//               <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
//               <p className="text-gray-700 mb-6">
//                 Quantitative aptitude involves numerical and mathematical skills. It's a crucial component of many competitive exams and job placements.
//                 It tests your ability to solve problems using mathematical concepts and logical reasoning.
//               </p>

//               <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Learn Quantitative Aptitude</h2>
//               <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
//                 <li>
//                   <strong>Start with the Basics:</strong> Understand fundamental concepts like number systems, percentages, ratios, and proportions.
//                 </li>
//                 <li>
//                   <strong>Practice Regularly:</strong> Solve a variety of problems to improve your speed and accuracy.
//                 </li>
//                 <li>
//                   <strong>Learn Shortcuts and Tricks:</strong> Familiarize yourself with techniques to solve problems quickly.
//                 </li>
//                 <li>
//                   <strong>Focus on Time Management:</strong> Practice solving problems under timed conditions to simulate exam scenarios.
//                 </li>
//                 <li>
//                   <strong>Analyze Your Mistakes:</strong> Identify your weak areas and focus on improving them.
//                 </li>
//               </ul>

//               <h2 className="text-2xl font-semibold text-gray-900 mb-4">Handwritten Notes</h2>
//               <p className="text-gray-700 mb-6">
//                 <a href="https://example.com/handwritten-notes" className="text-indigo-600 hover:text-indigo-500">Click here to access Handwritten Notes</a>
//               </p>

//               <h2 className="text-2xl font-semibold text-gray-900 mb-4">Print Notes</h2>
//               <p className="text-gray-700 mb-6">
//                 <a href="https://example.com/print-notes" className="text-indigo-600 hover:text-indigo-500">Click here to access Print Notes</a>
//               </p>

//               <h2 className="text-2xl font-semibold text-gray-900 mb-4">YouTube Playlists</h2>
//               <div className="space-y-4">
//                 <div className="bg-gray-100 p-4 rounded-md">
//                   <h3 className="text-lg font-medium text-gray-900 mb-2">Basic Quantitative Aptitude</h3>
//                   <a href="https://youtube.com/playlist?list=example" className="text-indigo-600 hover:text-indigo-500">
//                     Click here to watch the Basic Quantitative Aptitude playlist
//                   </a>
//                 </div>
//                 <div className="bg-gray-100 p-4 rounded-md">
//                   <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Quantitative Aptitude</h3>
//                   <a href="https://youtube.com/playlist?list=example" className="text-indigo-600 hover:text-indigo-500">
//                     Click here to watch the Advanced Quantitative Aptitude playlist
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Sidebar for Topics */}
//           <div className="w-1/3">
//             <div className="bg-white rounded-lg shadow-lg p-6">
//               <h2 className="text-2xl font-semibold text-gray-900 mb-4">Topics to Learn</h2>
//               <ul className="list-disc list-inside space-y-4">
//                 <li>
//                   <strong>Number Systems</strong>
//                   <ul className="list-disc list-inside ml-4">
//                     <li>Types of Numbers</li>
//                     <li>Prime Numbers</li>
//                     <li>LCM and HCF</li>
//                   </ul>
//                 </li>
//                 <li>
//                   <strong>Percentages</strong>
//                   <ul className="list-disc list-inside ml-4">
//                     <li>Basic Percentages</li>
//                     <li>Successive Percentages</li>
//                     <li>Percentage Change</li>
//                   </ul>
//                 </li>
//                 <li>
//                   <strong>Ratios and Proportions</strong>
//                   <ul className="list-disc list-inside ml-4">
//                     <li>Direct and Inverse Proportions</li>
//                     <li>Partnership Problems</li>
//                   </ul>
//                 </li>
//                 <li>
//                   <strong>Time and Work</strong>
//                   <ul className="list-disc list-inside ml-4">
//                     <li>Work Efficiency</li>
//                     <li>Time, Speed, and Distance</li>
//                     <li>Man-Hours Problems</li>
//                   </ul>
//                 </li>
//                 <li>
//                   <strong>Profit and Loss</strong>
//                   <ul className="list-disc list-inside ml-4">
//                     <li>Cost Price, Selling Price, Profit</li>
//                     <li>Discount and Marked Price</li>
//                   </ul>
//                 </li>
//                 <li>
//                   <strong>Data Interpretation</strong>
//                   <ul className="list-disc list-inside ml-4">
//                     <li>Tables</li>
//                     <li>Bar Graphs</li>
//                     <li>Pie Charts</li>
//                   </ul>
//                 </li>
//                 <li>
//                   <strong>Probability and Permutations</strong>
//                   <ul className="list-disc list-inside ml-4">
//                     <li>Basic Probability</li>
//                     <li>Permutations and Combinations</li>
//                   </ul>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <h2 className="text-2xl font-semibold text-gray-900 mb-4">Practice Problems</h2>
//         <div className="space-y-4">
//           <div className="bg-gray-100 p-4 rounded-md">
//             <h3 className="text-lg font-medium text-gray-900 mb-2">Easy</h3>
//             <ul className="list-disc list-inside text-gray-700">
//               <li>
//                 <a href="https://leetcode.com/problems/percentage-problems/" className="text-indigo-600 hover:text-indigo-500">Solve problems on percentages</a>
//               </li>
//               <li>
//                 <a href="https://www.geeksforgeeks.org/ratio-and-proportion/" className="text-indigo-600 hover:text-indigo-500">Solve problems on ratios and proportions</a>
//               </li>
//               <li>
//                 <a href="https://www.codechef.com/problems/SIMPLEINT" className="text-indigo-600 hover:text-indigo-500">Solve problems on simple interest</a>
//               </li>
//             </ul>
//           </div>
//           <div className="bg-gray-100 p-4 rounded-md">
//             <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
//             <ul className="list-disc list-inside text-gray-700">
//               <li>
//                 <a href="https://www.hackerrank.com/domains/tutorials/10-days-of-statistics" className="text-indigo-600 hover:text-indigo-500">Solve problems on profit and loss</a>
//               </li>
//               <li>
//                 <a href="https://www.codechef.com/problems/WORKTIME" className="text-indigo-600 hover:text-indigo-500">Solve problems on time and work</a>
//               </li>
//               <li>
//                 <a href="https://www.geeksforgeeks.org/compound-interest-problems/" className="text-indigo-600 hover:text-indigo-500">Solve problems on compound interest</a>
//               </li>
//             </ul>
//           </div>
//           <div className="bg-gray-100 p-4 rounded-md">
//             <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
//             <ul className="list-disc list-inside text-gray-700">
//               <li>
//                 <a href="https://www.geeksforgeeks.org/probability-problems/" className="text-indigo-600 hover:text-indigo-500">Solve problems on probability</a>
//               </li>
//               <li>
//                 <a href="https://www.hackerrank.com/domains/tutorials/10-days-of-statistics" className="text-indigo-600 hover:text-indigo-500">Solve problems on permutations and combinations</a>
//               </li>
//               <li>
//                 <a href="https://www.codechef.com/problems/DATAINTERP" className="text-indigo-600 hover:text-indigo-500">Solve problems on data interpretation</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuantitativeAptitudeDetails;


import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const QuantitativeAptitudeDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link
            to="/skills/non-technical"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Non-Technical Skills
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Quantitative Aptitude
        </h1>

        <div className="flex space-x-12">
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Introduction
              </h2>
              <p className="text-gray-700 mb-6">
                Quantitative aptitude involves numerical and mathematical
                skills. It's a crucial component of many competitive exams and
                job placements. It tests your ability to solve problems using
                mathematical concepts and logical reasoning.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How to Learn Quantitative Aptitude
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>
                  <strong>Start with the Basics:</strong> Understand fundamental
                  concepts like number systems, percentages, ratios, and
                  proportions.
                </li>
                <li>
                  <strong>Practice Regularly:</strong> Solve a variety of
                  problems to improve your speed and accuracy.
                </li>
                <li>
                  <strong>Learn Shortcuts and Tricks:</strong> Familiarize
                  yourself with techniques to solve problems quickly.
                </li>
                <li>
                  <strong>Focus on Time Management:</strong> Practice solving
                  problems under timed conditions to simulate exam scenarios.
                </li>
                <li>
                  <strong>Analyze Your Mistakes:</strong> Identify your weak
                  areas and focus on improving them.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Handwritten Notes
              </h2>
              <p className="text-gray-700 mb-6">
                <a
                  href="https://example.com/handwritten-notes"
                  className="text-indigo-600 hover:text-indigo-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here to access Handwritten Notes
                </a>
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Print Notes
              </h2>
              <p className="text-gray-700 mb-6">
                <a
                  href="https://example.com/print-notes"
                  className="text-indigo-600 hover:text-indigo-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here to access Print Notes
                </a>
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                YouTube Playlists
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-md">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Basic Quantitative Aptitude
                  </h3>
                  <a
                    href="https://youtube.com/playlist?list=example"
                    className="text-indigo-600 hover:text-indigo-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to watch the Basic Quantitative Aptitude playlist
                  </a>
                </div>
                <div className="bg-gray-100 p-4 rounded-md">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Advanced Quantitative Aptitude
                  </h3>
                  <a
                    href="https://youtube.com/playlist?list=example"
                    className="text-indigo-600 hover:text-indigo-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to watch the Advanced Quantitative Aptitude
                    playlist
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar for Topics */}
          <div className="w-1/3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Topics to Learn
              </h2>
              <ul className="list-disc list-inside space-y-4">
                <li>
                  <strong>Number Systems</strong>
                  <ul className="list-disc list-inside ml-4">
                    <li><a href="https://www.geeksforgeeks.org/number-systems/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Types of Numbers</a></li>
                    <li><a href="https://www.geeksforgeeks.org/prime-numbers/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Prime Numbers</a></li>
                    <li><a href="https://www.geeksforgeeks.org/lcm-and-hcf/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">LCM and HCF</a></li>
                  </ul>
                </li>
                <li>
                  <strong>Percentages</strong>
                  <ul className="list-disc list-inside ml-4">
                    <li><a href="https://www.geeksforgeeks.org/percentage-formula/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Basic Percentages</a></li>
                    <li><a href="https://www.geeksforgeeks.org/successive-percentage-change/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Successive Percentages</a></li>
                    <li><a href="https://www.geeksforgeeks.org/percentage-change/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Percentage Change</a></li>
                  </ul>
                </li>
                <li>
                  <strong>Ratios and Proportions</strong>
                  <ul className="list-disc list-inside ml-4">
                    <li><a href="https://www.geeksforgeeks.org/ratio-and-proportion/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Direct and Inverse Proportions</a></li>
                    <li><a href="https://www.geeksforgeeks.org/partnership-problems/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Partnership Problems</a></li>
                  </ul>
                </li>
                <li>
                  <strong>Time and Work</strong>
                  <ul className="list-disc list-inside ml-4">
                    <li><a href="https://www.geeksforgeeks.org/work-and-time-problems/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Work Efficiency</a></li>
                    <li><a href="https://www.geeksforgeeks.org/time-speed-and-distance/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Time, Speed, and Distance</a></li>
                    <li><a href="https://www.geeksforgeeks.org/man-hours-problems/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Man-Hours Problems</a></li>
                  </ul>
                </li>
                <li>
                  <strong>Profit and Loss</strong>
                  <ul className="list-disc list-inside ml-4">
                    <li><a href="https://www.geeksforgeeks.org/cost-price-selling-price-profit/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Cost Price, Selling Price, Profit</a></li>
                    <li><a href="https://www.geeksforgeeks.org/discount-and-marked-price/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Discount and Marked Price</a></li>
                  </ul>
                </li>
                <li>
                  <strong>Data Interpretation</strong>
                  <ul className="list-disc list-inside ml-4">
                    <li><a href="https://www.geeksforgeeks.org/data-interpretation-tables/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Tables</a></li>
                    <li><a href="https://www.geeksforgeeks.org/data-interpretation-bar-graphs/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Bar Graphs</a></li>
                    <li><a href="https://www.geeksforgeeks.org/data-interpretation-pie-charts/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Pie Charts</a></li>
                  </ul>
                </li>
                <li>
                  <strong>Probability and Permutations</strong>
                  <ul className="list-disc list-inside ml-4">
                    <li><a href="https://www.geeksforgeeks.org/probability/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Basic Probability</a></li>
                    <li><a href="https://www.geeksforgeeks.org/permutations-and-combinations/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Permutations and Combinations</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Practice Problems
        </h2>
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Easy</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <a
                  href="https://leetcode.com/problems/percentage-problems/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Solve problems on percentages
                </a>
              </li>
              <li>
                <a
                  href="https://www.geeksforgeeks.org/ratio-and-proportion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Solve problems on ratios and proportions
                </a>
              </li>
              <li>
                <a
                  href="https://www.codechef.com/problems/SIMPLEINT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Solve problems on simple interest
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <a
                  href="https://www.hackerrank.com/domains/tutorials/10-days-of-statistics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Solve problems on profit and loss
                </a>
              </li>
              <li>
                <a
                  href="https://www.codechef.com/problems/WORKTIME"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Solve problems on time and work
                </a>
              </li>
              <li>
                <a
                  href="https://www.geeksforgeeks.org/compound-interest-problems/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Solve problems on compound interest
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <a
                  href="https://www.geeksforgeeks.org/probability-problems/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Solve problems on probability
                </a>
              </li>
              <li>
                <a
                  href="https://www.hackerrank.com/domains/tutorials/10-days-of-statistics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Solve problems on permutations and combinations
                </a>
              </li>
              <li>
                <a
                  href="https://www.codechef.com/problems/DATAINTERP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Solve problems on data interpretation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantitativeAptitudeDetails;