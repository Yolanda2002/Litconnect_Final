# FYP——Intelligent Book Sharing and Communicating System that includes Algorithmic Recommendations and Grouping

[TOC]



## 1. Abstract

As an avid reader, I often struggle with not having anyone to share my feelings about the books I read. Existing reading platforms are filled with advertisements and useless features, so I wanted to customize a web platform that would enhance the reading experience by connecting readers through personalized book recommendations and interactive community features, allowing authors to personalize and upload selections and chapters of their books, match them with more appropriate book reviews, find book lovers of similar interests, and interact with them in real time. The platform also features algorithmic recommendations that can push books they are interested in, while everyone can customize their own personal interface. Realize to meet the needs of users to the greatest extent possible.

With this in mind, I have designed a book review system with the above features. This document is my elaboration of the idea and the planning arrangement of the project.



## 2. Goals

### 2.1 Scope

#### 2.1.1 Book review

The book review interface is a form that allows the user to fill in information about the book review he wants to share. The information includes the following fields: book title (required), chapter number (not required), book content cited (not required, this is due to the fact that the user may rate the whole book), and book review (required).

#### 2.1.2 Intelligent recommendation of readers and books

The recommendation interface is divided into two distinct sections, each utilizing a unique set of machine learning algorithms to provide personalized recommendations:

- **Book recommendations:** this interface uses a hybrid recommendation algorithm that combines user-based and item-based collaborative filtering with content-based filtering techniques

  [^1]: [Sewar Khalifeh](https://www.paperdigest.org/isearch/?name=sewar_khalifeh),[Amjed A. Al-Mousa](https://www.paperdigest.org/isearch/?name=amjed_a._al-mousa); "[**A Book Recommender System Using Collaborative Filtering Method**](https://www.paperdigest.org/paper/?paper_id=doi.org_10.1145_3460620.3460744)";[International Conference on Data Science, E-learning and ...](https://www.paperdigest.org/search/?topic=journal.International_Conference_on_Data_Science,_E-learning_and_Information_Systems_2021);2021

  . By studying a user's past interactions with book ratings, reviews, and personal reading history, the system recognizes patterns and preferences unique to each user. Each user has a feature vector that represents the user's preferences. Using cosine similarity
  $$
  
  \cos(\theta) = \frac{A \cdot B}{\|A\| \|B\|}
                = \frac{\sum_{i=1}^{n} A_i B_i}{\sqrt{\sum_{i=1}^{n} A_i^2} \sqrt{\sum_{i=1}^{n} B_i^2}}
  $$
   , the system can calculate the most similar books and push them to the web page. 

- **Interesting Users:** The "Interesting Users" section uses 

  [^2]: [Man Li](https://www.paperdigest.org/isearch/?name=man_li), [Luosheng Wen](https://www.paperdigest.org/isearch/?name=luosheng_wen), [Feiyu Chen](https://www.paperdigest.org/isearch/?name=feiyu_chen);"[**A Novel Collaborative Filtering Recommendation Approach Based on Soft Co-Clustering**](https://www.paperdigest.org/paper/?paper_id=doi.org_10.1016_j.physa.2020.125140)";[Physica A-statistical Mechanics and Its Applications](https://www.paperdigest.org/search/?topic=journal.Physica_A-statistical_Mechanics_and_Its_Applications)'2020

   to study the reading patterns of the user base. It takes into account various factors such as book rating comparisons, 

  [^3]: [Zulfadzli Drus](https://www.paperdigest.org/isearch/?name=zulfadzli_drus), [Haliyana Khalid](https://www.paperdigest.org/isearch/?name=haliyana_khalid);"[** Sentiment Analysis in Social Media and Its Application: Systematic Literature Review**](https://www.paperdigest.org/paper/?paper_id=doi.org_10.1016_j.procs.2019.11.174)";[Procedia Computer Science](https://www.paperdigest.org/search/?topic=journal.Procedia_Computer_Science);2019

  , and frequency of interaction with certain book genres to recommend users with a high degree of similarity.
  
  Depending on the content and type of specific book reviews a user views, their level of interest in each area can be calculated based on preferences, and based on this rating the user with the highest rating relevance can be recommended. The algorithm I use is the Pearson correlation coefficient, which ranges from -1 (least relevant) to 1 (most relevant) to calculate the ratings between users and recommend the users closest to 1, showing that they have the same reading preferences. The formula is as follows: 
  $$
  r_{xy} = \frac{\sum_{i=1}^{n} (X_i - \overline{X})(Y_i - \overline{Y})}{\sqrt{\sum_{i=1}^{n} (X_i - \overline{X})^2} \sqrt{\sum_{i=1}^{n} (Y_i - \overline{Y})^2}}
  $$
  



#### 2.1.3 Chat interface

The system's communication features are categorized into private and group chats to meet user preferences for different interaction methods.

- **Private Chat:** For more personal communication, users can click on the avatar of the person they wish to contact and go directly to the one-on-one chat interface with that user to initiate a private conversation.

- **Groups:** Additionally, for those who prefer to interact with others in the community, group chat provides a space for discussion and exchange. Users have the flexibility to join existing chat groups via friend invitations, or create their own groups around common reading interests. Creating or joining an interest group is simple and can make it easy for them to build and find their favorite communities.



#### 2.1.4 Personal homepage decoration

The "Personal Profile" interface on the platform is divided into two main sections to enhance user convenience and control: the Personal Home Page and Settings.

- **Personal Home Page:** The Personal Home Page is a user-centered space where book reviews and reading experiences are arranged in reverse chronological order. This interface allows users to customize what they show to the outside world:

  - **Show Book Reviews:** The user can choose which book reviews to show to the public. By selecting certain book reviews, users can create a customized profile that best reflects their reading history and insights.

  - **Manage Book Reviews:** Users can effectively manage content, update reading status, and edit or delete book reviews according to their preferences.

- **Settings:** The settings interface is the central hub for configuring the user's interaction with the system. It contains a variety of customizable options and will be improved throughout the development process based on user feedback. The main ones include

- **Privacy Controls:** Users can adjust their privacy settings to control the visibility of their profile and activities to other users on the platform.

- **Notification Preferences:** This is where users can manage their options for receiving alerts about new book releases, information about other users, or follow book discussion updates.

- **Account Management:** Users can edit their account information, including name, email and password(encrypted) changes.

- **Submit Feedback:** Dedicated to submitting feedback on the platform and ensuring that user suggestions are considered in future updates.

Since the "Settings" interface is an essential part, related to the security and usage experience of the system, and some settings may be subsequently discovered only during testing and usage, it needs to be expanded during development and testing.

### 2.2 Outcome

#### 2.2.1 Enhanced Book Review Experience

- **User Engagement:** An assessment of user engagement can be used to characterize a user's intention to participate in a discussion and thus determine their stickiness.
- **Quality of Content:** The quality of discussions around books can be improved if the book reviews are insightful and detailed, with specific references to chapters or passages in the book.

#### 2.2.2 Accurate and Dynamic Book and Group Recommendations

- **Precision in Recommendations:** After recommending a book, track whether there is any information about the recommended book in the user's new book review to see how responsive they are to these algorithms. If very few people encapsulate these recommended books in their new book reviews, it indicates that the algorithms need to be further updated.

  [^4]: [Ronit Malik](https://www.paperdigest.org/isearch/?name=ronit_malik);[**Evaluation Of Recommendation System On A Movie Dataset**](https://www.paperdigest.org/paper/?paper_id=doi.org_10.2139_ssrn.3791837);[SSRN Electronic Journal](https://www.paperdigest.org/search/?topic=journal.SSRN_Electronic_Journal);2020
- **Community Building:** Tracks the activity of individual interest groups, a metric that reflects whether the system has been successful in fostering a sense of community among users with similar reading interests.

#### 2.2.3 Real-Time Chat for Active Reader Engagement

- **Instant Connection:** The chat interface facilitated immediate connections between users, allowing for the swift exchange of thoughts and opinions, which has significantly improved user interaction.
- **Sustained Conversations:** Long-term engagement was observed in the chat groups, where users regularly returned to the group to discuss ongoing readings or book recommendations, suggesting that a sense of community building and engagement with the platform had been fostered.

  [^5]: [DANIEL ADIWARDANA](https://www.paperdigest.org/isearch/?name=daniel_adiwardana) et. al;[**Towards A Human-like Open-Domain Chatbot**](https://www.paperdigest.org/paper/?paper_id=arxiv-2001.09977);[arxiv-cs.CL](https://www.paperdigest.org/search/?topic=arxiv-cs.CL);2020

#### 2.2.4 Personalized User Homepages

- **Personalization:** The system allows for flexible customization of homepages, and many users are able to take advantage of this feature to create eye-catching personal spaces that reflect their reading identities.
- **Visibility and Discovery:** Customizing the homepage helps in discovering new books and book reviewers, as it gives a visual representation of what users care about and what they think.

By tracking the system's functionality, the system is able to learn from user behavior and evolve over time. This allows it to continue to effectively meet the needs of the community and evolve in an ever-changing networked environment.



## 3.User Experience

### 3.1 Audience Defination

The platform clearly distinguishes between two different user roles in terms of access levels and permissions. At the heart of the system are administrators, who have large control and aim to maintain the integrity and functionality of the platform, and regular users, who have equal access to all interactive features. The architecture ensures a smooth experience for every user, regardless of their role, thus promoting community formation and active participation.

### 3.2 Senarios——Typical Users

#### 3.2.1 Users

Basic users of this system enjoy the same privileges. They can have different needs, ranging from readers who are keen to share their recent reading experiences to community seekers looking for like-minded people to discuss common literary interests. It also includes potential readers looking for their next book based on peer reviews, as well as readers documenting their reading journey as a personal chronicle. Here, each user is a vital thread in the reading community, contributing to a rich dialog and shared knowledge base. Since everyone has the same permissions, all have the opportunity to be seen, and every sentiment is able to be discovered by others.

#### 3.2.2 Administrators

Administrators are responsible for maintaining the overall health of the platform, managing community interactions, and filtering content. They are the guardians and enablers of the system. They must also ensure that the recommendation algorithms in the system are constantly updated to reflect the latest needs and preferences of users. To keep the platform running smoothly, they are also responsible for managing and maintaining the database and categorizing books to make them easy to find. Administrators have privileges above those of regular users to facilitate the system.



## 4. Feasibility Study

### 4.1 Technological (T)

- **Front-end:** React enhances the user experience by building user-friendly interfaces with integrated user interface libraries. Including React in my learning path will allow me to get up to speed faster and drill down into more features.
- **Back-end:** The backend will be built in Java, utilizing powerful frameworks such as Spring Boot to facilitate the creation of high-performance, scalable web applications. Building the backend was easier and more efficient because I had previously learned and used the Java language.
- **Database:** MySQL serves as the primary relational database management system, ensuring reliable structured data storage and integrity for the system's  needs. 
- **Caching:** Redis fulfills caching requirements and improves system performance by storing frequently accessed data in memory for fast retrieval.
- **Message Queue:** Apache Kafka is used for handling message brokering with its high-throughput, fault-tolerant, publish-subscribe messaging system to facilitate real-time data feeds and operational requests.
- **Containerization:** Docker is used to deploy applications in containers, ensuring consistent operation across environments and facilitating continuous integration and deployment pipelines. In my previous work experience, I've built Docker environments to easily accommodate projects working in different configuration environments.

### 4.2 Economic (E)

- **Hosting Costs:** Cloud hosting is estimated at around $100 per month for moderate usage scenarios.
- **Database Server:** Costs for MySQL management services range from $50 to over $200 per month based on configurations. 
- **Software:** Both React and Java-based frameworks such as Spring Boot are open-source and incur no licensing fees.
- **Storage:** Prices for cloud storage services such as Amazon S3 or Google Cloud Storage are approximately $0.023 per GB for the first 50TB per month.
- **Others:** Domain registration and SSL certificate costs will apply, typically around $30 per year for domain and potentially free to premium costs for SSL depending on the chosen provider.

### 4.3 Legal (L)

- **Data Privacy & Protection:** Compliance with data protection laws like GDPR or CCPA will be essential, involving encryption of sensitive user data stored in the database.
- **Licensing:** While using Java and associated frameworks, compliance with their respective open-source licenses is mandatory. Care will be taken to avoid using proprietary components without proper licensing.
- **Transactions & Payments:** The platform must consider legal aspects related to invoicing, tax compliance, record-keeping, and handling payment disputes.
- **Intellectual Property:** Measures to protect the custom-developed code, trademarks, and copyrights for the platform must be established.

### 4.4 Operational (O)

- **Scalability:** The system is designed to be scalable, thanks to the flexibility offered by cloud services and the robustness of the Java ecosystem.
- **Maintenance:** Regular maintenance is vital for addressing software patches, security updates, and functional upgrades.
- **Backup & Disaster Recovery:** Robust backup strategies and disaster recovery plans will be essential for the database servers storing critical data.
- **Training:** Training materials and documentation will be provided to help users and administrators make the most of the system's features.
- **Security:** Ongoing security audits and adherence to best practices in software development will ensure the system's integrity.

### 4.5 Schedule (S)

- **Project Initialization & Setup (January 10 - January 17):** Set up the initial development environment, establish project guidelines, and select necessary development tools.
- **System Design & Database Schema (January 18 - January 31):** Lay out high-level system architecture planning and database schema design.
- **Back-end Development - Java (February 1 - February 28):** Develop the application's core back-end functionality, including integration with MySQL and the implementation of service logic with Java.
- **Front-end Development - React (March 1 - March 20):** Construct front-end components and connect them with the Java back-end services.
- **Testing & Debugging (March 21 - April 10):** Carry out strict testing phases, use black-bow and white-box tests to intimately the system and put it into use.
- **Documentation & Training Materials (April 11 - April 20):** Develop comprehensive user manuals, API documentation, and training materials for end-users and system administrators.
- **Final Review & Deployment (April 21 - April 30):** Final system review, gathering user feedback, making necessary adjustments, and preparing for deployment to production.



## 5. Methodology

### 5.1 The Problem from a Process Viewpoint

From a process perspective, the development of my book sharing platform faced a number of challenges. The requirements for the platform were not completely clear from the start and had to be refined through iterative customer feedback and user testing. This is because users' reading and sharing behaviors can provide new insights that influence feature development and prioritization.

The project also integrated a large number of new technologies, such as Redis' advanced caching mechanisms and Apache Kafka's message queues, which can create a certain amount of unsettlement in the development process of my projects as they require me to constantly learn new things. In addition, the web was at the heart of the project, as the platform was entirely web-based and required a responsive and accessible design.

There are also a large number of features to consider, such as user profiles, book catalogs, recommendation algorithms, and commenting systems all of these features need to be developed separately and assembled and configured with each other so as to adapt to my system, and therefore there may be a risk that all of them will not be able to be used, and will require uninterrupted testing in order to continue to improve them.

### 5.2 Assessment of Chosen Methodologies

Initially, I conducted extensive research and study of various development methods to determine the best fit for this project.

- **Waterfall Methodology:** The first thing I considered was the most basic waterfall model. It was clearly structured and had a clear time for phase completion before moving on to the next phase, however, I soon realized that the stereotypical  model was not suited to projects where user feedback was critical and requirements were constantly changing. If one part of the process goes wrong, I will have to start the process all over again.

- **V-Model:** Next I looked at the V model, which emphasizes verification and validation, which at first glance seems beneficial. However, the model is as inflexible as the waterfall model, is equally ineffective in handling changing requirements, and does not support iterative releases.

- **Spiral Model:** The spiral model is characterized by a focus on risk assessment, and while this model can support continuous iteration and evaluation of the system, its complexity and the need for significant risk assessment expertise can make it difficult for me to get started with a variety of inconveniences.

- **Incremental and Iterative Development:** This approach is closely aligned with project requirements, as it allows for phased feature development and iteration. However, without having a strong framework to manage and prioritize work at the outset, this approach still lacks the structural flexibility required. It was too difficult for me to use for the first time.

- **Agile-Scrum Match:** I have found that Scrum

  [^6]: https://www.youtube.com/watch?v=9TycLR0TqFA
  
   in an Agile framework is well suited to these needs. Its iterative nature allows for frequent reevaluation of project priorities to ensure that the product is developed to deliver real user value, and Scrum's emphasis on continuous improvement allows for flexible scheduling of tasks, which is beneficial when dealing with creative and dynamic scope adjustments in project like mine.
  
  ![image-20231105200116499](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231105200116499.png)

Through my research into various models, Scrum stood out. Its strength in creating a collaborative environment capable of responding quickly to change, and its ability to be continually adapted and evaluated in response to needs, led me to choose it as the method of analysis.

### 5.3 Process Outline

Since Scrum development requires constant interaction and discussion with the group during the execution of the project, and I had only one person as a team and a mentor to guide me, I adapted the Agile-Scrum methodology to a one-person workflow. In the absence of a team, I had to self-organize and self-regulate according to the Scrum framework. Here is how the Scrum methodology is applied after my adaptation:

- **Sprint Planning:** At the beginning of each Scrum (which lasts two weeks), I will create a list of tasks from the Product Backlog with the goal of completing them during the Sprint. This plan will serve as my commitment to the target tasks for the Sprint Backlog.

- **Daily Scrum:** I will conduct a daily personal review, a time-limited activity strictly limited to 15 minutes, to assess progress and plan for the next 24 hours. During the brainstorming process, I will need to record my ideas and execute them rigorously to make it easier for my mentor to assess the weekly work. This replaced the need for daily team meetings and helped keep the project on track.

- **Sprint Review:** At the end of each sprint, I will conduct a review to present the completed work to my mentor and may use live presentations such as PowerPoint to efficiently explain my work to others if necessary. I will also explain the specifics of the next stage.

- **Reflective Improvement:** At the end of the review, I will conduct a retrospective to analyze what worked and what could be improved in the next sprint. I will change my current operations in response to the suggestions made by my mentor and others, and the lessons learned will be documented so that I can avoid recurrence of similar problems during subsequent research and development.

- **Backlog Refinement:** During the sprint, I will continually update the product backlog, add new tasks or make adjustments based on lessons learned from the previous sprint to ensure that priorities are aligned with the project's evolving needs and goals.

- **Incremental Releases:** My goal is to release a usable project increment at the end of each sprint to ensure stable development of the platform and to effectively incorporate feedback to guide further development phases.

- **Documentation:** Documentation will be an ongoing process throughout the sprint to ensure that all aspects regarding the project's progress, adjustments, and planning are documented for future reference when modifying features and to help mentors and others evaluate my work.

### 5.4 Sprint Breakdown and Timeline

The project will be divided into a series of sprints, each focusing on a specific set of deliverables. Below is an outline of each sprint:

#### Sprint 1: Project Setup (Duration: 2 weeks)
- **Dates:** January 10 - January 24
- **Objectives:** Set up the development environment, initialize the project repository, and define initial requirements.
- **Tasks:**
  - Set up IDE and necessary development tools.
  - Create the project's source repository with version control.
  - Draft the initial project scope and software requirements document with mentor input.
- **Deliverables:** Development environment ready, project repository initialized, initial documentation draft.

#### Sprint 2: Design Phase (Duration: 2 weeks)
- **Dates:** January 25 - February 7
- **Objectives:** Finalize the software architecture, choose technology stack components, and create the database schema.
- **Tasks:**
  - Design the system architecture and database schema.
  - Select the technology stack in consultation with the mentor.
  - Document architectural decisions and prepare initial design documents.
- **Deliverables:** System architecture diagram, technology stack documentation, database schema.

#### Sprint 3: Prototype Development (Duration: 3 weeks)
- **Dates:** February 8 - February 28
- **Objectives:** Develop a basic working prototype of the system with minimal features.
- **Tasks:**
  - Implement core functionality.
  - Develop a simple user interface for initial testing.
  - Begin writing unit tests for developed features.
- **Deliverables:** Working prototype, basic UI, initial unit tests.

#### Sprint 4: Feature Development and Testing (Duration: 4 weeks)
- **Dates:** March 1 - March 28
- **Objectives:** Build on the prototype to develop additional features and enhance the system's functionality.
- **Tasks:**
  - Develop additional features identified during the design phase.
  - Expand the database to include new entities and relationships.
  - Perform continuous testing and iteration on feedback from mentor reviews.
- **Deliverables:** Additional features implemented, expanded database, ongoing testing reports.

#### Sprint 5: Refinement and Secondary Features (Duration: 3 weeks)
- **Dates:** March 29 - April 18
- **Objectives:** Refine existing features and add secondary features. Focus on UI/UX improvements and system optimization.
- **Tasks:**
  - Optimize system performance.
  - Improve user interface based on prototype feedback.
  - Integrate secondary features to enhance usability.
- **Deliverables:** Refined primary features, implemented secondary features, improved UI/UX design.

#### Sprint 6: Final Testing, Documentation, and Deployment (Duration: 2 weeks)
- **Dates:** April 19 - May 3
- **Objectives:** Conduct final tests, complete documentation, and prepare the system for deployment.
- **Tasks:**
  - Finalize all testing, including user acceptance testing with mentor oversight.
  - Complete all project documentation with mentor review.
  - Set up the production environment and deploy the system.
- **Deliverables:** Fully tested system, complete documentation set, deployed application.

#### Sprint 7: Project Closure and Review (Duration: 1 week)
- **Dates:** May 4 - May 10
- **Objectives:** Officially close the project with a final review session with the mentor. Reflect on the project and identify lessons learned.
- **Tasks:**
  - Conduct a final project review with the mentor.
  - Document lessons learned and final project reflections.
  - Archive project materials and prepare a closing report.
- **Deliverables:** Lessons learned document, final project report, project archive.

Each sprint began with a planning meeting and ended with a review and recap that informed the goals for the next sprint. Throughout the project, my mentor's guidance will ensure that I am on the right track to keep the R&D process under control, within reasonable and efficient limits, and that my R&D process is constantly evaluated.

## 6. Risk Management

### 6.1 Integrity

**Risk:** Integrity risk refers to incorrect or altered information being displayed or shared on the platform.

Mitigation: In my system, I will use encryption, when the user submits a book review and the system saves the data is to use strong encryption algorithms to prevent the data from being intercepted in transit. There will also be an authentication mechanism when the user logs in to prevent bad users from injecting all kinds of attacks.

[^7]: [QIAN ZHANG](https://www.paperdigest.org/isearch/?name=qian_zhang) et. al.;[**Time and Attribute Based Dual Access Control and Data Integrity Verifiable Scheme in Cloud Computing Applications**](https://www.paperdigest.org/paper/?paper_id=doi.org_10.1109_access.2019.2942649);[IEEE Access](https://www.paperdigest.org/search/?topic=journal.IEEE_Access);2019



[^8]: [Vidhyanandhini Krishnasamy](https://www.paperdigest.org/isearch/?name=vidhyanandhini_krishnasamy), [Saravanarajan Venkatachalam](https://www.paperdigest.org/isearch/?name=saravanarajan_venkatachalam);[**An Efficient Data Flow Material Model Based Cloud Authentication Data Security and Reduce A Cloud Storage Cost Using Index-level Boundary Pattern Convergent Encryption Algorithm**](https://www.paperdigest.org/paper/?paper_id=doi.org_10.1016_j.matpr.2021.04.303);[Materials Today: Proceedings](https://www.paperdigest.org/search/?topic=journal.Materials_Today:_Proceedings);2021





### 6.2 Authentication

**Risk:** The process of verifying that the credentials provided by the user or stored in the system prove that the user is who they say they are. If the credentials match, access is granted, if not, access is denied.

**Mitigation:** Multi-Factor Authentication (MFA): In addition to a username and password, my system requires the user to provide a second form of authentication, such as a text message verification code, an email link, biometric information, or a one-time password (OTP) generated by a mobile authentication application. This can greatly improve security because even if a password is stolen, it is impossible to log in without a second factor. This can greatly improve security.

[^9]: Aloul, F. A. ; The Need for Effective Information Security Awareness; Journal of Advances in Information Technology, 3(3);2012



### 6.3 Accessibility

**Risk:** Non-compliance with accessibility standards may exclude users and expose the project to legal risks. 

**Mitigation:** Avoid using any unauthorized resources to avoid copyright disputes that could affect the subsequent development of the system. Study the scope of use carefully before using the terms of use, and get authorization and record.

### 6.4 Security

**Risk:** Security vulnerabilities might lead to unauthorized data breaches or system compromise. 

**Mitigation:** In the face of possible cyber-attacks, I will test using a variety of means to scan for vulnerabilities. The means include: software testing, scanning using popular code auditing software on the market and following up to fix all high-risk issues; and external black-box testing to test whether commonly used attack methods can break software security restrictions;

### 6.5 Illness

**Risk:** Personal health issues could delay or halt the development process. 

**Mitigation:** Maintain comprehensive documentation and follow best practices in code hygiene to allow easy transition to other developers if needed. 

[^10]: McConnell, S.;Rapid Development: Taming Wild Software Schedules.;Microsoft Press; 1996

### 6.6 No Backups

**Risk:** Failure to back up system data regularly can result in the permanent loss of critical user and system information in the event of a hardware malfunction, data corruption, or other data loss incidents.

**Mitigation:** IImplement a regular backup schedule that covers all critical data, including user information, book reviews, and maintenance logs. The backup process should be automated to minimize the risk of human error, and backups should be stored in a separate, secure location to prevent loss at the same time as the primary system. Also, using cloud services that provide automatic redundancy can provide another layer of data protection. Having a disaster recovery plan in place that outlines clear steps for restoring system functionality from backups after an incident ensures that downtime and service interruptions are minimized.

[^11]: [Abedallah Zaid Abualkishik](https://www.paperdigest.org/isearch/?name=abedallah_zaid_abualkishik), [Ali A. Alwan](https://www.paperdigest.org/isearch/?name=ali_a._alwan), [Yonis Gulzar](https://www.paperdigest.org/isearch/?name=yonis_gulzar);[**Disaster Recovery in Cloud Computing Systems: An Overview**](https://www.paperdigest.org/paper/?paper_id=doi.org_10.14569_ijacsa.2020.0110984);[International Journal of Advanced Computer Science and ...](https://www.paperdigest.org/search/?topic=journal.International_Journal_of_Advanced_Computer_Science_and_Applications);2020



## 7.Tools and Technologies

### 7.1 Hardware

Based on the available development hardware, I used the following devices：

- **Main Development Machine:**
  - **Device Name:** LAPTOP-KRQP13F8
  - **Processor:** Intel(R) Core(TM) i7-10510U CPU @ 1.80GHz with a turbo boost up to 2.30 GHz
  - **Memory:** 16.0 GB RAM (15.8 GB usable), facilitating efficient compilation times and responsive testing environments.
  - **System Type:** 64-bit OS, x64-based processor, ensuring compatibility with modern development frameworks and virtualization software.
  - **Touch Support:** Equipped for 20 touch points, enabling touch-related feature development and testing.
- **Secondary Devices:**
  - **Mobile Devices:** Various iOS and Android devices with up-to-date operating systems to test mobile responsiveness and cross-platform features.
  - **External Hard Drives:** For local backups and additional storage, with encryption capabilities to secure sensitive project data.
- **Networking Equipment:**
  - **Routers and Switches:** High-speed networking hardware for local connectivity and testing network-related features within the application.

### 7.2 Software

| Software Category | Software Name      | Version       | Purpose                                                    |
| ----------------- | ------------------ | ------------- | ---------------------------------------------------------- |
| Operating System  | Windows 10 Pro     | Windows 10    | Provides the primary operating environment for development |
| IDE for Java      | IntelliJ IDEA      | 2021.3.2      | Java development and project management                    |
| IDE for Web Dev   | Visual Studio Code | 1.55          | Front-end development and design                           |
| Database - SQL    | MySQL Workbench    | 8.0.23        | SQL database design, development, and testing              |
| Version Control   | Git                | 2.31.1        | Source code management and tracking                        |
| Collaboration     | GitHub             | -             | Remote repository hosting and collaboration                |
| Containerization  | Docker Desktop     | 20.10.5       | Containerization and consistent deployment environments    |
| API Testing       | Postman            | 8.0.7         | Creating, testing, and managing APIs                       |
| Documentation     | Microsoft Office   | Office 365    | Documentation, spreadsheet, and presentation creation      |
| Backup            | Google Drive       | -             | Cloud storage for file backup and sharing                  |
| Browser           | Google Chrome      | 89.0.4389.114 | Web browsing and web application testing                   |

## 8. Title Content

![image-20231126231844984](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231126231844984.png)

![image-20231126231927815](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231126231927815.png)



### 8.1 Initial Architectural Blueprints

#### 8.1.1 Use Case Diagram

![image-20231126232221859](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231126232221859.png)

#### 8.1.2 Class Diagram

![image-20231126232251924](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231126232251924.png)

#### 8.1.3 Sequence Diagram

1. Login Page

![image-20231230184847990](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231230184847990.png)

2. Book Review Page

![image-20231230185125104](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231230185125104.png)

3. Recommendation Page

![image-20231230185153054](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231230185153054.png)

4. Chat Page

![image-20231230185218861](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231230185218861.png)

5. Profile Page

![image-20231230185238908](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231230185238908.png)

### 8.2 Database

#### 8.2.1 ER Diagram

![image-20231230224727880](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231230224727880.png)



## 9. Visual Design

### 9.1 Design Sketches and Layout

![1b840cbf7ce4f02623668534ba3fc73](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\1b840cbf7ce4f02623668534ba3fc73.jpg)

![ba3f27f95b5bc69e018fe80a9a9d445](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\ba3f27f95b5bc69e018fe80a9a9d445.jpg)

![45adae3cb5e07cacd16d3ba4fe72eba](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\45adae3cb5e07cacd16d3ba4fe72eba.jpg)

![206cd9cf3e061e6e516532ba0d247a9](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\206cd9cf3e061e6e516532ba0d247a9.jpg)

![48a27e7a2ee54180a04f602b203bbb0](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\48a27e7a2ee54180a04f602b203bbb0.jpg)

![310b07a6744075e9d3b3e965d395787](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\310b07a6744075e9d3b3e965d395787.jpg)

![21b523309185edd75381aa12803843c](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\21b523309185edd75381aa12803843c.jpg)

### 9.2 Mock ups

![10883f500a9758f368782d6fc7b3047](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\10883f500a9758f368782d6fc7b3047.jpg)

## 10. Prototype

### 10.1 On Website

![image-20231230182425659](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231230182425659.png)

![image-20231230182505322](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231230182505322.png)

![image-20231230182530768](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231230182530768.png)

![image-20231230182740380](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231230182740380.png)

Whenever clicking on "Alice", it will go to "Alice" page.

![image-20231230182848027](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231230182848027.png)

![image-20231230182750595](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231230182750595.png)

![image-20231230182800093](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231230182800093.png)

![image-20231230182809385](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231230182809385.png)

![image-20231230182827291](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231230182827291.png)

### 10.2 On Phones

These pages change size and adapt themselves with browsers and devices.

![image-20231230183044712](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231230183044712.png)

![image-20231230183143760](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231230183143760.png)

## 11. Schedule

Here is my division and arrangement of the sprints and time:

| Sprint                                          | Duration | Dates           | Objectives                                                   | Tasks                                                        | Deliverables                                                 |
| ----------------------------------------------- | -------- | --------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1: Project Setup                                | 2 weeks  | Jan 10 - Jan 24 | Set up the development environment, initialize the project repository, and define initial requirements. | - Set up IDE and necessary development tools.<br>- Create the project's source repository with version control.<br>- Draft the initial project scope and software requirements document with mentor input. | Development environment ready, project repository initialized, initial documentation draft. |
| 2: Design Phase                                 | 2 weeks  | Jan 25 - Feb 7  | Finalize the software architecture, choose technology stack components, and create the database schema. | - Design the system architecture and database schema.<br>- Select the technology stack in consultation with the mentor.<br>- Document architectural decisions and prepare initial design documents. | System architecture diagram, technology stack documentation, database schema. |
| 3: Prototype Development                        | 3 weeks  | Feb 8 - Feb 28  | Develop a basic working prototype of the system with minimal features. | - Implement core functionality.<br>- Develop a simple user interface for initial testing.<br>- Begin writing unit tests for developed features. | Working prototype, basic UI, initial unit tests.             |
| 4: Feature Development and Testing              | 4 weeks  | Mar 1 - Mar 28  | Build on the prototype to develop additional features and enhance the system's functionality. | - Develop additional features identified during the design phase.<br>- Expand the database to include new entities and relationships.<br>- Perform continuous testing and iteration on feedback from mentor reviews. | Additional features implemented, expanded database, ongoing testing reports. |
| 5: Refinement and Secondary Features            | 3 weeks  | Mar 29 - Apr 18 | Refine existing features and add secondary features. Focus on UI/UX improvements and system optimization. | - Optimize system performance.<br>- Improve user interface based on prototype feedback.<br>- Integrate secondary features to enhance usability. | Refined primary features, implemented secondary features, improved UI/UX design. |
| 6: Final Testing, Documentation, and Deployment | 2 weeks  | Apr 19 - May 3  | Conduct final tests, complete documentation, and prepare the system for deployment. | - Finalize all testing, including user acceptance testing with mentor oversight.<br>- Complete all project documentation with mentor review.<br>- Set up the production environment and deploy the system. | Fully tested system, complete documentation set, deployed application. |
| 7: Project Closure and Review                   | 1 week   | May 4 - May 10  | Officially close the project with a final review session with the mentor. Reflect on the project and identify lessons learned. | - Conduct a final project review with the mentor.<br>- Document lessons learned and final project reflections.<br>- Archive project materials and prepare a closing report. | Lessons learned document, final project report, project archive. |

## 12. Reference

