// import { Link } from 'react-router-dom';
// import { ArrowLeft } from 'lucide-react';

// const JavaDetails = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-8">
//           <Link to="/skills/technical" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
//             <ArrowLeft className="h-4 w-4 mr-1" />
//             Back to Technical Skills
//           </Link>
//         </div>
//         <h1 className="text-3xl font-bold text-gray-900 mb-8">Java Programming</h1>
        
//         <div className="bg-white rounded-lg shadow-lg p-6">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
//           <p className="text-gray-700 mb-6">
//             Java is a versatile, object-oriented programming language known for its platform independence and robustness.
//             It's widely used for enterprise applications, Android development, and more.
//           </p>

//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Learn Java from Scratch</h2>
//           <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
//             <li>
//               <strong>Start with the Basics:</strong> Understand fundamental concepts like variables, data types, operators, and control structures.
//             </li>
//             <li>
//               <strong>Learn Object-Oriented Programming (OOP):</strong> Grasp the principles of classes, objects, inheritance, and polymorphism.
//             </li>
//             <li>
//               <strong>Explore Collections Framework:</strong> Familiarize yourself with lists, sets, maps, and other data structures.
//             </li>
//              <li>
//               <strong>Understand Multithreading:</strong> Learn how to create and manage threads for concurrent programming.
//             </li>
//             <li>
//               <strong>Explore Spring Boot:</strong> Learn to use Spring Boot for building web applications and microservices.
//             </li>
//             <li>
//               <strong>Practice Regularly:</strong> Solve coding problems on platforms like LeetCode, HackerRank, and Codeforces.
//             </li>
//             <li>
//               <strong>Build Projects:</strong> Apply your knowledge by creating small projects to solidify your understanding.
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
//                 <li>Write a program to print "Hello, World!"</li>
//                 <li>Calculate the factorial of a number</li>
//                  <li>Check if a number is even or odd</li>
//               </ul>
//             </div>
//             <div className="bg-gray-100 p-4 rounded-md">
//               <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
//               <ul className="list-disc list-inside text-gray-700">
//                 <li>Implement a queue using an array</li>
//                 <li>Reverse a string using recursion</li>
//                 <li>Implement a bubble sort algorithm</li>
//               </ul>
//             </div>
//             <div className="bg-gray-100 p-4 rounded-md">
//               <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
//               <ul className="list-disc list-inside text-gray-700">
//                  <li>Implement a binary search tree</li>
//                 <li>Solve the Tower of Hanoi problem</li>
//                 <li>Implement a concurrent program using threads</li>
//               </ul>
//             </div>
//           </div>

//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">YouTube Playlists</h2>
//           <div className="space-y-4">
//             <div className="bg-gray-100 p-4 rounded-md">
//               <h3 className="text-lg font-medium text-gray-900 mb-2">Beginner Java</h3>
//               <p className="text-gray-700">
//                 (Placeholder for beginner Java playlist link)
//               </p>
//             </div>
//             <div className="bg-gray-100 p-4 rounded-md">
//               <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Java</h3>
//                <p className="text-gray-700">
//                 (Placeholder for advanced Java playlist link)
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JavaDetails;

import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const JavaDetails = () => {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Java Programming</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-6">
              Java is a versatile, object-oriented programming language known for its platform independence and robustness.
              It's widely used for enterprise applications, Android development, and more.
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
                    <a href="https://www.codechef.com/practice/course/java/LPJAAS01/problems/LJAAS02" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Write a program to print "Hello, World!"</a>
                  </li>
                  <li>
                    <a href="https://leetcode.com/problems/clumsy-factorial/description/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Calculate the factorial of a number</a>
                  </li>
                  <li>
                    <a href="https://www.codechef.com/practice/course/c/LPCAS06/problems/LCAS59" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Check if a number is even or odd</a>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    <a href="https://www.geeksforgeeks.org/queue-using-array/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a queue using an array</a>
                  </li>
                  <li>
                    <a href="https://leetcode.com/problems/reverse-string/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Reverse a string using recursion</a>
                  </li>
                  <li>
                    <a href="https://www.hackerrank.com/challenges/ctci-bubble-sort/problem" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a bubble sort algorithm</a>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    <a href="https://leetcode.com/problem-list/binary-search-tree/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a binary search tree</a>
                  </li>
                  <li>
                    <a href="https://leetcode.com/discuss/post/5272714/tower-of-hanoi-by-satvikmpatil-owd6/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Solve the Tower of Hanoi problem</a>
                  </li>
                  <li>
                    <a href="https://www.codechef.com/learn/course/oops-concepts-in-python/CPOPPY13/problems/ADVPPY118" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a concurrent program using threads</a>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">YouTube Playlists</h2>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Beginner Java</h3>
                <a href="https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Click here for the Beginner Java Playlist</a>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Java</h3>
                <a href="https://www.youtube.com/playlist?list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Click here for the Advanced Java Playlist</a>
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
                <strong>Basic Syntax</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.w3schools.com/java/java_variables.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Variables and Data Types</a></li>
                  <li><a href="https://www.w3schools.com/java/java_operators.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Operators</a></li>
                  <li><a href="https://www.w3schools.com/java/java_conditions.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Control Flow (if, else, for, while)</a></li>
                </ul>
              </li>
              <li>
                <strong>Functions</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.w3schools.com/java/java_methods.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Defining Functions</a></li>
                  <li><a href="https://www.geeksforgeeks.org/methods-in-java/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Arguments and Return Values</a></li>
                  <li><a href="https://www.geeksforgeeks.org/recursion-in-java/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Recursion</a></li>
                </ul>
              </li>
              <li>
                <strong>Object-Oriented Programming (OOP)</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.w3schools.com/java/java_oop.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Classes and Objects</a></li>
                  <li><a href="https://www.w3schools.com/java/java_inheritance.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Inheritance</a></li>
                  <li><a href="https://www.w3schools.com/java/java_polymorphism.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Polymorphism</a></li>
                  <li><a href="https://www.w3schools.com/java/java_encapsulation.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Encapsulation</a></li>
                  <li><a href="https://www.w3schools.com/java/java_abstract.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Abstraction</a></li>
                </ul>
              </li>
              <li>
                <strong>Collections Framework</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.geeksforgeeks.org/collections-in-java-2/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">List, Set, Map</a></li>
                  <li><a href="https://www.geeksforgeeks.org/queue-interface-java-example/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Queue and Stack</a></li>
                  <li><a href="https://www.geeksforgeeks.org/iterator-in-java/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Iterator Interface</a></li>
                </ul>
              </li>
              <li>
                <strong>Multithreading</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.geeksforgeeks.org/multithreading-in-java/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Thread Class</a></li>
                  <li><a href="https://www.geeksforgeeks.org/runnable-interface-in-java/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Runnable Interface</a></li>
                  <li><a href="https://www.geeksforgeeks.org/synchronization-in-java/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Synchronization</a></li>
                </ul>
              </li>
              <li>
                <strong>Java I/O</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.geeksforgeeks.org/file-handling-in-java-using-filewriter-and-filereader/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">File Handling</a></li>
                  <li><a href="https://www.geeksforgeeks.org/streams-in-java/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Streams</a></li>
                  <li><a href="https://www.geeksforgeeks.org/serialization-in-java/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Serialization</a></li>
                </ul>
              </li>
              <li>
                <strong>Exception Handling</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.geeksforgeeks.org/exception-handling-in-java/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Try, Catch, Finally</a></li>
                  <li><a href="https://www.geeksforgeeks.org/throw-throws-java/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Throw, Throws</a></li>
                  <li><a href="https://www.geeksforgeeks.org/user-defined-custom-exception-in-java/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Custom Exceptions</a></li>
                </ul>
              </li>
              <li>
                <strong>Java 8 Features</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.geeksforgeeks.org/lambda-expressions-java-8/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Lambda Expressions</a></li>
                  <li><a href="https://www.geeksforgeeks.org/stream-in-java/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Streams API</a></li>
                  <li><a href="https://www.geeksforgeeks.org/default-methods-java/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Default Methods in Interfaces</a></li>
                </ul>
              </li>
              <li>
                <strong>Spring Boot Framework</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.geeksforgeeks.org/spring-boot/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Setting Up Spring Boot</a></li>
                  <li><a href="https://www.geeksforgeeks.org/spring-boot-restful-api-documentation-with-swagger/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">RESTful Services</a></li>
                  <li><a href="https://www.geeksforgeeks.org/spring-boot-connect-to-database-using-jdbc/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Database Connectivity</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JavaDetails;
