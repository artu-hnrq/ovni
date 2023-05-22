'use client'

import * as icons from 'lucide-react';
import React from 'react';

export interface IconProps {
    className?: string,
    icon: keyof typeof icons,
    size?: number,
}


export default function Icon({ icon, ...props }: IconProps) {
    if (icons[icon]) {
        return <icons[icon] {...props } />
    }
    else {
        return <></>
    }
}

