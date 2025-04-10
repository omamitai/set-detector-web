
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CardFeature {
  Count: number;
  Color: string;
  Fill: string;
  Shape: string;
  Coordinates: number[];
}

interface SetCardProps {
  set: {
    cards: CardFeature[];
    set_indices: number[];
  };
  index: number;
}

const SetCard: React.FC<SetCardProps> = ({ set, index }) => {
  // Colors for badges and card borders (simplified and less shiny)
  const setColors = [
    { badge: "bg-[#F8F2FF] text-set-purple border-0", border: "border-set-purple/20" },
    { badge: "bg-[#F0FCFA] text-set-green border-0", border: "border-set-green/20" },
    { badge: "bg-[#FFF2F5] text-set-red border-0", border: "border-set-red/20" },
    { badge: "bg-[#EFF8FF] text-blue-500 border-0", border: "border-blue-500/20" },
    { badge: "bg-[#FFFBEB] text-yellow-500 border-0", border: "border-yellow-500/20" },
  ];
  
  // Get badge color based on set index
  const colorSet = setColors[index % setColors.length];

  return (
    <Card className={`overflow-hidden shadow-sm transition-all hover:shadow border ${colorSet.border}`}>
      <CardContent className="p-3">
        <div className="flex items-center justify-between mb-2">
          <Badge className={`${colorSet.badge} rounded-full px-3 py-0.5 shadow-sm`}>
            Set {index + 1}
          </Badge>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mt-2">
          {set.cards.map((card, cardIndex) => (
            <div
              key={cardIndex}
              className="border rounded-lg p-1.5 bg-background/50 hover:bg-white transition-all"
            >
              <div className="grid grid-cols-2 gap-1">
                <Badge variant="outline" className="text-xs h-5 flex items-center justify-center bg-gray-50/80 whitespace-nowrap">
                  {card.Count}
                </Badge>
                <Badge variant="outline" className="text-xs h-5 flex items-center justify-center bg-gray-50/80 whitespace-nowrap">
                  {card.Shape}
                </Badge>
                <Badge variant="outline" className="text-xs h-5 flex items-center justify-center bg-gray-50/80 whitespace-nowrap">
                  {card.Color}
                </Badge>
                <Badge variant="outline" className="text-xs h-5 flex items-center justify-center bg-gray-50/80 whitespace-nowrap">
                  {card.Fill}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SetCard;
