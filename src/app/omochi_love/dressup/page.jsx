'use strict';

import React from "react";
import dynamic from "next/dynamic";

const DressUpCanvas = dynamic(() => import('../../../components/DressUpCanvas'), {
  ssr: false,
});

export default function DressUpPage() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">おもちのきせかえ部屋</h1>
      <DressUpCanvas />
    </div>
  );
}