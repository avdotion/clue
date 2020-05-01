import React from 'react';
import styled, {use} from 'reshadow';

const DEFAULT_CELL_SIZE = 1;

type GridProps = {
  /** Cells */
  children: React.ReactElement<CellProps> | React.ReactElement<CellProps>[],
  /** Gap between cells and rows */
  gap?: string,
  /** Number of cells in a single row */
  size?: number,
  /** Wrap to next line */
  wrap?: boolean,
  /** Customization */
  styles?: any,
};

const getCellSize = (cell: React.ReactElement<CellProps>) =>
  cell.props.size || DEFAULT_CELL_SIZE;

const getCellContent = (cell: React.ReactElement<CellProps>) =>
  cell.props.children;

const getSumOfCellsSizes = (cells: React.ReactElement<CellProps>[]) =>
  cells
    .map(getCellSize)
    .reduce((acc, cur) => acc + cur, 0);

const Grid = ({
  children,
  gap = '0',
  size,
  wrap = false,
  styles = {},
}: GridProps) => {
  const childrenArray = React.Children.toArray(children)
    .filter(React.isValidElement);
  const cells: React.ReactElement<CellProps>[] = (childrenArray as any);

  const gridSize = size === undefined
    ? getSumOfCellsSizes(cells)
    : size;

  type Reduce = {
    cells: React.ReactElement<LocatedCellProps>[],
    skipNext: boolean,
    cellPointer: number,
    rowPointer: number,
  };

  const {cells: reducedCells} = cells
    .reduce<Reduce>((acc, cell, index) => {
      if (acc.skipNext) {
        return acc;
      }
      const cellSize = getCellSize(cell);
      const cellContent = getCellContent(cell);

      // Skip cells which does not fit in a grid
      if (cellSize > gridSize) {
        acc.skipNext = true;
        return acc;
      }

      // Wrap if enabled, skip if disabled
      if (acc.cellPointer + cellSize > gridSize + 1) {
        if (!wrap) {
          // Stop skipping wide cells in favour of narrow ones
          acc.skipNext = true;
          return acc;
        }
        acc.rowPointer += 1;
        acc.cellPointer = 1;
      }

      const locatedCell = (
        <LocatedCell
          cellProp={[acc.cellPointer, acc.cellPointer + cellSize]}
          rowProp={[acc.rowPointer, acc.rowPointer + 1]}
          key={index}
        >
          {cellContent}
        </LocatedCell>
      );

      acc.cells.push(locatedCell);
      acc.cellPointer += cellSize;

      return acc;
    }, {
      cells: [],
      skipNext: false,
      // In display: grid terms everything starts from 1
      cellPointer: 1,
      rowPointer: 1,
    });

  return styled(styles)`
    |grid {
      width: 100%;
      display: grid;
      grid-gap: ${gap};
      grid-template-columns: repeat(${gridSize}, 1fr);
    }
  `(
    <use.grid as="grid">
      {reducedCells}
    </use.grid>
  );
};

type CellProps = {
  /** Inner content */
  children: React.ReactNode,
  /** Number of horizontal cells in grid */
  size?: number,
};

export const Cell = ({
  children,
  size = DEFAULT_CELL_SIZE,
}: CellProps) => (<div />);

type LocatedCellProps = {
  /** Inner content */
  children: React.ReactNode,
  /** Cell indexes */
  cellProp: [number, number],
  /** Row indexes */
  rowProp: [number, number],
};

const LocatedCell = ({
  children,
  cellProp,
  rowProp,
}: LocatedCellProps) => {
  const [cellStart, cellEnd] = cellProp;
  const [rowStart, rowEnd] = rowProp;

  return styled`
    |cell {
      grid-cell-start: ${cellStart};
      grid-cell-end: ${cellEnd};
      grid-row-start: ${rowStart};
      grid-row-end: ${rowEnd};
    }
  `(
    <use.cell as="cell">
      {children}
    </use.cell>
  );
};

export default Grid;
