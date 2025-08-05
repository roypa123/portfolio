"use client"

import { useState, useEffect } from "react"
import React1 from "../assets/react1.svg";
import Flutter1 from "../assets/flutter1.svg";
import Angular1 from "../assets/angular1.svg";
import {
  Menu,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  X,
  ChevronDown,
  Send,
  Layout,
  Smartphone,
  Brain,
  BookOpen

} from "lucide-react"
import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"
import { Input } from "./components/ui/input"
import { Textarea } from "./components/ui/textarea"
import { Badge } from "./components/ui/badge"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    { name: "React", level: 80, color: "from-blue-500 to-cyan-500" },
    { name: "Flutter", level: 90, color: "from-blue-600 to-blue-400" },
    { name: "Angular", level: 80, color: "from-purple-600 to-purple-400" },
    { name: "Typescript", level: 85, color: "from-green-600 to-green-400" },
    { name: "Dart", level: 80, color: "from-yellow-500 to-yellow-300" },
    { name: "Flutter BLOC", level: 85, color: "from-purple-500 to-pink-500" },
  ]

  const projects = [
    {
      title: "Toffee Ride",
      description: "An intelligent platform to promote self-learning in children . An app based solution accessible on your smartphones, tablets, laptops, and desktops.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      tech: ["Getx", "http"],
      github: "#",
      live: "#",
    },
    {
      title: "Just Borrow",
      description: "A user-friendly and comprehensive rental platform that simplifies the process of finding and renting a wide range of items, properties, and services",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      tech: ["Getx", "http"],
      github: "#",
      live: "#",
    },
    {
      title: "Calculator",
      description: "A Calculator App is a versatile and user-friendly application designed to perform mathematical calculations efficiently. Whether you're solving simple arithmetic problems or tackling complex equations, a calculator app provides a convenient and portable solution.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      tech: ["Flutter", "Bloc"],
      github: "https://github.com/roypa123/calculator",
      live: "#",
    },
    {
      title: "Weather App",
      description: "A Weather App is a mobile application designed to provide users with accurate, real-time weather information. It offers a convenient way to stay updated on current weather conditions, helping users plan their daily activities accordingly.",
      image: "https://github.com/roypa123/weather_app/blob/9bb4c65a6b769bf2740dc7f532dafee6e71ce8aa/extrafile/git_images/image1.jpeg",
      tech: ["Flutter Bloc", "Dio", "GetIt","geolocator"],
      github: "https://github.com/roypa123/weather_app",
      live: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="flex items-center justify-between px-8 py-4 lg:px-16">
          <div className="text-2xl font-light tracking-wide">Roy P A</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {["home", "about", "skills", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-all duration-300 relative group capitalize ${
                  activeSection === section ? "text-emerald-400" : "hover:text-emerald-400"
                }`}
              >
                {section}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-400 transition-all duration-300 ${
                    activeSection === section ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-t border-gray-800/50">
            <div className="px-8 py-6 space-y-4">
              {["home", "about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left text-lg font-medium hover:text-emerald-400 transition-colors capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="relative  bg-gray-900/30 min-h-screen flex items-center px-8 py-24 lg:px-16">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto w-full">
          <div className="space-y-8">
            <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-2 text-sm font-medium w-fit backdrop-blur-sm">
              Front-End Developer
            </Badge>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="block">Words are easy.</span>
                <span className="block text-gray-300">Building is better.</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-lg font-light">
                I bring ideas to life with clean code and thoughtful design.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                LET'S CHAT!
              </Button>
               <Button
                onClick={() => scrollToSection("projects")}
                className="bg-black-500 text-white font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg
                border border-emerald-600
                ">
                View My Work
              </Button>

            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Developer"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute top-16 right-4 w-[80px] h-[80px] bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-2xl flex items-center justify-center animate-float">
              <div className="text-red-400 font-bold text-xl">
              <img src={Angular1} alt="" />
              </div>
            </div>
            <div className="absolute bottom-24 left-[20px] md:left-[170px]  w-[80px] h-[80px] bg-blue-500/10  backdrop-blur-sm border border-blue-500/10  rounded-2xl flex items-center justify-center animate-float-delayed">
              <div className="text-emerald-400 font-bold text-lg">
                <img src={React1} alt="" />
              </div>
            </div>
            <div className="absolute top-1/2 right-0 w-[80px] h-[80px] bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full animate-pulse">
              <img src={Flutter1} alt="" className="" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative px-8 py-24 lg:px-16">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm text-emerald-400 uppercase tracking-[0.3em] mb-4 font-medium">About Me</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Hello! I'm Roy P A
            </h2>
            <p className="text-2xl text-emerald-400 italic font-light mb-12 leading-relaxed">
              Great products start with smart code.
            </p>
          </div>


            <div className="space-y-6 md:px-[150px] ">
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                I’m a passionate web and mobile developer with 4 years of experience building modern, scalable applications. My core expertise lies in React with Redux for web development, and Flutter with BLoC for mobile apps. I focus on creating responsive, high-performance interfaces and seamless user experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                I’m naturally curious and constantly learning, always striving to improve my skills and write cleaner, more efficient code. Whether it’s a website, a mobile app, or anything in between—I love building things that live on the internet.
              </p>


                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    4+
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">Years Experience</div>
                </div>

            </div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative px-8 py-24 lg:px-16 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm text-emerald-400 uppercase tracking-[0.3em] mb-4 font-medium">My Skills</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              What I Do Best
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              I specialize in creating digital experiences that are not only beautiful but also functional and
              user-friendly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-white">{skill.name}</span>
                    <span className="text-emerald-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-emerald-500/30 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Layout className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                  <p className="text-gray-400 text-sm">Crafting responsive, scalable web interfaces using React and Redux</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-emerald-500/30 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2"> Mobile Development</h3>
                  <p className="text-gray-400 text-sm">Building smooth and performant cross-platform apps with Flutter and BLoC</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-emerald-500/30 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">State Management</h3>
                  <p className="text-gray-400 text-sm">Implementing robust state logic for complex applications</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-emerald-500/30 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                  <p className="text-gray-400 text-sm">Always improving and exploring better ways to build with clean, maintainable code</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative px-8 py-24 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm text-emerald-400 uppercase tracking-[0.3em] mb-4 font-medium">My Work</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and creativity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-emerald-500/30 transition-all duration-500 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button size="icon" variant="ghost" className="bg-black/50 hover:bg-emerald-500/20 text-white">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="bg-black/50 hover:bg-emerald-500/20 text-white">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative px-8 py-24 lg:px-16 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm text-emerald-400 uppercase tracking-[0.3em] mb-4 font-medium">Get In Touch</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your
              ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-400">roypa81130@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-400">+91 8113027091</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-400">Vallachira,Thrissur, IN</p>
                </div>
              </div>

              <div className="flex space-x-4 pt-8">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/10"
                  onClick={() => window.open("https://github.com/roypa123", "_blank")}
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/10"
                  onClick={() => window.open("https://www.linkedin.com/in/roypa123", "_blank")}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-white font-medium mb-2">First Name</label>
                      <Input className="bg-gray-800/50 text-white border-gray-700 focus:border-emerald-500" />
                    </div>
                    <div>
                      <label className="block text-sm text-white font-medium mb-2">Last Name</label>
                      <Input className="bg-gray-800/50 text-white border-gray-700 focus:border-emerald-500" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-white font-medium mb-2">Email</label>
                    <Input type="email" className="bg-gray-800/50 text-white border-gray-700 focus:border-emerald-500" />
                  </div>
                  <div>
                    <label className="block text-sm text-white font-medium mb-2">Subject</label>
                    <Input className="bg-gray-800/50 border-gray-700 text-white focus:border-emerald-500" />
                  </div>
                  <div>
                    <label className="block text-sm text-white font-medium mb-2">Message</label>
                    <Textarea
                      rows={5}
                      className="bg-gray-800/50 border-gray-700 text-white focus:border-emerald-500 resize-none"
                    />
                  </div>
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-8 py-12 lg:px-16 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-gray-500 text-sm font-light">
            © 2025 Roy P A. All rights reserved. Made with ❤️ and lots of ☕
          </div>
        </div>
      </footer>
    </div>
  )
}
