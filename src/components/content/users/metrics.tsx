import { UserMetrics, usersMetrics } from "@/app/app/users/variables";
import { Icon } from "@/components/icons";
import { cn, formatNumber } from "@/lib/utils";

export default function Metrics() {
  return (
    <div className='users-metrics-container'>
      {usersMetrics.map((item, idx) => (
        <Metric key={item.title} item={item} iconWrapperClassName={`icon-${idx}`} />
      ))}
    </div>
  );
}

interface MetricProps {
  item: UserMetrics;
  iconWrapperClassName: string;
}
const Metric = ({ item, iconWrapperClassName }: MetricProps) => {
  return (
    <div className='users-metric card'>
      <div className={cn("users-metric-icon-wrapper", iconWrapperClassName)}>
        <Icon name={item.icon} width={22} height={22} />
      </div>
      <h1>{item.title}</h1>
      <p>{formatNumber(item.value, false)}</p>
    </div>
  );
};
