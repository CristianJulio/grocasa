import styled from "styled-components";

interface AmountWrapperProps {
  color?: string
}

export const AmountWrapper = styled.span<AmountWrapperProps>`
  align-self: center;
  color: ${({ color }) => color ? color : "var(--clr-text)"};
  font-size: var(--fs-big);
  font-weight: var(--fw-semibold);
`