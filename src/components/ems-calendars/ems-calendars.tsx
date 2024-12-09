'use client';

import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { EmsSelect } from '../ems-select/ems-select';
import { EmsButtonPrimary } from '../ems-buttons/ems-button-primary';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EmsButtonOutlineSecondary } from '../ems-buttons/ems-button-secondary';
import { Button } from '@headlessui/react';

export const EmsCalendars = () => {
  const [toDay] = useState(moment());
  const [years, setYears] = useState<number[]>([]);
  const [selectedYear, setSelectedYear] = useState<number>(toDay.year());
  const [selectedMonth, setSelectedMonth] = useState<number>(toDay.month());
  const [selectedDay, setSelectedDay] = useState<moment.Moment>(toDay);
  const [dateRange, setDateRange] = useState<moment.Moment[]>([]);
  const [numberOfWeeks, setNumberOfWeeks] = useState<number>(0);

  const [calendarMonthData, setCalendarMonthData] = useState<(moment.Moment | null)[][]>([]);

  const nYears = 100;
  const months = moment.months();

  useEffect(() => {
    const currentYear = toDay.year();
    const years = Array.from({ length: nYears }, (_, i) => currentYear - nYears / 2 + i);
    setYears(years);
  }, [toDay]);

  useEffect(() => {
    // get date range for selected year and month
    const start = moment([selectedYear, selectedMonth, 1]);
    const end = moment(start).endOf('month');
    const range = Array.from({ length: end.date() }, (_, i) => moment(start).clone().add(i, 'days'));
    setDateRange(range);

    // get number of weeks in the month
    const totalWeeks = Math.ceil((start.day() + end.date()) / 7);
    setNumberOfWeeks(totalWeeks);
  }, [selectedYear, selectedMonth]);

  useEffect(() => {
    if (dateRange.length === 0) {
      return;
    }

    const cloneRange = [...dateRange];

    const firstDay = cloneRange[0].weekday();
    // shift the calendar data to start from the first day of the month
    for (let i = 0; i < firstDay; i++) {
      cloneRange.unshift(cloneRange[0].clone().subtract(1, 'days'));
    }
    const lastDay = cloneRange[cloneRange.length - 1].weekday();
    // shift the calendar data to end at the last day of the month
    for (let i = lastDay + 1; i < 7; i++) {
      cloneRange.push(cloneRange[cloneRange.length - 1].clone().add(1, 'days'));
    }

    const calendarData = cloneRange.reduce((acc, curr, i) => {
      if (i % 7 === 0) {
        acc.push([curr]);
      } else {
        acc[acc.length - 1].push(curr);
      }
      return acc;
    }, [] as (moment.Moment | null)[][]);

    setCalendarMonthData(calendarData);
  }, [dateRange, numberOfWeeks]);

  const handleYearChange = (year: string) => {
    setSelectedYear(parseInt(year));
  };

  const onPrevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedYear(selectedYear - 1);
      setSelectedMonth(11);
      return;
    }
    setSelectedMonth(selectedMonth - 1);
  };

  const onNextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedYear(selectedYear + 1);
      setSelectedMonth(0);
      return;
    }
    setSelectedMonth(selectedMonth + 1);
  };

  const onTodayClick = () => {
    setSelectedYear(toDay.year());
    setSelectedMonth(toDay.month());
    setSelectedDay(toDay);
  };

  const dayIsToday = (day: moment.Moment) => {
    return toDay.isSame(day, 'day');
  };

  const dayIsWithinRange = (day: moment.Moment) => {
    if (!day) {
      return false;
    }

    // log the first and last day of the month
    return day.isBetween(dateRange[0], dateRange[dateRange.length - 1]);
  };

  const dayIsSelected = (day: moment.Moment) => {
    return selectedDay.isSame(day, 'day');
  }

  return (
    <div className='w-128 border border-secondary'>
      <div className='flex justify-between items-center bg-primary p-1'>
        <div className='flex items-center justify-start'>
          <EmsSelect
            value={selectedYear.toString()}
            onSelect={handleYearChange}
            className='bg-white'
            options={years.map((year) => ({ value: year.toString(), label: year.toString() }))}
          />
          <EmsButtonPrimary onClick={onPrevMonth} className='border border-white px-1 ms-1'>
            <FontAwesomeIcon icon={faCaretLeft} />
          </EmsButtonPrimary>
          <EmsButtonPrimary onClick={onNextMonth} className='border border-white px-1 ms-1'>
            <FontAwesomeIcon icon={faCaretRight} />
          </EmsButtonPrimary>
          <p className='text-white ms-1'>{`${months[selectedMonth]} ${selectedYear}`.toUpperCase()}</p>
        </div>
        <div className='flex items-center justify-end'>
          <EmsButtonOutlineSecondary onClick={() => {}} className='px-2'>
            Listings
          </EmsButtonOutlineSecondary>
          <EmsButtonOutlineSecondary onClick={() => {}} className='px-2'>
            Month
          </EmsButtonOutlineSecondary>
          <EmsButtonOutlineSecondary onClick={() => {}} className='px-2'>
            Week
          </EmsButtonOutlineSecondary>
          <EmsButtonOutlineSecondary onClick={onTodayClick} className='px-2'>
            Day
          </EmsButtonOutlineSecondary>
        </div>
      </div>
      <table className='w-full'>
        <thead className='text-white' style={{ backgroundColor: '#5e6267' }}>
          <tr>
            <th className='w-1/7 '>Sun</th>
            <th className='w-1/7 border-l'>Mon</th>
            <th className='w-1/7 border-l'>Tue</th>
            <th className='w-1/7 border-l'>Wed</th>
            <th className='w-1/7 border-l'>Thu</th>
            <th className='w-1/7 border-l'>Fri</th>
            <th className='w-1/7 border-l'>Sat</th>
          </tr>
        </thead>
        <tbody>
          {calendarMonthData.map((week, i) => (
            <tr key={i} className=''>
              {week.map((day, j) => (
                <Button
                  type='button'
                  as='td'
                  key={j}
                  className={clsx(
                    'w-1/7 h-14 relative border border-secondary',
                    dayIsToday(day!) ? 'bg-primary-300 text-white' : 'hover:bg-primary-700 hover:text-white',
                    !dayIsWithinRange(day!) && 'text-secondary/50',
                    dayIsWithinRange(day!) && 'font-bold',
                    dayIsSelected(day!) && 'bg-primary-700 text-white',
                    'transition-colors duration-300'
                  )}
                  onClick={() => setSelectedDay(day!)}>
                  <div className='absolute top-1.5 right-1.5'>{day?.date()}</div>
                </Button>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
