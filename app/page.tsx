"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Lock,
  Globe,
  Code,
  Rocket,
  Users,
  Zap,
  Target,
  AlertTriangle,
} from "lucide-react"
import Image from 'next/image';
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      title: "E-Ticketing Module",
      description: "Led the full-cycle development of a web application for public event ticket booking.",
      role: "Technical Business Analyst | Frontend Developer | UI/UX Designer",
      tech: ["Vue JS", "FIGMA", "IIS Server"],
      isPrivate: false,
      impact: "Enabled the government to launch its own in-house e-ticketing portal without third-party reliance.",
      sector: "Government City Council",
      solution: "Built on top of the existing booking system to support events. Delivered a modern user interface tailored for public use.",
      challenges: "Extended an existing booking system without disrupting its current functionality. Managed on-premise server limitations."
    },
    {
      title: "Automation for Support Ticket Creation",
      description: "Built an internal automation tool that mimics human-like interactions to create support tickets.",
      role: "Solution Provider",
      tech: ["Python", "Selenium", "Cronjob"],
      isPrivate: true,
      impact: "Reduced manual ticket creation efforts across departments.",
      sector: "Telco",
      solution: "Developed a Python-based automation script to simulate user behavior, bypass CAPTCHA using login API inspection and session retention. Integrated MFA using a dedicated email forwarding mechanism.",
      challenges: "Dealing with MFA, CAPTCHA protections, and secure login flows on a limited-access internal portal. Required creative session handling and API-level workarounds."
    },
    {
      title: "Appointment Module",
      description: "Developed an appointment booking feature within a hospital chatbot platform.",
      role: "Frontend Developer",
      tech: ["React", "DeepSeek", "Zustand","Docker"],
      isPrivate: false,
      impact: "Improved patient experience through seamless chatbot-based appointment flow.",
      sector: "Hospital",
      solution: "Implemented screen rendering using dynamic flow configs to avoid excessive conditional logic. Each screen supported back and forward navigation. Used Zustand for scalable state management and optimized UI using DeepSeek.",
      challenges: "Building within tight chatbot use case constraints while maintaining flexibility and usability."
    },
    {
      title: "Fault Detection and Management",
      description: "Led module development, coached team, and handled ETL processes for outage tracking. Setup the servers for application deployment",
      role: "Full Stack Developer | Team Lead",
      tech: ["Laravel", "Postgres", "SQL", "jQuery", "AdminLTE", "Apache"],
      isPrivate: true,
      impact: "Enabled internal users to monitor outages and ongoing activities from a centralized app.",
      sector: "Telco",
      solution: "Built the web app using Laravel and integrated backend with Airflow schedulers. Leveraged Laravel's ORM and added SQL indexing for better performance.",
      challenges: "Integrating multiple APIs and raw file data formats, while optimizing performance and backend structure."
    },
    {
      title: "Azure Fabric OneLake Data Access",
      description: "Created a backend solution to query OneLake warehouse data and expose it to frontend applications.",
      role: "Backend Developer",
      tech: ["Express JS", "ODBC Driver", "Swagger", "Ubuntu","Docker"],
      isPrivate: false,
      impact: "Enabled frontend teams to build custom dashboards with drag-and-drop features powered by live data.",
      sector: "Government",
      solution: "Used Express JS with ODBC driver and service principal authentication to query OneLake. Packaged the solution on Ubuntu 22.04. Integrated Swagger for endpoint documentation.",
      challenges: "Limited environment and framework support required extensive trial and testing to finalize the working setup."
    },
    {
      title: "Internal Azure-Based Portals",
      description: "Developed secure internal portals and automated deployment workflows on Azure.",
      role: "Full Stack Developer",
      tech: ["React JS", "Laravel", "Shell Script", "Azure App Services", "Azure Container Registry", "Azure Entra ID", "Docker"],
      isPrivate: false,
      impact: "Streamlined deployment process and ensured secure access for internal tools.",
      sector: "Goverment / Internal",
      solution: "Implemented Entra ID authentication for SSO, automated Docker image builds and deployments to Azure Container Registry, and deployed apps to Azure App Services. Created reusable deployment scripts for the team.",
      challenges: "Ensuring secure, scalable, and repeatable deployments while simplifying the workflow for the entire team."
    },
    {
      title: "Provisioning Portal (Legacy)",
      description: "Maintained and extended a legacy portal used for handling change and service requests.",
      role: "Full Stack Developer",
      tech: ["CodeIgniter", "jQuery", "MySQL", "SQL","Apache"],
      isPrivate: true,
      impact: "Supported critical on-site operations and streamlined request handling processes.",
      sector: "Telco (Multi-client)",
      solution: "Worked on Phase 3 feature updates across two different companies using similar legacy systems. Integrated new backend APIs while preserving core portal functionality.",
      challenges: "Navigated heavily customized and undocumented legacy code written by various developers over the years."
    },
    {
      title: "Parcel Status Scraper",
      description: "Built a custom parcel status tracker for public users by scraping and aggregating data from courier sites.",
      role: "Freelance Full Stack Developer",
      tech: ["Python", "Django", "FastAPI", "Selenium"],
      isPrivate: false,
      impact: "Provided real-time parcel tracking across multiple couriers in one unified dashboard.",
      sector: "Freelance",
      solution: "Used Selenium to scrape parcel data, FastAPI to expose endpoints, and Django to serve the frontend. Shaped and correlated data from three courier sites for a consistent user view.",
      challenges: "Overcame inconsistent website structures, unpredictable response times, and potential scraping performance issues. Suggested caching strategies and API fallback options to the client."
    }
  ];

    const skills = [
      {
        name: "Frontend",
        icon: Code,
        items: ["React", "Next.js", "Vue JS", "TypeScript", "Tailwind CSS"]
      },
      {
        name: "Backend",
        icon: Rocket,
        items: ["Laravel", "PHP", "Python", "ExpressJS", "PostgreSQL", "MySQL"]
      },
      {
        name: "Deployment",
        icon: Rocket,
        items: [
          "Docker",
          "Azure App Service",
          "Shell Scripting",
          "IIS Server",
          "Apache",
          "Azure Container Registry"
        ]
      },
      {
        name: "Linux",
        icon: Rocket,
        items: ["Ubuntu", "Debian", "Bash", "Systemctl Services"]
      },
      {
        name: "Leadership",
        icon: Users,
        items: ["Team Lead", "Mentoring", "Code Review", "System Architecture", "Tech Briefings"]
      },
      {
        name: "Tools",
        icon: Code,
        items: ["Figma", "Git", "Swagger", "VS Code", "ChatGPT" , "DeepSeek" , "v0.dev"]
      }
    ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-amber-400/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-amber-400/20 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 animate-pulse"></div>

        <div
          className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-12">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 p-1 animate-pulse-slow transform transition-transform duration-500 hover:scale-105">
              <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden">
                <Image
                  src="/DP.png"
                  alt="Saarugesan"
                  width={192}
                  height={192}
                  className="rounded-full object-contain w-full h-full"
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
            SAARUGESAN
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Crafting digital experiences that bridge the gap between
            <span className="text-amber-400 font-semibold"> imagination </span>
            and
            <span className="text-orange-400 font-semibold"> reality</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black border-0 font-semibold transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black bg-transparent transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-gray-800/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in">My Journey</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              From university curiosity to leading teams - here's how I evolved as a developer
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto animate-pulse"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Journey Cards */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-gray-900/50 border-gray-600 hover:border-amber-500/50 transition-all duration-300 group backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-amber-400 text-lg flex items-center gap-2">🎓 The Spark</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                   Though I was studying networking at university, my journey into programming truly began during a final-year project where I built a mobile app using image recognition to help kids identify animals and plants. That project sparked something big, and fast forward a few years, I’m now contributing to projects across the telco, enterprise, and government sectors.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-600 hover:border-amber-500/50 transition-all duration-300 group backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-orange-400 text-lg flex items-center gap-2">🎯 The Philosophy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    Technology is my medium. Impact is my goal. I'm the kind of developer who gets just as excited about
                    solving user problems as writing clean code. Over time, continuous learning became second nature,
                    especially when there's a real-world problem to crack.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-600 hover:border-amber-500/50 transition-all duration-300 group backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-amber-400 text-lg flex items-center gap-2">🚀 The Evolution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    These days, I work across the full stack with a strong focus on performance and user experience. I
                    enjoy both frontend and backend, but no matter the layer, it's always about creating something
                    useful and user-first. Beyond development, I've also stepped into consulting and business analyst
                    roles—talking to users, gathering requirements, and shaping solutions before the first line of code
                    is written.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-600 hover:border-amber-500/50 transition-all duration-300 group backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-orange-400 text-lg flex items-center gap-2">👥 The Leadership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    Right now, I lead a frontend team where I mentor others, run tech briefings, and make sure
                    everyone's aligned. I believe in putting the right people in the right spots, helping them grow
                    while keeping the work impactful and collaborative.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Stats Card */}
            <div className="lg:col-span-1">
              <Card className="bg-gray-900/50 border-gray-600 backdrop-blur-sm sticky top-8">
                <CardHeader>
                  {/* <CardTitle className="text-white text-xl text-center">By The Numbers</CardTitle> */}
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center transform hover:scale-110 transition-transform duration-300">
                      <div className="text-3xl font-bold text-amber-400 mb-1">15+</div>
                      <div className="text-gray-400 text-sm">Projects Involvement</div>
                      {/* <div className="text-xs text-gray-500 mt-1">Across multiple sectors</div> */}
                    </div>

                    <div className=" pt-4">
                      <div className="text-center transform hover:scale-110 transition-transform duration-300">
                        <div className="text-3xl font-bold text-orange-400 mb-1">5</div>
                        <div className="text-gray-400 text-sm">Years Experience</div>
                      </div>
                    </div>

                    <div className=" pt-4">
                      <div className="text-center transform hover:scale-110 transition-transform duration-300">
                        <div className="text-3xl font-bold text-amber-400 mb-1">15+</div>
                        <div className="text-gray-400 text-sm">Technologies</div>
                        {/* <div className="text-xs text-gray-500 mt-1">Full-stack expertise</div> */}
                      </div>
                    </div>

                    <div className="pt-4">
                      <div className="text-center transform hover:scale-110 transition-transform duration-300">
                        <div className="text-3xl font-bold text-orange-400 mb-1">3</div>
                        <div className="text-gray-400 text-sm">Sectors</div>
                        <div className="text-xs text-gray-500 mt-1">Telco, Enterprise, Government</div>
                      </div>
                    </div>
{/* 
                    <div className="border-t border-gray-600 pt-4">
                      <div className="text-center transform hover:scale-110 transition-transform duration-300">
                        <div className="text-3xl font-bold text-amber-400 mb-1">Senior Software Developer</div>
                        <div className="text-gray-400 text-sm">Current Role</div>
                        <div className="text-xs text-gray-500 mt-1">Frontend team lead & mentor</div>
                      </div>
                    </div> */}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Each project tells a unique story of challenges overcome and solutions delivered
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mt-6 animate-pulse"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-600 hover:border-amber-500/50 transition-all duration-500 group hover:scale-105 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-white text-xl mb-2 group-hover:text-amber-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 mb-3">
                        {project.isPrivate ? (
                          <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                            <Lock className="w-3 h-3 mr-1" />
                            Private
                          </Badge>
                        ) : (
                          <Badge variant="secondary" className="bg-green-900/50 text-green-400">
                            <Globe className="w-3 h-3 mr-1" />
                            Public
                          </Badge>
                        )}
                        <Badge variant="outline" className="border-amber-400 text-amber-400">
                          {project.sector}
                        </Badge>
                      </div>
                    </div>
                    {/* {!project.isPrivate && project.link && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    )} */}
                  </div>

                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 bg-gray-700/50">
                      <TabsTrigger
                        value="overview"
                        className="text-xs data-[state=active]:bg-amber-500 data-[state=active]:text-black"
                      >
                        Overview
                      </TabsTrigger>
                      <TabsTrigger
                        value="solution"
                        className="text-xs data-[state=active]:bg-amber-500 data-[state=active]:text-black"
                      >
                        <Target className="w-3 h-3 mr-1" />
                        Solution
                      </TabsTrigger>
                      <TabsTrigger
                        value="challenges"
                        className="text-xs data-[state=active]:bg-amber-500 data-[state=active]:text-black"
                      >
                        <AlertTriangle className="w-3 h-3 mr-1" />
                        Challenges
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-4 mt-4">
                      <div>
                        <h4 className="text-sm font-semibold text-amber-400 mb-2">My Role</h4>
                        <p className="text-gray-300 text-sm">{project.role}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-orange-400 mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-gray-600">
                        <div className="flex items-center gap-2 text-sm">
                          <Zap className="w-4 h-4 text-amber-400" />
                          <span className="text-gray-300">{project.impact}</span>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="solution" className="mt-4">
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-amber-400 flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          How I Solved It
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{project.solution}</p>
                      </div>
                    </TabsContent>

                    <TabsContent value="challenges" className="mt-4">
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-orange-400 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4" />
                          Challenges Overcome
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{project.challenges}</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-800/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto animate-pulse"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-600 hover:border-amber-500/50 transition-all duration-500 group transform hover:scale-105 hover:rotate-1 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <skill.icon className="w-12 h-12 mx-auto text-amber-400 group-hover:text-orange-400 transition-colors duration-1000 animate-pulse" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{skill.name}</h3>
                  <div className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Create Something Amazing</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Ready to turn your ideas into reality? I'm always excited to work on new challenges and collaborate with
            passionate teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            {/*<Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black border-0 font-semibold transform hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </Button> 
            <Button
              size="lg"
              variant="outline"
              className="border-gray-500 text-gray-300 hover:bg-gray-700 bg-transparent transform hover:scale-110 transition-all duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              View GitHub
            </Button> */}

            <a href="mailto:saarugesan@gmail.com">
  <Button
    size="lg"
    className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black border-0 font-semibold transform hover:scale-110 transition-all duration-300"
  >
    <Mail className="w-5 h-5 mr-2" />
    Send Message
  </Button>
</a>
<a
  href="https://www.linkedin.com/in/saarugesan"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="lg"
    variant="outline"
    className="border-gray-500 text-gray-300 hover:bg-gray-700 bg-transparent transform hover:scale-110 transition-all duration-300"
  >
    <Linkedin className="w-5 h-5 mr-2" />
    Connect on LinkedIn
  </Button>
</a>
          </div>

          <div className="text-gray-500">
            <p>saargesan@gmail.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-700 bg-gray-800/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Saarugesan Crafted with passion and lots of coffee ☕</p>
        </div>
      </footer>
    </div>
  )
}
