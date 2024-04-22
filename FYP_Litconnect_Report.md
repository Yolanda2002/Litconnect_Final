# Litconnect: Intelligent Book Sharing and Communicating System that includes AI and Grouping

**Author**: Jia Yang

**Student Number**: 20104736

**Instructor**: Jacqui Woods O' Brien

------



[TOC]

------



## 1. Abstract

As an avid reader, I often struggle with not having anyone to share my feelings about the books I read. Existing reading platforms are filled with advertisements and useless features, so I wanted to customize a web platform that would enhance the reading experience by connecting readers through personalized book recommendations and interactive community features, allowing authors to personalize and upload selections and chapters of their books, match them with more appropriate book reviews, find book lovers of similar interests, and interact with them in real time. The platform also features AI communication that can push books they are interested in, while everyone can customize their own personal interface. In the dashboard, users can also see the Realize to meet the needs of users to the greatest extent possible.

With this in mind, I have designed a book review system with the above features. This document is my elaboration of the idea and the planning arrangement of the project.



## 2. Declaration

I solemnly declare that the final year project “Web application based on Spring-Boot for tourists who want to travel” I submitted was completed independently under the guidance of my supervisor. The research results, data and opinions involved in the article were obtained by myself through searching for information and research. Except for the content cited in the article, this article does not contain works or results that have been published or written by any other individual or collective. Other individuals and groups who contributed to the research for this article are clearly identified in the text in an appropriate manner.
During the research and writing process of this graduation project, I have strictly abided by the academic integrity regulations stipulated by the school to ensure the authenticity and validity of all data, charts, quoted theories and other information. I am responsible for the research content, authenticity and completeness of the data in this article.



## 3. Introduction

### 3.1 Functions

#### 3.1.1 Log in and Register

After entering the website, the default interface is login, if it is the first time to enter the website, you can click on the bottom to register interface. Here you can enter the user name and password, when you enter the used username will report an error, the password is less than 8 digits will also report an error.

<img src="C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20240422135209666.png" alt="image-20240422135209666"  />

![image-20240422135156676](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20240422135156676.png)

#### 3.1.1 Reviews Pages

At the bottom of the interface there are buttons for a number of functions, the most critical function being the Reviews screen in the center. This interface, when clicked, will display thumbnails of all the Reviews on the interface, and after clicking into the thumbnails, there are corresponding links to click on, which will take you to the details interface of each Review to view more information. At the top of the interface is a search bar that allows you to search for all Book Reviews with related content, keyword matching to the title. Below the search box, there is a tag selector. When you select the corresponding tag, it will filter out the thumbnail information of the specific reviews of the corresponding tag.

![image-20240422124445561](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20240422124445561.png)

In the bottom right corner of the interface, there is a button to add reviews, clicking the button can automatically jump to the interface to add new book or movie reviews.The book review interface is a form that allows the user to fill in information about the book review he wants to share. The information includes the following fields: book title (required), tag (required), review title (required), and book review details(required). Users can decide whether they want to upload images to the website.

![image-20240422124503754](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20240422124503754.png)



#### 3.1.2 AI Helper

After clicking the second AI button below, you will be automatically redirected to the AI helper interface. In this interface, users can talk to the AI. The AI currently used is the chatgpt3.5 interface.[1] I looked for a third-party platform to purchase a usage credit.[2] This can be effectively managed during subsequent use.It can handle a variety of needs, including but not limited to: recommending books, recommending movie episodes, finding episodes for content, finding specific content for books, etc. Users can interact with the AI according to their own needs, so as to conveniently find all kinds of information, easy to edit book reviews, etc.

![image-20240422125452151](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20240422125452151.png)



#### 3.1.3 Chat interface

At the top of the interface, there are buttons to choose between public chat or group private chat, so users can switch back and forth between the two forms of communication according to their needs.

- **Public chat:** In this interface, users can interact with all users in real time. Everyone's information can be displayed in the interface in real time, thus making it easier for everyone to chat. Users can select topics of interest to talk to the current online users and can view the history of messages.

  ![image-20240422132315646](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20240422132315646.png)

- **Group Chat:** In addition, for users who like specific books or movies, group chat provides a space for discussion and exchange. Users can create chat rooms based on the content they are interested in, allowing for flexible communication with people who are also interested. Users have the flexibility to join existing chat groups through friend invitations, or create their own groups around common reading interests. After joining the community, users are able to speak freely about their areas of interest.

![image-20240422132331528](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20240422132331528.png)





### 3.1.4 Dashboard

After clicking on the first button below, you can access the Dashboard, which shows the number of likes, comments, favorites and book reviews that all others have made about the user. Below that are some statistical charts that record all the types of responses from others (differentiated by different colors), and the specific content and number of displays. The lower horizontal coordinate is the month's response.

![image-20240422133925800](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20240422133925800.png)

![image-20240422133942824](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20240422133942824.png)



#### 3.1.4 Personal homepage 

The "Me" interface on the platform is divided into two main sections to enhance user convenience and control: avatar settings, personal collection display and logout button.

- Avatar Box: Click on the avatar box to change the avatar photo, which will be utilized in all chat messages.

- My book review page: you can click on it to go to all the book reviews created by the user, and click on a specific book review to display the specific information.

  ![image-20240422133453644](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20240422133453644.png)

- My collection page：*Users can find all the contents of the likes in this interface.*

- *My likes：*Users can find all the contents after clicking favorite here.

- Log out button: click it to log out and realize account switching.

![image-20240422133410620](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20240422133410620.png)

### 3.2 Features

In designing the features for our book review platform, we have meticulously integrated various elements that set it apart from common book review websites in the market. Here’s an analysis of the distinctive features of our platform:

#### 3.2.1 Integrated AI Helper
Unlike many traditional book review websites, my platform incorporates an AI helper using the ChatGPT-3.5 interface. This AI assistant is capable of more than just basic interactions; it can recommend books and movies, find specific content within books, and assist in creating and editing book reviews. This tool significantly enhances user experience by providing personalized assistance on-demand, which is not typically found on other platforms.

#### 3.2.2 Dynamic Chat Interface Options
My platform uniquely offers both public and group private chats, allowing users to engage in real-time conversations. This feature supports community building and provides a dynamic space for discussions around books and movies. Users can join public chats to engage with a broader audience or enter group chats focused on specific topics or interests. This flexibility in communication is a step beyond the static comment sections commonly found on other book review sites.

#### 3.2.3 Comprehensive Dashboard
The Dashboard feature on my platform provides a robust analytics interface, showing users an aggregation of likes, comments, favorites, and reviews of their posts. It includes visual statistical charts that break down responses by color-coded categories over different months. This personalized feedback mechanism helps users track their engagement over time, which is generally not available on conventional book review sites.

#### 3.2.4 Customizable Personal Homepage
The "Me" interface offers a highly personalized user experience where individuals can manage their avatar, access and edit their book reviews, and manage their collections and likes. This personal homepage goes beyond basic profile features, giving users a central place to manage their content and interactions effectively.

#### 3.2.5 Review Addition with Media Uploads
My platform allows users to add reviews with an option to upload images. This feature enhances the review detail and engages other users visually, making the review content more appealing and informative. While some platforms allow image uploads, our seamless integration ensures that adding visual content is straightforward and enhances the overall review experience.

These unique features are designed to provide a comprehensive, engaging, and user-friendly environment for book lovers and movie aficionados alike, setting my platform apart from the standard functionalities of existing book review websites.

### 3.3 User Experience

#### 3.3.1 Audience Defination

The platform clearly distinguishes between two different user roles in terms of access levels and permissions. At the heart of the system are administrators, who have greater control over the removal of user comments and book review content with the aim of maintaining the integrity and functionality of the platform, and regular users, who have equal access to all interactive features. The architecture ensures a smooth experience for every user, regardless of their role, thus promoting community formation and active participation.

#### 3.3.2 Senarios——Typical Users

**1.Users**

Basic users of the system enjoy the same privileges. They can have different needs, ranging from readers eager to share their recent reading experiences to community seekers looking for like-minded people to discuss common literary interests. They can talk to the AI helper on demand, monitor background feedback on their book reviews, and create interest groups to communicate directly with people who are also interested in the topic. Here, each user is an important thread in the reading community, contributing to a rich dialog and shared knowledge base. Since everyone has the same permissions, everyone has the opportunity to be seen, and everyone's emotions can be discovered by others.

**2. Administrators**

Administrators are responsible for maintaining the overall health of the platform, managing community interactions and filtering content. They have the option of removing inappropriate comments and preventing bad vibes from spreading among users. They are the guardians and promoters of the system. They also have to make sure that the features in the system are kept up to date, while listening to users' suggestions for changes. To ensure the smooth running of the platform, they are also responsible for managing and maintaining the database and categorizing the reviews so that they can be easily found. Administrators have higher privileges than regular users to facilitate the system.

## 4. Risk Management

### 4.1 Integrity

**Risk:** Integrity risk refers to incorrect or altered information being displayed or shared on the platform.[3]

Mitigation: In my system, I will use encryption, when the user submits a book review and the system saves the data is to use strong encryption algorithms to prevent the data from being intercepted in transit. There will also be an authentication mechanism when the user logs in to prevent bad users from injecting all kinds of attacks.[4]



### 4.2 Accessibility

**Risk:** Non-compliance with accessibility standards may exclude users and expose the project to legal risks. 

**Mitigation:** Avoid using any unauthorized resources to avoid copyright disputes that could affect the subsequent development of the system. Study the scope of use carefully before using the terms of use, and get authorization and record.



### 4.3 Security

**Risk:** Security vulnerabilities might lead to unauthorized data breaches or system compromise. 

**Mitigation:** In the face of possible cyber-attacks, I will test using a variety of means to scan for vulnerabilities. The means include: software testing, scanning using popular code auditing software on the market and following up to fix all high-risk issues; and external black-box testing to test whether commonly used attack methods can break software security restrictions;



### 4.4 Illness

**Risk:** Personal health issues could delay or halt the development process. 

**Mitigation:**  Maintain comprehensive documentation and follow code hygiene best practices to allow for easy transition to other developers as needed. Seek out more specialized code test writers to manage and maintain the project more meticulously.[5]



### 4.5 No Backups

**Risk:** Failure to back up system data regularly can result in the permanent loss of critical user and system information in the event of a hardware malfunction, data corruption, or other data loss incidents.

**Mitigation:** IImplement a regular backup schedule that covers all critical data, including user information, book reviews, and maintenance logs. The backup process should be automated to minimize the risk of human error, and backups should be stored in a separate, secure location to prevent loss at the same time as the primary system. Also, using cloud services that provide automatic redundancy can provide another layer of data protection. Having a disaster recovery plan in place that outlines clear steps for restoring system functionality from backups after an incident ensures that downtime and service interruptions are minimized.[6]



## 5. Tools and Technologies

### 5.1 Hardware

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

### 5.2 Software

| Software Category | Software Name      | Version       | Purpose                                                    |
| ----------------- | ------------------ | ------------- | ---------------------------------------------------------- |
| Operating System  | Windows 10 Pro     | Windows 10    | Provides the primary operating environment for development |
| IDE for Java      | IntelliJ IDEA      | 2021.3.2      | Java development and project management                    |
| IDE for Web Dev   | Visual Studio Code | 1.55          | Front-end development and design                           |
| Database - SQL    | Navicat for MySQL  | Premium 12    | SQL database design, development, and testing              |
| Version Control   | Git                | 2.31.1        | Source code management and tracking                        |
| Collaboration     | GitHub             | -             | Remote repository hosting and collaboration                |
| Containerization  | Docker Desktop     | 20.10.5       | Containerization and consistent deployment environments    |
| API Testing       | Postman            | 8.0.7         | Creating, testing, and managing APIs                       |
| Documentation     | Microsoft Office   | Office 365    | Documentation, spreadsheet, and presentation creation      |
| Browser           | Google Chrome      | 89.0.4389.114 | Web browsing and web application testing                   |



## 6. Maintenance

During the development of our project last semester, I encountered several challenges and successes that shaped the evolution of our platform. One of the initial plans was to implement a sophisticated intelligent recommendation algorithm to suggest books and movies to users based on their preferences and past interactions. However, this feature faced a significant hurdle: our database was too small to effectively train the algorithm, making it impractical to achieve reliable or meaningful recommendations at that stage.

To overcome this limitation, I decided to postpone the implementation of the recommendation system until the database could be sufficiently expanded with a larger volume of reviews and user interactions. This expansion is expected as the user base grows and more content is generated on the platform.

In place of the recommendation system, I pivoted to integrating an AI chat feature. This new functionality has proven to be a valuable addition, creating fresh content and facilitating user interactions by answering a wide range of questions related to books, movies, and more. This AI-driven approach not only enhances user engagement but also compensates for the initial lack of personalized book recommendations.

Additionally, I developed a tag recommendation feature, which allows users to select and explore topics of interest based on tags. This feature helps in categorizing content more effectively and enhances the discoverability of reviews that match specific interests. Meanwhile, users can search for keywords they are interested in in the book review interface, which can be matched based on the TITLE name, enhancing the intelligence of the system.

Another significant development is the enhancement of the dashboard. This feature now provides users with a visual representation of how their reviews are being received by the community. It shows detailed analytics on the distribution of likes, comments, and favorites, offering insights into the impact and reach of their contributions. This visibility into user engagement helps in fostering a more connected and responsive community.

These adjustments and developments highlight the fact that I am constantly improving and adapting to the needs of the program and its technical feasibility. Some of the planned features that were difficult to implement have been iterated away in development and successfully turned into more usable and intuitive content. At the same time, I will continue to optimize the new features in the subsequent development process and hope to develop and implement the unachievable features at a later stage.



## 7.  Project Analysis and Specification

### 7.1 Project Size

The project, a comprehensive book and movie review platform, is currently an individual project developed and maintained solely by myself. At this stage, the platform is operational on my personal computer, serving as the primary development and testing environment. This setup allows for direct control over the development process and swift implementation of changes based on testing results.

Upon completion, the platform is designed to be deployed online, enabling access for users globally. Once launched, users will be able to create accounts, log in, and engage with the various features, such as writing reviews, participating in discussions, and interacting with the AI helper. This shift from a local to a global user base will significantly increase the project's scale and user interaction dynamics.

The following will be considered and evaluated in the future when considered for go-live.

- **Scalability**: Ensuring the infrastructure can handle an increasing number of users and data without performance degradation.
- **Security**: Implementing robust security measures to protect user data and prevent unauthorized access, especially important as users will be able to create and manage accounts.
- **Data Management**: Expanding the database to accommodate a larger volume of reviews and user interactions, which is crucial for functionalities like the AI recommendation system.
- **User Support**: Establishing support mechanisms to assist users with technical issues or inquiries, ensuring a smooth user experience.

As an independent developer, I am challenged to manage all aspects of a project, from front-end design and back-end infrastructure to database management and user support. However, this also provides flexibility and autonomy in decision-making and creative expression, allowing for a personalized approach to solving technical challenges and innovating the user experience that provides my ingenuity about the project.

### 7.2  Feasibility Study

#### 7.2.1 Technological (T)

Certainly! Here’s the revised content reflecting that your project is developed using React and Node.js:

- **Front-end:** React enhances the user experience by building user-friendly interfaces with integrated user interface libraries. Including React in my learning path has allowed me to quickly adapt and implement more complex features efficiently.

- **Back-end:** The backend is built using Node.js, which provides a lightweight, efficient platform for building scalable network applications. Node.js is particularly well-suited for handling asynchronous operations and has a vast ecosystem of libraries that can enhance development speed and capabilities.

- **Database:** MySQL serves as the primary relational database management system, ensuring reliable structured data storage and integrity for the system's needs.

- **Caching:** Redis fulfills caching requirements and improves system performance by storing frequently accessed data in memory for fast retrieval.

  

#### 7.2.2 Economic (E)

- **Hosting Costs:** Cloud hosting is estimated at around $100 per month for moderate usage scenarios.
- **Database Server:** Costs for MySQL management services range from $50 to over $200 per month based on configurations. 
- **Software:** Both React and Java-based frameworks such as Spring Boot are open-source and incur no licensing fees.
- **Storage:** Prices for cloud storage services such as Amazon S3 or Google Cloud Storage are approximately $0.023 per GB for the first 50TB per month.
- **AI Interface Costs:** The AI interface from [aiskt.com](https://pro.aiskt.com/) can vary in cost depending on the volume of queries and level of computational resources required. For a standard usage scenario involving moderate query volume, the costs could range from $100 to $500 per month. This platform provides advanced AI capabilities which can significantly enhance user interaction and content personalization on the platform.
- **Others:** Domain registration and SSL certificate costs will apply, typically around $30 per year for domain and potentially free to premium costs for SSL depending on the chosen provider.

#### 7.2.3 Legal (L)

- **Data Privacy & Protection:** Compliance with data protection laws like GDPR or CCPA will be essential, involving encryption of sensitive user data stored in the database.
- **Licensing:** While using React and associated frameworks, compliance with their respective open-source licenses is mandatory. Care will be taken to avoid using proprietary components without proper licensing.
- **Transactions & Payments:** The platform must consider legal aspects related to invoicing, tax compliance, record-keeping, and handling payment disputes.
- **Intellectual Property:** Measures to protect the custom-developed code, trademarks, and copyrights for the platform must be established.

#### 7.2.4 Operational (O)

- **Scalability:** The system is designed to be scalable, thanks to the flexibility offered by cloud services and the robustness of the React and Node.js ecosystem.
- **Maintenance:** Regular maintenance is vital for addressing software patches, security updates, and functional upgrades.
- **Backup & Disaster Recovery:** Robust backup strategies and disaster recovery plans will be essential for the database servers storing critical data.
- **Training:** Training materials and documentation will be provided to help users and administrators make the most of the system's features.
- **Security:** Ongoing security audits and adherence to best practices in software development will ensure the system's integrity.

#### 7.2.5 Schedule (S)

- **Project Initialization & Setup (January 10 - January 17):** Set up the initial development environment, establish project guidelines, and select necessary development tools.
- **System Design & Database Schema (January 18 - January 31):** Lay out high-level system architecture planning and database schema design.
- **Back-end Development - Java (February 1 - February 28):** Develop the application's core back-end functionality, including integration with MySQL and the implementation of service logic with Java.
- **Front-end Development - React (March 1 - March 20):** Construct front-end components and connect them with the Java back-end services.
- **Testing & Debugging (March 21 - April 10):** Carry out strict testing phases, use black-bow and white-box tests to intimately the system and put it into use.
- **Documentation & Training Materials (April 11 - April 20):** Develop comprehensive user manuals, API documentation, and training materials for end-users and system administrators.
- **Final Review & Deployment (April 21 - April 30):** Final system review, gathering user feedback, making necessary adjustments, and preparing for deployment to production.



## 8. Specification of Data Structures 

### 8.1 UML for system

#### 8.1.1 Use Case Diagram

![image-20240422194716696](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20240422194716696.png)

#### 8.1.2 Class Diagram

![image-20231126232251924](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231126232251924.png)

#### 8.1.3 Sequence Diagram

1. Login Page

![image-20231230184847990](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231230184847990.png)

2. Book Review Page

![image-20231230185125104](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231230185125104.png)

3. AI Page

![image-20240422205204297](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20240422205204297.png)

4. Chat Page

![image-20231230185218861](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231230185218861.png)

5. Profile Page

![image-20231230185238908](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231230185238908.png)

### 8.2 Database

#### 8.2.1 ER Diagram

![image-20240422213123627](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20240422213123627.png)

## 9. Methodology

### 9.1 The Problem from a Process Viewpoint

From a process perspective, the development of my book sharing platform faced a number of challenges. The requirements for the platform were not completely clear from the start and had to be refined through iterative customer feedback and user testing. This is because users' reading and sharing behaviors can provide new insights that influence feature development and prioritization.

There are also a large number of features to consider, such as user profiles, book catalogs, AI connections, and commenting systems all of these features need to be developed separately and assembled and configured with each other so as to adapt to my system, and therefore there may be a risk that all of them will not be able to be used, and will require uninterrupted testing in order to continue to improve them.

### 9.2 Assessment of Chosen Methodologies

Initially, I conducted extensive research and study of various development methods to determine the best fit for this project.

- **Waterfall Methodology:** The first thing I considered was the most basic waterfall model. It was clearly structured and had a clear time for phase completion before moving on to the next phase, however, I soon realized that the stereotypical  model was not suited to projects where user feedback was critical and requirements were constantly changing. If one part of the process goes wrong, I will have to start the process all over again.[7]

- **V-Model:** Next I looked at the V model[8], which emphasizes verification and validation, which at first glance seems beneficial. However, the model is as inflexible as the waterfall model, is equally ineffective in handling changing requirements, and does not support iterative releases.

- **Spiral Model:** The spiral model[9] is characterized by a focus on risk assessment, and while this model can support continuous iteration and evaluation of the system, its complexity and the need for significant risk assessment expertise can make it difficult for me to get started with a variety of inconveniences.

- **Incremental and Iterative Development:**[10] This approach is closely aligned with project requirements, as it allows for phased feature development and iteration. However, without having a strong framework to manage and prioritize work at the outset, this approach still lacks the structural flexibility required. It was too difficult for me to use for the first time.

- **Agile-Scrum Match:** I have found that Scrum[11] in an Agile framework is well suited to these needs. Its iterative nature allows for frequent reevaluation of project priorities to ensure that the product is developed to deliver real user value, and Scrum's emphasis on continuous improvement allows for flexible scheduling of tasks, which is beneficial when dealing with creative and dynamic scope adjustments in project like mine.

  ![image-20231105200116499](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231105200116499.png)

Through my research into various models, Scrum stood out. Its strength in creating a collaborative environment capable of responding quickly to change, and its ability to be continually adapted and evaluated in response to needs, led me to choose it as the method of analysis.

### 9.3 Process Outline

Since Scrum development requires constant interaction and discussion with the group during the execution of the project, and I had only one person as a team and a mentor to guide me, I adapted the Agile-Scrum methodology to a one-person workflow. In the absence of a team, I had to self-organize and self-regulate according to the Scrum framework. Here is how the Scrum methodology is applied after my adaptation:

- **Sprint Planning:** At the beginning of each Scrum (which lasts two weeks), I will create a list of tasks from the Product Backlog with the goal of completing them during the Sprint. This plan will serve as my commitment to the target tasks for the Sprint Backlog.

- **Daily Scrum:** I will conduct a daily personal review, a time-limited activity strictly limited to 15 minutes, to assess progress and plan for the next 24 hours. During the brainstorming process, I will need to record my ideas and execute them rigorously to make it easier for my mentor to assess the weekly work. This replaced the need for daily team meetings and helped keep the project on track.

- **Sprint Review:** At the end of each sprint, I will conduct a review to present the completed work to my mentor and may use live presentations such as PowerPoint to efficiently explain my work to others if necessary. I will also explain the specifics of the next stage.

- **Reflective Improvement:** At the end of the review, I will conduct a retrospective to analyze what worked and what could be improved in the next sprint. I will change my current operations in response to the suggestions made by my mentor and others, and the lessons learned will be documented so that I can avoid recurrence of similar problems during subsequent research and development.

- **Backlog Refinement:** During the sprint, I will continually update the product backlog, add new tasks or make adjustments based on lessons learned from the previous sprint to ensure that priorities are aligned with the project's evolving needs and goals.

- **Incremental Releases:** My goal is to release a usable project increment at the end of each sprint to ensure stable development of the platform and to effectively incorporate feedback to guide further development phases.

- **Documentation:** Documentation will be an ongoing process throughout the sprint to ensure that all aspects regarding the project's progress, adjustments, and planning are documented for future reference when modifying features and to help mentors and others evaluate my work.

### 9.4 Sprint Breakdown and Timeline

The project will be divided into a series of sprints, each focusing on a specific set of deliverables. Below is an outline of each sprint:

**Sprint 1: Project Setup (Duration: 2 weeks)**

- **Dates:** January 10 - January 24
- **Objectives:** Set up the development environment, initialize the project repository, and define initial requirements.
- **Tasks:**
  - Set up IDE and necessary development tools.
  - Create the project's source repository with version control.
  - Draft the initial project scope and software requirements document with mentor input.
- **Deliverables:** Development environment ready, project repository initialized, initial documentation draft.

**Sprint 2: Design Phase (Duration: 2 weeks)**

- **Dates:** January 25 - February 7
- **Objectives:** Finalize the software architecture, choose technology stack components, and create the database schema.
- **Tasks:**
  - Design the system architecture and database schema.
  - Select the technology stack in consultation with the mentor.
  - Document architectural decisions and prepare initial design documents.
- **Deliverables:** System architecture diagram, technology stack documentation, database schema.

**Sprint 3: Prototype Development (Duration: 3 weeks)**

- **Dates:** February 8 - February 28
- **Objectives:** Develop a basic working prototype of the system with minimal features.
- **Tasks:**
  - Implement core functionality.
  - Develop a simple user interface for initial testing.
  - Begin writing unit tests for developed features.
- **Deliverables:** Working prototype, basic UI, initial unit tests.

**Sprint 4: Feature Development and Testing (Duration: 4 weeks)**

- **Dates:** March 1 - March 28
- **Objectives:** Build on the prototype to develop additional features and enhance the system's functionality.
- **Tasks:**
  - Develop additional features identified during the design phase.
  - Expand the database to include new entities and relationships.
  - Perform continuous testing and iteration on feedback from mentor reviews.
- **Deliverables:** Additional features implemented, expanded database, ongoing testing reports.

**Sprint 5: Refinement and Secondary Features (Duration: 3 weeks)**

- **Dates:** March 29 - April 18
- **Objectives:** Refine existing features and add secondary features. Focus on UI/UX improvements and system optimization.
- **Tasks:**
  - Optimize system performance.
  - Improve user interface based on prototype feedback.
  - Integrate secondary features to enhance usability.
- **Deliverables:** Refined primary features, implemented secondary features, improved UI/UX design.

**Sprint 6: Final Testing, Documentation, and Deployment (Duration: 2 weeks)**

- **Dates:** April 19 - May 3
- **Objectives:** Conduct final tests, complete documentation, and prepare the system for deployment.
- **Tasks:**
  - Finalize all testing, including user acceptance testing with mentor oversight.
  - Complete all project documentation with mentor review.
  - Set up the production environment and deploy the system.
- **Deliverables:** Fully tested system, complete documentation set, deployed application.

**Sprint 7: Project Closure and Review (Duration: 1 week)**

- **Dates:** May 4 - May 10
- **Objectives:** Officially close the project with a final review session with the mentor. Reflect on the project and identify lessons learned.
- **Tasks:**
  - Conduct a final project review with the mentor.
  - Document lessons learned and final project reflections.
  - Archive project materials and prepare a closing report.
- **Deliverables:** Lessons learned document, final project report, project archive.

Each sprint began with a planning meeting and ended with a review and recap that informed the goals for the next sprint. Throughout the project, my mentor's guidance will ensure that I am on the right track to keep the R&D process under control, within reasonable and efficient limits, and that my R&D process is constantly evaluated.



## 10. User Interface and Testing

In the previous features section, the appropriate functions and content have been intercepted. Next I will show the interface one by one by function with the version on the computer.

### 10.1 Login and Register

I am using user1 to describe the detailed interface of the system. 

![image-20240422214615703](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20240422214615703.png)

### 10.2 Reviews Page

You can see the thumbnails of the reviews by clicking on the reviews button below.

![image-20240422214719995](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20240422214719995.png)

The tags above are used to distinguish between specific types of content. It can be changed with the search page.

![image-20240422215057154](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20240422215057154.png)

In the lower right corner of the interface is the button to create Reviews, click on it to create Reviews.

![image-20240422214909633](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20240422214909633.png)

Going to the detailed page, you can see the details of each reviews. If you have uploaded several pictures, it can switch by time to show.

![image-20240422215252124](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20240422215252124.png)

You can also collect or like the specific review, and also adding comments below.

### 10.3 AI Helper

You can chat in this page with AI model. It can answer you various kind of questions.

![image-20240422215513803](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20240422215513803.png)

### 10.4 Chat Page

The button on the left is public chat, which allows you to freely communicate with all users in real time.

![image-20240422215547567](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20240422215547567.png)

The button on the right is Group Chat, which allows you to select groups of interest in the interface.

![image-20240422215637316](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20240422215637316.png)

Click the Add home button to jump to the room creation screen.

![image-20240422215731716](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20240422215731716.png)

### 10.5 Personal page

Here you can upload an avatar, log out and view favorites and likes.

![image-20240422215851021](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20240422215851021.png)

This is what the user1 collected.

![image-20240422215934303](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20240422215934303.png)

### 10.6 Dashboard

Here are the author's creative content statistics, with various types of charts below to show specific content.

![image-20240422220027519](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20240422220027519.png)

### 10.7 Administrator Specialty

If you log into admin account, you can manage the reviews by deleting them. You can also delete the comments of users if they have made sensitive comments.

By changing the type of role in the database, users can be administrator too. 

![image-20240422220253072](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20240422220253072.png)









## 11. Management of the Process

Here is the history of the development and implementation over the semester.

| Sprint                                          | Duration | Dates           | Objectives                                                   | Tasks                                                        | Deliverables                                                 |
| ----------------------------------------------- | -------- | --------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1: Project Setup                                | 2 weeks  | Jan 10 - Jan 24 | Set up the development environment, initialize the project repository, and define initial requirements. | - Set up IDE and necessary development tools.<br>- Create the project's source repository with version control.<br>- Draft the initial project scope and software requirements document with mentor input. | Development environment ready, project repository initialized, initial planning draft. |
| 2: Design Phase                                 | 2 weeks  | Jan 25 - Feb 7  | Finalize the software architecture, choose technology stack components, and create the database schema. | - Design the system architecture and database schema.<br>- Show the instructor the list of databases and the basic interface.<br>- Document architectural decisions and prepare initial design documents. | System architecture diagram, basic pages architectures without details, database schema. |
| 3: Prototype Development                        | 3 weeks  | Feb 8 - Feb 28  | Develop a basic working prototype of the system with minimal features. | - Implement core functionality.<br>- Develop a simple user interface for initial testing.<br>- Begin writing unit tests for developed features. | Working prototype, basic UI, initial unit tests.             |
| 4: Feature Development and Testing              | 4 weeks  | Mar 1 - Mar 28  | Build on the prototype to develop additional features and enhance the system's functionality. | - Develop additional features identified during the design phase.<br>- Expand the database to include new entities and relationships.<br>- Perform continuous testing and iteration on feedback from mentor reviews. | Additional features implemented, expanded database, ongoing testing reports. |
| 5: Refinement and Secondary Features            | 3 weeks  | Mar 29 - Apr 18 | Refine existing features and add secondary features. Focus on UI/UX improvements and system optimization. | - Optimize system performance.<br>- Improve user interface based on prototype feedback.<br> | Refined primary features, implemented secondary features, improved UI/UX design, changed page details. |
| 6: Final Testing, Documentation, and Deployment | 1 week   | Apr 19 - Apr 22 | Conduct final tests, complete documentation, and prepare the system for deployment. | - Finalize all testing, including user acceptance testing with mentor oversight.<br>- Complete all project documentation with mentor review.<br>-- Adding AI interface and dashboard. | Fully tested system, complete documentation set, deployed application. |
| 7: Project Closure and Review                   | 1 week   | Apr 22 - Apr 24 | Officially close the project with a final review session with my mentor. Reflect on the project and identify lessons learned. | - Conduct a final project review with my mentor.<br>- Document lessons learned and final project reflections.<br>- Archive project materials and prepare a closing report. | Lessons learned document, final project report, project archive. |

## 12. Project Evaluation

### 12.1 Project Evaluation

In evaluating the project, I have identified certain recurring problems as well as immediate and long-term outcomes that serve as indicators of the platform’s progress and impact.

**Recurring Problems:**
- **User Engagement:** Keeping users consistently engaged with the platform has been challenging. Recurring updates and feature enhancements are necessary to maintain user interest over time.
- **Scalability:** As the user base grows, scaling the platform to handle increased traffic without compromising performance is an ongoing issue.
- **Content Quality:** Ensuring high-quality, meaningful reviews and discussions is a constant focus, requiring moderation and community guidelines.

### 12.2 Immediate Outcomes

- **User Feedback:** In the short term, the platform can receive positive feedback from users who have successfully adopted it as their go-to for book and movie reviews. The intuitive interface and features like the AI helper will be particularly stood out in user reviews.
- **Utilization:** The website will be actively used, indicating initial success in meeting the needs of the target audience. Users are creating accounts, contributing reviews, and engaging with others, showing a good uptake of the platform’s offerings.

### 12.3 Long-Term Outcomes

- **Stable Community:** Over the long term, I aim to cultivate a stable and dedicated community of readers and film enthusiasts. By fostering an environment where users can share and discuss, we hope to become a staple in the reading community.
- **Reading Enthusiast’s Haven:** The ultimate goal is for the platform to evolve into a haven for reading enthusiasts. This involves not only being a place for reviews but also a space where users can discover new books, participate in reading challenges, and engage in literature-related events.
- **Community-Led Growth:** With a solid base, I anticipate the platform will benefit from community-led growth, where users recommend the platform to others, contribute to its content, and help moderate discussions, ensuring a self-sustaining model.

The combination of immediate user engagement and long-term community development is critical to the Platform's success. Regular evaluation and iteration based on user feedback and technological advances will help guide the project towards these outcomes.

## 13. Testing

For testing my project, I have created the video on YouTube. You can see the reflections that is happening automatically.

The link is:  https://youtu.be/Q4dj70xiVz4



## 14. Conclusion

My project outlines the process of building, developing and deploying a specialized platform for book and movie lovers. The project aimed to fill a gap in the market and create a cohesive community where avid readers and movie fans could come together to share their passions. From the initial planning stages, through the challenges of the development process, to the final implementation, the project has been guided by a singular vision: to create a user-centered platform that not only allows for the sharing of reviews, but also fosters a strong community.

Throughout the development process, there were several features that had a particular impact on the user experience. The integration of artificial intelligence assistants provided instant, intelligent interaction with users, while features such as a dynamic chat interface and customizable personal home pages greatly increased user engagement. I tweaked the interface using tag categorization, while utilizing a dashboard to showcase the feedback received from personal book reviews.

After encountering inconsistencies between ideas and reality during project development, I promptly adjusted my strategy to address several misconceptions, added new features to fill previous gaps, and implemented strategies to mitigate these issues. I hope that in the long run, the platform is positioned to foster a stable community and become a haven for those who find joy in reading and movies.

Going forward, the success of the project will be determined by how well it adapts to the needs of its users, how well its user base grows, and the quality of the discussions it generates. My goal is to ensure that the platform not only sustains the existing community, but also attracts new users and adapts to the ever-changing online interactive landscape. I will continue to improve the platform in the future, taking it to a wider arena where millions of avid readers will find a home.

## 15. References

1. OpenAI. API reference introduction. Retrieved from https://platform.openai.com/docs/api-reference/introduction
2. AISKT Pro. Retrieved from https://pro.aiskt.com/
3. Zhang, Q., & Others. (2019). Time and Attribute Based Dual Access Control and Data Integrity Verifiable Scheme in Cloud Computing Applications. IEEE Access.
4. Krishnasamy, V., & Venkatachalam, S. (2021). An Efficient Data Flow Material Model Based Cloud Authentication Data Security and Reduce A Cloud Storage Cost Using Index-level Boundary Pattern Convergent Encryption Algorithm. Materials Today: Proceedings.
5. McConnell, S. (1996). Rapid Development: Taming Wild Software Schedules. Microsoft Press.
6. Abualkishik, A. Z., Alwan, A. A., & Gulzar, Y. (2020). Disaster Recovery in Cloud Computing Systems: An Overview. International Journal of Advanced Computer Science and Applications.
7. Herawati, S., et al. (2021). Application of The Waterfall Method on A Web-Based Job Training Management Information System at Trunojoyo University Madura. E3S Web of Conferences.
8. Hu, X., et al. (2021). Model Complexity of Deep Learning: A Survey. arXiv preprint arXiv:2106.00088.
9. Long, Y., & Liu, P. (2021). Study on Coordination of Industrial Technology Ambidextrous Innovation in Knowledge Ecology Spiral. Kybernetes.
10. Tan, T., et al. (2009). Productivity Trends in Incremental and Iterative Software Development. 2009 3rd International Symposium on Empirical Software Engineering and Measurement.
11. [Video]. Retrieved from https://www.youtube.com/watch?v=9TycLR0TqFA



## 16. Appendices

### 16.1 Resources

Github Repository: https://github.com/Yolanda2002/FYP_LitConnect

Youtube Video showing the details: https://youtu.be/Q4dj70xiVz4



