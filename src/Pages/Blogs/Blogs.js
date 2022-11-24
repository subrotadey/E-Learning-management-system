import React from 'react';
import { Breadcrumb, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Blog from './Blog';

const Blogs = () => {

    const blogInfo = [
        {
          _id:1,
          img: "",
          heading: "Different fields of programming and suitable programming languages for it",
          description: `Nowadays many people want to make their career in programming. But many are hesitant to find the right programming language for their programming career. Many people start learning programming without thinking ahead. But later realized that he is not interested in the tasks in which that programming language is applied.

          A lot can be done with a programming language these days. For example, mobile apps can be built with Python. But you will see in the job market, Android, Kotlin, React Native, Flutter etc. are used for mobile apps. There are no jobs for mobile apps with Python. So if a programming language can be used for many tasks, it may not be suitable for that task.
          
          So in this article I will try to give a small analysis about which programming language is suitable in which case.
          
          Web development
          
          Web development resources are like a vast ocean. There are HTML, CSS, JavaScript, PHP, wordpress etc. A JavaScript has many resources about web development. Again, can do web work with only HTML, CSS (only freelancing though). Again, with JavaScript, PHP you can also do server side work. Again, you can create an entire website with wordpress.
          
          There are two parts to web development. One is frontend and other is backend. You can work with just the frontend or just the backend if you want. Again, both can work. Then, you'll be a full-stack developer.
          
          For frontend work you need to have good knowledge of HTML, CSS, JavaScript. Also you need to have expertise in at least one framework. JavaScript has many frameworks for frontend work. For example, angular, react(library), vue, svelte, ember etc. By learning any of these you can make your career as a frontend developer.
          
          You need to know any programming language well for backend work. Also should have proficiency in any one of the frameworks of that language. In this case you can select any language. For example, Java, JavaScript, PHP, C#, Python, Ruby etc. Next, mastery of the respective framework of the language is required. Some of the common frameworks are,
          
          
          C# - .net
          
          Java – spring, hibernate
          
          JavaScript – NodeJS (runtime environment)
          
          PHP – Laravel, Codeigniter, Symfony
          
          Python – Django, Flask
          
          Ruby-rails
          
          Remember, frontend development requires you to have good design skills. Again, backend development requires you to have good problem solving skills with programming.
          
          Mobile Apps Development
          
          Like web development, mobile apps development also has many resources. For example, Android, Kotlin, Flutter, React Native etc. For android you need to have good skills in java. To move to Flutter you need to know dart programming language well. The Dart language has many language combinations. Like, c, c++, java, javascript, python etc. So if you have a good understanding of any of these languages ​​you can easily master dart.
          
          Mobile apps development can also be done with JavaScript. There are some resources for this like, React Native, Ionic, Vue Mobile etc.
          
          With these resources you can develop apps for any platform. Before that don't forget to be proficient in real programming language.
          
          Game Development
          We play many games on computer or mobile. There are some, don't play them, spell them. And there are programming languages ​​suitable for game development. If you want to make games with game engines, c++ and c# are best. Because with their game engine you can develop 2d/3d and good graphics and good resolution games. Some good game engines in c++ are unreal engine, 4A Engine, Adventure Game Studio, Aleph One. Some good game engines in c# are Unity, MonoGame, Godot, Stride
          
          Besides, you can do game development with JavaScript and HTML5 canvas. JavaScript has some game engines or libraries with which you can develop 2d/3d games. For example, three.js, pixi.js, phaser.js, babylon.js etc.
          
          Data science
          
          Data or information is the most demanded thing in today's world. Using this information, data science is used to get the needs of different customers, predict something etc. With this again machine learning, artificial intelligence works together. The most suitable language for this is Python. Because, Python's libraries are very good for data science. These can be used to read information, show graphics through various tables or charts, predict something with artificial intelligence. Some Python libraries for data science are, scikit-learn, keras, matplotlib, pandas etc.
          
          This article discusses the appropriate programming languages ​​and related technologies for various job fields in the job or freelancing marketplace. Those who want to fix their work area and work by learning programming hope they will benefit. Finally, the real purpose of programming is to solve problems. It requires patience, diligence, perseverance and practice.
          
          You can practice on hackerrank, codechef, leetcode to solve problems.`,
          type: "Programming",
          date: "Nov-03-2022, 9 min read",
          author: "Serajur Reza Chowdhury",
          address:"",
          email: "",
          phone: "",
        },
        {
          _id:2,
          img: "",
          heading: "Different fields of programming and suitable programming languages for it",
          description: `Nowadays many people want to make their career in programming. But many are hesitant to find the right programming language for their programming career. Many people start learning programming without thinking ahead. But later realized that he is not interested in the tasks in which that programming language is applied.

          A lot can be done with a programming language these days. For example, mobile apps can be built with Python. But you will see in the job market, Android, Kotlin, React Native, Flutter etc. are used for mobile apps. There are no jobs for mobile apps with Python. So if a programming language can be used for many tasks, it may not be suitable for that task.
          
          So in this article I will try to give a small analysis about which programming language is suitable in which case.
          
          Web development
          
          Web development resources are like a vast ocean. There are HTML, CSS, JavaScript, PHP, wordpress etc. A JavaScript has many resources about web development. Again, can do web work with only HTML, CSS (only freelancing though). Again, with JavaScript, PHP you can also do server side work. Again, you can create an entire website with wordpress.
          
          There are two parts to web development. One is frontend and other is backend. You can work with just the frontend or just the backend if you want. Again, both can work. Then, you'll be a full-stack developer.
          
          For frontend work you need to have good knowledge of HTML, CSS, JavaScript. Also you need to have expertise in at least one framework. JavaScript has many frameworks for frontend work. For example, angular, react(library), vue, svelte, ember etc. By learning any of these you can make your career as a frontend developer.
          
          You need to know any programming language well for backend work. Also should have proficiency in any one of the frameworks of that language. In this case you can select any language. For example, Java, JavaScript, PHP, C#, Python, Ruby etc. Next, mastery of the respective framework of the language is required. Some of the common frameworks are,
          
          
          C# - .net
          
          Java – spring, hibernate
          
          JavaScript – NodeJS (runtime environment)
          
          PHP – Laravel, Codeigniter, Symfony
          
          Python – Django, Flask
          
          Ruby-rails
          
          Remember, frontend development requires you to have good design skills. Again, backend development requires you to have good problem solving skills with programming.
          
          Mobile Apps Development
          
          Like web development, mobile apps development also has many resources. For example, Android, Kotlin, Flutter, React Native etc. For android you need to have good skills in java. To move to Flutter you need to know dart programming language well. The Dart language has many language combinations. Like, c, c++, java, javascript, python etc. So if you have a good understanding of any of these languages ​​you can easily master dart.
          
          Mobile apps development can also be done with JavaScript. There are some resources for this like, React Native, Ionic, Vue Mobile etc.
          
          With these resources you can develop apps for any platform. Before that don't forget to be proficient in real programming language.
          
          Game Development
          We play many games on computer or mobile. There are some, don't play them, spell them. And there are programming languages ​​suitable for game development. If you want to make games with game engines, c++ and c# are best. Because with their game engine you can develop 2d/3d and good graphics and good resolution games. Some good game engines in c++ are unreal engine, 4A Engine, Adventure Game Studio, Aleph One. Some good game engines in c# are Unity, MonoGame, Godot, Stride
          
          Besides, you can do game development with JavaScript and HTML5 canvas. JavaScript has some game engines or libraries with which you can develop 2d/3d games. For example, three.js, pixi.js, phaser.js, babylon.js etc.
          
          Data science
          
          Data or information is the most demanded thing in today's world. Using this information, data science is used to get the needs of different customers, predict something etc. With this again machine learning, artificial intelligence works together. The most suitable language for this is Python. Because, Python's libraries are very good for data science. These can be used to read information, show graphics through various tables or charts, predict something with artificial intelligence. Some Python libraries for data science are, scikit-learn, keras, matplotlib, pandas etc.
          
          This article discusses the appropriate programming languages ​​and related technologies for various job fields in the job or freelancing marketplace. Those who want to fix their work area and work by learning programming hope they will benefit. Finally, the real purpose of programming is to solve problems. It requires patience, diligence, perseverance and practice.
          
          You can practice on hackerrank, codechef, leetcode to solve problems.`,
          type: "Programming",
          date: "Nov-03-2022, 9 min read",
          author: "Serajur Reza Chowdhury",
          address:"",
          email: "",
          phone: "",
        },
        {
          _id:3,
          img: "",
          heading: "Different fields of programming and suitable programming languages for it",
          description: `Nowadays many people want to make their career in programming. But many are hesitant to find the right programming language for their programming career. Many people start learning programming without thinking ahead. But later realized that he is not interested in the tasks in which that programming language is applied.

          A lot can be done with a programming language these days. For example, mobile apps can be built with Python. But you will see in the job market, Android, Kotlin, React Native, Flutter etc. are used for mobile apps. There are no jobs for mobile apps with Python. So if a programming language can be used for many tasks, it may not be suitable for that task.
          
          So in this article I will try to give a small analysis about which programming language is suitable in which case.
          
          Web development
          
          Web development resources are like a vast ocean. There are HTML, CSS, JavaScript, PHP, wordpress etc. A JavaScript has many resources about web development. Again, can do web work with only HTML, CSS (only freelancing though). Again, with JavaScript, PHP you can also do server side work. Again, you can create an entire website with wordpress.
          
          There are two parts to web development. One is frontend and other is backend. You can work with just the frontend or just the backend if you want. Again, both can work. Then, you'll be a full-stack developer.
          
          For frontend work you need to have good knowledge of HTML, CSS, JavaScript. Also you need to have expertise in at least one framework. JavaScript has many frameworks for frontend work. For example, angular, react(library), vue, svelte, ember etc. By learning any of these you can make your career as a frontend developer.
          
          You need to know any programming language well for backend work. Also should have proficiency in any one of the frameworks of that language. In this case you can select any language. For example, Java, JavaScript, PHP, C#, Python, Ruby etc. Next, mastery of the respective framework of the language is required. Some of the common frameworks are,
          
          
          C# - .net
          
          Java – spring, hibernate
          
          JavaScript – NodeJS (runtime environment)
          
          PHP – Laravel, Codeigniter, Symfony
          
          Python – Django, Flask
          
          Ruby-rails
          
          Remember, frontend development requires you to have good design skills. Again, backend development requires you to have good problem solving skills with programming.
          
          Mobile Apps Development
          
          Like web development, mobile apps development also has many resources. For example, Android, Kotlin, Flutter, React Native etc. For android you need to have good skills in java. To move to Flutter you need to know dart programming language well. The Dart language has many language combinations. Like, c, c++, java, javascript, python etc. So if you have a good understanding of any of these languages ​​you can easily master dart.
          
          Mobile apps development can also be done with JavaScript. There are some resources for this like, React Native, Ionic, Vue Mobile etc.
          
          With these resources you can develop apps for any platform. Before that don't forget to be proficient in real programming language.
          
          Game Development
          We play many games on computer or mobile. There are some, don't play them, spell them. And there are programming languages ​​suitable for game development. If you want to make games with game engines, c++ and c# are best. Because with their game engine you can develop 2d/3d and good graphics and good resolution games. Some good game engines in c++ are unreal engine, 4A Engine, Adventure Game Studio, Aleph One. Some good game engines in c# are Unity, MonoGame, Godot, Stride
          
          Besides, you can do game development with JavaScript and HTML5 canvas. JavaScript has some game engines or libraries with which you can develop 2d/3d games. For example, three.js, pixi.js, phaser.js, babylon.js etc.
          
          Data science
          
          Data or information is the most demanded thing in today's world. Using this information, data science is used to get the needs of different customers, predict something etc. With this again machine learning, artificial intelligence works together. The most suitable language for this is Python. Because, Python's libraries are very good for data science. These can be used to read information, show graphics through various tables or charts, predict something with artificial intelligence. Some Python libraries for data science are, scikit-learn, keras, matplotlib, pandas etc.
          
          This article discusses the appropriate programming languages ​​and related technologies for various job fields in the job or freelancing marketplace. Those who want to fix their work area and work by learning programming hope they will benefit. Finally, the real purpose of programming is to solve problems. It requires patience, diligence, perseverance and practice.
          
          You can practice on hackerrank, codechef, leetcode to solve problems.`,
          type: "Programming",
          date: "Nov-03-2022, 9 min read",
          author: "Serajur Reza Chowdhury",
          address:"",
          email: "",
          phone: "",
        },
        {
          _id:4,
          img: "",
          heading: "Different fields of programming and suitable programming languages for it",
          description: `Nowadays many people want to make their career in programming. But many are hesitant to find the right programming language for their programming career. Many people start learning programming without thinking ahead. But later realized that he is not interested in the tasks in which that programming language is applied.

          A lot can be done with a programming language these days. For example, mobile apps can be built with Python. But you will see in the job market, Android, Kotlin, React Native, Flutter etc. are used for mobile apps. There are no jobs for mobile apps with Python. So if a programming language can be used for many tasks, it may not be suitable for that task.
          
          So in this article I will try to give a small analysis about which programming language is suitable in which case.
          
          Web development
          
          Web development resources are like a vast ocean. There are HTML, CSS, JavaScript, PHP, wordpress etc. A JavaScript has many resources about web development. Again, can do web work with only HTML, CSS (only freelancing though). Again, with JavaScript, PHP you can also do server side work. Again, you can create an entire website with wordpress.
          
          There are two parts to web development. One is frontend and other is backend. You can work with just the frontend or just the backend if you want. Again, both can work. Then, you'll be a full-stack developer.
          
          For frontend work you need to have good knowledge of HTML, CSS, JavaScript. Also you need to have expertise in at least one framework. JavaScript has many frameworks for frontend work. For example, angular, react(library), vue, svelte, ember etc. By learning any of these you can make your career as a frontend developer.
          
          You need to know any programming language well for backend work. Also should have proficiency in any one of the frameworks of that language. In this case you can select any language. For example, Java, JavaScript, PHP, C#, Python, Ruby etc. Next, mastery of the respective framework of the language is required. Some of the common frameworks are,
          
          
          C# - .net
          
          Java – spring, hibernate
          
          JavaScript – NodeJS (runtime environment)
          
          PHP – Laravel, Codeigniter, Symfony
          
          Python – Django, Flask
          
          Ruby-rails
          
          Remember, frontend development requires you to have good design skills. Again, backend development requires you to have good problem solving skills with programming.
          
          Mobile Apps Development
          
          Like web development, mobile apps development also has many resources. For example, Android, Kotlin, Flutter, React Native etc. For android you need to have good skills in java. To move to Flutter you need to know dart programming language well. The Dart language has many language combinations. Like, c, c++, java, javascript, python etc. So if you have a good understanding of any of these languages ​​you can easily master dart.
          
          Mobile apps development can also be done with JavaScript. There are some resources for this like, React Native, Ionic, Vue Mobile etc.
          
          With these resources you can develop apps for any platform. Before that don't forget to be proficient in real programming language.
          
          Game Development
          We play many games on computer or mobile. There are some, don't play them, spell them. And there are programming languages ​​suitable for game development. If you want to make games with game engines, c++ and c# are best. Because with their game engine you can develop 2d/3d and good graphics and good resolution games. Some good game engines in c++ are unreal engine, 4A Engine, Adventure Game Studio, Aleph One. Some good game engines in c# are Unity, MonoGame, Godot, Stride
          
          Besides, you can do game development with JavaScript and HTML5 canvas. JavaScript has some game engines or libraries with which you can develop 2d/3d games. For example, three.js, pixi.js, phaser.js, babylon.js etc.
          
          Data science
          
          Data or information is the most demanded thing in today's world. Using this information, data science is used to get the needs of different customers, predict something etc. With this again machine learning, artificial intelligence works together. The most suitable language for this is Python. Because, Python's libraries are very good for data science. These can be used to read information, show graphics through various tables or charts, predict something with artificial intelligence. Some Python libraries for data science are, scikit-learn, keras, matplotlib, pandas etc.
          
          This article discusses the appropriate programming languages ​​and related technologies for various job fields in the job or freelancing marketplace. Those who want to fix their work area and work by learning programming hope they will benefit. Finally, the real purpose of programming is to solve problems. It requires patience, diligence, perseverance and practice.
          
          You can practice on hackerrank, codechef, leetcode to solve problems.`,
          type: "Programming",
          date: "Nov-03-2022, 9 min read",
          author: "Serajur Reza Chowdhury",
          address:"",
          email: "",
          phone: "",
        },
        {
          _id:5,
          img: "",
          heading: "Different fields of programming and suitable programming languages for it",
          description: `Nowadays many people want to make their career in programming. But many are hesitant to find the right programming language for their programming career. Many people start learning programming without thinking ahead. But later realized that he is not interested in the tasks in which that programming language is applied.

          A lot can be done with a programming language these days. For example, mobile apps can be built with Python. But you will see in the job market, Android, Kotlin, React Native, Flutter etc. are used for mobile apps. There are no jobs for mobile apps with Python. So if a programming language can be used for many tasks, it may not be suitable for that task.
          
          So in this article I will try to give a small analysis about which programming language is suitable in which case.
          
          Web development
          
          Web development resources are like a vast ocean. There are HTML, CSS, JavaScript, PHP, wordpress etc. A JavaScript has many resources about web development. Again, can do web work with only HTML, CSS (only freelancing though). Again, with JavaScript, PHP you can also do server side work. Again, you can create an entire website with wordpress.
          
          There are two parts to web development. One is frontend and other is backend. You can work with just the frontend or just the backend if you want. Again, both can work. Then, you'll be a full-stack developer.
          
          For frontend work you need to have good knowledge of HTML, CSS, JavaScript. Also you need to have expertise in at least one framework. JavaScript has many frameworks for frontend work. For example, angular, react(library), vue, svelte, ember etc. By learning any of these you can make your career as a frontend developer.
          
          You need to know any programming language well for backend work. Also should have proficiency in any one of the frameworks of that language. In this case you can select any language. For example, Java, JavaScript, PHP, C#, Python, Ruby etc. Next, mastery of the respective framework of the language is required. Some of the common frameworks are,
          
          
          C# - .net
          
          Java – spring, hibernate
          
          JavaScript – NodeJS (runtime environment)
          
          PHP – Laravel, Codeigniter, Symfony
          
          Python – Django, Flask
          
          Ruby-rails
          
          Remember, frontend development requires you to have good design skills. Again, backend development requires you to have good problem solving skills with programming.
          
          Mobile Apps Development
          
          Like web development, mobile apps development also has many resources. For example, Android, Kotlin, Flutter, React Native etc. For android you need to have good skills in java. To move to Flutter you need to know dart programming language well. The Dart language has many language combinations. Like, c, c++, java, javascript, python etc. So if you have a good understanding of any of these languages ​​you can easily master dart.
          
          Mobile apps development can also be done with JavaScript. There are some resources for this like, React Native, Ionic, Vue Mobile etc.
          
          With these resources you can develop apps for any platform. Before that don't forget to be proficient in real programming language.
          
          Game Development
          We play many games on computer or mobile. There are some, don't play them, spell them. And there are programming languages ​​suitable for game development. If you want to make games with game engines, c++ and c# are best. Because with their game engine you can develop 2d/3d and good graphics and good resolution games. Some good game engines in c++ are unreal engine, 4A Engine, Adventure Game Studio, Aleph One. Some good game engines in c# are Unity, MonoGame, Godot, Stride
          
          Besides, you can do game development with JavaScript and HTML5 canvas. JavaScript has some game engines or libraries with which you can develop 2d/3d games. For example, three.js, pixi.js, phaser.js, babylon.js etc.
          
          Data science
          
          Data or information is the most demanded thing in today's world. Using this information, data science is used to get the needs of different customers, predict something etc. With this again machine learning, artificial intelligence works together. The most suitable language for this is Python. Because, Python's libraries are very good for data science. These can be used to read information, show graphics through various tables or charts, predict something with artificial intelligence. Some Python libraries for data science are, scikit-learn, keras, matplotlib, pandas etc.
          
          This article discusses the appropriate programming languages ​​and related technologies for various job fields in the job or freelancing marketplace. Those who want to fix their work area and work by learning programming hope they will benefit. Finally, the real purpose of programming is to solve problems. It requires patience, diligence, perseverance and practice.
          
          You can practice on hackerrank, codechef, leetcode to solve problems.`,
          type: "Programming",
          date: "Nov-03-2022, 9 min read",
          author: "Serajur Reza Chowdhury",
          address:"",
          email: "",
          phone: "",
        },
        {
          _id:16,
          img: "",
          heading: "Different fields of programming and suitable programming languages for it",
          description: `Nowadays many people want to make their career in programming. But many are hesitant to find the right programming language for their programming career. Many people start learning programming without thinking ahead. But later realized that he is not interested in the tasks in which that programming language is applied.

          A lot can be done with a programming language these days. For example, mobile apps can be built with Python. But you will see in the job market, Android, Kotlin, React Native, Flutter etc. are used for mobile apps. There are no jobs for mobile apps with Python. So if a programming language can be used for many tasks, it may not be suitable for that task.
          
          So in this article I will try to give a small analysis about which programming language is suitable in which case.
          
          Web development
          
          Web development resources are like a vast ocean. There are HTML, CSS, JavaScript, PHP, wordpress etc. A JavaScript has many resources about web development. Again, can do web work with only HTML, CSS (only freelancing though). Again, with JavaScript, PHP you can also do server side work. Again, you can create an entire website with wordpress.
          
          There are two parts to web development. One is frontend and other is backend. You can work with just the frontend or just the backend if you want. Again, both can work. Then, you'll be a full-stack developer.
          
          For frontend work you need to have good knowledge of HTML, CSS, JavaScript. Also you need to have expertise in at least one framework. JavaScript has many frameworks for frontend work. For example, angular, react(library), vue, svelte, ember etc. By learning any of these you can make your career as a frontend developer.
          
          You need to know any programming language well for backend work. Also should have proficiency in any one of the frameworks of that language. In this case you can select any language. For example, Java, JavaScript, PHP, C#, Python, Ruby etc. Next, mastery of the respective framework of the language is required. Some of the common frameworks are,
          
          
          C# - .net
          
          Java – spring, hibernate
          
          JavaScript – NodeJS (runtime environment)
          
          PHP – Laravel, Codeigniter, Symfony
          
          Python – Django, Flask
          
          Ruby-rails
          
          Remember, frontend development requires you to have good design skills. Again, backend development requires you to have good problem solving skills with programming.
          
          Mobile Apps Development
          
          Like web development, mobile apps development also has many resources. For example, Android, Kotlin, Flutter, React Native etc. For android you need to have good skills in java. To move to Flutter you need to know dart programming language well. The Dart language has many language combinations. Like, c, c++, java, javascript, python etc. So if you have a good understanding of any of these languages ​​you can easily master dart.
          
          Mobile apps development can also be done with JavaScript. There are some resources for this like, React Native, Ionic, Vue Mobile etc.
          
          With these resources you can develop apps for any platform. Before that don't forget to be proficient in real programming language.
          
          Game Development
          We play many games on computer or mobile. There are some, don't play them, spell them. And there are programming languages ​​suitable for game development. If you want to make games with game engines, c++ and c# are best. Because with their game engine you can develop 2d/3d and good graphics and good resolution games. Some good game engines in c++ are unreal engine, 4A Engine, Adventure Game Studio, Aleph One. Some good game engines in c# are Unity, MonoGame, Godot, Stride
          
          Besides, you can do game development with JavaScript and HTML5 canvas. JavaScript has some game engines or libraries with which you can develop 2d/3d games. For example, three.js, pixi.js, phaser.js, babylon.js etc.
          
          Data science
          
          Data or information is the most demanded thing in today's world. Using this information, data science is used to get the needs of different customers, predict something etc. With this again machine learning, artificial intelligence works together. The most suitable language for this is Python. Because, Python's libraries are very good for data science. These can be used to read information, show graphics through various tables or charts, predict something with artificial intelligence. Some Python libraries for data science are, scikit-learn, keras, matplotlib, pandas etc.
          
          This article discusses the appropriate programming languages ​​and related technologies for various job fields in the job or freelancing marketplace. Those who want to fix their work area and work by learning programming hope they will benefit. Finally, the real purpose of programming is to solve problems. It requires patience, diligence, perseverance and practice.
          
          You can practice on hackerrank, codechef, leetcode to solve problems.`,
          type: "Programming",
          date: "Nov-03-2022, 9 min read",
          author: "Serajur Reza Chowdhury",
          address:"",
          email: "",
          phone: "",
        },
        {
          _id:6,
          img: "",
          heading: "Different fields of programming and suitable programming languages for it",
          description: `Nowadays many people want to make their career in programming. But many are hesitant to find the right programming language for their programming career. Many people start learning programming without thinking ahead. But later realized that he is not interested in the tasks in which that programming language is applied.

          A lot can be done with a programming language these days. For example, mobile apps can be built with Python. But you will see in the job market, Android, Kotlin, React Native, Flutter etc. are used for mobile apps. There are no jobs for mobile apps with Python. So if a programming language can be used for many tasks, it may not be suitable for that task.
          
          So in this article I will try to give a small analysis about which programming language is suitable in which case.
          
          Web development
          
          Web development resources are like a vast ocean. There are HTML, CSS, JavaScript, PHP, wordpress etc. A JavaScript has many resources about web development. Again, can do web work with only HTML, CSS (only freelancing though). Again, with JavaScript, PHP you can also do server side work. Again, you can create an entire website with wordpress.
          
          There are two parts to web development. One is frontend and other is backend. You can work with just the frontend or just the backend if you want. Again, both can work. Then, you'll be a full-stack developer.
          
          For frontend work you need to have good knowledge of HTML, CSS, JavaScript. Also you need to have expertise in at least one framework. JavaScript has many frameworks for frontend work. For example, angular, react(library), vue, svelte, ember etc. By learning any of these you can make your career as a frontend developer.
          
          You need to know any programming language well for backend work. Also should have proficiency in any one of the frameworks of that language. In this case you can select any language. For example, Java, JavaScript, PHP, C#, Python, Ruby etc. Next, mastery of the respective framework of the language is required. Some of the common frameworks are,
          
          
          C# - .net
          
          Java – spring, hibernate
          
          JavaScript – NodeJS (runtime environment)
          
          PHP – Laravel, Codeigniter, Symfony
          
          Python – Django, Flask
          
          Ruby-rails
          
          Remember, frontend development requires you to have good design skills. Again, backend development requires you to have good problem solving skills with programming.
          
          Mobile Apps Development
          
          Like web development, mobile apps development also has many resources. For example, Android, Kotlin, Flutter, React Native etc. For android you need to have good skills in java. To move to Flutter you need to know dart programming language well. The Dart language has many language combinations. Like, c, c++, java, javascript, python etc. So if you have a good understanding of any of these languages ​​you can easily master dart.
          
          Mobile apps development can also be done with JavaScript. There are some resources for this like, React Native, Ionic, Vue Mobile etc.
          
          With these resources you can develop apps for any platform. Before that don't forget to be proficient in real programming language.
          
          Game Development
          We play many games on computer or mobile. There are some, don't play them, spell them. And there are programming languages ​​suitable for game development. If you want to make games with game engines, c++ and c# are best. Because with their game engine you can develop 2d/3d and good graphics and good resolution games. Some good game engines in c++ are unreal engine, 4A Engine, Adventure Game Studio, Aleph One. Some good game engines in c# are Unity, MonoGame, Godot, Stride
          
          Besides, you can do game development with JavaScript and HTML5 canvas. JavaScript has some game engines or libraries with which you can develop 2d/3d games. For example, three.js, pixi.js, phaser.js, babylon.js etc.
          
          Data science
          
          Data or information is the most demanded thing in today's world. Using this information, data science is used to get the needs of different customers, predict something etc. With this again machine learning, artificial intelligence works together. The most suitable language for this is Python. Because, Python's libraries are very good for data science. These can be used to read information, show graphics through various tables or charts, predict something with artificial intelligence. Some Python libraries for data science are, scikit-learn, keras, matplotlib, pandas etc.
          
          This article discusses the appropriate programming languages ​​and related technologies for various job fields in the job or freelancing marketplace. Those who want to fix their work area and work by learning programming hope they will benefit. Finally, the real purpose of programming is to solve problems. It requires patience, diligence, perseverance and practice.
          
          You can practice on hackerrank, codechef, leetcode to solve problems.`,
          type: "Programming",
          date: "Nov-03-2022, 9 min read",
          author: "Serajur Reza Chowdhury",
          address:"",
          email: "",
          phone: "",
        },
        {
          _id:7,
          img: "",
          heading: "Different fields of programming and suitable programming languages for it",
          description: `Nowadays many people want to make their career in programming. But many are hesitant to find the right programming language for their programming career. Many people start learning programming without thinking ahead. But later realized that he is not interested in the tasks in which that programming language is applied.

          A lot can be done with a programming language these days. For example, mobile apps can be built with Python. But you will see in the job market, Android, Kotlin, React Native, Flutter etc. are used for mobile apps. There are no jobs for mobile apps with Python. So if a programming language can be used for many tasks, it may not be suitable for that task.
          
          So in this article I will try to give a small analysis about which programming language is suitable in which case.
          
          Web development
          
          Web development resources are like a vast ocean. There are HTML, CSS, JavaScript, PHP, wordpress etc. A JavaScript has many resources about web development. Again, can do web work with only HTML, CSS (only freelancing though). Again, with JavaScript, PHP you can also do server side work. Again, you can create an entire website with wordpress.
          
          There are two parts to web development. One is frontend and other is backend. You can work with just the frontend or just the backend if you want. Again, both can work. Then, you'll be a full-stack developer.
          
          For frontend work you need to have good knowledge of HTML, CSS, JavaScript. Also you need to have expertise in at least one framework. JavaScript has many frameworks for frontend work. For example, angular, react(library), vue, svelte, ember etc. By learning any of these you can make your career as a frontend developer.
          
          You need to know any programming language well for backend work. Also should have proficiency in any one of the frameworks of that language. In this case you can select any language. For example, Java, JavaScript, PHP, C#, Python, Ruby etc. Next, mastery of the respective framework of the language is required. Some of the common frameworks are,
          
          
          C# - .net
          
          Java – spring, hibernate
          
          JavaScript – NodeJS (runtime environment)
          
          PHP – Laravel, Codeigniter, Symfony
          
          Python – Django, Flask
          
          Ruby-rails
          
          Remember, frontend development requires you to have good design skills. Again, backend development requires you to have good problem solving skills with programming.
          
          Mobile Apps Development
          
          Like web development, mobile apps development also has many resources. For example, Android, Kotlin, Flutter, React Native etc. For android you need to have good skills in java. To move to Flutter you need to know dart programming language well. The Dart language has many language combinations. Like, c, c++, java, javascript, python etc. So if you have a good understanding of any of these languages ​​you can easily master dart.
          
          Mobile apps development can also be done with JavaScript. There are some resources for this like, React Native, Ionic, Vue Mobile etc.
          
          With these resources you can develop apps for any platform. Before that don't forget to be proficient in real programming language.
          
          Game Development
          We play many games on computer or mobile. There are some, don't play them, spell them. And there are programming languages ​​suitable for game development. If you want to make games with game engines, c++ and c# are best. Because with their game engine you can develop 2d/3d and good graphics and good resolution games. Some good game engines in c++ are unreal engine, 4A Engine, Adventure Game Studio, Aleph One. Some good game engines in c# are Unity, MonoGame, Godot, Stride
          
          Besides, you can do game development with JavaScript and HTML5 canvas. JavaScript has some game engines or libraries with which you can develop 2d/3d games. For example, three.js, pixi.js, phaser.js, babylon.js etc.
          
          Data science
          
          Data or information is the most demanded thing in today's world. Using this information, data science is used to get the needs of different customers, predict something etc. With this again machine learning, artificial intelligence works together. The most suitable language for this is Python. Because, Python's libraries are very good for data science. These can be used to read information, show graphics through various tables or charts, predict something with artificial intelligence. Some Python libraries for data science are, scikit-learn, keras, matplotlib, pandas etc.
          
          This article discusses the appropriate programming languages ​​and related technologies for various job fields in the job or freelancing marketplace. Those who want to fix their work area and work by learning programming hope they will benefit. Finally, the real purpose of programming is to solve problems. It requires patience, diligence, perseverance and practice.
          
          You can practice on hackerrank, codechef, leetcode to solve problems.`,
          type: "Programming",
          date: "Nov-03-2022, 9 min read",
          author: "Serajur Reza Chowdhury",
          address:"",
          email: "",
          phone: "",
        },
        {
          _id:8,
          img: "",
          heading: "Different fields of programming and suitable programming languages for it",
          description: `Nowadays many people want to make their career in programming. But many are hesitant to find the right programming language for their programming career. Many people start learning programming without thinking ahead. But later realized that he is not interested in the tasks in which that programming language is applied.

          A lot can be done with a programming language these days. For example, mobile apps can be built with Python. But you will see in the job market, Android, Kotlin, React Native, Flutter etc. are used for mobile apps. There are no jobs for mobile apps with Python. So if a programming language can be used for many tasks, it may not be suitable for that task.
          
          So in this article I will try to give a small analysis about which programming language is suitable in which case.
          
          Web development
          
          Web development resources are like a vast ocean. There are HTML, CSS, JavaScript, PHP, wordpress etc. A JavaScript has many resources about web development. Again, can do web work with only HTML, CSS (only freelancing though). Again, with JavaScript, PHP you can also do server side work. Again, you can create an entire website with wordpress.
          
          There are two parts to web development. One is frontend and other is backend. You can work with just the frontend or just the backend if you want. Again, both can work. Then, you'll be a full-stack developer.
          
          For frontend work you need to have good knowledge of HTML, CSS, JavaScript. Also you need to have expertise in at least one framework. JavaScript has many frameworks for frontend work. For example, angular, react(library), vue, svelte, ember etc. By learning any of these you can make your career as a frontend developer.
          
          You need to know any programming language well for backend work. Also should have proficiency in any one of the frameworks of that language. In this case you can select any language. For example, Java, JavaScript, PHP, C#, Python, Ruby etc. Next, mastery of the respective framework of the language is required. Some of the common frameworks are,
          
          
          C# - .net
          
          Java – spring, hibernate
          
          JavaScript – NodeJS (runtime environment)
          
          PHP – Laravel, Codeigniter, Symfony
          
          Python – Django, Flask
          
          Ruby-rails
          
          Remember, frontend development requires you to have good design skills. Again, backend development requires you to have good problem solving skills with programming.
          
          Mobile Apps Development
          
          Like web development, mobile apps development also has many resources. For example, Android, Kotlin, Flutter, React Native etc. For android you need to have good skills in java. To move to Flutter you need to know dart programming language well. The Dart language has many language combinations. Like, c, c++, java, javascript, python etc. So if you have a good understanding of any of these languages ​​you can easily master dart.
          
          Mobile apps development can also be done with JavaScript. There are some resources for this like, React Native, Ionic, Vue Mobile etc.
          
          With these resources you can develop apps for any platform. Before that don't forget to be proficient in real programming language.
          
          Game Development
          We play many games on computer or mobile. There are some, don't play them, spell them. And there are programming languages ​​suitable for game development. If you want to make games with game engines, c++ and c# are best. Because with their game engine you can develop 2d/3d and good graphics and good resolution games. Some good game engines in c++ are unreal engine, 4A Engine, Adventure Game Studio, Aleph One. Some good game engines in c# are Unity, MonoGame, Godot, Stride
          
          Besides, you can do game development with JavaScript and HTML5 canvas. JavaScript has some game engines or libraries with which you can develop 2d/3d games. For example, three.js, pixi.js, phaser.js, babylon.js etc.
          
          Data science
          
          Data or information is the most demanded thing in today's world. Using this information, data science is used to get the needs of different customers, predict something etc. With this again machine learning, artificial intelligence works together. The most suitable language for this is Python. Because, Python's libraries are very good for data science. These can be used to read information, show graphics through various tables or charts, predict something with artificial intelligence. Some Python libraries for data science are, scikit-learn, keras, matplotlib, pandas etc.
          
          This article discusses the appropriate programming languages ​​and related technologies for various job fields in the job or freelancing marketplace. Those who want to fix their work area and work by learning programming hope they will benefit. Finally, the real purpose of programming is to solve problems. It requires patience, diligence, perseverance and practice.
          
          You can practice on hackerrank, codechef, leetcode to solve problems.`,
          type: "Programming",
          date: "Nov-03-2022, 9 min read",
          author: "Serajur Reza Chowdhury",
          address:"",
          email: "",
          phone: "",
        },
        {
          _id:9,
          img: "",
          heading: "Different fields of programming and suitable programming languages for it",
          description: `Nowadays many people want to make their career in programming. But many are hesitant to find the right programming language for their programming career. Many people start learning programming without thinking ahead. But later realized that he is not interested in the tasks in which that programming language is applied.

          A lot can be done with a programming language these days. For example, mobile apps can be built with Python. But you will see in the job market, Android, Kotlin, React Native, Flutter etc. are used for mobile apps. There are no jobs for mobile apps with Python. So if a programming language can be used for many tasks, it may not be suitable for that task.
          
          So in this article I will try to give a small analysis about which programming language is suitable in which case.
          
          Web development
          
          Web development resources are like a vast ocean. There are HTML, CSS, JavaScript, PHP, wordpress etc. A JavaScript has many resources about web development. Again, can do web work with only HTML, CSS (only freelancing though). Again, with JavaScript, PHP you can also do server side work. Again, you can create an entire website with wordpress.
          
          There are two parts to web development. One is frontend and other is backend. You can work with just the frontend or just the backend if you want. Again, both can work. Then, you'll be a full-stack developer.
          
          For frontend work you need to have good knowledge of HTML, CSS, JavaScript. Also you need to have expertise in at least one framework. JavaScript has many frameworks for frontend work. For example, angular, react(library), vue, svelte, ember etc. By learning any of these you can make your career as a frontend developer.
          
          You need to know any programming language well for backend work. Also should have proficiency in any one of the frameworks of that language. In this case you can select any language. For example, Java, JavaScript, PHP, C#, Python, Ruby etc. Next, mastery of the respective framework of the language is required. Some of the common frameworks are,
          
          
          C# - .net
          
          Java – spring, hibernate
          
          JavaScript – NodeJS (runtime environment)
          
          PHP – Laravel, Codeigniter, Symfony
          
          Python – Django, Flask
          
          Ruby-rails
          
          Remember, frontend development requires you to have good design skills. Again, backend development requires you to have good problem solving skills with programming.
          
          Mobile Apps Development
          
          Like web development, mobile apps development also has many resources. For example, Android, Kotlin, Flutter, React Native etc. For android you need to have good skills in java. To move to Flutter you need to know dart programming language well. The Dart language has many language combinations. Like, c, c++, java, javascript, python etc. So if you have a good understanding of any of these languages ​​you can easily master dart.
          
          Mobile apps development can also be done with JavaScript. There are some resources for this like, React Native, Ionic, Vue Mobile etc.
          
          With these resources you can develop apps for any platform. Before that don't forget to be proficient in real programming language.
          
          Game Development
          We play many games on computer or mobile. There are some, don't play them, spell them. And there are programming languages ​​suitable for game development. If you want to make games with game engines, c++ and c# are best. Because with their game engine you can develop 2d/3d and good graphics and good resolution games. Some good game engines in c++ are unreal engine, 4A Engine, Adventure Game Studio, Aleph One. Some good game engines in c# are Unity, MonoGame, Godot, Stride
          
          Besides, you can do game development with JavaScript and HTML5 canvas. JavaScript has some game engines or libraries with which you can develop 2d/3d games. For example, three.js, pixi.js, phaser.js, babylon.js etc.
          
          Data science
          
          Data or information is the most demanded thing in today's world. Using this information, data science is used to get the needs of different customers, predict something etc. With this again machine learning, artificial intelligence works together. The most suitable language for this is Python. Because, Python's libraries are very good for data science. These can be used to read information, show graphics through various tables or charts, predict something with artificial intelligence. Some Python libraries for data science are, scikit-learn, keras, matplotlib, pandas etc.
          
          This article discusses the appropriate programming languages ​​and related technologies for various job fields in the job or freelancing marketplace. Those who want to fix their work area and work by learning programming hope they will benefit. Finally, the real purpose of programming is to solve problems. It requires patience, diligence, perseverance and practice.
          
          You can practice on hackerrank, codechef, leetcode to solve problems.`,
          type: "Programming",
          date: "Nov-03-2022, 9 min read",
          author: "Serajur Reza Chowdhury",
          address:"",
          email: "",
          phone: "",
        },
        {
          _id:10,
          img: "",
          heading: "Different fields of programming and suitable programming languages for it",
          description: `Nowadays many people want to make their career in programming. But many are hesitant to find the right programming language for their programming career. Many people start learning programming without thinking ahead. But later realized that he is not interested in the tasks in which that programming language is applied.

          A lot can be done with a programming language these days. For example, mobile apps can be built with Python. But you will see in the job market, Android, Kotlin, React Native, Flutter etc. are used for mobile apps. There are no jobs for mobile apps with Python. So if a programming language can be used for many tasks, it may not be suitable for that task.
          
          So in this article I will try to give a small analysis about which programming language is suitable in which case.
          
          Web development
          
          Web development resources are like a vast ocean. There are HTML, CSS, JavaScript, PHP, wordpress etc. A JavaScript has many resources about web development. Again, can do web work with only HTML, CSS (only freelancing though). Again, with JavaScript, PHP you can also do server side work. Again, you can create an entire website with wordpress.
          
          There are two parts to web development. One is frontend and other is backend. You can work with just the frontend or just the backend if you want. Again, both can work. Then, you'll be a full-stack developer.
          
          For frontend work you need to have good knowledge of HTML, CSS, JavaScript. Also you need to have expertise in at least one framework. JavaScript has many frameworks for frontend work. For example, angular, react(library), vue, svelte, ember etc. By learning any of these you can make your career as a frontend developer.
          
          You need to know any programming language well for backend work. Also should have proficiency in any one of the frameworks of that language. In this case you can select any language. For example, Java, JavaScript, PHP, C#, Python, Ruby etc. Next, mastery of the respective framework of the language is required. Some of the common frameworks are,
          
          
          C# - .net
          
          Java – spring, hibernate
          
          JavaScript – NodeJS (runtime environment)
          
          PHP – Laravel, Codeigniter, Symfony
          
          Python – Django, Flask
          
          Ruby-rails
          
          Remember, frontend development requires you to have good design skills. Again, backend development requires you to have good problem solving skills with programming.
          
          Mobile Apps Development
          
          Like web development, mobile apps development also has many resources. For example, Android, Kotlin, Flutter, React Native etc. For android you need to have good skills in java. To move to Flutter you need to know dart programming language well. The Dart language has many language combinations. Like, c, c++, java, javascript, python etc. So if you have a good understanding of any of these languages ​​you can easily master dart.
          
          Mobile apps development can also be done with JavaScript. There are some resources for this like, React Native, Ionic, Vue Mobile etc.
          
          With these resources you can develop apps for any platform. Before that don't forget to be proficient in real programming language.
          
          Game Development
          We play many games on computer or mobile. There are some, don't play them, spell them. And there are programming languages ​​suitable for game development. If you want to make games with game engines, c++ and c# are best. Because with their game engine you can develop 2d/3d and good graphics and good resolution games. Some good game engines in c++ are unreal engine, 4A Engine, Adventure Game Studio, Aleph One. Some good game engines in c# are Unity, MonoGame, Godot, Stride
          
          Besides, you can do game development with JavaScript and HTML5 canvas. JavaScript has some game engines or libraries with which you can develop 2d/3d games. For example, three.js, pixi.js, phaser.js, babylon.js etc.
          
          Data science
          
          Data or information is the most demanded thing in today's world. Using this information, data science is used to get the needs of different customers, predict something etc. With this again machine learning, artificial intelligence works together. The most suitable language for this is Python. Because, Python's libraries are very good for data science. These can be used to read information, show graphics through various tables or charts, predict something with artificial intelligence. Some Python libraries for data science are, scikit-learn, keras, matplotlib, pandas etc.
          
          This article discusses the appropriate programming languages ​​and related technologies for various job fields in the job or freelancing marketplace. Those who want to fix their work area and work by learning programming hope they will benefit. Finally, the real purpose of programming is to solve problems. It requires patience, diligence, perseverance and practice.
          
          You can practice on hackerrank, codechef, leetcode to solve problems.`,
          type: "Programming",
          date: "Nov-03-2022, 9 min read",
          author: "Serajur Reza Chowdhury",
          address:"",
          email: "",
          phone: "",
        },
        {
          _id:11,
          img: "",
          heading: "Different fields of programming and suitable programming languages for it",
          description: `Nowadays many people want to make their career in programming. But many are hesitant to find the right programming language for their programming career. Many people start learning programming without thinking ahead. But later realized that he is not interested in the tasks in which that programming language is applied.

          A lot can be done with a programming language these days. For example, mobile apps can be built with Python. But you will see in the job market, Android, Kotlin, React Native, Flutter etc. are used for mobile apps. There are no jobs for mobile apps with Python. So if a programming language can be used for many tasks, it may not be suitable for that task.
          
          So in this article I will try to give a small analysis about which programming language is suitable in which case.
          
          Web development
          
          Web development resources are like a vast ocean. There are HTML, CSS, JavaScript, PHP, wordpress etc. A JavaScript has many resources about web development. Again, can do web work with only HTML, CSS (only freelancing though). Again, with JavaScript, PHP you can also do server side work. Again, you can create an entire website with wordpress.
          
          There are two parts to web development. One is frontend and other is backend. You can work with just the frontend or just the backend if you want. Again, both can work. Then, you'll be a full-stack developer.
          
          For frontend work you need to have good knowledge of HTML, CSS, JavaScript. Also you need to have expertise in at least one framework. JavaScript has many frameworks for frontend work. For example, angular, react(library), vue, svelte, ember etc. By learning any of these you can make your career as a frontend developer.
          
          You need to know any programming language well for backend work. Also should have proficiency in any one of the frameworks of that language. In this case you can select any language. For example, Java, JavaScript, PHP, C#, Python, Ruby etc. Next, mastery of the respective framework of the language is required. Some of the common frameworks are,
          
          
          C# - .net
          
          Java – spring, hibernate
          
          JavaScript – NodeJS (runtime environment)
          
          PHP – Laravel, Codeigniter, Symfony
          
          Python – Django, Flask
          
          Ruby-rails
          
          Remember, frontend development requires you to have good design skills. Again, backend development requires you to have good problem solving skills with programming.
          
          Mobile Apps Development
          
          Like web development, mobile apps development also has many resources. For example, Android, Kotlin, Flutter, React Native etc. For android you need to have good skills in java. To move to Flutter you need to know dart programming language well. The Dart language has many language combinations. Like, c, c++, java, javascript, python etc. So if you have a good understanding of any of these languages ​​you can easily master dart.
          
          Mobile apps development can also be done with JavaScript. There are some resources for this like, React Native, Ionic, Vue Mobile etc.
          
          With these resources you can develop apps for any platform. Before that don't forget to be proficient in real programming language.
          
          Game Development
          We play many games on computer or mobile. There are some, don't play them, spell them. And there are programming languages ​​suitable for game development. If you want to make games with game engines, c++ and c# are best. Because with their game engine you can develop 2d/3d and good graphics and good resolution games. Some good game engines in c++ are unreal engine, 4A Engine, Adventure Game Studio, Aleph One. Some good game engines in c# are Unity, MonoGame, Godot, Stride
          
          Besides, you can do game development with JavaScript and HTML5 canvas. JavaScript has some game engines or libraries with which you can develop 2d/3d games. For example, three.js, pixi.js, phaser.js, babylon.js etc.
          
          Data science
          
          Data or information is the most demanded thing in today's world. Using this information, data science is used to get the needs of different customers, predict something etc. With this again machine learning, artificial intelligence works together. The most suitable language for this is Python. Because, Python's libraries are very good for data science. These can be used to read information, show graphics through various tables or charts, predict something with artificial intelligence. Some Python libraries for data science are, scikit-learn, keras, matplotlib, pandas etc.
          
          This article discusses the appropriate programming languages ​​and related technologies for various job fields in the job or freelancing marketplace. Those who want to fix their work area and work by learning programming hope they will benefit. Finally, the real purpose of programming is to solve problems. It requires patience, diligence, perseverance and practice.
          
          You can practice on hackerrank, codechef, leetcode to solve problems.`,
          type: "Programming",
          date: "Nov-03-2022, 9 min read",
          author: "Serajur Reza Chowdhury",
          address:"",
          email: "",
          phone: "",
        },
        {
          _id:12,
          img: "",
          heading: "Different fields of programming and suitable programming languages for it",
          description: `Nowadays many people want to make their career in programming. But many are hesitant to find the right programming language for their programming career. Many people start learning programming without thinking ahead. But later realized that he is not interested in the tasks in which that programming language is applied.

          A lot can be done with a programming language these days. For example, mobile apps can be built with Python. But you will see in the job market, Android, Kotlin, React Native, Flutter etc. are used for mobile apps. There are no jobs for mobile apps with Python. So if a programming language can be used for many tasks, it may not be suitable for that task.
          
          So in this article I will try to give a small analysis about which programming language is suitable in which case.
          
          Web development
          
          Web development resources are like a vast ocean. There are HTML, CSS, JavaScript, PHP, wordpress etc. A JavaScript has many resources about web development. Again, can do web work with only HTML, CSS (only freelancing though). Again, with JavaScript, PHP you can also do server side work. Again, you can create an entire website with wordpress.
          
          There are two parts to web development. One is frontend and other is backend. You can work with just the frontend or just the backend if you want. Again, both can work. Then, you'll be a full-stack developer.
          
          For frontend work you need to have good knowledge of HTML, CSS, JavaScript. Also you need to have expertise in at least one framework. JavaScript has many frameworks for frontend work. For example, angular, react(library), vue, svelte, ember etc. By learning any of these you can make your career as a frontend developer.
          
          You need to know any programming language well for backend work. Also should have proficiency in any one of the frameworks of that language. In this case you can select any language. For example, Java, JavaScript, PHP, C#, Python, Ruby etc. Next, mastery of the respective framework of the language is required. Some of the common frameworks are,
          
          
          C# - .net
          
          Java – spring, hibernate
          
          JavaScript – NodeJS (runtime environment)
          
          PHP – Laravel, Codeigniter, Symfony
          
          Python – Django, Flask
          
          Ruby-rails
          
          Remember, frontend development requires you to have good design skills. Again, backend development requires you to have good problem solving skills with programming.
          
          Mobile Apps Development
          
          Like web development, mobile apps development also has many resources. For example, Android, Kotlin, Flutter, React Native etc. For android you need to have good skills in java. To move to Flutter you need to know dart programming language well. The Dart language has many language combinations. Like, c, c++, java, javascript, python etc. So if you have a good understanding of any of these languages ​​you can easily master dart.
          
          Mobile apps development can also be done with JavaScript. There are some resources for this like, React Native, Ionic, Vue Mobile etc.
          
          With these resources you can develop apps for any platform. Before that don't forget to be proficient in real programming language.
          
          Game Development
          We play many games on computer or mobile. There are some, don't play them, spell them. And there are programming languages ​​suitable for game development. If you want to make games with game engines, c++ and c# are best. Because with their game engine you can develop 2d/3d and good graphics and good resolution games. Some good game engines in c++ are unreal engine, 4A Engine, Adventure Game Studio, Aleph One. Some good game engines in c# are Unity, MonoGame, Godot, Stride
          
          Besides, you can do game development with JavaScript and HTML5 canvas. JavaScript has some game engines or libraries with which you can develop 2d/3d games. For example, three.js, pixi.js, phaser.js, babylon.js etc.
          
          Data science
          
          Data or information is the most demanded thing in today's world. Using this information, data science is used to get the needs of different customers, predict something etc. With this again machine learning, artificial intelligence works together. The most suitable language for this is Python. Because, Python's libraries are very good for data science. These can be used to read information, show graphics through various tables or charts, predict something with artificial intelligence. Some Python libraries for data science are, scikit-learn, keras, matplotlib, pandas etc.
          
          This article discusses the appropriate programming languages ​​and related technologies for various job fields in the job or freelancing marketplace. Those who want to fix their work area and work by learning programming hope they will benefit. Finally, the real purpose of programming is to solve problems. It requires patience, diligence, perseverance and practice.
          
          You can practice on hackerrank, codechef, leetcode to solve problems.`,
          type: "Programming",
          date: "Nov-03-2022, 9 min read",
          author: "Serajur Reza Chowdhury",
          address:"",
          email: "",
          phone: "",
        },
      ];

      const blogInfo2 = blogInfo.slice(0, 4);
      console.log(blogInfo2);

    return (
      <div>
        <div className='breadcrumb-style2'>
                <Container className='py-2'>
                <h1 className='px-0'>Blogs</h1>
                <Breadcrumb>
                  <Breadcrumb.Item><Link className='text-white' to="/">Home</Link></Breadcrumb.Item>
                  <Breadcrumb.Item active>blog</Breadcrumb.Item>
                </Breadcrumb>
                </Container>
            </div>
            <Row xs={1} sm={1} md={1} className="g-4 my-5 d-flex justify-content-center">
              <h1 className='text-center'>Our Best Blogs</h1>
            {
                blogInfo.map(blog =><Blog
                    key={blog._id}
                    blog={blog}
                ></Blog>)
            }
            </Row>
      </div>
    );
};

export default Blogs;