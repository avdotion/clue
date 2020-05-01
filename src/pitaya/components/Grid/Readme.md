# Building layout with Grid component

Cells are placed evenly across the grid with all margins taken into account
```jsx
<Grid size={12} gap='12px'>
  <Cell size={4}>
    content
  </Cell>
  <Cell size={2}>
    content
  </Cell>
  <Cell size={6}>
    content
  </Cell>
</Grid>
```

If a block does not fall into the grid, it is ignored, along with all the following
```jsx
<Grid size={4}>
  <Cell size={3}>
    content
  </Cell>
  <Cell size={2}>
    hidden content
  </Cell>
</Grid>
```

```jsx
<Grid size={12}>
  <Cell size={2}>
    content
  </Cell>
  <Cell size={8}>
    hidden content
  </Cell>
  <Cell size={1}>
    hidden content
  </Cell>
  <Cell size={1}>
    hidden content
  </Cell>
  <Cell size={1}>
    hidden content
  </Cell>
</Grid>
```

```jsx
<Grid size={12}>
  <Cell size={2}>
    content
  </Cell>
  <Cell size={12}>
    hidden content
  </Cell>
  <Cell size={1}>
    hidden content
  </Cell>
  <Cell size={1}>
    hidden content
  </Cell>
  <Cell size={1}>
    hidden content
  </Cell>
</Grid>
```

```jsx
<Grid size={12} gap='12px' wrap>
  <Cell size={2}>
    content
  </Cell>
  <Cell size={13}>
    hiddent content
  </Cell>
  <Cell size={1}>
    hiddent content
  </Cell>
  <Cell size={1}>
    hiddent content
  </Cell>
  <Cell size={1}>
    hiddent content
  </Cell>
</Grid>
```

If the `wrap` parameter is enabled, the cells are moved to the next line
```jsx
<Grid size={4} wrap>
  <Cell size={3}>
    content
  </Cell>
  <Cell size={2}>
    content
  </Cell>
  <Cell size={2}>
    content
  </Cell>
</Grid>
```
