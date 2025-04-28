// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowLeft } from 'lucide-react';

// const VerbalCommunicationDetails = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2">
//           <div className="mb-8">
//             <Link to="/skills/non-technical" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
//               <ArrowLeft className="h-4 w-4 mr-1" />
//               Back to Non-Technical Skills
//             </Link>
//           </div>
//           <h1 className="text-3xl font-bold text-gray-900 mb-8">Verbal Communication</h1>

//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
//             <p className="text-gray-700 mb-6">
//               Verbal communication involves the use of spoken words to convey messages.
//               It's a crucial skill for effective interaction, presentations, and interviews.
//             </p>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Improve Verbal Communication</h2>
//             <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
//               <li>
//                 <strong>Enhance Grammar and Vocabulary:</strong> Improve your understanding of grammar rules and expand your vocabulary.
//               </li>
//               <li>
//                 <strong>Practice Public Speaking:</strong> Develop your ability to speak clearly and confidently in front of an audience.
//               </li>
//               <li>
//                 <strong>Participate in Group Discussions:</strong> Learn to express your ideas effectively in a group setting.
//               </li>
//               <li>
//                 <strong>Improve Interview Skills:</strong> Practice answering common interview questions and learn to present yourself well.
//               </li>
//               <li>
//                 <strong>Master Email Writing:</strong> Learn to write clear, concise, and professional emails.
//               </li>
//             </ul>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">Handwritten Notes</h2>
//             <a href="link-to-handwritten-notes" className="text-indigo-600 hover:text-indigo-500">Click here for Handwritten Notes</a>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">Print Notes</h2>
//             <a href="link-to-print-notes" className="text-indigo-600 hover:text-indigo-500">Click here for Print Notes</a>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">Practice Problems</h2>
//             <div className="space-y-4">
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Easy</h3>
//                 <ul className="list-disc list-inside text-gray-700">
//                   <li><a href="https://www.leetcode.com/problem-link" className="text-indigo-600 hover:text-indigo-500">Practice basic grammar exercises</a></li>
//                   <li><a href="https://www.geeksforgeeks.org/problem-link" className="text-indigo-600 hover:text-indigo-500">Practice vocabulary building exercises</a></li>
//                   <li><a href="https://www.codechef.com/problem-link" className="text-indigo-600 hover:text-indigo-500">Practice short speeches on familiar topics</a></li>
//                 </ul>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
//                 <ul className="list-disc list-inside text-gray-700">
//                   <li><a href="https://www.hackerrank.com/problem-link" className="text-indigo-600 hover:text-indigo-500">Participate in mock group discussions</a></li>
//                   <li><a href="https://www.hackerearth.com/problem-link" className="text-indigo-600 hover:text-indigo-500">Practice answering common interview questions</a></li>
//                   <li><a href="https://www.codechef.com/problem-link" className="text-indigo-600 hover:text-indigo-500">Write professional emails for different scenarios</a></li>
//                 </ul>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
//                 <ul className="list-disc list-inside text-gray-700">
//                   <li><a href="https://www.geeksforgeeks.org/problem-link" className="text-indigo-600 hover:text-indigo-500">Deliver a persuasive speech on a complex topic</a></li>
//                   <li><a href="https://www.codechef.com/problem-link" className="text-indigo-600 hover:text-indigo-500">Participate in a mock interview with challenging questions</a></li>
//                   <li><a href="https://www.leetcode.com/problem-link" className="text-indigo-600 hover:text-indigo-500">Write a detailed report or proposal</a></li>
//                 </ul>
//               </div>
//             </div>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">YouTube Playlists</h2>
//             <div className="space-y-4">
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Basic Verbal Communication</h3>
//                 <a href="link-to-basic-verbal-communication-playlist" className="text-indigo-600 hover:text-indigo-500">Click here for Basic Verbal Communication Playlist</a>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Verbal Communication</h3>
//                 <a href="link-to-advanced-verbal-communication-playlist" className="text-indigo-600 hover:text-indigo-500">Click here for Advanced Verbal Communication Playlist</a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side Topics to Learn */}
//         <div className="lg:col-span-1 bg-white rounded-lg shadow-lg p-6">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">Topics to Learn</h2>
//           <ul className="space-y-4">
//             <li>
//               <strong>Grammar and Vocabulary</strong>
//               <ul className="list-disc list-inside text-gray-700">
//                 <li>Parts of speech</li>
//                 <li>Sentence construction</li>
//                 <li>Word usage and synonyms</li>
//               </ul>
//             </li>
//             <li>
//               <strong>Public Speaking</strong>
//               <ul className="list-disc list-inside text-gray-700">
//                 <li>Speech delivery</li>
//                 <li>Voice modulation</li>
//                 <li>Body language</li>
//               </ul>
//             </li>
//             <li>
//               <strong>Group Discussions</strong>
//               <ul className="list-disc list-inside text-gray-700">
//                 <li>Topic selection</li>
//                 <li>Argumentation and counter-arguments</li>
//                 <li>Active listening</li>
//               </ul>
//             </li>
//             <li>
//               <strong>Interview Skills</strong>
//               <ul className="list-disc list-inside text-gray-700">
//                 <li>Common interview questions</li>
//                 <li>Answering strategies</li>
//                 <li>Self-presentation</li>
//               </ul>
//             </li>
//             <li>
//               <strong>Email Writing</strong>
//               <ul className="list-disc list-inside text-gray-700">
//                 <li>Formal vs informal emails</li>
//                 <li>Structure of emails</li>
//                 <li>Email etiquette</li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerbalCommunicationDetails;

import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NonVerbalCommunicationDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
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
            Non-Verbal Communication
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 mb-6">
              Non-verbal communication involves the use of body language, facial
              expressions, and other non-spoken cues to convey messages. It's a
              crucial skill for effective interaction, presentations, and
              interviews.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How to Improve Non-Verbal Communication
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>
                <strong>Understand Body Language:</strong> Learn to interpret
                and use body language effectively, including posture, gestures,
                and eye contact.
              </li>
              <li>
                <strong>Practice Presentation Skills:</strong> Develop your
                ability to deliver engaging and impactful presentations.
              </li>
              <li>
                <strong>Enhance Active Listening:</strong> Improve your ability
                to listen attentively and understand non-verbal cues.
              </li>
              <li>
                <strong>Learn Professional Etiquette:</strong> Familiarize
                yourself with appropriate behavior and manners in professional
                settings.
              </li>
              <li>
                <strong>Practice Regularly:</strong> Observe and analyze
                non-verbal cues in different situations to improve your skills.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Handwritten Notes
            </h2>
            <a
              href="https://example.com/handwritten-notes"
              className="text-indigo-600 hover:text-indigo-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here for Handwritten Notes
            </a>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Print Notes
            </h2>
            <a
              href="https://example.com/print-notes"
              className="text-indigo-600 hover:text-indigo-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here for Print Notes
            </a>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Practice Problems
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Easy</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    <a
                      href="https://leetcode.com/problems/eye-contact-practice"
                      className="text-indigo-600 hover:text-indigo-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Practice maintaining eye contact during conversations
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://leetcode.com/problems/body-language"
                      className="text-indigo-600 hover:text-indigo-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Practice using open and confident body language
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://leetcode.com/problems/active-listening"
                      className="text-indigo-600 hover:text-indigo-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Practice active listening techniques
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
                      href="https://gfg.com/problems/presentation-body-language"
                      className="text-indigo-600 hover:text-indigo-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Practice delivering a short presentation with effective
                      body language
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://codechef.com/problems/group-discussion"
                      className="text-indigo-600 hover:text-indigo-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Practice active listening in group discussions
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://hackerrank.com/challenges/professional-etiquette"
                      className="text-indigo-600 hover:text-indigo-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Practice professional etiquette in different scenarios
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    <a
                      href="https://hackerearth.com/problems/persuasive-presentation"
                      className="text-indigo-600 hover:text-indigo-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deliver a persuasive presentation with strong non-verbal
                      cues
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://codechef.com/problems/mock-interview"
                      className="text-indigo-600 hover:text-indigo-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Participate in a mock interview focusing on non-verbal
                      communication
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://leetcode.com/problems/analyze-social-cues"
                      className="text-indigo-600 hover:text-indigo-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Analyze and interpret non-verbal cues in complex social
                      situations
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
                  Basic Non-Verbal Communication
                </h3>
                <a
                  href="https://www.youtube.com/playlist?list=PLexample1"
                  className="text-indigo-600 hover:text-indigo-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Basic Non-Verbal Communication Playlist
                </a>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Advanced Non-Verbal Communication
                </h3>
                <a
                  href="https://www.youtube.com/playlist?list=PLexample2"
                  className="text-indigo-600 hover:text-indigo-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Advanced Non-Verbal Communication Playlist
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Topics to Learn */}
        <div className="lg:col-span-1 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Topics to Learn
          </h2>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>Introduction to Non-Verbal Communication</strong>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  <a
                    href="https://example.com/body-language"
                    className="text-indigo-600 hover:text-indigo-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Body Language
                  </a>
                </li>
                <li>
                  <a
                    href="https://example.com/facial-expressions"
                    className="text-indigo-600 hover:text-indigo-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facial Expressions
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <strong>Improving Non-Verbal Communication</strong>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  <a
                    href="https://example.com/presentation-skills"
                    className="text-indigo-600 hover:text-indigo-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Presentation Skills
                  </a>
                </li>
                <li>
                  <a
                    href="https://example.com/active-listening"
                    className="text-indigo-600 hover:text-indigo-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Active Listening
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <strong>Professional Etiquette</strong>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  <a
                    href="https://example.com/professional-behavior"
                    className="text-indigo-600 hover:text-indigo-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Professional Behavior
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NonVerbalCommunicationDetails;
