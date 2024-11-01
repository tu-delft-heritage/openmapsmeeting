---
title: Dinner
---

# Dinner preferences

Please use the form below to indicate your dinner preferences for Nov 5.

The restaurant:

> [Baardman](https://www.restaurantbaardman.nl/)<br>
> Theresiastraat 18A<br>
> The Hague<br>

Your preferences:

```js
const language = view(
  Inputs.radio(["English", "Dutch"], {
    label: "Menu language",
    value: "English",
  })
);
```

```js
const email = view(
  Inputs.email({
    label: "Email *",
    placeholder: "Please enter your registration email",
  })
);
const starterOptions = {
  Dutch: [
    ["Koningsoesterzwam, witte wijn,romesco (vega)", "Vega"],
    ["Roodbaars, paprika, waterkers", "Vis"],
    ["Lamskotelet, courgette, appel, perzik", "Vlees"],
  ],
  English: [
    ["King oyster mushroom, white wine, romesco (vegetarian)", "Vega"],
    ["Redfish, bell pepper, watercress", "Vis"],
    ["Lamb chop, zucchini, apple, peach", "Vlees"],
  ],
};
const mainOptions = {
  Dutch: [
    ["Aubergine, kikkererwt, spicy yoghurt, tomaat (vega)", "Vega"],
    ["Zeebaars, aardappel, cavasaus, groene asperge", "Vis"],
    ["Entrecote, Stroganoff, Aardappel, Knolselderij", "Vlees"],
  ],
  English: [
    ["Eggplant, chickpea, spicy yoghurt, tomato (vegetarian)", "Vega"],
    ["Sea bass, potato, cava sauce, green asparagus", "Vis"],
    ["Entrecote, Stroganoff, Potato, Celeriac", "Vlees"],
  ],
};
const dessertOptions = {
  Dutch: [
    ["Aardbeien, meringue, vanilleijs, framboossabbayon", "Meringue"],
    ["Dumped cheesecake, rabarber, sinaasappel", "Cheesecake"],
    ["Geen dessert", "None"],
  ],
  English: [
    [
      "Strawberries, meringue, vanilla ice cream, raspberry sabayon",
      "Meringue",
    ],
    ["Dumped cheesecake, rhubarb, orange", "Cheesecake"],
    ["No dessert", "None"],
  ],
};
const firstOption = {
  Dutch: ["Selecteer een gerecht...", null],
  English: ["Select a course...", null],
};
const starter = view(
  Inputs.select(new Map([firstOption[language], ...starterOptions[language]]), {
    label: "Starter *",
  })
);
const main = view(
  Inputs.select(new Map([firstOption[language], ...mainOptions[language]]), {
    label: "Main *",
  })
);
const dessert = view(
  Inputs.select(new Map([firstOption[language], ...dessertOptions[language]]), {
    label: "Dessert *",
  })
);
const dinnerComments = view(
  Inputs.textarea({
    label: "Comments",
    placeholder:
      "You have already shared your dietary wishes when registering, which we will pass on to the restaurant. Please leave additional comments here",
  })
);
```

```js
const input = {
  email,
  starter,
  main,
  dessert,
  dinnerComments,
};

const complete = email && starter && main && dessert;
const result = Mutable(null);

display(
  Inputs.button("Submit", {
    reduce: () => submitForm(input),
  })
);

const submitForm = async (data) => {
  result.value = "clicked";
  if (complete) {
    fetch("https://dinner.openmapsmeeting.nl", {
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
```

```js
if (result === "clicked") {
  display(html`Loading...`);
} else if (result === "incomplete") {
  display(
    html`
      <div label="Incomplete" class="warning">
        <p>Please enter your email address and dinner preferences.</p>
      </div>
    `
  );
} else if (result === "error") {
  display(
    html`
      <div label="Error" class="caution">
        <p>
          Something went wrong while submitting your preferences. Please check
          your internet connection and try again by clicking the submit button
          above. In case of repeated errors, please inform us about your
          preferences by email.
        </p>
      </div>
    `
  );
} else if (result === "success") {
  display(
    html`
      <div label="Thank you" class="tip">
        <p>Your dinner preferences were submitted successfully.</p>
      </div>
    `
  );
}
```
