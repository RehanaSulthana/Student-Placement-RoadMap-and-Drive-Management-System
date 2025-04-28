// // import React, { useState } from 'react';
// // import { Code, Youtube, FileText, CheckCircle } from 'lucide-react';

// // const DSA = () => {
// //     const [selectedCategory, setSelectedCategory] = useState(null);
// //     const [completedProblems, setCompletedProblems] = useState({});
// //     const [totalCount, setTotalCount] = useState(0);
// //     const categories = [
// //         { id: 'arrays', name: 'Arrays', icon: <Code className="h-5 w-5" /> },
// //         { id: 'strings', name: 'Strings', icon: <Code className="h-5 w-5" /> },
// //         { id: 'trees', name: 'Trees', icon: <Code className="h-5 w-5" /> },
// //         { id: 'stacks', name: 'Stacks', icon: <Code className="h-5 w-5" /> },
// //         { id: 'heaps', name: 'Heaps', icon: <Code className="h-5 w-5" /> },
// //         { id: 'graphs', name: 'Graphs', icon: <Code className="h-5 w-5" /> },
// //         { id: 'hashTables', name: 'Hash Tables', icon: <Code className="h-5 w-5" /> },
// //         { id: 'sorting', name: 'Sorting', icon: <Code className="h-5 w-5" /> },
// //         { id: 'dynamicProgramming', name: 'Dynamic Programming', icon: <Code className="h-5 w-5" /> },
// //         { id: 'linkedLists', name: 'Linked Lists', icon: <Code className="h-5 w-5" /> },
// //         { id: 'queues', name: 'Queues', icon: <Code className="h-5 w-5" /> },
// //         { id: 'recursion', name: 'Recursion', icon: <Code className="h-5 w-5" /> },
// //         { id: 'backtracking', name: 'Backtracking', icon: <Code className="h-5 w-5" /> },
// //         { id: 'greedy', name: 'Greedy', icon: <Code className="h-5 w-5" /> },


// //     ];

// //     const problems = {
// //         arrays: [
// //             { id: 1, title: 'Two Sum', difficulty: 'Easy', youtubeLink: 'http://youtube.com/arrays/1', articleLink: 'http://article.com/arrays/1', leetCodeLink: 'https://leetcode.com/problems/two-sum/' },
// //             { id: 2, title: 'Maximum Subarray', difficulty: 'Medium', youtubeLink: 'http://youtube.com/arrays/2', articleLink: 'http://article.com/arrays/2', leetCodeLink: 'https://leetcode.com/problems/maximum-subarray/' },
// //             { id: 3, title: 'Merge Sorted Array', difficulty: 'Easy', youtubeLink: 'http://youtube.com/arrays/3', articleLink: 'http://article.com/arrays/3', revisionLink: 'http://revision.com/arrays/3' },
// //             { id: 4, title: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium', youtubeLink: 'http://youtube.com/arrays/4', articleLink: 'http://article.com/arrays/4', revisionLink: 'http://revision.com/arrays/4' },
// //             { id: 5, title: 'Reverse-an-array', difficulty: 'Easy', youtubeLink: 'http://youtube.com/arrays/1', articleLink: 'http://article.com/arrays/1', leetCodeLink: 'https://www.geeksforgeeks.org/program-to-reverse-an-array/' },
// //             { id: 6, title: 'maximum-and-minimum-in-an-array', difficulty: 'Easy', youtubeLink: 'http://youtube.com/arrays/1', articleLink: 'http://article.com/arrays/1', leetCodeLink: 'https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/' },
// //             { id: 7, title: 'kth-smallest-element', difficulty: 'Easy', youtubeLink: 'http://youtube.com/arrays/1', articleLink: 'http://article.com/arrays/1', leetCodeLink: 'https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1' },
// //             { id: 8, title: 'Sort the array without using any sorting algo', difficulty: 'Easy', youtubeLink: 'http://youtube.com/arrays/1', articleLink: 'http://article.com/arrays/1', leetCodeLink: 'Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo'},
// //             { id: 9, title: 'Move all negative elements to one side of the array', difficulty: 'Easy', youtubeLink: 'http://youtube.com/arrays/1', articleLink: 'http://article.com/arrays/1', leetCodeLink: 'https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/' },
// //             { id: 10, title: 'Find the Union and Intersection of the two sorted arrays', difficulty: 'Easy', youtubeLink: 'http://youtube.com/arrays/1', articleLink: 'http://article.com/arrays/1', leetCodeLink: 'https://www.geeksforgeeks.org/problems/union-of-two-arrays3538/1'},
// //             { id: 11, title: 'Rotate Array by One', difficulty: 'Easy', youtubeLink: '', articleLink: '', leetCodeLink: 'https://www.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1' },
// //             { id: 12, title: 'Kadanes Algorithm', difficulty: 'Easy', youtubeLink: '', articleLink: '', leetCodeLink: 'https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1' },
// //             { id: 13, title: 'Minimize the Heights II', difficulty: 'Easy', youtubeLink: '', articleLink: '', leetCodeLink: 'https://www.geeksforgeeks.org/problems/minimize-the-heights3351/1' },
// //             { id: 14, title: 'Minimum Jumps', difficulty: 'Easy', youtubeLink: '', articleLink: '', leetCodeLink: 'https://www.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1' },
// //             { id: 15, title: 'Find the Duplicate Number', difficulty: 'Easy', youtubeLink: '', articleLink: '', leetCodeLink: 'https://leetcode.com/problems/find-the-duplicate-number/description/' },
// //             { id: 16, title: 'Merge two sorted arrays', difficulty: 'Easy', youtubeLink: '', articleLink: '', leetCodeLink: 'https://www.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1' },
// //             { id: 17, title: 'Kadanes algorithm', difficulty: 'Easy', youtubeLink: '', articleLink: '', leetCodeLink: 'https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1' },
// //             { id: 18, title: 'Merge intervals', difficulty: 'Easy', youtubeLink: '', articleLink: '', leetCodeLink: 'https://leetcode.com/problems/merge-intervals/description/' },
// //             { id: 19, title: 'Next permutation', difficulty: 'Easy', youtubeLink: '', articleLink: '', leetCodeLink: 'https://leetcode.com/problems/next-permutation/description/' },
// //             { id: 20, title: 'Count pairs with given sum', difficulty: 'Easy', youtubeLink: '', articleLink: '', leetCodeLink: 'https://www.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1' },
// //             { id: 21, title: 'Common elements', difficulty: 'Easy', youtubeLink: '', articleLink: '', leetCodeLink: 'https://www.geeksforgeeks.org/problems/common-elements1132/1' },
// //             { id: 22, title: 'Rearrange array', difficulty: 'Easy', youtubeLink: 'http://youtube.com/arrays/1', articleLink: 'http://article.com/arrays/1', leetCodeLink: 'https://www.geeksforgeeks.org/rearrange-array-alternating-positive-negative-items-o1-extra-space/' },
// //             { id: 23, title: 'Subarray with 0 sum', difficulty: 'Easy', youtubeLink: '', articleLink: '', leetCodeLink: 'https://www.geeksforgeeks.org/problems/subarray-with-0-sum-1587115621/1' },

            


// //         ],
// //         strings: [
// //             { id: 3, title: 'Valid Anagram', difficulty: 'Easy', youtubeLink: 'http://youtube.com/strings/1', articleLink: 'http://article.com/strings/1', leetCodeLink: 'https://leetcode.com/problems/valid-anagram/' },
// //             { id: 6, title: 'Longest Palindromic Substring', difficulty: 'Medium', youtubeLink: 'http://youtube.com/strings/2', articleLink: 'http://article.com/strings/2',  leetCodeLink: 'https://leetcode.com/problems/longest-palindromic-substring/' },
// //             { id: 7, title: 'String to Integer (atoi)', difficulty: 'Medium', youtubeLink: 'http://youtube.com/strings/3', articleLink: 'http://article.com/strings/3', leetCodeLink: 'https://leetcode.com/problems/string-to-integer-atoi/' },
// //             { id: 8, title: 'Group Anagrams', difficulty: 'Medium', youtubeLink: 'http://youtube.com/strings/4', articleLink: 'http://article.com/strings/4', leetCodeLink: 'https://leetcode.com/problems/group-anagrams/' },

// //         ],

// //         trees: [
// //             { id: 1, title: 'Binary Tree Inorder Traversal', difficulty: 'Easy', youtubeLink: 'http://youtube.com/trees/1', articleLink: 'http://article.com/trees/1', leetCodeLink: 'https://leetcode.com/problems/binary-tree-inorder-traversal/' },
// //             { id: 2, title: 'Binary Tree Level Order Traversal', difficulty: 'Medium', youtubeLink: 'http://youtube.com/trees/2', articleLink: 'http://article.com/trees/2', revisionLink: 'http://revision.com/trees/2' },
// //           ],
// //           stacks: [
// //             { id: 1, title: 'Valid Parentheses', difficulty: 'Easy', youtubeLink: 'http://youtube.com/stacks/1', articleLink: 'http://article.com/stacks/1', leetCodeLink: 'https://leetcode.com/problems/valid-parentheses/' },
// //             { id: 2, title: 'Largest Rectangle in Histogram', difficulty: 'Hard', youtubeLink: 'http://youtube.com/stacks/2', articleLink: 'http://article.com/stacks/2', revisionLink: 'http://revision.com/stacks/2' },
// //           ],
// //           heaps: [
// //             { id: 1, title: 'Kth Largest Element in an Array', difficulty: 'Medium', youtubeLink: 'http://youtube.com/heaps/1', articleLink: 'http://article.com/heaps/1', leetCodeLink: 'https://leetcode.com/problems/kth-largest-element-in-an-array/' },
// //           ],
// //           graphs: [
// //             { id: 1, title: 'Number of Islands', difficulty: 'Medium', youtubeLink: 'http://youtube.com/graphs/1', articleLink: 'http://article.com/graphs/1', leetCodeLink: 'https://leetcode.com/problems/number-of-islands/' },
// //           ],
// //           hashTables: [
// //             { id: 1, title: 'Two Sum', difficulty: 'Easy', youtubeLink: 'http://youtube.com/hashTables/1', articleLink: 'http://article.com/hashTables/1', leetCodeLink: 'https://leetcode.com/problems/two-sum/' },
// //           ],
// //           sorting: [
// //             { id: 1, title: 'Merge Sort', difficulty: 'Medium', youtubeLink: 'http://youtube.com/sorting/1', articleLink: 'http://article.com/sorting/1' },
// //           ],
// //           dynamicProgramming: [
// //             { id: 1, title: 'Climbing Stairs', difficulty: 'Easy', youtubeLink: 'http://youtube.com/dynamicProgramming/1', articleLink: 'http://article.com/dynamicProgramming/1', leetCodeLink: 'https://leetcode.com/problems/climbing-stairs/' },
// //           ],
// //           linkedLists: [
// //             { id: 1, title: 'Reverse Linked List', difficulty: 'Easy', youtubeLink: 'http://youtube.com/linkedLists/1', articleLink: 'http://article.com/linkedLists/1', leetCodeLink: 'https://leetcode.com/problems/reverse-linked-list/' },
// //           ],
// //           queues: [
// //             { id: 1, title: 'Implement Queue using Stacks', difficulty: 'Easy', youtubeLink: 'http://youtube.com/queues/1', articleLink: 'http://article.com/queues/1', leetCodeLink: 'https://leetcode.com/problems/implement-queue-using-stacks/' },
// //           ],
// //           recursion: [
// //             { id: 1, title: 'Pow(x, n)', difficulty: 'Medium', youtubeLink: 'http://youtube.com/recursion/1', articleLink: 'http://article.com/recursion/1', leetCodeLink: 'https://leetcode.com/problems/powx-n/' },
// //           ],
// //           backtracking: [
// //             { id: 1, title: 'Combination Sum', difficulty: 'Medium', youtubeLink: 'http://youtube.com/backtracking/1', articleLink: 'http://article.com/backtracking/1', leetCodeLink: 'https://leetcode.com/problems/combination-sum/' },
// //           ],
// //           greedy: [
// //             { id: 1, title: 'Jump Game', difficulty: 'Medium', youtubeLink: 'http://youtube.com/greedy/1', articleLink: 'http://article.com/greedy/1', leetCodeLink: 'https://leetcode.com/problems/jump-game/' },
// //           ],
// //     };

// //     const handleComplete = (categoryId, problemId) => {
// //         setCompletedProblems(prev => ({
// //             ...prev,
// //             [categoryId]: {
// //                 ...prev[categoryId],
// //                 [problemId]: !prev[categoryId]?.[problemId],
// //             },
// //         }));
// //     };

// //     return (
// //         <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
// //             <div className="max-w-7xl mx-auto">
// //                 <h1 className="text-3xl font-bold text-gray-900 mb-8">DSA Concepts</h1>

// //                 {selectedCategory ? (
// //                     <div>
// //                         <button onClick={() => setSelectedCategory(null)} className="mb-4 text-indigo-600 hover:text-indigo-800">
// //                             Back to Categories
// //                         </button>
// //                         <h2 className="text-2xl font-semibold text-gray-900 mb-4">Practice Problems - {categories.find(cat => cat.id === selectedCategory).name}</h2>
// //                         <div className="space-y-4">
// //                             {problems[selectedCategory].map(problem => (
// //                                 <div key={problem.id} className="bg-white rounded-lg shadow-lg p-6">
// //                                     <h3 className="text-xl font-semibold text-gray-900">{problem.title}</h3>
// //                                     <p className="text-gray-600">Difficulty: {problem.difficulty}</p>
// //                                     <div className="mt-4 flex items-center space-x-4">
// //                                         <a href={problem.leetCodeLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
// //                                             Practice
// //                                         </a>
// //                                         {problem.youtubeLink && (
// //                                             <a href={problem.youtubeLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 flex items-center">
// //                                                 <Youtube className="h-5 w-5 mr-1" /> YouTube
// //                                             </a>
// //                                         )}
// //                                         {problem.articleLink && (
// //                                             <a href={problem.articleLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 flex items-center">
// //                                                 <FileText className="h-5 w-5 mr-1" /> Article
// //                                             </a>
// //                                         )}
// //                                         <button onClick={() => {handleComplete(selectedCategory, problem.id) 
// //                                             setTotalCount(totalCount + 1);
// //                                         }} className="text-green-600 hover:text-green-800 flex items-center">
// //                                             {completedProblems[selectedCategory]?.[problem.id] ? <CheckCircle className="h-5 w-5 mr-1" /> : <CheckCircle className="h-5 w-5 mr-1 text-gray-300" />}
// //                                             {completedProblems[selectedCategory]?.[problem.id] ? 'Completed' : 'Mark Complete'}
// //                                         </button>
// //                                     </div>
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     </div>
// //                 ) : (
// //                     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
// //                         {categories.map(category => (
// //                             <button key={category.id} onClick={() => setSelectedCategory(category.id)} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-md transition-shadow">
// //                                 <div className="flex items-center justify-center mb-4">
// //                                     {category.icon}
// //                                 </div>
// //                                 <h3 className="text-lg font-semibold text-gray-900 text-center">{category.name}</h3>
// //                             </button>
// //                         ))}
// //                     </div>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // };

// // export default DSA;

// import React, { useState } from 'react';
// import { Code, Youtube, FileText, CheckCircle } from 'lucide-react';

// const DSA = () => {
//     const [selectedCategory, setSelectedCategory] = useState(null);
//     const [completedProblems, setCompletedProblems] = useState({});
//     const [totalCount, setTotalCount] = useState(0);
//     const categories = [
//         { id: 'arrays', name: 'Arrays', icon: <Code className="h-5 w-5" /> },
//         { id: 'strings', name: 'Strings', icon: <Code className="h-5 w-5" /> },
//         { id: 'trees', name: 'Trees', icon: <Code className="h-5 w-5" /> },
//         { id: 'stacks', name: 'Stacks', icon: <Code className="h-5 w-5" /> },
//         { id: 'heaps', name: 'Heaps', icon: <Code className="h-5 w-5" /> },
//         { id: 'graphs', name: 'Graphs', icon: <Code className="h-5 w-5" /> },
//         { id: 'hashTables', name: 'Hash Tables', icon: <Code className="h-5 w-5" /> },
//         { id: 'sorting', name: 'Sorting', icon: <Code className="h-5 w-5" /> },
//         { id: 'dynamicProgramming', name: 'Dynamic Programming', icon: <Code className="h-5 w-5" /> },
//         { id: 'linkedLists', name: 'Linked Lists', icon: <Code className="h-5 w-5" /> },
//         { id: 'queues', name: 'Queues', icon: <Code className="h-5 w-5" /> },
//         { id: 'recursion', name: 'Recursion', icon: <Code className="h-5 w-5" /> },
//         { id: 'backtracking', name: 'Backtracking', icon: <Code className="h-5 w-5" /> },
//         { id: 'greedy', name: 'Greedy', icon: <Code className="h-5 w-5" /> },


//     ];

//     const problems = {
      
//         arrays: [
//             { id: 1, title: 'Two Sum', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=KLlXCFG5TnA', articleLink: 'http://article.com/arrays/1', leetCodeLink: 'https://leetcode.com/problems/two-sum/' },
//             { id: 2, title: 'Maximum Subarray', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=86CQq3pKSUw', articleLink: 'http://article.com/arrays/2', leetCodeLink: 'https://leetcode.com/problems/maximum-subarray/' },
//             { id: 3, title: 'Merge Sorted Array', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=P1Ic85RarKY', articleLink: 'http://article.com/arrays/3', revisionLink: 'http://revision.com/arrays/3' },
//             { id: 4, title: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=nIVW4P8b1VA', articleLink: 'http://article.com/arrays/4', revisionLink: 'http://revision.com/arrays/4' },
//             { id: 5, title: 'Reverse-an-array', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=Xb2j3Csj3MQ', articleLink: 'http://article.com/arrays/5', leetCodeLink: 'https://www.geeksforgeeks.org/program-to-reverse-an-array/' },
//             { id: 6, title: 'Maximum and Minimum in an Array', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=7paXQqoY_2M', articleLink: 'http://article.com/arrays/6', leetCodeLink: 'https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/' },
//             { id: 7, title: 'Kth Smallest Element', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=FrWq2rznPLQ', articleLink: 'http://article.com/arrays/7', leetCodeLink: 'https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1' },
//             { id: 8, title: 'Sort the array without using any sorting algo', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=Z8svOqamag8', articleLink: 'http://article.com/arrays/8', leetCodeLink: 'https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/' },
//             { id: 9, title: 'Move all negative elements to one side of the array', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=-H1_7QXw3PQ', articleLink: 'http://article.com/arrays/9', leetCodeLink: 'https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/' },
//             { id: 10, title: 'Find the Union and Intersection of the two sorted arrays', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=WTzjTskDFMg', articleLink: 'http://article.com/arrays/10', leetCodeLink: 'https://www.geeksforgeeks.org/problems/union-of-two-arrays3538/1' },
//             { id: 11, title: 'Rotate Array by One', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=RoVlyYsxDB8', articleLink: '', leetCodeLink: 'https://www.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1' },
//             { id: 12, title: 'Kadane\'s Algorithm', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=w_KEocd__20', articleLink: '', leetCodeLink: 'https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1' },
//             { id: 13, title: 'Minimize the Heights II', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=tCVOQX3lWeI', articleLink: '', leetCodeLink: 'https://www.geeksforgeeks.org/problems/minimize-the-heights3351/1' },
//             { id: 14, title: 'Minimum Jumps', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=zckH-s58XCo', articleLink: '', leetCodeLink: 'https://www.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1' },
//             { id: 15, title: 'Find the Duplicate Number', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=32Ll35mhWg0', articleLink: '', leetCodeLink: 'https://leetcode.com/problems/find-the-duplicate-number/description/' },
//             { id: 16, title: 'Merge two sorted arrays', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=n7uwj04E0I4', articleLink: '', leetCodeLink: 'https://www.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1' },
//             { id: 17, title: 'Merge Intervals', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=FXWRE67PLL0', articleLink: '', leetCodeLink: 'https://leetcode.com/problems/merge-intervals/description/' },
//             { id: 18, title: 'Next Permutation', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=6qXO72FkqwM', articleLink: '', leetCodeLink: 'https://leetcode.com/problems/next-permutation/description/' },
//             { id: 19, title: 'Count pairs with given sum', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=2rX9rzn2Xco', articleLink: '', leetCodeLink: 'https://www.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1' },
//             { id: 20, title: 'Common elements', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=Igr2bRrOHlM', articleLink: '', leetCodeLink: 'https://www.geeksforgeeks.org/problems/common-elements1132/1' },
//             { id: 21, title: 'Rearrange array', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=ZGHIVpY4H24', articleLink: 'http://article.com/arrays/21', leetCodeLink: 'https://www.geeksforgeeks.org/rearrange-array-alternating-positive-negative-items-o1-extra-space/' },
//             { id: 22, title: 'Subarray with 0 sum', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=TWHytKnOPaQ', articleLink: '', leetCodeLink: 'https://www.geeksforgeeks.org/problems/subarray-with-0-sum-1587115621/1' },
           
        

//         ],
//         strings: [
            
//                 { id: 3, title: 'Valid Anagram', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=9UtInBqnCgA', articleLink: 'http://article.com/strings/1', leetCodeLink: 'https://leetcode.com/problems/valid-anagram/' },
//                 { id: 6, title: 'Longest Palindromic Substring', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=ZJUGtWObroc', articleLink: 'http://article.com/strings/2', leetCodeLink: 'https://leetcode.com/problems/longest-palindromic-substring/' },
//                 { id: 7, title: 'String to Integer (atoi)', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=Q6Q1NJrpeew', articleLink: 'http://article.com/strings/3', leetCodeLink: 'https://leetcode.com/problems/string-to-integer-atoi/' },
//                 { id: 8, title: 'Group Anagrams', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=vzdNOK2oB2E', articleLink: 'http://article.com/strings/4', leetCodeLink: 'https://leetcode.com/problems/group-anagrams/' },
//                 { id: 9, title: 'Valid Parentheses', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=WTzjTskDFMg', articleLink: 'http://article.com/strings/5', leetCodeLink: 'https://leetcode.com/problems/valid-parentheses/' },
//                 { id: 10, title: 'Implement strStr()', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=JoF0Z7nVSrA', articleLink: 'http://article.com/strings/6', leetCodeLink: 'https://leetcode.com/problems/implement-strstr/' },
//                 { id: 11, title: 'Reverse String', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=TfgWB4fXEP8', articleLink: 'http://article.com/strings/7', leetCodeLink: 'https://leetcode.com/problems/reverse-string/' },
//                 { id: 12, title: 'Reverse Words in a String', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=5GU9XiqmYCw', articleLink: 'http://article.com/strings/8', leetCodeLink: 'https://leetcode.com/problems/reverse-words-in-a-string/' },
//                 { id: 13, title: 'Longest Common Prefix', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=0sWShKIJoo4', articleLink: 'http://article.com/strings/9', leetCodeLink: 'https://leetcode.com/problems/longest-common-prefix/' },
//                 { id: 14, title: 'Find All Anagrams in a String', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=G8xtZy0fDKg', articleLink: 'http://article.com/strings/10', leetCodeLink: 'https://leetcode.com/problems/find-all-anagrams-in-a-string/' },
//                 { id: 15, title: 'Minimum Window Substring', difficulty: 'Hard', youtubeLink: 'https://www.youtube.com/watch?v=jSto0O4AJbM', articleLink: 'http://article.com/strings/11', leetCodeLink: 'https://leetcode.com/problems/minimum-window-substring/' },
//                 { id: 16, title: 'Check if a String is a Subsequence', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=99RVfqklbCE', articleLink: 'http://article.com/strings/12', leetCodeLink: 'https://leetcode.com/problems/is-subsequence/' },
//                 { id: 17, title: 'Valid Palindrome', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=3jvWodd7ht0', articleLink: 'http://article.com/strings/13', leetCodeLink: 'https://leetcode.com/problems/valid-palindrome/' },
//                 { id: 18, title: 'Count and Say', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=V0IG6sBfZWI', articleLink: 'http://article.com/strings/14', leetCodeLink: 'https://leetcode.com/problems/count-and-say/' },
//                 { id: 19, title: 'Encode and Decode Strings', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=B1k_sxOSgv8', articleLink: 'http://article.com/strings/15', leetCodeLink: 'https://leetcode.com/problems/encode-and-decode-strings/' },
//                 { id: 20, title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=3IETreEybaA', articleLink: 'http://article.com/strings/16', leetCodeLink: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
//                 { id: 21, title: 'Zigzag Conversion', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=Q2Tw6gcVEwc', articleLink: 'http://article.com/strings/17', leetCodeLink: 'https://leetcode.com/problems/zigzag-conversion/' },
//                 { id: 22, title: 'Multiply Strings', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=EdR3V5DBgyo', articleLink: 'http://article.com/strings/18', leetCodeLink: 'https://leetcode.com/problems/multiply-strings/' },
//                 { id: 23, title: 'Compare Version Numbers', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=KjZ1mUQWRUQ', articleLink: 'http://article.com/strings/19', leetCodeLink: 'https://leetcode.com/problems/compare-version-numbers/' },
//                 { id: 24, title: 'Restore IP Addresses', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=61tN4YEdiTM', articleLink: 'http://article.com/strings/20', leetCodeLink: 'https://leetcode.com/problems/restore-ip-addresses/' }
//             ],
            

//         trees: [
           
//                 { id: 1, title: 'Binary Tree Inorder Traversal', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=EGJOxHz_aXA', leetCodeLink: 'https://leetcode.com/problems/binary-tree-inorder-traversal/' },
//                 { id: 2, title: 'Binary Tree Level Order Traversal', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=oN3JUzge_Bg', leetCodeLink: 'https://leetcode.com/problems/binary-tree-level-order-traversal/' },
//                 { id: 3, title: 'Binary Tree Preorder Traversal', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=oN3JUzge_Bg', leetCodeLink: 'https://leetcode.com/problems/binary-tree-preorder-traversal/' },
//                 { id: 4, title: 'Binary Tree Postorder Traversal', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=oN3JUzge_Bg', leetCodeLink: 'https://leetcode.com/problems/binary-tree-postorder-traversal/' },
//                 { id: 5, title: 'Symmetric Tree', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=LTqqxES2LMs', leetCodeLink: 'https://leetcode.com/problems/symmetric-tree/' },
//                 { id: 6, title: 'Maximum Depth of Binary Tree', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=oN3JUzge_Bg', leetCodeLink: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/' },
//                 { id: 7, title: 'Minimum Depth of Binary Tree', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=oN3JUzge_Bg', leetCodeLink: 'https://leetcode.com/problems/minimum-depth-of-binary-tree/' },
//                 { id: 8, title: 'Path Sum', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=oN3JUzge_Bg', leetCodeLink: 'https://leetcode.com/problems/path-sum/' },
//                 { id: 9, title: 'Path Sum II', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=oN3JUzge_Bg', leetCodeLink: 'https://leetcode.com/problems/path-sum-ii/' },
//                 { id: 10, title: 'Flatten Binary Tree to Linked List', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=oN3JUzge_Bg', leetCodeLink: 'https://leetcode.com/problems/flatten-binary-tree-to-linked-list/' },
//                 { id: 11, title: 'Populating Next Right Pointers in Each Node', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=oN3JUzge_Bg', leetCodeLink: 'https://leetcode.com/problems/populating-next-right-pointers-in-each-node/' },
//                 { id: 12, title: 'Populating Next Right Pointers in Each Node II', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=oN3JUzge_Bg', leetCodeLink: 'https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/' },
//                 { id: 13, title: 'Convert Sorted Array to Binary Search Tree', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=oN3JUzge_Bg', leetCodeLink: 'https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/' },
//                 { id: 14, title: 'Convert Sorted List to Binary Search Tree', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=oN3JUzge_Bg', leetCodeLink: 'https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/' },
//                 { id: 15, title: 'Balanced Binary Tree', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=oN3JUzge_Bg', leetCodeLink: 'https://leetcode.com/problems/balanced-binary-tree/' },
//                 { id: 16, title: 'Same Tree', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=YS6lJ14UUCs', leetCodeLink: 'https://leetcode.com/problems/same-tree/' },
//                 { id: 17, title: 'Subtree of Another Tree', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=oN3JUzge_Bg', leetCodeLink: 'https://leetcode.com/problems/subtree-of-another-tree/' },
//                 { id: 18, title: 'Lowest Common Ancestor of a Binary Tree', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=oN3JUzge_Bg', leetCodeLink: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/' },
//                 { id: 19, title: 'Binary Tree Right Side View', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=oN3JUzge_Bg', leetCodeLink: 'https://leetcode.com/problems/binary-tree-right-side-view/' },
//                 { id: 20, title: 'Binary Tree Zigzag Level Order Traversal', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=oN3JUzge_Bg', leetCodeLink: 'https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/' }
//             ],
            
//           stacks: [
             
//                 { id: 1, title: 'Valid Parentheses', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/valid-parentheses/', youtubeLink: 'https://www.youtube.com/watch?v=WTzjTskDFMg' },
//                 { id: 2, title: 'Min Stack', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/min-stack/', youtubeLink: 'https://www.youtube.com/watch?v=MOY3_fgo6Jw' },
//                 { id: 3, title: 'Evaluate Reverse Polish Notation', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/', youtubeLink: 'https://www.youtube.com/watch?v=iu0082c4HDE' },
//                 { id: 4, title: 'Generate Parentheses', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/generate-parentheses/', youtubeLink: 'https://www.youtube.com/watch?v=sz1qaKt0KGQ' },
//                 { id: 5, title: 'Daily Temperatures', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/daily-temperatures/', youtubeLink: 'https://www.youtube.com/watch?v=cTBiBSnjO3c' },
//                 { id: 6, title: 'Next Greater Element I', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/next-greater-element-i/', youtubeLink: 'https://www.youtube.com/watch?v=68a1Dc_qVq4' },
//                 { id: 7, title: 'Next Greater Element II', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/next-greater-element-ii/', youtubeLink: 'https://www.youtube.com/watch?v=RkXTxmA7D4w' },
//                 { id: 8, title: 'Largest Rectangle in Histogram', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/largest-rectangle-in-histogram/', youtubeLink: 'https://www.youtube.com/watch?v=zx5Sw9130L0' },
//                 { id: 9, title: 'Trapping Rain Water', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/trapping-rain-water/', youtubeLink: 'https://www.youtube.com/watch?v=ZI2z5pq0TqA' },
//                 { id: 10, title: 'Simplify Path', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/simplify-path/', youtubeLink: 'https://www.youtube.com/watch?v=QZkLWgWdygA' },
//                 { id: 11, title: 'Basic Calculator', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/basic-calculator/', youtubeLink: 'https://www.youtube.com/watch?v=081AqOuasw0' },
//                 { id: 12, title: 'Basic Calculator II', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/basic-calculator-ii/', youtubeLink: 'https://www.youtube.com/watch?v=2wF1Ot0MP7U' },
//                 { id: 13, title: 'Basic Calculator III', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/basic-calculator-iii/', youtubeLink: 'https://www.youtube.com/watch?v=6ZRhq2oFCUk' },
//                 { id: 14, title: 'Decode String', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/decode-string/', youtubeLink: 'https://www.youtube.com/watch?v=qB0zZpBJlh8' },
//                 { id: 15, title: 'Longest Valid Parentheses', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/longest-valid-parentheses/', youtubeLink: 'https://www.youtube.com/watch?v=VdQuwtEd10M' },
//                 { id: 16, title: 'Remove K Digits', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/remove-k-digits/', youtubeLink: 'https://www.youtube.com/watch?v=3QJzHqNAEXs' },
//                 { id: 17, title: 'Asteroid Collision', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/asteroid-collision/', youtubeLink: 'https://www.youtube.com/watch?v=LN7KjRszjk4' },
//                 { id: 18, title: 'Implement Stack using Queues', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/implement-stack-using-queues/', youtubeLink: 'https://www.youtube.com/watch?v=F1fvCwBHPQ8' },
//                 { id: 19, title: 'Implement Queue using Stacks', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/implement-queue-using-stacks/', youtubeLink: 'https://www.youtube.com/watch?v=3Et9MrMc02A' },
//                 { id: 20, title: 'Design a Stack With Increment Operation', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/design-a-stack-with-increment-operation/', youtubeLink: 'https://www.youtube.com/watch?v=K5AVJVjdmL0' }
//             ],
//           heaps: [

//                 { id: 1, title: 'Kth Largest Element in an Array', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/kth-largest-element-in-an-array/', youtubeLink: 'https://www.youtube.com/watch?v=FrWq2rznPLQ' },
//                 { id: 2, title: 'Top K Frequent Elements', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/top-k-frequent-elements/', youtubeLink: 'https://www.youtube.com/watch?v=YPTqKIgVk-k' },
//                 { id: 3, title: 'K Closest Points to Origin', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/k-closest-points-to-origin/', youtubeLink: 'https://www.youtube.com/watch?v=eaYX0Ee0Kcg' },
//                 { id: 4, title: 'Kth Smallest Element in a Sorted Matrix', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/', youtubeLink: 'https://www.youtube.com/watch?v=G5wLN4UweAM' },
//                 { id: 5, title: 'Find Median from Data Stream', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/find-median-from-data-stream/', youtubeLink: 'https://www.youtube.com/watch?v=itmhHWaHupI' },
//                 { id: 6, title: 'Sliding Window Maximum', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/sliding-window-maximum/', youtubeLink: 'https://www.youtube.com/watch?v=DfljaUwZsOk' },
//                 { id: 7, title: 'Merge k Sorted Lists', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/merge-k-sorted-lists/', youtubeLink: 'https://www.youtube.com/watch?v=kpCesr9VXDA' },
//                 { id: 8, title: 'Kth Largest Element in a Stream', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/kth-largest-element-in-a-stream/', youtubeLink: 'https://www.youtube.com/watch?v=hOjcdrqMoQ8' },
//                 { id: 9, title: 'Last Stone Weight', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/last-stone-weight/', youtubeLink: 'https://www.youtube.com/watch?v=R6W8HPc4Z6k' },
//                 { id: 10, title: 'Task Scheduler', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/task-scheduler/', youtubeLink: 'https://www.youtube.com/watch?v=s8p8ukTyA2I' },
//                 { id: 11, title: 'Reorganize String', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/reorganize-string/', youtubeLink: 'https://www.youtube.com/watch?v=zaM_GLLvysw' },
//                 { id: 12, title: 'Merge Intervals', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/merge-intervals/', youtubeLink: 'https://www.youtube.com/watch?v=2JzRBPFYbKE' },
//                 { id: 13, title: 'Smallest Range Covering Elements from K Lists', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/', youtubeLink: 'https://www.youtube.com/watch?v=3hT0ukh7NIg' },
//                 { id: 14, title: 'The Skyline Problem', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/the-skyline-problem/', youtubeLink: 'https://www.youtube.com/watch?v=GSBLe8cKu0s' },
//                 { id: 15, title: 'Furthest Building You Can Reach', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/furthest-building-you-can-reach/', youtubeLink: 'https://www.youtube.com/watch?v=1Wb5vcfhZ3c' },
//                 { id: 16, title: 'Construct Target Array With Multiple Sums', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/construct-target-array-with-multiple-sums/', youtubeLink: 'https://www.youtube.com/watch?v=IVF0zcqr9Dg' },
//                 { id: 17, title: 'Minimum Cost to Connect Sticks', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/minimum-cost-to-connect-sticks/', youtubeLink: 'https://www.youtube.com/watch?v=3dqR2nYEgoI' },
//                 { id: 18, title: 'Kth Largest Element in a Stream', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/kth-largest-element-in-a-stream/', youtubeLink: 'https://www.youtube.com/watch?v=hOjcdrqMoQ8' },
//                 { id: 19, title: 'Find K Pairs with Smallest Sums', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/find-k-pairs-with-smallest-sums/', youtubeLink: 'https://www.youtube.com/watch?v=1DLqclH9VDE' },
//                 { id: 20, title: 'IPO', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/ipo/', youtubeLink: 'https://www.youtube.com/watch?v=peQyZFu1MEk' }
//             ],
            
//           graphs: [
            
//                 { id: 1, title: 'Number of Islands', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/number-of-islands/', youtubeLink: 'https://www.youtube.com/watch?v=muncqlKJrH0' },
//                 { id: 2, title: 'Clone Graph', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/clone-graph/', youtubeLink: 'https://www.youtube.com/watch?v=mQeF6bN8hMk' },
//                 { id: 3, title: 'Course Schedule', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/course-schedule/', youtubeLink: 'https://www.youtube.com/watch?v=EgI5nU9etnU' },
//                 { id: 4, title: 'Course Schedule II', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/course-schedule-ii/', youtubeLink: 'https://www.youtube.com/watch?v=Akt3glAwyfY' },
//                 { id: 5, title: 'Graph Valid Tree', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/graph-valid-tree/', youtubeLink: 'https://www.youtube.com/watch?v=bXsUuownnoQ' },
//                 { id: 6, title: 'Pacific Atlantic Water Flow', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/pacific-atlantic-water-flow/', youtubeLink: 'https://www.youtube.com/watch?v=krL3r7MY7Dc' },
//                 { id: 7, title: 'Word Ladder', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/word-ladder/', youtubeLink: 'https://www.youtube.com/watch?v=h9iTnkgv05E' },
//                 { id: 8, title: 'Word Ladder II', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/word-ladder-ii/', youtubeLink: 'https://www.youtube.com/watch?v=ZVJ3asMoZ18' },
//                 { id: 9, title: 'Alien Dictionary', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/alien-dictionary/', youtubeLink: 'https://www.youtube.com/watch?v=6kTZYvNNyps' },
//                 { id: 10, title: 'Cheapest Flights Within K Stops', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/', youtubeLink: 'https://www.youtube.com/watch?v=5eIK3zUdYmE' },
//                 { id: 11, title: 'Network Delay Time', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/network-delay-time/', youtubeLink: 'https://www.youtube.com/watch?v=EaphyqKU4PQ' },
//                 { id: 12, title: 'Rotting Oranges', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/rotting-oranges/', youtubeLink: 'https://www.youtube.com/watch?v=y704fEOx0s0' },
//                 { id: 13, title: 'Surrounded Regions', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/surrounded-regions/', youtubeLink: 'https://www.youtube.com/watch?v=9z2BunfoZ5Y' },
//                 { id: 14, title: 'Critical Connections in a Network', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/critical-connections-in-a-network/', youtubeLink: 'https://www.youtube.com/watch?v=2rjZH0-2lhk' },
//                 { id: 15, title: 'Reconstruct Itinerary', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/reconstruct-itinerary/', youtubeLink: 'https://www.youtube.com/watch?v=WYqsg5dziaQ' },
//                 { id: 16, title: 'Find Eventual Safe States', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/find-eventual-safe-states/', youtubeLink: 'https://www.youtube.com/watch?v=2gtg3VsDGyc' },
//                 { id: 17, title: 'All Paths From Source to Target', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/all-paths-from-source-to-target/', youtubeLink: 'https://www.youtube.com/watch?v=CYnvDzMprdc' },
//                 { id: 18, title: 'Accounts Merge', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/accounts-merge/', youtubeLink: 'https://www.youtube.com/watch?v=0M_kIqhwbFo' },
//                 { id: 19, title: 'Redundant Connection', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/redundant-connection/', youtubeLink: 'https://www.youtube.com/watch?v=FXWRE67PLL0' },
//                 { id: 20, title: 'Redundant Connection II', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/redundant-connection-ii/', youtubeLink: 'https://www.youtube.com/watch?v=LnHSOy7E9vE' },
//                 { id: 21, title: 'Minimum Height Trees', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/minimum-height-trees/', youtubeLink: 'https://www.youtube.com/watch?v=ivl0yY1p8t4' },
//                 { id: 22, title: 'Shortest Path in Binary Matrix', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/shortest-path-in-binary-matrix/', youtubeLink: 'https://www.youtube.com/watch?v=U7oOECVd5lQ' },
//                 { id: 23, title: 'Path With Minimum Effort', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/path-with-minimum-effort/', youtubeLink: 'https://www.youtube.com/watch?v=0ytpZyiZFhA' },
//                 { id: 24, title: 'Swim in Rising Water', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/swim-in-rising-water/', youtubeLink: 'https://www.youtube.com/watch?v=amvrKlMLuGY' },
//                 { id: 25, title: 'Evaluate Division', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/evaluate-division/', youtubeLink: 'https://www.youtube.com/watch?v=UwpvK6Ozd6A' },
//                 { id: 26, title: 'Reorder Routes to Make All Paths Lead to the City Zero', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/', youtubeLink: 'https://www.youtube.com/watch?v=ReAxp2J1q4E' },
//                 { id: 27, title: 'Accounts Merge', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/accounts-merge/', youtubeLink: 'https://www.youtube.com/watch?v=0M_kIqhwbFo' },
//                 { id: 28, title: 'Critical Connections in a Network', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/critical-connections-in-a-network/', youtubeLink: 'https://www.youtube.com/watch?v=2rjZH0-2lhk' },
//                 { id: 29, title: 'Find the City With the Smallest Number of Neighbors at a Threshold Distance', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/', youtubeLink: 'https://www.youtube.com/watch?v=Jg4E4KZstFE' },
//                 { id: 30, title: 'Possible Bipartition', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/possible-bipartition/', youtubeLink: 'https://www.youtube.com/watch?v=0ACfAqs8mm0' }
            
//             ],
            
//           hashTables: [
//             { id: 1, title: 'Two Sum', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/two-sum/', youtubeLink: 'https://www.youtube.com/watch?v=KLlXCFG5TnA' },
//     { id: 2, title: 'Valid Anagram', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/valid-anagram/', youtubeLink: 'https://www.youtube.com/watch?v=9UtInBqnCgA' },
//     { id: 3, title: 'Group Anagrams', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/group-anagrams/', youtubeLink: 'https://www.youtube.com/watch?v=vzdNOK2oB2E' },
//     { id: 4, title: 'Top K Frequent Elements', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/top-k-frequent-elements/', youtubeLink: 'https://www.youtube.com/watch?v=YPTqKIgVk-k' },
//     { id: 5, title: 'Contains Duplicate', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/contains-duplicate/', youtubeLink: 'https://www.youtube.com/watch?v=3OamzN90kPg' },
//     { id: 6, title: 'Intersection of Two Arrays II', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/intersection-of-two-arrays-ii/', youtubeLink: 'https://www.youtube.com/watch?v=O(N+M)' },
//     { id: 7, title: 'Isomorphic Strings', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/isomorphic-strings/', youtubeLink: 'https://www.youtube.com/watch?v=9x7rxHGoXyE' },
//     { id: 8, title: 'Happy Number', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/happy-number/', youtubeLink: 'https://www.youtube.com/watch?v=ljz85bxOYJ0' },
//     { id: 9, title: 'Ransom Note', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/ransom-note/', youtubeLink: 'https://www.youtube.com/watch?v=0QczhGWeB3g' },
//     { id: 10, title: 'First Unique Character in a String', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/first-unique-character-in-a-string/', youtubeLink: 'https://www.youtube.com/watch?v=oqr1WwtYHXA' },
//     { id: 11, title: 'Word Pattern', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/word-pattern/', youtubeLink: 'https://www.youtube.com/watch?v=K8cB8B0OjuA' },
//     { id: 12, title: 'Longest Consecutive Sequence', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/longest-consecutive-sequence/', youtubeLink: 'https://www.youtube.com/watch?v=P6RZZMu_maU' },
//     { id: 13, title: '4Sum II', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/4sum-ii/', youtubeLink: 'https://www.youtube.com/watch?v=K20Tx8cdwYY' },
//     { id: 14, title: 'Subarray Sum Equals K', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/subarray-sum-equals-k/', youtubeLink: 'https://www.youtube.com/watch?v=20v8zSo2v18' },
//     { id: 15, title: 'Contiguous Array', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/contiguous-array/', youtubeLink: 'https://www.youtube.com/watch?v=9ZbBhdQvGOc' },
//     { id: 16, title: 'Binary Subarrays With Sum', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/binary-subarrays-with-sum/', youtubeLink: 'https://www.youtube.com/watch?v=TrXAqydKqpg' },
//     { id: 17, title: 'Find All Anagrams in a String', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/find-all-anagrams-in-a-string/', youtubeLink: 'https://www.youtube.com/watch?v=G8xtZy0fDKg' },
//     { id: 18, title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', youtubeLink: 'https://www.youtube.com/watch?v=3IETreEybaA' },
//     { id: 19, title: 'Minimum Window Substring', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/minimum-window-substring/', youtubeLink: 'https://www.youtube.com/watch?v=jSto0O4AJbM' },
//     { id: 20, title: 'LFU Cache', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/lfu-cache/', youtubeLink: 'https://www.youtube.com/watch?v=0PSB9y8ehbk' },
//     { id: 21, title: 'LRU Cache', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/lru-cache/', youtubeLink: 'https://www.youtube.com/watch?v=7ABFKPK2hD4' },
//     { id: 22, title: 'Design HashMap', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/design-hashmap/', youtubeLink: 'https://www.youtube.com/watch?v=0IAPZzGSbME' },
//     { id: 23, title: 'Design HashSet', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/design-hashset/', youtubeLink: 'https://www.youtube.com/watch?v=EMqD-6XSY_8' },
//     { id: 24, title: 'Max Points on a Line', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/max-points-on-a-line/', youtubeLink: 'https://www.youtube.com/watch?v=n5QY3x_GNDg' },
//     { id: 25, title: 'Substring with Concatenation of All Words', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/substring-with-concatenation-of-all-words/', youtubeLink: 'https://www.youtube.com/watch?v=DoANj1JiJ3Q' },
//  ],
//  sorting :[
//     { id: 1, title: 'Merge Sort', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=alJswNJ4P3U', articleLink: 'http://article.com/sorting/1' },
//     { id: 2, title: 'Quick Sort', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=Hoixgm4-P4M' },
//     { id: 3, title: 'Bubble Sort', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=nmhjrI-aW5o' },
//     { id: 4, title: 'Selection Sort', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=5KjapFQNxUo' },
//     { id: 5, title: 'Insertion Sort', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=JU767SDMDvA' },
//     { id: 6, title: 'Heap Sort', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=HqPJF2L5h9U' },
//     { id: 7, title: 'Counting Sort', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=OKd534EWcdk' },
//     { id: 8, title: 'Radix Sort', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=XiuSW_mEn7g' },
//     { id: 9, title: 'Bucket Sort', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=geVyIsFpxUs' },
//     { id: 10, title: 'Shell Sort', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=CiDPT1xM1sc' },
//     { id: 11, title: 'Sort Colors (Dutch National Flag)', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/sort-colors/', youtubeLink: 'https://www.youtube.com/watch?v=uvB-Ns_TVis' },
//     { id: 12, title: 'Kth Largest Element in an Array', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/kth-largest-element-in-an-array/', youtubeLink: 'https://www.youtube.com/watch?v=XEmy13g1Qxc' },
//     { id: 13, title: 'Merge Intervals', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/merge-intervals/', youtubeLink: 'https://www.youtube.com/watch?v=IexN60k62jo' },
//     { id: 14, title: 'Meeting Rooms II', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/meeting-rooms-ii/', youtubeLink: 'https://www.youtube.com/watch?v=FdzJmTCVyJU' },
//     { id: 15, title: 'Largest Number', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/largest-number/', youtubeLink: 'https://www.youtube.com/watch?v=qEIGhVtZ-sg' },
//     { id: 16, title: 'Relative Ranks', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/relative-ranks/', youtubeLink: 'https://www.youtube.com/watch?v=Yv79cOBuM9w' },
//     { id: 17, title: 'H-Index', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/h-index/', youtubeLink: 'https://www.youtube.com/watch?v=KD5cNwLD06g' },
//     { id: 18, title: 'Sort an Array', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/sort-an-array/', youtubeLink: 'https://www.youtube.com/watch?v=pTqbCtg7OFk' },
//     { id: 19, title: 'Wiggle Sort II', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/wiggle-sort-ii/', youtubeLink: 'https://www.youtube.com/watch?v=XFPHg5KjHoo' },
//     { id: 20, title: 'Find the K Closest Elements', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/find-k-closest-elements/', youtubeLink: 'https://www.youtube.com/watch?v=3DJPekxOTA0' },
//     { id: 21, title: 'Minimum Difference Between Largest and Smallest Value in Three Moves', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/', youtubeLink: 'https://www.youtube.com/watch?v=-YbXySKMPSg' },
//     { id: 22, title: 'Find Median from Data Stream', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/find-median-from-data-stream/', youtubeLink: 'https://www.youtube.com/watch?v=VmogG01IjYc' },
//     { id: 23, title: 'Maximize Sum Of Array After K Negations', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/', youtubeLink: 'https://www.youtube.com/watch?v=O5flB4DeLrs' },
//     { id: 24, title: 'Find the Unsorted Subarray', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/shortest-unsorted-continuous-subarray/', youtubeLink: 'https://www.youtube.com/watch?v=Qm-X_Jw9f6o' },
//     { id: 25, title: 'Pancake Sorting', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/pancake-sorting/', youtubeLink: 'https://www.youtube.com/watch?v=d3Of2ItzP1w' }
// ],

// dynamicProgramming : [
//     { id: 1, title: 'Climbing Stairs', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=Y0lT9Fck7qI', leetCodeLink: 'https://leetcode.com/problems/climbing-stairs/' },
//     { id: 2, title: 'House Robber', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=73r3KWiEvyk', leetCodeLink: 'https://leetcode.com/problems/house-robber/' },
//     { id: 3, title: 'House Robber II', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=rWAJCfYYOvM', leetCodeLink: 'https://leetcode.com/problems/house-robber-ii/' },
//     { id: 4, title: 'Longest Palindromic Substring', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=UflHuQj6MVA', leetCodeLink: 'https://leetcode.com/problems/longest-palindromic-substring/' },
//     { id: 5, title: 'Longest Increasing Subsequence', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=cjWnW0hdF1Y', leetCodeLink: 'https://leetcode.com/problems/longest-increasing-subsequence/' },
//     { id: 6, title: 'Partition Equal Subset Sum', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=IsvocB5BJhw', leetCodeLink: 'https://leetcode.com/problems/partition-equal-subset-sum/' },
//     { id: 7, title: 'Coin Change', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=H9bfqozjoqs', leetCodeLink: 'https://leetcode.com/problems/coin-change/' },
//     { id: 8, title: 'Coin Change II', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=jaNZ83Q3QGc', leetCodeLink: 'https://leetcode.com/problems/coin-change-ii/' },
//     { id: 9, title: 'Unique Paths', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=IlEsdxuD4lY', leetCodeLink: 'https://leetcode.com/problems/unique-paths/' },
//     { id: 10, title: 'Unique Paths II', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=6qMFjFC9YSc', leetCodeLink: 'https://leetcode.com/problems/unique-paths-ii/' },
//     { id: 11, title: 'Longest Common Subsequence', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=Ua0GhsJSlWM', leetCodeLink: 'https://leetcode.com/problems/longest-common-subsequence/' },
//     { id: 12, title: 'Edit Distance', difficulty: 'Hard', youtubeLink: 'https://www.youtube.com/watch?v=XYi2-LPrwm4', leetCodeLink: 'https://leetcode.com/problems/edit-distance/' },
//     { id: 13, title: 'Minimum Path Sum', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=t1shZ8_s6jc', leetCodeLink: 'https://leetcode.com/problems/minimum-path-sum/' },
//     { id: 14, title: 'Jump Game', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=Yan0cv2cLy8', leetCodeLink: 'https://leetcode.com/problems/jump-game/' },
//     { id: 15, title: 'Jump Game II', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=dJ7sWiOoK7g', leetCodeLink: 'https://leetcode.com/problems/jump-game-ii/' },
//     { id: 16, title: 'Best Time to Buy and Sell Stock with Cooldown', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=IGIe46xw3YY', leetCodeLink: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/' },
//     { id: 17, title: 'Best Time to Buy and Sell Stock IV', difficulty: 'Hard', youtubeLink: 'https://www.youtube.com/watch?v=gsL0TyPKbsc', leetCodeLink: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/' },
//     { id: 18, title: 'Interleaving String', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=3Rw3p9LrgvE', leetCodeLink: 'https://leetcode.com/problems/interleaving-string/' },
//     { id: 19, title: 'Decode Ways', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=cQX3yHS0cLo', leetCodeLink: 'https://leetcode.com/problems/decode-ways/' },
//     { id: 20, title: 'Scramble String', difficulty: 'Hard', youtubeLink: 'https://www.youtube.com/watch?v=U6agF72CwwI', leetCodeLink: 'https://leetcode.com/problems/scramble-string/' },
//     { id: 21, title: 'Palindrome Partitioning II', difficulty: 'Hard', youtubeLink: 'https://www.youtube.com/watch?v=lDYIvtBVmgo', leetCodeLink: 'https://leetcode.com/problems/palindrome-partitioning-ii/' },
//     { id: 22, title: 'Regular Expression Matching', difficulty: 'Hard', youtubeLink: 'https://www.youtube.com/watch?v=l3hda49XcDE', leetCodeLink: 'https://leetcode.com/problems/regular-expression-matching/' },
//     { id: 23, title: 'Wildcard Matching', difficulty: 'Hard', youtubeLink: 'https://www.youtube.com/watch?v=3ZDZ-N0EPV0', leetCodeLink: 'https://leetcode.com/problems/wildcard-matching/' },
//     { id: 24, title: 'Maximal Square', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=_Lf1looyJMU', leetCodeLink: 'https://leetcode.com/problems/maximal-square/' },
//     { id: 25, title: 'Word Break', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=Sx9NNgInc3A', leetCodeLink: 'https://leetcode.com/problems/word-break/' }
// ],

//           linkedLists: [
           
//                 { id: 1, title: 'Reverse Linked List', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=G0_I-ZF0S38', leetCodeLink: 'https://leetcode.com/problems/reverse-linked-list/' },
//                 { id: 2, title: 'Merge Two Sorted Lists', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=XIdigk956u0', leetCodeLink: 'https://leetcode.com/problems/merge-two-sorted-lists/' },
//                 { id: 3, title: 'Linked List Cycle', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=gBTe7lFR3vc', leetCodeLink: 'https://leetcode.com/problems/linked-list-cycle/' },
//                 { id: 4, title: 'Remove Nth Node From End of List', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=XVuQxVej6y8', leetCodeLink: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/' },
//                 { id: 5, title: 'Reorder List', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=S5bfdUTrKLM', leetCodeLink: 'https://leetcode.com/problems/reorder-list/' },
//                 { id: 6, title: 'Intersection of Two Linked Lists', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=cpZh4eF8QBw', leetCodeLink: 'https://leetcode.com/problems/intersection-of-two-linked-lists/' },
//                 { id: 7, title: 'Add Two Numbers', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=wgFPrzTjm7s', leetCodeLink: 'https://leetcode.com/problems/add-two-numbers/' },
//                 { id: 8, title: 'Sort List', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=TGveA1oFhrc', leetCodeLink: 'https://leetcode.com/problems/sort-list/' },
//                 { id: 9, title: 'Copy List with Random Pointer', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=OvpKeraoxW0', leetCodeLink: 'https://leetcode.com/problems/copy-list-with-random-pointer/' },
//                 { id: 10, title: 'Flatten a Multilevel Doubly Linked List', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=E_1OC1J5WJ8', leetCodeLink: 'https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/' },
//                 ],
                
//           queues: [
//             { id: 1, title: 'Implement Queue using Stacks', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=3Et9MrMc02A', leetCodeLink: 'https://leetcode.com/problems/implement-queue-using-stacks/' },
// { id: 2, title: 'Design Circular Queue', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=COZK7NATh4k', leetCodeLink: 'https://leetcode.com/problems/design-circular-queue/' },
// { id: 3, title: 'Sliding Window Maximum', difficulty: 'Hard', youtubeLink: 'https://www.youtube.com/watch?v=DfljaUwZsOk', leetCodeLink: 'https://leetcode.com/problems/sliding-window-maximum/' },
// { id: 4, title: 'Number of Recent Calls', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=IDJ_U3pXd9o', leetCodeLink: 'https://leetcode.com/problems/number-of-recent-calls/' },
// { id: 5, title: 'Time Needed to Buy Tickets', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=G2t-DHq3sd8', leetCodeLink: 'https://leetcode.com/problems/time-needed-to-buy-tickets/' },
// { id: 6, title: 'Rotting Oranges', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=yf3oUhkvqA0', leetCodeLink: 'https://leetcode.com/problems/rotting-oranges/' },
// { id: 7, title: 'Jump Game VI', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=LvUeXInqDXQ', leetCodeLink: 'https://leetcode.com/problems/jump-game-vi/' },
// { id: 8, title: 'LRU Cache', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=7ABFKPK2hD4', leetCodeLink: 'https://leetcode.com/problems/lru-cache/' },
// { id: 9, title: 'Course Schedule', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=EgI5nU9etnU', leetCodeLink: 'https://leetcode.com/problems/course-schedule/' },
// { id: 10, title: 'Task Scheduler', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=s8p8ukTyA2I', leetCodeLink: 'https://leetcode.com/problems/task-scheduler/' },
// { id: 11, title: 'Shortest Bridge', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=0RFWyfuBPSA', leetCodeLink: 'https://leetcode.com/problems/shortest-bridge/' },
// { id: 12, title: 'Dota2 Senate', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=QBOuFJazmXw', leetCodeLink: 'https://leetcode.com/problems/dota2-senate/' },
// { id: 13, title: 'K Closest Points to Origin', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=XC4TuvU6j7k', leetCodeLink: 'https://leetcode.com/problems/k-closest-points-to-origin/' },
// { id: 14, title: 'The Maze', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=nW9nhaK_rDQ', leetCodeLink: 'https://leetcode.com/problems/the-maze/' },
// { id: 15, title: 'Walls and Gates', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=e69C6xhiSQE', leetCodeLink: 'https://leetcode.com/problems/walls-and-gates/' }
// ],
//           recursion: [
//             { id: 1, title: 'Reverse Linked List', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=G0_I-ZF0S38', leetCodeLink: 'https://leetcode.com/problems/reverse-linked-list/' },
//             { id: 2, title: 'Merge Two Sorted Lists', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=XIdigk956u0', leetCodeLink: 'https://leetcode.com/problems/merge-two-sorted-lists/' },
//             { id: 3, title: 'Linked List Cycle', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=gBTe7lFR3vc', leetCodeLink: 'https://leetcode.com/problems/linked-list-cycle/' },
//             { id: 4, title: 'Remove Nth Node From End of List', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=XVuQxVej6y8', leetCodeLink: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/' },
//             { id: 5, title: 'Reorder List', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=S5bfdUTrKLM', leetCodeLink: 'https://leetcode.com/problems/reorder-list/' },
//             { id: 6, title: 'Intersection of Two Linked Lists', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=cpZh4eF8QBw', leetCodeLink: 'https://leetcode.com/problems/intersection-of-two-linked-lists/' },
//             { id: 7, title: 'Add Two Numbers', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=wgFPrzTjm7s', leetCodeLink: 'https://leetcode.com/problems/add-two-numbers/' },
//             { id: 8, title: 'Sort List', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=TGveA1oFhrc', leetCodeLink: 'https://leetcode.com/problems/sort-list/' },
//             { id: 9, title: 'Copy List with Random Pointer', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=OvpKeraoxW0', leetCodeLink: 'https://leetcode.com/problems/copy-list-with-random-pointer/' },
//             { id: 10, title: 'Flatten a Multilevel Doubly Linked List', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=E_1OC1J5WJ8', leetCodeLink: 'https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/' },
//             ],
//           backtracking: [
           
//                 { id: 1, title: 'Combination Sum', difficulty: 'Medium', youtubeLink: 'https://youtube.com/backtracking/1', articleLink: 'https://article.com/backtracking/1', leetCodeLink: 'https://leetcode.com/problems/combination-sum/' },
//                 { id: 2, title: 'Permutations', difficulty: 'Medium', youtubeLink: 'https://youtube.com/backtracking/2', articleLink: 'https://article.com/backtracking/2', leetCodeLink: 'https://leetcode.com/problems/permutations/' },
//                 { id: 3, title: 'Subsets', difficulty: 'Medium', youtubeLink: 'https://youtube.com/backtracking/3', articleLink: 'https://article.com/backtracking/3', leetCodeLink: 'https://leetcode.com/problems/subsets/' },
//                 { id: 4, title: 'Sudoku Solver', difficulty: 'Hard', youtubeLink: 'https://youtube.com/backtracking/4', articleLink: 'https://article.com/backtracking/4', leetCodeLink: 'https://leetcode.com/problems/sudoku-solver/' },
//                 { id: 5, title: 'Word Search', difficulty: 'Medium', youtubeLink: 'https://youtube.com/backtracking/5', articleLink: 'https://article.com/backtracking/5', leetCodeLink: 'https://leetcode.com/problems/word-search/' }
//               ],
//           greedy: [
//             { id: 1, title: 'Jump Game', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=ZbONFnKq8kQ', leetCodeLink: 'https://leetcode.com/problems/jump-game/' },
//             { id: 2, title: 'Gas Station', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=RGuJga2Gl_k', leetCodeLink: 'https://leetcode.com/problems/gas-station/' },
//             { id: 3, title: 'Candy', difficulty: 'Hard', youtubeLink: 'https://www.youtube.com/watch?v=h6_lIwZYHQw', leetCodeLink: 'https://leetcode.com/problems/candy/' },
//             { id: 4, title: 'Assign Cookies', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=qH-qcGr2F10', leetCodeLink: 'https://leetcode.com/problems/assign-cookies/' },
//             { id: 5, title: 'Minimum Number of Arrows to Burst Balloons', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=aAYsm9CR2V0', leetCodeLink: 'https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/' },
//             { id: 6, title: 'Non-overlapping Intervals', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=2nMkpB1l51I', leetCodeLink: 'https://leetcode.com/problems/non-overlapping-intervals/' },
//             { id: 7, title: 'Queue Reconstruction by Height', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=khddrw6Bfyw', leetCodeLink: 'https://leetcode.com/problems/queue-reconstruction-by-height/' },
//             { id: 8, title: 'Task Scheduler', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=s8p8ukTyA2I', leetCodeLink: 'https://leetcode.com/problems/task-scheduler/' },
//             { id: 9, title: 'Merge Triplets to Form Target Triplet', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=0jNmHPfA_yE', leetCodeLink: 'https://leetcode.com/problems/merge-triplets-to-form-target-triplet/' },
//             { id: 10, title: 'Partition Labels', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=ED4ateJu86I', leetCodeLink: 'https://leetcode.com/problems/partition-labels/' },
//             { id: 11, title: 'Lemonade Change', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=SVFXEqn3Ceo', leetCodeLink: 'https://leetcode.com/problems/lemonade-change/' },
//             { id: 12, title: 'Hand of Straights', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=amnrMCVd2YI', leetCodeLink: 'https://leetcode.com/problems/hand-of-straights/' },
//             { id: 13, title: 'Is Subsequence', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=99RVfqklbCE', leetCodeLink: 'https://leetcode.com/problems/is-subsequence/' },
//             { id: 14, title: 'Minimum Deletions to Make Character Frequencies Unique', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=OOnRezOZlcg', leetCodeLink: 'https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/' },
//             { id: 15, title: 'Maximum Units on a Truck', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=9JDzlhW3XTM', leetCodeLink: 'https://leetcode.com/problems/maximum-units-on-a-truck/' },
//             { id: 16, title: 'Two City Scheduling', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=6KlWDq3FCFs', leetCodeLink: 'https://leetcode.com/problems/two-city-scheduling/' },
//             { id: 17, title: 'Best Time to Buy and Sell Stock II', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=3SJ3pUkPQMc', leetCodeLink: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/' },
//             { id: 18, title: 'Wiggle Subsequence', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=Jg4E4KZstFE', leetCodeLink: 'https://leetcode.com/problems/wiggle-subsequence/' },
//             { id: 19, title: 'Maximum Subarray', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=5WZl3MMT0Eg', leetCodeLink: 'https://leetcode.com/problems/maximum-subarray/' },
//             { id: 20, title: 'Increasing Triplet Subsequence', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=3yxoJwRPi_k', leetCodeLink: 'https://leetcode.com/problems/increasing-triplet-subsequence/' },
//             { id: 21, title: 'Patching Array', difficulty: 'Hard', youtubeLink: 'https://www.youtube.com/watch?v=aoW5q5D5Q68', leetCodeLink: 'https://leetcode.com/problems/patching-array/' },
//             { id: 22, title: 'Find the Minimum Number of Fibonacci Numbers Whose Sum Is K', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=EdR3V5DBgyo', leetCodeLink: 'https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/' },
//             { id: 23, title: 'Reduce Array Size to The Half', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=1Hj7kRPAhY0', leetCodeLink: 'https://leetcode.com/problems/reduce-array-size-to-the-half/' },
//             { id: 24, title: 'Minimum Cost to Move Chips to The Same Position', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=pb3OiT6qhhA', leetCodeLink: 'https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/' },
//           ],
          
//     };

//     const handleComplete = (categoryId, problemId) => {
//         setCompletedProblems(prev => ({
//             ...prev,
//             [categoryId]: {
//                 ...prev[categoryId],
//                 [problemId]: !prev[categoryId]?.[problemId],
//             },
//         }));
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//                 <h1 className="text-3xl font-bold text-gray-900 mb-8">DSA Concepts</h1>

//                 {selectedCategory ? (
//                     <div>
//                         <button onClick={() => setSelectedCategory(null)} className="mb-4 text-indigo-600 hover:text-indigo-800">
//                             Back to Categories
//                         </button>
//                         <h2 className="text-2xl font-semibold text-gray-900 mb-4">Practice Problems - {categories.find(cat => cat.id === selectedCategory).name}</h2>
//                         <div className="space-y-4">
//                             {problems[selectedCategory].map(problem => (
//                                 <div key={problem.id} className="bg-white rounded-lg shadow-lg p-6">
//                                     <h3 className="text-xl font-semibold text-gray-900">{problem.title}</h3>
//                                     <p className="text-gray-600">Difficulty: {problem.difficulty}</p>
//                                     <div className="mt-4 flex items-center space-x-4">
//                                         <a href={problem.leetCodeLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
//                                             Practice
//                                         </a>
//                                         {problem.youtubeLink && (
//                                             <a href={problem.youtubeLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 flex items-center">
//                                                 <Youtube className="h-5 w-5 mr-1" /> YouTube
//                                             </a>
//                                         )}
//                                         {problem.articleLink && (
//                                             <a href={problem.articleLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 flex items-center">
//                                                 <FileText className="h-5 w-5 mr-1" /> Article
//                                             </a>
//                                         )}
//                                         <button onClick={() => {handleComplete(selectedCategory, problem.id) 
//                                             setTotalCount(totalCount + 1);
//                                         }} className="text-green-600 hover:text-green-800 flex items-center">
//                                             {completedProblems[selectedCategory]?.[problem.id] ? <CheckCircle className="h-5 w-5 mr-1" /> : <CheckCircle className="h-5 w-5 mr-1 text-gray-300" />}
//                                             {completedProblems[selectedCategory]?.[problem.id] ? 'Completed' : 'Mark Complete'}
//                                         </button>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ) : (
//                     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                         {categories.map(category => (
//                             <button key={category.id} onClick={() => setSelectedCategory(category.id)} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-md transition-shadow">
//                                 <div className="flex items-center justify-center mb-4">
//                                     {category.icon}
//                                 </div>
//                                 <h3 className="text-lg font-semibold text-gray-900 text-center">{category.name}</h3>
//                             </button>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default DSA;

import React, { useState } from 'react';
import { Code, Youtube, FileText, CheckCircle } from 'lucide-react';

const DSA = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [completedProblems, setCompletedProblems] = useState({});
    const [totalCount, setTotalCount] = useState(0);
    const categories = [
        { id: 'arrays', name: 'Arrays', icon: <Code className="h-5 w-5" /> },
        { id: 'strings', name: 'Strings', icon: <Code className="h-5 w-5" /> },
        { id: 'trees', name: 'Trees', icon: <Code className="h-5 w-5" /> },
        { id: 'stacks', name: 'Stacks', icon: <Code className="h-5 w-5" /> },
        { id: 'heaps', name: 'Heaps', icon: <Code className="h-5 w-5" /> },
        { id: 'graphs', name: 'Graphs', icon: <Code className="h-5 w-5" /> },
        { id: 'hashTables', name: 'Hash Tables', icon: <Code className="h-5 w-5" /> },
        { id: 'sorting', name: 'Sorting', icon: <Code className="h-5 w-5" /> },
        { id: 'dynamicProgramming', name: 'Dynamic Programming', icon: <Code className="h-5 w-5" /> },
        { id: 'linkedLists', name: 'Linked Lists', icon: <Code className="h-5 w-5" /> },
        { id: 'queues', name: 'Queues', icon: <Code className="h-5 w-5" /> },
        { id: 'recursion', name: 'Recursion', icon: <Code className="h-5 w-5" /> },
        { id: 'backtracking', name: 'Backtracking', icon: <Code className="h-5 w-5" /> },
        { id: 'greedy', name: 'Greedy', icon: <Code className="h-5 w-5" /> },


    ];

    const problems = {
      
        arrays: [
            { id: 1, title: 'Two Sum', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=KLlXCFG5TnA', leetCodeLink: 'https://leetcode.com/problems/two-sum/' },
            { id: 2, title: 'Maximum Subarray', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=86CQq3pKSUw', leetCodeLink: 'https://leetcode.com/problems/maximum-subarray/' },
            { id: 3, title: 'Merge Sorted Array', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=P1Ic85RarKY', revisionLink: 'http://revision.com/arrays/3' },
            { id: 4, title: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=nIVW4P8b1VA', revisionLink: 'http://revision.com/arrays/4' },
            { id: 5, title: 'Reverse-an-array', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=Xb2j3Csj3MQ', leetCodeLink: 'https://www.geeksforgeeks.org/program-to-reverse-an-array/' },
            { id: 6, title: 'Maximum and Minimum in an Array', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=7paXQqoY_2M', leetCodeLink: 'https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/' },
            { id: 7, title: 'Kth Smallest Element', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=FrWq2rznPLQ', leetCodeLink: 'https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1' },
            { id: 8, title: 'Sort the array without using any sorting algo', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=Z8svOqamag8', leetCodeLink: 'https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/' },
            { id: 9, title: 'Move all negative elements to one side of the array', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=-H1_7QXw3PQ', leetCodeLink: 'https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/' },
            { id: 10, title: 'Find the Union and Intersection of the two sorted arrays', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=WTzjTskDFMg', leetCodeLink: 'https://www.geeksforgeeks.org/problems/union-of-two-arrays3538/1' },
            { id: 11, title: 'Rotate Array by One', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=RoVlyYsxDB8', leetCodeLink: 'https://www.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1' },
            { id: 12, title: 'Kadane\'s Algorithm', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=w_KEocd__20', leetCodeLink: 'https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1' },
            { id: 13, title: 'Minimize the Heights II', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=tCVOQX3lWeI', leetCodeLink: 'https://www.geeksforgeeks.org/problems/minimize-the-heights3351/1' },
            { id: 14, title: 'Minimum Jumps', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=zckH-s58XCo', leetCodeLink: 'https://www.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1' },
            { id: 15, title: 'Find the Duplicate Number', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=32Ll35mhWg0', leetCodeLink: 'https://leetcode.com/problems/find-the-duplicate-number/description/' },
            { id: 16, title: 'Merge two sorted arrays', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=n7uwj04E0I4', leetCodeLink: 'https://www.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1' },
            { id: 17, title: 'Merge Intervals', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=FXWRE67PLL0', leetCodeLink: 'https://leetcode.com/problems/merge-intervals/description/' },
            { id: 18, title: 'Next Permutation', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=6qXO72FkqwM', leetCodeLink: 'https://leetcode.com/problems/next-permutation/description/' },
            { id: 19, title: 'Count pairs with given sum', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=2rX9rzn2Xco', leetCodeLink: 'https://www.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1' },
            { id: 20, title: 'Common elements', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=Igr2bRrOHlM', leetCodeLink: 'https://www.geeksforgeeks.org/problems/common-elements1132/1' },
            { id: 21, title: 'Rearrange array', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=ZGHIVpY4H24', leetCodeLink: 'https://www.geeksforgeeks.org/rearrange-array-alternating-positive-negative-items-o1-extra-space/' },
            { id: 22, title: 'Subarray with 0 sum', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=TWHytKnOPaQ', leetCodeLink: 'https://www.geeksforgeeks.org/problems/subarray-with-0-sum-1587115621/1' }
        ]
        ,
        strings: [
            { id: 3, title: 'Valid Anagram', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=9UtInBqnCgA', leetCodeLink: 'https://leetcode.com/problems/valid-anagram/' },
            { id: 6, title: 'Longest Palindromic Substring', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=ZJUGtWObroc', leetCodeLink: 'https://leetcode.com/problems/longest-palindromic-substring/' },
            { id: 7, title: 'String to Integer (atoi)', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=Q6Q1NJrpeew', leetCodeLink: 'https://leetcode.com/problems/string-to-integer-atoi/' },
            { id: 8, title: 'Group Anagrams', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=vzdNOK2oB2E', leetCodeLink: 'https://leetcode.com/problems/group-anagrams/' },
            { id: 9, title: 'Valid Parentheses', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=WTzjTskDFMg', leetCodeLink: 'https://leetcode.com/problems/valid-parentheses/' }
        ],
        
        trees: [
            { id: 1, title: 'Binary Tree Inorder Traversal', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=EGJOxHz_aXA', leetCodeLink: 'https://leetcode.com/problems/binary-tree-inorder-traversal/' },
            { id: 2, title: 'Binary Tree Level Order Traversal', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=oN3JUzge_Bg', leetCodeLink: 'https://leetcode.com/problems/binary-tree-level-order-traversal/' },
            { id: 3, title: 'Binary Tree Preorder Traversal', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=oN3JUzge_Bg', leetCodeLink: 'https://leetcode.com/problems/binary-tree-preorder-traversal/' },
            { id: 4, title: 'Binary Tree Postorder Traversal', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=oN3JUzge_Bg', leetCodeLink: 'https://leetcode.com/problems/binary-tree-postorder-traversal/' },
            { id: 5, title: 'Symmetric Tree', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=LTqqxES2LMs', leetCodeLink: 'https://leetcode.com/problems/symmetric-tree/' },
            { id: 6, title: 'Maximum Depth of Binary Tree', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=oN3JUzge_Bg', leetCodeLink: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/' },
            { id: 7, title: 'Minimum Depth of Binary Tree', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=oN3JUzge_Bg', leetCodeLink: 'https://leetcode.com/problems/minimum-depth-of-binary-tree/' }
        ],
            
          stacks: [
             
                { id: 1, title: 'Valid Parentheses', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/valid-parentheses/', youtubeLink: 'https://www.youtube.com/watch?v=WTzjTskDFMg' },
                { id: 2, title: 'Min Stack', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/min-stack/', youtubeLink: 'https://www.youtube.com/watch?v=MOY3_fgo6Jw' },
                { id: 3, title: 'Evaluate Reverse Polish Notation', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/', youtubeLink: 'https://www.youtube.com/watch?v=iu0082c4HDE' },
                { id: 4, title: 'Generate Parentheses', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/generate-parentheses/', youtubeLink: 'https://www.youtube.com/watch?v=sz1qaKt0KGQ' },
                { id: 5, title: 'Daily Temperatures', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/daily-temperatures/', youtubeLink: 'https://www.youtube.com/watch?v=cTBiBSnjO3c' },
                { id: 6, title: 'Next Greater Element I', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/next-greater-element-i/', youtubeLink: 'https://www.youtube.com/watch?v=68a1Dc_qVq4' },
                { id: 7, title: 'Next Greater Element II', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/next-greater-element-ii/', youtubeLink: 'https://www.youtube.com/watch?v=RkXTxmA7D4w' },
                { id: 8, title: 'Largest Rectangle in Histogram', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/largest-rectangle-in-histogram/', youtubeLink: 'https://www.youtube.com/watch?v=zx5Sw9130L0' },
                { id: 9, title: 'Trapping Rain Water', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/trapping-rain-water/', youtubeLink: 'https://www.youtube.com/watch?v=ZI2z5pq0TqA' },
                { id: 10, title: 'Simplify Path', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/simplify-path/', youtubeLink: 'https://www.youtube.com/watch?v=QZkLWgWdygA' },
                { id: 11, title: 'Basic Calculator', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/basic-calculator/', youtubeLink: 'https://www.youtube.com/watch?v=081AqOuasw0' },
                { id: 12, title: 'Basic Calculator II', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/basic-calculator-ii/', youtubeLink: 'https://www.youtube.com/watch?v=2wF1Ot0MP7U' },
                { id: 13, title: 'Basic Calculator III', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/basic-calculator-iii/', youtubeLink: 'https://www.youtube.com/watch?v=6ZRhq2oFCUk' },
                { id: 14, title: 'Decode String', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/decode-string/', youtubeLink: 'https://www.youtube.com/watch?v=qB0zZpBJlh8' },
                { id: 15, title: 'Longest Valid Parentheses', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/longest-valid-parentheses/', youtubeLink: 'https://www.youtube.com/watch?v=VdQuwtEd10M' },
                { id: 16, title: 'Remove K Digits', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/remove-k-digits/', youtubeLink: 'https://www.youtube.com/watch?v=3QJzHqNAEXs' },
                { id: 17, title: 'Asteroid Collision', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/asteroid-collision/', youtubeLink: 'https://www.youtube.com/watch?v=LN7KjRszjk4' },
                { id: 18, title: 'Implement Stack using Queues', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/implement-stack-using-queues/', youtubeLink: 'https://www.youtube.com/watch?v=F1fvCwBHPQ8' },
                { id: 19, title: 'Implement Queue using Stacks', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/implement-queue-using-stacks/', youtubeLink: 'https://www.youtube.com/watch?v=3Et9MrMc02A' },
                { id: 20, title: 'Design a Stack With Increment Operation', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/design-a-stack-with-increment-operation/', youtubeLink: 'https://www.youtube.com/watch?v=K5AVJVjdmL0' }
            ],
          heaps: [

                { id: 1, title: 'Kth Largest Element in an Array', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/kth-largest-element-in-an-array/', youtubeLink: 'https://www.youtube.com/watch?v=FrWq2rznPLQ' },
                { id: 2, title: 'Top K Frequent Elements', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/top-k-frequent-elements/', youtubeLink: 'https://www.youtube.com/watch?v=YPTqKIgVk-k' },
                { id: 3, title: 'K Closest Points to Origin', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/k-closest-points-to-origin/', youtubeLink: 'https://www.youtube.com/watch?v=eaYX0Ee0Kcg' },
                { id: 4, title: 'Kth Smallest Element in a Sorted Matrix', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/', youtubeLink: 'https://www.youtube.com/watch?v=G5wLN4UweAM' },
                { id: 5, title: 'Find Median from Data Stream', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/find-median-from-data-stream/', youtubeLink: 'https://www.youtube.com/watch?v=itmhHWaHupI' },
                { id: 6, title: 'Sliding Window Maximum', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/sliding-window-maximum/', youtubeLink: 'https://www.youtube.com/watch?v=DfljaUwZsOk' },
                { id: 7, title: 'Merge k Sorted Lists', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/merge-k-sorted-lists/', youtubeLink: 'https://www.youtube.com/watch?v=kpCesr9VXDA' },
                { id: 8, title: 'Kth Largest Element in a Stream', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/kth-largest-element-in-a-stream/', youtubeLink: 'https://www.youtube.com/watch?v=hOjcdrqMoQ8' },
                { id: 9, title: 'Last Stone Weight', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/last-stone-weight/', youtubeLink: 'https://www.youtube.com/watch?v=R6W8HPc4Z6k' },
                { id: 10, title: 'Task Scheduler', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/task-scheduler/', youtubeLink: 'https://www.youtube.com/watch?v=s8p8ukTyA2I' },
                { id: 11, title: 'Reorganize String', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/reorganize-string/', youtubeLink: 'https://www.youtube.com/watch?v=zaM_GLLvysw' },
                { id: 12, title: 'Merge Intervals', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/merge-intervals/', youtubeLink: 'https://www.youtube.com/watch?v=2JzRBPFYbKE' },
                { id: 13, title: 'Smallest Range Covering Elements from K Lists', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/', youtubeLink: 'https://www.youtube.com/watch?v=3hT0ukh7NIg' },
                { id: 14, title: 'The Skyline Problem', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/the-skyline-problem/', youtubeLink: 'https://www.youtube.com/watch?v=GSBLe8cKu0s' },
                { id: 15, title: 'Furthest Building You Can Reach', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/furthest-building-you-can-reach/', youtubeLink: 'https://www.youtube.com/watch?v=1Wb5vcfhZ3c' },
                { id: 16, title: 'Construct Target Array With Multiple Sums', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/construct-target-array-with-multiple-sums/', youtubeLink: 'https://www.youtube.com/watch?v=IVF0zcqr9Dg' },
                { id: 17, title: 'Minimum Cost to Connect Sticks', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/minimum-cost-to-connect-sticks/', youtubeLink: 'https://www.youtube.com/watch?v=3dqR2nYEgoI' },
                { id: 18, title: 'Kth Largest Element in a Stream', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/kth-largest-element-in-a-stream/', youtubeLink: 'https://www.youtube.com/watch?v=hOjcdrqMoQ8' },
                { id: 19, title: 'Find K Pairs with Smallest Sums', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/find-k-pairs-with-smallest-sums/', youtubeLink: 'https://www.youtube.com/watch?v=1DLqclH9VDE' },
                { id: 20, title: 'IPO', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/ipo/', youtubeLink: 'https://www.youtube.com/watch?v=peQyZFu1MEk' }
            ],
            
          graphs: [
            
                { id: 1, title: 'Number of Islands', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/number-of-islands/', youtubeLink: 'https://www.youtube.com/watch?v=muncqlKJrH0' },
                { id: 2, title: 'Clone Graph', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/clone-graph/', youtubeLink: 'https://www.youtube.com/watch?v=mQeF6bN8hMk' },
                { id: 3, title: 'Course Schedule', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/course-schedule/', youtubeLink: 'https://www.youtube.com/watch?v=EgI5nU9etnU' },
                { id: 4, title: 'Course Schedule II', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/course-schedule-ii/', youtubeLink: 'https://www.youtube.com/watch?v=Akt3glAwyfY' },
                { id: 5, title: 'Graph Valid Tree', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/graph-valid-tree/', youtubeLink: 'https://www.youtube.com/watch?v=bXsUuownnoQ' },
                { id: 6, title: 'Pacific Atlantic Water Flow', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/pacific-atlantic-water-flow/', youtubeLink: 'https://www.youtube.com/watch?v=krL3r7MY7Dc' },
                { id: 7, title: 'Word Ladder', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/word-ladder/', youtubeLink: 'https://www.youtube.com/watch?v=h9iTnkgv05E' },
                { id: 8, title: 'Word Ladder II', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/word-ladder-ii/', youtubeLink: 'https://www.youtube.com/watch?v=ZVJ3asMoZ18' },
                { id: 9, title: 'Alien Dictionary', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/alien-dictionary/', youtubeLink: 'https://www.youtube.com/watch?v=6kTZYvNNyps' },
                { id: 10, title: 'Cheapest Flights Within K Stops', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/', youtubeLink: 'https://www.youtube.com/watch?v=5eIK3zUdYmE' },
                { id: 11, title: 'Network Delay Time', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/network-delay-time/', youtubeLink: 'https://www.youtube.com/watch?v=EaphyqKU4PQ' },
                { id: 12, title: 'Rotting Oranges', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/rotting-oranges/', youtubeLink: 'https://www.youtube.com/watch?v=y704fEOx0s0' },
                { id: 13, title: 'Surrounded Regions', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/surrounded-regions/', youtubeLink: 'https://www.youtube.com/watch?v=9z2BunfoZ5Y' },
                { id: 14, title: 'Critical Connections in a Network', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/critical-connections-in-a-network/', youtubeLink: 'https://www.youtube.com/watch?v=2rjZH0-2lhk' },
                { id: 15, title: 'Reconstruct Itinerary', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/reconstruct-itinerary/', youtubeLink: 'https://www.youtube.com/watch?v=WYqsg5dziaQ' },
                { id: 16, title: 'Find Eventual Safe States', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/find-eventual-safe-states/', youtubeLink: 'https://www.youtube.com/watch?v=2gtg3VsDGyc' },
                { id: 17, title: 'All Paths From Source to Target', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/all-paths-from-source-to-target/', youtubeLink: 'https://www.youtube.com/watch?v=CYnvDzMprdc' },
                { id: 18, title: 'Accounts Merge', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/accounts-merge/', youtubeLink: 'https://www.youtube.com/watch?v=0M_kIqhwbFo' },
                { id: 19, title: 'Redundant Connection', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/redundant-connection/', youtubeLink: 'https://www.youtube.com/watch?v=FXWRE67PLL0' },
                { id: 20, title: 'Redundant Connection II', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/redundant-connection-ii/', youtubeLink: 'https://www.youtube.com/watch?v=LnHSOy7E9vE' },
                { id: 21, title: 'Minimum Height Trees', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/minimum-height-trees/', youtubeLink: 'https://www.youtube.com/watch?v=ivl0yY1p8t4' },
                { id: 22, title: 'Shortest Path in Binary Matrix', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/shortest-path-in-binary-matrix/', youtubeLink: 'https://www.youtube.com/watch?v=U7oOECVd5lQ' },
                { id: 23, title: 'Path With Minimum Effort', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/path-with-minimum-effort/', youtubeLink: 'https://www.youtube.com/watch?v=0ytpZyiZFhA' },
                { id: 24, title: 'Swim in Rising Water', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/swim-in-rising-water/', youtubeLink: 'https://www.youtube.com/watch?v=amvrKlMLuGY' },
                { id: 25, title: 'Evaluate Division', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/evaluate-division/', youtubeLink: 'https://www.youtube.com/watch?v=UwpvK6Ozd6A' },
                { id: 26, title: 'Reorder Routes to Make All Paths Lead to the City Zero', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/', youtubeLink: 'https://www.youtube.com/watch?v=ReAxp2J1q4E' },
                { id: 27, title: 'Accounts Merge', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/accounts-merge/', youtubeLink: 'https://www.youtube.com/watch?v=0M_kIqhwbFo' },
                { id: 28, title: 'Critical Connections in a Network', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/critical-connections-in-a-network/', youtubeLink: 'https://www.youtube.com/watch?v=2rjZH0-2lhk' },
                { id: 29, title: 'Find the City With the Smallest Number of Neighbors at a Threshold Distance', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/', youtubeLink: 'https://www.youtube.com/watch?v=Jg4E4KZstFE' },
                { id: 30, title: 'Possible Bipartition', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/possible-bipartition/', youtubeLink: 'https://www.youtube.com/watch?v=0ACfAqs8mm0' }
            
            ],
            
          hashTables: [
            { id: 1, title: 'Two Sum', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/two-sum/', youtubeLink: 'https://www.youtube.com/watch?v=KLlXCFG5TnA' },
    { id: 2, title: 'Valid Anagram', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/valid-anagram/', youtubeLink: 'https://www.youtube.com/watch?v=9UtInBqnCgA' },
    { id: 3, title: 'Group Anagrams', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/group-anagrams/', youtubeLink: 'https://www.youtube.com/watch?v=vzdNOK2oB2E' },
    { id: 4, title: 'Top K Frequent Elements', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/top-k-frequent-elements/', youtubeLink: 'https://www.youtube.com/watch?v=YPTqKIgVk-k' },
    { id: 5, title: 'Contains Duplicate', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/contains-duplicate/', youtubeLink: 'https://www.youtube.com/watch?v=3OamzN90kPg' },
    { id: 6, title: 'Intersection of Two Arrays II', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/intersection-of-two-arrays-ii/', youtubeLink: 'https://www.youtube.com/watch?v=O(N+M)' },
    { id: 7, title: 'Isomorphic Strings', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/isomorphic-strings/', youtubeLink: 'https://www.youtube.com/watch?v=9x7rxHGoXyE' },
    { id: 8, title: 'Happy Number', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/happy-number/', youtubeLink: 'https://www.youtube.com/watch?v=ljz85bxOYJ0' },
    { id: 9, title: 'Ransom Note', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/ransom-note/', youtubeLink: 'https://www.youtube.com/watch?v=0QczhGWeB3g' },
    { id: 10, title: 'First Unique Character in a String', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/first-unique-character-in-a-string/', youtubeLink: 'https://www.youtube.com/watch?v=oqr1WwtYHXA' },
    { id: 11, title: 'Word Pattern', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/word-pattern/', youtubeLink: 'https://www.youtube.com/watch?v=K8cB8B0OjuA' },
    { id: 12, title: 'Longest Consecutive Sequence', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/longest-consecutive-sequence/', youtubeLink: 'https://www.youtube.com/watch?v=P6RZZMu_maU' },
    { id: 13, title: '4Sum II', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/4sum-ii/', youtubeLink: 'https://www.youtube.com/watch?v=K20Tx8cdwYY' },
    { id: 14, title: 'Subarray Sum Equals K', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/subarray-sum-equals-k/', youtubeLink: 'https://www.youtube.com/watch?v=20v8zSo2v18' },
    { id: 15, title: 'Contiguous Array', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/contiguous-array/', youtubeLink: 'https://www.youtube.com/watch?v=9ZbBhdQvGOc' },
    { id: 16, title: 'Binary Subarrays With Sum', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/binary-subarrays-with-sum/', youtubeLink: 'https://www.youtube.com/watch?v=TrXAqydKqpg' },
    { id: 17, title: 'Find All Anagrams in a String', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/find-all-anagrams-in-a-string/', youtubeLink: 'https://www.youtube.com/watch?v=G8xtZy0fDKg' },
    { id: 18, title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', youtubeLink: 'https://www.youtube.com/watch?v=3IETreEybaA' },
    { id: 19, title: 'Minimum Window Substring', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/minimum-window-substring/', youtubeLink: 'https://www.youtube.com/watch?v=jSto0O4AJbM' },
    { id: 20, title: 'LFU Cache', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/lfu-cache/', youtubeLink: 'https://www.youtube.com/watch?v=0PSB9y8ehbk' },
    { id: 21, title: 'LRU Cache', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/lru-cache/', youtubeLink: 'https://www.youtube.com/watch?v=7ABFKPK2hD4' },
    { id: 22, title: 'Design HashMap', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/design-hashmap/', youtubeLink: 'https://www.youtube.com/watch?v=0IAPZzGSbME' },
    { id: 23, title: 'Design HashSet', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/design-hashset/', youtubeLink: 'https://www.youtube.com/watch?v=EMqD-6XSY_8' },
    { id: 24, title: 'Max Points on a Line', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/max-points-on-a-line/', youtubeLink: 'https://www.youtube.com/watch?v=n5QY3x_GNDg' },
    { id: 25, title: 'Substring with Concatenation of All Words', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/substring-with-concatenation-of-all-words/', youtubeLink: 'https://www.youtube.com/watch?v=DoANj1JiJ3Q' },
 ],
 sorting :[
    { id: 1, title: 'Merge Sort', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=alJswNJ4P3U', articleLink: 'http://article.com/sorting/1' },
    { id: 2, title: 'Quick Sort', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=Hoixgm4-P4M' },
    { id: 3, title: 'Bubble Sort', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=nmhjrI-aW5o' },
    { id: 4, title: 'Selection Sort', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=5KjapFQNxUo' },
    { id: 5, title: 'Insertion Sort', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=JU767SDMDvA' },
    { id: 6, title: 'Heap Sort', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=HqPJF2L5h9U' },
    { id: 7, title: 'Counting Sort', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=OKd534EWcdk' },
    { id: 8, title: 'Radix Sort', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=XiuSW_mEn7g' },
    { id: 9, title: 'Bucket Sort', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=geVyIsFpxUs' },
    { id: 10, title: 'Shell Sort', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=CiDPT1xM1sc' },
    { id: 11, title: 'Sort Colors (Dutch National Flag)', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/sort-colors/', youtubeLink: 'https://www.youtube.com/watch?v=uvB-Ns_TVis' },
    { id: 12, title: 'Kth Largest Element in an Array', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/kth-largest-element-in-an-array/', youtubeLink: 'https://www.youtube.com/watch?v=XEmy13g1Qxc' },
    { id: 13, title: 'Merge Intervals', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/merge-intervals/', youtubeLink: 'https://www.youtube.com/watch?v=IexN60k62jo' },
    { id: 14, title: 'Meeting Rooms II', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/meeting-rooms-ii/', youtubeLink: 'https://www.youtube.com/watch?v=FdzJmTCVyJU' },
    { id: 15, title: 'Largest Number', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/largest-number/', youtubeLink: 'https://www.youtube.com/watch?v=qEIGhVtZ-sg' },
    { id: 16, title: 'Relative Ranks', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/relative-ranks/', youtubeLink: 'https://www.youtube.com/watch?v=Yv79cOBuM9w' },
    { id: 17, title: 'H-Index', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/h-index/', youtubeLink: 'https://www.youtube.com/watch?v=KD5cNwLD06g' },
    { id: 18, title: 'Sort an Array', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/sort-an-array/', youtubeLink: 'https://www.youtube.com/watch?v=pTqbCtg7OFk' },
    { id: 19, title: 'Wiggle Sort II', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/wiggle-sort-ii/', youtubeLink: 'https://www.youtube.com/watch?v=XFPHg5KjHoo' },
    { id: 20, title: 'Find the K Closest Elements', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/find-k-closest-elements/', youtubeLink: 'https://www.youtube.com/watch?v=3DJPekxOTA0' },
    { id: 21, title: 'Minimum Difference Between Largest and Smallest Value in Three Moves', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/', youtubeLink: 'https://www.youtube.com/watch?v=-YbXySKMPSg' },
    { id: 22, title: 'Find Median from Data Stream', difficulty: 'Hard', leetCodeLink: 'https://leetcode.com/problems/find-median-from-data-stream/', youtubeLink: 'https://www.youtube.com/watch?v=VmogG01IjYc' },
    { id: 23, title: 'Maximize Sum Of Array After K Negations', difficulty: 'Easy', leetCodeLink: 'https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/', youtubeLink: 'https://www.youtube.com/watch?v=O5flB4DeLrs' },
    { id: 24, title: 'Find the Unsorted Subarray', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/shortest-unsorted-continuous-subarray/', youtubeLink: 'https://www.youtube.com/watch?v=Qm-X_Jw9f6o' },
    { id: 25, title: 'Pancake Sorting', difficulty: 'Medium', leetCodeLink: 'https://leetcode.com/problems/pancake-sorting/', youtubeLink: 'https://www.youtube.com/watch?v=d3Of2ItzP1w' }
],

dynamicProgramming : [
    { id: 1, title: 'Climbing Stairs', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=Y0lT9Fck7qI', leetCodeLink: 'https://leetcode.com/problems/climbing-stairs/' },
    { id: 2, title: 'House Robber', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=73r3KWiEvyk', leetCodeLink: 'https://leetcode.com/problems/house-robber/' },
    { id: 3, title: 'House Robber II', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=rWAJCfYYOvM', leetCodeLink: 'https://leetcode.com/problems/house-robber-ii/' },
    { id: 4, title: 'Longest Palindromic Substring', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=UflHuQj6MVA', leetCodeLink: 'https://leetcode.com/problems/longest-palindromic-substring/' },
    { id: 5, title: 'Longest Increasing Subsequence', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=cjWnW0hdF1Y', leetCodeLink: 'https://leetcode.com/problems/longest-increasing-subsequence/' },
    { id: 6, title: 'Partition Equal Subset Sum', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=IsvocB5BJhw', leetCodeLink: 'https://leetcode.com/problems/partition-equal-subset-sum/' },
    { id: 7, title: 'Coin Change', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=H9bfqozjoqs', leetCodeLink: 'https://leetcode.com/problems/coin-change/' },
    { id: 8, title: 'Coin Change II', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=jaNZ83Q3QGc', leetCodeLink: 'https://leetcode.com/problems/coin-change-ii/' },
    { id: 9, title: 'Unique Paths', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=IlEsdxuD4lY', leetCodeLink: 'https://leetcode.com/problems/unique-paths/' },
    { id: 10, title: 'Unique Paths II', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=6qMFjFC9YSc', leetCodeLink: 'https://leetcode.com/problems/unique-paths-ii/' },
    { id: 11, title: 'Longest Common Subsequence', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=Ua0GhsJSlWM', leetCodeLink: 'https://leetcode.com/problems/longest-common-subsequence/' },
    { id: 12, title: 'Edit Distance', difficulty: 'Hard', youtubeLink: 'https://www.youtube.com/watch?v=XYi2-LPrwm4', leetCodeLink: 'https://leetcode.com/problems/edit-distance/' },
    { id: 13, title: 'Minimum Path Sum', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=t1shZ8_s6jc', leetCodeLink: 'https://leetcode.com/problems/minimum-path-sum/' },
    { id: 14, title: 'Jump Game', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=Yan0cv2cLy8', leetCodeLink: 'https://leetcode.com/problems/jump-game/' },
    { id: 15, title: 'Jump Game II', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=dJ7sWiOoK7g', leetCodeLink: 'https://leetcode.com/problems/jump-game-ii/' },
    { id: 16, title: 'Best Time to Buy and Sell Stock with Cooldown', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=IGIe46xw3YY', leetCodeLink: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/' },
    { id: 17, title: 'Best Time to Buy and Sell Stock IV', difficulty: 'Hard', youtubeLink: 'https://www.youtube.com/watch?v=gsL0TyPKbsc', leetCodeLink: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/' },
    { id: 18, title: 'Interleaving String', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=3Rw3p9LrgvE', leetCodeLink: 'https://leetcode.com/problems/interleaving-string/' },
    { id: 19, title: 'Decode Ways', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=cQX3yHS0cLo', leetCodeLink: 'https://leetcode.com/problems/decode-ways/' },
    { id: 20, title: 'Scramble String', difficulty: 'Hard', youtubeLink: 'https://www.youtube.com/watch?v=U6agF72CwwI', leetCodeLink: 'https://leetcode.com/problems/scramble-string/' },
    { id: 21, title: 'Palindrome Partitioning II', difficulty: 'Hard', youtubeLink: 'https://www.youtube.com/watch?v=lDYIvtBVmgo', leetCodeLink: 'https://leetcode.com/problems/palindrome-partitioning-ii/' },
    { id: 22, title: 'Regular Expression Matching', difficulty: 'Hard', youtubeLink: 'https://www.youtube.com/watch?v=l3hda49XcDE', leetCodeLink: 'https://leetcode.com/problems/regular-expression-matching/' },
    { id: 23, title: 'Wildcard Matching', difficulty: 'Hard', youtubeLink: 'https://www.youtube.com/watch?v=3ZDZ-N0EPV0', leetCodeLink: 'https://leetcode.com/problems/wildcard-matching/' },
    { id: 24, title: 'Maximal Square', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=_Lf1looyJMU', leetCodeLink: 'https://leetcode.com/problems/maximal-square/' },
    { id: 25, title: 'Word Break', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=Sx9NNgInc3A', leetCodeLink: 'https://leetcode.com/problems/word-break/' }
],

          linkedLists: [
           
                { id: 1, title: 'Reverse Linked List', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=G0_I-ZF0S38', leetCodeLink: 'https://leetcode.com/problems/reverse-linked-list/' },
                { id: 2, title: 'Merge Two Sorted Lists', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=XIdigk956u0', leetCodeLink: 'https://leetcode.com/problems/merge-two-sorted-lists/' },
                { id: 3, title: 'Linked List Cycle', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=gBTe7lFR3vc', leetCodeLink: 'https://leetcode.com/problems/linked-list-cycle/' },
                { id: 4, title: 'Remove Nth Node From End of List', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=XVuQxVej6y8', leetCodeLink: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/' },
                { id: 5, title: 'Reorder List', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=S5bfdUTrKLM', leetCodeLink: 'https://leetcode.com/problems/reorder-list/' },
                { id: 6, title: 'Intersection of Two Linked Lists', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=cpZh4eF8QBw', leetCodeLink: 'https://leetcode.com/problems/intersection-of-two-linked-lists/' },
                { id: 7, title: 'Add Two Numbers', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=wgFPrzTjm7s', leetCodeLink: 'https://leetcode.com/problems/add-two-numbers/' },
                { id: 8, title: 'Sort List', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=TGveA1oFhrc', leetCodeLink: 'https://leetcode.com/problems/sort-list/' },
                { id: 9, title: 'Copy List with Random Pointer', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=OvpKeraoxW0', leetCodeLink: 'https://leetcode.com/problems/copy-list-with-random-pointer/' },
                { id: 10, title: 'Flatten a Multilevel Doubly Linked List', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=E_1OC1J5WJ8', leetCodeLink: 'https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/' },
                ],
                
          queues: [
            { id: 1, title: 'Implement Queue using Stacks', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=3Et9MrMc02A', leetCodeLink: 'https://leetcode.com/problems/implement-queue-using-stacks/' },
{ id: 2, title: 'Design Circular Queue', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=COZK7NATh4k', leetCodeLink: 'https://leetcode.com/problems/design-circular-queue/' },
{ id: 3, title: 'Sliding Window Maximum', difficulty: 'Hard', youtubeLink: 'https://www.youtube.com/watch?v=DfljaUwZsOk', leetCodeLink: 'https://leetcode.com/problems/sliding-window-maximum/' },
{ id: 4, title: 'Number of Recent Calls', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=IDJ_U3pXd9o', leetCodeLink: 'https://leetcode.com/problems/number-of-recent-calls/' },
{ id: 5, title: 'Time Needed to Buy Tickets', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=G2t-DHq3sd8', leetCodeLink: 'https://leetcode.com/problems/time-needed-to-buy-tickets/' },
{ id: 6, title: 'Rotting Oranges', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=yf3oUhkvqA0', leetCodeLink: 'https://leetcode.com/problems/rotting-oranges/' },
{ id: 7, title: 'Jump Game VI', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=LvUeXInqDXQ', leetCodeLink: 'https://leetcode.com/problems/jump-game-vi/' },
{ id: 8, title: 'LRU Cache', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=7ABFKPK2hD4', leetCodeLink: 'https://leetcode.com/problems/lru-cache/' },
{ id: 9, title: 'Course Schedule', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=EgI5nU9etnU', leetCodeLink: 'https://leetcode.com/problems/course-schedule/' },
{ id: 10, title: 'Task Scheduler', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=s8p8ukTyA2I', leetCodeLink: 'https://leetcode.com/problems/task-scheduler/' },
{ id: 11, title: 'Shortest Bridge', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=0RFWyfuBPSA', leetCodeLink: 'https://leetcode.com/problems/shortest-bridge/' },
{ id: 12, title: 'Dota2 Senate', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=QBOuFJazmXw', leetCodeLink: 'https://leetcode.com/problems/dota2-senate/' },
{ id: 13, title: 'K Closest Points to Origin', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=XC4TuvU6j7k', leetCodeLink: 'https://leetcode.com/problems/k-closest-points-to-origin/' },
{ id: 14, title: 'The Maze', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=nW9nhaK_rDQ', leetCodeLink: 'https://leetcode.com/problems/the-maze/' },
{ id: 15, title: 'Walls and Gates', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=e69C6xhiSQE', leetCodeLink: 'https://leetcode.com/problems/walls-and-gates/' }
],
          recursion: [
            { id: 1, title: 'Reverse Linked List', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=G0_I-ZF0S38', leetCodeLink: 'https://leetcode.com/problems/reverse-linked-list/' },
            { id: 2, title: 'Merge Two Sorted Lists', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=XIdigk956u0', leetCodeLink: 'https://leetcode.com/problems/merge-two-sorted-lists/' },
            { id: 3, title: 'Linked List Cycle', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=gBTe7lFR3vc', leetCodeLink: 'https://leetcode.com/problems/linked-list-cycle/' },
            { id: 4, title: 'Remove Nth Node From End of List', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=XVuQxVej6y8', leetCodeLink: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/' },
            { id: 5, title: 'Reorder List', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=S5bfdUTrKLM', leetCodeLink: 'https://leetcode.com/problems/reorder-list/' },
            { id: 6, title: 'Intersection of Two Linked Lists', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=cpZh4eF8QBw', leetCodeLink: 'https://leetcode.com/problems/intersection-of-two-linked-lists/' },
            { id: 7, title: 'Add Two Numbers', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=wgFPrzTjm7s', leetCodeLink: 'https://leetcode.com/problems/add-two-numbers/' },
            { id: 8, title: 'Sort List', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=TGveA1oFhrc', leetCodeLink: 'https://leetcode.com/problems/sort-list/' },
            { id: 9, title: 'Copy List with Random Pointer', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=OvpKeraoxW0', leetCodeLink: 'https://leetcode.com/problems/copy-list-with-random-pointer/' },
            { id: 10, title: 'Flatten a Multilevel Doubly Linked List', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=E_1OC1J5WJ8', leetCodeLink: 'https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/' },
            ],
          backtracking: [
           
                { id: 1, title: 'Combination Sum', difficulty: 'Medium', youtubeLink: 'https://youtube.com/backtracking/1', articleLink: 'https://article.com/backtracking/1', leetCodeLink: 'https://leetcode.com/problems/combination-sum/' },
                { id: 2, title: 'Permutations', difficulty: 'Medium', youtubeLink: 'https://youtube.com/backtracking/2', articleLink: 'https://article.com/backtracking/2', leetCodeLink: 'https://leetcode.com/problems/permutations/' },
                { id: 3, title: 'Subsets', difficulty: 'Medium', youtubeLink: 'https://youtube.com/backtracking/3', articleLink: 'https://article.com/backtracking/3', leetCodeLink: 'https://leetcode.com/problems/subsets/' },
                { id: 4, title: 'Sudoku Solver', difficulty: 'Hard', youtubeLink: 'https://youtube.com/backtracking/4', articleLink: 'https://article.com/backtracking/4', leetCodeLink: 'https://leetcode.com/problems/sudoku-solver/' },
                { id: 5, title: 'Word Search', difficulty: 'Medium', youtubeLink: 'https://youtube.com/backtracking/5', articleLink: 'https://article.com/backtracking/5', leetCodeLink: 'https://leetcode.com/problems/word-search/' }
              ],
          greedy: [
            { id: 1, title: 'Jump Game', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=ZbONFnKq8kQ', leetCodeLink: 'https://leetcode.com/problems/jump-game/' },
            { id: 2, title: 'Gas Station', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=RGuJga2Gl_k', leetCodeLink: 'https://leetcode.com/problems/gas-station/' },
            { id: 3, title: 'Candy', difficulty: 'Hard', youtubeLink: 'https://www.youtube.com/watch?v=h6_lIwZYHQw', leetCodeLink: 'https://leetcode.com/problems/candy/' },
            { id: 4, title: 'Assign Cookies', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=qH-qcGr2F10', leetCodeLink: 'https://leetcode.com/problems/assign-cookies/' },
            { id: 5, title: 'Minimum Number of Arrows to Burst Balloons', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=aAYsm9CR2V0', leetCodeLink: 'https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/' },
            { id: 6, title: 'Non-overlapping Intervals', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=2nMkpB1l51I', leetCodeLink: 'https://leetcode.com/problems/non-overlapping-intervals/' },
            { id: 7, title: 'Queue Reconstruction by Height', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=khddrw6Bfyw', leetCodeLink: 'https://leetcode.com/problems/queue-reconstruction-by-height/' },
            { id: 8, title: 'Task Scheduler', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=s8p8ukTyA2I', leetCodeLink: 'https://leetcode.com/problems/task-scheduler/' },
            { id: 9, title: 'Merge Triplets to Form Target Triplet', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=0jNmHPfA_yE', leetCodeLink: 'https://leetcode.com/problems/merge-triplets-to-form-target-triplet/' },
            { id: 10, title: 'Partition Labels', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=ED4ateJu86I', leetCodeLink: 'https://leetcode.com/problems/partition-labels/' },
            { id: 11, title: 'Lemonade Change', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=SVFXEqn3Ceo', leetCodeLink: 'https://leetcode.com/problems/lemonade-change/' },
            { id: 12, title: 'Hand of Straights', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=amnrMCVd2YI', leetCodeLink: 'https://leetcode.com/problems/hand-of-straights/' },
            { id: 13, title: 'Is Subsequence', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=99RVfqklbCE', leetCodeLink: 'https://leetcode.com/problems/is-subsequence/' },
            { id: 14, title: 'Minimum Deletions to Make Character Frequencies Unique', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=OOnRezOZlcg', leetCodeLink: 'https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/' },
            { id: 15, title: 'Maximum Units on a Truck', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=9JDzlhW3XTM', leetCodeLink: 'https://leetcode.com/problems/maximum-units-on-a-truck/' },
            { id: 16, title: 'Two City Scheduling', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=6KlWDq3FCFs', leetCodeLink: 'https://leetcode.com/problems/two-city-scheduling/' },
            { id: 17, title: 'Best Time to Buy and Sell Stock II', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=3SJ3pUkPQMc', leetCodeLink: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/' },
            { id: 18, title: 'Wiggle Subsequence', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=Jg4E4KZstFE', leetCodeLink: 'https://leetcode.com/problems/wiggle-subsequence/' },
            { id: 19, title: 'Maximum Subarray', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=5WZl3MMT0Eg', leetCodeLink: 'https://leetcode.com/problems/maximum-subarray/' },
            { id: 20, title: 'Increasing Triplet Subsequence', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=3yxoJwRPi_k', leetCodeLink: 'https://leetcode.com/problems/increasing-triplet-subsequence/' },
            { id: 21, title: 'Patching Array', difficulty: 'Hard', youtubeLink: 'https://www.youtube.com/watch?v=aoW5q5D5Q68', leetCodeLink: 'https://leetcode.com/problems/patching-array/' },
            { id: 22, title: 'Find the Minimum Number of Fibonacci Numbers Whose Sum Is K', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=EdR3V5DBgyo', leetCodeLink: 'https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/' },
            { id: 23, title: 'Reduce Array Size to The Half', difficulty: 'Medium', youtubeLink: 'https://www.youtube.com/watch?v=1Hj7kRPAhY0', leetCodeLink: 'https://leetcode.com/problems/reduce-array-size-to-the-half/' },
            { id: 24, title: 'Minimum Cost to Move Chips to The Same Position', difficulty: 'Easy', youtubeLink: 'https://www.youtube.com/watch?v=pb3OiT6qhhA', leetCodeLink: 'https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/' },
          ],
          
    };

    const handleComplete = (categoryId, problemId) => {
        setCompletedProblems(prev => ({
            ...prev,
            [categoryId]: {
                ...prev[categoryId],
                [problemId]: !prev[categoryId]?.[problemId],
            },
        }));
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">DSA Concepts</h1>

                {selectedCategory ? (
                    <div>
                        <button onClick={() => setSelectedCategory(null)} className="mb-4 text-indigo-600 hover:text-indigo-800">
                            Back to Categories
                        </button>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Practice Problems - {categories.find(cat => cat.id === selectedCategory).name}</h2>
                        <div className="space-y-4">
                            {problems[selectedCategory].map(problem => (
                                <div key={problem.id} className="bg-white rounded-lg shadow-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900">{problem.title}</h3>
                                    <p className="text-gray-600">Difficulty: {problem.difficulty}</p>
                                    <div className="mt-4 flex items-center space-x-4">
                                        <a href={problem.leetCodeLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                                            Practice
                                        </a>
                                        {problem.youtubeLink && (
                                            <a href={problem.youtubeLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                                                <Youtube className="h-5 w-5 mr-1" /> YouTube
                                            </a>
                                        )}
                                        {problem.articleLink && (
                                            <a href={problem.articleLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                                                <FileText className="h-5 w-5 mr-1" /> Article
                                            </a>
                                        )}
                                        <button onClick={() => {handleComplete(selectedCategory, problem.id) 
                                            setTotalCount(totalCount + 1);
                                        }} className="text-green-600 hover:text-green-800 flex items-center">
                                            {completedProblems[selectedCategory]?.[problem.id] ? <CheckCircle className="h-5 w-5 mr-1" /> : <CheckCircle className="h-5 w-5 mr-1 text-gray-300" />}
                                            {completedProblems[selectedCategory]?.[problem.id] ? 'Completed' : 'Mark Complete'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {categories.map(category => (
                            <button key={category.id} onClick={() => setSelectedCategory(category.id)} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-center mb-4">
                                    {category.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 text-center">{category.name}</h3>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DSA;