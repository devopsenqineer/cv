'use client';

import Image from 'next/image';
import AnimationContainer from '@/src/components/utils/AnimationContainer';
import SectionHeader from '@/src/components/ui/SectionHeader';
import React from 'react';

const MySkills = () => {
  return (
    <AnimationContainer customClassName="w-full mt-16">
      <div className="flex flex-col gap-5">
        <SectionHeader
          title="Skills"
          content="Im a DevOps Engineer with a strong focus on cloud infrastructure, automation, and containerization."
        />
        <div className="w-full flex flex-col gap-8">
          <div className="w-full flex justify-center items-center">
      
          </div>
        </div>
      </div>
    </AnimationContainer>
  );
};

export default MySkills;
