import { Calendar, BarChart3, Users, Settings, Plus, Home, CheckSquare, Clock } from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: CheckSquare, label: "Projects", count: 12 },
    { icon: Clock, label: "Tasks", count: 8 },
    { icon: Users, label: "Team", count: 15 },
    { icon: Calendar, label: "Calendar" },
    { icon: BarChart3, label: "Analytics" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div className="w-64 h-screen bg-card border-r border-border flex flex-col">
      {/* Logo/Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <CheckSquare className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-foreground">ProjectHub</h1>
            <p className="text-xs text-muted-foreground">Team Workspace</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium
                  transition-all duration-200 group
                  ${item.active 
                    ? 'bg-gradient-primary text-primary-foreground shadow-elegant' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }
                `}
              >
                <item.icon className={`w-5 h-5 ${item.active ? '' : 'group-hover:scale-110 transition-transform'}`} />
                <span className="flex-1">{item.label}</span>
                {item.count && (
                  <span className={`
                    text-xs px-2 py-0.5 rounded-full font-medium
                    ${item.active 
                      ? 'bg-primary-foreground/20 text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                    }
                  `}>
                    {item.count}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Quick Actions */}
        <div className="mt-8 pt-6 border-t border-border">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200 group">
            <Plus className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>New Project</span>
          </button>
        </div>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer">
          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-medium text-sm">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">John Doe</p>
            <p className="text-xs text-muted-foreground truncate">john@company.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;