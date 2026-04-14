'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: string;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div className={`bg-zinc-900/50 border border-zinc-800/50 rounded-2xl ${hover ? 'hover:border-zinc-700 hover:bg-zinc-900/70 transition-all duration-200' : ''} ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`p-5 border-b border-zinc-800/50 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`p-5 ${className}`}>
      {children}
    </div>
  );
}

interface SectionProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  gradient?: string;
}

export function Section({ children, title, description, icon, gradient }: SectionProps) {
  return (
    <div className="relative p-5 rounded-2xl border border-zinc-800/50 bg-zinc-950/30 overflow-hidden">
      {gradient && (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20`} />
      )}
      
      <div className="relative">
        {icon && (
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center text-zinc-400">
              {icon}
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-100">{title}</h3>
              {description && <p className="text-xs text-zinc-500">{description}</p>}
            </div>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

interface PropertyRowProps {
  label: string;
  children: React.ReactNode;
}

export function PropertyRow({ label, children }: PropertyRowProps) {
  return (
    <div className="flex items-center justify-between py-2">
      <label className="text-xs text-zinc-500">{label}</label>
      {children}
    </div>
  );
}

interface PropertySectionProps {
  title: string;
  children: React.ReactNode;
}

export function PropertySection({ title, children }: PropertySectionProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">{title}</h3>
      {children}
    </div>
  );
}

interface ToggleButtonProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}

export function ToggleButton({ options, value, onChange }: ToggleButtonProps) {
  return (
    <div className="flex gap-1">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`flex-1 h-9 rounded-lg text-xs font-medium transition-all ${
            value === option.value
              ? 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/50'
              : 'bg-zinc-800/50 text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-300'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

interface ColorSwatchProps {
  color: string;
  selected?: boolean;
  onClick?: () => void;
}

export function ColorSwatch({ color, selected, onClick }: ColorSwatchProps) {
  const isWhite = color === '#FFFFFF' || color === 'white';
  
  return (
    <button
      onClick={onClick}
      className={`w-6 h-6 rounded-lg transition-all duration-150 ${
        selected
          ? 'ring-2 ring-indigo-500 ring-offset-2 ring-offset-zinc-900 scale-110 shadow-lg'
          : 'hover:scale-110 hover:shadow-md'
      }`}
      style={{ 
        backgroundColor: color,
        boxShadow: selected ? '0 0 0 2px rgb(99 102 241), 0 0 12px rgba(99, 102, 241, 0.4)' : undefined
      }}
    >
      {selected && (
        <svg 
          className={`w-3.5 h-3.5 mx-auto ${isWhite ? 'text-zinc-900' : 'text-white'}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      )}
    </button>
  );
}
