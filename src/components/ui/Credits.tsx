'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/src/configs/config';
import AnimationContainer from '@/src/components/utils/AnimationContainer';

const Credits = () => {
  return (
    <AnimationContainer customClassName="text-center py-4 dark:text-white/50 text-black/50 text-sm">
      <span /> {/* intentionally left blank */}
    </AnimationContainer>
  );
};

export default Credits;
