'use client';

import React from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  iconGradient?: string;
  actions?: React.ReactNode;
  badge?: React.ReactNode;
}

export default function Header({ title, subtitle, icon, iconGradient = 'from-indigo-500 to-purple-600', actions, badge }: HeaderProps) {
  return (
    <header className="h-14 border-b border-zinc-800/60 flex items-center justify-between px-6 bg-zinc-950/80 backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="h-6 w-px bg-zinc-800" />

        <div className="flex items-center gap-3">
          {icon && (
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${iconGradient} flex items-center justify-center`}>
              {icon}
            </div>
          )}
          <div>
            <h1 className="text-sm font-semibold text-zinc-100">{title}</h1>
            {subtitle && <p className="text-[11px] text-zinc-500">{subtitle}</p>}
          </div>
        </div>

        {badge}
      </div>

      {actions && (
        <div className="flex items-center gap-2">
          {actions}
        </div>
      )}
    </header>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gradient' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ variant = 'secondary', size = 'md', className = '', children, ...props }: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-xl';
  
  const variants = {
    primary: 'bg-white text-zinc-900 hover:bg-zinc-100',
    secondary: 'border border-zinc-700 text-zinc-300 hover:border-zinc-600 hover:bg-zinc-800/50',
    gradient: 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:from-indigo-500 hover:to-violet-500 shadow-lg shadow-indigo-500/25',
    ghost: 'text-zinc-400 hover:text-white hover:bg-zinc-800/50',
  };
  
  const sizes = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-9 px-4 text-sm',
    lg: 'h-11 px-6 text-sm',
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function Badge({ children, variant = 'default' }: { children: React.ReactNode; variant?: 'default' | 'success' | 'warning' }) {
  const variants = {
    default: 'bg-zinc-800/60 text-zinc-400 border-zinc-700/50',
    success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  };

  return (
    <span className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border ${variants[variant]}`}>
      {children}
    </span>
  );
}
