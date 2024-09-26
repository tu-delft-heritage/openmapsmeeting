---
title: Registration
---

# Contact

Please get in touch with us by filling in the form below. You can also find our details on our respective employee pages linked under [practical information](/practical#organisers).

```js
const name = view(
  Inputs.text({ label: "Name *", placeholder: "Please enter your name" })
);

const email = view(
  Inputs.email({ label: "Email *", placeholder: "Please enter your email" })
);

const subject = view(
  Inputs.text({ label: "Subject", placeholder: "Please enter the subject" })
);

const message = view(
  Inputs.textarea({
    label: "Message *",
    placeholder: "Please enter your message here",
  })
);
```


```js


const input = {
  name,
  email,
  subject,
  message
};

const complete = name && email && message ? true : false;

const result = Mutable(null);

const submitForm = async (data) => {
  result.value = "clicked";
  if (complete) {
    fetch("https://contact.openmapsmeeting.nl", {
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
if (result === "clicked") {
  display(html`Loading...`);
} else if (result === "incomplete") {
  display(
    html`
      <div label="Incomplete" class="warning">
        <p>
          Please complete the fields with an asterisk.
        </p>
      </div>
    `
  );
} else if (result === "error") {
  display(
    html`
      <div label="Error" class="caution">
        <p>
          There was an error, please check your internet connection and try to submit the form again.
        </p>
      </div>
    `
  );
} else if (result === "success") {
  display(
    html`
      <div label="Thank you" class="tip">
        <p>
          Your message was submitted successfully! We'll get back to you shortly.
        </p>
      </div>
    `
  );
}
```