{
  ("use strict");

  const data = [
    {
      title: "Work",
      timeframes: {
        daily: {
          current: 5,
          previous: 7,
        },
        weekly: {
          current: 32,
          previous: 36,
        },
        monthly: {
          current: 103,
          previous: 128,
        },
      },
    },
    {
      title: "Play",
      timeframes: {
        daily: {
          current: 1,
          previous: 2,
        },
        weekly: {
          current: 10,
          previous: 8,
        },
        monthly: {
          current: 23,
          previous: 29,
        },
      },
    },
    {
      title: "Study",
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 7,
        },
        monthly: {
          current: 13,
          previous: 19,
        },
      },
    },
    {
      title: "Exercise",
      timeframes: {
        daily: {
          current: 1,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 5,
        },
        monthly: {
          current: 11,
          previous: 18,
        },
      },
    },
    {
      title: "Social",
      timeframes: {
        daily: {
          current: 1,
          previous: 3,
        },
        weekly: {
          current: 5,
          previous: 10,
        },
        monthly: {
          current: 21,
          previous: 23,
        },
      },
    },
    {
      title: "Self Care",
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 2,
          previous: 2,
        },
        monthly: {
          current: 7,
          previous: 11,
        },
      },
    },
  ];

  let links = document.querySelectorAll(".link");
  let theme = document.querySelectorAll(".theme");
  let hours1 = document.querySelectorAll(".hours1");

  let time = document.querySelectorAll(".time");

  for (let i = 0; i < data.length; i++) {
    console.log(data[i].title);
    console.log("..", theme[i]);
    theme[i].innerHTML = data[i].title;
    hours1[i].innerHTML = data[i].timeframes.daily.current;
  }

  for (let l = 0; l < links.length; l++) {
    links[l].addEventListener("click", (e) => {
      let active = document.querySelector(".active");
      if (active) active.classList.remove("active");
      e.target.classList.add("active");

      for (let i = 0; i < data.length; i++) {
        if (links[l].innerHTML === "Daily") {
          time[i].innerHTML = "Yesterday";
          hours1[i].innerHTML = data[i].timeframes.daily.current;
        }
        if (links[l].innerHTML === "Weekly") {
          time[i].innerHTML = "Last Week";
          hours1[i].innerHTML = data[i].timeframes.weekly.current;
        }
        if (links[l].innerHTML === "Monthly") {
          time[i].innerHTML = "Last Month";
          hours1[i].innerHTML = data[i].timeframes.monthly.current;
        }
      }
    });
  }
}
