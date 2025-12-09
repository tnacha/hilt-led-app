# HILT-LED Badge System

## Badge Award Structure

**One badge per path** - Awarded after completing all 4 challenges in that path

---

## The Four Badges

### 1. Prompt Whisperer 🔵
**Path:** Prompting & Refinement  
**Color:** Blue (#2E5090 to #00B4D8 gradient)  
**Earned by completing:**
- Challenge 1: Crafting Effective Learning Objectives
- Challenge 2: Prompt Engineering for Microlessons
- Challenge 3: Scaffolding AI-Generated Content
- Challenge 4: Refining AI Case Studies

**Represents:** Mastery of working with AI to generate and refine high-quality learning content

---

### 2. Bias Buster 🟦
**Path:** Bias & Ethics  
**Color:** Teal (#00B4D8 to cyan gradient)  
**Earned by completing:**
- Challenge 1: Spotting Cultural Bias
- Challenge 2: Representation in Examples
- Challenge 3: AI Assumptions & Accessibility
- Challenge 4: Vigilance Against AI "Falling Asleep"

**Represents:** Expertise in identifying and mitigating bias in AI-generated learning content

---

### 3. Scaffold Master 🟧
**Path:** Scaffolding & Sequencing  
**Color:** Orange (#FF6B35 gradient)  
**Earned by completing:**
- Challenge 1: Bloom's Taxonomy Basics
- Challenge 2: Microlesson Sequencing
- Challenge 3: Module Flow Design
- Challenge 4: Competency Mapping

**Represents:** Excellence in building logical learning progressions with AI assistance

---

### 4. Assessment Architect 🟪
**Path:** Assessment Quality  
**Color:** Purple (#7209B7 gradient)  
**Earned by completing:**
- Challenge 1: Measurable vs Opinion-Based
- Challenge 2: Exercise Clarity & Deliverables
- Challenge 3: QA Rubric Application
- Challenge 4: Work-Based Problem Design

**Represents:** Skill in ensuring AI-supported assessments measure meaningful learning

---

## Implementation Notes

**Progress Tracking:**
- Track completed challenges per path in localStorage
- Award badge when all 4 challenges in a path are completed
- Display earned badges on Progress page
- Show locked (grayed out) badges for incomplete paths

**Visual Design:**
- Use gradient circles matching path colors
- Badge icon: Award ribbon (lucide-react Award component)
- Display badge name and path name below icon
- Show "Locked" or progress indicator (e.g., "2/4 Complete") for unearned badges

**User Experience:**
- Celebrate badge earning with animation/modal when 4th challenge completed
- Allow users to view badge details (what it represents, which challenges earned it)
- Export badges as part of progress report/certificate (future feature)