import React, { useState, useEffect } from 'react'; // Import React for React.memo
import { CheckCircle, Circle, Award, ArrowRight, Home, BookOpen, BarChart3, Lock, Activity, Target, Book, GripVertical, Square, CheckSquare } from 'lucide-react'; // Ensure all Lucide icons are imported
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import challengesData from './data/challenges.js'; // Import actual challenges data

// Custom Icons from your document
const PromptingIcon = React.memo(() => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <rect x="8" y="16" width="32" height="20" rx="2" fill="#2E5090"/>
    <path d="M14 22h20M14 26h16" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="38" cy="12" r="3" fill="#FF6B35"/>
    <path d="M36 10l4 4" stroke="white" strokeWidth="1.5"/>
  </svg>
));

const BiasIcon = React.memo(() => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <path d="M24 8v8M14 20l8 4M34 20l-8 4" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round"/>
    <rect x="20" y="12" width="8" height="4" fill="#2E5090"/>
    <circle cx="14" cy="28" r="4" fill="#00B4D8"/>
    <circle cx="34" cy="28" r="4" fill="#00B4D8"/>
    <path d="M12 36h24" stroke="#2E5090" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="24" cy="36" r="2" fill="#FF6B35"/>
  </svg>
));

const ScaffoldingIcon = React.memo(() => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <rect x="8" y="12" width="12" height="8" rx="1" fill="#FF6B35"/>
    <rect x="28" y="12" width="12" height="8" rx="1" fill="#FF6B35"/>
    <rect x="18" y="22" width="12" height="8" rx="1" fill="#00B4D8"/>
    <rect x="8" y="32" width="12" height="8" rx="1" fill="#2E5090"/>
    <rect x="28" y="32" width="12" height="8" rx="1" fill="#2E5090"/>
    <path d="M14 20v2M34 20v2M24 30v2" stroke="#00B4D8" strokeWidth="2"/>
  </svg>
));

const AssessmentIcon = React.memo(() => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <rect x="12" y="12" width="24" height="28" rx="2" fill="#7209B7"/>
    <path d="M18 20h12M18 26h12M18 32h8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="35" cy="15" r="6" fill="#00B4D8"/>
    <path d="M32 15l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

const HiltMockups = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedChallengeId, setSelectedChallengeId] = useState(null); // To navigate to specific challenge
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [completedChallengesMap, setCompletedChallengesMap] = useState({});

  useEffect(() => {
    const storedCompletedChallenges = JSON.parse(localStorage.getItem('completedChallenges')) || [];
    const completedMap = storedCompletedChallenges.reduce((acc, id) => {
      acc[id] = true;
      return acc;
    }, {});
    setCompletedChallengesMap(completedMap);
  }, [currentPage, selectedChallengeId]); // Re-fetch on page change or challenge selection

  // Function to save progress to localStorage
  const saveProgress = (challengeId) => {
    const storedCompletedChallenges = JSON.parse(localStorage.getItem('completedChallenges')) || [];
    if (!storedCompletedChallenges.includes(challengeId)) {
      const newCompletedChallenges = [...storedCompletedChallenges, challengeId];
      localStorage.setItem('completedChallenges', JSON.stringify(newCompletedChallenges));
      setCompletedChallengesMap(newCompletedChallenges.reduce((acc, id) => {
        acc[id] = true;
        return acc;
      }, {}));
    }
  };

  const getPathDetails = (pathName) => {
    const pathChallenges = challengesData.filter(challenge => challenge.path === pathName);
    const totalPathChallenges = pathChallenges.length;
    const completedInPath = pathChallenges.filter(challenge => completedChallengesMap[challenge.id]).length;
    const progress = totalPathChallenges > 0 ? (completedInPath / totalPathChallenges) * 100 : 0;
    const firstChallengeId = pathChallenges.length > 0 ? pathChallenges[0].id : null;

    let IconComponent;  // Capitalized to indicate it's a component
    let colorClass;
    switch (pathName) {
      case 'Prompting & Refinement':
        IconComponent = PromptingIcon;
        colorClass = 'from-path-blue-500 to-path-blue-600';
        break;
      case 'Bias & Ethics':
        IconComponent = BiasIcon;
        colorClass = 'from-path-cyan-500 to-path-cyan-600';
        break;
      case 'Scaffolding & Sequencing':
        IconComponent = ScaffoldingIcon;
        colorClass = 'from-path-orange-500 to-path-orange-600';
        break;
      case 'Assessment Quality':
        IconComponent = AssessmentIcon;
        colorClass = 'from-path-purple-500 to-path-purple-600';
        break;
      default:
        IconComponent = Activity; // Fallback Lucide icon
        colorClass = 'from-gray-400 to-gray-500';
    }

    return {
      icon: IconComponent,  // Return the component, not an instance
      color: colorClass,
      totalPathChallenges,
      completedInPath,
      progress,
      firstChallengeId,
      challenges: pathChallenges,
    };
  };

  const uniqueChallengePaths = Array.from(new Set(challengesData.map(challenge => challenge.path)));

  const navLinks = [
    { name: 'Home', page: 'home', icon: Home },
    { name: 'Challenges', page: 'paths', icon: BookOpen },
    { name: 'Progress', page: 'progress', icon: BarChart3 },
  ];

  const NavBar = () => (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-20 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/assets/hilt-led-logo.png" alt="HILT-LED Logo" className="h-10 w-10" />
            <div>
              <h1 className="text-lg font-bold text-gray-900">HILT-LED</h1>
              <p className="text-xs text-gray-600">Human in the Loop Practice</p>
            </div>
          </div>
          <div className="flex gap-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.name}
                  onClick={() => {
                    setCurrentPage(link.page);
                    setSelectedChallengeId(null); // Reset selected challenge when navigating
                  }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{link.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );

  const HomePage = () => {
    // Group challenges by path to count them
    const challengesByPath = challengesData.reduce((acc, challenge) => {
      acc[challenge.path] = (acc[challenge.path] || 0) + 1;
      return acc;
    }, {});

    const homeChallengePaths = [
      {
        id: 'prompting-refinement',
        title: 'Prompting & Refinement',
        description: 'Master the art of crafting effective prompts and refining AI outputs for optimal learning experiences.',
        icon: <PromptingIcon />, // Corrected to JSX element
        color: 'from-path-blue-500 to-path-blue-600',
        numChallenges: challengesByPath['Prompting & Refinement'] || 0,
      },
      {
        id: 'bias-ethics',
        title: 'Bias & Ethics',
        description: 'Explore the ethical considerations of AI in education and learn to mitigate bias in AI-generated content.',
        icon: <BiasIcon />, // Corrected to JSX element
        color: 'from-path-cyan-500 to-path-cyan-600',
        numChallenges: challengesByPath['Bias & Ethics'] || 0,
      },
      {
        id: 'scaffolding-sequencing',
        title: 'Scaffolding & Sequencing',
        description: 'Design adaptive learning paths and sequence content effectively with AI assistance.',
        icon: <ScaffoldingIcon />, // Corrected to JSX element
        color: 'from-path-orange-500 to-path-orange-600',
        numChallenges: challengesByPath['Scaffolding & Sequencing'] || 0,
      },
      {
        id: 'assessment-quality',
        title: 'Assessment Quality',
        description: 'Ensure the fairness and validity of AI-supported assessments and feedback mechanisms.',
        icon: <AssessmentIcon />, // Corrected to JSX element
        color: 'from-path-purple-500 to-path-purple-600',
        numChallenges: challengesByPath['Assessment Quality'] || 0,
      },
    ];

    const whatYoullGain = [
      { icon: Award, title: 'Skill Mastery', description: 'Sharpen your ability to evaluate and refine AI-generated content.' },
      { icon: BookOpen, title: 'Concept Cards', description: 'Build a personal reference library of design principles.' },
      { icon: BarChart3, title: 'Progress Tracking', description: 'Earn badges and track your growth across all paths.' },
    ];

    return (
      <div className="min-h-screen bg-gray-50 text-gray-900">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-20 py-16 text-center">
          <div className="inline-block bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-6">
            For Experienced Learning Designers
          </div>
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Master the Art of Being<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Human in the Loop
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Practice balancing AI efficiency with human insight through interactive simulations. Test and refine your design judgment in real-world scenarios.
          </p>
        </section>

        {/* Challenge Paths Section */}
        <section className="max-w-6xl mx-auto px-20 py-12">
          <h3 className="text-2xl font-bold text-center mb-10">Four Core Challenge Paths</h3>
          
          <div className="grid md:grid-cols-1 gap-6">
            {homeChallengePaths.map((path) => {
              // Find first challenge for this path
              const firstChallenge = challengesData.find(c => c.path === path.title);

              return (
                <button
                  key={path.id}
                  onClick={() => {
                    if (firstChallenge) {
                      setCurrentPage('challenge');
                      setSelectedChallengeId(firstChallenge.id);
                    }
                  }}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer text-left w-full"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {path.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
                        {path.title}
                        <ArrowRight size={18} className="text-blue-600" />
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">{path.description}</p>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <span className="font-semibold">{path.numChallenges}</span>
                        <span>challenges</span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* What You'll Gain Section */}
        <section className="max-w-6xl mx-auto px-20 py-16">
          <div className="bg-blue-50 rounded-2xl p-12 text-center">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">What You'll Gain</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {whatYoullGain.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="mb-4 flex justify-center text-blue-600">
                      {Icon && <Icon size={48} strokeWidth={1.5} />}
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h4>
                    <p className="text-base text-gray-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  };

  const ChallengePathsPage = () => (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-20">
        <h1 className="text-4xl font-bold text-center mb-4">Challenge Paths</h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          Choose a path to begin your practice journey. Complete challenges in any order.
        </p>
        
        <div className="grid md:grid-cols-1 gap-8"> {/* Changed to 1 column */}
          {uniqueChallengePaths.map((pathName) => {
            const pathDetails = getPathDetails(pathName);
            const Icon = pathDetails.icon;
            const isPathCompleted = pathDetails.completedInPath === pathDetails.totalPathChallenges;

            return (
              <div key={pathName} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${pathDetails.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${pathDetails.color} text-white`}>
                      {Icon && <Icon size={24} />}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{pathName}</h2>
                      <p className="text-base text-gray-600">
                        {challengesData.find(c => c.path === pathName)?.description || `Explore challenges related to ${pathName.toLowerCase()}.`}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Progress</span>
                      <span>{pathDetails.completedInPath} of {pathDetails.totalPathChallenges} complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${pathDetails.color}`} 
                        style={{ width: `${pathDetails.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Challenge Checklist */}
                  <div className="space-y-2 mb-8">
                    {pathDetails.challenges.map((challenge) => (
                      <div key={challenge.id} className="flex items-center gap-2 text-gray-700">
                        {completedChallengesMap[challenge.id] ? (
                          <CheckCircle size={18} className="text-green-500" />
                        ) : (
                          <Circle size={18} className="text-gray-400" />
                        )}
                        <span>{challenge.title}</span>
                      </div>
                    ))}
                  </div>

                  {pathDetails.firstChallengeId && (
                    <button
                      onClick={() => {
                        setCurrentPage('challenge');
                        setSelectedChallengeId(pathDetails.firstChallengeId);
                      }}
                      className={`w-full inline-block text-center py-3 rounded-lg font-semibold text-lg
                        ${isPathCompleted ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-900 hover:bg-gray-700'} text-white transition-colors`}
                      disabled={isPathCompleted}
                    >
                      {isPathCompleted ? 'Path Completed' : 'Continue Path →'}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  // Draggable Item Component for drag-drop challenges
  const DraggableItem = ({ item, index, moveItem, isSubmitted }) => {
    const [{ isDragging }, drag] = useDrag({
      type: 'ITEM',
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      canDrag: !isSubmitted,
    });

    const [, drop] = useDrop({
      accept: 'ITEM',
      hover: (draggedItem) => {
        if (draggedItem.index !== index) {
          moveItem(draggedItem.index, index);
          draggedItem.index = index;
        }
      },
      canDrop: () => !isSubmitted,
    });

    return (
      <div
        ref={(node) => drag(drop(node))}
        className={`flex items-center gap-3 p-4 bg-white border-2 border-gray-200 rounded-lg ${
          !isSubmitted ? 'cursor-move hover:border-gray-400' : 'cursor-default'
        } ${isDragging ? 'opacity-50' : 'opacity-100'} transition-all`}
      >
        {!isSubmitted && <GripVertical size={20} className="text-gray-400" />}
        <div className="flex-1">
          <p className="text-gray-900">{item.label}</p>
          {item.bloomLevel && (
            <p className="text-sm text-gray-500 mt-1">{item.bloomLevel}</p>
          )}
          {item.category && (
            <p className="text-sm text-gray-500 mt-1">{item.category}</p>
          )}
        </div>
      </div>
    );
  };

const ChallengePage = () => {
    const challenge = challengesData.find((c) => c.id === selectedChallengeId);

    // State for different challenge types
    const [localSelectedOption, setLocalSelectedOption] = useState(null); // multiple-choice
    const [localSelectedOptions, setLocalSelectedOptions] = useState([]); // multi-select
    const [draggedItems, setDraggedItems] = useState([]); // drag-drop
    const [categorizedItems, setCategorizedItems] = useState({}); // categorization
    const [localFeedback, setLocalFeedback] = useState('');
    const [localIsCorrect, setLocalIsCorrect] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
      setLocalSelectedOption(null);
      setLocalSelectedOptions([]);
      setLocalFeedback('');
      setLocalIsCorrect(null);
      setIsSubmitted(false);

      // Initialize drag-drop items
      if (challenge && challenge.type === 'drag-drop') {
        setDraggedItems([...challenge.items]);
      }

      // Initialize categorization
      if (challenge && challenge.type === 'categorization') {
        const initial = {};
        challenge.categories.forEach(cat => {
          initial[cat.id] = [];
        });
        setCategorizedItems(initial);
      }
    }, [selectedChallengeId, challenge]);

    if (!challenge) {
      return <div className="text-red-500 text-center py-12">Challenge not found.</div>;
    }

    // Multiple-choice handler
    const handleOptionSelect = (optionId) => {
      if (isSubmitted) return;
      setLocalSelectedOption(optionId);
      const correctOptionId = challenge.options[challenge.correctAnswer].id;
      const correct = optionId === correctOptionId;
      setLocalIsCorrect(correct);
      setLocalFeedback(correct ? challenge.feedback.correct : challenge.feedback.incorrect);
      setIsSubmitted(true);
      if (correct) {
        saveProgress(challenge.id);
      }
    };

    // Multi-select handler
    const handleMultiSelect = (optionId) => {
      if (isSubmitted) return;
      setLocalSelectedOptions(prev =>
        prev.includes(optionId)
          ? prev.filter(id => id !== optionId)
          : [...prev, optionId]
      );
    };

    const handleMultiSelectSubmit = () => {
      if (isSubmitted) return;
      const correctSet = new Set(challenge.correctAnswer);
      const selectedSet = new Set(localSelectedOptions);
      const allCorrect = correctSet.size === selectedSet.size &&
                        [...correctSet].every(id => selectedSet.has(id));
      const someCorrect = localSelectedOptions.some(id => correctSet.has(id));

      setLocalIsCorrect(allCorrect);
      if (allCorrect) {
        setLocalFeedback(challenge.feedback.correct);
        saveProgress(challenge.id);
      } else if (someCorrect) {
        setLocalFeedback(challenge.feedback.partial || challenge.feedback.incorrect);
      } else {
        setLocalFeedback(challenge.feedback.incorrect);
      }
      setIsSubmitted(true);
    };

    // Drag-drop handlers
    const moveItem = (fromIndex, toIndex) => {
      if (isSubmitted) return;
      const updatedItems = [...draggedItems];
      const [movedItem] = updatedItems.splice(fromIndex, 1);
      updatedItems.splice(toIndex, 0, movedItem);
      setDraggedItems(updatedItems);
    };

    const handleDragDropSubmit = () => {
      if (isSubmitted) return;
      const userOrder = draggedItems.map(item => item.id);
      const correctOrder = challenge.correctAnswer;
      const correct = JSON.stringify(userOrder) === JSON.stringify(correctOrder);

      setLocalIsCorrect(correct);
      setLocalFeedback(correct ? challenge.feedback.correct : challenge.feedback.incorrect);
      setIsSubmitted(true);
      if (correct) {
        saveProgress(challenge.id);
      }
    };

    // Categorization handlers (simplified - not using drag-drop for now)
    const handleCategorize = (itemId, categoryId) => {
      if (isSubmitted) return;
      setCategorizedItems(prev => {
        const updated = { ...prev };
        // Remove from all categories
        Object.keys(updated).forEach(catId => {
          updated[catId] = updated[catId].filter(id => id !== itemId);
        });
        // Add to selected category
        updated[categoryId] = [...updated[categoryId], itemId];
        return updated;
      });
    };

    const handleCategorizationSubmit = () => {
      if (isSubmitted) return;
      let correct = true;
      challenge.items.forEach(item => {
        const userCategory = Object.keys(categorizedItems).find(catId =>
          categorizedItems[catId].includes(item.id)
        );
        if (userCategory !== item.correctCategory) {
          correct = false;
        }
      });

      setLocalIsCorrect(correct);
      setLocalFeedback(correct ? challenge.feedback.correct : challenge.feedback.incorrect);
      setIsSubmitted(true);
      if (correct) {
        saveProgress(challenge.id);
      }
    };

    const currentChallengeIndex = challengesData.findIndex(c => c.id === selectedChallengeId);
    const nextChallenge = challengesData[currentChallengeIndex + 1];

    // Determine path color for the badge
    let pathColorClass = 'bg-gray-400';
    switch (challenge.path) {
      case 'Prompting & Refinement':
        pathColorClass = 'bg-path-blue-600';
        break;
      case 'Bias & Ethics':
        pathColorClass = 'bg-path-cyan-600';
        break;
      case 'Scaffolding & Sequencing':
        pathColorClass = 'bg-path-orange-600';
        break;
      case 'Assessment Quality':
        pathColorClass = 'bg-path-purple-600';
        break;
      default:
        pathColorClass = 'bg-gray-600';
    }

    // Check if badge earned (all challenges in this path completed)
    const pathChallenges = challengesData.filter(c => c.path === challenge.path);
    const completedInPath = pathChallenges.filter(c => completedChallengesMap[c.id]).length;
    const isBadgeEarned = localIsCorrect && completedInPath === pathChallenges.length;
    const isLastInPath = !challengesData.slice(currentChallengeIndex + 1).some(c => c.path === challenge.path);

    const renderChallenge = () => {
      // Multiple-choice
      if (challenge.type === 'multiple-choice') {
        return (
          <div className="space-y-3">
            {challenge.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                className={`relative flex items-center w-full text-left p-4 border rounded-lg transition-all duration-200
                  ${localSelectedOption === option.id
                    ? (localIsCorrect ? 'bg-green-50 border-green-500 text-green-800' : 'bg-red-50 border-red-500 text-red-800')
                    : 'bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-700'}
                  ${isSubmitted && option.id === challenge.options[challenge.correctAnswer].id && !localIsCorrect
                    ? 'border-green-500 bg-green-50 text-green-800' : ''}
                  ${isSubmitted ? 'cursor-not-allowed' : 'cursor-pointer'}
                `}
                disabled={isSubmitted}
              >
                <span className="mr-3">
                  {localSelectedOption === option.id ? (
                    localIsCorrect ? <CheckCircle size={20} className="text-green-500" /> : <Circle size={20} className="text-red-500" />
                  ) : (
                    <Circle size={20} className="text-gray-400" />
                  )}
                </span>
                <span className="font-medium">{option.id.toUpperCase()}.</span> {option.text}
              </button>
            ))}
          </div>
        );
      }

      // Multi-select
      if (challenge.type === 'multi-select') {
        return (
          <>
            <div className="space-y-3 mb-4">
              {challenge.options.map((option) => {
                const isSelected = localSelectedOptions.includes(option.id);
                const isCorrectOption = challenge.correctAnswer.includes(option.id);
                const showCorrect = isSubmitted && isCorrectOption;
                const showIncorrect = isSubmitted && isSelected && !isCorrectOption;

                return (
                  <button
                    key={option.id}
                    onClick={() => handleMultiSelect(option.id)}
                    className={`relative flex items-center w-full text-left p-4 border rounded-lg transition-all duration-200
                      ${showCorrect ? 'bg-green-50 border-green-500 text-green-800' : ''}
                      ${showIncorrect ? 'bg-red-50 border-red-500 text-red-800' : ''}
                      ${!isSubmitted && isSelected ? 'bg-blue-50 border-blue-500 text-blue-800' : ''}
                      ${!isSubmitted && !isSelected ? 'bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-700' : ''}
                      ${isSubmitted && !showCorrect && !showIncorrect ? 'bg-gray-50 border-gray-200 text-gray-700' : ''}
                      ${isSubmitted ? 'cursor-not-allowed' : 'cursor-pointer'}
                    `}
                    disabled={isSubmitted}
                  >
                    <span className="mr-3">
                      {isSelected ? (
                        showCorrect ? <CheckCircle size={20} className="text-green-500" /> :
                        showIncorrect ? <CheckCircle size={20} className="text-red-500" /> :
                        <CheckSquare size={20} className="text-blue-500" />
                      ) : (
                        showCorrect ? <CheckCircle size={20} className="text-green-500" /> :
                        <Square size={20} className="text-gray-400" />
                      )}
                    </span>
                    <span className="font-medium">{option.id.toUpperCase()}.</span> {option.text}
                  </button>
                );
              })}
            </div>
            {!isSubmitted && (
              <button
                onClick={handleMultiSelectSubmit}
                disabled={localSelectedOptions.length === 0}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Submit Answer
              </button>
            )}
          </>
        );
      }

      // Drag-drop
      if (challenge.type === 'drag-drop') {
        return (
          <>
            <DndProvider backend={HTML5Backend}>
              <div className="space-y-3 mb-4">
                {draggedItems.map((item, index) => (
                  <DraggableItem
                    key={item.id}
                    item={item}
                    index={index}
                    moveItem={moveItem}
                    isSubmitted={isSubmitted}
                  />
                ))}
              </div>
            </DndProvider>
            {!isSubmitted && (
              <button
                onClick={handleDragDropSubmit}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Submit Answer
              </button>
            )}
          </>
        );
      }

      // Categorization
      if (challenge.type === 'categorization') {
        const uncategorized = challenge.items.filter(item =>
          !Object.values(categorizedItems).flat().includes(item.id)
        );

        return (
          <>
            {uncategorized.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Items to categorize:</h3>
                <div className="space-y-2">
                  {uncategorized.map(item => (
                    <div key={item.id} className="p-3 bg-gray-100 border border-gray-300 rounded-lg">
                      <p className="text-gray-900">{item.label}</p>
                      <div className="flex gap-2 mt-2">
                        {challenge.categories.map(cat => (
                          <button
                            key={cat.id}
                            onClick={() => handleCategorize(item.id, cat.id)}
                            disabled={isSubmitted}
                            className="text-xs px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
                          >
                            → {cat.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-4 mb-4">
              {challenge.categories.map(category => (
                <div key={category.id} className="border-2 border-gray-300 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                  <div className="space-y-2">
                    {categorizedItems[category.id]?.map(itemId => {
                      const item = challenge.items.find(i => i.id === itemId);
                      return (
                        <div key={itemId} className="p-3 bg-blue-50 border border-blue-200 rounded">
                          <p>{item.label}</p>
                          {!isSubmitted && (
                            <button
                              onClick={() => {
                                setCategorizedItems(prev => ({
                                  ...prev,
                                  [category.id]: prev[category.id].filter(id => id !== itemId)
                                }));
                              }}
                              className="text-xs text-red-600 mt-1 hover:underline"
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      );
                    })}
                    {categorizedItems[category.id]?.length === 0 && (
                      <p className="text-gray-400 text-sm italic">No items in this category yet</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {!isSubmitted && uncategorized.length === 0 && (
              <button
                onClick={handleCategorizationSubmit}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Submit Answer
              </button>
            )}
          </>
        );
      }

      return null;
    };

    return (
      <div className="min-h-screen bg-gray-50 text-gray-900 py-12">
        <div className="max-w-3xl mx-auto px-20">
          {/* Breadcrumb Navigation */}
          <nav className="text-sm text-gray-600 mb-6">
            <button onClick={() => setCurrentPage('home')} className="hover:underline">Home</button> /
            <button onClick={() => setCurrentPage('paths')} className="hover:underline"> Challenges</button> /
            <span className="font-semibold">{challenge.title}</span>
          </nav>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8">
            {/* Challenge Title with Path Badge */}
            <div className="flex items-center gap-4 mb-4">
              <span className={`inline-block ${pathColorClass} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                {challenge.path}
              </span>
              <h1 className="text-2xl font-bold text-gray-900">{challenge.title}</h1>
            </div>

            {/* Scenario */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 text-gray-700">
              <p className="font-semibold mb-2">Scenario:</p>
              <p className="whitespace-pre-line">{challenge.scenario}</p>
            </div>

            {/* Question and Challenge UI */}
            <div className="mb-6">
              <p className="text-lg font-semibold text-gray-900 mb-4">{challenge.question}</p>
              {renderChallenge()}
            </div>

            {/* Feedback */}
            {localFeedback && (
              <div className={`p-4 rounded-lg mb-6 ${localIsCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`} role="alert">
                <h3 className="font-bold text-lg mb-2">{localIsCorrect ? 'Correct!' : 'Incorrect.'}</h3>
                <p>{localFeedback}</p>
              </div>
            )}

            {/* Badge Celebration */}
            {isBadgeEarned && (
              <div className="mt-6 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-xl text-center">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Badge Earned!</h3>
                <p className="text-lg text-gray-700 mb-1">You've completed all challenges in:</p>
                <p className="text-xl font-bold text-gray-900">{challenge.path}</p>
                <p className="text-md text-gray-600 mt-2">Badge: {challenge.badge}</p>
              </div>
            )}

            {/* Navigation Buttons */}
            {isSubmitted && (
              <div className="mt-8 text-center">
                {localIsCorrect ? (
                  // Correct answer - check if badge earned first
                  isBadgeEarned ? (
                    <div className="flex gap-4 justify-center">
                      <button
                        onClick={() => setCurrentPage('progress')}
                        className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                      >
                        View Progress & Badge
                      </button>
                      <button
                        onClick={() => setCurrentPage('home')}
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Try Another Path
                      </button>
                    </div>
                  ) : nextChallenge ? (
                    <button
                      onClick={() => setSelectedChallengeId(nextChallenge.id)}
                      className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Next Challenge →
                    </button>
                  ) : (
                    <button
                      onClick={() => setCurrentPage('paths')}
                      className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Back to Challenges
                    </button>
                  )
                ) : (
                  // Incorrect answer - show try again and next challenge
                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setLocalSelectedOption(null);
                        setLocalSelectedOptions([]);
                        setLocalFeedback('');
                        setLocalIsCorrect(null);
                        if (challenge.type === 'drag-drop') {
                          setDraggedItems([...challenge.items]);
                        }
                        if (challenge.type === 'categorization') {
                          const initial = {};
                          challenge.categories.forEach(cat => {
                            initial[cat.id] = [];
                          });
                          setCategorizedItems(initial);
                        }
                      }}
                      className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                    >
                      Try Again
                    </button>
                    {nextChallenge && (
                      <button
                        onClick={() => setSelectedChallengeId(nextChallenge.id)}
                        className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                      >
                        Next Challenge →
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const ProgressPage = () => {
    const totalChallenges = challengesData.length;
    const overallCompletedCount = Object.keys(completedChallengesMap).length;
    const overallProgress = totalChallenges > 0 ? (overallCompletedCount / totalChallenges) * 100 : 0;

    // Define badges based on paths
    const badges = [
      { id: 'prompt-whisperer', name: 'Prompt Whisperer', path: 'Prompting & Refinement', icon: Target },
      { id: 'bias-buster', name: 'Bias Buster', path: 'Bias & Ethics', icon: Book },
      { id: 'scaffold-master', name: 'Scaffold Master', path: 'Scaffolding & Sequencing', icon: Activity },
      { id: 'assessment-architect', name: 'Assessment Architect', path: 'Assessment Quality', icon: Activity },
    ];

    return (
      <div className="min-h-screen bg-gray-50 text-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-20">
          <h1 className="text-4xl font-bold text-center mb-12">Your Progress</h1>

          {/* Overall Completion Card */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Overall Completion</h2>
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg text-gray-600">Total Progress</span>
              <span className="text-2xl font-bold text-primary-blue">
                {overallCompletedCount}/{totalChallenges} ({overallProgress.toFixed(0)}%)
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="h-3 rounded-full bg-gradient-to-r from-primary-blue to-primary-purple" 
                style={{ width: `${overallProgress}%` }}
              ></div>
            </div>
          </div>

          {/* Path Progress Section */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Path Progress</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {uniqueChallengePaths.map((pathName) => {
              const pathDetails = getPathDetails(pathName);
              const Icon = pathDetails.icon;
              return (
                <div key={pathName} className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${pathDetails.color} text-white`}>
                      {Icon && <Icon size={24} />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{pathName}</h3>
                      <p className="text-sm text-gray-600">
                        {pathDetails.completedInPath} of {pathDetails.totalPathChallenges} complete
                      </p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${pathDetails.color}`} 
                      style={{ width: `${pathDetails.progress}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Badges Section */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Badges Earned</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {badges.map((badge) => {
              const pathDetails = getPathDetails(badge.path);
              const isEarned = pathDetails.completedInPath === pathDetails.totalPathChallenges && pathDetails.totalPathChallenges > 0;

              // Determine badge background style based on path
              let badgeStyle = {};
              let badgeTextClass = 'text-gray-500'; // locked state

              if (isEarned) {
                badgeTextClass = 'text-white';
                switch (badge.path) {
                  case 'Prompting & Refinement':
                    badgeStyle = { background: 'linear-gradient(to right, rgb(59 130 246), rgb(37 99 235))' };
                    break;
                  case 'Bias & Ethics':
                    badgeStyle = { background: 'linear-gradient(to right, rgb(6 182 212), rgb(8 145 178))' };
                    break;
                  case 'Scaffolding & Sequencing':
                    badgeStyle = { background: 'linear-gradient(to right, rgb(249 115 22), rgb(234 88 12))' };
                    break;
                  case 'Assessment Quality':
                    badgeStyle = { background: 'linear-gradient(to right, rgb(168 85 247), rgb(147 51 234))' };
                    break;
                  default:
                    badgeStyle = { background: 'linear-gradient(to right, rgb(37 99 235), rgb(126 58 237))' };
                }
              }

              return (
                <div key={badge.id} className="text-center">
                  <div
                    className={`relative w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-3 ${isEarned ? '' : 'bg-gray-200'} ${badgeTextClass}`}
                    style={badgeStyle}
                  >
                    {isEarned ? (
                      <Award size={48} strokeWidth={1.5} />
                    ) : (
                      <Lock size={48} strokeWidth={1.5} />
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">{badge.name}</h4>
                  <p className="text-sm text-gray-600">{badge.path}</p>
                  {!isEarned && <p className="text-xs text-gray-500 mt-1">Locked</p>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'paths' && <ChallengePathsPage />}
      {currentPage === 'challenge' && <ChallengePage />}
      {currentPage === 'progress' && <ProgressPage />}
    </div>
  );
};

export default HiltMockups;