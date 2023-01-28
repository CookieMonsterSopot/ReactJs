import React from "react";



export const Form = () => {
  return (
    <form id="contact-form">
      <input type="text" placeholder="first name" />
      <input type="text" placeholder="last name" />
      <input type="text" placeholder="zip code and city" />
      <input type="text" placeholder="address" />
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
