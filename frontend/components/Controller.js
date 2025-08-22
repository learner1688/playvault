// Responsive Game Controller (Desktop/Mobile)
import React from 'react';

export default function Controller({ platform }) {
  // Touch-first layout: large, transparent, thumb-accessible buttons
  return (
    <div className="fixed bottom-0 left-0 w-full flex flex-col items-center p-4 z-50">
      <div className="flex justify-center gap-6 mb-2">
        <button className="bg-white bg-opacity-40 rounded-full w-16 h-16 text-xl font-bold shadow-lg active:scale-95 transition">A</button>
        <button className="bg-white bg-opacity-40 rounded-full w-16 h-16 text-xl font-bold shadow-lg active:scale-95 transition">B</button>
        <button className="bg-white bg-opacity-40 rounded-full w-16 h-16 text-xl font-bold shadow-lg active:scale-95 transition">X</button>
        <button className="bg-white bg-opacity-40 rounded-full w-16 h-16 text-xl font-bold shadow-lg active:scale-95 transition">Y</button>
      </div>
      <div className="flex justify-between w-full px-8 mb-2">
        <button className="bg-white bg-opacity-30 rounded-full w-12 h-12 text-xs">L</button>
        <button className="bg-white bg-opacity-30 rounded-full w-12 h-12 text-xs">R</button>
      </div>
      <div className="flex justify-center gap-8 w-full">
        <div className="flex flex-col items-center">
          <div className="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
            <span className="text-gray-700 text-xs">Joystick</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <button className="bg-white bg-opacity-30 rounded px-4 py-2 text-xs">Start</button>
          <button className="bg-white bg-opacity-30 rounded px-4 py-2 text-xs">Select</button>
        </div>
      </div>
    </div>
  );
}
