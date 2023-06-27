import { Badge } from "@/components/ui/badge";
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider,
} from "@/components/ui/tooltip";
import { Balancer } from "react-wrap-balancer";
import { twMerge } from "tailwind-merge";

const gradients = [
    "bg-gradient-to-br from-purple-400 via-pink-500 to-red-500",
    "bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-500",
    "bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500",
    "bg-gradient-to-br from-green-400 via-lime-500 to-yellow-500",
    "bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500",
    "bg-gradient-to-br from-pink-400 via-red-500 to-orange-500",
    "bg-gradient-to-br from-teal-400 via-blue-500 to-purple-500",
    "bg-gradient-to-br from-red-400 via-yellow-500 to-green-500",
    "bg-gradient-to-br from-orange-400 via-red-500 to-pink-500",
    "bg-gradient-to-br from-cyan-400 via-teal-500 to-green-500",
];

const getRandomGradient = () => {
    return gradients[Math.floor(Math.random() * gradients.length)];
};

interface BadgesProps {
    list:
        | {
              कार्य: React.JSX.Element;
              माना: React.JSX.Element;
              अगर: React.JSX.Element;
              वरना: React.JSX.Element;
              लाभ: React.JSX.Element;
              जबतक: React.JSX.Element;
              सत्य: React.JSX.Element;
              असत्य: React.JSX.Element;
          }
        | {
              lambai: React.JSX.Element;
              print: React.JSX.Element;
              pehla: React.JSX.Element;
              aakhri: React.JSX.Element;
              baaki: React.JSX.Element;
              push: React.JSX.Element;
              pop: React.JSX.Element;
          };
    badgeClass?: string;
}

const Badges: React.FC<BadgesProps> = ({ list, badgeClass }) => {
    return (
        <div className="flex flex-wrap gap-1">
            {Object.entries(list).map(([key, value]) => (
                <div className="w-fit" key={key}>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Badge
                                    className={twMerge(
                                        "text-base",
                                        // getRandomGradient(),
                                        badgeClass
                                    )}
                                >
                                    {key}
                                </Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                                <Balancer
                                    className="max-w-xs text-center"
                                    ratio={0.7}
                                >
                                    {value}
                                </Balancer>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            ))}
        </div>
    );
};

export default Badges;
