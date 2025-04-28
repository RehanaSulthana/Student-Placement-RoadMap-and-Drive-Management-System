import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex">
        {/* Main Content */}
        <div className="w-2/3">
          <div className="mb-8">
            <Link
              to="/skills/technical"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Technical Skills
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            C Programming
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 mb-6">
              C is a widely used general-purpose programming language, known for its efficiency and portability. It is often used for system programming, embedded systems, and application development where performance is critical.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How to Learn C from Scratch
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>
                <strong>Start with the Basics:</strong> Learn about variables, data types, operators, and control flow (if-else, loops).
              </li>
              <li>
                <strong>Master Functions:</strong> Understand the importance of functions, parameters, return values, and recursion.
              </li>
              <li>
                <strong>Learn Pointers:</strong> Get comfortable with pointers, memory management, and dynamic memory allocation.
              </li>
              <li>
                <strong>Understand Structures:</strong> Learn how to define and work with structures to handle complex data.
              </li>
              <li>
                <strong>Practice Regularly:</strong> Solve problems on online platforms like HackerRank, LeetCode, or Codeforces.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Handwritten Notes
            </h2>
            <p className="text-gray-700 mb-6">
              <a
                href="https://link_to_handwritten_notes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-500"
              >
                Access Handwritten Notes
              </a>
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Print Notes
            </h2>
            <p className="text-gray-700 mb-6">
              <a
                href="https://link_to_print_notes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-500"
              >
                Access Print Notes
              </a>
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Practice Problems
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Easy</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    <a
                      href="https://leetcode.com/problems/create-hello-world-function/description/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Write a program to print "Hello, World!"
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.hackerrank.com/challenges/simple-array-sum/problem"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Calculate the sum of an array
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.codechef.com/problems/START01"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Find the largest of three numbers
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Medium
                </h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    <a
                      href="https://www.geeksforgeeks.org/data-structures/linked-list/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Implement a linked list
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.hackerrank.com/contests/test-545/challenges/reverse-string-4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Reverse a string
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://leetcode.com/problems/binary-search/description/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Implement binary search
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    <a
                      href="https://leetcode.com/problem-list/depth-first-search/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Graph traversal algorithm
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.codechef.com/learn/course/college-design-analysis-algorithms/CPDAA30/problems/DAA156"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Solve the N-Queens problem
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Dynamic programming knapsack problem
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              YouTube Playlists
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Beginner C
                </h3>
                <a
                  href="https://www.youtube.com/watch?v=KJgsSFOSQv0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  FreeCodeCamp C Tutorial
                </a>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Advanced C
                </h3>
                <a
                  href="https://www.youtube.com/watch?v=EjavYOFoJJ0&list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Advanced C Programming Playlist
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Topics to Learn */}
        <div className="w-1/3 ml-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Topics to Learn
            </h2>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                <strong>Basic Syntax</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.geeksforgeeks.org/c-data-types/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Variables and Data Types</a></li>
                  <li><a href="https://www.geeksforgeeks.org/operators-in-c-set-2-relational-and-logical-operators/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Operators</a></li>
                  <li><a href="https://www.geeksforgeeks.org/decision-making-c-c-else-nested-else/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Control Flow (if, else, for, while)</a></li>
                </ul>
              </li>
              <li>
                <strong>Functions</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.geeksforgeeks.org/user-defined-functions-c/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Defining Functions</a></li>
                  <li><a href="https://www.geeksforgeeks.org/function-parameters-c-cpp/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Arguments and Return Values</a></li>
                  <li><a href="https://www.geeksforgeeks.org/recursion/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Recursion</a></li>
                </ul>
              </li>
              <li>
                <strong>Pointers and Memory Management</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.geeksforgeeks.org/pointers-c-examples/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Pointers</a></li>
                  <li><a href="https://www.geeksforgeeks.org/dynamic-memory-allocation-in-c-using-malloc-calloc-free-and-realloc/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Dynamic Memory Allocation</a></li>
                  <li><a href="https://www.geeksforgeeks.org/memory-layout-of-c-program/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Memory Management</a></li>
                </ul>
              </li>
              <li>
                <strong>Structures and Unions</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.geeksforgeeks.org/structures-c/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Structures</a></li>
                  <li><a href="https://www.geeksforgeeks.org/unions-c/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Unions</a></li>
                </ul>
              </li>
              <li>
                <strong>File Handling</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.geeksforgeeks.org/basics-file-handling-c/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Reading and Writing Files</a></li>
                  <li><a href="https://www.geeksforgeeks.org/basics-file-handling-c/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">File Operations</a></li>
                </ul>
              </li>
              <li>
                <strong>Libraries and Frameworks</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.geeksforgeeks.org/standard-library-functions-in-c/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Standard Library</a></li>
                  <li><a href="https://www.geeksforgeeks.org/standard-template-library-stl-c/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">External Libraries</a></li>
                </ul>
              </li>
              <li>
                <strong>Data Structures</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.geeksforgeeks.org/arrays-in-c-cpp/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Arrays</a></li>
                  <li><a href="https://www.geeksforgeeks.org/linked-list-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Linked Lists</a></li>
                  <li><a href="https://www.geeksforgeeks.org/stack-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Stacks</a></li>
                  <li><a href="https://www.geeksforgeeks.org/queue-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Queues</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CDetails;
