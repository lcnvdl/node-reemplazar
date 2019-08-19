# node-reemplazar
Reemplazar is a simple tool that replaces strings in your files.

```bash
npm i -g reemplazar
```

# Example
```bash
reemplazar ./config.xml --output ./config.testing.xml --first --- id="com.my-company.my-app" --- for id="com.my-company.my-testing-app"  
```

config.xml
```xml
<?xml version='1.0' encoding='utf-8'?>
<widget android-versionCode="5" id="com.my-company.my-app">
</widget>
```

config.testing.xml
```xml
<?xml version='1.0' encoding='utf-8'?>
<widget android-versionCode="5" id="com.my-company.my-testing-app">
</widget>
```
