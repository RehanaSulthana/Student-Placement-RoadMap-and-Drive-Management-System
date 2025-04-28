// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowLeft } from 'lucide-react';

// const BackendDetails = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
//         {/* Left Sidebar */}
//         <div className="col-span-2 bg-white rounded-lg shadow-lg p-6">
//           <div className="mb-8">
//             <Link to="/skills/technical" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
//               <ArrowLeft className="h-4 w-4 mr-1" />
//               Back to Technical Skills
//             </Link>
//           </div>
//           <h1 className="text-3xl font-bold text-gray-900 mb-8">Backend Development</h1>
          
//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
//           <p className="text-gray-700 mb-6">
//             Backend development focuses on the server-side logic, databases, and APIs that power web applications.
//             It involves using technologies like Node.js, Express, Django, and databases to create robust and scalable systems.
//           </p>

//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Learn Backend Development</h2>
//           <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
//             <li>
//               <strong>Start with a Backend Language:</strong> Choose a language like Node.js, Python, or Java to build your server-side logic.
//             </li>
//             <li>
//               <strong>Learn Frameworks:</strong> Familiarize yourself with popular backend frameworks like Express, Django, or Spring Boot.
//             </li>
//             <li>
//               <strong>Understand Databases:</strong> Grasp the concepts of relational and non-relational databases and learn to use SQL or NoSQL.
//             </li>
//             <li>
//               <strong>Explore APIs:</strong> Learn to design and implement RESTful APIs for communication between frontend and backend.
//             </li>
//             <li>
//               <strong>Practice Regularly:</strong> Build small projects to solidify your understanding and improve your skills.
//             </li>
//           </ul>

//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">Handwritten Notes</h2>
//           <p className="text-gray-700 mb-6">
//             <a href="https://example.com/handwritten-notes" target="_blank" className="text-indigo-600 hover:text-indigo-500">Click here to access Handwritten Notes</a>
//           </p>

//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">Print Notes</h2>
//           <p className="text-gray-700 mb-6">
//             <a href="https://example.com/print-notes" target="_blank" className="text-indigo-600 hover:text-indigo-500">Click here to access Print Notes</a>
//           </p>

//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">Practice Problems</h2>
//           <div className="space-y-4">
//             <div className="bg-gray-100 p-4 rounded-md">
//               <h3 className="text-lg font-medium text-gray-900 mb-2">Easy</h3>
//               <ul className="list-disc list-inside text-gray-700">
//                 <li><a href="https://leetcode.com/problemset/all/?difficulty=Easy" target="_blank" className="text-indigo-600 hover:text-indigo-500">Create a basic server using Node.js and Express</a></li>
//                 <li><a href="https://leetcode.com/problemset/all/?difficulty=Easy" target="_blank" className="text-indigo-600 hover:text-indigo-500">Implement a simple API endpoint</a></li>
//                 <li><a href="https://leetcode.com/problemset/all/?difficulty=Easy" target="_blank" className="text-indigo-600 hover:text-indigo-500">Connect to a database and perform basic CRUD operations</a></li>
//               </ul>
//             </div>
//             <div className="bg-gray-100 p-4 rounded-md">
//               <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
//               <ul className="list-disc list-inside text-gray-700">
//                 <li><a href="https://www.geeksforgeeks.org/implementation-of-user-authentication-using-jwt/" target="_blank" className="text-indigo-600 hover:text-indigo-500">Implement user authentication and authorization</a></li>
//                 <li><a href="https://leetcode.com/problemset/all/?difficulty=Medium" target="_blank" className="text-indigo-600 hover:text-indigo-500">Create a RESTful API with multiple endpoints</a></li>
//                 <li><a href="https://www.hackerrank.com/domains/tutorials/10-days-of-javascript" target="_blank" className="text-indigo-600 hover:text-indigo-500">Implement data validation and error handling</a></li>
//               </ul>
//             </div>
//             <div className="bg-gray-100 p-4 rounded-md">
//               <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
//               <ul className="list-disc list-inside text-gray-700">
//                 <li><a href="https://www.codechef.com/problems/MINDSUM" target="_blank" className="text-indigo-600 hover:text-indigo-500">Build a scalable microservices architecture</a></li>
//                 <li><a href="https://www.hackerrank.com/challenges/websockets" target="_blank" className="text-indigo-600 hover:text-indigo-500">Implement a real-time application using WebSockets</a></li>
//                 <li><a href="https://www.hackerearth.com/challenges/algorithms/optimizing-database-queries/" target="_blank" className="text-indigo-600 hover:text-indigo-500">Optimize database queries for performance</a></li>
//               </ul>
//             </div>
//           </div>

//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">YouTube Playlists</h2>
//           <div className="space-y-4">
//             <div className="bg-gray-100 p-4 rounded-md">
//               <h3 className="text-lg font-medium text-gray-900 mb-2">Backend Basics</h3>
//               <a href="https://www.youtube.com/playlist?list=PLqq-6Pq4lTTUmA78qv8t1Y2sH2P-cz8sm" target="_blank" className="text-indigo-600 hover:text-indigo-500">Watch the playlist here</a>
//             </div>
//             <div className="bg-gray-100 p-4 rounded-md">
//               <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Backend</h3>
//               <a href="https://www.youtube.com/playlist?list=PLqq-6Pq4lTTWbG_R1Fbqqsz5w2e4s1g9F" target="_blank" className="text-indigo-600 hover:text-indigo-500">Watch the playlist here</a>
//             </div>
//           </div>
//         </div>

//         {/* Right Sidebar (Topics to Learn) */}
//         <div className="bg-white rounded-lg shadow-lg p-6">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">Topics to Learn in Backend</h2>
//           <ul className="list-disc list-inside space-y-4 text-gray-700">
//             <li>
//               <strong>Backend Languages:</strong>
//               <ul className="list-disc list-inside">
//                 <li>Node.js</li>
//                 <li>Python (Django, Flask)</li>
//                 <li>Java (Spring Boot)</li>
//               </ul>
//             </li>
//             <li>
//               <strong>Frameworks:</strong>
//               <ul className="list-disc list-inside">
//                 <li>Express (for Node.js)</li>
//                 <li>Django (for Python)</li>
//                 <li>Spring Boot (for Java)</li>
//               </ul>
//             </li>
//             <li>
//               <strong>Databases:</strong>
//               <ul className="list-disc list-inside">
//                 <li>SQL (MySQL, PostgreSQL)</li>
//                 <li>NoSQL (MongoDB, Firebase)</li>
//               </ul>
//             </li>
//             <li>
//               <strong>API Design & REST:</strong>
//               <ul className="list-disc list-inside">
//                 <li>RESTful API Design</li>
//                 <li>CRUD Operations</li>
//                 <li>API Authentication (JWT)</li>
//               </ul>
//             </li>
//             <li>
//               <strong>Advanced Concepts:</strong>
//               <ul className="list-disc list-inside">
//                 <li>Microservices</li>
//                 <li>WebSockets</li>
//                 <li>GraphQL</li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BackendDetails;

import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackendDetails = () => {
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
            Backend Development
          </h1>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Introduction
          </h2>
          <p className="text-gray-700 mb-6">
            Backend development focuses on the server-side logic, databases, and
            APIs that power web applications. It involves using technologies
            like Node.js, Express, Django, and databases to create robust and
            scalable systems.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How to Learn Backend Development
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>
              <strong>Start with a Backend Language:</strong> Choose a language
              like Node.js, Python, or Java to build your server-side logic.
            </li>
            <li>
              <strong>Learn Frameworks:</strong> Familiarize yourself with
              popular backend frameworks like Express, Django, or Spring Boot.
            </li>
            <li>
              <strong>Understand Databases:</strong> Grasp the concepts of
              relational and non-relational databases and learn to use SQL or
              NoSQL.
            </li>
            <li>
              <strong>Explore APIs:</strong> Learn to design and implement
              RESTful APIs for communication between frontend and backend.
            </li>
            <li>
              <strong>Practice Regularly:</strong> Build small projects to
              solidify your understanding and improve your skills.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Handwritten Notes
          </h2>
          <p className="text-gray-700 mb-6">
            <a
              href="https://example.com/handwritten-notes"
              target="_blank"
              className="text-indigo-600 hover:text-indigo-500"
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
              target="_blank"
              className="text-indigo-600 hover:text-indigo-500"
            >
              Click here to access Print Notes
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
                    href="https://www.geeksforgeeks.org/node-js-introduction/"
                    target="_blank"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Create a basic server using Node.js and Express
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.geeksforgeeks.org/restful-api-design/"
                    target="_blank"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Implement a simple API endpoint
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.geeksforgeeks.org/mongodb-crud-operations-in-node-js/"
                    target="_blank"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Connect to a database and perform basic CRUD operations
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  <a
                    href="https://www.geeksforgeeks.org/implementation-of-user-authentication-using-jwt/"
                    target="_blank"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Implement user authentication and authorization
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.geeksforgeeks.org/restful-api-design-best-practices/"
                    target="_blank"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Create a RESTful API with multiple endpoints
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.geeksforgeeks.org/data-validation-in-node-js-using-express-validator/"
                    target="_blank"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Implement data validation and error handling
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  <a
                    href="https://www.geeksforgeeks.org/introduction-to-microservice-architecture/"
                    target="_blank"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Build a scalable microservices architecture
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.geeksforgeeks.org/websockets-in-node-js/"
                    target="_blank"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Implement a real-time application using WebSockets
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.geeksforgeeks.org/optimize-sql-queries-for-better-performance/"
                    target="_blank"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Optimize database queries for performance
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
                Backend Basics
              </h3>
              <a
                href="https://www.youtube.com/playlist?list=PLqq-6Pq4lTTUmA78qv8t1Y2sH2P-cz8sm"
                target="_blank"
                className="text-indigo-600 hover:text-indigo-500"
              >
                Watch the playlist here
              </a>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Advanced Backend
              </h3>
              <a
                href="https://www.youtube.com/playlist?list=PLqq-6Pq4lTTWbG_R1Fbqqsz5w2e4s1g9F"
                target="_blank"
                className="text-indigo-600 hover:text-indigo-500"
              >
                Watch the playlist here
              </a>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Topics to Learn */}
        <div className="w-1/3 ml-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Topics to Learn in Backend
            </h2>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                <strong>Backend Languages</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://nodejs.org/en/docs/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Node.js</a></li>
                  <li><a href="https://docs.djangoproject.com/en/stable/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Python (Django, Flask)</a></li>
                  <li><a href="https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Java (Spring Boot)</a></li>
                </ul>
              </li>
              <li>
                <strong>Frameworks</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Express (for Node.js)</a></li>
                  <li><a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Django (for Python)</a></li>
                  <li><a href="https://spring.io/projects/spring-boot" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Spring Boot (for Java)</a></li>
                </ul>
              </li>
              <li>
                <strong>Databases</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">SQL (MySQL, PostgreSQL)</a></li>
                  <li><a href="https://www.mongodb.com/docs/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">NoSQL (MongoDB, Firebase)</a></li>
                </ul>
              </li>
              <li>
                <strong>API Design & REST</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.restapitutorial.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">RESTful API Design</a></li>
                  <li><a href="https://www.geeksforgeeks.org/crud-operations-in-node-js-using-expressjs-and-mongodb/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">CRUD Operations</a></li>
                  <li><a href="https://jwt.io/introduction/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">API Authentication (JWT)</a></li>
                </ul>
              </li>
              <li>
                <strong>Advanced Concepts</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://microservices.io/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Microservices</a></li>
                  <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">WebSockets</a></li>
                  <li><a href="https://graphql.org/learn/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">GraphQL</a></li>
                </ul>
              </li>
              <li>
                <strong>Performance Optimization</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.geeksforgeeks.org/optimizing-web-application-performance/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Web Application Performance</a></li>
                  <li><a href="https://www.geeksforgeeks.org/caching-in-web-applications/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Caching Strategies</a></li>
                  <li><a href="https://www.geeksforgeeks.org/load-balancing-in-web-servers/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Load Balancing</a></li>
                </ul>
              </li>
              <li>
                <strong>Security Best Practices</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://owasp.org/www-project-top-ten/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">OWASP Top Ten</a></li>
                  <li><a href="https://www.geeksforgeeks.org/common-vulnerabilities-in-web-applications/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Common Vulnerabilities</a></li>
                  <li><a href="https://www.geeksforgeeks.org/secure-coding-practices/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Secure Coding Practices</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackendDetails;
