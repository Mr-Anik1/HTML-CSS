> SASS Basic

- variable in sass

```
$variableName:value;

<!-- Example -->
$primary-color: #333;
body {
  color: $primary-color;
}
```

- Partial File

\_file.scss

- Import

```
@import "file path";

<!-- Example -->
@import "./partial_scss_file/common";
```

- Mixin

```
<!-- create mixin code -->
@mixin fileName{
    ----
}

<!-- Example -->
@mixin border($width, $style, $color) {
    ------
}





<!-- Useing Mixine code -->
@include fileName;


<!-- Example -->
 @include border(10px, dotted, $common_color);
```
