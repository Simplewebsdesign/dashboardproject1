import { CheckCircle2, Circle, Clock, Flag, User } from "lucide-react";

interface Task {
  id: string;
  title: string;
  project: string;
  priority: "low" | "medium" | "high";
  completed: boolean;
  dueDate: string;
  assignee: string;
}

const TaskList = () => {
  const tasks: Task[] = [
    {
      id: "1",
      title: "Design user authentication flow",
      project: "Mobile App Redesign",
      priority: "high",
      completed: false,
      dueDate: "Today",
      assignee: "Sarah"
    },
    {
      id: "2",
      title: "Implement API integration",
      project: "Web Platform",
      priority: "medium",
      completed: true,
      dueDate: "Yesterday",
      assignee: "Mike"
    },
    {
      id: "3",
      title: "User testing sessions",
      project: "Mobile App Redesign",
      priority: "medium",
      completed: false,
      dueDate: "Tomorrow",
      assignee: "Emma"
    },
    {
      id: "4",
      title: "Database optimization",
      project: "Backend Infrastructure",
      priority: "low",
      completed: false,
      dueDate: "Next week",
      assignee: "John"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-destructive";
      case "medium":
        return "text-warning";
      default:
        return "text-muted-foreground";
    }
  };

  const getDueDateColor = (dueDate: string) => {
    if (dueDate === "Today" || dueDate === "Yesterday") {
      return "text-destructive";
    }
    return "text-muted-foreground";
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground">Recent Tasks</h2>
        <button className="text-sm text-primary hover:text-primary/80 font-medium">
          View All
        </button>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`
              flex items-center gap-4 p-4 rounded-lg border transition-all duration-200 hover:shadow-card
              ${task.completed 
                ? 'bg-muted/50 border-border opacity-75' 
                : 'bg-card border-border hover:border-primary/20'
              }
            `}
          >
            {/* Checkbox */}
            <button className="flex-shrink-0">
              {task.completed ? (
                <CheckCircle2 className="w-5 h-5 text-success" />
              ) : (
                <Circle className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              )}
            </button>

            {/* Task Info */}
            <div className="flex-1 min-w-0">
              <h3 className={`font-medium text-sm ${task.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                {task.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {task.project}
              </p>
            </div>

            {/* Priority */}
            <Flag className={`w-4 h-4 ${getPriorityColor(task.priority)}`} />

            {/* Due Date */}
            <div className={`flex items-center gap-1 text-xs ${getDueDateColor(task.dueDate)}`}>
              <Clock className="w-3 h-3" />
              <span>{task.dueDate}</span>
            </div>

            {/* Assignee */}
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <User className="w-3 h-3" />
              <span>{task.assignee}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Add Task Button */}
      <button className="w-full mt-4 p-3 border-2 border-dashed border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200 text-sm font-medium">
        + Add New Task
      </button>
    </div>
  );
};

export default TaskList;