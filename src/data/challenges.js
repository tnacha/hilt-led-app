// HILT-LED Challenge Data
// Complete challenge library for all 16 challenges across 4 paths

const challenges = [
  // =============================================================================
  // PATH 1: PROMPTING & REFINEMENT
  // =============================================================================

  {
    id: 'prompting-1',
    path: 'Prompting & Refinement',
    pathId: 'prompting',
    pathColor: 'from-blue-500 to-blue-600',
    difficulty: 1,
    title: 'Crafting Effective Learning Objectives',
    scenario: `You're working with an AI assistant to develop learning content for a corporate training program on agile project management. The AI has generated the following learning objectives for Module 1:

> "Learners will understand agile methodologies. They will know about sprint planning. They will learn teamwork and collaboration skills."

Your instructional design lead has flagged these objectives as too vague to be useful for either learners or instructors.`,
    question: 'Which revision best transforms these into specific, measurable learning objectives aligned to Bloom\'s Taxonomy?',
    type: 'multiple-choice',
    options: [
      {
        id: 'a',
        text: `By the end of this module, learners will be able to:
• Create a sprint backlog using user story point estimation
• Facilitate a sprint planning meeting following the Scrum framework
• Evaluate team velocity data to forecast sprint capacity`
      },
      {
        id: 'b',
        text: `By the end of this module, learners will:
• Understand the core principles of agile project management
• Know how to collaborate effectively in team settings
• Learn about sprint planning best practices`
      },
      {
        id: 'c',
        text: `By the end of this module, learners will:
• Know agile methodologies
• Understand teamwork
• Learn sprint planning basics`
      }
    ],
    correctAnswer: 0, // Option A (index)
    feedback: {
      correct: "Excellent! These objectives are specific, measurable, and aligned to different Bloom's levels. 'Create' (synthesis), 'Facilitate' (application), and 'Evaluate' (analysis) are all action verbs that can be observed and assessed. Each objective describes exactly what the learner will DO, not just what they'll 'understand' or 'know.'",
      incorrect: "Not quite. The objectives you selected still use vague language like 'understand,' 'know,' and 'learn' - these aren't measurable actions. Strong learning objectives should use specific action verbs from Bloom's Taxonomy (create, analyze, apply, evaluate) and describe observable behaviors. Try again and look for objectives that tell you exactly what learners will be able to DO."
    },
    concepts: ['Learning objectives', 'SMART criteria', 'Bloom\'s Taxonomy'],
    badge: 'Prompt Whisperer'
  },

  {
    id: 'prompting-2',
    path: 'Prompting & Refinement',
    pathId: 'prompting',
    pathColor: 'from-blue-500 to-blue-600',
    difficulty: 2,
    title: 'Prompt Engineering for Microlessons',
    scenario: `You need to use an AI assistant to help you create a 20-minute microlesson on "Introduction to Git Version Control" for a university-level software development course. The microlesson must include one clear learning objective and one hands-on activity.

You know that effective AI prompts include role definition, context, learning principles, desired format, and tone.`,
    question: 'Which prompt is most likely to generate a well-structured, pedagogically sound microlesson?',
    type: 'multiple-choice',
    options: [
      {
        id: 'a',
        text: 'Create a Git lesson.'
      },
      {
        id: 'b',
        text: 'You are an instructional designer specializing in technical education. Create a 20-minute microlesson on "Introduction to Git Version Control" for undergraduate computer science students with no prior version control experience. The microlesson must include: (1) one measurable learning objective using Bloom\'s Taxonomy, (2) one hands-on activity where students practice the skill, (3) clear step-by-step instructions. Use an encouraging, beginner-friendly tone.'
      },
      {
        id: 'c',
        text: 'Write a lesson about Git for beginners. Make it simple and include some practice exercises.'
      }
    ],
    correctAnswer: 1, // Option B (index)
    feedback: {
      correct: "Perfect! This prompt sets the AI up for success by defining its role (instructional designer), providing clear context (audience, prerequisites, time constraint), specifying learning principles (Bloom's, measurable objectives, hands-on practice), and requesting a specific format and tone. This structured approach helps the AI generate content that aligns with instructional design best practices.",
      incorrect: "Not quite. Effective prompts need more than just the topic. They should define the AI's role, provide audience context, specify desired format and learning principles, and set the tone. Vague prompts like 'create a lesson' or 'make it simple' lead to generic output that requires extensive revision. Look for the prompt that gives the AI everything it needs to generate pedagogically sound content on the first try."
    },
    concepts: ['AI prompting', 'Microlesson structure', 'Role definition'],
    badge: 'Prompt Whisperer'
  },

  {
    id: 'prompting-3',
    path: 'Prompting & Refinement',
    pathId: 'prompting',
    pathColor: 'from-blue-500 to-blue-600',
    difficulty: 3,
    title: 'Scaffolding AI-Generated Content',
    scenario: `You asked an AI assistant to help you design a module on "Data Visualization Best Practices" for a corporate analytics team. The AI generated the following sequence of microlessons:

1. "Definition of Data Visualization"
2. "Create a Dashboard for Your Organization"

When you review the output, you realize there's no scaffolding - it jumps from basic definition directly to advanced creation without any middle steps.`,
    question: 'Drag the following microlesson topics into the correct order to create proper scaffolding from foundational understanding to independent creation:',
    type: 'drag-drop',
    items: [
      {
        id: 'item-1',
        label: 'Definition of Data Visualization',
        order: 1,
        bloomLevel: 'Remember/Understand'
      },
      {
        id: 'item-2',
        label: 'Analyze Examples of Effective vs Ineffective Dashboards',
        order: 2,
        bloomLevel: 'Analyze'
      },
      {
        id: 'item-3',
        label: 'Apply Design Principles to a Sample Dataset (Guided Practice)',
        order: 3,
        bloomLevel: 'Apply'
      },
      {
        id: 'item-4',
        label: 'Create a Dashboard for Your Organization (Independent Project)',
        order: 4,
        bloomLevel: 'Create'
      }
    ],
    correctAnswer: ['item-1', 'item-2', 'item-3', 'item-4'],
    feedback: {
      correct: "Excellent scaffolding! You've built a logical progression following Bloom's Taxonomy: starting with foundational understanding, moving to analysis of examples, providing guided practice, and finally allowing independent creation. This approach builds learner confidence and competence step by step, rather than overwhelming them with a complex task before they're ready.",
      incorrect: "Not quite. Effective scaffolding follows Bloom's progression: Understand → Analyze → Apply → Create. Learners need to build foundational knowledge, see examples, practice with guidance, and then create independently. Starting with creation or skipping the middle steps leaves learners without the support they need to succeed. Try reordering to build from simple to complex."
    },
    concepts: ['Scaffolding', 'Bloom\'s progression', 'AI risks'],
    badge: 'Prompt Whisperer'
  },

  {
    id: 'prompting-4',
    path: 'Prompting & Refinement',
    pathId: 'prompting',
    pathColor: 'from-blue-500 to-blue-600',
    difficulty: 4,
    title: 'Refining AI Case Studies',
    scenario: `You're developing a UX design course and asked an AI to create a practice exercise on user flow design. The AI generated this:

**AI-Generated Exercise:**
"Create a user flow diagram. Make sure it shows all the steps a user takes. Submit your diagram."

You recognize this as weak problem-based learning - it's generic, lacks context, and doesn't connect to real-world application.`,
    question: 'Which revision transforms this into a strong work-based problem with proper scenario, requirements, and real-world relevance?',
    type: 'multiple-choice',
    options: [
      {
        id: 'a',
        text: `**Exercise: User Flow Design**

Draw a user flow diagram for any website or app. Include all steps from start to finish. Submit your work.`
      },
      {
        id: 'b',
        text: `**Work-Based Problem: E-Commerce Checkout Flow**

**Scenario:** You're a UX designer at an online bookstore. The product team reports that 45% of users abandon their cart during checkout. Your task is to redesign the checkout user flow to reduce friction.

**Requirements:**
• Map the current checkout flow (login, shipping, payment, confirmation)
• Identify 2-3 friction points causing abandonment
• Design an improved flow that reduces steps or clarifies progression
• Annotate your flow diagram with your design rationale

**Deliverable:** Annotated user flow diagram (digital or hand-drawn)`
      },
      {
        id: 'c',
        text: `**Exercise: User Flow Practice**

Think about your favorite website. Create a user flow showing how someone might complete a purchase or sign up for an account. Make it clear and logical.`
      }
    ],
    correctAnswer: 1, // Option B (index)
    feedback: {
      correct: "Outstanding! This work-based problem includes all the essential elements: a realistic scenario grounded in actual UX challenges (cart abandonment), specific requirements that guide learners without spoon-feeding answers, clear deliverables, and a real-world context that makes the learning transferable. The task requires analysis, application, and creation - not just rote execution.",
      incorrect: "Not quite. Strong work-based problems need specific scenarios, clear requirements, and real-world context. Generic prompts like 'draw any user flow' or 'think about your favorite website' don't provide the constraints and context that make learning meaningful and transferable. Look for the option that gives learners a realistic professional challenge to solve, not just an exercise to complete."
    },
    concepts: ['Examples vs case studies', 'PBL', 'Credibility', 'Work-based problems'],
    badge: 'Prompt Whisperer'
  },

  // =============================================================================
  // PATH 2: BIAS & ETHICS
  // =============================================================================

  {
    id: 'bias-1',
    path: 'Bias & Ethics',
    pathId: 'bias',
    pathColor: 'from-teal-500 to-cyan-600',
    difficulty: 1,
    title: 'Spotting Cultural Bias',
    scenario: `You're reviewing an AI-generated case study for a global leadership development program. The case study reads:

> "Meet Sarah, a product manager at a Silicon Valley tech startup. She needs to decide whether to pivot her team's roadmap based on feedback from venture capital investors in San Francisco. Consider how Sarah should approach stakeholder communication, prioritize features based on market fit, and navigate the fast-paced startup culture common in the Bay Area."

The program will be delivered to leaders across North America, Europe, Asia, and Latin America.`,
    question: 'What type of bias is present in this case study?',
    type: 'multiple-choice',
    options: [
      {
        id: 'a',
        text: 'Cultural/Geographic Bias - The case study assumes all learners relate to Silicon Valley startup culture and U.S. venture capital contexts, which may not be relevant or familiar to global audiences.'
      },
      {
        id: 'b',
        text: 'Grammar Bias - The case study has incorrect sentence structure and needs editing.'
      },
      {
        id: 'c',
        text: 'Gender Bias - The case study only features a female protagonist and should include male examples as well.'
      }
    ],
    correctAnswer: 0, // Option A
    feedback: {
      correct: "Exactly right! This case study is culturally and geographically biased. It centers exclusively on Silicon Valley startup culture, U.S. venture capital dynamics, and Bay Area context - elements that may be unfamiliar or irrelevant to learners in other regions. For a global program, case studies should either use universally relatable contexts or provide diverse examples representing different industries, regions, and organizational types.",
      incorrect: "Not quite. The issue isn't grammar or gender representation - it's that the case study assumes all learners operate in or relate to Silicon Valley tech culture. For global audiences, this narrow geographic and cultural framing creates barriers to relevance and engagement. Inclusive case studies should use contexts that are globally relevant or provide diverse examples across regions and industries."
    },
    concepts: ['Inclusive language', 'Global relevance', 'Representation'],
    badge: 'Bias Buster'
  },

  {
    id: 'bias-2',
    path: 'Bias & Ethics',
    pathId: 'bias',
    pathColor: 'from-teal-500 to-cyan-600',
    difficulty: 2,
    title: 'Representation in Examples',
    scenario: `You're conducting a QA review of an AI-generated management training module. As you review the examples and case studies, you notice a pattern:

• Example 1: "John, a 28-year-old marketing director..."
• Example 2: "Mike, a senior operations manager..."
• Example 3: "David, a young executive leading a product team..."
• Example 4: "Tom, a department head managing remote teams..."

All example professionals are:
• Male
• Presented with traditionally Western/English names
• Described as young (20s-30s)
• Shown in office-based leadership roles
• Depicted without any mention of disability, caregiving responsibilities, or non-traditional career paths`,
    question: 'Which dimensions of diversity are missing from these examples? (Select all that apply)',
    type: 'multi-select',
    options: [
      {
        id: 'a',
        text: 'Gender diversity'
      },
      {
        id: 'b',
        text: 'Age diversity (older professionals, mid-career, various experience levels)'
      },
      {
        id: 'c',
        text: 'Cultural/ethnic diversity (names, backgrounds, contexts)'
      },
      {
        id: 'd',
        text: 'Ability/disability representation'
      },
      {
        id: 'e',
        text: 'Role diversity (individual contributors, various industries, non-traditional paths)'
      }
    ],
    correctAnswer: ['a', 'b', 'c', 'd', 'e'], // All options
    feedback: {
      correct: "Excellent eye for representation! You identified all the missing dimensions. Inclusive learning design requires examples that reflect the full diversity of the professional world - different genders, ages, cultural backgrounds, abilities, and career paths. When learners see themselves and their experiences represented, engagement and transfer of learning increase significantly.",
      partial: "You're on the right track, but you missed some dimensions of diversity. Look again at gender (all male), age (all young), names/cultural backgrounds (all traditionally Western), ability representation (none mentioned), and role types (all traditional leadership). Inclusive examples should span all these dimensions so all learners feel seen and valued.",
      incorrect: "Not quite. This set of examples lacks diversity across multiple dimensions: gender, age, cultural background, ability, and role types. Strong instructional design includes examples representing the full spectrum of professional experiences. Review the examples again and consider who is missing from these scenarios."
    },
    concepts: ['Diversity', 'Credible sources', 'Inclusive design'],
    badge: 'Bias Buster'
  },

  {
    id: 'bias-3',
    path: 'Bias & Ethics',
    pathId: 'bias',
    pathColor: 'from-teal-500 to-cyan-600',
    difficulty: 3,
    title: 'AI Assumptions & Accessibility',
    scenario: `You asked an AI assistant to create a collaborative exercise for a hybrid (in-person + remote) professional development workshop on data storytelling. The AI generated this:

**Exercise: Data Visualization Peer Review**

"In your breakout groups of 4, each person will screen-share their dashboard on Zoom while the others provide live feedback. Use the annotation tools to mark areas for improvement directly on the shared screen. After 20 minutes, reconvene in the main room and each group will present their favorite dashboard using the room's projection system."

As you review this, you realize the AI has made several assumptions about technology access, learner abilities, and learning environment.`,
    question: 'What accessibility and assumption issues do you identify? (Select all that apply)',
    type: 'multi-select',
    options: [
      {
        id: 'a',
        text: 'Assumes all learners have Zoom access and familiarity with screen-sharing'
      },
      {
        id: 'b',
        text: 'Assumes all learners can see visual annotations on screen (not accessible for visually impaired)'
      },
      {
        id: 'c',
        text: 'Assumes stable internet connection for all remote participants'
      },
      {
        id: 'd',
        text: 'Assumes all in-person participants can see projection screen clearly'
      },
      {
        id: 'e',
        text: 'Provides no alternative for asynchronous participation'
      }
    ],
    correctAnswer: ['a', 'b', 'c', 'd', 'e'], // All options
    feedback: {
      correct: "Outstanding accessibility awareness! You identified all the problematic assumptions. This exercise excludes learners who: don't have specific tools (Zoom, stable internet), have visual impairments, are in different time zones, or face technology barriers. Inclusive exercise design should provide multiple modalities (visual, verbal, text-based), offer asynchronous alternatives, and avoid requiring specific proprietary tools.",
      partial: "You're thinking about accessibility, but there are more issues to consider. Review the exercise again for assumptions about: technology access (Zoom, internet), sensory abilities (seeing screens/annotations), physical abilities (viewing projections), and time/schedule flexibility (synchronous-only design). Inclusive design means considering all these dimensions.",
      incorrect: "Not quite. This exercise makes multiple assumptions that create barriers for learners. Consider: required technology (Zoom), visual dependencies (screen annotations, projections), internet stability, and synchronous-only participation. Accessible exercise design should work across different tools, abilities, and participation modes."
    },
    concepts: ['Accessibility', 'Learner-centered design', 'Assumptions'],
    badge: 'Bias Buster'
  },

  {
    id: 'bias-4',
    path: 'Bias & Ethics',
    pathId: 'bias',
    pathColor: 'from-teal-500 to-cyan-600',
    difficulty: 4,
    title: 'Vigilance Against AI "Falling Asleep"',
    scenario: `You're QA-reviewing a microlesson on "CSS Flexbox Fundamentals" that an AI assistant helped a colleague create. At first glance, the content looks polished and professional. The learning objective is clear, the examples are well-formatted, and the activity includes step-by-step instructions.

However, you're aware that high-quality AI output can cause experts to "fall asleep at the wheel" - trusting the content without rigorous review. You decide to read closely with a learner's fresh eyes.

Here's an excerpt from the activity instructions:

**Activity: Build a Responsive Navigation Bar**

"Use CSS Flexbox to create a horizontal navigation bar. Set the container to \`display: flex\` and apply \`justify-content: space-around\` to evenly distribute the nav items. For responsive design, use a media query to switch to \`flex-direction: column\` at screen widths below 768px. Don't forget to set \`align-items: stretch\` so all items have equal height."`,
    question: 'You spot 3 subtle errors that a learner would struggle with. What are they?',
    type: 'multi-select',
    options: [
      {
        id: 'a',
        text: '`justify-content: space-around` doesn\'t evenly distribute items - that\'s `space-evenly` (or `space-between` depending on desired effect)'
      },
      {
        id: 'b',
        text: '`align-items: stretch` is the default value, so "don\'t forget" implies it\'s required when it\'s actually redundant'
      },
      {
        id: 'c',
        text: 'The media query breakpoint of 768px is presented as a rule, but responsive breakpoints should be content-driven, not device-specific'
      },
      {
        id: 'd',
        text: 'The instruction doesn\'t specify whether to use `flexbox` or `grid` (both are valid layout tools)'
      }
    ],
    correctAnswer: ['a', 'b', 'c'], // First three options
    feedback: {
      correct: "Excellent vigilance! You caught the subtle inaccuracies that could confuse learners: `space-around` vs `space-evenly`, the unnecessary instruction about `align-items: stretch` (it's the default), and the oversimplification of responsive breakpoints. This is exactly why human review is critical - AI can generate confident-sounding content that contains technical errors or outdated practices. Your 'fresh learner eyes' caught what an expert might skim past.",
      partial: "Good eye, but there are more subtle issues to catch. Review the specific property values (`space-around` vs correct distribution method), the redundant instruction about default values, and the oversimplified approach to breakpoints. AI-generated content often sounds authoritative even when it's subtly wrong - that's why rigorous QA is essential.",
      incorrect: "Not quite. This content contains several subtle technical errors that would confuse learners: incorrect property value for even distribution, unnecessary instruction about a default value, and oversimplified responsive design guidance. The polish of AI-generated content can make us trust it too quickly. Always review with a learner's fresh eyes and verify technical accuracy."
    },
    concepts: ['AI risks', 'Expert vigilance', 'QA perspective', 'Fresh-eyes review'],
    badge: 'Bias Buster'
  },

  // =============================================================================
  // PATH 3: SCAFFOLDING & SEQUENCING
  // =============================================================================

  {
    id: 'scaffolding-1',
    path: 'Scaffolding & Sequencing',
    pathId: 'scaffolding',
    pathColor: 'from-orange-500 to-orange-600',
    difficulty: 1,
    title: 'Bloom\'s Taxonomy Basics',
    scenario: `You're reviewing a microlesson on "Introduction to SQL Queries" and notice the activities jump from basic memorization directly to complex creation without any middle steps.

Current sequence:
1. **Remember**: Memorize SQL SELECT syntax
2. **Create**: Build a multi-table database query with JOIN statements`,
    question: 'Drag the following activities into the correct order to create a proper Bloom\'s Taxonomy progression:',
    type: 'drag-drop',
    items: [
      {
        id: 'item-1',
        label: 'Memorize SQL SELECT syntax',
        order: 1,
        bloomLevel: 'Remember'
      },
      {
        id: 'item-2',
        label: 'Explain the difference between INNER JOIN and LEFT JOIN',
        order: 2,
        bloomLevel: 'Understand'
      },
      {
        id: 'item-3',
        label: 'Write a basic SELECT query to retrieve data from one table',
        order: 3,
        bloomLevel: 'Apply'
      },
      {
        id: 'item-4',
        label: 'Debug a broken SQL query and fix the errors',
        order: 4,
        bloomLevel: 'Analyze'
      },
      {
        id: 'item-5',
        label: 'Build a multi-table database query with JOIN statements',
        order: 5,
        bloomLevel: 'Create'
      }
    ],
    correctAnswer: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'],
    feedback: {
      correct: "Perfect scaffolding! You've built a logical Bloom's progression: Remember → Understand → Apply → Analyze → Create. Each step builds on the previous one, giving learners the foundation they need before moving to more complex tasks. This prevents cognitive overload and builds confidence as they progress.",
      incorrect: "Not quite. Bloom's Taxonomy follows a specific hierarchy: Remember (recall facts) → Understand (explain concepts) → Apply (use in simple contexts) → Analyze (break down, compare, debug) → Create (build something new). Jumping steps leaves learners without the foundational skills they need. Try reordering to build from simple to complex."
    },
    concepts: ['Bloom\'s levels', 'Progression logic'],
    badge: 'Scaffold Master'
  },

  {
    id: 'scaffolding-2',
    path: 'Scaffolding & Sequencing',
    pathId: 'scaffolding',
    pathColor: 'from-orange-500 to-orange-600',
    difficulty: 2,
    title: 'Microlesson Sequencing',
    scenario: `You're building a microlesson on "Conducting User Interviews" for a UX research course. You have a learning objective and several possible activities, but they need to align properly.

**Learning Objective:**
"Learners will be able to conduct a semi-structured user interview using open-ended questions and active listening techniques."`,
    question: 'Which activity best aligns with this learning objective for a 20-minute microlesson?',
    type: 'multiple-choice',
    options: [
      {
        id: 'a',
        text: 'Watch a 15-minute video lecture on the history of user research methodologies, then complete a multiple-choice quiz on key terms.'
      },
      {
        id: 'b',
        text: 'Read a case study about a successful user interview project, then write a reflection on what made it effective.'
      },
      {
        id: 'c',
        text: 'Review a list of open-ended vs closed-ended question examples, then practice conducting a 10-minute mock user interview with a partner using a provided script template.'
      }
    ],
    correctAnswer: 2, // Option C
    feedback: {
      correct: "Excellent alignment! The learning objective requires learners to 'conduct' an interview (application level), so the activity must give them hands-on practice. Option C provides scaffolding (examples of question types), then guided practice (mock interview with template), directly addressing the LO. This is what a well-structured microlesson looks like: one LO + one aligned activity.",
      incorrect: "Not quite. The learning objective asks learners to 'conduct' an interview, which is an application-level skill. Watching a video lecture (passive) or writing a reflection (analysis) doesn't give them practice actually conducting interviews. Effective microlessons match the activity type to the action verb in the LO. Look for the activity that gives hands-on practice."
    },
    concepts: ['Microlesson structure', 'Activity alignment to LO'],
    badge: 'Scaffold Master'
  },

  {
    id: 'scaffolding-3',
    path: 'Scaffolding & Sequencing',
    pathId: 'scaffolding',
    pathColor: 'from-orange-500 to-orange-600',
    difficulty: 3,
    title: 'Module Flow Design',
    scenario: `You're organizing a module on "Python Data Analysis" that includes four microlessons. An AI assistant generated the content, but the sequence is illogical - it jumps around between foundational and advanced topics.

Current sequence:
1. Advanced Statistical Analysis with Pandas
2. Installing Python and Jupyter Notebook
3. Python Basic Syntax and Data Types
4. Introduction to Data Analysis Concepts`,
    question: 'Drag these microlessons into the correct order to create a logical module flow:',
    type: 'drag-drop',
    items: [
      {
        id: 'item-1',
        label: 'Introduction to Data Analysis Concepts',
        order: 1,
        category: 'Context/Why'
      },
      {
        id: 'item-2',
        label: 'Installing Python and Jupyter Notebook',
        order: 2,
        category: 'Setup/Tools'
      },
      {
        id: 'item-3',
        label: 'Python Basic Syntax and Data Types',
        order: 3,
        category: 'Foundations'
      },
      {
        id: 'item-4',
        label: 'Advanced Statistical Analysis with Pandas',
        order: 4,
        category: 'Advanced Application'
      }
    ],
    correctAnswer: ['item-1', 'item-2', 'item-3', 'item-4'],
    feedback: {
      correct: "Perfect module flow! You've created a logical progression: Context (why data analysis matters) → Setup (tools installation) → Foundations (basic syntax) → Advanced Application (statistical analysis). This sequence builds prerequisite knowledge step-by-step and prevents learners from hitting roadblocks. Each microlesson prepares them for the next.",
      incorrect: "Not quite. Effective module sequencing follows a logic: Context/Introduction → Setup/Prerequisites → Foundational Skills → Advanced Application. Starting with advanced topics or installation before context confuses learners. Think about what knowledge or setup a learner needs before they can succeed at each step, then order accordingly."
    },
    concepts: ['Module structure', 'Scaffolding across microlessons'],
    badge: 'Scaffold Master'
  },

  {
    id: 'scaffolding-4',
    path: 'Scaffolding & Sequencing',
    pathId: 'scaffolding',
    pathColor: 'from-orange-500 to-orange-600',
    difficulty: 4,
    title: 'Competency Mapping',
    scenario: `You're designing a new curriculum on "Product Management Fundamentals" for a corporate learning program. You have 9 microlessons that need to be organized into 3 modules under one competency.

**9 Microlessons:**
1. What is Product Management?
2. Writing User Stories
3. Prioritization Frameworks (RICE, MoSCoW)
4. Conducting User Research Interviews
5. Creating Product Roadmaps
6. Defining Product Vision and Strategy
7. Analyzing User Research Data
8. Sprint Planning Basics
9. Stakeholder Communication for Roadmaps`,
    question: 'Organize these 9 microlessons into 3 logical modules. Match each microlesson to the appropriate module:',
    type: 'categorization',
    categories: [
      {
        id: 'module-1',
        name: 'Product Strategy & Vision',
        description: 'Foundation - understanding the "what" and "why" of product management'
      },
      {
        id: 'module-2',
        name: 'User Research & Discovery',
        description: 'Gathering and analyzing user insights'
      },
      {
        id: 'module-3',
        name: 'Roadmapping & Execution',
        description: 'Planning and communicating product direction'
      }
    ],
    items: [
      { id: 'lesson-1', label: 'What is Product Management?', correctCategory: 'module-1' },
      { id: 'lesson-2', label: 'Writing User Stories', correctCategory: 'module-2' },
      { id: 'lesson-3', label: 'Prioritization Frameworks (RICE, MoSCoW)', correctCategory: 'module-3' },
      { id: 'lesson-4', label: 'Conducting User Research Interviews', correctCategory: 'module-2' },
      { id: 'lesson-5', label: 'Creating Product Roadmaps', correctCategory: 'module-3' },
      { id: 'lesson-6', label: 'Defining Product Vision and Strategy', correctCategory: 'module-1' },
      { id: 'lesson-7', label: 'Analyzing User Research Data', correctCategory: 'module-2' },
      { id: 'lesson-8', label: 'Sprint Planning Basics', correctCategory: 'module-1' },
      { id: 'lesson-9', label: 'Stakeholder Communication for Roadmaps', correctCategory: 'module-3' }
    ],
    correctAnswer: {
      'module-1': ['lesson-1', 'lesson-6', 'lesson-8'],
      'module-2': ['lesson-4', 'lesson-7', 'lesson-2'],
      'module-3': ['lesson-3', 'lesson-5', 'lesson-9']
    },
    feedback: {
      correct: "Excellent competency mapping! You've created three cohesive modules with clear thematic clustering. Module 1 establishes foundational PM concepts and strategy, Module 2 focuses on user research skills, and Module 3 covers roadmapping and prioritization. This structure allows for modular delivery - a client could take all three modules for comprehensive PM training, or select specific modules based on their team's needs. This is exactly how modular curriculum design enables flexibility and personalization.",
      incorrect: "Not quite. Think about thematic coherence - which microlessons naturally belong together because they're teaching related skills or building toward a common capability? Module 1 should establish PM foundations and strategy, Module 2 should cluster user research skills, and Module 3 should focus on roadmapping and execution. Try grouping microlessons by shared theme rather than random distribution."
    },
    concepts: ['Competency structure', 'Modules within competencies', 'Modular thinking'],
    badge: 'Scaffold Master'
  },

  // =============================================================================
  // PATH 4: ASSESSMENT QUALITY
  // =============================================================================

  {
    id: 'assessment-1',
    path: 'Assessment Quality',
    pathId: 'assessment',
    pathColor: 'from-purple-500 to-purple-600',
    difficulty: 1,
    title: 'Measurable vs Opinion-Based',
    scenario: `You're reviewing an AI-generated quiz for a project management fundamentals course. One of the questions reads:

**Quiz Question:**
"Do you like agile project management methodologies?"
• Yes
• No
• Sometimes

The learning objective for this section is: "Learners will be able to apply agile ceremonies (stand-ups, retrospectives, sprint planning) in a project context."`,
    question: 'What is the problem with this assessment question?',
    type: 'multiple-choice',
    options: [
      {
        id: 'a',
        text: 'It measures personal preference/opinion rather than knowledge or skill application. It doesn\'t assess whether learners can actually apply agile ceremonies.'
      },
      {
        id: 'b',
        text: 'It should have more answer choices to be a valid multiple-choice question.'
      },
      {
        id: 'c',
        text: 'The grammar is incorrect and needs editing.'
      }
    ],
    correctAnswer: 0, // Option A
    feedback: {
      correct: "Exactly right! This question measures opinion ('Do you like...?') rather than knowledge or skill. The learning objective requires learners to 'apply' agile ceremonies, so the assessment should ask them to demonstrate that application - for example, by describing when to use each ceremony or identifying which ceremony addresses a specific project need. Effective assessments must align with the action verb in the learning objective.",
      incorrect: "Not quite. The issue isn't the number of answer choices or grammar - it's that this question measures personal preference rather than skill or knowledge. When the LO requires learners to 'apply' a concept, the assessment must measure application, not opinion. Look for assessments that ask learners to demonstrate the skill stated in the learning objective."
    },
    concepts: ['Measurable outcomes', 'Assessment alignment to LOs'],
    badge: 'Assessment Architect'
  },

  {
    id: 'assessment-2',
    path: 'Assessment Quality',
    pathId: 'assessment',
    pathColor: 'from-purple-500 to-purple-600',
    difficulty: 2,
    title: 'Exercise Clarity & Deliverables',
    scenario: `You're QA-reviewing a colleague's course materials and find this exercise in a lesson on version control:

**Exercise: Git Practice**

"Practice using Git. Try different commands and see what happens. When you're done, move on to the next section."

You immediately recognize this violates the "don't make me think" principle - learners will waste cognitive load figuring out what to do instead of learning.`,
    question: 'Which revision provides the clarity, structure, and deliverables that learners need?',
    type: 'multiple-choice',
    options: [
      {
        id: 'a',
        text: `**Exercise: Git Practice**

Practice Git commands like commit, push, and pull. Experiment with branching if you have time. Submit your work when finished.`
      },
      {
        id: 'b',
        text: `**Exercise: First Git Commit**

**Purpose:** Practice the basic Git workflow to track changes in a project.

**Time:** 15 minutes

**Steps:**
1. Initialize a new Git repository in a project folder (\`git init\`)
2. Create a new file called \`README.md\` and add one sentence describing your project
3. Stage your file (\`git add README.md\`)
4. Commit your changes with the message "Initial commit" (\`git commit -m "Initial commit"\`)
5. Verify your commit history (\`git log\`)

**Deliverable:** Screenshot of your terminal showing the successful commit and log output`
      },
      {
        id: 'c',
        text: `**Exercise: Learn Git**

Use Git to manage a project. Follow best practices and create commits as needed.`
      }
    ],
    correctAnswer: 1, // Option B
    feedback: {
      correct: "Perfect! This exercise follows all the best practices: clear purpose (why we're doing this), specific time estimate, step-by-step instructions, exact commands with syntax, and a concrete deliverable. Learners know exactly what to do and what success looks like. This prevents wasted cognitive load on logistics and lets them focus on learning the skill.",
      incorrect: "Not quite. Effective exercises need: (1) clear purpose, (2) specific steps, (3) time estimate, (4) concrete deliverable. Vague instructions like 'practice Git' or 'follow best practices' force learners to guess what's expected. Good exercise design removes ambiguity so learners can focus their mental energy on learning, not logistics."
    },
    concepts: ['Exercise design', 'Clear deliverables', 'Don\'t make me think'],
    badge: 'Assessment Architect'
  },

  {
    id: 'assessment-3',
    path: 'Assessment Quality',
    pathId: 'assessment',
    pathColor: 'from-purple-500 to-purple-600',
    difficulty: 3,
    title: 'QA Rubric Application',
    scenario: `You're conducting a QA review of a microlesson on "Creating Accessible Web Forms" using the standard QA rubric. The rubric checks for:
• Learning objective alignment
• Scaffolding/Bloom's progression
• Clarity of instructions
• Accessibility of content itself
• Inclusive language

Here's the microlesson:

**Learning Objective:**
"Learners will be able to create accessible web forms using ARIA labels and semantic HTML."

**Content:**
The lesson provides a definition of ARIA labels and shows one code example of a labeled input field.

**Activity:**
"Build a complete registration form for a website. Include fields for name, email, password, and preferences. Make it accessible."`,
    question: 'Based on the QA rubric, which issues do you identify? (Select all that apply)',
    type: 'multi-select',
    options: [
      {
        id: 'a',
        text: 'No scaffolding - jumps from one example directly to building a complete form (missing guided practice)'
      },
      {
        id: 'b',
        text: 'Activity instructions lack clarity - "make it accessible" is vague with no specific criteria'
      },
      {
        id: 'c',
        text: 'No mention of how to test accessibility (learners don\'t know how to verify success)'
      },
      {
        id: 'd',
        text: 'The learning objective and activity are misaligned - LO is appropriate but activity doesn\'t provide enough structure'
      }
    ],
    correctAnswer: ['a', 'b', 'c'], // First three options
    feedback: {
      correct: "Excellent QA analysis! You identified the key issues: lack of scaffolding (one example → build complete form), vague success criteria ('make it accessible' without specifics), and no guidance on testing/verification. A strong microlesson would include: definition → guided example → practice with template → independent creation, plus clear criteria for accessibility and instructions for testing with screen readers. This is exactly the kind of fresh-eyes perspective that catches issues before they reach learners.",
      partial: "You're thinking like a QA reviewer, but there are more issues to catch. Look at: (1) Scaffolding - does the lesson build from simple to complex? (2) Clarity - do learners know exactly what 'accessible' means in concrete terms? (3) Verification - how will learners know if they succeeded? Apply the rubric criteria systematically.",
      incorrect: "Not quite. The QA rubric reveals several issues: missing scaffolding between example and practice, vague instructions that don't define 'accessible' concretely, and no testing/verification guidance. Strong QA means checking each rubric criterion - alignment, scaffolding, clarity, accessibility, inclusive language - and catching gaps before learners encounter them."
    },
    concepts: ['QA criteria', 'Learner perspective', 'Alignment check'],
    badge: 'Assessment Architect'
  },

  {
    id: 'assessment-4',
    path: 'Assessment Quality',
    pathId: 'assessment',
    pathColor: 'from-purple-500 to-purple-600',
    difficulty: 4,
    title: 'Work-Based Problem Design',
    scenario: `You're evaluating two different assessments for a digital marketing analytics course. Both claim to measure learners' ability to apply data analysis skills, but they take very different approaches.

**Assessment Option A:**
"Explain what conversion rate means and why it's important for digital marketing."

**Assessment Option B:**

**Work-Based Problem: E-Commerce Conversion Analysis**

**Scenario:**
You're a digital marketing analyst at an online fitness equipment retailer. Your manager shares this data from last month's email campaign:

• 50,000 emails sent
• 12,500 emails opened (25% open rate)
• 2,500 clicked through to product pages (20% click rate of opens)
• 250 completed purchases (10% conversion rate of clicks)

Your manager asks: "Our conversion rate from click to purchase is lower than industry average (15%). What's going wrong?"

**Your Task (Choose One):**

**Ticket 1:** Calculate the overall campaign conversion rate (purchases/emails sent) and compare to the click-to-purchase rate. Write a 1-paragraph analysis explaining which metric better represents campaign success and why.

**Ticket 2:** The manager wants to improve the 10% click-to-purchase rate. Propose 2 data-informed hypotheses for why visitors aren't converting, and suggest one A/B test to validate each hypothesis.

**Deliverable:** Your analysis and recommendations in a brief email format (150-200 words)`,
    question: 'Which assessment better measures applied knowledge using work-based problem criteria?',
    type: 'multiple-choice',
    options: [
      {
        id: 'a',
        text: 'Assessment A - it tests foundational knowledge which must come before application'
      },
      {
        id: 'b',
        text: 'Assessment B - it requires learners to analyze real data, apply concepts in context, and make data-informed decisions like they would in a professional role'
      },
      {
        id: 'c',
        text: 'Both are equally valid - they just measure different learning levels'
      }
    ],
    correctAnswer: 1, // Option B
    feedback: {
      correct: "Excellent evaluation! Assessment B is a true work-based problem with all the key elements: realistic scenario, authentic data, professional context, meaningful decision-making, and multiple solution paths. It requires learners to apply knowledge (calculate rates, compare metrics), analyze (identify problems), and create (propose hypotheses and tests) - not just recall definitions. This type of assessment measures transfer of learning to real-world contexts, which is the ultimate goal of professional training.",
      incorrect: "Not quite. While Assessment A measures foundational knowledge (remember/understand), Assessment B measures applied knowledge in a realistic professional context. Work-based problems should mirror actual job tasks - analyzing real data, making decisions with constraints, communicating recommendations. Assessment B provides scenario, requirements, deliverable format, and decision-making opportunities. This distinction matters because we want to assess whether learners can *use* knowledge in context, not just recall it."
    },
    concepts: ['WBP format', 'Real-world application', 'Assessment rigor'],
    badge: 'Assessment Architect'
  }
];

export default challenges;
