import React from 'react';
import styled, {use} from 'reshadow/macro';

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

export const Grid = ({
  children,
  gap = '0',
  size: containerSize = 2,
  wrap = false,
}: GridProps) => {
  const columns: React.ReactElement<ColumnProps>[] = [];
  let columnPointer = 1;
  let rowPointer = 1;

  React.Children.forEach(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return;
    };

    const selfSize = child.props.size || DEFAULT_COLUMN_SIZE;

    if (selfSize > containerSize) {
      return;
    }

    if (columnPointer + selfSize > containerSize + 1) {
      if (!wrap) {
        return;
      }
      rowPointer += 1;
      columnPointer = 1;
    }

    columns.push(
      React.cloneElement(child, {
        columnProp: [columnPointer, columnPointer + selfSize],
        rowProp: wrap ? [rowPointer, rowPointer + 1] : undefined,
        key: index,
      })
    );
    columnPointer += selfSize;
  });

  return styled`
    |container {
      width: 100%;
      display: grid;
      grid-gap: ${gap};
      grid-template-columns: repeat(${containerSize}, 1fr);
    }
  `(
    <use.container>
      {columns}
    </use.container>
  );
};

type ColumnProps = {
  /** Inner content */
  children: React.ReactNode,
  /** Number of horizontal cells in grid */
  size?: number,
  columnProp?: [number, number],
  rowProp?: [number, number],
};

export const Column = ({
  children,
  size = DEFAULT_COLUMN_SIZE,
  columnProp = [0, 0],
  rowProp = [1, 2],
}: ColumnProps) => styled`
  |column {
    grid-column-start: ${columnProp[0]};
    grid-column-end: ${columnProp[1]};

    grid-row-start: ${rowProp[0]};
    grid-row-end: ${rowProp[1]};
  }
`(
  <use.column>
    {children}
  </use.column>
);
