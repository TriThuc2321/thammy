"use client";

import { RANDOM_BOOKING } from "@/services/mock";
import { getRandomNumber } from "@/utils";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";

function RandomBooking() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentBooking, setCurrentBooking] = useState(
    RANDOM_BOOKING[getRandomNumber(0, RANDOM_BOOKING.length - 1)]
  );

  // Memoize the booking selection function
  const selectRandomBooking = useCallback(() => {
    let randomIndex;
    do {
      randomIndex = getRandomNumber(0, RANDOM_BOOKING.length - 1);
    } while (RANDOM_BOOKING[randomIndex].id === currentBooking.id);
    
    setCurrentBooking(RANDOM_BOOKING[randomIndex]);
  }, [currentBooking.id]);

  // Timer to show notification
  useEffect(() => {
    const timer = setInterval(() => {
      setIsOpen(true);
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  // Timer to hide notification and select new booking
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false);
        selectRandomBooking();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, selectRandomBooking]);

  return isOpen ? (
    <div className="shadow-lg border border-gray-200 fixed bottom-3 right-3 lg:bottom-8 lg:right-8 bg-white p-2 rounded-lg z-40">
      <div className="flex gap-2">
        <Image
          src={currentBooking.avatar}
          alt={currentBooking.name}
          width={80}
          height={80}
          className="rounded-lg object-cover max-w-[80px] max-h-[80px]"
          priority={false}
          loading="lazy"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">
            {currentBooking.name}{" "}
            <span className="text-sm text-gray-500 font-normal">
              Đặt lịch thành công
            </span>
          </h3>
          <p className="text-sm text-gray-500 font-normal">
            {currentBooking.service}
          </p>
          <p className="text-sm text-gray-500 font-normal">
            {currentBooking.time}
          </p>
        </div>
      </div>
    </div>
  ) : null;
}

export default RandomBooking;
