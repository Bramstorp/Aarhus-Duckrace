import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51JP87PDHUHSggWLQyNTIWejkIgTc3FTzD226yYgJWW4hhruq07KDXlmZrGQUVHpEDfrdyvB1YNtZqif1OvnjxgNx00nn5BY6g8"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("noget gik galt med betaling");
    }
    return res.json();
  });
};
