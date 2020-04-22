import React from 'react';
import styled, {use} from 'reshadow';

const DEFAULT_COLUMN_SIZE = 1;

type GridProps = {
  /** Columns */
  children: React.ReactElement<ColumnProps> | React.ReactElement<ColumnProps>[],
  /** Gap between columns and rows */
  gap?: string,
  /** Number of columns in a single row */
  size?: number,
  /** Wrap to next line */
  wrap?: boolean,
};

const getColumnSize = (column: React.ReactElement<ColumnProps>) =>
  column.props.size || DEFAULT_COLUMN_SIZE;

const getColumnContent = (column: React.ReactElement<ColumnProps>) =>
  column.props.children;

const getSumOfColumnsSizes = (columns: React.ReactElement<ColumnProps>[]) =>
  columns
    .map(getColumnSize)
    .reduce((acc, cur) => acc + cur, 0);

const Grid = ({
  children,
  gap = '0',
  size,
  wrap = false,
}: GridProps) => {
  const childrenArray = React.Children.toArray(children)
    .filter(React.isValidElement);
  const columns: React.ReactElement<ColumnProps>[] = (childrenArray as any);

  const gridSize = size === undefined
    ? getSumOfColumnsSizes(columns)
    : size;

  type Reduce = {
    columns: React.ReactElement<LocatedColumnProps>[],
    skipNext: boolean,
    columnPointer: number,
    rowPointer: number,
  };

  const {columns: reducedColumns} = columns
    .reduce<Reduce>((acc, column, index) => {
      if (acc.skipNext) {
        return acc;
      }
      const columnSize = getColumnSize(column);
      const columnContent = getColumnContent(column);

      // Skip columns which does not fit in a grid
      if (columnSize > gridSize) {
        acc.skipNext = true;
        return acc;
      }

      // Wrap if enabled, skip if disabled
      if (acc.columnPointer + columnSize > gridSize + 1) {
        if (!wrap) {
          // Stop skipping wide columns in favour of narrow ones
          acc.skipNext = true;
          return acc;
        }
        acc.rowPointer += 1;
        acc.columnPointer = 1;
      }

      const locatedColumn = (
        <LocatedColumn
          columnProp={[acc.columnPointer, acc.columnPointer + columnSize]}
          rowProp={[acc.rowPointer, acc.rowPointer + 1]}
          key={index}
        >
          {columnContent}
        </LocatedColumn>
      );

      acc.columns.push(locatedColumn);
      acc.columnPointer += columnSize;

      return acc;
    }, {
      columns: [],
      skipNext: false,
      // In display: grid terms everything starts from 1
      columnPointer: 1,
      rowPointer: 1,
    });

  return styled`
    |grid {
      width: 100%;
      display: grid;
      grid-gap: ${gap};
      grid-template-columns: repeat(${gridSize}, 1fr);
    }
  `(
    <use.grid>
      {reducedColumns}
    </use.grid>
  );
};

type ColumnProps = {
  /** Inner content */
  children: React.ReactNode,
  /** Number of horizontal cells in grid */
  size?: number,
};

export const Column = ({
  children,
  size = DEFAULT_COLUMN_SIZE,
}: ColumnProps) => (<div />);

type LocatedColumnProps = {
  /** Inner content */
  children: React.ReactNode,
  /** Column indexes */
  columnProp: [number, number],
  /** Row indexes */
  rowProp: [number, number],
};

const LocatedColumn = ({
  children,
  columnProp,
  rowProp,
}: LocatedColumnProps) => {
  const [columnStart, columnEnd] = columnProp;
  const [rowStart, rowEnd] = rowProp;

  return styled`
    |column {
      grid-column-start: ${columnStart};
      grid-column-end: ${columnEnd};
      grid-row-start: ${rowStart};
      grid-row-end: ${rowEnd};
    }
  `(
    <use.column>
      {children}
    </use.column>
  );
};

export default Grid;
