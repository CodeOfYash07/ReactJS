import React from 'react';
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';

type CardProps = {
  title: string;
  description: string;
  icon: string;
  category: string;
  stats: string;
};

export default function Card({ title, description, icon, category, stats }: CardProps) {
  return (
    <div className="group relative max-w-sm w-full bg-gray-900 rounded-3xl shadow-2xl hover:shadow-3xl border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-4 right-4 w-2 h-2 bg-gray-600 rounded-full animate-pulse"></div>
        <div className="absolute bottom-6 left-6 w-3 h-3 bg-gray-700 rounded-full animate-pulse delay-75"></div>
        <div className="absolute top-1/2 right-8 w-2 h-2 bg-gray-600 rounded-full animate-pulse delay-150"></div>
      </div>

      <div className="relative p-8 bg-gray-900/90 backdrop-blur-sm rounded-3xl z-10 border border-gray-800">
        
        {/* Category Badge */}
        <div className="mb-6">
          <span className="inline-block text-xs uppercase tracking-widest font-bold text-gray-400 bg-gray-800/80 px-3 py-1 rounded-full border border-gray-700">
            {category}
          </span>
        </div>
        
        {/* Icon Container */}
        <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-2xl border border-gray-600 group-hover:from-gray-700 group-hover:to-gray-600 transition-all duration-300 group-hover:scale-110">
          {icon}
        </div>

        {/* Title */}
        <h5 className="mb-4 text-2xl font-black tracking-tight text-white group-hover:text-gray-200 transition-colors">
          {title}
        </h5>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed mb-6 text-sm">
          {description}
        </p>
        
        {/* Stats */}
        <div className="mb-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gray-500" />
            <span className="text-xs text-gray-500 font-medium">{stats}</span>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <Shield className="w-4 h-4 text-gray-400" />
            </div>
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <Zap className="w-4 h-4 text-gray-400" />
            </div>
          </div>
          
          <button className="flex items-center gap-2 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2">
            Explore <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {/* Corner Decorations */}
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gray-700 rounded-tr-xl"></div>
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gray-700 rounded-bl-xl"></div>
    </div>
  );
}