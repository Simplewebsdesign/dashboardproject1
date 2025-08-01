import { TrendingUp, TrendingDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ReactNode;
}

const StatsCard = ({ title, value, change, trend, icon }: StatsCardProps) => {
  return (
    <div className="bg-card rounded-xl border border-border p-6 hover:shadow-card transition-all duration-300 group">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-muted-foreground text-sm font-medium mb-2">{title}</p>
          <p className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {value}
          </p>
          <div className="flex items-center gap-1">
            {trend === "up" ? (
              <TrendingUp className="w-4 h-4 text-success" />
            ) : (
              <TrendingDown className="w-4 h-4 text-destructive" />
            )}
            <span className={`text-sm font-medium ${trend === "up" ? "text-success" : "text-destructive"}`}>
              {change}
            </span>
            <span className="text-sm text-muted-foreground">vs last month</span>
          </div>
        </div>
        <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground group-hover:scale-110 transition-transform">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;