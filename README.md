# Библиотека переиспользуемых утилит и компонентов

1. useLazyLoad
2. useWhyDidYouUpdate

# Порядок публикации 

1. Safety Checks:
```git pull```
```git status```
```npm ci```
```pnpm test```
2. Prepare the Release:
```pnpm build```
3. Update the Changelog
4. Update the Version Number:
```pnpm version => major | minor | patch```
4.1) Or by hand:
update version in package.json & package-lock.json
```git commit -am '2.0.0'```
```git tag v2.0.0```
5. Publish to npm:
```pnpm publish```
6. Publish to Git:
```git push```
```git push --tags```

7. Create a GitHub Release (optional)
