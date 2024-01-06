# Basic JavaScript Projects

## Project Link🔖
[Click Here](https://stackblitz.com/~/github.com/Nehal-Adil/JavaScript-Projects)

# Solution Code

## Project 1
```javascript

const buttons = document.querySelectorAll(".button");

const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);

    // if (e.target.id === "grey") {
    //   body.style.backgroundColor = e.target.id;
    // }

    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id;
        break;
      case "white":
        body.style.backgroundColor = e.target.id;
        break;
      case "blue":
        body.style.backgroundColor = e.target.id;
        break;

      default:
        break;
    }
  });
});

```

# Project 2
```javascript

```

# Project 3
```javascript

```

# Project 4
```javascript

```

# Project 5
```javascript
console.log("Keyboard");

const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
        <div class = "color">
        <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
        </div>
    `;
});

```

# Project 6
```javascript
console.log("Unlimited Colors");

// generate a random color
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(Math.floor(Math.random() * 16));
console.log(randomColor());

let intervalId;

const startChangingColor = function () {
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }

  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 500);
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);

```