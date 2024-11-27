import React from 'react';
import styled from 'styled-components';

type SeatProps = {
  status: "available" | "unavailable" | "selected";
  onClick: () => void;
};

const SeatButton = styled.button<{ status: string }>`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin: 5px;
  background-color: ${({ status }) =>
    status === "selected"
      ? "red"
      : status === "available"
      ? "white"
      : "gray"};
  cursor: ${({ status }) => (status === "available" ? "pointer" : "not-allowed")};
`;

const Seat: React.FC<SeatProps> = ({ status, onClick }) => (
  <SeatButton status={status} onClick={onClick} disabled={status === "unavailable"} />
);

export default Seat;
