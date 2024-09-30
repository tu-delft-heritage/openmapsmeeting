---
title: Registration
---

# Registration

Please use the form below to register for the Open Maps Meeting. Fields followed by an asterisk \* are required.

<p class="orange">Registration will close on Friday October 25.</p>

```js
const name = view(
  Inputs.text({ label: "Name *", placeholder: "Please enter your name" })
);

const email = view(
  Inputs.email({ label: "Email *", placeholder: "Please enter your email" })
);

const affiliation = view(
  Inputs.text({
    label: "Affiliation",
    placeholder: "Please enter your affiliation",
  })
);

const pespectiveOptions = [
  "Researcher",
  "Educator",
  "Curator",
  "Developer",
  "Other",
];
```

_We would like to learn more about your background, but this is optional for registration._

```js
const background = view(
  Inputs.checkbox(pespectiveOptions, { label: "Background" })
);

const interests = view(
  Inputs.textarea({
    label: "Interests",
    placeholder:
      "Please enter more information about your interests if you like",
  })
);
```

_Please indicate below on which days you would like to attend the meeting. Day 1 (November 5) is dedicated to expert sessions, with a maximum of 30 participants. Day 2 (November 6) is for plenary outreach and has a maximum of 60 participants._

```js
if (stats) {
  if (stats.dayOne >= 30 && stats.dayTwo >= 60) {
    display(html`<p class="orange">
      Both days have been booked.<br />
      You can still sign up to be added to the waiting list.
    </p>`);
  } else if (stats.dayTwo >= 60) {
    display(html`<p class="orange">
      Day 2 has been fully booked.<br />
      You can still sign up to be added to the waiting list.
    </p>`);
  } else if (stats.dayOne >= 30) {
    display(html`<p class="orange">
      Day 1 has been fully booked.<br />
      You can still sign up to be added to the waiting list.
    </p>`);
  }
}
```

```js
const stats = await fetch("https://stats.openmapsmeeting.nl")
  .then((resp) => {
    if (resp.ok) {
      return resp.json();
    } else return null;
  })
  .catch(() => null);

const waitingList = stats && stats.dayOne >= 30 && stats.dayTwo >= 60;

const attendanceOptions = [
  [
    `Day 1 ${
      stats
        ? `(${stats.dayOne >= 30 ? "No" : 30 - stats.dayOne} places left)`
        : ""
    }`,
    "1",
  ],
  [
    `Day 2 ${
      stats
        ? `(${stats.dayTwo >= 60 ? "No" : 60 - stats.dayTwo} places left)`
        : ""
    }`,
    "2",
  ],
  ["Both days", "Both"],
];

const attendance = view(
  Inputs.radio(new Map(attendanceOptions), { label: "Attendance *" })
);
```

```js
const disabled = !attendance || attendance === "2" ? true : false;

const suggestions = view(
  Inputs.textarea({
    label: "Ideas",
    placeholder:
      "Please enter your ideas for the afternoon working session on day 1",
    disabled,
  })
);

const dinner = view(
  Inputs.checkbox(["Yes"], {
    label: "I would like to join for dinner on day 1",
    valueof: () => true,
    disabled,
  })
);
```

```js
const diet = view(
  Inputs.text({
    label: "Dietary wishes",
    placeholder: "Please enter your dietary wishes",
    disabled: !dinner[0],
  })
);
```

_Would you like to share more ideas or do you have other comments? Please enter below._

```js
const comments = view(
  Inputs.textarea({
    label: "Other comments",
    placeholder: "Please enter your comments here",
  })
);
```

_Please select the following options to share information with other participants and to be kept informed. Not required for registration._

```js
const share = view(
  Inputs.checkbox(["Yes"], {
    label:
      "My name, email, affiliation, background and interests can be shared with other participants",
    valueof: () => true,
  })
);

const stayInformed = view(
  Inputs.checkbox(["Yes"], {
    label:
      "I would like to be kept informed about the meeting's outcomes and receive more information about the projects presented",
    valueof: () => true,
  })
);
```

```js
const input = {
  name,
  email,
  affiliation,
  background: background.join(", "),
  interests,
  attendance,
  suggestions,
  dinner: dinner[0] || false,
  diet,
  comments,
  share: share[0] || false,
  stayInformed: stayInformed[0] || false,
  submitted: Date.now(),
  waitingList,
};

const complete = name && email && attendance ? true : false;

const result = Mutable(null);

const submitForm = async (data) => {
  result.value = "clicked";
  if (complete) {
    fetch("https://register.openmapsmeeting.nl", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          result.value = "success";
        } else {
          result.value = "error";
        }
      })
      .catch(() => {
        result.value = "error";
      });
  } else {
    result.value = "incomplete";
  }
};

display(
  Inputs.button("Submit", {
    reduce: () => submitForm(input),
  })
);
```

```js
import confetti from "npm:canvas-confetti";

const shapes = await FileAttachment("data/shapes.json").json();
const colors = ["#2873ab", "#ed1d33"];

if (result === "clicked") {
  display(html`Loading...`);
} else if (result === "incomplete") {
  display(
    html`
      <div label="Incomplete" class="warning">
        <p>
          The form is not complete and was not submitted. Please complete the
          fields with an asterisk and click submit again. In case of questions,
          please contact
          <a href="mailto:V.Baptist@tudelft.nl">Vincent Baptist</a>.
        </p>
      </div>
    `
  );
} else if (result === "error") {
  display(
    html`
      <div label="Error" class="caution">
        <p>
          Something went wrong while sending your registration. Please check
          your internet connection and try again by clicking the submit button
          above. In case of repeated errors, please contact
          <a href="mailto:V.Baptist@tudelft.nl">Vincent Baptist</a>.
        </p>
      </div>
    `
  );
} else if (result === "success") {
  confetti({
    disableForReducedMotion: true,
    shapes,
    scalar: 5,
    ticks: 300,
    spread: 120,
    colors,
  });
  display(
    html`
      <div label="Thank you" class="tip">
        <p>
          Your registration was successful! We will be in touch a few weeks
          before the event. If you have any question in the meantime, please
          contact <a href="mailto:V.Baptist@tudelft.nl">Vincent Baptist</a>.
        </p>
      </div>
    `
  );
}
```

_The information provided is used exclusively for the organization and execution of the Open Maps Meeting. We do not share or sell your information to third parties, and ensure that it is stored securely. After the event, the information is not stored longer than strictly necessary. Please [get in touch](/contact) in case of questions._

<style>
  .orange {
    color: #FF7415
  }
</style>
