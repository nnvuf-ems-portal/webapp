'use client';

import React, { useState } from 'react';
import moment from 'moment';
import { EmsSelect } from '../ems-select/ems-select';
import { EmsButtonPrimary } from '../ems-buttons/ems-button-primary';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EmsButtonOutlineSecondary } from '../ems-buttons/ems-button-secondary';

export const EmsCalendars = () => {
  const [toDay] = useState(moment());
  const nYears = 50;
  const years = Array.from(Array(nYears), (_, i) => i + toDay.year() - nYears / 2);

  return (
    <div className='w-128 border border-secondary'>
      <div className='flex justify-between items-center bg-primary p-2'>
        <div className='flex items-center justify-start'>
          <EmsSelect
            onSelect={() => {}}
            className='bg-white'
            options={years.map((year) => ({ value: year.toString(), label: year.toString() }))}
          />
          <EmsButtonPrimary onClick={() => {}} className='border border-white px-1 ms-1'>
            <FontAwesomeIcon icon={faCaretLeft} />
          </EmsButtonPrimary>
          <EmsButtonPrimary onClick={() => {}} className='border border-white px-1 ms-1'>
            <FontAwesomeIcon icon={faCaretRight} />
          </EmsButtonPrimary>
          <p className='text-white ms-1'>{toDay.format('MMMM yyyy').toUpperCase()}</p>
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
          <EmsButtonOutlineSecondary onClick={() => {}} className='px-2'>
            Day
          </EmsButtonOutlineSecondary>
        </div>
      </div>
      <table className='w-full'>
        <thead className='text-white' style={{backgroundColor: '#5e6267'}}>
          <tr>
            <th className=''>Sun</th>
            <th className='border-l'>Mon</th>
            <th className='border-l'>Tue</th>
            <th className='border-l'>Wed</th>
            <th className='border-l'>Thu</th>
            <th className='border-l'>Fri</th>
            <th className='border-l'>Sat</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-t'>
            <td className='border-l'></td>
            <td className='border-l'></td>
            <td className='border-l'></td>
            <td className='border-l'>1</td>
            <td className='border-l'>2</td>
            <td className='border-l'>3</td>
            <td className='border-l'>4</td>
          </tr>
          <tr className='border-t'>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
          </tr>
          <tr className='border-t'>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
          </tr>
          <tr className='border-t'>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
          </tr>
          <tr className='border-t'>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td>31</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
