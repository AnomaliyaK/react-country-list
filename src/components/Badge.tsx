import React from 'react';
import { BadgeLabel } from '../types';
import { Color } from '../ui/colors';

interface BadgeProps {
  color: Color;
  label: BadgeLabel;
  value: number;
}

export const Badge = ({ color, label, value }: BadgeProps) => {
  return (
    <span className={`badge bg-${color} p-3 `}>
      {label}:{value}
    </span>
  );
};
