import Sidebar from "./Sidebar";
import ProjectCard from "./ProjectCard";
import TaskList from "./TaskList";
import StatsCard from "./StatsCard";
import TeamSection from "./TeamSection";
import { CheckSquare, Users, Clock, TrendingUp, Search, Bell, Plus } from "lucide-react";

const Dashboard = () => {
  const projects = [
    {
      title: "Mobile App Redesign",
      description: "Complete redesign of the mobile application with new user interface and improved user experience.",
      progress: 75,
      dueDate: "Dec 15",
      teamMembers: 5,
      status: "on-track" as const,
      tasks: { completed: 18, total: 24 }
    },
    {
      title: "Web Platform",
      description: "Development of new web platform with advanced analytics and reporting features.",
      progress: 45,
      dueDate: "Jan 20",
      teamMembers: 8,
      status: "at-risk" as const,
      tasks: { completed: 12, total: 28 }
    },
    {
      title: "Backend Infrastructure",
      description: "Upgrade and optimization of backend infrastructure for better performance and scalability.",
      progress: 100,
      dueDate: "Nov 30",
      teamMembers: 3,
      status: "completed" as const,
      tasks: { completed: 15, total: 15 }
    }
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-card border-b border-border p-6 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back! Here's what's happening with your projects.</p>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="pl-10 pr-4 py-2 bg-muted border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              
              {/* Notifications */}
              <button className="p-2 hover:bg-muted rounded-lg transition-colors relative">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full"></span>
              </button>
              
              {/* New Project Button */}
              <button className="flex items-center gap-2 px-4 py-2 bg-gradient-primary text-primary-foreground rounded-lg hover:shadow-elegant transition-all duration-200 font-medium">
                <Plus className="w-4 h-4" />
                New Project
              </button>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Active Projects"
              value="12"
              change="+2.5%"
              trend="up"
              icon={<CheckSquare className="w-6 h-6" />}
            />
            <StatsCard
              title="Team Members"
              value="15"
              change="+12%"
              trend="up"
              icon={<Users className="w-6 h-6" />}
            />
            <StatsCard
              title="Tasks Completed"
              value="127"
              change="+8.2%"
              trend="up"
              icon={<Clock className="w-6 h-6" />}
            />
            <StatsCard
              title="Success Rate"
              value="94%"
              change="+3.1%"
              trend="up"
              icon={<TrendingUp className="w-6 h-6" />}
            />
          </div>

          {/* Projects Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">Active Projects</h2>
              <button className="text-sm text-primary hover:text-primary/80 font-medium">
                View All Projects
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TaskList />
            <TeamSection />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;