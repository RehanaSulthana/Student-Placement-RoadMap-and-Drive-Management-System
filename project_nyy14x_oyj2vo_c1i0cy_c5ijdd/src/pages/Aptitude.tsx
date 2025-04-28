

// import React, { useState } from 'react';
// import { Code, CheckCircle, ExternalLink, Download, BookOpen } from 'lucide-react';

// const Aptitude = () => {
//     const [selectedCategory, setSelectedCategory] = useState(null);
//     const [completedProblems, setCompletedProblems] = useState({});
    
//     // Topic-wise PDF links
//     const pdfLinks = {
//         numbers: "https://www.dropbox.com/scl/fi/uws11b9k0p0lw0rx54bke/Aptitude123-3.pdf?rlkey=7lcd3d1vu556jjs5gnq33v3vz&st=iibrd7cx&dl=0",
//         percentages: "https://www.dropbox.com/scl/fi/e17ppn5naeo3ntuuuddvd/Aptitude123-4.pdf?rlkey=o9b364xk8n3o9wd8ph59lmojz&st=5vgpt3oy&dl=0",
//         profit_loss: "https://www.dropbox.com/scl/fi/9i9776u0mazxsn39gd8kc/Aptitude123-5.pdf?rlkey=b7f8aod8eg29kafds6j0i1l8g&st=36r38rb8&dl=0", 
//         time_work: "https://www.dropbox.com/scl/fi/re0s2nn3th2sc42k4gbag/Aptitude123-6.pdf?rlkey=k15h24j75lo7ok45ux1bhy89i&st=ltnhydr1&dl=0",
//         time_speed_distance: "https://www.dropbox.com/scl/fi/3u9rakt2tudilwcdktijf/Aptitude123-7.pdf?rlkey=9ny4c4pitn4fz1kcqlb0g98jr&st=r2rfevlc&dl=0",
//         ratio_proportion: "https://www.dropbox.com/scl/fi/nedxjiirp5ngfu9u3cnhn/Aptitude123-8.pdf?rlkey=btvddej5pu1lrf6ijhml95g23&st=cynifwy8&dl=0",
//         simple_compound_interest: "https://www.dropbox.com/scl/fi/d5d8biyyls15k4yfn6xav/Aptitude123-9.pdf?rlkey=sp2wmmzb9qbx4ta9eekpvtqdj&st=v6xxca6c&dl=0",
//         permutations_combinations: "https://www.dropbox.com/scl/fi/c3eh5xwykziy6ixqdfkmv/Aptitude123-10.pdf?rlkey=avgujc6qcguvimjjhioe70sm2&st=qs2nsxgh&dl=0",
//         probability: "https://www.dropbox.com/scl/fi/zzcvtuf9qome3kpcbu1ay/Aptitude123-11.pdf?rlkey=fo3t7tuwpf1fbin4gdai3ovxq&st=yleer8ar&dl=0",
//         logarithms: "https://www.dropbox.com/scl/fi/tj1jo5tjaecqfppvgqpx3/Aptitude123-12.pdf?rlkey=lmvhjylg94n1evssvf4zvlzsk&st=m0nuoa7o&dl=0",
//         averages: "https://www.dropbox.com/scl/fi/2uj5koyaqvrir6itye8k0/Aptitude123-13.pdf?rlkey=oreaybset4tuvevrsc0tnu5uq&st=8lusn6se&dl=0",
//         algebra: "https://www.dropbox.com/scl/fi/rtl4uvg86psvcdr9y1g1z/Aptitude123-14.pdf?rlkey=hbsni2kn7h4ua7nwj7idwuzko&st=hry5zqfr&dl=0",
//         geometry_mensuration: "https://www.dropbox.com/scl/fi/9cxzzeakyqa6pvdz3084s/Aptitude123-15.pdf?rlkey=qw74roeausew2wsyh1l93mjwc&st=otf8hq8d&dl=0",
//         trigonometry: "https://www.dropbox.com/scl/fi/9cxzzeakyqa6pvdz3084s/Aptitude123-15.pdf?rlkey=qw74roeausew2wsyh1l93mjwc&st=otf8hq8d&dl=0",
//         data_interpretation: "https://www.dropbox.com/scl/fi/9cxzzeakyqa6pvdz3084s/Aptitude123-15.pdf?rlkey=qw74roeausew2wsyh1l93mjwc&st=otf8hq8d&dl=0"
//     };
    
//     const categories = [
//         { id: 'numbers', name: 'Numbers', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/numbers/' },
//         { id: 'percentages', name: 'Percentages', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/percentage/' },
//         { id: 'profit_loss', name: 'Profit and Loss', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/profit-and-loss/' },
//         { id: 'time_work', name: 'Time and Work', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/time-and-work/' },
//         { id: 'time_speed_distance', name: 'Time, Speed, and Distance', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/time-and-distance/' },
//         { id: 'ratio_proportion', name: 'Ratio and Proportion', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/ratio-and-proportion/' },
//         { id: 'simple_compound_interest', name: 'Simple and Compound Interest', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/compound-interest/' },
//         { id: 'permutations_combinations', name: 'Permutations and Combinations', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/permutation-and-combination/' },
//         { id: 'probability', name: 'Probability', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/probability/' },
//         { id: 'logarithms', name: 'Logarithms', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/logarithm/' },
//         { id: 'averages', name: 'Averages', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/average/' },
//         { id: 'algebra', name: 'Algebra', icon: <Code className="h-5 w-5" />, link: 'https://www.geeksforgeeks.org/category/algebra/' },
//         { id: 'geometry_mensuration', name: 'Geometry and Mensuration', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/area/' },
//         { id: 'trigonometry', name: 'Trigonometry', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/height-and-distance/' },
//         { id: 'data_interpretation', name: 'Data Interpretation', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/data-interpretation/questions-and-answers/' },
//     ];
            
//     // Extended problems list with more problems for each category
//     const problems = {
//         numbers: [
//             { id: 1, title: 'Find LCM and GCD', difficulty: 'Easy', link: 'https://www.indiabix.com/aptitude/numbers/' },
//             { id: 2, title: 'Check Prime Number', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/prime-numbers/' },
//             { id: 3, title: 'Divisibility Rules', difficulty: 'Medium', link: 'https://www.indiabix.com/aptitude/numbers/047001' },
//             { id: 4, title: 'Number Series', difficulty: 'Hard', link: 'https://www.indiabix.com/aptitude/number-series/' },
//         ],
//         percentages: [
//             { id: 1, title: 'Convert Fractions to Percentages', difficulty: 'Easy', link: 'https://www.indiabix.com/aptitude/percentage/' },
//             { id: 2, title: 'Percentage Increase/Decrease', difficulty: 'Medium', link: 'https://www.testbook.com/aptitude-questions/' },
//             { id: 3, title: 'Successive Percentage Change', difficulty: 'Hard', link: 'https://www.indiabix.com/aptitude/percentage/005001' },
//         ],
//         profit_loss: [
//             { id: 1, title: 'Find Selling Price and Cost Price', difficulty: 'Easy', link: 'https://www.indiabix.com/aptitude/profit-and-loss/' },
//             { id: 2, title: 'Calculate Profit Percentage', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/profit-and-loss-formulas/' },
//             { id: 3, title: 'Dishonest Dealings', difficulty: 'Hard', link: 'https://www.indiabix.com/aptitude/profit-and-loss/012001' },
//         ],
//         time_work: [
//             { id: 1, title: 'Work Done by Two People', difficulty: 'Easy', link: 'https://www.indiabix.com/aptitude/time-and-work/' },
//             { id: 2, title: 'Pipes and Cisterns Problem', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/pipes-and-cisterns-formulas/' },
//             { id: 3, title: 'Efficiency Problems', difficulty: 'Hard', link: 'https://www.indiabix.com/aptitude/time-and-work/028001' },
//         ],
//         time_speed_distance: [
//             { id: 1, title: 'Calculate Average Speed', difficulty: 'Easy', link: 'https://www.indiabix.com/aptitude/time-and-distance/' },
//             { id: 2, title: 'Relative Speed Problems', difficulty: 'Medium', link: 'https://www.indiabix.com/aptitude/time-and-distance/022001' },
//             { id: 3, title: 'Trains Passing Problems', difficulty: 'Hard', link: 'https://www.indiabix.com/aptitude/problems-on-trains/' },
//         ],
//         ratio_proportion: [
//             { id: 1, title: 'Basic Ratio Problems', difficulty: 'Easy', link: 'https://www.indiabix.com/aptitude/ratio-and-proportion/' },
//             { id: 2, title: 'Direct and Inverse Proportion', difficulty: 'Medium', link: 'https://www.indiabix.com/aptitude/ratio-and-proportion/006001' },
//             { id: 3, title: 'Mixture Problems', difficulty: 'Hard', link: 'https://www.indiabix.com/aptitude/alligation-or-mixture/' },
//         ],
//         simple_compound_interest: [
//             { id: 1, title: 'Simple Interest Calculations', difficulty: 'Easy', link: 'https://www.indiabix.com/aptitude/simple-interest/' },
//             { id: 2, title: 'Compound Interest Problems', difficulty: 'Medium', link: 'https://www.indiabix.com/aptitude/compound-interest/' },
//             { id: 3, title: 'Comparing SI and CI', difficulty: 'Hard', link: 'https://www.indiabix.com/aptitude/compound-interest/019001' },
//         ],
//         probability: [
//             { id: 1, title: 'Drawing a Card from a Deck', difficulty: 'Easy', link: 'https://www.indiabix.com/aptitude/probability/' },
//             { id: 2, title: 'Rolling a Sum of 7 with Two Dice', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/probability-formulas-and-rules/' },
//             { id: 3, title: 'Conditional Probability', difficulty: 'Hard', link: 'https://www.indiabix.com/aptitude/probability/057001' },
//         ],
//     };

//     // Add similar problem sets for remaining categories
//     Object.keys(pdfLinks).forEach(category => {
//         if (!problems[category]) {
//             problems[category] = [
//                 { id: 1, title: `Basic ${category.replace(/_/g, ' ')} Concepts`, difficulty: 'Easy', link: categories.find(c => c.id === category)?.link || '#' },
//                 { id: 2, title: `Advanced ${category.replace(/_/g, ' ')} Problems`, difficulty: 'Medium', link: categories.find(c => c.id === category)?.link || '#' }
//             ];
//         }
//     });

//     const handleComplete = (categoryId, problemId) => {
//         setCompletedProblems(prev => ({
//             ...prev,
//             [categoryId]: {
//                 ...prev[categoryId],
//                 [problemId]: !prev[categoryId]?.[problemId],
//             },
//         }));
//     };

//     const handleViewPDF = (categoryId) => {
//         const pdfLink = pdfLinks[categoryId] || pdfLinks['numbers']; // Default to numbers if not found
//         window.open(pdfLink, '_blank');
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//                 <div className="flex justify-between items-center mb-8">
//                     <h1 className="text-3xl font-bold text-gray-900">Aptitude Practice</h1>
//                 </div>
                
//                 {selectedCategory ? (
//                     <div>
//                         <div className="flex justify-between items-center mb-4">
//                             <button onClick={() => setSelectedCategory(null)} className="text-indigo-600 hover:text-indigo-800 flex items-center">
//                                 <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//                                 </svg>
//                                 Back to Categories
//                             </button>
                            
//                             <button 
//                                 onClick={() => handleViewPDF(selectedCategory)}
//                                 className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                             >
//                                 <BookOpen className="h-5 w-5 mr-2" />
//                                 View Study Material
//                             </button>
//                         </div>
                        
//                         <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//                             {categories.find(cat => cat.id === selectedCategory)?.name} Problems
//                         </h2>
                        
//                         <div className="space-y-4">
//                             {problems[selectedCategory]?.map(problem => (
//                                 <div key={problem.id} className="bg-white rounded-lg shadow-lg p-6">
//                                     <h3 className="text-xl font-semibold text-gray-900">{problem.title}</h3>
//                                     <p className="text-gray-600">Difficulty: 
//                                         <span className={`ml-1 ${
//                                             problem.difficulty === 'Easy' ? 'text-green-600' : 
//                                             problem.difficulty === 'Medium' ? 'text-yellow-600' : 'text-red-600'
//                                         }`}>
//                                             {problem.difficulty}
//                                         </span>
//                                     </p>
//                                     <div className="mt-4 flex items-center space-x-4">
//                                         <a href={problem.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center">
//                                             <ExternalLink className="h-5 w-5 mr-1" /> Practice Here
//                                         </a>
//                                         <button onClick={() => handleComplete(selectedCategory, problem.id)} className="flex items-center">
//                                             {completedProblems[selectedCategory]?.[problem.id] ? 
//                                                 <span className="text-green-600 flex items-center"><CheckCircle className="h-5 w-5 mr-1" /> Completed</span> : 
//                                                 <span className="text-gray-500 hover:text-green-600 flex items-center"><CheckCircle className="h-5 w-5 mr-1 text-gray-300" /> Mark Complete</span>
//                                             }
//                                         </button>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ) : (
//                     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                         {categories.map(category => {
//                             return (
//                                 <div key={category.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
//                                     <div className="p-6">
//                                         <div className="flex items-center justify-center mb-4">
//                                             {category.icon}
//                                         </div>
//                                         <h3 className="text-lg font-semibold text-gray-900 text-center mb-4">{category.name}</h3>
//                                     </div>
                                    
//                                     <div className="flex divide-x border-t">
//                                         <button 
//                                             onClick={() => setSelectedCategory(category.id)}
//                                             className="flex-1 p-3 text-sm text-blue-600 hover:bg-blue-50 transition-colors text-center"
//                                         >
//                                             Practice
//                                         </button>
//                                         <button 
//                                             onClick={() => handleViewPDF(category.id)}
//                                             className="flex-1 p-3 text-sm text-indigo-600 hover:bg-indigo-50 transition-colors text-center"
//                                         >
//                                             Study
//                                         </button>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Aptitude;

import React, { useState } from 'react';
import { Code, CheckCircle, ExternalLink, Download, BookOpen } from 'lucide-react';

const Aptitude = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [completedProblems, setCompletedProblems] = useState({});
    
    // Topic-wise PDF links
    const pdfLinks = { 
        numbers: "https://drive.google.com/file/d/12BTlGdELMpQdimrT-OFWE0DBIiZu-eCQ/view?usp=sharing",
        percentages: "https://drive.google.com/file/d/1mE9grKW0DnhnfrZmJC6L4N3M_zmWncmo/view?usp=sharing",
        profit_loss: "https://drive.google.com/file/d/1_feMeooKR4nmZh8UPm0naf0beuZvOq3s/view?usp=sharing", 
        time_work: "https://drive.google.com/file/d/1Ij2g6MiUx9ZeOi-xZVRIWtBBM88sl7z0/view?usp=sharing",
        time_speed_distance: "https://drive.google.com/file/d/1vy55KfQa7FMndhT1QHe3dJ-azzx8uP7U/view?usp=sharing",
        ratio_proportion: "https://drive.google.com/file/d/1pFGU0Es3oESCj6pYaQIf4iYhOM2iVcoS/view?usp=sharing",
        simple_compound_interest: "https://drive.google.com/file/d/1yUxLkczE4szBeVRTkdPv2uWnNXRYvf2p/view?usp=sharing",
        permutations_combinations: "https://drive.google.com/file/d/1-HTHsv3fj5z9gEgCXMEYZO4_02NwZDcl/view?usp=sharing",
        probability: "https://drive.google.com/file/d/1RIqqCihDAVTY2WAmatdSLskSj85pgMSs/view?usp=sharing",
        logarithms: "https://drive.google.com/file/d/1x9eFVA53rWQpQIphhsZK2sDQaiFTOcIn/view?usp=sharing",
        averages: "https://drive.google.com/file/d/1SkRjgV0cPIHeuE0E_A2qyaMVYYijVknu/view?usp=sharing",
        algebra: "https://drive.google.com/file/d/1BYHIYdplS33Pvy9rMAma5SQxfhhskRrw/view?usp=sharing",
        geometry_mensuration: "https://drive.google.com/file/d/1-SIJGPwc0gT_Qyi6W31HIDphWxB_Uwzp/view?usp=drive_link",
        trigonometry: "https://drive.google.com/file/d/1BYHIYdplS33Pvy9rMAma5SQxfhhskRrw/view?usp=sharing",
        data_interpretation: "https://drive.google.com/file/d/13ypWELwe48wZ4uVYngvIlNQln3FdkYDT/view?usp=sharing",
        coding_decoding: "https://drive.google.com/file/d/1DhWdtD8yaYJYHtURMBsLZFWt8P6PWY-l/view?usp=drive_link",
        blood_relation: "https://drive.google.com/file/d/1ruuoUN66oJkEkp9kems5b2FFDvQJivRN/view?usp=drive_link",
        alligation_mixture: "https://drive.google.com/file/d/1_3d1pnujtb4mSNFCbd5PVejoCnX4caUZ/view?usp=drive_link",
    };
    
    const categories = [
        { id: 'numbers', name: 'Numbers', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/numbers/' },
        { id: 'percentages', name: 'Percentages', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/percentage/' },
        { id: 'profit_loss', name: 'Profit and Loss', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/profit-and-loss/' },
        { id: 'time_work', name: 'Time and Work', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/time-and-work/' },
        { id: 'time_speed_distance', name: 'Time, Speed, and Distance', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/time-and-distance/' },
        { id: 'ratio_proportion', name: 'Ratio and Proportion', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/ratio-and-proportion/' },
        { id: 'simple_compound_interest', name: 'Simple and Compound Interest', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/compound-interest/' },
        { id: 'permutations_combinations', name: 'Permutations and Combinations', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/permutation-and-combination/' },
        { id: 'probability', name: 'Probability', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/probability/' },
        { id: 'logarithms', name: 'Logarithms', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/logarithm/' },
        { id: 'averages', name: 'Averages', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/average/' },
        { id: 'algebra', name: 'Algebra', icon: <Code className="h-5 w-5" />, link: 'https://www.geeksforgeeks.org/category/algebra/' },
        { id: 'geometry_mensuration', name: 'Geometry and Mensuration', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/area/' },
        { id: 'trigonometry', name: 'Trigonometry', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/height-and-distance/' },
        { id: 'data_interpretation', name: 'Data Interpretation', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/data-interpretation/questions-and-answers/' },
        { id: 'coding_decoding', name: 'Coding and Decoding', icon: <Code className="h-5 w-5" />, link: 'https://www.placementpreparation.io/verbal-reasoning/coding-and-decoding/questions-and-answers/' },
        { id: 'blood_relation', name: 'Blood Relation', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/verbal-reasoning/blood-relation-test/' },
        { id: 'alligation_mixture', name: 'Alligation and Mixture', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/alligation-or-mixture/#google_vignette' },
    ];
   
    // Extended problems list with more problems for each category
    const problems = {
        numbers: [
            { id: 1, title: 'Find LCM and GCD', difficulty: 'Easy', link: 'https://www.indiabix.com/aptitude/numbers/' },
            { id: 2, title: 'Check Prime Number', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/prime-numbers/' },
            { id: 3, title: 'Divisibility Rules', difficulty: 'Medium', link: 'https://www.indiabix.com/aptitude/numbers/047001' },
            { id: 4, title: 'Number Series', difficulty: 'Hard', link: 'https://www.indiabix.com/aptitude/number-series/' },
        ],
        percentages: [
            { id: 1, title: 'Convert Fractions to Percentages', difficulty: 'Easy', link: 'https://www.indiabix.com/aptitude/percentage/' },
            { id: 2, title: 'Percentage Increase/Decrease', difficulty: 'Medium', link: 'https://www.testbook.com/aptitude-questions/' },
            { id: 3, title: 'Successive Percentage Change', difficulty: 'Hard', link: 'https://www.indiabix.com/aptitude/percentage/005001' },
        ],
        profit_loss: [
            { id: 1, title: 'Find Selling Price and Cost Price', difficulty: 'Easy', link: 'https://www.indiabix.com/aptitude/profit-and-loss/' },
            { id: 2, title: 'Calculate Profit Percentage', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/profit-and-loss-formulas/' },
            { id: 3, title: 'Dishonest Dealings', difficulty: 'Hard', link: 'https://www.indiabix.com/aptitude/profit-and-loss/012001' },
        ],
        time_work: [
            { id: 1, title: 'Work Done by Two People', difficulty: 'Easy', link: 'https://www.indiabix.com/aptitude/time-and-work/' },
            { id: 2, title: 'Pipes and Cisterns Problem', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/pipes-and-cisterns-formulas/' },
            { id: 3, title: 'Efficiency Problems', difficulty: 'Hard', link: 'https://www.indiabix.com/aptitude/time-and-work/028001' },
        ],
        time_speed_distance: [
            { id: 1, title: 'Calculate Average Speed', difficulty: 'Easy', link: 'https://www.indiabix.com/aptitude/time-and-distance/' },
            { id: 2, title: 'Relative Speed Problems', difficulty: 'Medium', link: 'https://www.indiabix.com/aptitude/time-and-distance/022001' },
            { id: 3, title: 'Trains Passing Problems', difficulty: 'Hard', link: 'https://www.indiabix.com/aptitude/problems-on-trains/' },
        ],
        ratio_proportion: [
            { id: 1, title: 'Basic Ratio Problems', difficulty: 'Easy', link: 'https://www.indiabix.com/aptitude/ratio-and-proportion/' },
            { id: 2, title: 'Direct and Inverse Proportion', difficulty: 'Medium', link: 'https://www.indiabix.com/aptitude/ratio-and-proportion/006001' },
            { id: 3, title: 'Mixture Problems', difficulty: 'Hard', link: 'https://www.indiabix.com/aptitude/alligation-or-mixture/' },
        ],
        simple_compound_interest: [
            { id: 1, title: 'Simple Interest Calculations', difficulty: 'Easy', link: 'https://www.indiabix.com/aptitude/simple-interest/' },
            { id: 2, title: 'Compound Interest Problems', difficulty: 'Medium', link: 'https://www.indiabix.com/aptitude/compound-interest/' },
            { id: 3, title: 'Comparing SI and CI', difficulty: 'Hard', link: 'https://www.indiabix.com/aptitude/compound-interest/019001' },
        ],
        probability: [
            { id: 1, title: 'Drawing a Card from a Deck', difficulty: 'Easy', link: 'https://www.indiabix.com/aptitude/probability/' },
            { id: 2, title: 'Rolling a Sum of 7 with Two Dice', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/probability-formulas-and-rules/' },
            { id: 3, title: 'Conditional Probability', difficulty: 'Hard', link: 'https://www.indiabix.com/aptitude/probability/057001' },
        ],
    };

    // Add similar problem sets for remaining categories
    Object.keys(pdfLinks).forEach(category => {
        if (!problems[category]) {
            problems[category] = [
                { id: 1, title: `Basic ${category.replace(/_/g, ' ')} Concepts`, difficulty: 'Easy', link: categories.find(c => c.id === category)?.link || '#' },
                { id: 2, title: `Advanced ${category.replace(/_/g, ' ')} Problems`, difficulty: 'Medium', link: categories.find(c => c.id === category)?.link || '#' }
            ];
        }
    });

    const handleComplete = (categoryId, problemId) => {
        setCompletedProblems(prev => ({
            ...prev,
            [categoryId]: {
                ...prev[categoryId],
                [problemId]: !prev[categoryId]?.[problemId],
            },
        }));
    };

    const handleViewPDF = (categoryId) => {
        const pdfLink = pdfLinks[categoryId] || pdfLinks['numbers']; // Default to numbers if not found
        window.open(pdfLink, '_blank');
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Aptitude Practice</h1>
                </div>
                
                {selectedCategory ? (
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <button onClick={() => setSelectedCategory(null)} className="text-indigo-600 hover:text-indigo-800 flex items-center">
                                <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Categories
                            </button>
                            
                            <button 
                                onClick={() => handleViewPDF(selectedCategory)}
                                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                <BookOpen className="h-5 w-5 mr-2" />
                                View Study Material
                            </button>
                        </div>
                        
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            {categories.find(cat => cat.id === selectedCategory)?.name} Problems
                        </h2>
                        
                        <div className="space-y-4">
                            {problems[selectedCategory]?.map(problem => (
                                <div key={problem.id} className="bg-white rounded-lg shadow-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900">{problem.title}</h3>
                                    <p className="text-gray-600">Difficulty: 
                                        <span className={`ml-1 ${
                                            problem.difficulty === 'Easy' ? 'text-green-600' : 
                                            problem.difficulty === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                                        }`}>
                                            {problem.difficulty}
                                        </span>
                                    </p>
                                    <div className="mt-4 flex items-center space-x-4">
                                        <a href={problem.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center">
                                            <ExternalLink className="h-5 w-5 mr-1" /> Practice Here
                                        </a>
                                        <button onClick={() => handleComplete(selectedCategory, problem.id)} className="flex items-center">
                                            {completedProblems[selectedCategory]?.[problem.id] ? 
                                                <span className="text-green-600 flex items-center"><CheckCircle className="h-5 w-5 mr-1" /> Completed</span> : 
                                                <span className="text-gray-500 hover:text-green-600 flex items-center"><CheckCircle className="h-5 w-5 mr-1 text-gray-300" /> Mark Complete</span>
                                            }
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {categories.map(category => {
                            return (
                                <div key={category.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                    <div className="p-6">
                                        <div className="flex items-center justify-center mb-4">
                                            {category.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 text-center mb-4">{category.name}</h3>
                                    </div>
                                    
                                    <div className="flex divide-x border-t">
                                        <button 
                                            onClick={() => setSelectedCategory(category.id)}
                                            className="flex-1 p-3 text-sm text-blue-600 hover:bg-blue-50 transition-colors text-center"
                                        >
                                            Practice
                                        </button>
                                        <button 
                                            onClick={() => handleViewPDF(category.id)}
                                            className="flex-1 p-3 text-sm text-indigo-600 hover:bg-indigo-50 transition-colors text-center"
                                        >
                                            Study
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};  
export default Aptitude;

