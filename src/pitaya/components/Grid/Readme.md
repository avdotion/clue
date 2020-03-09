# Building layout with Grid component

Columns are placed evenly across the grid with all margins taken into account
```jsx
<Grid size={12} gap='12px'>
  <Column size={4}>
    content
  </Column>
  <Column size={2}>
    content
  </Column>
  <Column size={6}>
    content
  </Column>
</Grid>
```

If a block does not fall into the grid, it is ignored, along with all the following
```jsx
<Grid size={4}>
  <Column size={3}>
    content
  </Column>
  <Column size={2}>
    hidden content
  </Column>
</Grid>
```

```jsx
<Grid size={12}>
  <Column size={2}>
    content
  </Column>
  <Column size={8}>
    hidden content
  </Column>
  <Column size={1}>
    hidden content
  </Column>
  <Column size={1}>
    hidden content
  </Column>
  <Column size={1}>
    hidden content
  </Column>
</Grid>
```

```jsx
<Grid size={12}>
  <Column size={2}>
    content
  </Column>
  <Column size={12}>
    hidden content
  </Column>
  <Column size={1}>
    hidden content
  </Column>
  <Column size={1}>
    hidden content
  </Column>
  <Column size={1}>
    hidden content
  </Column>
</Grid>
```

```jsx
<Grid size={12} gap='12px' wrap>
  <Column size={2}>
    content
  </Column>
  <Column size={13}>
    hiddent content
  </Column>
  <Column size={1}>
    hiddent content
  </Column>
  <Column size={1}>
    hiddent content
  </Column>
  <Column size={1}>
    hiddent content
  </Column>
</Grid>
```

If the `wrap` parameter is enabled, the columns are moved to the next line
```jsx
<Grid size={4} wrap>
  <Column size={3}>
    content
  </Column>
  <Column size={2}>
    content
  </Column>
  <Column size={2}>
    content
  </Column>
</Grid>
```
