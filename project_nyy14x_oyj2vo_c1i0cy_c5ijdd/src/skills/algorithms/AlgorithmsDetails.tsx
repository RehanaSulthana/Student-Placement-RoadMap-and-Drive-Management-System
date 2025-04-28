// const AlgorithmsDetails = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [selectedSubtopic, setSelectedSubtopic] = useState(null);

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex">
//       <div className="max-w-7xl mx-auto flex-grow">
//         <div className="mb-8">
//           <Link to="/skills/technical" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
//             <ArrowLeft className="h-4 w-4 mr-1" />
//             Back to Technical Skills
//           </Link>
//         </div>
//         <h1 className="text-3xl font-bold text-gray-900 mb-8">Algorithms</h1>
        
//         {selectedSubtopic ? (
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">{selectedSubtopic}</h2>
//             <p className="text-gray-700">(Placeholder for algorithm details)</p>
//           </div>
//         ) : (
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
//             <p className="text-gray-700 mb-6">
//               Algorithms are step-by-step procedures for solving problems. They are essential for efficient computation and are used in all areas of computer science.
//             </p>
            
//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Learn Algorithms</h2>
//             <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
//               <li><strong>Start with the Basics:</strong> Learn sorting, searching, and graph traversal.</li>
//               <li><strong>Learn Design Techniques:</strong> Understand divide and conquer, dynamic programming, and greedy algorithms.</li>
//               <li><strong>Practice Regularly:</strong> Solve problems on LeetCode, HackerRank, and Codeforces.</li>
//             </ul>
            
//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">Practice Problems</h2>
//             <div className="space-y-4">
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Easy</h3>
//                 <ul className="list-disc list-inside text-gray-700">
//                   <li>Implement linear search</li>
//                   <li>Implement bubble sort</li>
//                   <li>Implement insertion sort</li>
//                 </ul>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
//                 <ul className="list-disc list-inside text-gray-700">
//                   <li>Implement binary search</li>
//                   <li>Implement merge sort</li>
//                   <li>Implement quicksort</li>
//                 </ul>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
//                 <ul className="list-disc list-inside text-gray-700">
//                   <li>Implement Dijkstra's algorithm</li>
//                   <li>Implement dynamic programming for knapsack problem</li>
//                   <li>Implement a graph coloring algorithm</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
      
//       <div className="w-1/4 ml-8 p-6 bg-gray-100 rounded-lg shadow-md h-fit">
//         <h2 className="text-xl font-semibold text-gray-900 mb-4">Java Algorithm Topics</h2>
//         <ul className="list-disc list-inside space-y-2 text-gray-700">
//           {Object.keys(subtopicData).map((category) => (
//             <li key={category}>
//               <button onClick={() => setSelectedCategory(category)} className="text-blue-600 hover:underline">
//                 {category}
//               </button>
//               {selectedCategory === category && (
//                 <ul className="list-disc list-inside ml-4 text-gray-600">
//                   {Object.keys(subtopicData[category]).map((subtopic) => (
//                     <li key={subtopic}>
//                       <button onClick={() => setSelectedSubtopic(subtopic)} className="text-blue-600 hover:underline">
//                         {subtopic}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default AlgorithmsDetails;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const subtopicData = {
  "Sorting Algorithms": {
    "Bubble Sort": {
      problems: [
        "https://leetcode.com/problems/sort-an-array/",
        "https://leetcode.com/problems/bubble-sort/",
        "https://leetcode.com/problems/sorting/",
        "https://leetcode.com/problems/sort-colors/",
      ],
      tutorials: [
        "https://www.youtube.com/watch?v=xli_FI7CuzA",
      ],
    },
    "Selection Sort": {
      problems: [
        "https://leetcode.com/problems/sort-an-array/",
        "https://leetcode.com/problems/selection-sort/",
        "https://leetcode.com/problems/sorting/",
        "https://leetcode.com/problems/sort-colors/",
      ],
      tutorials: [
        "https://www.youtube.com/watch?v=GUDLRan2DWM",
      ],
    },
    "Insertion Sort": {
      problems: [
        "https://leetcode.com/problems/sort-an-array/",
        "https://leetcode.com/problems/insertion-sort/",
        "https://leetcode.com/problems/sorting/",
        "https://leetcode.com/problems/sort-colors/",
      ],
      tutorials: [
        "https://www.youtube.com/watch?v=OGzPmgsI-pQ",
      ],
    },
    "Merge Sort": {
      problems: [
        "https://leetcode.com/problems/sort-an-array/",
        "https://leetcode.com/problems/merge-sort/",
        "https://leetcode.com/problems/sorting/",
        "https://leetcode.com/problems/sort-colors/",
      ],
      tutorials: [
        "https://www.youtube.com/watch?v=JSceec-wEyw",
      ],
    },
    "Quick Sort": {
      problems: [
        "https://leetcode.com/problems/sort-an-array/",
        "https://leetcode.com/problems/quick-sort/",
        "https://leetcode.com/problems/sorting/",
        "https://leetcode.com/problems/sort-colors/",
      ],
      tutorials: [
        "https://www.youtube.com/watch?v=PgBzjlCcFvc",
      ],
    },
    "Heap Sort": {
      problems: [
        "https://leetcode.com/problems/sort-an-array/",
        "https://leetcode.com/problems/heap-sort/",
        "https://leetcode.com/problems/sorting/",
        "https://leetcode.com/problems/sort-colors/",
      ],
      tutorials: [
        "https://www.youtube.com/watch?v=HqPJF2L5h9U",
      ],
    },
  },
  "Searching Algorithms": {
    "Linear Search": {
      problems: [
        "https://leetcode.com/problems/search-insert-position/",
        "https://leetcode.com/problems/linear-search/",
        "https://leetcode.com/problems/search-in-a-sorted-array/",
        "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
      ],
      tutorials: [
        "https://www.youtube.com/watch?v=4GPdGsB3OSc",
      ],
    },
    "Binary Search": {
      problems: [
        "https://leetcode.com/problems/binary-search/",
        "https://leetcode.com/problems/search-insert-position/",
        "https://leetcode.com/problems/search-in-a-sorted-array/",
        "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
      ],
      tutorials: [
        "https://www.youtube.com/watch?v=P3YID7liBug",
      ],
    },
    "Jump Search": {
      problems: [
        "https://leetcode.com/problems/search-insert-position/",
        "https://leetcode.com/problems/jump-search/",
        "https://leetcode.com/problems/search-in-a-sorted-array/",
        "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
      ],
      tutorials: [
        "https://www.youtube.com/watch?v=wNVCJj642n4",
      ],
    },
    "Interpolation Search": {
      problems: [
        "https://leetcode.com/problems/search-insert-position/",
        "https://leetcode.com/problems/interpolation-search/",
        "https://leetcode.com/problems/search-in-a-sorted-array/",
        "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
      ],
      tutorials: [
        "https://www.youtube.com/watch?v=9ylj9NR0Lcg",
      ],
    },
  },
  "Graph Algorithms": {
    BFS: {
      problems: [
        "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        "https://leetcode.com/problems/word-ladder/",
        "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
        "https://leetcode.com/problems/clone-graph/",
      ],
      tutorials: [
        "https://www.youtube.com/watch?v=0u78hx-66Xk",
      ],
    },
    DFS: {
      problems: [
        "https://leetcode.com/problems/binary-tree-preorder-traversal/",
        "https://leetcode.com/problems/graph-valid-tree/",
        "https://leetcode.com/problems/shortest-bridge/",
        "https://leetcode.com/problems/binary-tree-inorder-traversal/",
      ],
      tutorials: [
        "https://www.youtube.com/watch?v=pcKY4hjDrxk",
      ],
    },
    "Dijkstra's Algorithm": {
      problems: [
        "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
        "https://leetcode.com/problems/network-delay-time/",
        "https://leetcode.com/problems/path-with-minimum-effort/",
        "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
      ],
      tutorials: [
        "https://www.youtube.com/watch?v=pVfj6mxhdMw",
      ],
    },
    "Floyd-Warshall Algorithm": {
      problems: [
        "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/",
        "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
        "https://leetcode.com/problems/network-delay-time/",
        "https://leetcode.com/problems/path-with-minimum-effort/",
      ],
      tutorials: [
        "https://www.youtube.com/watch?v=oNI0rf2P9gE",
      ],
    },
    "Prim’s Algorithm": {
      problems: [
        "https://leetcode.com/problems/connecting-cities-with-minimum-cost/",
        "https://leetcode.com/problems/swim-in-rising-water/",
        "https://leetcode.com/problems/min-cost-to-connect-all-points/",
        "https://leetcode.com/problems/path-with-minimum-effort/",
      ],
      tutorials: [
        "https://www.youtube.com/watch?v=cplfcGZmX7I",
      ],
    },
    "Kruskal’s Algorithm": {
      problems: [
        "https://leetcode.com/problems/min-cost-to-connect-all-points/",
        "https://leetcode.com/problems/swim-in-rising-water/",
        "https://leetcode.com/problems/connecting-cities-with-minimum-cost/",
        "https://leetcode.com/problems/path-with-minimum-effort/",
      ],
      tutorials: [
        "https://www.youtube.com/watch?v=71UQH7Pr9kU",
      ],
    },
  },
  "Dynamic Programming": {
    "Fibonacci Sequence": {
      problems: [
        "https://leetcode.com/problems/fibonacci-number/",
        "https://leetcode.com/problems/n-th-tribonacci-number/",
        "https://leetcode.com/problems/climbing-stairs/",
        "https://leetcode.com/problems/min-cost-climbing-stairs/",
      ],
      tutorials: [
        "https://www.youtube.com/watch?v=5o-kdjv7FD0",
      ],
    },
    "Knapsack Problem": {
      problems: [
        "https://leetcode.com/problems/partition-equal-subset-sum/",
        "https://leetcode.com/problems/last-stone-weight-ii/",
        "https://leetcode.com/problems/can-i-win/",
        "https://leetcode.com/problems/coin-change/",
      ],
      tutorials: [
        "https://www.youtube.com/watch?v=8LusJS5-AGo",
      ],
    },
    LCS: {
      problems: [
        "https://leetcode.com/problems/longest-common-subsequence/",
        "https://leetcode.com/problems/longest-palindromic-subsequence/",
        "https://leetcode.com/problems/delete-operation-for-two-strings/",
        "https://leetcode.com/problems/edit-distance/",
      ],
      tutorials: [
        "https://www.youtube.com/watch?v=sSno9rV8Rhg",
      ],
    },
    "Matrix Chain Multiplication": {
      problems: [
        "https://leetcode.com/problems/super-egg-drop/",
        "https://leetcode.com/problems/burst-balloons/",
        "https://leetcode.com/problems/palindrome-partitioning-ii/",
        "https://leetcode.com/problems/minimum-cost-to-merge-stones/",
      ],
      tutorials: [
        "https://www.youtube.com/watch?v=vgLJZMUfnsU",
      ],
    },
  },
  "Greedy Algorithms": {
    "Activity Selection": {
      problems: [
        "https://leetcode.com/problems/maximum-length-of-pair-chain/",
        "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/",
        "https://leetcode.com/problems/task-scheduler/",
        "https://leetcode.com/problems/jump-game-ii/",
      ],
      tutorials: [
        "https://www.youtube.com/watch?v=II6ziNnub1Q",
      ],
    },
    "Huffman Coding": {
      problems: [
        "https://leetcode.com/problems/reorganize-string/",
        "https://leetcode.com/problems/longest-happy-string/",
        "https://leetcode.com/problems/minimum-cost-to-merge-stones/",
        "https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/",
      ],
      tutorials: [
        "https://www.youtube.com/watch?v=co4_ahEDCho",
      ],
    },
    "Krushkal's Algorithm": {
      problems: [
        "https://leetcode.com/problems/min-cost-to-connect-all-points/",
        "https://leetcode.com/problems/swim-in-rising-water/",
        "https://leetcode.com/problems/connecting-cities-with-minimum-cost/",
        "https://leetcode.com/problems/path-with-minimum-effort/",
      ],
      tutorials: [
        "https://www.youtube.com/watch?v=71UQH7Pr9kU",
      ],
    },
    "Prim's Algorithm": {
      problems: [
        "https://leetcode.com/problems/connecting-cities-with-minimum-cost/",
        "https://leetcode.com/problems/swim-in-rising-water/",
        "https://leetcode.com/problems/min-cost-to-connect-all-points/",
        "https://leetcode.com/problems/path-with-minimum-effort/",
      ],
      tutorials: [
        "https://www.youtube.com/watch?v=cplfcGZmX7I",
      ],
    },
  },
  Backtracking: {
    "N-Queens Problem": {
      problems: [
        "https://leetcode.com/problems/n-queens/",
        "https://leetcode.com/problems/n-queens-ii/",
        "https://leetcode.com/problems/word-search/",
        "https://leetcode.com/problems/palindrome-partitioning/",
      ],
      tutorials: [
        "https://www.youtube.com/watch?v=xFv_Hl4B83A",
      ],
    },
    "Sudoku Solver": {
      problems: [
        "https://leetcode.com/problems/sudoku-solver/",
        "https://leetcode.com/problems/valid-sudoku/",
        "https://leetcode.com/problems/sudoku-solver-ii/",
        "https://leetcode.com/problems/sudoku-solver-iii/",
      ],
      tutorials: [
        "https://www.youtube.com/watch?v=G_UYXzGuqvM",
      ],
    },
    "Rat in a Maze": {
      problems: [
        "https://leetcode.com/problems/unique-paths/",
        "https://leetcode.com/problems/unique-paths-ii/",
        "https://leetcode.com/problems/path-with-maximum-gold/",
        "https://leetcode.com/problems/all-paths-from-source-to-target/",
      ],
      tutorials: [
        "https://www.youtube.com/watch?v=9hIQjrMHTv4",
      ],
    },
    "Hamiltonian Cycle": {
      problems: [
        "https://leetcode.com/problems/path-with-maximum-gold/",
        "https://leetcode.com/problems/all-paths-from-source-to-target/",
        "https://leetcode.com/problems/unique-paths/",
        "https://leetcode.com/problems/unique-paths-ii/",
      ],
      tutorials: [
        "https://www.youtube.com/watch?v=dQr4wZCiJJ4",
      ],
    },
  },
};

const AlgorithmsDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex">
      <div className="max-w-7xl mx-auto flex-grow">
        <div className="mb-8">
          <Link
            to="/skills/technical"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Technical Skills
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Algorithms</h1>

        {selectedSubtopic ? (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {selectedSubtopic}
            </h2>
            <p className="text-gray-700 mb-4">Here are some LeetCode problems and a YouTube tutorial for {selectedSubtopic}:</p>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">LeetCode Problems</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {subtopicData[selectedCategory][selectedSubtopic].problems.map((problem, index) => (
                <li key={index}>
                  <a href={problem} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {problem}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">YouTube Tutorial</h3>
            <ul className="list-disc list-inside text-gray-700">
              {subtopicData[selectedCategory][selectedSubtopic].tutorials.map((tutorial, index) => (
                <li key={index}>
                  <a href={tutorial} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {tutorial}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-6">
              Algorithms are step-by-step procedures for solving problems. They
              are essential for efficient computation and are used in all areas
              of computer science.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Learn Algorithms</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>
                <strong>Start with the Basics:</strong> Learn sorting,
                searching, and graph traversal.
              </li>
              <li>
                <strong>Learn Design Techniques:</strong> Understand divide and
                conquer, dynamic programming, and greedy algorithms.
              </li>
              <li>
                <strong>Practice Regularly:</strong> Solve problems on LeetCode,
                HackerRank, and Codeforces.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Practice Problems</h2>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Easy</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Implement linear search</li>
                  <li>Implement bubble sort</li>
                  <li>Implement insertion sort</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Implement binary search</li>
                  <li>Implement merge sort</li>
                  <li>Implement quicksort</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Implement Dijkstra's algorithm</li>
                  <li>Implement dynamic programming for knapsack problem</li>
                  <li>Implement a graph coloring algorithm</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="w-1/4 ml-8 p-6 bg-gray-100 rounded-lg shadow-md h-fit">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Java Algorithm Topics
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {Object.keys(subtopicData).map((category) => (
            <li key={category}>
              <button
                onClick={() => setSelectedCategory(category)}
                className="text-blue-600 hover:underline"
              >
                {category}
              </button>
              {selectedCategory === category && (
                <ul className="list-disc list-inside ml-4 text-gray-600">
                  {Object.keys(subtopicData[category]).map((subtopic) => (
                    <li key={subtopic}>
                      <button
                        onClick={() => setSelectedSubtopic(subtopic)}
                        className="text-blue-600 hover:underline"
                      >
                        {subtopic}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AlgorithmsDetails;
