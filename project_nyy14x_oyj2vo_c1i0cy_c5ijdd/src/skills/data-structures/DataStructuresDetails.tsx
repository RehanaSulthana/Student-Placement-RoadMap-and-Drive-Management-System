// import { Link } from 'react-router-dom';
// import { ArrowLeft } from 'lucide-react';

// const DataStructuresDetails = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-8">
//           <Link to="/skills/technical" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
//             <ArrowLeft className="h-4 w-4 mr-1" />
//             Back to Technical Skills
//           </Link>
//         </div>
//         <h1 className="text-3xl font-bold text-gray-900 mb-8">Basic Data Structures</h1>
        
//         <div className="bg-white rounded-lg shadow-lg p-6">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
//           <p className="text-gray-700 mb-6">
//             Data structures are fundamental concepts in computer science that organize and store data efficiently.
//             Understanding them is crucial for writing effective and optimized algorithms.
//           </p>

//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Learn Data Structures</h2>
//           <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
//             <li>
//               <strong>Start with the Basics:</strong> Understand fundamental data structures like arrays, linked lists, stacks, and queues.
//             </li>
//             <li>
//               <strong>Learn Tree and Graph Structures:</strong> Grasp the concepts of binary trees, binary search trees, and graph representations.
//             </li>
//             <li>
//               <strong>Implement Data Structures:</strong> Practice implementing these data structures from scratch to understand their inner workings.
//             </li>
//             <li>
//               <strong>Practice Regularly:</strong> Solve coding problems on platforms like LeetCode, HackerRank, and Codeforces.
//             </li>
//             <li>
//               <strong>Analyze Time and Space Complexity:</strong> Understand how different data structures affect the performance of your algorithms.
//             </li>
//           </ul>

//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">Handwritten Notes</h2>
//           <p className="text-gray-700 mb-6">
//             (Placeholder for handwritten notes - you can add links to images or PDFs here)
//           </p>

//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">Print Notes</h2>
//           <p className="text-gray-700 mb-6">
//             (Placeholder for print notes - you can add links to PDFs or documents here)
//           </p>

//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">Practice Problems</h2>
//           <div className="space-y-4">
//             <div className="bg-gray-100 p-4 rounded-md">
//               <h3 className="text-lg font-medium text-gray-900 mb-2">Easy</h3>
//               <ul className="list-disc list-inside text-gray-700">
//                 <li>Implement a basic array</li>
//                 <li>Implement a singly linked list</li>
//                 <li>Implement a stack using an array</li>
//               </ul>
//             </div>
//             <div className="bg-gray-100 p-4 rounded-md">
//               <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
//               <ul className="list-disc list-inside text-gray-700">
//                 <li>Implement a doubly linked list</li>
//                 <li>Implement a queue using a linked list</li>
//                 <li>Implement a binary tree</li>
//               </ul>
//             </div>
//             <div className="bg-gray-100 p-4 rounded-md">
//               <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
//               <ul className="list-disc list-inside text-gray-700">
//                 <li>Implement a graph using adjacency list</li>
//                 <li>Implement a binary search tree</li>
//                 <li>Implement a priority queue</li>
//               </ul>
//             </div>
//           </div>

//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">YouTube Playlists</h2>
//           <div className="space-y-4">
//             <div className="bg-gray-100 p-4 rounded-md">
//               <h3 className="text-lg font-medium text-gray-900 mb-2">Data Structures Basics</h3>
//               <p className="text-gray-700">
//                 (Placeholder for beginner data structures playlist link)
//               </p>
//             </div>
//             <div className="bg-gray-100 p-4 rounded-md">
//               <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Data Structures</h3>
//                <p className="text-gray-700">
//                 (Placeholder for advanced data structures playlist link)
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DataStructuresDetails;

import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const DataStructuresDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex">
        {/* Main Content */}
        <div className="w-2/3">
          <div className="mb-8">
            <Link to="/skills/technical" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Technical Skills
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Basic Data Structures</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-6">
              Data structures are fundamental concepts in computer science that organize and store data efficiently. Understanding them is crucial for writing effective and optimized algorithms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Handwritten Notes</h2>
            <p className="text-gray-700 mb-6">
              <a href="https://example.com/handwritten-notes" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Click here to access Handwritten Notes</a>
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Print Notes</h2>
            <p className="text-gray-700 mb-6">
              <a href="https://example.com/print-notes" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Click here to access Print Notes</a>
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Practice Problems</h2>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Easy</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    <a href="https://www.geeksforgeeks.org/array-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a basic array</a>
                  </li>
                  <li>
                    <a href="https://www.geeksforgeeks.org/linked-list-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a singly linked list</a>
                  </li>
                  <li>
                    <a href="https://www.geeksforgeeks.org/stack-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a stack using an array</a>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    <a href="https://www.geeksforgeeks.org/doubly-linked-list/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a doubly linked list</a>
                  </li>
                  <li>
                    <a href="https://www.geeksforgeeks.org/queue-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a queue using a linked list</a>
                  </li>
                  <li>
                    <a href="https://www.geeksforgeeks.org/binary-tree-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a binary tree</a>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    <a href="https://www.geeksforgeeks.org/graph-and-its-representations/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a graph using adjacency list</a>
                  </li>
                  <li>
                    <a href="https://www.geeksforgeeks.org/binary-search-tree-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a binary search tree</a>
                  </li>
                  <li>
                    <a href="hhttps://www.programiz.com/dsa/priority-queue" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a priority queue</a>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">YouTube Playlists</h2>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Data Structures Basics</h3>
                <a href="https://www.youtube.com/watch?v=xLetJpcjHS0&list=PLBlnK6fEyqRj9lld8sWIUNwlKfdUoPd1Y" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Click here for the Beginner Data Structures Playlist</a>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Data Structures</h3>
                <a href="https://www.youtube.com/watch?v=rhpyqL5D7K0&list=PLM_KIlU0WoXmkV4QB1Dg8PtJaHTdWHwRS" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Click here for the Advanced Data Structures Playlist</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Topics to Learn */}
        <div className="w-1/3 ml-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Topics to Learn</h2>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                <strong>Basic Data Structures</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.geeksforgeeks.org/arrays-in-c-cpp/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Arrays</a></li>
                  <li><a href="https://www.geeksforgeeks.org/linked-list-set-1-introduction/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Linked Lists (Singly and Doubly)</a></li>
                  <li><a href="https://www.geeksforgeeks.org/stack-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Stacks</a></li>
                  <li><a href="https://www.geeksforgeeks.org/queue-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Queues</a></li>
                </ul>
              </li>
              <li>
                <strong>Trees</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.geeksforgeeks.org/binary-tree-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Binary Trees</a></li>
                  <li><a href="https://www.geeksforgeeks.org/binary-search-tree-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Binary Search Trees</a></li>
                  <li><a href="https://www.geeksforgeeks.org/avl-tree-set-1-insertion/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">AVL Trees</a></li>
                  <li><a href="https://www.geeksforgeeks.org/heap-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Heap</a></li>
                </ul>
              </li>
              <li>
                <strong>Graphs</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.geeksforgeeks.org/graph-and-its-representations/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Graph Representation</a></li>
                  <li><a href="https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Breadth-First Search (BFS)</a></li>
                  <li><a href="https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Depth-First Search (DFS)</a></li>
                  <li><a href="https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Dijkstra’s Algorithm</a></li>
                </ul>
              </li>
              <li>
                <strong>Hashing</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.geeksforgeeks.org/hashing-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Hash Tables</a></li>
                  <li><a href="https://www.geeksforgeeks.org/hashing-introduction/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Hash Functions</a></li>
                  <li><a href="https://www.geeksforgeeks.org/collision-resolution-techniques-in-hashing/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Collision Resolution Techniques</a></li>
                </ul>
              </li>
              <li>
                <strong>Advanced Data Structures</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.geeksforgeeks.org/trie-insert-and-search/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Tries</a></li>
                  <li><a href="https://www.geeksforgeeks.org/segment-tree-set-1-sum-of-given-range/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Segment Trees</a></li>
                  <li><a href="https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Fenwick Tree (Binary Indexed Tree)</a></li>
                </ul>
              </li>
              <li>
                <strong>Algorithms</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.geeksforgeeks.org/sorting-algorithms/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Sorting Algorithms</a></li>
                  <li><a href="https://www.geeksforgeeks.org/searching-algorithms/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Searching Algorithms</a></li>
                  <li><a href="https://www.geeksforgeeks.org/dynamic-programming/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Dynamic Programming</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataStructuresDetails;
