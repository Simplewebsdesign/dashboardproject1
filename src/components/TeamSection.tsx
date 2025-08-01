import { MoreHorizontal, MessageCircle, Calendar } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  status: "online" | "offline" | "busy";
  tasksCompleted: number;
  currentProject: string;
}

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      avatar: "SJ",
      status: "online",
      tasksCompleted: 12,
      currentProject: "Mobile App Redesign"
    },
    {
      id: "2",
      name: "Mike Chen",
      role: "Frontend Developer",
      avatar: "MC",
      status: "busy",
      tasksCompleted: 8,
      currentProject: "Web Platform"
    },
    {
      id: "3",
      name: "Emma Davis",
      role: "Product Manager",
      avatar: "ED",
      status: "online",
      tasksCompleted: 15,
      currentProject: "Mobile App Redesign"
    },
    {
      id: "4",
      name: "John Smith",
      role: "Backend Developer",
      avatar: "JS",
      status: "offline",
      tasksCompleted: 6,
      currentProject: "Backend Infrastructure"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-success";
      case "busy":
        return "bg-warning";
      default:
        return "bg-muted-foreground";
    }
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground">Team Members</h2>
        <button className="text-sm text-primary hover:text-primary/80 font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all duration-200 group cursor-pointer"
          >
            {/* Avatar with status */}
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-medium text-sm">
                {member.avatar}
              </div>
              <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 ${getStatusColor(member.status)} rounded-full border-2 border-card`} />
            </div>

            {/* Member Info */}
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
              <p className="text-xs text-muted-foreground mt-1">
                Working on: {member.currentProject}
              </p>
            </div>

            {/* Stats */}
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">{member.tasksCompleted}</p>
              <p className="text-xs text-muted-foreground">tasks done</p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <MessageCircle className="w-4 h-4 text-muted-foreground" />
              </button>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Calendar className="w-4 h-4 text-muted-foreground" />
              </button>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Team Stats */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-lg font-bold text-foreground">4</p>
            <p className="text-xs text-muted-foreground">Active Members</p>
          </div>
          <div>
            <p className="text-lg font-bold text-foreground">41</p>
            <p className="text-xs text-muted-foreground">Tasks Completed</p>
          </div>
          <div>
            <p className="text-lg font-bold text-foreground">92%</p>
            <p className="text-xs text-muted-foreground">Team Efficiency</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;