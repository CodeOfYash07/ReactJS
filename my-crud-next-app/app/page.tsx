export default function Home() {
  return (
    <>
      <main className="glass-board w-[840px] p-12 flex flex-col gap-10 relative z-10 scale-[0.85] origin-center sm:scale-100">
        
        {/* Header */}
        <div className="flex justify-between items-center w-full px-2">
          <h1 className="text-[26px] font-bold tracking-tight text-black shadow-text">Liquid Glass Kit</h1>
          <div className="flex items-center gap-3 opacity-60">
            <div className="flex items-center justify-center w-6 h-6 border border-gray-400 rounded-full">
               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div className="w-4 h-0.5 bg-gray-500 rounded-full flex-shrink-0"></div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-x-14 gap-y-6 px-2">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-8">
            
            {/* Buttons */}
            <button className="glossy-pill glass-btn-purple h-14 w-52 flex items-center justify-center font-bold text-white tracking-wide text-[15px]">
              decondary
            </button>
            <button className="glossy-pill glass-btn-teal h-14 w-52 flex items-center justify-center font-bold text-white tracking-wide text-[15px]">
              Secondary
            </button>

            {/* Icons Row */}
            <div className="flex items-center gap-6 mt-1 ml-2">
              <button className="soft-white-element w-12 h-12 rounded-full flex items-center justify-center text-black text-2xl font-light hover:scale-105 transition">
                +
              </button>
              {/* Floating inner clear bubble */}
              <div className="w-10 h-10 ml-8 clear-glass-bubble ring-offset-4"></div>
            </div>

            {/* Create Workspace */}
            <div className="relative w-64 mt-2">
              <div className="soft-white-element w-full h-12 rounded-full flex items-center px-5">
                <input 
                  type="text" 
                  placeholder="Create workspace" 
                  className="bg-transparent border-none outline-none text-sm text-gray-500 font-medium placeholder-gray-400 w-full"
                />
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#777" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </div>
            </div>

            {/* Workspace Checkbox Box */}
            <div className="cutout-groove w-64 h-16 rounded-[1.25rem] flex items-center justify-between px-5 mt-2">
              <span className="text-black font-bold text-[15px]">Workspace</span>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>

            {/* Toast | Tabs Toggle */}
            <div className="soft-white-element w-64 h-14 rounded-full flex items-center p-1 relative mt-1">
              <div className="w-1/2 h-full rounded-full flex flex-col items-center justify-center relative z-10 cursor-pointer shadow-sm bg-[#f2ede6]">
                <span className="text-black font-bold text-[13px] tracking-wide">Toast</span>
                <div className="w-10 h-1 bg-[#4f46e5] rounded-full absolute bottom-[6px]"></div>
              </div>
              <div className="w-1/2 h-full rounded-full flex items-center justify-center cursor-pointer opacity-70">
                <span className="text-black font-semibold text-[13px] tracking-wide">Tabs</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6">

             {/* Thick Search Box Container */}
             <div className="floating-glass-box w-full max-w-[340px] rounded-[1.5rem] p-[10px] pl-3 flex flex-col gap-3">
                <div className="w-10 h-10 bg-white rounded-[12px] flex items-center justify-center shadow-sm ml-2 mt-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#a78bfa" stroke="none"><rect x="3" y="3" width="18" height="18" rx="4" ry="4"/><path d="M7 16V8l6 4-6 4z" fill="white"/></svg>
                </div>
                
                <div className="soft-white-element w-full h-[46px] rounded-full flex items-center justify-between pl-5 pr-[2px] mt-2 mb-1">
                    <span className="text-gray-600 text-sm font-medium">Search projects...</span>
                    <button className="w-10 h-10 rounded-full glass-btn-purple text-xl font-light flex items-center justify-center relative shadow-md">
                        +
                        <div className="absolute inset-0 m-auto w-6 h-6 rounded-full border border-white/50 pointer-events-none"></div>
                    </button>
                </div>
             </div>

             {/* Search Simple Tab */}
             <div className="cutout-groove w-full max-w-[340px] h-12 rounded-full flex items-center justify-between pl-2 pr-2 mt-1">
                <div className="flex items-center gap-3">
                   <div className="w-[30px] h-[30px] bg-[#6366f1] rounded-full flex items-center justify-center shadow-lg border-2 border-[#a78bfa]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                   </div>
                   <span className="text-black text-[14px] font-bold">Search projects...</span>
                </div>
                <div className="w-[34px] h-[34px] rounded-full border-[1.5px] border-white flex items-center justify-center shadow-sm bg-white/20">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </div>
             </div>

             {/* Toggle controls row */}
             <div className="flex items-center gap-4 mt-2">
                {/* Files checkbox */}
                <div className="cutout-groove h-11 rounded-[12px] px-3 flex items-center gap-2">
                   <div className="w-5 h-5 rounded-[4px] bg-[#ddd6fe] border border-[#a78bfa] flex items-center justify-center shadow-inner">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                   </div>
                   <span className="text-black font-semibold text-[14px] mr-1">files</span>
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                </div>

                {/* Hollow toggle switch */}
                <div className="cutout-groove-deep w-[85px] h-11 rounded-full p-[3px] flex items-center ml-2 relative">
                   <div className="w-[36px] h-[36px] soft-white-element rounded-full flex items-center justify-center shadow-md absolute right-[3px] text-gray-500 font-light text-xl cursor-default">
                      +
                   </div>
                   {/* Inner colored line mimicking track */}
                   <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-[#a78bfa] to-[#5eead4] pointer-events-none opacity-40"></div>
                </div>
             </div>

             {/* Multi-color Card */}
             <div className="multicolor-card w-full max-w-[340px] h-[190px] p-6 flex flex-col justify-between mt-3">
                <div className="flex justify-end w-full">
                    <div className="w-10 h-6 border-[1.5px] border-white/60 rounded-full float-right"></div>
                </div>
                <div className="flex flex-col">
                   <h3 className="text-black font-bold text-[18px]">Invite member</h3>
                   <span className="text-[#333] opacity-80 text-[13px] tracking-wide mb-4 mt-1">Upgrade plan</span>
                   
                   <button className="soft-white-element w-[145px] h-[38px] rounded-full flex items-center justify-center gap-1.5 shadow-lg group">
                      <span className="text-xl font-light leading-none mb-0.5 text-black">+</span>
                      <span className="text-[13px] font-semibold text-black tracking-wide">Upgrade plan</span>
                   </button>
                </div>
             </div>

          </div>
        </div>
      </main>
    </>
  );
}
