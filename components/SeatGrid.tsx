import React, { useState } from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
  gap: 10px;
  justify-content: center;
`;

const Seat = styled.div<{ status: string }>`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ status }) => (status === 'unavailable' ? 'not-allowed' : 'pointer')};
  background-color: ${({ status, theme }) => {
    if (status === 'selected') return theme.seatSelected;
    if (status === 'unavailable') return theme.seatUnavailable;
    return theme.seatAvailable;
  }};
  transition: background-color 0.3s ease;
`;

interface SeatGridProps {
  seats: string[][];
  onSeatSelect: (count: number) => void;
}

const SeatGrid: React.FC<SeatGridProps> = ({ seats, onSeatSelect }) => {
  const [seatState, setSeatState] = useState(seats);

  const handleSeatClick = (row: number, col: number) => {
    if (seatState[row][col] === 'available') {
      const updatedSeats = seatState.map((r, rowIndex) =>
        r.map((seat, colIndex) => {
          if (rowIndex === row && colIndex === col) {
            return seat === 'selected' ? 'available' : 'selected';
          }
          return seat;
        })
      );
      setSeatState(updatedSeats);
      const selectedCount = updatedSeats.flat().filter((seat) => seat === 'selected').length;
      onSeatSelect(selectedCount);
    }
  };

  return (
    <Grid>
      {seatState.map((row, rowIndex) =>
        row.map((seat, colIndex) => (
          <Seat
            key={`${rowIndex}-${colIndex}`}
            status={seat}
            onClick={() => handleSeatClick(rowIndex, colIndex)}
          />
        ))
      )}
    </Grid>
  );
};

export default SeatGrid;
