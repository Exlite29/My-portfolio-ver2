import React from 'react';

const ContributionGraph: React.FC = () => {
  // Generate a fake contribution grid
  const weeks = 52;
  const days = 7;
  
  // Deterministic random for visual consistency
  const getIntensity = (i: number, j: number) => {
    const seed = (i * 7 + j) * 12345;
    const rand = Math.sin(seed) * 10000;
    const val = rand - Math.floor(rand); // 0.0 - 1.0
    
    if (val > 0.9) return 'bg-[#216e39]'; // High
    if (val > 0.7) return 'bg-[#30a14e]'; // Medium
    if (val > 0.5) return 'bg-[#40c463]'; // Low
    if (val > 0.3) return 'bg-[#9be9a8]'; // Very Low
    return 'bg-[#161b22]'; // None
  };

  return (
    <div className="border border-gh-border rounded-md p-4 mb-6 bg-gh-bg">
      <h3 className="text-sm font-semibold mb-2">324 contributions in the last year</h3>
      <div className="flex gap-1 overflow-hidden">
        {Array.from({ length: weeks }).map((_, weekIdx) => (
          <div key={weekIdx} className="flex flex-col gap-1">
            {Array.from({ length: days }).map((_, dayIdx) => (
              <div
                key={dayIdx}
                className={`w-[10px] h-[10px] rounded-sm ${getIntensity(weekIdx, dayIdx)}`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-2 text-xs text-gh-muted">
        <span>Learn how we count contributions</span>
        <div className="flex items-center gap-1">
          <span>Less</span>
          <div className="w-[10px] h-[10px] bg-[#161b22] rounded-sm"></div>
          <div className="w-[10px] h-[10px] bg-[#9be9a8] rounded-sm"></div>
          <div className="w-[10px] h-[10px] bg-[#40c463] rounded-sm"></div>
          <div className="w-[10px] h-[10px] bg-[#30a14e] rounded-sm"></div>
          <div className="w-[10px] h-[10px] bg-[#216e39] rounded-sm"></div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

export default ContributionGraph;