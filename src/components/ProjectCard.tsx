import { Calendar, Users, MoreHorizontal, TrendingUp, Clock } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  progress: number;
  dueDate: string;
  teamMembers: number;
  status: "on-track" | "at-risk" | "completed";
  tasks: {
    completed: number;
    total: number;
  };
}

const ProjectCard = ({ title, description, progress, dueDate, teamMembers, status, tasks }: ProjectCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-success bg-success/10";
      case "at-risk":
        return "text-warning bg-warning/10";
      default:
        return "text-primary bg-primary/10";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "at-risk":
        return "At Risk";
      default:
        return "On Track";
    }
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6 hover:shadow-hover transition-all duration-300 group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
        <button className="p-2 hover:bg-muted rounded-lg transition-colors opacity-0 group-hover:opacity-100">
          <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      {/* Progress */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">Progress</span>
          <span className="text-sm text-muted-foreground">{progress}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <div className="text-lg font-bold text-foreground">{tasks.completed}</div>
          <div className="text-xs text-muted-foreground">Tasks Done</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-foreground">{tasks.total}</div>
          <div className="text-xs text-muted-foreground">Total Tasks</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-foreground">{teamMembers}</div>
          <div className="text-xs text-muted-foreground">Team Size</div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{dueDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{teamMembers}</span>
          </div>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
          {getStatusText(status)}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;