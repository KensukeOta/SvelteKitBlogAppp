import type { Actions } from "./$types";
import { fail } from "@sveltejs/kit";

export const actions: Actions = {
  default: async ({ request }) => {
    const values = await request.formData();

    const name = values.get("name");
    const email = values.get("email");

    console.log("ok");

    return fail(400, { name, email });
  }
};