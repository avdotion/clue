# Text Component

Component responsible for inputs.

# Example

```jsx
<Input
  value={password}
  label='Master Password'
  type='password'
  onChange={(value) => {changePassword(value);}}
/>
```

```jsx
<Input
  value={domainName}
  label='URL'
  onChange={(value) => {changeDomainName(value);}}
  buttonOnClick={() => {console.log('CLICK!');}}
/>
```